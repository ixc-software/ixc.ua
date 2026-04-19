import { 
  Shield, Clock, Zap, HeadphonesIcon, Target, Code, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';

const strengthIcons = [
  <Clock size={28} />,
  <Shield size={28} />,
  <Zap size={28} />,
  <HeadphonesIcon size={28} />,
];

const capabilityIcons = [
  <Target size={24} />,
  <CheckCircle2 size={24} />,
  <Zap size={24} />,
  <Shield size={24} />,
  <Code size={24} />,
];

export const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="page-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb"><Link to="/">{t.nav.home}</Link> / {t.nav.aboutUs}</p>
          <h1>{t.about.title}</h1>
          <p className="page-hero-subtitle">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="section container">
        <div className="glass mission-banner">
          <div className="mission-icon">
            <Target size={40} />
          </div>
          <div>
            <h2>{t.about.missionTitle}</h2>
            <p>{t.about.missionText}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.about.whatWeDoTitle}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            {t.about.whatWeDoSubtitle}
          </p>
        </div>

        <div className="capabilities-grid">
          {t.about.capabilities.map((cap, i) => (
            <div key={i} className="capability-card glass">
              <div className="capability-icon">{capabilityIcons[i]}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why IXC */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.about.whyTitle}</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            {t.about.whySubtitle}
          </p>
        </div>

        <div className="strengths-grid">
          {t.about.strengths.map((s, i) => (
            <div key={i} className="strength-card glass">
              <div className="strength-icon">{strengthIcons[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <div className="glass cta-block">
          <h2>{t.about.ctaTitle}</h2>
          <p>{t.about.ctaText}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="mailto:sales@ixc.ua" className="btn btn-primary">
              {t.about.ctaContactSales} <ArrowRight size={18} />
            </a>
            <Link to="/" className="btn btn-outline">
              {t.about.ctaExploreProducts} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
