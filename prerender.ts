import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import newsData from './src/newsData';
import { blogPosts, getLocalizedPost, getPostPath } from './src/content/blogPosts.ts';
import { getPageSeo, hreflangAlternates, type PageSeoMeta } from './src/seo/getPageSeo.ts';
import { getNewsOgImage, SITE_ORIGIN } from './src/seo/siteMeta.ts';
import { LEGACY_REDIRECTS, writeLegacyRedirects, buildRedirectHtml } from './legacyRedirects.ts';
import type { Language } from './src/i18n/translations.ts';
import { localizePath } from './src/i18n/localePath.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

/** Escape so the JSON-LD payload can't terminate the <script> element. */
function jsonLdSafe(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function injectSeoFull(html: string, meta: PageSeoMeta): string {
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  const url = escapeAttr(meta.url);
  const canonical = escapeAttr(meta.canonical);
  const image = escapeAttr(meta.image);
  const ogType = escapeAttr(meta.ogType);
  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`);
  out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${canonical}"`);
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

  // Page-specific structured data
  const jsonLdScripts = meta.jsonLd
    .map((block) => `<script type="application/ld+json">${jsonLdSafe(block)}</script>`)
    .join('\n    ');
  out = out.replace('<!--seo-jsonld-->', jsonLdScripts);

  out = out.replace(/<html lang="[^"]*"/, `<html lang="${escapeAttr(meta.htmlLang)}"`);
  const hreflangTags = meta.hreflang
    .map(
      (alt) =>
        `<link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" data-hreflang="true" />`
    )
    .join('\n    ');
  out = out.replace('</head>', `    ${hreflangTags}\n  </head>`);

  return out;
}

/**
 * Canonical URL is the no-trailing-slash form (matches sitemap + siteMeta).
 * Full HTML → `{route}.html` (200 at /about-us).
 * Trailing-slash path → `{route}/index.html` redirects to canonical (avoids GSC duplicate alternates).
 */
