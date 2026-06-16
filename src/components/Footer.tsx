import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>IXC Softswitch</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {t.footer.description}
            </p>
            <div className="footer-socials">
              <a href="http://www.youtube.com/alexIXC" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              <a href="http://twitter.com/alexIXC" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="http://www.facebook.com/ixc.ua" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/ixcsoftswitch/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>{t.footer.productsTitle}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/products/softswitch">Softswitch</Link></li>
              <li><Link to="/products/ai-automation">AI Automation</Link></li>
              <li><Link to="/products/sms-platform">SMS Platform</Link></li>
              <li><Link to="/products/monitoring-tool">Monitoring Tool</Link></li>
              <li><Link to="/products/ixc-autotester">Autotester</Link></li>
              <li><Link to="/products/white-black-list">White/Black List</Link></li>
              <li><Link to="/products/google-api">Google API</Link></li>
              <li><Link to="/products/technical-specifications">Technical specifications</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>{t.footer.companyTitle}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/about-us">{t.nav.aboutUs}</Link></li>
              <li><Link to="/blog">{t.nav.blog}</Link></li>
              <li><Link to="/privacy-policy">{t.nav.privacyPolicy}</Link></li>
              <li><a href="mailto:sales@ixc.ua">{t.nav.contactUs}</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>{t.footer.contactTitle}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t.footer.contactText}<br/><br/>
              <strong>Sales:</strong> <a href="mailto:sales@ixc.ua">sales@ixc.ua</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© IXC Software Distribution Inc, 1999–{new Date().getFullYear()}. {t.footer.copyright}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            7950 NW 53rd Street, Suite 337, Miami, Florida 33166 ·{' '}
            <Link to="/privacy-policy">{t.nav.privacyPolicy}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
