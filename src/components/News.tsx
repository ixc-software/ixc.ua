import React from 'react';
import { Clock } from 'lucide-react';

const newsItems = [
  { date: '2026-03-12', title: 'Daily traffic in routing tables' },
  { date: '2025-11-17', title: 'Anum/Bnum routing improvements' },
  { date: '2025-08-30', title: 'IXC Softswitch 6.1.6 Released' },
  { date: '2025-07-12', title: 'Telegram bot new features' },
  { date: '2024-10-20', title: 'Access List enhancement' },
  { date: '2024-09-12', title: 'SIP loop detection' },
];

export const News: React.FC = () => {
  return (
    <section id="news" className="section container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Clock size={32} color="var(--accent-color)" />
        <h2 style={{ fontSize: '2.5rem' }}>Latest Updates</h2>
      </div>

      <div className="news-timeline glass" style={{ padding: '2rem' }}>
        {newsItems.map((item, i) => (
          <div key={i} className="news-item">
            <span className="news-date">{item.date}</span>
            <span className="news-title">{item.title}</span>
            <a href="#" className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};