function writeRouteArtifacts(route: string, html: string): void {
  if (route === '/') {
    fs.writeFileSync(toAbsolute('dist/index.html'), html);
    console.log(`Prerendered: ${route} → dist/index.html`);
    return;
  }

  const segments = route.replace(/^\//, '').split('/');
  const redirectHtml = buildRedirectHtml(route);

  const indexPath = `dist/${segments.join('/')}/index.html`;
  fs.mkdirSync(path.dirname(toAbsolute(indexPath)), { recursive: true });
  fs.writeFileSync(toAbsolute(indexPath), redirectHtml);
  console.log(`Prerendered: ${route} → ${indexPath} (redirect to canonical)`);

  const fileName = `${segments[segments.length - 1]}.html`;
  const parentDir = segments.length > 1 ? `dist/${segments.slice(0, -1).join('/')}` : 'dist';
  const siblingPath = `${parentDir}/${fileName}`;
  fs.mkdirSync(toAbsolute(parentDir), { recursive: true });
  fs.writeFileSync(toAbsolute(siblingPath), html);
  console.log(`Prerendered: ${route} → ${siblingPath} (canonical)`);
}

function writeRedirectPair(from: string, to: string): void {
  const html = buildRedirectHtml(to);
  const segments = from.replace(/^\//, '').split('/');
  const indexPath = `dist/${segments.join('/')}/index.html`;
  fs.mkdirSync(path.dirname(toAbsolute(indexPath)), { recursive: true });
  fs.writeFileSync(toAbsolute(indexPath), html);
  console.log(`Redirect: ${from} → ${indexPath} → ${to}`);

  const fileName = `${segments[segments.length - 1]}.html`;
  const parentDir = segments.length > 1 ? `dist/${segments.slice(0, -1).join('/')}` : 'dist';
  const siblingPath = `${parentDir}/${fileName}`;
  fs.mkdirSync(toAbsolute(parentDir), { recursive: true });
  fs.writeFileSync(toAbsolute(siblingPath), html);
  console.log(`Redirect: ${from} → ${siblingPath} → ${to}`);
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const staticRoutes = [
  '/',
  '/about-us',
  '/ixc-club',
  '/privacy-policy',
  '/platform-brochure',
  '/blog',
  '/products/softswitch',
  '/products/ixc-recording',
  '/products/ai-automation',
  '/products/white-black-list',
  '/products/monitoring-tool',
  '/products/ixc-autotester',
  '/products/sms-platform',
  '/products/google-api',
  '/products/technical-specifications'
];

const blogRoutes = blogPosts.map((p) => getPostPath(p));
const newsRoutes = newsData.map((n) => `/news/${n.slug}`);
const routes = [...staticRoutes, ...blogRoutes, ...newsRoutes];

const pageLangs: Language[] = ['en', 'ru', 'uk', 'zh'];

function newsTitle(
  article: { en: { title: string }; [key: string]: { title?: string } | unknown },
  lang: Language
): string {
  const loc = article[lang] as { title?: string } | undefined;
  return loc?.title || article.en.title;
}

for (const lang of pageLangs) {
  for (const route of routes) {
    const localized = localizePath(route, lang);
    const appHtml = render(localized);
    let html = template.replace(`<!--app-html-->`, appHtml);

    let pageMeta = getPageSeo(route, lang);
    if (route.startsWith('/news/')) {
      const slug = route.slice('/news/'.length);
      const article = newsData.find((n) => n.slug === slug);
      if (article) {
        pageMeta = getPageSeo(route, lang, {
          newsArticleTitle: newsTitle(article, lang),
          newsArticleImage: getNewsOgImage(article)
        });
      }
    } else {
      const post = blogPosts.find((p) => getPostPath(p) === route);
      if (post) {
        const loc = getLocalizedPost(post, lang);
        pageMeta = getPageSeo(route, lang, {
          blogPost: {
            title: loc.title,
            description: loc.description,
            image: loc.image,
            imageAlt: loc.title,
            datePublished: loc.date,
            dateModified: loc.updated,
            author: loc.author,
            faq: loc.faq?.map((f) => ({ q: f.q, a: f.a }))
          }
        });
      }
    }
    html = injectSeoFull(html, pageMeta);
    writeRouteArtifacts(localized, html);
  }
}

for (const route of routes) {
  const from = route === '/' ? '/en' : `/en${route}`;
  writeRedirectPair(from, route);
}

// ---------------------------------------------------------------------------
// sitemap.xml + robots.txt — generated from the same route list (single source)
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  unprefixed: string;
}

function entry(
  unprefixed: string,
  lang: Language,
  lastmod: string,
  changefreq: string,
  priority: string
): SitemapEntry {
  const route = localizePath(unprefixed, lang);
  const loc = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;
  return { loc, lastmod, changefreq, priority, unprefixed };
}

const staticPriority: Record<string, [string, string]> = {
  '/': ['weekly', '1.0'],
  '/about-us': ['monthly', '0.8'],
  '/ixc-club': ['monthly', '0.75'],
  '/privacy-policy': ['yearly', '0.3'],
  '/platform-brochure': ['monthly', '0.7'],
  '/blog': ['weekly', '0.8'],
  '/products/softswitch': ['monthly', '0.9']
};

const sitemapEntries: SitemapEntry[] = [];
for (const lang of pageLangs) {
  for (const route of staticRoutes) {
    const [changefreq, priority] = staticPriority[route] ?? ['monthly', '0.7'];
    sitemapEntries.push(entry(route, lang, today, changefreq, priority));
  }
  for (const post of blogPosts) {
    sitemapEntries.push(entry(getPostPath(post), lang, post.updated ?? post.date, 'monthly', '0.7'));
  }
  for (const n of newsData) {
    sitemapEntries.push(entry(`/news/${n.slug}`, lang, n.date ?? today, 'monthly', '0.6'));
  }
}

function sitemapUrlXml(e: SitemapEntry): string {
  const alts = hreflangAlternates(e.unprefixed)
    .map(
      (a) =>
        `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`
    )
    .join('\n');
  return `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
${alts}
  </url>`;
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.map(sitemapUrlXml).join('\n')}
</urlset>
`;
fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
console.log(`Generated: dist/sitemap.xml (${sitemapEntries.length} URLs)`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt);
console.log('Generated: dist/robots.txt');

writeLegacyRedirects(toAbsolute);
console.log(`Generated: ${LEGACY_REDIRECTS.length} legacy redirect(s)`);

console.log('Prerender completed successfully.');
