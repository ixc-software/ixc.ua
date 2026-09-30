import type { Language, Translations } from './translations';

const cache = new Map<Language, Translations>();

const loaders: Record<Language, () => Promise<{ default: Translations }>> = {
  en: () => import('./locales/en'),
  ru: () => import('./locales/ru'),
  uk: () => import('./locales/uk'),
  zh: () => import('./locales/zh'),
};

export function peekTranslations(lang: Language): Translations | undefined {
  return cache.get(lang);
}

/** Load one language file. Other languages stay out of the first download. */
export async function loadTranslations(lang: Language): Promise<Translations> {
  const hit = cache.get(lang);
  if (hit) return hit;
  const mod = await loaders[lang]();
  cache.set(lang, mod.default);
  return mod.default;
}
