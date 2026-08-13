import React from 'react';
import { Server, Shield, Activity, Bot, MessageSquare, Code, Layers, FileText, Sparkles, Mic } from 'lucide-react';
import { LocaleLink as Link } from './LocaleLink';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { PRODUCT_SLUGS, type ProductSlug } from '../data/productCatalog';

const productIcons: Record<ProductSlug, React.ReactNode> = {
  softswitch: <Server size={32} />,
  'ixc-recording': <Mic size={32} />,
  'ai-automation': <Sparkles size={32} />,
  'white-black-list': <Shield size={32} />,
  'monitoring-tool': <Activity size={32} />,
  'ixc-autotester': <Bot size={32} />,
  'sms-platform': <MessageSquare size={32} />,
  'google-api': <Code size={32} />,
  'technical-specifications': <FileText size={32} />
};

export const Products: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="products" className="section container section-glow section-glow-right" style={{ scrollMarginTop: '6rem' }}>
      <SectionHeading
        spacious
        icon={<Layers size={32} />}
        title={t.products.title}
        subtitle={t.products.subtitle}
      />

      <div className="products-grid">
        {PRODUCT_SLUGS.map((slug, i) => {
          const card = t.products.cards[i];
          return (
          <Link to={`/products/${slug}`} key={slug} className="product-card glass" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-icon">
              {productIcons[slug]}
            </div>
            <h3>{card.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{card.description}</p>
            <span className="product-card-link">
              {t.products.learnMore}
            </span>
          </Link>
          );
        })}
      </div>
    </section>
  );
};
