import type { Language } from '../i18n/translations';

const LOCALES: Record<Language, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
  zh: 'zh-CN'
};

/** Format an ISO date (YYYY-MM-DD) into a localized, human-readable string. */
export function formatPostDate(iso: string, lang: Language): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat(LOCALES[lang] ?? 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch {
    return iso;
  }
}
