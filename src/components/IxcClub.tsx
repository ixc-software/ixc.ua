import { ArrowRight, CalendarClock, Handshake, Network, TrendingUp } from 'lucide-react';
import { LocaleLink as Link } from './LocaleLink';
import { useLanguage } from '../i18n/LanguageProvider';
import { HashScrollLink } from './HashScrollLink';
import { SectionHeading } from './SectionHeading';
import './IxcClub.css';

const benefitIcons = [
  <Network size={28} key="network" />,
  <Handshake size={28} key="handshake" />,
  <CalendarClock size={28} key="calendar" />,
  <TrendingUp size={28} key="growth" />,
];

export function IxcClub() {
  const { t } = useLanguage();

  return (
    <section id="ixc-club" className="ixc-club-band" style={{ scrollMarginTop: '6rem' }}>
      <div className="section container">
        <SectionHeading
          spacious
          icon={<Handshake size={32} />}
          title={t.ixcClub.title}
          subtitle={t.ixcClub.subtitle}
        />

        <div className="ixc-club-benefits">
          {t.ixcClub.benefits.map((item, i) => (
            <div key={item.title} className="ixc-club-benefit glass">
              <div className="ixc-club-benefit-icon" aria-hidden="true">
                {benefitIcons[i]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="ixc-club-actions">
          <Link to="/ixc-club" className="btn btn-outline">
            {t.ixcClub.learnMore} <ArrowRight size={18} />
          </Link>
          <HashScrollLink to={{ pathname: '/', hash: 'get-in-touch' }} className="btn btn-primary">
            {t.ixcClub.joinCta} <ArrowRight size={18} />
          </HashScrollLink>
        </div>
      </div>
    </section>
  );
}
