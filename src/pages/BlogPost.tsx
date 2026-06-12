import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { findBlogPost, findBlogPostByPath, getLocalizedPost, getPostPath } from '../content/blogPosts';
import { RichArticleBody } from '../components/RichArticleBody';
import { formatPostDate } from '../utils/formatDate';

function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const { language, t } = useLanguage();
  const post = slug ? findBlogPost(slug) : findBlogPostByPath(pathname);

  if (post?.path && pathname.startsWith('/blog/')) {
    return <Navigate to={getPostPath(post)} replace />;
  }

  if (!post) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>{t.blog.notFoundTitle}</h1>
            <p className="page-hero-subtitle">{t.blog.notFoundText}</p>
            <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={18} /> {t.blog.backToBlog}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const loc = getLocalizedPost(post, language);
  const minutes = readingTimeMinutes(loc.content);

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / <Link to="/blog">{t.blog.title}</Link> /{' '}
            <span>{loc.title}</span>
          </p>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="blog-card-category blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{loc.title}</h1>
            <div className="blog-post-meta">
              <span><User size={15} /> {loc.author}</span>
              <span><Calendar size={15} /> {formatPostDate(loc.date, language)}</span>
              <span><Clock size={15} /> {minutes} {t.blog.minRead}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <article className="blog-article">
          {loc.localImage && (
            <figure
              className={[
                'blog-article-hero-wrap',
                loc.imageObjectFit === 'contain' && 'blog-article-hero-wrap--contain'
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <img
                src={`${import.meta.env.BASE_URL}${loc.localImage.startsWith('/') ? loc.localImage.slice(1) : loc.localImage}`}
                alt={loc.title}
                className="blog-article-hero"
              />
            </figure>
          )}

          <RichArticleBody content={loc.content} />

          {loc.faq && loc.faq.length > 0 && (
            <section className="blog-faq" aria-label={t.blog.faqTitle}>
              <h2 className="blog-rich-h2">{t.blog.faqTitle}</h2>
              {loc.faq.map((item, i) => (
                <details key={i} className="blog-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </section>
          )}

          <div className="blog-post-footer-nav">
            <Link to="/blog" className="btn btn-outline">
              <ArrowLeft size={16} /> {t.blog.backToBlog}
            </Link>
          </div>

          {post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">#{tag}</span>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
};
