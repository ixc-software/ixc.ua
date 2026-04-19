import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import newsData from '../newsData.json';

export const News: React.FC = () => {
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
    <section id="news" className="section container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>{t.news.title}</h2>
        
        <div className="carousel-nav">
          <button 
            className={`carousel-btn ${!canScrollLeft ? 'disabled' : ''}`} 
            onClick={() => scroll('left')}
            aria-label="Previous news"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            className={`carousel-btn ${!canScrollRight ? 'disabled' : ''}`} 
            onClick={() => scroll('right')}
            aria-label="Next news"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="news-carousel-wrapper">
        <div 
          className="news-carousel" 
          ref={carouselRef} 
          onScroll={checkScroll}
        >
          {newsData.map((item, i) => (
            <Link key={i} to={`/news/${item.slug}`} className="news-card glass">
              <div className="news-image-wrapper">
                {item.local_image ? (
                  <img src={item.local_image} alt={item.title} className="news-image" loading="lazy" />
                ) : (
                  <div className="news-image-placeholder">
                    <h2>IXC</h2>
                  </div>
                )}
              </div>
              <div className="news-content">
                <div className="news-date-badge">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="news-read-more">
                  {t.news.readMore} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
