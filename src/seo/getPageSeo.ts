import type { Language } from '../i18n/translations';
import { seoRoutes, type ProductSlug } from './seoRoutes';

function isProductSlug(slug: string): slug is ProductSlug {
  return slug in seoRoutes.products;
}

function normalizePathname(pathname: string): string {
  const withoutTrailing = pathname.replace(/\/+$/, '') || '/';
  const base =
    (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL?.replace(/\/+$/, '')) ?? '';
  if (base && withoutTrailing.startsWith(base)) {
    const rest = withoutTrailing.slice(base.length);
    return rest ? (rest.startsWith('/') ? rest : `/${rest}`) : '/';
  }
  return withoutTrailing;
}

export interface GetPageSeoOptions {
  /** Localized news headline for `/news/:slug` */
  newsArticleTitle?: string;
}

export function getPageSeo(pathname: string, lang: Language, options?: GetPageSeoOptions) {
  const path = normalizePathname(pathname);

  if (path === '/' || path === '') {
    return seoRoutes.home[lang];
  }
  if (path === '/about-us') {
    return seoRoutes.about[lang];
  }
  if (path === '/platform-brochure') {
    return seoRoutes.platformBrochure[lang];
  }

  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    if (isProductSlug(slug)) return seoRoutes.products[slug][lang];
    return seoRoutes.notFound[lang];
  }

  const newsMatch = path.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const titleFromArticle = options?.newsArticleTitle?.trim();
    if (titleFromArticle) {
      return {
        title: `${titleFromArticle}${seoRoutes.newsTitleSuffix[lang]}`,
        description: seoRoutes.newsFallbackDescription[lang]
      };
    }
    return seoRoutes.notFound[lang];
  }

  return seoRoutes.home[lang];
}

export function setDocumentSeo(meta: { title: string; description: string }) {
  if (typeof document === 'undefined') return;
  document.title = meta.title;

  let el = document.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'description');
    document.head.appendChild(el);
  }
  el.setAttribute('content', meta.description);

  const setOg = (property: string, content: string) => {
    let og = document.querySelector(`meta[property="${property}"]`);
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', property);
      document.head.appendChild(og);
    }
    og.setAttribute('content', content);
  };

  setOg('og:title', meta.title);
  setOg('og:description', meta.description);
}
