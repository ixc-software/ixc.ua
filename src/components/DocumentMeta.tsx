import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { getPageSeo, setDocumentSeo, type BlogPostSeo } from '../seo/getPageSeo';
import { getNewsOgImage } from '../seo/siteMeta';
import newsData from '../newsData';
import { findBlogPost, findBlogPostByPath, getLocalizedPost } from '../content/blogPosts';
import type { Language } from '../i18n/translations';

function newsArticleForSlug(slug: string | undefined) {
  if (!slug) return undefined;
  return newsData.find((n) => n.slug === slug);
}

function newsTitleForSlug(slug: string | undefined, language: Language): string | undefined {
  const article = newsArticleForSlug(slug);
  if (!article) return undefined;
  const loc = article as Record<string, { title?: string } | undefined>;
  return loc[language]?.title || article.en.title;
}

function blogSeoFor(
  slug: string | undefined,
  pathname: string,
  language: Language
): BlogPostSeo | undefined {
  const post = slug ? findBlogPost(slug) : findBlogPostByPath(pathname);
  if (!post) return undefined;
  const loc = getLocalizedPost(post, language);
  return {
    title: loc.title,
    description: loc.description,
    image: loc.image,
    imageAlt: loc.title,
    datePublished: loc.date,
    dateModified: loc.updated,
    author: loc.author,
    faq: loc.faq?.map((f) => ({ q: f.q, a: f.a }))
  };
}

/** Updates document title and meta tags for the current route and language (SPA + hydration). */
export function DocumentMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const newsSlug = pathname.match(/^\/news\/([^/]+)\/?$/)?.[1];
    const blogSlug = pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
    const article = newsArticleForSlug(newsSlug);
    const meta = getPageSeo(pathname, language, {
      newsArticleTitle: newsTitleForSlug(newsSlug, language),
      newsArticleImage: article ? getNewsOgImage(article) : undefined,
      blogPost: blogSeoFor(blogSlug, pathname, language)
    });
    setDocumentSeo(meta);
  }, [pathname, language]);

  return null;
}
