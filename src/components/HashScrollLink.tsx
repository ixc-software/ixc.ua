import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { scrollToElementById } from '../utils/scrollToElementId';
import { useLanguage } from '../i18n/LanguageProvider';
import { localizePath, localizeTo, stripLangPrefix } from '../i18n/localePath';

export type HashScrollLinkProps = LinkProps & {
  /** DOM id (no #). If omitted, taken from `to.hash` when `to` is an object. */
  scrollTargetId?: string;
};

function parseHashFromTo(to: LinkProps['to']): string | undefined {
  if (typeof to === 'string') {
    const i = to.indexOf('#');
    if (i < 0) return undefined;
    return to.slice(i + 1).replace(/^#/, '');
  }
  if (to && typeof to === 'object' && 'hash' in to) {
    const h = (to as { hash?: string }).hash;
    if (!h) return undefined;
    return h.startsWith('#') ? h.slice(1) : h;
  }
  return undefined;
}

function targetPathname(to: LinkProps['to']): string {
  if (typeof to === 'object' && to !== null && 'pathname' in to) {
    const p = (to as { pathname?: string }).pathname;
    return p && p !== '' ? p : '/';
  }
  if (typeof to === 'string') {
    const beforeHash = to.split('#')[0] ?? '';
    if (!beforeHash || beforeHash === '') return '/';
    return beforeHash.startsWith('/') ? beforeHash : `/${beforeHash}`;
  }
  return '/';
}

/**
 * Same as {@link Link}, but when already on the home route and the link targets that
 * route with a hash, performs scroll manually. React Router can skip real navigations for
 * hash-only updates on the same path, which leaves the page static without this.
 * Destinations are prefixed for the active language.
 */
export function HashScrollLink({ scrollTargetId, onClick, to, ...rest }: HashScrollLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const id = scrollTargetId ?? parseHashFromTo(to);
  const localizedTo = localizeTo(to, language);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !id) return;

    const onHome = stripLangPrefix(location.pathname).path === '/';
    const dest = stripLangPrefix(targetPathname(to)).path;
    const goesToHome = dest === '/';

    if (onHome && goesToHome) {
      e.preventDefault();
      void navigate({ pathname: localizePath('/', language), hash: id });
      scrollToElementById(id);
    }
  };

  return <Link to={localizedTo} onClick={handleClick} {...rest} />;
}
