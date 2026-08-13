import { LocaleLink as Link } from '../components/LocaleLink';
import { useLanguage } from '../i18n/LanguageProvider';
import {
  COMPANY_ADDRESS_LINE,
  COMPANY_LEGAL_NAME,
  COMPANY_PRIVACY_EMAIL,
  COMPANY_WEBSITE,
} from '../company';
import {
  PRIVACY_POLICY_LAST_UPDATED,
  privacyPolicySectionsEn,
} from '../content/privacyPolicyEn';

export const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / {t.nav.privacyPolicy}
          </p>
          <h1>{t.privacyPolicy.title}</h1>
          <p className="page-hero-subtitle">{t.privacyPolicy.subtitle}</p>
          <p className="legal-updated">
            {t.privacyPolicy.lastUpdated}: {PRIVACY_POLICY_LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section container">
        <article className="legal-document glass">
          <p className="legal-entity-block">
            <strong>{COMPANY_LEGAL_NAME}</strong>
            <br />
            {COMPANY_ADDRESS_LINE}
            <br />
            <a href={COMPANY_WEBSITE}>{COMPANY_WEBSITE.replace(/^https?:\/\//, '')}</a>
          </p>

          {privacyPolicySectionsEn.map((section) => (
            <section key={section.id} id={section.id} className="legal-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <address className="legal-contact">
            <strong>{COMPANY_LEGAL_NAME}</strong>
            <br />
            {COMPANY_ADDRESS_LINE}
            <br />
            Email:{' '}
            <a href={`mailto:${COMPANY_PRIVACY_EMAIL}`}>{COMPANY_PRIVACY_EMAIL}</a>
          </address>
        </article>
      </section>
    </div>
  );
};
