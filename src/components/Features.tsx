import React from 'react';
import {
  Cpu, GitBranch, Radio, Shield, TestTube, Music2,
  Lock, Plug, Settings, Gauge, Receipt, Monitor,
  Upload, Activity, Route, UserCircle, Beaker,
  Database, Headphones
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

const features = [
  {
    icon: <Cpu size={22} />,
    title: 'High Capacity',
    desc: 'Up to 4,000 VoIP channels per server, CPS up to 800, unlimited horizontal scalability.'
  },
  {
    icon: <GitBranch size={22} />,
    title: 'Intelligent Routing',
    desc: 'LCR, ASR/ACD, PDD, priority, percentage-based, A/B-number, time-based, and inheriting routing.'
  },
  {
    icon: <Radio size={22} />,
    title: 'Protocol Flexibility',
    desc: 'SIP & H.323 with protocol transcoding. SMS (SMPP 3.4) support built-in.'
  },
  {
    icon: <Shield size={22} />,
    title: 'Access List',
    desc: 'Built-in allow/deny number lists with auto-adding and auto-resetting features.'
  },
  {
    icon: <TestTube size={22} />,
    title: 'Route Quality Control',
    desc: 'Automatic route tester with live voice recordings to monitor quality and detect FAS.'
  },
  {
    icon: <Music2 size={22} />,
    title: 'Codec Support',
    desc: 'All major VoIP and GSM codecs with real-time transcoding.'
  },
  {
    icon: <Lock size={22} />,
    title: 'Integrated Security',
    desc: 'Proprietary SIP firewall, 2FA, and automatic backup system.'
  },
  {
    icon: <Plug size={22} />,
    title: 'Extensive API',
    desc: 'JSON API for external applications with Telegram bot support.'
  },
  {
    icon: <Settings size={22} />,
    title: 'Flexible SIP Profiles',
    desc: 'Customizable profiles for any SIP RFC call scenario.'
  },
  {
    icon: <Gauge size={22} />,
    title: 'CPS Limitation',
    desc: 'Reject unnecessary SIP attempts during overloads without affecting real traffic.'
  },
  {
    icon: <Receipt size={22} />,
    title: 'Automated Billing',
    desc: 'Financial invoices and bills generated automatically in customer time zones.'
  },
  {
    icon: <Monitor size={22} />,
    title: 'Modern Web Interface',
    desc: 'Intuitive UI with detailed reports, dark/light theme, and real-time dashboards.'
  },
  {
    icon: <Upload size={22} />,
    title: 'Auto Rate Management',
    desc: 'Automatic rate upload from IMAP with Telegram confirmation for rate increases.'
  },
  {
    icon: <Activity size={22} />,
    title: 'Traffic Monitoring',
    desc: 'Continuous traffic quality monitoring, alerting, and auto-blocking.'
  },
  {
    icon: <Route size={22} />,
    title: 'Call Routing History',
    desc: 'Full callpath analysis at CDRs report with all routing attempts and disconnect codes.'
  },
  {
    icon: <UserCircle size={22} />,
    title: 'Customer Portal',
    desc: 'Real-time active calls and reports overview for your clients.'
  },
  {
    icon: <Beaker size={22} />,
    title: 'Testing Tools',
    desc: 'Built-in SIP generation utility for testing any kind of scenario.'
  },
  {
    icon: <Database size={22} />,
    title: 'Data Protection',
    desc: 'Automatic backup system and two-factor authentication for enhanced security.'
  },
  {
    icon: <Headphones size={22} />,
    title: '24/7 NOC Support',
    desc: 'Live multilingual support (EN, RU) available around the clock for over 25 years.'
  }
];

export const Features: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="features" className="section container section-glow section-glow-left">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.features.title}</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
          {t.features.subtitle}
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => {
          const item = t.features.items[i];
          return (
          <div key={i} className="feature-card glass">
            <div className="feature-card-icon">{f.icon}</div>
            <div>
              <h4>{item?.title || f.title}</h4>
              <p>{item?.desc || f.desc}</p>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};
