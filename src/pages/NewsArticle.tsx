import { useParams } from 'react-router-dom';
import { LocaleLink as Link } from '../components/LocaleLink';
import { 
  ArrowLeft, Calendar 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import newsData from '../newsData';
import { RichNewsBody } from '../components/RichNewsBody';

export const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const article = newsData.find(n => n.slug === slug);

  if (!article) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>{t.news.notFoundTitle}</h1>
            <p className="page-hero-subtitle">{t.news.notFoundText}</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={18} /> {t.productPage.backHome}
            </Link>
          </div>
        </section>
      </div>
    );
  }



  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / <Link to="/#news">{t.news.breadcrumb}</Link> / {(article as any)[language]?.title || article.en.title}
          </p>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {(article as any)[language]?.title || article.en.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section container">
        <div
          style={{
            maxWidth: (article as { rich_news?: boolean }).rich_news ? '960px' : '800px',
            margin: '0 auto',
          }}
        >
          {article.local_image && (
            <img 
              src={`${import.meta.env.BASE_URL}${article.local_image.startsWith('/') ? article.local_image.slice(1) : article.local_image}`} 
              alt={(article as any)[language]?.title || article.en.title}
              style={{
                width: '100%',
                borderRadius: '16px',
                marginBottom: '3rem',
                maxHeight: (article as { image_object_fit?: string }).image_object_fit === 'contain' ? 'none' : '500px',
                objectFit: (article as { image_object_fit?: string }).image_object_fit === 'contain' ? 'contain' : 'cover'
              }}
            />
          )}

          {(article as { rich_news?: boolean }).rich_news ? (
            <RichNewsBody content={(article as any)[language]?.content || article.en.content} />
          ) : (
            <div style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.8', 
              color: 'var(--text-primary)',
              whiteSpace: 'pre-wrap'
            }}>
              {(article as any)[language]?.content || article.en.content}
            </div>
          )}
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
             <Link to="/#news" className="btn btn-outline">
                <ArrowLeft size={18} /> {t.news.backToNews}
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
