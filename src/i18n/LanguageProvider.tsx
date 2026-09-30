import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { htmlLang, type Language, type Translations } from './translations';
import { languageFromPath, localizePath } from './localePath';
import { loadTranslations, peekTranslations } from './loadLocale';

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

  useEffect(() => {
    document.documentElement.setAttribute('lang', htmlLang[language]);
    try { localStorage.setItem('language', language); } catch { /* */ }
  }, [language]);

  const t = peekTranslations(language);
  if (!t) {
    throw loadTranslations(language);
  }

  const setLanguage = (lang: Language) => {
    try { localStorage.setItem('language', lang); } catch { /* */ }
    void loadTranslations(lang).then(() => {
      const next = localizePath(pathname, lang);
      if (next !== pathname) {
        navigate(`${next}${search}${hash}`);
      }
    });
  };

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
