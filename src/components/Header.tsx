import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import { useLanguage } from '../i18n/LanguageProvider';
import { Language, languageNames } from '../i18n/translations';

const languages: Language[] = ['en', 'ru', 'uk'];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="IXC Softswitch Logo" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
          <h2>IXC Softswitch</h2>
        </Link>
        
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
          <Link to="/products/softswitch" onClick={() => setMenuOpen(false)}>{t.nav.products}</Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>{t.nav.aboutUs}</Link>
          <a href="mailto:sales@ixc.ua" onClick={() => setMenuOpen(false)}>{t.nav.contactUs}</a>
        </nav>

        <div className="header-actions">
          {/* Language Switcher */}
          <div className="lang-switcher">
            <button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{languageNames[language]}</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown glass">
                {languages.map(lang => (
                  <button
                    key={lang}
                    className={`lang-option ${lang === language ? 'lang-active' : ''}`}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="mailto:sales@ixc.ua" className="btn btn-primary d-none-mobile">{t.nav.tryItNow}</a>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
