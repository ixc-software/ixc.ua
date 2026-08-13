export type Language = 'en' | 'ru' | 'uk' | 'zh';

export const languages: Language[] = ['en', 'ru', 'uk', 'zh'];

export const languageNames: Record<Language, string> = {
  en: 'EN',
  ru: 'RU',
  uk: 'UA',
  zh: '中文'
};

/** BCP 47 tags for <html lang> and date formatting. */
export const htmlLang: Record<Language, string> = {
  en: 'en',
  ru: 'ru',
  uk: 'uk',
  zh: 'zh-CN'
};

export interface ProductCardTranslation {
  title: string;
  description: string;
}

export interface FeatureTranslation {
  title: string;
  desc: string;
}

export interface TestimonialTranslation {
  quote: string;
  author: string;
  role: string;
}

export interface CapabilityTranslation {
  title: string;
  description: string;
}

export interface StrengthTranslation {
  title: string;
  description: string;
}

export interface CertificateDocumentTranslation {
  title: string;
  description: string;
  certificateNo: string;
  registeredDate: string;
}

export interface Translations {
  nav: {
    home: string;
    products: string;
    aboutUs: string;
    contactUs: string;
    privacyPolicy: string;
    blog: string;
    getFreeDemo: string;
    bannerAnnouncement: string;
  };
  privacyPolicy: {
    title: string;
    subtitle: string;
    lastUpdated: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    backToBlog: string;
    minRead: string;
    faqTitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    notFoundTitle: string;
    notFoundText: string;
  };
  hero: {
    title: string;
    subtitle: string;
    aiStamp: string;
    exploreProducts: string;
    contactSales: string;
  };
  trust: {
    since: string;
    clients: string;
  };
  aiIntegration: {
    title: string;
    subtitle: string;
    footer: string;
    partnership: string;
    oldApproach: string;
    newApproach: string;
    oldApproachCaption: string;
    newApproachCaption: string;
    learnMore: string;
  };
  products: {
    title: string;
    subtitle: string;
    learnMore: string;
    cards: ProductCardTranslation[];
  };
  ixcClub: {
    title: string;
    subtitle: string;
    learnMore: string;
    joinCta: string;
    pageTitle: string;
    pageSubtitle: string;
    problemTitle: string;
    problemIntro: string;
    problemCosts: CapabilityTranslation[];
    problemFooter: string;
    solutionTitle: string;
    solutionText: string;
    flowTitle: string;
    flowSubtitle: string;
    flowSteps: CapabilityTranslation[];
    highlightTitle: string;
    highlightText: string;
    ctaTitle: string;
    ctaText: string;
    benefits: CapabilityTranslation[];
  };
  features: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: FeatureTranslation[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialTranslation[];
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    breadcrumb: string;
    backToNews: string;
    notFoundTitle: string;
    notFoundText: string;
    previous: string;
    next: string;
  };
  contactSection: {
    title: string;
    subtitle: string;
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    company: string;
    optional: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    emailUs: string;
    errorGeneric: string;
    errorNetwork: string;
  };
  common: {
    email: string;
    telegram: string;
    whatsapp: string;
    teams: string;
    office: string;
    sales: string;
    changeLanguage: string;
    toggleTheme: string;
    menu: string;
    contactUs: string;
    needHelp: string;
    previousTestimonial: string;
    nextTestimonial: string;
  };
  team: {
    title: string;
    founderRole: string;
    founderBio: string;
    connectLinkedIn: string;
  };
  footer: {
    description: string;
    productsTitle: string;
    companyTitle: string;
    contactTitle: string;
    contactText: string;
    copyright: string;
    salesLabel: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    whatWeDoTitle: string;
    whatWeDoSubtitle: string;
    whyTitle: string;
    whySubtitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaContactSales: string;
    ctaExploreProducts: string;
    capabilities: CapabilityTranslation[];
    strengths: StrengthTranslation[];
    certificatesTitle: string;
    certificatesSubtitle: string;
    certificatesNoLabel: string;
    certificatesDateLabel: string;
    certificatesPageLabel: string;
    certificatesViewFull: string;
    certificatesDocuments: CertificateDocumentTranslation[];
  };
  productPage: {
    overview: string;
    keyFeatures: string;
    realTimeReporting: string;
    callRoutingDepending: string;
    requestDemo: string;
    contactSales: string;
    downloadSpecPdf: string;
    previous: string;
    next: string;
    notFoundTitle: string;
    notFoundText: string;
    backHome: string;
  };
}

