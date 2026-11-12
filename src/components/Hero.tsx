import React, { useEffect, useRef } from 'react';
import { LocaleLink as Link } from './LocaleLink';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

const clients = [
  {
    "name": "Kyivstar",
    "url": "https://kyivstar.ua/"
  },
  {
    "name": "4carriers",
    "url": "https://www.4carriers.pl"
  },
  {
    "name": "Alizeetelecom",
    "url": "https://www.alizeetelecom.com"
  },
  {
    "name": "Alltimetelecom",
    "url": "https://www.alltimetelecom.net"
  },
  {
    "name": "Aqwaretel",
    "url": "https://www.aqwaretel.com"
  },
  {
    "name": "Arandatelecoms",
    "url": "https://www.arandatelecoms.com"
  },
  {
    "name": "ASK-VoIP",
    "url": "http://www.ask-voip.com/"
  },
  {
    "name": "Bigetelecom",
    "url": "https://bigetelecom.com/"
  },
  {
    "name": "Cronomax",
    "url": "https://www.cronomax.net"
  },
  {
    "name": "Dialtel",
    "url": "https://www.dialtel.net"
  },
  {
    "name": "Ecosmob",
    "url": "https://www.ecosmob.com"
  },
  {
    "name": "EON Telecom",
    "url": "https://eontelecom.com/"
  },
  {
    "name": "Filasco",
    "url": "https://www.filasco.net"
  },
  {
    "name": "Firstcarrier",
    "url": "https://www.firstcarrier.com"
  },
  {
    "name": "Global Rap Calling",
    "url": "https://voip.globalrap.net/"
  },
  {
    "name": "Invescotel",
    "url": "https://www.invescotel.com"
  },
  {
    "name": "Ipconnex",
    "url": "https://www.ipconnex.com"
  },
  {
    "name": "IPTelecom",
    "url": "https://www.iptelecom.asia/"
  },
  {
    "name": "Iptelin",
    "url": "https://www.iptelin.net"
  },
  {
    "name": "Ixcglobal",
    "url": "https://www.ixcglobal.com"
  },
  {
    "name": "Jotelecom",
    "url": "https://www.jotelecom.com"
  },
  {
    "name": "Jstel",
    "url": "https://www.jstel.cz"
  },
  {
    "name": "K4Tel",
    "url": "https://k4tel.com/"
  },
  {
    "name": "KazNetCom",
    "url": "https://www.kaznetcom.kz/"
  },
  {
    "name": "Knxcomm",
    "url": "https://www.knxcomm.net"
  },
  {
    "name": "Malaktel",
    "url": "https://www.malaktel.com"
  },
  {
    "name": "Mediafon Group",
    "url": "https://www.mediafon.com/"
  },
  {
    "name": "Netpluz",
    "url": "https://www.netpluz.asia"
  },
  {
    "name": "Nextcarrier",
    "url": "https://www.nextcarrier.net"
  },
  {
    "name": "Ngncorp",
    "url": "https://www.ngncorp.com"
  },
  {
    "name": "O3",
    "url": "https://www.o3.ua"
  },
  {
    "name": "Phontel Networks",
    "url": "https://www.phontel.net/"
  },
  {
    "name": "Prolinkslb",
    "url": "https://www.prolinkslb.com"
  },
  {
    "name": "Q-berry",
    "url": "https://www.q-berry.com"
  },
  {
    "name": "Qatama",
    "url": "https://www.qatama.com"
  },
  {
    "name": "Redplanetglobal",
    "url": "https://www.redplanetglobal.com"
  },
  {
    "name": "Rteedge",
    "url": "https://www.rteedge.com"
  },
  {
    "name": "Saharagroup",
    "url": "https://www.saharagroup.co.uk"
  },
  {
    "name": "Satas",
    "url": "https://www.satas.co.ke"
  },
  {
    "name": "Savytel",
    "url": "https://www.savytel.com"
  },
  {
    "name": "Servicebox",
    "url": "https://www.servicebox.ge"
  },
  {
    "name": "Sg",
    "url": "https://www.sg.gs"
  },
  {
    "name": "Stc",
    "url": "https://www.stc.com.kw"
  },
  {
    "name": "Swiftel",
    "url": "https://www.swiftel.net/"
  },
  {
    "name": "Syntegoits",
    "url": "https://www.syntegoits.com"
  },
  {
    "name": "Teknotelltd",
    "url": "https://www.teknotelltd.com"
  },
  {
    "name": "TeleFusion",
    "url": "https://www.telefusion.de/"
  },
  {
    "name": "Telefusionnetwork",
    "url": "https://www.telefusionnetwork.com"
  },
  {
    "name": "Telesense",
    "url": "https://www.telesenseglobal.com/"
  },
  {
    "name": "Terminium",
    "url": "https://www.terminium.co"
  },
  {
    "name": "Termsat",
    "url": "https://www.termsat.com"
  },
  {
    "name": "Tlynx",
    "url": "https://www.tlynx.co.uk"
  },
  {
    "name": "Unibuilders",
    "url": "https://www.unibuilders.com"
  },
  {
    "name": "Voicekings",
    "url": "https://www.voicekings.co.uk"
  },
  {
    "name": "Vozcodex",
    "url": "https://www.vozcodex.com"
  },
  {
    "name": "Zetta Telecom",
    "url": "https://zettatelecom.com/"
  },
  {
    "name": "Zeust",
    "url": "https://www.zeust.net"
  },
  {
    "name": "Zxeer",
    "url": "https://www.zxeer.com"
  }
];

