import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>IXC Softswitch</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              High-performance all-in-one solution for your VoIP business operations.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/products/softswitch">Softswitch</Link></li>
              <li><Link to="/products/sms-platform">SMS Platform</Link></li>
              <li><Link to="/products/monitoring-tool">Monitoring Tool</Link></li>
              <li><Link to="/products/ixc-autotester">Autotester</Link></li>
              <li><Link to="/products/white-black-list">White/Black List</Link></li>
              <li><Link to="/products/google-api">Google API</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/about-us">About Us</Link></li>
              <li><a href="mailto:sales@ixc.ua">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              Got questions? Get in touch with our team.<br/><br/>
              <strong>Email:</strong> <a href="mailto:info@ixc.ua">info@ixc.ua</a><br/>
              <strong>Sales:</strong> <a href="mailto:sales@ixc.ua">sales@ixc.ua</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© IXC SOFTSWITCH {new Date().getFullYear()}. All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