// ============================================================
// ENGLISH
// ============================================================
const en: Translations = {
  nav: {
    home: 'Home',
    products: 'Products',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    blog: 'Blog',
    getFreeDemo: 'Get free demo',
    bannerAnnouncement: 'IXC Recording — foundation for AI call analysis, FAS & voicemail detection'
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    subtitle:
      'How IXC Software Distribution Corp. collects, uses, and protects personal information on ixc.ua.',
    lastUpdated: 'Last updated',
  },
  hero: {
    title: 'Carrier-style VoIP infrastructure—proven in production since 1999',
    subtitle:
      'Run wholesale and retail voice on a single high-capacity stack: advanced LCR and policy routing, automated billing, route testing and FAS detection, APIs and alerts—backed by 24/7 multilingual NOC support.',
    aiStamp: 'Recording',
    exploreProducts: 'Explore IXC Recording',
    contactSales: 'Contact Sales'
  },
  trust: {
    since: 'Building Trust Since',
    clients: 'clients globally in the wholesale VoIP business.'
  },
  aiIntegration: {
    title: 'AI Automation for Voice & SMS Carriers',
    subtitle:
      'A carrier manager tops out at 5–10 accounts when routing, rate checks, partner chats, and spreadsheets all run on copy‑paste and manual analysis. AI scales that to 100+ on the same payroll—up to 10× profit from the same salary budget and a lasting edge over competitors still doing it by hand.',
    footer:
      'Managers still read and write email and messengers, click through the softswitch for every route and rate, and copy‑paste between both. Ask in your native language — add destinations to carriers 1–3, change Cuba Mobile routing, or work out how to fill a commitment with carrier X from a 30‑line Excel — and IXC changes land in batch without multi‑step UI, while AI runs deep analysis. Teams and messengers get the reply; the switch is already updated.',
    partnership: 'IXC ↔ DealoAgent',
    oldApproach: 'OLD APPROACH',
    newApproach: 'NEW APPROACH',
    oldApproachCaption: 'Max 5–10 accounts per manager',
    newApproachCaption: '100+ accounts per manager, same payroll',
    learnMore: 'Learn more →',
  },
  products: {
    title: 'Our Core Products',
    subtitle: 'Explore our suite of highly tuned telecommunication solutions built directly for modern wholesale and retail VoIP businesses.',
    learnMore: 'Learn more →',
    cards: [
      { title: 'Softswitch', description: 'A Class 4/5 VoIP platform designed for maximum throughput, detailed billing, and advanced routing intelligence.' },
      { title: 'IXC Recording', description: 'Softswitch captures call media; Billing 7 organises the archive — plus AI call analysis, traffic profiles, voice quality, FAS/voicemail detect and drop, and personalised SMS post-call campaigns.' },
      { title: 'AI Automation', description: 'IXC ↔ DealoAgent: native-language commands, batch softswitch updates, and messenger dispatch—scale from 5–10 to 100+ accounts per manager.' },
      { title: 'White/Black List', description: 'Dynamic protection and flexible routing rules to ensure unparalleled security and spam call prevention.' },
      { title: 'Monitoring Tool', description: 'Real-time analytics and dynamic graphs allowing you to trace SIP data for immediate troubleshooting.' },
      { title: 'Autotester', description: 'Ensure route quality by proactively generating automated test calls and analyzing the results.' },
      { title: 'SMS Platform', description: 'An integrated bulk messaging solution ready to manage fast transit and optimal delivery paths.' },
      { title: 'Google API Integration', description: 'Enhance your operations with extended integration points mapping to leading enterprise services.' },
      { title: 'Product Technical Specifications', description: 'Protocols, capacity, routing, security, codecs, billing, reporting, and 24/7 NOC—consolidated in one reference.' },
    ]
  },
  ixcClub: {
    title: 'IXC Club',
    subtitle: 'Business development for IXC clients — curated telecom introductions that turn into new voice and SMS interconnections.',
    learnMore: 'How IXC Club works',
    joinCta: 'Join IXC Club',
    pageTitle: 'IXC Club',
    pageSubtitle: 'Curated carrier introductions for IXC clients — new interconnections, direct deals, growing profit.',
    problemTitle: 'Why finding new telecom contacts is expensive',
    problemIntro:
      'Wholesale voice and SMS growth means constantly meeting new operators. When you build that pipeline yourself, the bill adds up fast:',
    problemCosts: [
      {
        title: 'Exhibition and trade-show fees',
        description: 'Booth space, sponsorships, and event packages at ITW, Capacity, and regional telecom shows.',
      },
      {
        title: 'Flights and accommodation',
        description: 'Travel for your sales and BD team to meet prospects face to face across regions.',
      },
      {
        title: 'Business development salaries',
        description: 'Full-time managers hunting leads, following up, and qualifying interconnect partners.',
      },
      {
        title: 'The real cost of growth',
        description: 'Months of spend before one signed route — growth can cost more than the margin it brings.',
      },
    ],
    problemFooter: 'For many carriers, building a contact network from scratch is one of the largest hidden costs in the business.',
    solutionTitle: 'IXC already built the network — grow without the huge expense',
    solutionText:
      'IXC sales managers maintain thousands of live relationships with operators open to voice and SMS interconnection. IXC Club gives eligible clients curated, profile-matched introductions — the exhibitions, travel, and outreach are already done. You talk to qualified partners, sign agreements, and grow profit while IXC helps your business development without a separate club fee.',
    flowTitle: 'How IXC Club works',
    flowSubtitle: 'From membership to new routes — a simple flow built around your business profile.',
    flowSteps: [
      {
        title: 'You are an IXC client on an eligible tier',
        description:
          'Active IXC Softswitch customers on qualifying service tiers are automatically part of IXC Club — no separate subscription.',
      },
      {
        title: 'We map your business profile',
        description:
          'Voice or SMS, wholesale or retail, regions, originator/terminator focus, and capacity needs — so introductions fit how you actually trade.',
      },
      {
        title: '3–5 curated contacts per week via Microsoft Teams',
        description:
          'Our team selects hot prospects from thousands of live relationships and delivers introductions to you on Teams — typically three to five times per week.',
      },
      {
        title: 'You talk, sign, and interconnect directly',
        description:
          'You hold the commercial conversation, negotiate terms, and sign agreements. IXC does not sit in the middle of your deal — we open the door.',
      },
      {
        title: 'New routes, more profit — IXC supports growth for free',
        description:
          'Successful interconnections increase your traffic and margin. IXC Club is part of how we help clients grow — business development included with your IXC partnership.',
      },
    ],
    highlightTitle: 'Why IXC runs the club',
    highlightText:
      'When our clients grow, the network gets stronger for everyone. IXC Club connects your switch and operations to real commercial opportunity — without charging a separate introduction fee.',
    ctaTitle: 'Ready to join?',
    ctaText: 'Contact us to confirm your tier, update your business profile, and start receiving curated introductions.',
    benefits: [
      {
        title: 'Thousands of live contacts',
        description: 'IXC sales managers maintain an active network of voice and SMS operators worldwide.',
      },
      {
        title: 'Voice & SMS interconnection',
        description: 'Introductions aimed at operators who want to set up new wholesale or retail routes with you.',
      },
      {
        title: '3–5 hot leads weekly',
        description: 'Curated prospects matched to your profile — not a static directory dump.',
      },
      {
        title: 'Growth support, no club fee',
        description: 'IXC invests in your business development so you can focus on signing and scaling interconnections.',
      },
    ],
  },
  features: {
    title: 'Platform Features',
    subtitle: 'A comprehensive set of capabilities engineered for the demands of modern wholesale and retail VoIP operations.',
    learnMore: 'Learn more',
    items: [
      { title: 'High Capacity', desc: 'Up to 4,000 VoIP channels per server, CPS up to 800, unlimited horizontal scalability.' },
      { title: 'Intelligent Routing', desc: 'LCR, ASR/ACD, PDD, priority, percentage-based, A/B-number, time-based, and inheriting routing.' },
      { title: 'Protocol Flexibility', desc: 'SIP & H.323 with protocol transcoding. SMS (SMPP 3.4) support built-in.' },
      { title: 'Access List', desc: 'Built-in allow/deny number lists with auto-adding and auto-resetting features.' },
      { title: 'Route Quality Control', desc: 'Automatic route tester with live voice recordings to monitor quality and detect FAS.' },
      { title: 'Codec Support', desc: 'All major VoIP and GSM codecs with real-time transcoding.' },
      { title: 'Integrated Security', desc: 'Proprietary SIP firewall, 2FA, and automatic backup system.' },
      { title: 'Extensive API', desc: 'JSON API for external applications with Telegram bot support.' },
      { title: 'Flexible SIP Profiles', desc: 'Customizable profiles for any SIP RFC call scenario.' },
      { title: 'CPS Limitation', desc: 'Reject unnecessary SIP attempts during overloads without affecting real traffic.' },
      { title: 'Automated Billing', desc: 'Financial invoices and bills generated automatically in customer time zones.' },
      { title: 'Modern Web Interface', desc: 'Intuitive UI with detailed reports, dark/light theme, and real-time dashboards.' },
      { title: 'Auto Rate Management', desc: 'Automatic rate upload from IMAP with Telegram confirmation for rate increases.' },
      { title: 'Traffic Monitoring', desc: 'Continuous traffic quality monitoring, alerting, and auto-blocking.' },
      { title: 'Call Routing History', desc: 'Full callpath analysis at CDRs report with all routing attempts and disconnect codes.' },
      { title: 'IXC Recording', desc: 'Softswitch captures call media; Billing 7 browses, searches, plays, and manages recordings by hour — with one-click access from Originator and Terminator call reports.' },
      { title: 'Customer Portal', desc: 'Real-time active calls and reports overview for your clients.' },
      { title: 'Testing Tools', desc: 'Built-in SIP generation utility for testing any kind of scenario.' },
      { title: 'Data Protection', desc: 'Automatic backup system and two-factor authentication for enhanced security.' },
      { title: '24/7 NOC Support', desc: 'Live multilingual support (EN, RU) available around the clock for over 25 years.' },
    ]
  },
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Trusted by leading telecom operators and wholesale VoIP providers worldwide.',
    items: [
      { quote: 'Our company is going and henceforth actively to introduce the hi-tech program complexes adequate to the highest international standards owing to which efficiency of our operational activity as a whole will be considerably raised.', author: 'Igor Litovchenko', role: 'President, Joint-Stock Company "Kyivstar G.S.M."' },
      { quote: 'Switching to IXC gave us carrier-grade routing and billing in one solution. The monitoring tools and Telegram integration keep us on top of traffic quality 24/7.', author: 'Gilbert Abboud', role: 'CTO - VoIP | Messaging · NGN Telecom' },
      { quote: 'We put IXC Softswitch V7 into production from day one — no staging phase, straight into live traffic. The platform has carried our wholesale operations reliably since the first call.', author: 'Andrew Lujansky', role: 'Sales · Valor DBA Lukovitel' },
    ]
  },
  blog: {
    title: 'Blog',
    subtitle: 'Practical guides on VoIP softswitch technology — routing, billing, monitoring, and security.',
    readMore: 'Read article',
    viewAll: 'View all articles',
    backToBlog: 'Back to Blog',
    minRead: 'min read',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'See IXC Softswitch on your own traffic',
    ctaText: 'Carrier-grade Class 4/5 routing, real-time billing, monitoring, and anti-fraud — proven in production since 1999.',
    ctaButton: 'Explore the softswitch',
    notFoundTitle: 'Article not found',
    notFoundText: "The article you're looking for doesn't exist or may have been moved."
  },
  news: {
    title: 'Latest Updates',
    subtitle: 'Product updates, releases, and announcements from IXC.',
    readMore: 'Read More',
    breadcrumb: 'News',
    backToNews: 'Back to News',
    notFoundTitle: 'News not found',
    notFoundText: "The article you're looking for doesn't exist.",
    previous: 'Previous news',
    next: 'Next news'
  },
  contactSection: {
    title: 'Get in Touch',
    subtitle:
      "Have questions about IXC Softswitch? Looking for a demo or pricing details? Drop us a message and we'll get back to you shortly."
  },
  contactForm: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    company: 'Company',
    optional: '(optional)',
    companyPlaceholder: 'Your company name',
    message: 'Message',
    messagePlaceholder: 'Tell us about your project or ask a question...',
    send: 'Send Message',
    sending: 'Sending...',
    successTitle: 'Message Sent!',
    successText: "Thank you for reaching out. We'll get back to you within 24 hours.",
    sendAnother: 'Send Another Message',
    emailUs: 'Email Us',
    errorGeneric: 'Something went wrong. Please try again.',
    errorNetwork: 'Network error. Please check your connection and try again.'
  },
  common: {
    email: 'Email',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    teams: 'Teams',
    office: 'Office',
    sales: 'Sales',
    changeLanguage: 'Change language',
    toggleTheme: 'Toggle theme',
    menu: 'Menu',
    contactUs: 'Contact us',
    needHelp: 'Need help?',
    previousTestimonial: 'Previous testimonial',
    nextTestimonial: 'Next testimonial'
  },
  team: {
    title: 'Our Team',
    founderRole: 'Founder & CEO',
    founderBio: 'With over 30 years of experience in the telecommunications industry, Oleksii leads the development of IXC Softswitch. His vision drives our commitment to delivering top-tier Softswitch and billing solutions for wholesale and retail VoIP providers worldwide, ensuring unparalleled performance and reliability.',
    connectLinkedIn: 'Connect on LinkedIn'
  },
  footer: {
    description: 'High-performance all-in-one solution for your VoIP business operations.',
    productsTitle: 'Products',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    contactText: 'Got questions? Get in touch with our team.',
    copyright: 'All rights Reserved.',
    salesLabel: 'Sales'
  },
  about: {
    title: 'About IXC Softswitch',
    subtitle: "IXC builds carrier-grade software and services for voice and telecom operators. Since 1999, we've helped carriers, service providers, and enterprises launch, scale, and optimize reliable voice networks with transparent billing and rock-solid routing.",
    missionTitle: 'Our Mission',
    missionText: 'Enable operators of all sizes to deliver trustworthy voice services — profitably, securely, and at scale.',
    whatWeDoTitle: 'What We Do',
    whatWeDoSubtitle: 'End-to-end solutions that cover every aspect of modern voice network operations.',
    whyTitle: 'Why IXC',
    whySubtitle: 'The advantages that set us apart from the competition.',
    ctaTitle: 'Get in Touch',
    ctaText: "Whether you're launching a new network, consolidating platforms, or tightening revenue controls, IXC can help.",
    ctaContactSales: 'Contact Sales',
    ctaExploreProducts: 'Explore Products',
    capabilities: [
      { title: 'Softswitch & Routing', description: 'High-performance SIP routing, LCR, and policy control designed for uptime and efficiency.' },
      { title: 'Billing & Mediation', description: 'Accurate CDR processing, rating, invoicing, and revenue assurance for wholesale and retail.' },
      { title: 'Analytics & Reporting', description: 'Real-time dashboards and historical insights to manage margin, quality, and traffic flows.' },
      { title: 'Security & Compliance', description: 'Tools to mitigate fraud, enforce spend limits, and support regulatory requirements.' },
      { title: 'Automation & Integration', description: 'Open APIs and connectors to fit IXC into your OSS/BSS, CRM, and payment workflows.' },
    ],
    strengths: [
      { title: 'Proven Since 1999', description: 'Decades of telecom expertise distilled into mature, battle-tested products.' },
      { title: 'Carrier-Grade Reliability', description: 'Architected for high availability, scalability, and predictable performance.' },
      { title: 'Fast Time-to-Value', description: 'Practical features, sensible defaults, and a team that understands real-world operations.' },
      { title: 'Support That Cares 24/7', description: 'Over 25 years of live multilingual support (EN, RU). Our experienced team stays with you from design to day-two operations.' },
    ],
    certificatesTitle: 'Certificates & Trademarks',
    certificatesSubtitle: 'Official registrations of IXC brands and software with the State Department of Intellectual Property of Ukraine.',
    certificatesNoLabel: 'Certificate No.',
    certificatesDateLabel: 'Registered',
    certificatesPageLabel: 'Page {n}',
    certificatesViewFull: 'View full size',
    certificatesDocuments: [
      {
        title: 'Trademark: IXC',
        description: 'Ukrainian trademark registration for the IXC brand (Nice classes 9, 38, 42).',
        certificateNo: '44583',
        registeredDate: '15.11.2004',
      },
      {
        title: 'Trademark: InterExchange Carrier',
        description: 'Ukrainian trademark registration for InterExchange Carrier telecommunications products (Class 9).',
        certificateNo: '43606',
        registeredDate: '15.09.2004',
      },
      {
        title: 'Copyright: IXC Billing Center',
        description: 'State registration of copyright for the IXC Billing Center software suite (Softswitch Plus, Prepaid platform, Dialer, Switch Statistics, Softswitch Super).',
        certificateNo: '9378',
        registeredDate: '18.02.2004',
      },
    ],
  },
  productPage: {
    overview: 'Overview',
    keyFeatures: 'Key Features',
    realTimeReporting: 'Real Time Reporting',
    callRoutingDepending: 'Call Routing Depending on:',
    requestDemo: 'Request a Demo',
    contactSales: 'Contact Sales',
    downloadSpecPdf: 'Download PDF specification',
    previous: 'Previous',
    next: 'Next',
    notFoundTitle: 'Product Not Found',
    notFoundText: "The product you're looking for doesn't exist.",
    backHome: 'Back to Home'
  }
};

