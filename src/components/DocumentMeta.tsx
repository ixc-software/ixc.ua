import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { getPageSeo, setDocumentSeo } from '../seo/getPageSeo';
import { getNewsOgImage } from '../seo/siteMeta';
import newsData from '../newsData.json';
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

/** Updates document title and meta tags for the current route and language (SPA + hydration). */
export function DocumentMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const newsSlug = pathname.match(/^\/news\/([^/]+)\/?$/)?.[1];
    const article = newsArticleForSlug(newsSlug);
    const meta = getPageSeo(pathname, language, {
      newsArticleTitle: newsTitleForSlug(newsSlug, language),
      newsArticleImage: article ? getNewsOgImage(article) : undefined
    });
    setDocumentSeo(meta);
  }, [pathname, language]);

  return null;
}
