import { Link, type LinkProps } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { localizeTo } from '../i18n/localePath';

/** React Router `Link` that keeps the current language prefix. */
export function LocaleLink({ to, ...rest }: LinkProps) {
  const { language } = useLanguage();
  return <Link to={localizeTo(to, language)} {...rest} />;
}
