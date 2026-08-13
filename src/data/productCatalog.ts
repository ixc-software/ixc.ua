import type { Translations } from '../i18n/translations';

/** Order must match `translations.*.products.cards`. */
export const PRODUCT_SLUGS = [
  'softswitch',
  'ixc-recording',
  'ai-automation',
  'white-black-list',
  'monitoring-tool',
  'ixc-autotester',
  'sms-platform',
  'google-api',
  'technical-specifications'
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function isProductSlug(slug: string | undefined): slug is ProductSlug {
  return !!slug && (PRODUCT_SLUGS as readonly string[]).includes(slug);
}

export function productCardTitle(t: Translations, slug: string): string {
  const i = (PRODUCT_SLUGS as readonly string[]).indexOf(slug);
  return i >= 0 ? (t.products.cards[i]?.title ?? slug) : slug;
}