// ============================================================
// RUSSIAN
// ============================================================
const ru: Translations = {
  nav: {
    home: 'Главная',
    products: 'Продукты',
    aboutUs: 'О нас',
    contactUs: 'Контакты',
    privacyPolicy: 'Политика конфиденциальности',
    blog: 'Блог',
    getFreeDemo: 'Бесплатное демо',
    bannerAnnouncement: 'IXC Recording — основа для AI-анализа звонков, FAS и голосовой почты'
  },
  privacyPolicy: {
    title: 'Политика конфиденциальности',
    subtitle:
      'Как IXC Software Distribution Corp. собирает, использует и защищает персональные данные на сайте ixc.ua.',
    lastUpdated: 'Последнее обновление',
  },
  hero: {
    title: 'Инфраструктура VoIP операторского класса — в продакшене с 1999 года',
    subtitle:
      'Оптовый и розничный голос на одной высоконагруженной платформе: продвинутая LCR и маршрутизация на основе политик, автоматический биллинг, тест маршрутов и выявление FAS, API и оповещения — с круглосуточной многоязычной поддержкой NOC.',
    aiStamp: 'Recording',
    exploreProducts: 'Об IXC Recording',
    contactSales: 'Связаться с нами'
  },
  trust: {
    since: 'Доверие с',
    clients: 'клиентов по всему миру в сфере оптового VoIP.'
  },
  aiIntegration: {
    title: 'AI-автоматизация для голосовых и SMS-операторов',
    subtitle:
      'Один менеджер оператора реально ведёт 5–10 контрактов, когда маршрутизация, анализ тарифов, переписка с партнёрами и отчёты сводятся к копированию и ручному разбору. AI расширяет это до 100+ при тех же зарплатных расходах — до 10× прибыли и ощутимое конкурентное преимущество.',
    footer:
      'Менеджеры по-прежнему читают и пишут в почте и мессенджерах, вручную проходят софтсвитч по каждому маршруту и тарифу и копируют данные между ними. Спросите на родном языке — добавить направления операторам 1–3, изменить маршрутизацию Cuba Mobile или заполнить commitment с оператором X по Excel на 30 строк — и изменения в IXC применяются пакетом без многошагового UI, пока AI проводит глубокий анализ. Teams и мессенджеры получают ответ; софтсвитч уже обновлён.',
    partnership: 'IXC ↔ DealoAgent',
    oldApproach: 'СТАРЫЙ ПОДХОД',
    newApproach: 'НОВЫЙ ПОДХОД',
    oldApproachCaption: 'Макс. 5–10 контрактов на менеджера',
    newApproachCaption: '100+ контрактов на менеджера при тех же затратах',
    learnMore: 'Подробнее →',
  },
  products: {
    title: 'Наши основные продукты',
    subtitle: 'Набор высокоточных телекоммуникационных решений для современного оптового и розничного VoIP бизнеса.',
    learnMore: 'Подробнее →',
    cards: [
      { title: 'Софтсвитч', description: 'Платформа VoIP класса 4/5 для максимальной пропускной способности, детального биллинга и интеллектуальной маршрутизации.' },
      { title: 'IXC Recording', description: 'Софтсвитч пишет медиа вызова; Billing 7 упорядочивает архив — плюс AI-анализ, профили трафика, качество голоса, detect and drop FAS/голосовой почты и персонализированные SMS post-call кампании.' },
      { title: 'AI-автоматизация', description: 'IXC ↔ DealoAgent: команды на родном языке, пакетные изменения в софтсвитче и рассылка в мессенджеры — от 5–10 до 100+ контрактов на менеджера.' },
      { title: 'Белый/Чёрный список', description: 'Динамическая защита и гибкие правила маршрутизации для обеспечения безопасности и предотвращения спам-звонков.' },
      { title: 'Инструмент мониторинга', description: 'Аналитика в реальном времени и динамические графики для отслеживания SIP-данных и быстрого устранения неполадок.' },
      { title: 'Автотестер', description: 'Обеспечение качества маршрутов путём автоматической генерации тестовых вызовов и анализа результатов.' },
      { title: 'SMS Платформа', description: 'Интегрированное решение для массовой рассылки SMS с поддержкой быстрого транзита и оптимальных путей доставки.' },
      { title: 'Интеграция Google API', description: 'Расширение операций с помощью интеграции с ведущими корпоративными сервисами.' },
      { title: 'Технические спецификации', description: 'Протоколы, ёмкость, маршрутизация, безопасность, кодеки, биллинг, отчётность и NOC 24/7 — в одном справочнике.' },
    ]
  },
  ixcClub: {
    title: 'IXC Club',
    subtitle: 'Развитие бизнеса для клиентов IXC — отобранные знакомства в телекоме, которые превращаются в новые voice и SMS интерконнекты.',
    learnMore: 'Как работает IXC Club',
    joinCta: 'Вступить в IXC Club',
    pageTitle: 'IXC Club',
    pageSubtitle: 'Отобранные знакомства для клиентов IXC — новые интерконнекты, прямые сделки, рост прибыли.',
    problemTitle: 'Почему поиск новых telecom-контактов дорогой',
    problemIntro:
      'Рост оптового voice и SMS означает постоянные встречи с новыми операторами. Если строить воронку самостоятельно, счёт растёт быстро:',
    problemCosts: [
      {
        title: 'Выставки и trade-show',
        description: 'Стенды, спонсорство и пакеты на ITW, Capacity и региональных telecom-ивентах.',
      },
      {
        title: 'Перелёты и проживание',
        description: 'Командировки sales и BD-команды для личных встреч с prospects в разных регионах.',
      },
      {
        title: 'Зарплаты BD-менеджеров',
        description: 'Штатные менеджеры на поиск лидов, follow-up и квалификацию interconnect-партнёров.',
      },
      {
        title: 'Реальная цена роста',
        description: 'Месяцы расходов до одного подписанного маршрута — рост может стоить дороже маржи.',
      },
    ],
    problemFooter: 'Для многих операторов построение контактной сети с нуля — одна из крупнейших скрытых статей расходов.',
    solutionTitle: 'IXC уже построил сеть — растите без огромных затрат',
    solutionText:
      'Менеджеры IXC ведут тысячи живых связей с операторами, готовыми к voice и SMS интерконнекту. IXC Club даёт клиентам отобранные знакомства под профиль — выставки, поездки и outreach уже сделаны. Вы общаетесь с квалифицированными партнёрами, подписываете соглашения и растите прибыль, пока IXC помогает business development без отдельной платы за клуб.',
    flowTitle: 'Как работает IXC Club',
    flowSubtitle: 'От членства до новых маршрутов — простой процесс вокруг вашего бизнес-профиля.',
    flowSteps: [
      {
        title: 'Вы — клиент IXC на подходящем тарифе',
        description:
          'Активные клиенты IXC Softswitch на квалифицирующих уровнях сервиса автоматически входят в IXC Club — отдельная подписка не нужна.',
      },
      {
        title: 'Мы строим ваш бизнес-профиль',
        description:
          'Voice или SMS, опт или розница, регионы, фокус originator/terminator и ёмкость — чтобы знакомства соответствовали тому, как вы реально торгуете.',
      },
      {
        title: '3–5 отобранных контактов в неделю через Microsoft Teams',
        description:
          'Команда выбирает горячих prospects из тысяч живых связей и передаёт вам знакомства в Teams — обычно три–пять раз в неделю.',
      },
      {
        title: 'Вы общаетесь, подписываете и интерконнектитесь напрямую',
        description:
          'Коммерческий диалог, переговоры и договор — между вами и партнёром. IXC не стоит посередине сделки — мы открываем дверь.',
      },
      {
        title: 'Новые маршруты, больше прибыли — IXC поддерживает рост бесплатно',
        description:
          'Успешные интерконнекты увеличивают трафик и маржу. IXC Club — часть того, как мы помогаем клиентам расти; business development включён в партнёрство с IXC.',
      },
    ],
    highlightTitle: 'Зачем IXC ведёт клуб',
    highlightText:
      'Когда растут наши клиенты, крепнет сеть для всех. IXC Club связывает ваш софтсвитч и операции с реальными коммерческими возможностями — без отдельной платы за интро.',
    ctaTitle: 'Готовы вступить?',
    ctaText: 'Свяжитесь с нами — подтвердим тариф, обновим профиль и запустим отобранные знакомства.',
    benefits: [
      {
        title: 'Тысячи живых контактов',
        description: 'Менеджеры IXC поддерживают активную сеть voice и SMS операторов по всему миру.',
      },
      {
        title: 'Voice и SMS интерконнект',
        description: 'Знакомства с операторами, готовыми к новым оптовым или розничным маршрутам с вами.',
      },
      {
        title: '3–5 горячих лидов в неделю',
        description: 'Отобранные prospects под ваш профиль — не статичный список из справочника.',
      },
      {
        title: 'Поддержка роста без платы за клуб',
        description: 'IXC инвестирует в ваше business development — вы фокусируетесь на подписании и масштабе.',
      },
    ],
  },
  features: {
    title: 'Возможности платформы',
    subtitle: 'Комплексный набор функций, разработанный для требований современных оптовых и розничных VoIP операций.',
    learnMore: 'Подробнее',
    items: [
      { title: 'Высокая ёмкость', desc: 'До 4 000 VoIP каналов на сервер, CPS до 800, неограниченное горизонтальное масштабирование.' },
      { title: 'Интеллектуальная маршрутизация', desc: 'LCR, ASR/ACD, PDD, приоритетная, процентная, по A/B-номеру, временная и наследуемая маршрутизация.' },
      { title: 'Гибкость протоколов', desc: 'SIP и H.323 с транскодированием протоколов. Встроенная поддержка SMS (SMPP 3.4).' },
      { title: 'Список доступа', desc: 'Встроенные списки разрешённых/запрещённых номеров с автодобавлением и автосбросом.' },
      { title: 'Контроль качества маршрутов', desc: 'Автоматический тестер маршрутов с записью голоса для мониторинга качества и обнаружения FAS.' },
      { title: 'Поддержка кодеков', desc: 'Все основные VoIP и GSM кодеки с транскодированием в реальном времени.' },
      { title: 'Интегрированная безопасность', desc: 'Собственный SIP файрвол, 2FA и автоматическое резервное копирование.' },
      { title: 'Расширенный API', desc: 'JSON API для внешних приложений с поддержкой Telegram-бота.' },
      { title: 'Гибкие SIP профили', desc: 'Настраиваемые профили для любого SIP RFC сценария вызова.' },
      { title: 'Ограничение CPS', desc: 'Отклонение ненужных SIP-попыток при перегрузках без влияния на реальный трафик.' },
      { title: 'Автоматический биллинг', desc: 'Счета и инвойсы формируются автоматически в часовом поясе клиента.' },
      { title: 'Современный интерфейс', desc: 'Интуитивный UI с детальными отчётами, тёмной/светлой темой и дашбордами в реальном времени.' },
      { title: 'Автозагрузка тарифов', desc: 'Автоматическая загрузка тарифов из IMAP с подтверждением повышений через Telegram.' },
      { title: 'Мониторинг трафика', desc: 'Непрерывный мониторинг качества трафика, оповещения и автоблокировка.' },
      { title: 'История маршрутизации', desc: 'Полный анализ маршрута (callpath) в отчёте CDR с попытками и кодами отключения.' },
      { title: 'IXC Recording', desc: 'Софтсвитч захватывает медиа вызова; Billing 7 даёт просмотр, поиск, воспроизведение и управление записями по часам — с одним кликом из отчётов Originator и Terminator.' },
      { title: 'Портал клиента', desc: 'Обзор активных вызовов и отчётов для клиентов в реальном времени.' },
      { title: 'Инструменты тестирования', desc: 'Встроенная утилита SIP-генерации для тестирования любых сценариев.' },
      { title: 'Защита данных', desc: 'Автоматическое резервное копирование и двухфакторная аутентификация.' },
      { title: 'Поддержка 24/7', desc: 'Многоязычная поддержка (EN, RU) круглосуточно на протяжении более 25 лет.' },
    ]
  },
  testimonials: {
    title: 'Отзывы клиентов',
    subtitle: 'Нам доверяют ведущие телеком-операторы и оптовые VoIP провайдеры по всему миру.',
    items: [
      { quote: 'Наша компания намерена и впредь активно внедрять высокотехнологичные программные комплексы, соответствующие высшим международным стандартам, благодаря чему эффективность нашей операционной деятельности в целом будет значительно повышена.', author: 'Игорь Литовченко', role: 'Президент, акционерное общество «Киевстар GSM»' },
      { quote: 'Переход на IXC дал нам маршрутизацию и биллинг операторского класса в одном решении. Инструменты мониторинга и интеграция с Telegram позволяют контролировать качество трафика 24/7.', author: 'Gilbert Abboud', role: 'CTO — VoIP | обмен сообщениями · NGN Telecom' },
      { quote: 'Мы запустили IXC Softswitch V7 в продакшен с первого дня — без тестового этапа, сразу на боевой трафик. Платформа стабильно обслуживает наш оптовый бизнес с первого звонка.', author: 'Андрей Лужанский', role: 'Продажи · Valor DBA Lukovitel' },
    ]
  },
  blog: {
    title: 'Блог',
    subtitle: 'Практические руководства по технологии VoIP-софтсвитча — маршрутизация, биллинг, мониторинг и безопасность.',
    readMore: 'Читать статью',
    viewAll: 'Все статьи блога',
    backToBlog: 'Назад в блог',
    minRead: 'мин чтения',
    faqTitle: 'Частые вопросы',
    ctaTitle: 'Посмотрите IXC Softswitch на своём трафике',
    ctaText: 'Маршрутизация класса 4/5 операторского уровня, биллинг в реальном времени, мониторинг и антифрод — в продакшене с 1999 года.',
    ctaButton: 'Перейти к софтсвитчу',
    notFoundTitle: 'Статья не найдена',
    notFoundText: 'Статья, которую вы ищете, не существует или была перемещена.'
  },
  news: {
    title: 'Последние обновления',
    subtitle: 'Обновления продуктов, релизы и новости от IXC.',
    readMore: 'Подробнее',
    breadcrumb: 'Новости',
    backToNews: 'Назад к новостям',
    notFoundTitle: 'Новость не найдена',
    notFoundText: 'Статья, которую вы ищете, не существует.',
    previous: 'Предыдущие новости',
    next: 'Следующие новости'
  },
  contactSection: {
    title: 'Свяжитесь с нами',
    subtitle:
      'Вопросы по IXC Softswitch? Нужно демо или коммерческое предложение? Напишите нам — ответим в ближайшее время.'
  },
  contactForm: {
    name: 'Имя',
    namePlaceholder: 'Ваше имя',
    email: 'Email',
    company: 'Компания',
    optional: '(необязательно)',
    companyPlaceholder: 'Название компании',
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите о проекте или задайте вопрос...',
    send: 'Отправить',
    sending: 'Отправка...',
    successTitle: 'Сообщение отправлено!',
    successText: 'Спасибо за обращение. Ответим в течение 24 часов.',
    sendAnother: 'Отправить ещё одно',
    emailUs: 'Написать нам',
    errorGeneric: 'Что-то пошло не так. Попробуйте ещё раз.',
    errorNetwork: 'Ошибка сети. Проверьте подключение и попробуйте снова.'
  },
  common: {
    email: 'Email',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    teams: 'Teams',
    office: 'Офис',
    sales: 'Продажи',
    changeLanguage: 'Сменить язык',
    toggleTheme: 'Переключить тему',
    menu: 'Меню',
    contactUs: 'Связаться с нами',
    needHelp: 'Нужна помощь?',
    previousTestimonial: 'Предыдущий отзыв',
    nextTestimonial: 'Следующий отзыв'
  },
  team: {
    title: 'Наша команда',
    founderRole: 'Основатель и CEO',
    founderBio: 'Более 30 лет опыта в телекоммуникационной отрасли. Алексей руководит разработкой IXC Softswitch. Его видение обеспечивает наше стремление к предоставлению лучших решений для софтсвитча и биллинга для оптовых и розничных VoIP-провайдеров по всему миру.',
    connectLinkedIn: 'Профиль в LinkedIn'
  },
  footer: {
    description: 'Высокопроизводительное решение «всё в одном» для вашего VoIP бизнеса.',
    productsTitle: 'Продукты',
    companyTitle: 'Компания',
    contactTitle: 'Контакты',
    contactText: 'Есть вопросы? Свяжитесь с нашей командой.',
    copyright: 'Все права защищены.',
    salesLabel: 'Продажи'
  },
  about: {
    title: 'Об IXC Softswitch',
    subtitle: 'IXC создаёт программное обеспечение операторского класса для голосовых и телеком операторов. С 1999 года мы помогаем операторам запускать, масштабировать и оптимизировать надёжные голосовые сети с прозрачным биллингом и надёжной маршрутизацией.',
    missionTitle: 'Наша миссия',
    missionText: 'Дать возможность операторам любого масштаба предоставлять надёжные голосовые услуги — прибыльно, безопасно и масштабируемо.',
    whatWeDoTitle: 'Что мы делаем',
    whatWeDoSubtitle: 'Комплексные решения для всех аспектов управления современными голосовыми сетями.',
    whyTitle: 'Почему IXC',
    whySubtitle: 'Преимущества, которые отличают нас от конкурентов.',
    ctaTitle: 'Свяжитесь с нами',
    ctaText: 'Запускаете новую сеть, объединяете платформы или оптимизируете контроль доходов? IXC поможет.',
    ctaContactSales: 'Связаться',
    ctaExploreProducts: 'Наши продукты',
    capabilities: [
      { title: 'Софтсвитч и маршрутизация', description: 'Высокопроизводительная SIP-маршрутизация, LCR и управление политиками для бесперебойной работы.' },
      { title: 'Биллинг и медиация', description: 'Точная обработка CDR, тарификация, выставление счетов и контроль доходов для опта и розницы.' },
      { title: 'Аналитика и отчётность', description: 'Дашборды в реальном времени и исторические данные для управления маржой, качеством и потоками трафика.' },
      { title: 'Безопасность и соответствие', description: 'Инструменты для предотвращения мошенничества, контроля расходов и соблюдения нормативных требований.' },
      { title: 'Автоматизация и интеграция', description: 'Открытые API и коннекторы для встраивания IXC в ваши OSS/BSS, CRM и платёжные процессы.' },
    ],
    strengths: [
      { title: 'Проверено с 1999 года', description: 'Десятилетия телеком-экспертизы, воплощённые в зрелых, проверенных на практике продуктах.' },
      { title: 'Надёжность операторского класса', description: 'Архитектура для высокой доступности, масштабируемости и предсказуемой производительности.' },
      { title: 'Быстрый старт', description: 'Практичные функции, разумные настройки по умолчанию и команда, понимающая реальные операции.' },
      { title: 'Поддержка 24/7', description: 'Более 25 лет многоязычной поддержки (EN, RU). Наша команда с вами от проектирования до ежедневных операций.' },
    ],
    certificatesTitle: 'Сертификаты и товарные знаки',
    certificatesSubtitle: 'Официальная регистрация брендов и программного обеспечения IXC в Государственном департаменте интеллектуальной собственности Украины.',
    certificatesNoLabel: '№ свидетельства',
    certificatesDateLabel: 'Дата регистрации',
    certificatesPageLabel: 'Страница {n}',
    certificatesViewFull: 'Открыть в полном размере',
    certificatesDocuments: [
      {
        title: 'Товарный знак: IXC',
        description: 'Регистрация товарного знака IXC в Украине (классы МКТУ 9, 38, 42).',
        certificateNo: '44583',
        registeredDate: '15.11.2004',
      },
      {
        title: 'Товарный знак: InterExchange Carrier',
        description: 'Регистрация товарного знака InterExchange Carrier для телекоммуникационной продукции (класс 9).',
        certificateNo: '43606',
        registeredDate: '15.09.2004',
      },
      {
        title: 'Авторское право: IXC Billing Center',
        description: 'Государственная регистрация авторского права на программный комплекс IXC Billing Center (Softswitch Plus, Prepaid platform, Dialer, Switch Statistics, Softswitch Super).',
        certificateNo: '9378',
        registeredDate: '18.02.2004',
      },
    ],
  },
  productPage: {
    overview: 'Обзор',
    keyFeatures: 'Ключевые функции',
    realTimeReporting: 'Отчётность в реальном времени',
    callRoutingDepending: 'Маршрутизация вызовов в зависимости от:',
    requestDemo: 'Запросить демо',
    contactSales: 'Связаться',
    downloadSpecPdf: 'Скачать PDF спецификацию',
    previous: 'Предыдущий',
    next: 'Следующий',
    notFoundTitle: 'Продукт не найден',
    notFoundText: 'Продукт, который вы ищете, не существует.',
    backHome: 'На главную'
  }
};