const HERO_VIDEO_DESKTOP = '/media/hero-aisle-desktop.mp4';
const HERO_VIDEO_MOBILE = '/media/hero-aisle-mobile.mp4';

function phoneHero(): boolean {
  const width = Math.min(window.innerWidth, document.documentElement.clientWidth || window.innerWidth);
  if (width <= 900) return true;
  return window.matchMedia('(orientation: portrait)').matches;
}

function skipHeroVideo(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  const conn = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  return conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g';
}

/** Decorative loop. Src is assigned after load so it stays off the critical path. */
const HeroBackdrop: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || skipHeroVideo()) return;

    const ac = new AbortController();
    let objectUrl: string | null = null;
    let idleId = 0;
    let timeoutId = 0;
    let generation = 0;
    let currentKind: 'phone' | 'desktop' | null = null;

    const load = () => {
      if (ac.signal.aborted) return;
      const kind = phoneHero() ? 'phone' : 'desktop';
      if (kind === currentKind) return;
      currentKind = kind;
      const token = ++generation;
      const src = kind === 'phone' ? HERO_VIDEO_MOBILE : HERO_VIDEO_DESKTOP;
      fetch(src, { priority: 'low', signal: ac.signal })
        .then((res) => {
          if (!res.ok) throw new Error(String(res.status));
          return res.blob();
        })
        .then((blob) => {
          if (ac.signal.aborted || token !== generation || !videoRef.current) return;
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          objectUrl = URL.createObjectURL(blob);
          const el = videoRef.current;
          el.src = objectUrl;
          el.addEventListener('playing', () => el.classList.add('is-ready'), { once: true });
          return el.play();
        })
        .catch(() => {
          if (token === generation) currentKind = null;
          /* Decorative. The existing mesh background stays in place. */
        });
    };

    const queue = () => {
      if (ac.signal.aborted) return;
      const kick = () => {
        if (ac.signal.aborted) return;
        if (typeof window.requestIdleCallback === 'function') {
          idleId = window.requestIdleCallback(load, { timeout: 1500 });
        } else {
          load();
        }
      };
      // After the first paint has settled, so the heading stays the largest paint.
      timeoutId = window.setTimeout(kick, 2500);
    };

    if (document.readyState === 'complete') queue();
    else window.addEventListener('load', queue, { once: true });

    const onViewport = () => load();
    window.addEventListener('resize', onViewport);
    window.addEventListener('orientationchange', onViewport);

    return () => {
      ac.abort();
      window.removeEventListener('load', queue);
      window.removeEventListener('resize', onViewport);
      window.removeEventListener('orientationchange', onViewport);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      const el = videoRef.current;
      if (el) {
        el.pause();
        el.removeAttribute('src');
        el.load();
      }
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        loop
        preload="none"
        tabIndex={-1}
      />
      <div className="hero-scrim" />
    </div>
  );
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero animate-fade-in">
        <HeroBackdrop />
        <div className="container hero-copy">
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <Link to="/news/ixc-recording" className="btn btn-primary hero-explore-btn">
              <span className="hero-ai-badge">{t.hero.aiStamp}</span>
              {t.hero.exploreProducts} <ArrowRight size={18} />
            </Link>
            <a href="mailto:sales@ixc.ua" className="btn btn-outline">
              {t.hero.contactSales} <PhoneCall size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="trust-banner">
        <div className="container" style={{ width: '100%', padding: '0' }}>
          <div className="trust-stats">
            <h3>{t.trust.since} <strong>1999</strong></h3>
            <p><strong>272</strong> {t.trust.clients}</p>
          </div>
          
          <div className="marquee-wrapper">
            <div className="marquee-container">
              {/* Double array for seamless infinite scrolling */}
              {[...clients, ...clients].map((client, i) => (
                <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="marquee-item">
                  {client.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
