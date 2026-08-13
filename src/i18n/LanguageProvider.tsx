import React, { createContext, useContext, useEffect, useState } from 'react';
import { htmlLang, Language, languages, Translations, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return languages.includes(value as Language);
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem('language');
    if (isLanguage(saved)) return saved;
  } catch { /* */ }
  const browserLang = navigator.language?.toLowerCase() ?? '';
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('uk')) return 'uk';
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try { localStorage.setItem('language', lang); } catch { /* */ }
    document.documentElement.setAttribute('lang', htmlLang[lang]);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', htmlLang[language]);
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
