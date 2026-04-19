import { 
  Shield, Clock, Zap, HeadphonesIcon, Target, Code, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const strengths = [
  {
    icon: <Clock size={28} />,
    title: 'Proven Since 1999',
    description: 'Decades of telecom expertise distilled into mature, battle-tested products.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Carrier-Grade Reliability',
    description: 'Architected for high availability, scalability, and predictable performance.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Fast Time-to-Value',
    description: 'Practical features, sensible defaults, and a team that understands real-world operations.'
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: 'Support That Cares 24/7',
    description: 'Over 25 years of live multilingual support (EN, RU). Our experienced team stays with you from design to day-two operations.'
  }
];

const capabilities = [
  {
    icon: <Target size={24} />,
    title: 'Softswitch & Routing',
    description: 'High-performance SIP routing, LCR, and policy control designed for uptime and efficiency.'
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Billing & Mediation',
    description: 'Accurate CDR processing, rating, invoicing, and revenue assurance for wholesale and retail.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards and historical insights to manage margin, quality, and traffic flows.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Compliance',
    description: 'Tools to mitigate fraud, enforce spend limits, and support regulatory requirements.'
  },
  {
    icon: <Code size={24} />,
    title: 'Automation & Integration',
    description: 'Open APIs and connectors to fit IXC into your OSS/BSS, CRM, and payment workflows.'
  }
];

export const AboutUs = () => {
  return (
    <div className="page-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">Home / About Us</p>
          <h1>About IXC Softswitch</h1>
          <p className="page-hero-subtitle">
            IXC builds carrier-grade software and services for voice and telecom operators.
            Since 1999, we've helped carriers, service providers, and enterprises launch, scale,
            and optimize reliable voice networks with transparent billing and rock-solid routing.
          </p>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="section container">
        <div className="glass mission-banner">
          <div className="mission-icon">
            <Target size={40} />
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>
              Enable operators of all sizes to deliver trustworthy voice services — profitably, securely, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What We Do</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            End-to-end solutions that cover every aspect of modern voice network operations.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <div key={i} className="capability-card glass">
              <div className="capability-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why IXC */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why IXC</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            The advantages that set us apart from the competition.
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <div key={i} className="strength-card glass">
              <div className="strength-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <div className="glass cta-block">
          <h2>Get in Touch</h2>
          <p>
            Whether you're launching a new network, consolidating platforms, or tightening revenue controls, IXC can help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="mailto:sales@ixc.ua" className="btn btn-primary">
              Contact Sales <ArrowRight size={18} />
            </a>
            <Link to="/" className="btn btn-outline">
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
