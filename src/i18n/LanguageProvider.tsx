import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { htmlLang, Language, Translations, translations } from './translations';
import { languageFromPath, localizePath } from './localePath';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const language = languageFromPath(pathname);

  const setLanguage = (lang: Language) => {
    try { localStorage.setItem('language', lang); } catch { /* */ }
    const next = localizePath(pathname, lang);
    if (next !== pathname) {
      navigate(`${next}${search}${hash}`);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', htmlLang[language]);
    try { localStorage.setItem('language', language); } catch { /* */ }
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
