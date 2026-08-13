import type { Language } from './translations';
import { languages } from './translations';

/** Languages that appear as a URL prefix. English is unprefixed. */
export const URL_PREFIX_LANGUAGES: Exclude<Language, 'en'>[] = ['ru', 'uk', 'zh'];

/** hreflang values (Google). zh-Hans = Simplified Chinese, not China-only. */
export const hreflangCode: Record<Language, string> = {
  en: 'en',
  ru: 'ru',
  uk: 'uk',
  zh: 'zh-Hans'
};

export function isLanguagePrefix(segment: string | undefined): segment is Language {
  return !!segment && (languages as readonly string[]).includes(segment);
}

/**
 * Split `/zh/news/foo` → `{ lang: 'zh', path: '/news/foo' }`.
 * Unprefixed and `/en/...` both resolve to English; `/en` is stripped so callers
 * can redirect it to the canonical unprefixed URL.
 */
export function stripLangPrefix(pathname: string): { lang: Language; path: string } {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const parts = normalized.split('/').filter(Boolean);
  const first = parts[0];
  if (isLanguagePrefix(first)) {
    const rest = parts.slice(1);
    return { lang: first, path: rest.length ? `/${rest.join('/')}` : '/' };
  }
  return { lang: 'en', path: normalized };
}

export function languageFromPath(pathname: string): Language {
  return stripLangPrefix(pathname).lang;
}

/** Build the public path for a language. English has no prefix. */
export function localizePath(pathname: string, lang: Language): string {
  const { path } = stripLangPrefix(pathname);
  if (lang === 'en') return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`;
}

export function isLocalAppPath(path: string): boolean {
  if (!path.startsWith('/') || path.startsWith('//')) return false;
  const noQuery = path.split('?')[0] ?? path;
  if (/\.(pdf|png|jpe?g|gif|webp|svg|ico|txt|xml|mp3|mp4)$/i.test(noQuery)) return false;
  return true;
}

type ToLike =
  | string
  | {
      pathname?: string;
      search?: string;
      hash?: string;
    };

/** Prefix an internal `to` value for the active (or target) language. */
export function localizeTo<T extends ToLike>(to: T, lang: Language): T {
  if (typeof to === 'string') {
    const hashIndex = to.indexOf('#');
    const hash = hashIndex >= 0 ? to.slice(hashIndex) : '';
    const beforeHash = hashIndex >= 0 ? to.slice(0, hashIndex) : to;
    const qIndex = beforeHash.indexOf('?');
    const query = qIndex >= 0 ? beforeHash.slice(qIndex) : '';
    const path = qIndex >= 0 ? beforeHash.slice(0, qIndex) : beforeHash;
    const resolved = path === '' ? '/' : path;
    if (!isLocalAppPath(resolved)) return to;
    return `${localizePath(resolved, lang)}${query}${hash}` as T;
  }
  if (to && typeof to === 'object') {
    const path = to.pathname && to.pathname !== '' ? to.pathname : '/';
    if (!isLocalAppPath(path)) return to;
    return { ...to, pathname: localizePath(path, lang) };
  }
  return to;
}