// ============================================================
// UKRAINIAN
// ============================================================
const uk: Translations = {
  nav: {
    home: 'Головна',
    products: 'Продукти',
    aboutUs: 'Про нас',
    contactUs: 'Контакти',
    privacyPolicy: 'Політика конфіденційності',
    blog: 'Блог',
    getFreeDemo: 'Безкоштовне демо',
    bannerAnnouncement: 'IXC Recording — основа для AI-аналізу дзвінків, FAS і голосової пошти'
  },
  privacyPolicy: {
    title: 'Політика конфіденційності',
    subtitle:
      'Як IXC Software Distribution Corp. збирає, використовує та захищає персональні дані на сайті ixc.ua.',
    lastUpdated: 'Останнє оновлення',
  },
  hero: {
    title: 'Інфраструктура VoIP операторського класу — у продакшені з 1999 року',
    subtitle:
      'Оптовий і роздрібний голос на одній високонавантаженій платформі: розширена LCR і маршрутизація на основі політик, автоматичний білінг, тест маршрутів і виявлення FAS, API та сповіщення — із цілодобовою багатомовною підтримкою NOC.',
    aiStamp: 'Recording',
    exploreProducts: 'Про IXC Recording',
    contactSales: "Зв'язатися з нами"
  },
  trust: {
    since: 'Довіра з',
    clients: 'клієнтів по всьому світу в оптовому VoIP бізнесі.'
  },
  aiIntegration: {
    title: 'AI-автоматизація для голосових та SMS-операторів',
    subtitle:
      'Один менеджер оператора реально веде 5–10 контрактів, коли маршрутизація, аналіз тарифів, листування з партнерами та звіти зводяться до копіювання й ручного розбору. AI розширює це до 100+ за тих самих зарплатних витрат — до 10× прибутку та відчутну конкурентну перевагу.',
    footer:
      'Менеджери досі читають і пишуть у пошті та месенджерах, вручну проходять софтсвітч по кожному маршруту та тарифу й копіюють дані між ними. Запитайте рідною мовою — додати напрямки операторам 1–3, змінити маршрутизацію Cuba Mobile або заповнити commitment з оператором X за Excel на 30 рядків — і зміни в IXC застосовуються пакетом без багатокрокового UI, поки AI проводить глибокий аналіз. Teams і месенджери отримують відповідь; софтсвітч уже оновлено.',
    partnership: 'IXC ↔ DealoAgent',
    oldApproach: 'СТАРИЙ ПІДХІД',
    newApproach: 'НОВИЙ ПІДХІД',
    oldApproachCaption: 'Макс. 5–10 контрактів на менеджера',
    newApproachCaption: '100+ контрактів на менеджера за тих самих витрат',
    learnMore: 'Детальніше →',
  },
  products: {
    title: 'Наші основні продукти',
    subtitle: 'Набір високоточних телекомунікаційних рішень для сучасного оптового та роздрібного VoIP бізнесу.',
    learnMore: 'Детальніше →',
    cards: [
      { title: 'Софтсвітч', description: 'VoIP платформа класу 4/5 для максимальної пропускної здатності, детального білінгу та інтелектуальної маршрутизації.' },
      { title: 'IXC Recording', description: 'Софтсвіч пише медіа виклику; Billing 7 впорядковує архів — плюс AI-аналіз, профілі трафіку, якість голосу, detect and drop FAS/голосової пошти та персоналізовані SMS post-call кампанії.' },
      { title: 'AI-автоматизація', description: 'IXC ↔ DealoAgent: команди рідною мовою, пакетні зміни в софтсвітчі та розсилка в месенджери — від 5–10 до 100+ контрактів на менеджера.' },
      { title: 'Білий/Чорний список', description: 'Динамічний захист і гнучкі правила маршрутизації для забезпечення безпеки та запобігання спам-дзвінкам.' },
      { title: 'Інструмент моніторингу', description: 'Аналітика в реальному часі та динамічні графіки для відстеження SIP-даних та швидкого усунення неполадок.' },
      { title: 'Автотестер', description: 'Забезпечення якості маршрутів шляхом автоматичної генерації тестових дзвінків та аналізу результатів.' },
      { title: 'SMS Платформа', description: 'Інтегроване рішення для масової розсилки SMS з підтримкою швидкого транзиту та оптимальних шляхів доставки.' },
      { title: 'Інтеграція Google API', description: 'Розширення операцій за допомогою інтеграції з провідними корпоративними сервісами.' },
      { title: 'Технічні специфікації продукту', description: 'Протоколи, ємність, маршрутизація, безпека, кодеки, білінг, звітність та NOC 24/7 — у одному довіднику.' },
    ]
  },
  ixcClub: {
    title: 'IXC Club',
    subtitle: 'Розвиток бізнесу для клієнтів IXC — відібрані знайомства в телекомі, що перетворюються на нові voice і SMS інтерконекти.',
    learnMore: 'Як працює IXC Club',
    joinCta: 'Вступити в IXC Club',
    pageTitle: 'IXC Club',
    pageSubtitle: 'Відібрані знайомства для клієнтів IXC — нові інтерконекти, прямі угоди, зростання прибутку.',
    problemTitle: 'Чому пошук нових telecom-контактів дорогий',
    problemIntro:
      'Зростання оптового voice і SMS означає постійні зустрічі з новими операторами. Якщо будувати воронку самостійно, рахунок зростає швидко:',
    problemCosts: [
      {
        title: 'Виставки та trade-show',
        description: 'Стенди, спонсорство та пакети на ITW, Capacity і регіональних telecom-івентах.',
      },
      {
        title: 'Перельоти та проживання',
        description: 'Відрядження sales і BD-команди для особистих зустрічей з prospects у різних регіонах.',
      },
      {
        title: 'Зарплати BD-менеджерів',
        description: 'Штатні менеджери на пошук лідів, follow-up і кваліфікацію interconnect-партнерів.',
      },
      {
        title: 'Реальна ціна зростання',
        description: 'Місяці витрат до одного підписаного маршруту — зростання може коштувати дорожче маржі.',
      },
    ],
    problemFooter: 'Для багатьох операторів побудова контактної мережі з нуля — одна з найбільших прихованих статей витрат.',
    solutionTitle: 'IXC уже побудував мережу — ростіть без величезних витрат',
    solutionText:
      'Менеджери IXC ведуть тисячі живих зв’язків з операторами, готовими до voice і SMS інтерконекту. IXC Club дає клієнтам відібрані знайомства під профіль — виставки, поїздки та outreach уже зроблені. Ви спілкуєтесь із кваліфікованими партнерами, підписуєте угоди й зростаєте прибуток, поки IXC допомагає business development без окремої плати за клуб.',
    flowTitle: 'Як працює IXC Club',
    flowSubtitle: 'Від членства до нових маршрутів — простий процес навколо вашого бізнес-профілю.',
    flowSteps: [
      {
        title: 'Ви — клієнт IXC на відповідному тарифі',
        description:
          'Активні клієнти IXC Softswitch на кваліфікуючих рівнях сервісу автоматично входять в IXC Club — окрема підписка не потрібна.',
      },
      {
        title: 'Ми будуємо ваш бізнес-профіль',
        description:
          'Voice або SMS, опт чи роздріб, регіони, фокус originator/terminator і ємність — щоб знайомства відповідали тому, як ви реально торгуєте.',
      },
      {
        title: '3–5 відібраних контактів на тиждень через Microsoft Teams',
        description:
          'Команда обирає гарячих prospects з тисяч живих зв’язків і передає вам знайомства в Teams — зазвичай три–п’ять разів на тиждень.',
      },
      {
        title: 'Ви спілкуєтесь, підписуєте й інтерконектитесь напряму',
        description:
          'Комерційний діалог, переговори й договір — між вами та партнером. IXC не стоїть посередині угоди — ми відкриваємо двері.',
      },
      {
        title: 'Нові маршрути, більше прибутку — IXC підтримує зростання безкоштовно',
        description:
          'Успішні інтерконекти збільшують трафік і маржу. IXC Club — частина того, як ми допомагаємо клієнтам рости; business development включено в партнерство з IXC.',
      },
    ],
    highlightTitle: 'Навіщо IXC веде клуб',
    highlightText:
      'Коли ростуть наші клієнти, міцнішає мережа для всіх. IXC Club з’єднує ваш софтсвіч і операції з реальними комерційними можливостями — без окремої плати за інтро.',
    ctaTitle: 'Готові вступити?',
    ctaText: 'Зв’яжіться з нами — підтвердимо тариф, оновимо профіль і запустимо відібрані знайомства.',
    benefits: [
      {
        title: 'Тисячі живих контактів',
        description: 'Менеджери IXC підтримують активну мережу voice і SMS операторів у всьому світі.',
      },
      {
        title: 'Voice і SMS інтерконект',
        description: 'Знайомства з операторами, готовими до нових оптових або роздрібних маршрутів з вами.',
      },
      {
        title: '3–5 гарячих лідів на тиждень',
        description: 'Відібрані prospects під ваш профіль — не статичний список із довідника.',
      },
      {
        title: 'Підтримка зростання без плати за клуб',
        description: 'IXC інвестує у ваше business development — ви фокусуєтесь на підписанні та масштабі.',
      },
    ],
  },
  features: {
    title: 'Можливості платформи',
    subtitle: 'Комплексний набір функцій, розроблений для вимог сучасних оптових та роздрібних VoIP операцій.',
    learnMore: 'Детальніше',
    items: [
      { title: 'Висока ємність', desc: 'До 4 000 VoIP каналів на сервер, CPS до 800, необмежене горизонтальне масштабування.' },
      { title: 'Інтелектуальна маршрутизація', desc: 'LCR, ASR/ACD, PDD, пріоритетна, відсоткова, за A/B-номером, часова та успадкована маршрутизація.' },
      { title: 'Гнучкість протоколів', desc: 'SIP та H.323 з транскодуванням протоколів. Вбудована підтримка SMS (SMPP 3.4).' },
      { title: 'Список доступу', desc: 'Вбудовані списки дозволених/заборонених номерів з автододаванням та автоскиданням.' },
      { title: 'Контроль якості маршрутів', desc: 'Автоматичний тестер маршрутів із записом голосу для моніторингу якості та виявлення FAS.' },
      { title: 'Підтримка кодеків', desc: 'Усі основні VoIP та GSM кодеки з транскодуванням у реальному часі.' },
      { title: 'Інтегрована безпека', desc: 'Власний SIP файрвол, 2FA та автоматичне резервне копіювання.' },
      { title: 'Розширений API', desc: 'JSON API для зовнішніх додатків з підтримкою Telegram-бота.' },
      { title: 'Гнучкі SIP профілі', desc: 'Налаштовувані профілі для будь-якого SIP RFC сценарію виклику.' },
      { title: 'Обмеження CPS', desc: 'Відхилення непотрібних SIP-спроб при перевантаженнях без впливу на реальний трафік.' },
      { title: 'Автоматичний білінг', desc: 'Рахунки та інвойси формуються автоматично в часовому поясі клієнта.' },
      { title: 'Сучасний інтерфейс', desc: 'Інтуїтивний UI з детальними звітами, темною/світлою темою та дашбордами в реальному часі.' },
      { title: 'Автозавантаження тарифів', desc: 'Автоматичне завантаження тарифів з IMAP з підтвердженням підвищень через Telegram.' },
      { title: 'Моніторинг трафіку', desc: 'Безперервний моніторинг якості трафіку, оповіщення та автоблокування.' },
      { title: 'Історія маршрутизації', desc: 'Повний аналіз маршруту (callpath) у звіті CDR зі спробами та кодами відключення.' },
      { title: 'IXC Recording', desc: 'Софтсвіч захоплює медіа виклику; Billing 7 дає перегляд, пошук, відтворення й керування записами за годинами — з одним кліком зі звітів Originator і Terminator.' },
      { title: 'Портал клієнта', desc: 'Огляд активних дзвінків та звітів для клієнтів у реальному часі.' },
      { title: 'Інструменти тестування', desc: 'Вбудована утиліта SIP-генерації для тестування будь-яких сценаріїв.' },
      { title: 'Захист даних', desc: 'Автоматичне резервне копіювання та двофакторна автентифікація.' },
      { title: 'Підтримка 24/7', desc: 'Багатомовна підтримка (EN, RU) цілодобово протягом понад 25 років.' },
    ]
  },
  testimonials: {
    title: 'Відгуки клієнтів',
    subtitle: 'Нам довіряють провідні телеком-оператори та оптові VoIP провайдери по всьому світу.',
    items: [
      { quote: 'Наша компанія й надалі активно впроваджуватиме високотехнологічні програмні комплекси, що відповідають найвищим міжнародним стандартам, завдяки чому ефективність нашої операційної діяльності в цілому буде істотно підвищена.', author: 'Ігор Литовченко', role: 'Президент, АТ «Київстар GSM»' },
      { quote: 'Перехід на IXC дав нам маршрутизацію та білінг операторського класу в одному рішенні. Інструменти моніторингу та інтеграція з Telegram дозволяють контролювати якість трафіку 24/7.', author: 'Gilbert Abboud', role: 'CTO — VoIP | обмін повідомленнями · NGN Telecom' },
      { quote: 'Ми запустили IXC Softswitch V7 у продакшн з першого дня — без тестового етапу, одразу на бойовий трафік. Платформа стабільно обслуговує наш оптовий бізнес із першого дзвінка.', author: 'Андрій Лужанський', role: 'Продажі · Valor DBA Lukovitel' },
    ]
  },
  blog: {
    title: 'Блог',
    subtitle: 'Практичні посібники з технології VoIP-софтсвіча — маршрутизація, білінг, моніторинг і безпека.',
    readMore: 'Читати статтю',
    viewAll: 'Усі статті блогу',
    backToBlog: 'Назад до блогу',
    minRead: 'хв читання',
    faqTitle: 'Часті запитання',
    ctaTitle: 'Подивіться IXC Softswitch на своєму трафіку',
    ctaText: 'Маршрутизація класу 4/5 операторського рівня, білінг у реальному часі, моніторинг та антифрод — у продакшені з 1999 року.',
    ctaButton: 'Перейти до софтсвіча',
    notFoundTitle: 'Статтю не знайдено',
    notFoundText: 'Стаття, яку ви шукаєте, не існує або була переміщена.'
  },
  news: {
    title: 'Останні оновлення',
    subtitle: 'Оновлення продуктів, релізи та новини від IXC.',
    readMore: 'Детальніше',
    breadcrumb: 'Новини',
    backToNews: 'Назад до новин',
    notFoundTitle: 'Новину не знайдено',
    notFoundText: 'Стаття, яку ви шукаєте, не існує.',
    previous: 'Попередні новини',
    next: 'Наступні новини'
  },
  contactSection: {
    title: "Зв'яжіться з нами",
    subtitle:
      "Питання щодо IXC Softswitch? Потрібне демо чи комерційна пропозиція? Напишіть нам — відповімо найближчим часом."
  },
  contactForm: {
    name: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    email: 'Email',
    company: 'Компанія',
    optional: '(необов’язково)',
    companyPlaceholder: 'Назва компанії',
    message: 'Повідомлення',
    messagePlaceholder: 'Розкажіть про проєкт або поставте запитання...',
    send: 'Надіслати',
    sending: 'Надсилання...',
    successTitle: 'Повідомлення надіслано!',
    successText: 'Дякуємо за звернення. Відповімо протягом 24 годин.',
    sendAnother: 'Надіслати ще одне',
    emailUs: 'Написати нам',
    errorGeneric: 'Щось пішло не так. Спробуйте ще раз.',
    errorNetwork: 'Помилка мережі. Перевірте з’єднання і спробуйте знову.'
  },
  common: {
    email: 'Email',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    teams: 'Teams',
    office: 'Офіс',
    sales: 'Продажі',
    changeLanguage: 'Змінити мову',
    toggleTheme: 'Перемкнути тему',
    menu: 'Меню',
    contactUs: "Зв'язатися з нами",
    needHelp: 'Потрібна допомога?',
    previousTestimonial: 'Попередній відгук',
    nextTestimonial: 'Наступний відгук'
  },
  team: {
    title: 'Наша команда',
    founderRole: 'Засновник та CEO',
    founderBio: "Понад 30 років досвіду в телекомунікаційній галузі. Олексій керує розробкою IXC Softswitch. Його бачення забезпечує прагнення до найкращих рішень для софтсвітча та білінгу для оптових та роздрібних VoIP-провайдерів по всьому світу.",
    connectLinkedIn: 'Профіль у LinkedIn'
  },
  footer: {
    description: 'Високопродуктивне рішення «все в одному» для вашого VoIP бізнесу.',
    productsTitle: 'Продукти',
    companyTitle: 'Компанія',
    contactTitle: 'Контакти',
    contactText: "Маєте запитання? Зв'яжіться з нашою командою.",
    copyright: 'Всі права захищені.',
    salesLabel: 'Продажі'
  },
  about: {
    title: 'Про IXC Softswitch',
    subtitle: "IXC створює програмне забезпечення операторського класу для голосових та телеком операторів. З 1999 року ми допомагаємо операторам запускати, масштабувати та оптимізувати надійні голосові мережі з прозорим білінгом та надійною маршрутизацією.",
    missionTitle: 'Наша місія',
    missionText: 'Дати можливість операторам будь-якого масштабу надавати надійні голосові послуги — прибутково, безпечно та масштабовано.',
    whatWeDoTitle: 'Що ми робимо',
    whatWeDoSubtitle: 'Комплексні рішення для всіх аспектів управління сучасними голосовими мережами.',
    whyTitle: 'Чому IXC',
    whySubtitle: 'Переваги, які відрізняють нас від конкурентів.',
    ctaTitle: "Зв'яжіться з нами",
    ctaText: "Запускаєте нову мережу, об'єднуєте платформи або оптимізуєте контроль доходів? IXC допоможе.",
    ctaContactSales: "Зв'язатися",
    ctaExploreProducts: 'Наші продукти',
    capabilities: [
      { title: 'Софтсвітч та маршрутизація', description: 'Високопродуктивна SIP-маршрутизація, LCR та управління політиками для безперебійної роботи.' },
      { title: 'Білінг та медіація', description: 'Точна обробка CDR, тарифікація, виставлення рахунків та контроль доходів для опту та роздробу.' },
      { title: 'Аналітика та звітність', description: 'Дашборди в реальному часі та історичні дані для управління маржою, якістю та потоками трафіку.' },
      { title: 'Безпека та відповідність', description: 'Інструменти для запобігання шахрайству, контролю витрат та дотримання нормативних вимог.' },
      { title: 'Автоматизація та інтеграція', description: 'Відкриті API та конектори для вбудовування IXC у ваші OSS/BSS, CRM та платіжні процеси.' },
    ],
    strengths: [
      { title: 'Перевірено з 1999 року', description: 'Десятиліття телеком-експертизи, втілені у зрілих, перевірених на практиці продуктах.' },
      { title: 'Надійність операторського класу', description: 'Архітектура для високої доступності, масштабованості та передбачуваної продуктивності.' },
      { title: 'Швидкий старт', description: 'Практичні функції, розумні налаштування за замовчуванням та команда, що розуміє реальні операції.' },
      { title: 'Підтримка 24/7', description: 'Понад 25 років багатомовної підтримки (EN, RU). Наша команда з вами від проектування до щоденних операцій.' },
    ],
    certificatesTitle: 'Сертифікати та торгові марки',
    certificatesSubtitle: 'Офіційна реєстрація брендів і програмного забезпечення IXC у Державному департаменті інтелектуальної власності України.',
    certificatesNoLabel: '№ свідоцтва',
    certificatesDateLabel: 'Дата реєстрації',
    certificatesPageLabel: 'Сторінка {n}',
    certificatesViewFull: 'Відкрити в повному розмірі',
    certificatesDocuments: [
      {
        title: 'Торгова марка: IXC',
        description: 'Реєстрація торгової марки IXC в Україні (класи Ніцці 9, 38, 42).',
        certificateNo: '44583',
        registeredDate: '15.11.2004',
      },
      {
        title: 'Торгова марка: InterExchange Carrier',
        description: 'Реєстрація торгової марки InterExchange Carrier для телекомунікаційної продукції (клас 9).',
        certificateNo: '43606',
        registeredDate: '15.09.2004',
      },
      {
        title: 'Авторське право: IXC Billing Center',
        description: 'Державна реєстрація авторського права на програмний комплекс IXC Billing Center (Softswitch Plus, Prepaid platform, Dialer, Switch Statistics, Softswitch Super).',
        certificateNo: '9378',
        registeredDate: '18.02.2004',
      },
    ],
  },
  productPage: {
    overview: 'Огляд',
    keyFeatures: 'Ключові функції',
    realTimeReporting: 'Звітність у реальному часі',
    callRoutingDepending: 'Маршрутизація викликів залежно від:',
    requestDemo: 'Запросити демо',
    contactSales: "Зв'язатися",
    downloadSpecPdf: 'Завантажити PDF специфікацію',
    previous: 'Попередній',
    next: 'Наступний',
    notFoundTitle: 'Продукт не знайдено',
    notFoundText: 'Продукт, який ви шукаєте, не існує.',
    backHome: 'На головну'
  }
};

