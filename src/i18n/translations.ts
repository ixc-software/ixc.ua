export type Language = 'en' | 'ru' | 'uk';

export const languageNames: Record<Language, string> = {
  en: 'EN',
  ru: 'RU',
  uk: 'UA'
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
  };
  contactSection: {
    title: string;
    subtitle: string;
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
    readMore: 'Read More'
  },
  contactSection: {
    title: 'Get in Touch',
    subtitle:
      "Have questions about IXC Softswitch? Looking for a demo or pricing details? Drop us a message and we'll get back to you shortly."
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
    copyright: 'All rights Reserved.'
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
    readMore: 'Подробнее'
  },
  contactSection: {
    title: 'Свяжитесь с нами',
    subtitle:
      'Вопросы по IXC Softswitch? Нужно демо или коммерческое предложение? Напишите нам — ответим в ближайшее время.'
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
    copyright: 'Все права защищены.'
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
    readMore: 'Детальніше'
  },
  contactSection: {
    title: "Зв'яжіться з нами",
    subtitle:
      "Питання щодо IXC Softswitch? Потрібне демо чи комерційна пропозиція? Напишіть нам — відповімо найближчим часом."
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
    copyright: 'Всі права захищені.'
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

export const translations: Record<Language, Translations> = { en, ru, uk };
