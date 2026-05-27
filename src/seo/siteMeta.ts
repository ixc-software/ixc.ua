export const SITE_ORIGIN = 'https://ixc.ua';

/** Default share image when a page has no dedicated OG image. */
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/logo.png`;

export function getPageUrl(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

/** OG/Twitter preview image — always the on-site asset, same as the article hero. */
export function getNewsOgImage(article: { image?: string; local_image?: string }): string | undefined {
  if (article.local_image) {
    const path = article.local_image.startsWith('/') ? article.local_image : `/${article.local_image}`;
    return `${SITE_ORIGIN}${path}`;
  }
  if (article.image?.startsWith('http')) return article.image;
  return undefined;
}
