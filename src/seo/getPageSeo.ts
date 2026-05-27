import type { Language } from '../i18n/translations';
import { DEFAULT_OG_IMAGE, getPageUrl } from './siteMeta';
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

type SeoPair = { title: string; description: string };

export interface PageSeoMeta {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt?: string;
  ogType: 'website' | 'article';
}

export interface GetPageSeoOptions {
  /** Localized news headline for `/news/:slug` */
  newsArticleTitle?: string;
  /** Absolute OG image URL for a news article */
  newsArticleImage?: string;
}

function withDefaults(
  pair: SeoPair,
  path: string,
  overrides?: Partial<Pick<PageSeoMeta, 'image' | 'imageAlt' | 'ogType'>>
): PageSeoMeta {
  return {
    title: pair.title,
    description: pair.description,
    url: getPageUrl(path),
    image: overrides?.image ?? DEFAULT_OG_IMAGE,
    imageAlt: overrides?.imageAlt,
    ogType: overrides?.ogType ?? 'website'
  };
}

export function getPageSeo(pathname: string, lang: Language, options?: GetPageSeoOptions): PageSeoMeta {
  const path = normalizePathname(pathname);

  if (path === '/' || path === '') {
    return withDefaults(seoRoutes.home[lang], path);
  }
  if (path === '/about-us') {
    return withDefaults(seoRoutes.about[lang], path);
  }
  if (path === '/platform-brochure') {
    return withDefaults(seoRoutes.platformBrochure[lang], path);
  }

  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    if (isProductSlug(slug)) return withDefaults(seoRoutes.products[slug][lang], path);
    return withDefaults(seoRoutes.notFound[lang], path);
  }

  const newsMatch = path.match(/^\/news\/([^/]+)$/);
  if (newsMatch) {
    const titleFromArticle = options?.newsArticleTitle?.trim();
    if (titleFromArticle) {
      return withDefaults(
        {
          title: `${titleFromArticle}${seoRoutes.newsTitleSuffix[lang]}`,
          description: seoRoutes.newsFallbackDescription[lang]
        },
        path,
        {
          image: options?.newsArticleImage ?? DEFAULT_OG_IMAGE,
          imageAlt: titleFromArticle,
          ogType: 'article'
        }
      );
    }
    return withDefaults(seoRoutes.notFound[lang], path);
  }

  return withDefaults(seoRoutes.home[lang], path);
}

export function setDocumentSeo(meta: PageSeoMeta) {
  if (typeof document === 'undefined') return;
  document.title = meta.title;

  const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`${selector}[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('meta', 'name', 'description', meta.description);
  setMeta('meta', 'property', 'og:title', meta.title);
  setMeta('meta', 'property', 'og:description', meta.description);
  setMeta('meta', 'property', 'og:url', meta.url);
  setMeta('meta', 'property', 'og:type', meta.ogType);
  setMeta('meta', 'property', 'og:image', meta.image);
  setMeta('meta', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta', 'name', 'twitter:title', meta.title);
  setMeta('meta', 'name', 'twitter:description', meta.description);
  setMeta('meta', 'name', 'twitter:image', meta.image);

  if (meta.imageAlt) {
    setMeta('meta', 'property', 'og:image:alt', meta.imageAlt);
  }
}
