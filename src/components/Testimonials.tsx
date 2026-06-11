import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';

interface Testimonial {
  company: string;
  url: string;
  quote: string;
  author: string;
  role: string;
  /** Public URL path under `public/` (e.g. `/testimonials/name.png`). */
  photoSrc?: string;
  photoAlt?: string;
  /** If set, the photo is wrapped in a link (e.g. LinkedIn). */
  photoHref?: string;
}

const testimonials: Testimonial[] = [
  {
    company: 'Kyivstar',
    url: 'https://kyivstar.ua/',
    quote:
      'Our company is going and henceforth actively to introduce the hi-tech program complexes adequate to the highest international standards owing to which efficiency of our operational activity as a whole will be considerably raised.',
    author: 'Igor Litovchenko',
    role: 'President, Joint-Stock Company "Kyivstar G.S.M."',
    photoSrc: '/testimonials/igor-litovchenko-kyivstar.png',
    photoAlt: 'Igor Litovchenko, President of Kyivstar'
  },
  {
    company: 'NGN Telecom',
    url: 'https://www.ngncorp.com/',
    quote: 'Switching to IXC gave us carrier-grade routing and billing in one solution. The monitoring tools and Telegram integration keep us on top of traffic quality 24/7.',
    author: 'Gilbert Abboud',
    role: 'CTO - VoIP | Messaging · NGN Telecom',
    photoSrc: '/testimonials/gilbert-abboud-ngn.png',
    photoAlt: 'Gilbert Abboud, CTO - VoIP | Messaging at NGN Telecom',
    photoHref: 'https://www.linkedin.com/in/gilbert-abboud-b7b90613/'
  },
  {
    company: 'Lukovitel',
    url: 'https://lukovitel.interexc.com/',
    quote:
      'We put IXC Softswitch V7 into production from day one — no staging phase, straight into live traffic. The platform has carried our wholesale operations reliably since the first call.',
    author: 'Andrew Lujansky',
    role: 'Sales · Valor DBA Lukovitel',
    photoSrc: '/testimonials/andrew-lujansky-lukovitel.png',
    photoAlt: 'Andrew Lujansky, Sales at Valor DBA Lukovitel',
    photoHref: 'https://www.linkedin.com/in/andrew-lujansky-360a44314/'
  }
];

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(carouselRef.current.clientWidth * 0.8, 400);
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="testimonials" className="section container">
      <SectionHeading
        spacious
        icon={<Quote size={32} />}
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
        toolbar={
          <div className="carousel-nav">
            <button
              type="button"
              className={`carousel-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              className={`carousel-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        }
      />

      <div className="testimonials-carousel-wrapper">
        <div
          className="testimonials-carousel"
          ref={carouselRef}
          onScroll={checkScroll}
        >
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
              {t_item.photoSrc &&
                (t_item.photoHref ? (
                  <a
                    className="testimonial-photo-link"
                    href={t_item.photoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t_item.photoAlt || t_item.author} — LinkedIn profile`}
                  >
                    <img
                      className="testimonial-photo"
                      src={t_item.photoSrc}
                      alt={t_item.photoAlt || ''}
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ) : (
                  <img
                    className="testimonial-photo"
                    src={t_item.photoSrc}
                    alt={t_item.photoAlt || ''}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
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
      </div>
    </section>
  );
};
