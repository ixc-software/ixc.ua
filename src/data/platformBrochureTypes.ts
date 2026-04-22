import type { Language } from '../i18n/translations';

export const brochureImageSrc = (file: string) =>
  `${import.meta.env.BASE_URL}brochure/images/${file}`;

export type BrochureItem = { label: string; text: string };

export type BrochureSubsection = { title: string; items: BrochureItem[] };

export type BrochureSection = {
  id: string;
  title: string;
  lead?: string;
  body?: string[];
  images?: { file: string; alt: string }[];
  subsections?: BrochureSubsection[];
  extraBlocks?: { title: string; body: string }[];
};

export type BrochureData = {
  pageTitle: string;
  pageSubtitle: string;
  breadcrumb: string;
  keyFeaturesTitle: string;
  keyFeatures: BrochureItem[];
  sections: BrochureSection[];
  ctaTitle: string;
  ctaText: string;
  ctaContact: string;
  ctaHome: string;
};

export type BrochureByLang = Record<Language, BrochureData>;
