import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashScrollLink } from './HashScrollLink';
import { LocaleLink } from './LocaleLink';
import { useTheme } from '../ThemeProvider';
import { useLanguage } from '../i18n/LanguageProvider';
import { languageNames, languages } from '../i18n/translations';
import { hreflangCode, localizePath } from '../i18n/localePath';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, t } = useLanguage();
  const { pathname, search, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="container header-content">
        <LocaleLink to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="IXC Logo" className="logo-img" />
          <h2 className="logo-text">IXC</h2>
        </LocaleLink>
        
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <LocaleLink to="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</LocaleLink>
          <HashScrollLink to={{ pathname: '/', hash: 'products' }} onClick={() => setMenuOpen(false)}>
            {t.nav.products}
          </HashScrollLink>
          <LocaleLink to="/about-us" onClick={() => setMenuOpen(false)}>{t.nav.aboutUs}</LocaleLink>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            <button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label={t.common.changeLanguage}
            >
              <Globe size={16} />
              <span>{languageNames[language]}</span>
            </button>
            <div className={`lang-dropdown glass${langOpen ? ' lang-dropdown-open' : ''}`}>
              {languages.map(lang => (
                <Link
                  key={lang}
                  to={`${localizePath(pathname, lang)}${search}${hash}`}
                  hrefLang={hreflangCode[lang]}
                  className={`lang-option ${lang === language ? 'lang-active' : ''}`}
                  onClick={() => setLangOpen(false)}
                >
                  {languageNames[lang]}
                </Link>
              ))}
            </div>
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label={t.common.toggleTheme} title={t.common.toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <HashScrollLink
            to={{ pathname: '/', hash: 'get-in-touch' }}
            className="btn btn-primary d-none-mobile"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.getFreeDemo}
          </HashScrollLink>
          <button className="menu-toggle" aria-label={t.common.menu} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <LocaleLink to="/news/ixc-recording" className="announcement-banner">
        {t.nav.bannerAnnouncement}
      </LocaleLink>
    </header>
  );
};
