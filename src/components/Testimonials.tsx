import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

interface Testimonial {
  company: string;
  url: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    company: 'Kyivstar',
    url: 'https://kyivstar.ua/',
    quote: 'IXC Softswitch has been a reliable backbone for our VoIP operations. The platform\'s stability and the team\'s responsiveness have exceeded our expectations over the years.',
    author: 'Technical Team',
    role: 'Kyivstar Mobile Carrier'
  },
  {
    company: 'NGN Telecom',
    url: 'https://www.ngncorp.com/',
    quote: 'Switching to IXC gave us carrier-grade routing and billing in one solution. The monitoring tools and Telegram integration keep us on top of traffic quality 24/7.',
    author: 'Operations Team',
    role: 'NGN Telecom'
  }
];

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.testimonials.title}</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {t.testimonials.subtitle}
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t_item, i) => {
          const item = t.testimonials.items[i];
          return (
          <div key={i} className="testimonial-card glass">
            <div className="testimonial-quote-icon">
              <Quote size={24} />
            </div>
            <blockquote className="testimonial-text">
              "{item?.quote || t_item.quote}"
            </blockquote>
            <div className="testimonial-author">
              <div>
                <strong>{item?.author || t_item.author}</strong>
                <span>
                  <a href={t_item.url} target="_blank" rel="noopener noreferrer">{item?.role || t_item.role}</a>
                </span>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};
