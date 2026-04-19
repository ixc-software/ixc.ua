import React from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header glass">
      <div className="container header-content">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="IXC Softswitch Logo" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          <h2>IXC Softswitch</h2>
        </div>
        
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#news">News</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="https://interexc.com/contact-us" className="btn btn-primary d-none-mobile">Try it Now</a>
          <button className="menu-toggle" aria-label="Menu"><Menu size={24} /></button>
        </div>
      </div>
    </header>
  );
};
