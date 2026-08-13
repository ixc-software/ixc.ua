import { LocaleLink as Link } from '../components/LocaleLink';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { blogPosts, getLocalizedPost, getPostPath } from '../content/blogPosts';
import { formatPostDate } from '../utils/formatDate';

export const Blog = () => {
  const { language, t } = useLanguage();
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / {t.blog.title}
          </p>
          <div className="blog-hero-inner">
            <div className="blog-hero-icon">
              <BookOpen size={28} />
            </div>
            <h1>{t.blog.title}</h1>
            <p className="page-hero-subtitle blog-hero-subtitle">{t.blog.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="blog-grid blog-index-grid">
          {posts.map((post) => {
            const loc = getLocalizedPost(post, language);
            return (
              <Link key={post.slug} to={getPostPath(post)} className="blog-card glass">
                <div
                  className={[
                    'blog-card-image-wrap',
                    post.imageObjectFit === 'contain' && 'blog-card-image-wrap--contain'
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${loc.localImage.startsWith('/') ? loc.localImage.slice(1) : loc.localImage}`}
                    alt={loc.title}
                    className="blog-card-image"
                    loading="lazy"
                  />
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <Calendar size={14} />
                    <span>{formatPostDate(loc.date, language)}</span>
                  </div>
                  <h2 className="blog-card-title">{loc.title}</h2>
                  <p className="blog-card-excerpt">{loc.excerpt}</p>
                  <span className="blog-card-readmore">
                    {t.blog.readMore} <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
