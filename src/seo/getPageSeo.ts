import type { Language } from '../i18n/translations';
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, getPageUrl } from './siteMeta';
import { seoRoutes, type ProductSlug } from './seoRoutes';

const ORG_NAME = 'IXC Software Distribution Corp.';
const ORG_LOGO = `${SITE_ORIGIN}/logo.png`;

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

export type JsonLd = Record<string, unknown>;

export interface PageSeoMeta {
  title: string;
  description: string;
  url: string;
  /** Canonical URL — defaults to `url`. */
  canonical: string;
  image: string;
  imageAlt?: string;
  ogType: 'website' | 'article';
  /** Page-specific structured data injected as <script type="application/ld+json">. */
  jsonLd: JsonLd[];
}

export interface BlogPostSeo {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  faq?: { q: string; a: string }[];
}

export interface GetPageSeoOptions {
  /** Localized news headline for `/news/:slug` */
  newsArticleTitle?: string;
  /** Absolute OG image URL for a news article */
  newsArticleImage?: string;
  /** Full blog post data for `/blog/:slug` */
  blogPost?: BlogPostSeo;
}

function withDefaults(
  pair: SeoPair,
  path: string,
  overrides?: Partial<Pick<PageSeoMeta, 'image' | 'imageAlt' | 'ogType' | 'jsonLd'>>
): PageSeoMeta {
  const url = getPageUrl(path);
  return {
    title: pair.title,
    description: pair.description,
    url,
    canonical: url,
    image: overrides?.image ?? DEFAULT_OG_IMAGE,
    imageAlt: overrides?.imageAlt,
    ogType: overrides?.ogType ?? 'website',
    jsonLd: overrides?.jsonLd ?? []
  };
}

function softwareApplicationLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'IXC VoIP Softswitch',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Linux',
    description:
      'Carrier-grade VoIP softswitch with Class 4/5 routing, LCR, billing, APIs and 24/7 support.',
    url: `${SITE_ORIGIN}/`
  };
}

function blogIndexLd(meta: SeoPair, url: string, lang: Language): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO }
    }
  };
}

function blogPostingLd(post: BlogPostSeo, url: string, image: string, lang: Language): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: lang
  };
}

function breadcrumbLd(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function faqLd(faq: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

function buildBlogPostSeo(post: BlogPostSeo, path: string, lang: Language): PageSeoMeta {
  const url = getPageUrl(path);
  const image = post.image ?? DEFAULT_OG_IMAGE;
  const jsonLd: JsonLd[] = [
    blogPostingLd(post, url, image, lang),
    breadcrumbLd([
      { name: 'Home', url: `${SITE_ORIGIN}/` },
      { name: 'Blog', url: `${SITE_ORIGIN}/blog` },
      { name: post.title, url }
    ])
  ];
  if (post.faq?.length) jsonLd.push(faqLd(post.faq));
  return withDefaults(
    {
      title: `${post.title}${seoRoutes.blogTitleSuffix[lang]}`,
      description: post.description
    },
    path,
    { image, imageAlt: post.imageAlt ?? post.title, ogType: 'article', jsonLd }
  );
}

export function getPageSeo(pathname: string, lang: Language, options?: GetPageSeoOptions): PageSeoMeta {
  const path = normalizePathname(pathname);

  // A post may live at a custom top-level path (e.g. /telecom-industry-concepts),
  // so render article SEO whenever post data is supplied, regardless of the URL.
  if (options?.blogPost && !path.startsWith('/blog/')) {
    return buildBlogPostSeo(options.blogPost, path, lang);
  }

  if (path === '/' || path === '') {
    return withDefaults(seoRoutes.home[lang], path, { jsonLd: [softwareApplicationLd()] });
  }
  if (path === '/about-us') {
    return withDefaults(seoRoutes.about[lang], path);
  }
  if (path === '/ixc-club') {
    return withDefaults(seoRoutes.ixcClub[lang], path);
  }
  if (path === '/privacy-policy') {
    return withDefaults(seoRoutes.privacyPolicy[lang], path);
  }
  if (path === '/platform-brochure') {
    return withDefaults(seoRoutes.platformBrochure[lang], path);
  }
  if (path === '/blog') {
    const url = getPageUrl(path);
    return withDefaults(seoRoutes.blog[lang], path, { jsonLd: [blogIndexLd(seoRoutes.blog[lang], url, lang)] });
  }

  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    if (isProductSlug(slug)) return withDefaults(seoRoutes.products[slug][lang], path);
    return withDefaults(seoRoutes.notFound[lang], path);
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = options?.blogPost;
    if (post) return buildBlogPostSeo(post, path, lang);
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

  // Canonical link
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', meta.canonical);

  // Page-specific JSON-LD (replace any previously injected dynamic blocks)
  document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
  for (const block of meta.jsonLd) {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo-jsonld', 'true');
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  }
}
