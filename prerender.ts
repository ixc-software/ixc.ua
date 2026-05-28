import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import newsData from './src/newsData.json' assert { type: 'json' };
import { getPageSeo, type PageSeoMeta } from './src/seo/getPageSeo.ts';
import { getNewsOgImage } from './src/seo/siteMeta.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectSeoFull(html: string, meta: PageSeoMeta): string {
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  const url = escapeAttr(meta.url);
  const image = escapeAttr(meta.image);
  const ogType = escapeAttr(meta.ogType);
  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`);
  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${title}"`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${desc}"`
  );
  out = out.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  out = out.replace(/<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${ogType}"`);
  out = out.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${image}"`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${title}"`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${desc}"`
  );
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${image}"`
  );
  if (meta.imageAlt) {
    const alt = escapeAttr(meta.imageAlt);
    if (out.includes('property="og:image:alt"')) {
      out = out.replace(/<meta property="og:image:alt" content="[^"]*"/, `<meta property="og:image:alt" content="${alt}"`);
    } else {
      out = out.replace(
        /<meta property="og:image" content="[^"]*"/,
        `<meta property="og:image" content="${image}" />\n    <meta property="og:image:alt" content="${alt}"`
      );
    }
  }
  return out;
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routes = [
  '/',
  '/about-us',
  '/privacy-policy',
  '/platform-brochure',
  '/products/softswitch',
  '/products/white-black-list',
  '/products/monitoring-tool',
  '/products/ixc-autotester',
  '/products/sms-platform',
  '/products/google-api',
  '/products/technical-specifications',
  ...newsData.map((n) => `/news/${n.slug}`)
];

for (const route of routes) {
  const appHtml = render(route);
  let html = template.replace(`<!--app-html-->`, appHtml);

  let pageMeta = getPageSeo(route, 'en');
  if (route.startsWith('/news/')) {
    const slug = route.slice('/news/'.length);
    const article = newsData.find((n) => n.slug === slug);
    if (article) {
      pageMeta = getPageSeo(route, 'en', {
        newsArticleTitle: article.en.title,
        newsArticleImage: getNewsOgImage(article)
      });
    }
  }
  html = injectSeoFull(html, pageMeta);

  const filePath =
    route === '/' ? 'dist/index.html' : `dist${route}/index.html`;

  const dirPath = path.dirname(toAbsolute(filePath));
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`Prerendered: ${route} → ${filePath}`);
}

console.log('Prerender completed successfully.');
