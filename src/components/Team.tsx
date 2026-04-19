import React from 'react';
import { Users } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="section container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Users size={32} color="var(--accent-color)" />
        <h2 style={{ fontSize: '2.5rem' }}>Our Team</h2>
      </div>

      <div className="glass" style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', borderRadius: '16px' }}>
        <img 
          src="/founder.jpeg" 
          alt="Oleksii Vinogradov" 
          style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: '3px solid var(--accent-color)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
          }}
        />
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>Oleksii Vinogradov</h3>
          <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem' }}>Founder & CEO</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
            With over 30 years of experience in the telecommunications industry, Oleksii leads the development of IXC Softswitch. 
            His vision drives our commitment to delivering top-tier Softswitch and billing solutions for wholesale and retail VoIP providers worldwide, ensuring unparalleled performance and reliability.
          </p>
          <a 
            href="https://www.linkedin.com/in/oleksiivinogradov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
