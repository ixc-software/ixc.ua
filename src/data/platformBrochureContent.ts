import type { Language } from '../i18n/translations';
import type { BrochureData } from './platformBrochureTypes';
import { platformBrochureEn } from './platformBrochureEn';
import { platformBrochureRu } from './platformBrochureRu';
import { platformBrochureUk } from './platformBrochureUk';
import { platformBrochureZh } from './platformBrochureZh';

const byLang: Record<Language, BrochureData> = {
  en: platformBrochureEn,
  ru: platformBrochureRu,
  uk: platformBrochureUk,
  zh: platformBrochureZh
};

export function getPlatformBrochureData(lang: Language): BrochureData {
  return byLang[lang];
}
