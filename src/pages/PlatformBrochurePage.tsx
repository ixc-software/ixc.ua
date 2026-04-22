import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { brochureImageSrc } from '../data/platformBrochureTypes';
import { getPlatformBrochureData } from '../data/platformBrochureContent';

export const PlatformBrochurePage = () => {
  const { t, language } = useLanguage();
  const b = getPlatformBrochureData(language);

  return (
    <div className="page-content platform-brochure">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / {b.breadcrumb}
          </p>
          <h1>{b.pageTitle}</h1>
          <p className="page-hero-subtitle">{b.pageSubtitle}</p>
        </div>
      </section>

      <section className="section container">
        <div className="brochure-key-features glass">
          <h2 className="brochure-block-title">
            <BookOpen size={28} className="brochure-block-title-icon" aria-hidden />
            {b.keyFeaturesTitle}
          </h2>
          <ul className="brochure-feature-list">
            {b.keyFeatures.map((row, i) => (
              <li key={i}>
                <strong>{row.label}:</strong> {row.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {b.sections.map((section) => (
        <section key={section.id} className="section container" id={section.id}>
          <h2 className="brochure-section-h2">{section.title}</h2>
          {section.lead && <p className="brochure-lead">{section.lead}</p>}

          {section.images && section.images.length > 0 && (
            <div
              className={
                section.images.length > 1
                  ? 'brochure-figure-row'
                  : 'brochure-figure-wrap'
              }
            >
              {section.images.map((im) => (
                <figure key={im.file} className="brochure-figure glass">
                  <img
                    src={brochureImageSrc(im.file)}
                    alt={im.alt}
                    loading="lazy"
                    decoding="async"
                    className="brochure-shot"
                  />
                </figure>
              ))}
            </div>
          )}

          {section.body?.map((p, i) => (
            <p key={i} className="brochure-p">
              {p}
            </p>
          ))}

          {section.subsections?.map((sub) => (
            <div key={sub.title} className="brochure-subsection">
              <h3 className="brochure-section-h3">{sub.title}</h3>
              <ul className="brochure-detail-list">
                {sub.items.map((item, j) => (
                  <li key={j}>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {section.extraBlocks?.map((ex) => (
            <div key={ex.title} className="brochure-extra glass">
              <h3 className="brochure-section-h3">{ex.title}</h3>
              <p className="brochure-p">{ex.body}</p>
            </div>
          ))}
        </section>
      ))}

      <section className="section container">
        <div className="glass cta-block cta-block--actions">
          <h2 className="brochure-cta-h">{b.ctaTitle}</h2>
          <p className="brochure-cta-p">{b.ctaText}</p>
          <div className="brochure-cta-row">
            <a href="mailto:sales@ixc.ua" className="btn btn-primary">
              {b.ctaContact} <ArrowRight size={18} />
            </a>
            <Link to="/" className="btn btn-outline">
              {b.ctaHome} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
