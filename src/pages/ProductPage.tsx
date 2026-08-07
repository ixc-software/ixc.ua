import { useParams, Link } from 'react-router-dom';
import { HashScrollLink } from '../components/HashScrollLink';
import {
  Server, Shield, Activity, Bot, MessageSquare, Code,
  ArrowRight, CheckCircle2, ArrowLeft, FileText, Download, Sparkles, Mic
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from '../components/SectionHeading';

interface ProductData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  /** Separate glass sections on the technical specifications page */
  realTimeReporting?: string[];
  callRoutingDepending?: string[];
}

const products: ProductData[] = [
  {
    slug: 'softswitch',
    title: 'Softswitch',
    subtitle: 'Carrier-Grade VoIP Switching & Billing',
    icon: <Server size={40} />,
    description: 'IXC Softswitch is a highly customized and scalable platform that serves to deliver VoIP wholesale services. This carrier-grade solution includes both switching and billing. IXC Softswitch is designed to serve the most sophisticated needs of carriers and ensures the most accurate real-time billing of postpaid and prepaid calls. It supports up to 4,000 VoIP channels per server with CPS up to 800 and unlimited horizontal scalability.',
    features: [
      'High Capacity — up to 4,000 VoIP channels per server, CPS up to 800, unlimited horizontal scalability',
      'Intelligent Routing — LCR, ASR/ACD, PDD, priority, percentage-based, A-number/B-number, time-based, and inheriting routing',
      'Protocol Flexibility — fully deployable in SIP and H.323 networks with protocol transcoding and SMS (SMPP 3.4) support',
      'Comprehensive Codec Support — all major VoIP and GSM codecs with real-time transcoding',
      'Integrated SIP Firewall — proprietary firewall preventing SIP spam and unauthorized access',
      'Extensive API — JSON API for external applications, including Telegram bot support',
      'Flexible SIP Profiles — customizable profiles for any SIP RFC call scenario',
      'CPS Limitation Module — reject traffic during overloads for unnecessary SIP attempts without affecting real traffic',
      'Automated Billing — financial invoices and bills generated automatically, sent to customers in their time zone',
      'Automated Rate Management — automatic rate upload from IMAP mail server with Telegram bot confirmation for rate increases',
      'Modern Web Interface — intuitive UI with detailed financial, operational, and management reports, dark/light theme',
      'Customer Portal — real-time active calls and reports overview for clients',
      'Call Routing History — check call routing (callpath) at CDRs report with full routing attempts and disconnect codes',
      'IXC Recording — softswitch captures call media; Billing 7 browses, searches, plays, and manages recordings by hour with one-click access from Originator and Terminator call reports',
      'AI Call Analysis — mark recorded calls in IXC; automatic reports for traffic profile (scam, gambling, casino, and more), emotion/agent/transcript, voice quality, and on-demand detections',
      'Post-recorded FAS & voicemail detection — mark detections on stored audio and build speech fingerprints for later ML matching',
      'Data Protection — automatic backup system and two-factor authentication',
      'Traffic Flow Report — general stats grouped by destinations with color filter rules and export to XLS/CSV',
      'Balance Report — complete financial overview per customer: traffic, invoices, payments, debts, credit limits, real-time balance',
      'Profit Report — profit and volume metrics with graphical format, groupable by period with destination/customer filters',
      'Variation Report — traffic trends in absolute and relative values over days, weeks, or months with custom thresholds',
      'Agreements & Commitments — target traffic volumes with daily calculations and automatic reminders',
      'Routing Table — complete routing rules view with inheritance, scheduled scenarios, bulk operations, CSV import/export',
      'Current Routes Tool — analyze routing for any destination with supplier rates, traffic volumes, quality, and pending rate increases',
      'Live Balance Checks — intelligent algorithm ensuring balances don\'t exceed credit limits with Telegram alerts for quick top-up',
      'Multi-level permission system for maximum security',
    ]
  },
  {
    slug: 'ixc-recording',
    title: 'IXC Recording',
    subtitle: 'Call Media Archive · AI Analysis · Post-recorded FAS & Voicemail',
    icon: <Mic size={40} />,
    description:
      'IXC Recording is the media layer on Softswitch and Billing 7: softswitch captures call audio; Billing 7 organises the archive by hour with search, playback, and one-click access from Originator and Terminator reports. Mark recorded calls in IXC to receive automatic AI analysis reports — traffic profiles, coaching, real voice quality, post-recorded FAS/voicemail marks with speech fingerprints, and on-demand detections clients request.',
    features: [
      'Softswitch media capture — voice recording written on the switch for enabled traffic',
      'Billing 7 archive — browse by hour, search, play, export, and manage retention',
      'One-click from call reports — open recordings from Originator and Terminator the same way as PCAP',
      'AI call analysis — mark calls in IXC, get automatic reports back in the platform',
      'High-level traffic profile — ML/transcription review for call-centre, scam, gambling, casino, and other verticals',
      'Know your traffic — sell more competitively with a readable profile of what you actually carry',
      'Real voice quality — clarity, cleared minutes, noise, one-way audio, and media issues from the recording itself',
      'Emotion & coaching insight — agent and customer scores for call-centre operations',
      'Post-recorded FAS detection — mark false-answer candidates on stored audio',
      'Post-recorded voicemail / IVR detection — mark non-human answer candidates',
      'Speech fingerprints — store FAS/voicemail signatures for later ML matching on new batches',
      'On-demand detections — custom issue packs clients need (compliance phrases, supplier silence thresholds, regional fingerprint packs, and more)',
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'IXC ↔ DealoAgent — Voice & SMS Carrier Operations at Scale',
    icon: <Sparkles size={40} />,
    description:
      'AI Automation connects IXC Softswitch with DealoAgent AI so carrier managers stop living in copy‑paste loops between email, messengers, and the billing UI. Ask in your native language — add destinations to carriers 1–3, change Cuba Mobile routing, or work out a commitment with carrier X from a 30‑line Excel — and IXC changes land in batch without multi‑step clicks, with full read, write, and delete coverage across every softswitch capability. Set periodic tasks to run every day or on your own schedule: batch updates in IXC, then push top destinations, traffic alerts, and balance notices to all carrier channels automatically. Deep analytics run on complex targets while Teams, Telegram, Gmail, and WhatsApp get the partner reply. Same payroll; up to 10× profit and 100+ accounts per manager instead of 5–10.',
    features: [
      'IXC ↔ DealoAgent partnership — AI reads and writes the softswitch, not just messengers',
      'Native-language commands — no rigid syntax; describe routing, rates, or commitments naturally',
      'Batch IXC updates — destinations, rates, and routing applied in one shot, skipping multi-step UI',
      'Deep analytics — commitments, target lists, and multi-line Excel imports analyzed automatically',
      'Channel orchestration — Gmail, Telegram, WhatsApp, MS Teams, and IXC in one flow',
      'Full IXC coverage — read, write, and delete across every softswitch capability the platform exposes, not just billing screens or manual exports',
      'Scheduled write-back — automate batch changes in IXC on a daily or custom cadence, then push results to every carrier channel',
      'Scheduled dispatch — top destinations, traffic alerts, and balance notices sent to all partners on a recurring timetable (e.g. every morning)',
      'Partner notifications — “All set — prices sent” or routing confirmations in Teams and messengers',
      'Scale per manager — from 5–10 accounts (manual) to 100+ on the same salary budget',
      'Competitive edge — up to 10× profit from the same headcount vs. copy‑paste workflows',
      'Built for wholesale voice & SMS carriers — routing, billing, and partner ops in one AI layer',
    ]
  },
  {
    slug: 'white-black-list',
    title: 'White/Black List',
    subtitle: 'Advanced Access List Module',
    icon: <Shield size={40} />,
    description: 'SIM blocking is one of the main problems of GSM termination business. In many countries, mobile operators and providers block GSM Gateways — affecting overall business and revenues of terminating companies. To help solve this issue, IXC has developed the Access List module. IXC Access List enables routing specific numbers via selected carriers (terminator/originator). The numbers can be uploaded by the user and then auto-updated by the system based on desired criteria.',
    features: [
      'Whitelist Scenario — route specific allowed numbers via selected carriers; all others routed via remaining terminators in failover scheme',
      'Blacklist Scenario — restrict specific numbers from being routed via selected terminators; helpful against anti-fraud test calls',
      'Filter by Called Numbers (CLD) and/or Caller IDs (CLI/ANI)',
      'Auto-update of number lists by the system based on desired criteria',
      'Auto-deletion of numbers after preconfigured expiration date',
      'User-friendly interface with 24/7/365 support'
    ]
  },
  {
    slug: 'monitoring-tool',
    title: 'Monitoring Tool',
    subtitle: 'Real-Time Traffic Analysis & Alerting',
    icon: <Activity size={40} />,
    description: 'IXC Monitoring Tool enables real-time traffic analysis, tracking key performance metrics such as ASR, ACD, PDD, and Profit. The system continuously checks these parameters and compares them to defined thresholds. When any value deviates from the desired range, the tool triggers an alert based on customizable rules.',
    features: [
      'Real-time monitoring of ASR, ACD, PDD, and Profit metrics',
      'Customizable alert rules — applicable to both originators and terminators',
      'Automated email alerts with configurable templates when stats deviate from thresholds',
      'Auto-blocking function for underperforming routes',
      'Automated Trouble Ticket emails directly to suppliers for faster issue resolution',
      'Telegram bot integration for instant notifications',
      'All events logged in database for later analysis',
      'Profit monitoring with alarm on low margins'
    ]
  },
  {
    slug: 'ixc-autotester',
    title: 'IXC Autotester',
    subtitle: 'Automated Route Quality Testing',
    icon: <Bot size={40} />,
    description: 'IXC Autotester is a fully automated solution for testing multiple routes and destinations. It helps improve route quality by detecting poor-performance connections and providing detailed insights into both existing and new interconnections. The tool automatically records test calls in MP3 format, allowing recordings to be reviewed directly in the web interface or attached to email notifications.',
    features: [
      'Fully automated testing of multiple routes and destinations — just a few clicks to start',
      'MP3 recording of test calls — listen directly in the web interface or download locally',
      'Support for SIP and H.323 protocols with any codec (G.711, G.723, G.729)',
      'Schedule recurring tests — ensuring continuous route monitoring',
      'Real RTP media stream generation for accurate audio quality testing',
      'Email notifications with attached call recordings and test results',
      'Detect poor quality and FAS (False Answer Supervision) automatically',
      'Test both existing and new interconnection routes'
    ]
  },
  {
    slug: 'sms-platform',
    title: 'SMS Platform',
    subtitle: 'All-In-One SMS Wholesale Solution',
    icon: <MessageSquare size={40} />,
    description: 'IXC has developed an all-in-one solution for SMS Wholesale companies. The competitively priced IXC SMS Platform is designed to make sending bulk SMS simple — from small companies running a few messages per month to high-volume customers sending thousands of messages per hour. The platform works on the basis of IXC V5 Softswitch but can also be used as a separate module, requiring only one server to run.',
    features: [
      'SMS Routing, Billing, and Switching in one platform',
      'Scales from low-volume to thousands of messages per hour',
      'Works on the basis of IXC V5 Softswitch or as a separate module',
      'SMPP 3.4 protocol support',
      'Requires only a single server to run',
      'Buy and rent options available',
      '24/7/365 technical support included'
    ]
  },
  {
    slug: 'google-api',
    title: 'Google API Integration',
    subtitle: 'Seamless Google Docs & Sheets Sync',
    icon: <Code size={40} />,
    description: 'IXC Google API is an online integration with Google documents and spreadsheets. Many customers keep their top/target destinations in Google spreadsheet docs for sharing — IXC makes this procedure automatic. Desired statistics are automatically updated to specific Google docs so everyone can see them online.',
    features: [
      'Integrate any IXC modules with Google Documents and Spreadsheets',
      'Automatic updates of statistics to specified Google Docs',
      'Real-time sharing of top/target destinations with stakeholders',
      'Continuously expanding library of supported tables and data',
      'Custom integrations available upon request',
      'Zero manual effort — fully automated sync'
    ]
  },
  {
    slug: 'technical-specifications',
    title: 'Product Technical Specifications',
    subtitle: 'Technical specification overview',
    icon: <FileText size={40} />,
    description:
      'Consolidated technical highlights of the IXC platform: network protocols, scale, routing intelligence, security, media and codecs, APIs, billing and reporting, customer experience, and operations support. For the full printable document, use the PDF below.',
    features: [
      'Deployable in SIP and H.323 VoIP networks with protocol transcoding',
      'Up to 4,000 VoIP channels per server with CPS up to 200',
      'Unlimited scalability',
      'Advanced security',
      'Call re-route even after SIP 180/183',
      'G.711, G.723.1, G.726, G.729A/B/AB and GSM codec support',
      'SMS SMPP 3.4 ready',
      'Most platform functions available via JSON API',
      'Intelligent routing (LCR, ACD/ASR, PDD, priority, and more)',
      'Traffic distribution on a percentage basis',
      'Proprietary firewall for SIP spam prevention',
      'RTP handling (signaling and full proxy mode)',
      'Multiple authentication methods',
      'Unlimited calling routes table',
      'Online billing and reporting',
      'Active calls template with extensive display fields',
      'Automatic data backup',
      'Powerful user management',
      'Customer portal with active calls',
      'Codec conversion and interoperability with Cisco, Lucent, Quintum',
      'Intuitive, user-friendly GUI with customization options',
      'Auto-route tester with live voice recordings for route quality and FAS detection',
      '24/7 NOC with multilingual support (EN, RU)',
    ],
    realTimeReporting: [
      'Detailed statistics report',
      'Traffic flow report',
      'Profitability report and graphs',
      'ASR/ACD reports and graphs',
      'Disconnect causes report',
      'Payment report',
      'Incomes and expenditures report',
      'Expenditures by category',
      'Auto invoice generation',
      'Statement report and concurrent call limits',
      'System configuration report for a given terminator',
      'Top/target destination report',
    ],
    callRoutingDepending: [
      'Percent allocation',
      'Minute cost (least cost routing)',
      'ASR/ACD/PDD-based routing',
      'Called party number',
      'Calling party group',
      'Quality routing',
      'Priority routing',
      'Easy managed routing trees',
    ],
  }
];

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>{t.productPage.notFoundTitle}</h1>
            <p className="page-hero-subtitle">{t.productPage.notFoundText}</p>
            <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={18} /> {t.productPage.backHome}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Get adjacent products for navigation
  const currentIndex = products.findIndex(p => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <div className="page-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="page-breadcrumb">
            <Link to="/">{t.nav.home}</Link> / <Link to="/#products">{t.nav.products}</Link> / {product.title}
          </p>
          <div className="product-hero-layout">
            <div className="product-hero-icon glass">
              {product.icon}
            </div>
            <div>
              <h1>{product.title}</h1>
              <p className="page-hero-subtitle">{product.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="section container">
        <SectionHeading spacious icon={<FileText size={32} />} title={t.productPage.overview} />
        <div className="product-detail-grid product-detail-grid--with-heading">
          <div className="product-description">
            <p>{product.description}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <HashScrollLink to={{ pathname: '/', hash: 'get-in-touch' }} className="btn btn-primary">
                {t.productPage.requestDemo} <ArrowRight size={18} />
              </HashScrollLink>
              <a href="mailto:sales@ixc.ua" className="btn btn-outline">
                {t.productPage.contactSales}
              </a>
              {product.slug === 'technical-specifications' ? (
                <a href="/ixc_specifications.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <Download size={18} /> {t.productPage.downloadSpecPdf}
                </a>
              ) : null}
            </div>
          </div>

          <div className="product-features glass">
            <h3>{t.productPage.keyFeatures}</h3>
            <ul className="feature-list">
              {product.features.map((f, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} color="var(--accent-color)" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {product.realTimeReporting && product.callRoutingDepending ? (
          <div className="product-spec-extra-grid">
            <div className="product-features glass">
              <h3>{t.productPage.realTimeReporting}</h3>
              <ul className="feature-list">
                {product.realTimeReporting.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color="var(--accent-color)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-features glass">
              <h3>{t.productPage.callRoutingDepending}</h3>
              <ul className="feature-list">
                {product.callRoutingDepending.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color="var(--accent-color)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </section>

      {/* Product Navigation */}
      <section className="section container">
        <div className="product-nav">
          {prevProduct ? (
            <Link to={`/products/${prevProduct.slug}`} className="product-nav-link glass">
              <ArrowLeft size={18} />
              <div>
                <span className="product-nav-label">{t.productPage.previous}</span>
                <span className="product-nav-title">{prevProduct.title}</span>
              </div>
            </Link>
          ) : <div />}
          {nextProduct ? (
            <Link to={`/products/${nextProduct.slug}`} className="product-nav-link product-nav-next glass">
              <div>
                <span className="product-nav-label">{t.productPage.next}</span>
                <span className="product-nav-title">{nextProduct.title}</span>
              </div>
              <ArrowRight size={18} />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};
