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
