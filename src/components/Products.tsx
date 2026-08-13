import React from 'react';
import { Server, Shield, Activity, Bot, MessageSquare, Code, Layers, FileText, Sparkles, Mic } from 'lucide-react';
import { LocaleLink as Link } from './LocaleLink';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';

const products = [
  {
    slug: 'softswitch',
    title: 'Softswitch',
    description: 'A Class 4/5 VoIP platform designed for maximum throughput, detailed billing, and advanced routing intelligence.',
    icon: <Server size={32} />
  },
  {
    slug: 'ixc-recording',
    title: 'IXC Recording',
    description:
      'Softswitch captures call media; Billing 7 organises the archive — plus AI call analysis, traffic profiles, voice quality, FAS/voicemail detect and drop, and personalised SMS post-call campaigns.',
    icon: <Mic size={32} />
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'IXC ↔ DealoAgent: native-language commands, batch softswitch updates, and messenger dispatch—scale from 5–10 to 100+ accounts per manager.',
    icon: <Sparkles size={32} />
  },
  {
    slug: 'white-black-list',
    title: 'White/Black List',
    description: 'Dynamic protection and flexible routing rules to ensure unparalleled security and spam call prevention.',
    icon: <Shield size={32} />
  },
  {
    slug: 'monitoring-tool',
    title: 'Monitoring Tool',
    description: 'Real-time analytics and dynamic graphs allowing you to trace SIP data for immediate troubleshooting.',
    icon: <Activity size={32} />
  },
  {
    slug: 'ixc-autotester',
    title: 'Autotester',
    description: 'Ensure route quality by proactively generating automated test calls and analyzing the results.',
    icon: <Bot size={32} />
  },
  {
    slug: 'sms-platform',
    title: 'SMS Platform',
    description: 'An integrated bulk messaging solution ready to manage fast transit and optimal delivery paths.',
    icon: <MessageSquare size={32} />
  },
  {
    slug: 'google-api',
    title: 'Google API Integration',
    description: 'Enhance your operations with extended integration points mapping to leading enterprise services.',
    icon: <Code size={32} />
  },
  {
    slug: 'technical-specifications',
    title: 'Product Technical Specifications',
    description: 'Protocols, capacity, routing, security, codecs, billing, reporting, and 24/7 NOC—consolidated in one reference.',
    icon: <FileText size={32} />
  }
];

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
        {products.map((p, i) => {
          const card = t.products.cards[i];
          return (
          <Link to={`/products/${p.slug}`} key={i} className="product-card glass" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-icon">
              {p.icon}
            </div>
            <h3>{card?.title || p.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{card?.description || p.description}</p>
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
