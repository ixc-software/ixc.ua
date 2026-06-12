import fs from 'node:fs';
import path from 'node:path';
import { SITE_ORIGIN } from './src/seo/siteMeta.ts';

/** Old ixc.ua paths (pre-/products and pre-/news prefix) → current site URLs. */
export const LEGACY_REDIRECTS: ReadonlyArray<{ from: string; to: string }> = [
  // Homepage sections
  { from: '/contact-us', to: '/#get-in-touch' },
  { from: '/news', to: '/#news' },

  // Products (old top-level paths)
  { from: '/softswitch', to: '/products/softswitch' },
  { from: '/google-api', to: '/products/google-api' },
  { from: '/sms-platform', to: '/products/sms-platform' },
  { from: '/white-black-list', to: '/products/white-black-list' },
  { from: '/monitoring-tool', to: '/products/monitoring-tool' },
  { from: '/ixc-autotester', to: '/products/ixc-autotester' },

  // News articles (old paths without /news/ prefix)
  { from: '/media-ip-added-to-cdr', to: '/news/media-ip-added-to-cdr' },
  { from: '/white-black-list-module-imporved', to: '/news/white-black-list-module-imporved' },
  { from: '/company-logo-in-rn', to: '/news/company-logo-in-rn' },
  { from: '/pcap-of-any-call', to: '/news/pcap-of-any-call' },
  { from: '/sip-trace-from-web-1', to: '/news/sip-trace-from-web-1' },
  { from: '/ixc-softswitch-5-7-1-released', to: '/news/ixc-softswitch-5-7-1-released' },
  { from: '/last-price-change', to: '/news/last-price-change' },
  { from: '/keep-your-system-clean', to: '/news/keep-your-system-clean' },
  { from: '/meet-ixc-at-itw-2019', to: '/news/meet-ixc-at-itw-2019' }
];

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function canonicalForTarget(target: string): string {
  if (target.startsWith('/#')) return `${SITE_ORIGIN}${target}`;
  return `${SITE_ORIGIN}${target.startsWith('/') ? target : `/${target}`}`;
}

function buildRedirectHtml(target: string): string {
  const href = escapeAttr(target);
  const canonical = escapeAttr(canonicalForTarget(target));
  const label = target.startsWith('/#') ? `Homepage${target}` : target;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=${href}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="noindex">
  <title>Redirecting…</title>
  <script>location.replace("${href}")</script>
</head>
<body>
  <p><a href="${href}">Continue to ${escapeAttr(label)}</a></p>
</body>
</html>
`;
}

/**
 * Write static redirect pages for legacy URLs (both path.html and path/index.html)
 * so GitHub Pages serves them without a trailing-slash 301 first.
 */
export function writeLegacyRedirects(toAbsolute: (p: string) => string): void {
  for (const { from, to } of LEGACY_REDIRECTS) {
    const html = buildRedirectHtml(to);
    const segments = from.replace(/^\//, '').split('/');
    const indexPath = `dist/${segments.join('/')}/index.html`;
    fs.mkdirSync(path.dirname(toAbsolute(indexPath)), { recursive: true });
    fs.writeFileSync(toAbsolute(indexPath), html);

    const fileName = `${segments[segments.length - 1]}.html`;
    const parentDir = segments.length > 1 ? `dist/${segments.slice(0, -1).join('/')}` : 'dist';
    const siblingPath = `${parentDir}/${fileName}`;
    fs.mkdirSync(toAbsolute(parentDir), { recursive: true });
    fs.writeFileSync(toAbsolute(siblingPath), html);

    console.log(`Legacy redirect: ${from} → ${to}`);
  }
}
