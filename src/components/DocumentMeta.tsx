import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { getPageSeo, setDocumentSeo, type BlogPostSeo } from '../seo/getPageSeo';
import { getNewsOgImage } from '../seo/siteMeta';
import { newsCards } from '../content/newsCards';
import { blogCards, getPostPath } from '../content/blogCards';
import type { Language } from '../i18n/translations';
import { stripLangPrefix } from '../i18n/localePath';

function newsTitleForSlug(slug: string | undefined, language: Language): string | undefined {
  if (!slug) return undefined;
  const article = newsCards.find((n) => n.slug === slug);
  if (!article) return undefined;
  return article[language]?.title || article.en.title;
}

/** Updates document title and meta tags for the current route and language (SPA + hydration). */
export function DocumentMeta() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    let cancel = false;
    const { path } = stripLangPrefix(pathname);
    const newsSlug = path.match(/^\/news\/([^/]+)\/?$/)?.[1];
    const blogSlug = path.match(/^\/blog\/([^/]+)\/?$/)?.[1];
    const article = newsSlug ? newsCards.find((n) => n.slug === newsSlug) : undefined;
    const needsFullPost = Boolean(blogSlug) || blogCards.some((card) => getPostPath(card) === path);

    const apply = (blogPost?: BlogPostSeo) => {
      if (cancel) return;
      const meta = getPageSeo(path, language, {
        newsArticleTitle: newsTitleForSlug(newsSlug, language),
        newsArticleImage: article ? getNewsOgImage(article) : undefined,
        blogPost,
      });
      setDocumentSeo(meta);
    };

    if (!needsFullPost) {
      apply();
      return () => {
        cancel = true;
      };
    }

    void import('../content/blogPosts').then(({ findBlogPost, findBlogPostByPath, getLocalizedPost }) => {
      const post = blogSlug ? findBlogPost(blogSlug) : findBlogPostByPath(pathname);
      if (!post) {
        apply();
        return;
      }
      const loc = getLocalizedPost(post, language);
      apply({
        title: loc.title,
        description: loc.description,
        image: loc.image,
        imageAlt: loc.title,
        datePublished: loc.date,
        dateModified: loc.updated,
        author: loc.author,
        faq: loc.faq?.map((f) => ({ q: f.q, a: f.a })),
      });
    });

    return () => {
      cancel = true;
    };
  }, [pathname, language]);

  return null;
}
