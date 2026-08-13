import { 
  Shield, Clock, Zap, HeadphonesIcon, Target, Code, 
  ArrowRight, CheckCircle2, Briefcase, Award, MessageCircle
} from 'lucide-react';
import { LocaleLink as Link } from '../components/LocaleLink';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';
import { CertificatesAndTrademarks } from '../components/CertificatesAndTrademarks';

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
        <SectionHeading spacious icon={<Target size={32} />} title={t.about.missionTitle} />
        <div className="glass mission-banner mission-banner--solo">
          <p>{t.about.missionText}</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section container">
        <SectionHeading
          spacious
          icon={<Briefcase size={32} />}
          title={t.about.whatWeDoTitle}
          subtitle={t.about.whatWeDoSubtitle}
        />

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
        <SectionHeading
          spacious
          icon={<Award size={32} />}
          title={t.about.whyTitle}
          subtitle={t.about.whySubtitle}
        />

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

      <CertificatesAndTrademarks />

      {/* CTA */}
      <section className="section container">
        <SectionHeading spacious icon={<MessageCircle size={32} />} title={t.about.ctaTitle} subtitle={t.about.ctaText} />
        <div className="glass cta-block cta-block--actions">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
