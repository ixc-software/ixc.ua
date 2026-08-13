import { useParams } from 'react-router-dom';
import { LocaleLink as Link } from '../components/LocaleLink';
import { HashScrollLink } from '../components/HashScrollLink';
import {
  Server, Shield, Activity, Bot, MessageSquare, Code,
  ArrowRight, CheckCircle2, ArrowLeft, FileText, Download, Sparkles, Mic
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';
import { PRODUCT_SLUGS, isProductSlug, productCardTitle, type ProductSlug } from '../data/productCatalog';
import { getProductPageCopy } from '../data/productPageCopy';

const productIcons: Record<ProductSlug, React.ReactNode> = {
  softswitch: <Server size={40} />,
  'ixc-recording': <Mic size={40} />,
  'ai-automation': <Sparkles size={40} />,
  'white-black-list': <Shield size={40} />,
  'monitoring-tool': <Activity size={40} />,
  'ixc-autotester': <Bot size={40} />,
  'sms-platform': <MessageSquare size={40} />,
  'google-api': <Code size={40} />,
  'technical-specifications': <FileText size={40} />
};

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const validSlug = isProductSlug(slug) ? slug : undefined;
  const copy = validSlug ? getProductPageCopy(language, validSlug) : undefined;
  const title = validSlug ? productCardTitle(t, validSlug) : '';

  if (!validSlug || !copy) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>{t.productPage.notFoundTitle}</h1>
            <p className="page-hero-subtitle">{t.productPage.notFoundText}</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={18} /> {t.productPage.backHome}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const currentIndex = PRODUCT_SLUGS.indexOf(validSlug);
  const prevSlug = currentIndex > 0 ? PRODUCT_SLUGS[currentIndex - 1] : null;
  const nextSlug = currentIndex < PRODUCT_SLUGS.length - 1 ? PRODUCT_SLUGS[currentIndex + 1] : null;

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / <Link to="/#products">{t.nav.products}</Link> / {title}
          </p>
          <div className="product-hero-layout">
            <div className="product-hero-icon glass">
              {productIcons[validSlug]}
            </div>
            <div>
              <h1>{title}</h1>
              <p className="page-hero-subtitle">{copy.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading spacious icon={<FileText size={32} />} title={t.productPage.overview} />
        <div className="product-detail-grid product-detail-grid--with-heading">
          <div className="product-description">
            <p>{copy.description}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <HashScrollLink to={{ pathname: '/', hash: 'get-in-touch' }} className="btn btn-primary">
                {t.productPage.requestDemo} <ArrowRight size={18} />
              </HashScrollLink>
              <a href="mailto:sales@ixc.ua" className="btn btn-outline">
                {t.productPage.contactSales}
              </a>
              {validSlug === 'technical-specifications' ? (
                <a href="/ixc_specifications.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <Download size={18} /> {t.productPage.downloadSpecPdf}
                </a>
              ) : null}
            </div>
          </div>

          <div className="product-features glass">
            <h3>{t.productPage.keyFeatures}</h3>
            <ul className="feature-list">
              {copy.features.map((f, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} color="var(--accent-color)" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {copy.realTimeReporting && copy.callRoutingDepending ? (
          <div className="product-spec-extra-grid">
            <div className="product-features glass">
              <h3>{t.productPage.realTimeReporting}</h3>
              <ul className="feature-list">
                {copy.realTimeReporting.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color="var(--accent-color)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-features glass">
              <h3>{t.productPage.callRoutingDepending}</h3>
              <ul className="feature-list">
                {copy.callRoutingDepending.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color="var(--accent-color)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </section>

      <section className="section container">
        <div className="product-nav">
          {prevSlug ? (
            <Link to={`/products/${prevSlug}`} className="product-nav-link glass">
              <ArrowLeft size={18} />
              <div>
                <span className="product-nav-label">{t.productPage.previous}</span>
                <span className="product-nav-title">{productCardTitle(t, prevSlug)}</span>
              </div>
            </Link>
          ) : <div />}
          {nextSlug ? (
            <Link to={`/products/${nextSlug}`} className="product-nav-link product-nav-next glass">
              <div>
                <span className="product-nav-label">{t.productPage.next}</span>
                <span className="product-nav-title">{productCardTitle(t, nextSlug)}</span>
              </div>
              <ArrowRight size={18} />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};
