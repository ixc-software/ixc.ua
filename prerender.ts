import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import newsData from './src/newsData.json' assert { type: 'json' };
import { getPageSeo } from './src/seo/getPageSeo.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectSeoFull(html: string, meta: { title: string; description: string }): string {
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
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
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${title}"`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${desc}"`
  );
  return out;
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routes = [
  '/',
  '/about-us',
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
      pageMeta = getPageSeo(route, 'en', { newsArticleTitle: article.en.title });
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
