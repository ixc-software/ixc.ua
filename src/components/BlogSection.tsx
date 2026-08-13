import { LocaleLink as Link } from './LocaleLink';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { blogPosts, getLocalizedPost, getPostPath } from '../content/blogPosts';
import { formatPostDate } from '../utils/formatDate';

const LATEST_COUNT = 3;

export const BlogSection = () => {
  const { language, t } = useLanguage();
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, LATEST_COUNT);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section container">
      <SectionHeading
        spacious
        icon={<BookOpen size={32} />}
        title={t.blog.title}
        subtitle={t.blog.subtitle}
        subtitleClassName="blog-hero-subtitle"
      />

      <div className="blog-grid home-blog-grid">
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
                <h3 className="blog-card-title">{loc.title}</h3>
                <p className="blog-card-excerpt">{loc.excerpt}</p>
                <span className="blog-card-readmore">
                  {t.blog.readMore} <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="home-blog-view-all">
        <Link to="/blog" className="btn btn-outline">
          {t.blog.viewAll} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};