// ============================================================
// SIMPLIFIED CHINESE
// ============================================================
const zh: Translations = {
  nav: {
    home: '首页',
    products: '产品',
    aboutUs: '关于我们',
    contactUs: '联系我们',
    privacyPolicy: '隐私政策',
    blog: '博客',
    getFreeDemo: '免费演示',
    bannerAnnouncement: 'IXC Recording — AI 通话分析、FAS 与语音信箱检测的基础'
  },
  privacyPolicy: {
    title: '隐私政策',
    subtitle:
      'IXC Software Distribution Corp. 如何在 ixc.ua 收集、使用和保护个人信息。',
    lastUpdated: '最近更新',
  },
  hero: {
    title: '运营商级 VoIP 基础设施——自 1999 年起稳定生产运行',
    subtitle:
      '在同一套高容量平台上运营批发与零售语音：高级 LCR 与策略路由、自动计费、路由测试与 FAS 检测、API 与告警——并提供 24/7 多语言 NOC 支持。',
    aiStamp: 'Recording',
    exploreProducts: '了解 IXC Recording',
    contactSales: '联系销售'
  },
  trust: {
    since: '赢得信任始于',
    clients: '家全球批发 VoIP 客户。'
  },
  aiIntegration: {
    title: '语音与 SMS 运营商的 AI 自动化',
    subtitle:
      '当路由、费率核对、伙伴沟通和表格全部靠复制粘贴与人工分析时，一名运营商经理最多只能管 5–10 个账户。AI 能在同样人力成本下扩展到 100+——同等薪资预算下利润最高可达 10 倍，并相对仍在手工操作的竞争对手形成持久优势。',
    footer:
      '经理们仍在邮件和即时通讯里读写信息，在软交换里逐条点击路由和费率，再在两者之间复制粘贴。用母语提问——给运营商 1–3 添加目的地、修改 Cuba Mobile 路由，或根据 30 行 Excel 填满与运营商 X 的承诺量——IXC 即可批量落地变更，无需多步界面操作，同时 AI 完成深度分析。Teams 和即时通讯收到回复时，交换机已经更新。',
    partnership: 'IXC ↔ DealoAgent',
    oldApproach: '传统方式',
    newApproach: '新方式',
    oldApproachCaption: '每名经理最多 5–10 个账户',
    newApproachCaption: '同等人力下每名经理 100+ 个账户',
    learnMore: '了解更多 →',
  },
  products: {
    title: '核心产品',
    subtitle: '专为现代批发与零售 VoIP 业务打造的高精电信解决方案套件。',
    learnMore: '了解更多 →',
    cards: [
      { title: '软交换', description: '面向最大吞吐量、精细计费与智能路由的 4/5 类 VoIP 平台。' },
      { title: 'IXC Recording', description: '软交换采集通话媒体；Billing 7 整理归档——外加 AI 通话分析、流量画像、语音质量、FAS/语音信箱检测与丢弃，以及个性化通话后短信营销。' },
      { title: 'AI 自动化', description: 'IXC ↔ DealoAgent：母语指令、批量软交换更新与即时通讯分发——每名经理从 5–10 个账户扩展到 100+。' },
      { title: '白/黑名单', description: '动态防护与灵活路由规则，保障安全并防止垃圾呼叫。' },
      { title: '监控工具', description: '实时分析与动态图表，便于追踪 SIP 数据并立即排障。' },
      { title: '自动测试器', description: '主动生成自动测试呼叫并分析结果，确保路由质量。' },
      { title: 'SMS 平台', description: '一体化群发短信方案，支持快速过境与最优投递路径。' },
      { title: 'Google API 集成', description: '与主流企业服务对接，扩展运营集成能力。' },
      { title: '产品技术规格', description: '协议、容量、路由、安全、编解码、计费、报表与 24/7 NOC——集中于一份参考。' },
    ]
  },
  ixcClub: {
    title: 'IXC Club',
    subtitle: '面向 IXC 客户的商务拓展——精选电信引荐，转化为新的语音与短信互联。',
    learnMore: 'IXC Club 如何运作',
    joinCta: '加入 IXC Club',
    pageTitle: 'IXC Club',
    pageSubtitle: '为 IXC 客户精选运营商引荐——新互联、直接成交、利润增长。',
    problemTitle: '为什么寻找新的电信联系人成本高昂',
    problemIntro:
      '批发语音与短信增长意味着不断结识新运营商。若自行搭建这条管道，费用很快累积：',
    problemCosts: [
      {
        title: '展会与行业活动费用',
        description: 'ITW、Capacity 及区域电信展的展位、赞助与活动套餐。',
      },
      {
        title: '机票与住宿',
        description: '销售与商务拓展团队跨区域面对面拜访潜在客户的差旅。',
      },
      {
        title: '商务拓展薪资',
        description: '全职经理负责猎取线索、跟进并筛选互联伙伴。',
      },
      {
        title: '增长的真实成本',
        description: '签约一条路由前往往要投入数月——增长成本可能超过它所带来的利润。',
      },
    ],
    problemFooter: '对许多运营商而言，从零搭建联系人网络是业务中最大的隐性成本之一。',
    solutionTitle: 'IXC 已建好网络——无需巨额投入即可增长',
    solutionText:
      'IXC 销售经理维护着数千个与愿意开展语音和短信互联的运营商的活跃关系。IXC Club 为符合条件的客户提供按画像匹配的精选引荐——展会、差旅与外联已经完成。您与合格伙伴洽谈、签约并提升利润，IXC 协助您的商务拓展，且不另收俱乐部费用。',
    flowTitle: 'IXC Club 如何运作',
    flowSubtitle: '从会员到新路由——围绕您的业务画像的简单流程。',
    flowSteps: [
      {
        title: '您是符合条件档位的 IXC 客户',
        description:
          '符合服务档位的在用 IXC Softswitch 客户自动加入 IXC Club——无需单独订阅。',
      },
      {
        title: '我们梳理您的业务画像',
        description:
          '语音或短信、批发或零售、区域、主叫/被叫侧重以及容量需求——使引荐贴合您的真实交易方式。',
      },
      {
        title: '每周通过 Microsoft Teams 获得 3–5 个精选联系人',
        description:
          '我们的团队从数千个活跃关系中挑选热门潜在客户，并在 Teams 上交付引荐——通常每周三到五次。',
      },
      {
        title: '您直接洽谈、签约并互联',
        description:
          '商务沟通、条款谈判与协议签署由您完成。IXC 不介入交易中间——我们只开门。',
      },
      {
        title: '新路由、更高利润——IXC 免费支持增长',
        description:
          '成功的互联增加您的流量与利润。IXC Club 是我们帮助客户增长的方式之一——商务拓展包含在您与 IXC 的合作中。',
      },
    ],
    highlightTitle: 'IXC 为何运营这个俱乐部',
    highlightText:
      '客户增长，整个网络对所有人更强。IXC Club 将您的交换机与运营连接到真实的商业机会——且不另收引荐费。',
    ctaTitle: '准备加入？',
    ctaText: '联系我们以确认档位、更新业务画像，并开始接收精选引荐。',
    benefits: [
      {
        title: '数千个活跃联系人',
        description: 'IXC 销售经理维护全球语音与短信运营商的活跃网络。',
      },
      {
        title: '语音与短信互联',
        description: '引荐面向希望与您建立新批发或零售路由的运营商。',
      },
      {
        title: '每周 3–5 个热门线索',
        description: '按您的画像匹配的精选潜在客户——不是静态名录导出。',
      },
      {
        title: '增长支持，无俱乐部费用',
        description: 'IXC 投入您的商务拓展，让您专注签约并扩大互联。',
      },
    ],
  },
  features: {
    title: '平台功能',
    subtitle: '面向现代批发与零售 VoIP 运营需求打造的全面能力集。',
    learnMore: '了解更多',
    items: [
      { title: '高容量', desc: '每台服务器最多 4,000 条 VoIP 通道，CPS 最高 800，无限水平扩展。' },
      { title: '智能路由', desc: 'LCR、ASR/ACD、PDD、优先级、百分比、A/B 号码、分时与继承路由。' },
      { title: '协议灵活', desc: 'SIP 与 H.323 及协议转码。内置 SMS（SMPP 3.4）支持。' },
      { title: '访问列表', desc: '内置允许/拒绝号码列表，支持自动添加与自动重置。' },
      { title: '路由质量控制', desc: '自动路由测试器，实时录音以监控质量并检测 FAS。' },
      { title: '编解码支持', desc: '主流 VoIP 与 GSM 编解码，支持实时转码。' },
      { title: '集成安全', desc: '自有 SIP 防火墙、双因素认证与自动备份。' },
      { title: '丰富 API', desc: '面向外部应用的 JSON API，支持 Telegram 机器人。' },
      { title: '灵活 SIP 配置文件', desc: '可按任意 SIP RFC 呼叫场景自定义配置。' },
      { title: 'CPS 限制', desc: '过载时拒绝多余 SIP 尝试，不影响真实话务。' },
      { title: '自动计费', desc: '按客户时区自动生成财务发票与账单。' },
      { title: '现代 Web 界面', desc: '直观 UI、详细报表、深色/浅色主题与实时仪表盘。' },
      { title: '自动费率管理', desc: '从 IMAP 自动上传费率，费率上调经 Telegram 确认。' },
      { title: '话务监控', desc: '持续监控话务质量、告警与自动阻断。' },
      { title: '呼叫路由历史', desc: '在 CDR 报表中完整分析呼叫路径、全部路由尝试与拆线码。' },
      { title: 'IXC Recording', desc: '软交换采集通话媒体；Billing 7 按小时浏览、搜索、播放与管理录音——可从 Originator 与 Terminator 呼叫报表一键进入。' },
      { title: '客户门户', desc: '为客户提供实时活动呼叫与报表概览。' },
      { title: '测试工具', desc: '内置 SIP 生成工具，可测试各类场景。' },
      { title: '数据保护', desc: '自动备份系统与双因素认证，增强安全。' },
      { title: '24/7 NOC 支持', desc: '超过 25 年的全天候多语言支持（EN、RU）。' },
    ]
  },
  testimonials: {
    title: '客户评价',
    subtitle: '全球领先电信运营商与批发 VoIP 提供商的信赖之选。',
    items: [
      { quote: '本公司将继续积极引入符合最高国际标准的高科技软件系统，从而显著提升整体运营效率。', author: 'Igor Litovchenko', role: '总裁，股份公司「Kyivstar G.S.M.」' },
      { quote: '切换到 IXC 后，我们在一套方案中获得了运营商级路由与计费。监控工具与 Telegram 集成让我们全天候掌握话务质量。', author: 'Gilbert Abboud', role: 'CTO — VoIP | 消息 · NGN Telecom' },
      { quote: '我们从第一天就把 IXC Softswitch V7 投入生产——没有预演阶段，直接承载现网话务。平台自第一通呼叫起就稳定支撑我们的批发业务。', author: 'Andrew Lujansky', role: '销售 · Valor DBA Lukovitel' },
    ]
  },
  blog: {
    title: '博客',
    subtitle: 'VoIP 软交换实用指南——路由、计费、监控与安全。',
    readMore: '阅读文章',
    viewAll: '查看全部文章',
    backToBlog: '返回博客',
    minRead: '分钟阅读',
    faqTitle: '常见问题',
    ctaTitle: '在您自己的话务上体验 IXC Softswitch',
    ctaText: '运营商级 4/5 类路由、实时计费、监控与反欺诈——自 1999 年起生产验证。',
    ctaButton: '了解软交换',
    notFoundTitle: '未找到文章',
    notFoundText: '您查找的文章不存在或可能已移动。'
  },
  news: {
    title: '最新动态',
    subtitle: 'IXC 的产品更新、版本发布与公告。',
    readMore: '阅读更多',
    breadcrumb: '新闻',
    backToNews: '返回新闻',
    notFoundTitle: '未找到新闻',
    notFoundText: '您查找的文章不存在。',
    previous: '上一条新闻',
    next: '下一条新闻'
  },
  contactSection: {
    title: '联系我们',
    subtitle:
      '对 IXC Softswitch 有疑问？需要演示或报价？请留言，我们会尽快回复。'
  },
  contactForm: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    email: '邮箱',
    company: '公司',
    optional: '（选填）',
    companyPlaceholder: '公司名称',
    message: '留言',
    messagePlaceholder: '介绍您的项目或提出问题…',
    send: '发送留言',
    sending: '发送中…',
    successTitle: '留言已发送！',
    successText: '感谢联系。我们将在 24 小时内回复。',
    sendAnother: '再发一条',
    emailUs: '发邮件给我们',
    errorGeneric: '出了点问题，请再试一次。',
    errorNetwork: '网络错误。请检查连接后重试。'
  },
  common: {
    email: '邮箱',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    teams: 'Teams',
    office: '办公室',
    sales: '销售',
    changeLanguage: '切换语言',
    toggleTheme: '切换主题',
    menu: '菜单',
    contactUs: '联系我们',
    needHelp: '需要帮助？',
    previousTestimonial: '上一条评价',
    nextTestimonial: '下一条评价'
  },
  team: {
    title: '我们的团队',
    founderRole: '创始人兼首席执行官',
    founderBio: 'Oleksii 拥有超过 30 年电信行业经验，领导 IXC Softswitch 的研发。他的愿景推动我们为全球批发与零售 VoIP 提供商交付一流的软交换与计费方案，确保卓越性能与可靠性。',
    connectLinkedIn: '在 LinkedIn 上联系'
  },
  footer: {
    description: '面向 VoIP 业务运营的高性能一体化解决方案。',
    productsTitle: '产品',
    companyTitle: '公司',
    contactTitle: '联系',
    contactText: '有问题？请联系我们的团队。',
    copyright: '保留所有权利。',
    salesLabel: '销售'
  },
  about: {
    title: '关于 IXC Softswitch',
    subtitle: 'IXC 为语音与电信运营商打造运营商级软件与服务。自 1999 年起，我们帮助运营商、服务提供商与企业以透明计费和稳健路由启动、扩展并优化可靠的语音网络。',
    missionTitle: '我们的使命',
    missionText: '让各种规模的运营商都能以盈利、安全、可扩展的方式提供可信赖的语音服务。',
    whatWeDoTitle: '我们做什么',
    whatWeDoSubtitle: '覆盖现代语音网络运营各方面的端到端方案。',
    whyTitle: '为何选择 IXC',
    whySubtitle: '使我们区别于竞争对手的优势。',
    ctaTitle: '联系我们',
    ctaText: '无论您是启动新网络、整合平台，还是加强收入管控，IXC 都能提供帮助。',
    ctaContactSales: '联系销售',
    ctaExploreProducts: '浏览产品',
    capabilities: [
      { title: '软交换与路由', description: '面向可用性与效率的高性能 SIP 路由、LCR 与策略控制。' },
      { title: '计费与中介', description: '面向批发与零售的精确 CDR 处理、评级、开票与收入保障。' },
      { title: '分析与报表', description: '实时仪表盘与历史洞察，管理利润、质量与话务流向。' },
      { title: '安全与合规', description: '用于缓解欺诈、执行支出限额并支持监管要求的工具。' },
      { title: '自动化与集成', description: '开放 API 与连接器，将 IXC 接入您的 OSS/BSS、CRM 与支付流程。' },
    ],
    strengths: [
      { title: '自 1999 年验证', description: '数十年电信经验沉淀为成熟、经实战检验的产品。' },
      { title: '运营商级可靠性', description: '面向高可用、可扩展与可预期性能而设计。' },
      { title: '快速见效', description: '实用功能、合理默认值，以及理解真实运营的团队。' },
      { title: '全心 24/7 支持', description: '超过 25 年的多语言实时支持（EN、RU）。经验丰富的团队从设计陪伴到日常运营。' },
    ],
    certificatesTitle: '证书与商标',
    certificatesSubtitle: 'IXC 品牌与软件在乌克兰国家知识产权局的正式注册。',
    certificatesNoLabel: '证书编号',
    certificatesDateLabel: '注册日期',
    certificatesPageLabel: '第 {n} 页',
    certificatesViewFull: '查看原图',
    certificatesDocuments: [
      {
        title: '商标：IXC',
        description: 'IXC 品牌在乌克兰的商标注册（尼斯分类 9、38、42）。',
        certificateNo: '44583',
        registeredDate: '15.11.2004',
      },
      {
        title: '商标：InterExchange Carrier',
        description: 'InterExchange Carrier 电信产品在乌克兰的商标注册（第 9 类）。',
        certificateNo: '43606',
        registeredDate: '15.09.2004',
      },
      {
        title: '著作权：IXC Billing Center',
        description: 'IXC Billing Center 软件套件（Softswitch Plus、Prepaid platform、Dialer、Switch Statistics、Softswitch Super）的国家著作权登记。',
        certificateNo: '9378',
        registeredDate: '18.02.2004',
      },
    ],
  },
  productPage: {
    overview: '概述',
    keyFeatures: '主要功能',
    realTimeReporting: '实时报表',
    callRoutingDepending: '呼叫路由取决于：',
    requestDemo: '申请演示',
    contactSales: '联系销售',
    downloadSpecPdf: '下载 PDF 规格',
    previous: '上一项',
    next: '下一项',
    notFoundTitle: '未找到产品',
    notFoundText: '您查找的产品不存在。',
    backHome: '返回首页'
  }
};

export const translations: Record<Language, Translations> = { en, ru, uk, zh };
