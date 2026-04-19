import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="IXC Softswitch Logo" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          <h2>IXC Softswitch</h2>
        </Link>
        
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products/softswitch" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <a href="mailto:sales@ixc.ua" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="mailto:sales@ixc.ua" className="btn btn-primary d-none-mobile">Try it Now</a>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
