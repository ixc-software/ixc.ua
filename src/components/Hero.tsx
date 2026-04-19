import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero container animate-fade-in">
      <h1>High Performance All-In-One Solution for VoIP Business</h1>
      <p>
        Experience carrier-grade reliability with IXC Softswitch. Our platform provides everything you need to manage routing, billing, SMS, and monitoring securely and efficiently.
      </p>
      <div className="hero-actions">
        <a href="#products" className="btn btn-primary">
          Explore Products <ArrowRight size={18} />
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Sales <PhoneCall size={18} />
        </a>
      </div>
    </section>
  );
};
