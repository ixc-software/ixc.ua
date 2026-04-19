import React from 'react';
import { Server, Shield, Activity, Bot, MessageSquare, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    slug: 'softswitch',
    title: 'Softswitch',
    description: 'A Class 4/5 VoIP platform designed for maximum throughput, detailed billing, and advanced routing intelligence.',
    icon: <Server size={32} />
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
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Products</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our suite of highly tuned telecommunication solutions built directly for modern wholesale and retail VoIP businesses.
        </p>
      </div>

      <div className="products-grid">
        {products.map((p, i) => (
          <Link to={`/products/${p.slug}`} key={i} className="product-card glass" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-icon">
              {p.icon}
            </div>
            <h3>{p.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
            <span className="product-card-link">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
