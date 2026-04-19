import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import newsData from '../newsData.json';

export const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const article = newsData.find(n => n.slug === slug);

  if (!article) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>{t.productPage?.notFoundTitle || "News Not Found"}</h1>
            <p className="page-hero-subtitle">{t.productPage?.notFoundText || "The article you're looking for doesn't exist."}</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={18} /> {t.productPage?.backHome || "Back to Home"}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Generate safe HTML paragraphs
  const paragraphs = article.content.split('\n\n').filter(p => p.trim());

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / <Link to="/#news">News</Link> / {article.title}
          </p>
          <h1 style={{ maxWidth: '800px' }}>{article.title}</h1>
          <div className="news-date-badge" style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
            <Calendar size={16} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {article.local_image && (
            <img 
              src={article.local_image} 
              alt={article.title}
              style={{ width: '100%', borderRadius: '16px', marginBottom: '3rem', maxHeight: '500px', objectFit: 'cover' }}
            />
          )}

          <div className="article-body" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
            {paragraphs.map((para, i) => (
              <p key={i} style={{ marginBottom: '1.5rem' }}>{para}</p>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
             <Link to="/#news" className="btn btn-outline">
                <ArrowLeft size={18} /> Back to News
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
