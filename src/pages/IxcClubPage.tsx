import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Handshake,
  MessageSquare,
  Plane,
  Sparkles,
  Ticket,
  TrendingDown,
  TrendingUp,
  UserCog,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { HashScrollLink } from '../components/HashScrollLink';
import { SectionHeading } from '../components/SectionHeading';
import '../components/IxcClub.css';

const flowIcons = [
  <BadgeCheck size={26} key="member" />,
  <UserCog size={26} key="profile" />,
  <MessageSquare size={26} key="teams" />,
  <Handshake size={26} key="deal" />,
  <TrendingUp size={26} key="profit" />,
];

const problemIcons = [
  <Ticket size={24} key="ticket" />,
  <Plane size={24} key="plane" />,
  <Briefcase size={24} key="briefcase" />,
  <TrendingDown size={24} key="cost" />,
];

export function IxcClubPage() {
  const { t } = useLanguage();

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / {t.ixcClub.pageTitle}
          </p>
          <h1>{t.ixcClub.pageTitle}</h1>
          <p className="page-hero-subtitle">{t.ixcClub.pageSubtitle}</p>
        </div>
      </section>

      <section className="ixc-club-band">
        <div className="section container">
          <div className="ixc-club-problem-solution">
            <div className="ixc-club-problem glass">
              <h2 className="ixc-club-ps-title">{t.ixcClub.problemTitle}</h2>
              <p className="ixc-club-ps-intro">{t.ixcClub.problemIntro}</p>
              <ul className="ixc-club-cost-list">
                {t.ixcClub.problemCosts.map((item, i) => (
                  <li key={item.title} className="ixc-club-cost-item">
                    <span className="ixc-club-cost-icon ixc-club-cost-icon--problem" aria-hidden="true">
                      {problemIcons[i]}
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="ixc-club-ps-footer">{t.ixcClub.problemFooter}</p>
            </div>

            <div className="ixc-club-solution glass">
              <div className="ixc-club-solution-badge" aria-hidden="true">
                <Sparkles size={22} />
              </div>
              <h2 className="ixc-club-ps-title">{t.ixcClub.solutionTitle}</h2>
              <p className="ixc-club-solution-text">{t.ixcClub.solutionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading spacious icon={<Users size={32} />} title={t.ixcClub.flowTitle} subtitle={t.ixcClub.flowSubtitle} />

        <ol className="ixc-club-flow">
          {t.ixcClub.flowSteps.map((step, i) => (
            <li key={step.title} className="ixc-club-flow-step glass">
              <div className="ixc-club-flow-step-head">
                <span className="ixc-club-flow-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="ixc-club-flow-icon" aria-hidden="true">
                  {flowIcons[i]}
                </div>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section container">
        <div className="glass ixc-club-highlight">
          <h2>{t.ixcClub.highlightTitle}</h2>
          <p>{t.ixcClub.highlightText}</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeading spacious icon={<Handshake size={32} />} title={t.ixcClub.ctaTitle} subtitle={t.ixcClub.ctaText} />
        <div className="glass cta-block cta-block--actions">
          <div className="ixc-club-actions">
            <HashScrollLink to={{ pathname: '/', hash: 'get-in-touch' }} className="btn btn-primary">
              {t.ixcClub.joinCta} <ArrowRight size={18} />
            </HashScrollLink>
            <a href="mailto:sales@ixc.ua" className="btn btn-outline">
              sales@ixc.ua <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
