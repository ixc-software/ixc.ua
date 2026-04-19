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

export interface Translations {
  nav: {
    home: string;
    products: string;
    aboutUs: string;
    contactUs: string;
    tryItNow: string;
    bannerAnnouncement: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreProducts: string;
    contactSales: string;
  };
  trust: {
    since: string;
    clients: string;
  };
  products: {
    title: string;
    subtitle: string;
    learnMore: string;
    cards: ProductCardTranslation[];
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureTranslation[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialTranslation[];
  };
  news: {
    title: string;
    readMore: string;
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
  };
  productPage: {
    overview: string;
    keyFeatures: string;
    requestDemo: string;
    contactSales: string;
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
    tryItNow: 'Try it Now',
    bannerAnnouncement: 'Version 6 are coming... With AI business assistant'
  },
  hero: {
    title: 'High Performance All-In-One Solution for VoIP Business',
    subtitle: 'Experience carrier-grade reliability with IXC Softswitch. Our platform provides everything you need to manage routing, billing, SMS, and monitoring securely and efficiently.',
    exploreProducts: 'Explore Products',
    contactSales: 'Contact Sales'
  },
  trust: {
    since: 'Building Trust Since',
    clients: 'clients globally in the wholesale VoIP business.'
  },
  products: {
    title: 'Our Core Products',
    subtitle: 'Explore our suite of highly tuned telecommunication solutions built directly for modern wholesale and retail VoIP businesses.',
    learnMore: 'Learn more →',
    cards: [
      { title: 'Softswitch', description: 'A Class 4/5 VoIP platform designed for maximum throughput, detailed billing, and advanced routing intelligence.' },
      { title: 'White/Black List', description: 'Dynamic protection and flexible routing rules to ensure unparalleled security and spam call prevention.' },
      { title: 'Monitoring Tool', description: 'Real-time analytics and dynamic graphs allowing you to trace SIP data for immediate troubleshooting.' },
      { title: 'Autotester', description: 'Ensure route quality by proactively generating automated test calls and analyzing the results.' },
      { title: 'SMS Platform', description: 'An integrated bulk messaging solution ready to manage fast transit and optimal delivery paths.' },
      { title: 'Google API Integration', description: 'Enhance your operations with extended integration points mapping to leading enterprise services.' },
    ]
  },
  features: {
    title: 'Platform Features',
    subtitle: 'A comprehensive set of capabilities engineered for the demands of modern wholesale and retail VoIP operations.',
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
      { quote: 'IXC Softswitch has been a reliable backbone for our VoIP operations. The platform\'s stability and the team\'s responsiveness have exceeded our expectations over the years.', author: 'Technical Team', role: 'Kyivstar Mobile Carrier' },
      { quote: 'Switching to IXC gave us carrier-grade routing and billing in one solution. The monitoring tools and Telegram integration keep us on top of traffic quality 24/7.', author: 'Operations Team', role: 'NGN Telecom' },
    ]
  },
  news: {
    title: 'Latest Updates',
    readMore: 'Read More'
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
    ]
  },
  productPage: {
    overview: 'Overview',
    keyFeatures: 'Key Features',
    requestDemo: 'Request a Demo',
    contactSales: 'Contact Sales',
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
    tryItNow: 'Попробовать',
    bannerAnnouncement: 'Скоро версия 6... С ИИ бизнес-ассистентом'
  },
  hero: {
    title: 'Высокопроизводительное решение «всё в одном» для VoIP бизнеса',
    subtitle: 'Надёжность операторского класса с IXC Softswitch. Наша платформа предоставляет всё необходимое для управления маршрутизацией, биллингом, SMS и мониторингом.',
    exploreProducts: 'Наши продукты',
    contactSales: 'Связаться с нами'
  },
  trust: {
    since: 'Доверие с',
    clients: 'клиентов по всему миру в сфере оптового VoIP.'
  },
  products: {
    title: 'Наши основные продукты',
    subtitle: 'Набор высокоточных телекоммуникационных решений для современного оптового и розничного VoIP бизнеса.',
    learnMore: 'Подробнее →',
    cards: [
      { title: 'Софтсвитч', description: 'Платформа VoIP класса 4/5 для максимальной пропускной способности, детального биллинга и интеллектуальной маршрутизации.' },
      { title: 'Белый/Чёрный список', description: 'Динамическая защита и гибкие правила маршрутизации для обеспечения безопасности и предотвращения спам-звонков.' },
      { title: 'Инструмент мониторинга', description: 'Аналитика в реальном времени и динамические графики для отслеживания SIP-данных и быстрого устранения неполадок.' },
      { title: 'Автотестер', description: 'Обеспечение качества маршрутов путём автоматической генерации тестовых вызовов и анализа результатов.' },
      { title: 'SMS Платформа', description: 'Интегрированное решение для массовой рассылки SMS с поддержкой быстрого транзита и оптимальных путей доставки.' },
      { title: 'Интеграция Google API', description: 'Расширение операций с помощью интеграции с ведущими корпоративными сервисами.' },
    ]
  },
  features: {
    title: 'Возможности платформы',
    subtitle: 'Комплексный набор функций, разработанный для требований современных оптовых и розничных VoIP операций.',
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
      { quote: 'IXC Softswitch стал надёжной основой наших VoIP-операций. Стабильность платформы и отзывчивость команды превзошли наши ожидания за все годы работы.', author: 'Техническая команда', role: 'Мобильный оператор Kyivstar' },
      { quote: 'Переход на IXC дал нам маршрутизацию и биллинг операторского класса в одном решении. Инструменты мониторинга и интеграция с Telegram позволяют контролировать качество трафика 24/7.', author: 'Операционная команда', role: 'NGN Telecom' },
    ]
  },
  news: {
    title: 'Последние обновления',
    readMore: 'Подробнее'
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
    ]
  },
  productPage: {
    overview: 'Обзор',
    keyFeatures: 'Ключевые функции',
    requestDemo: 'Запросить демо',
    contactSales: 'Связаться',
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
    tryItNow: 'Спробувати',
    bannerAnnouncement: 'Скоро версія 6... З ШІ бізнес-асистентом'
  },
  hero: {
    title: 'Високопродуктивне рішення «все в одному» для VoIP бізнесу',
    subtitle: 'Надійність операторського класу з IXC Softswitch. Наша платформа забезпечує все необхідне для управління маршрутизацією, білінгом, SMS та моніторингом.',
    exploreProducts: 'Наші продукти',
    contactSales: "Зв'язатися з нами"
  },
  trust: {
    since: 'Довіра з',
    clients: 'клієнтів по всьому світу в оптовому VoIP бізнесі.'
  },
  products: {
    title: 'Наші основні продукти',
    subtitle: 'Набір високоточних телекомунікаційних рішень для сучасного оптового та роздрібного VoIP бізнесу.',
    learnMore: 'Детальніше →',
    cards: [
      { title: 'Софтсвітч', description: 'VoIP платформа класу 4/5 для максимальної пропускної здатності, детального білінгу та інтелектуальної маршрутизації.' },
      { title: 'Білий/Чорний список', description: 'Динамічний захист і гнучкі правила маршрутизації для забезпечення безпеки та запобігання спам-дзвінкам.' },
      { title: 'Інструмент моніторингу', description: 'Аналітика в реальному часі та динамічні графіки для відстеження SIP-даних та швидкого усунення неполадок.' },
      { title: 'Автотестер', description: 'Забезпечення якості маршрутів шляхом автоматичної генерації тестових дзвінків та аналізу результатів.' },
      { title: 'SMS Платформа', description: 'Інтегроване рішення для масової розсилки SMS з підтримкою швидкого транзиту та оптимальних шляхів доставки.' },
      { title: 'Інтеграція Google API', description: 'Розширення операцій за допомогою інтеграції з провідними корпоративними сервісами.' },
    ]
  },
  features: {
    title: 'Можливості платформи',
    subtitle: 'Комплексний набір функцій, розроблений для вимог сучасних оптових та роздрібних VoIP операцій.',
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
      { quote: 'IXC Softswitch став надійною основою наших VoIP-операцій. Стабільність платформи та чуйність команди перевершили наші очікування за всі роки роботи.', author: 'Технічна команда', role: 'Мобільний оператор Kyivstar' },
      { quote: 'Перехід на IXC дав нам маршрутизацію та білінг операторського класу в одному рішенні. Інструменти моніторингу та інтеграція з Telegram дозволяють контролювати якість трафіку 24/7.', author: 'Операційна команда', role: 'NGN Telecom' },
    ]
  },
  news: {
    title: 'Останні оновлення',
    readMore: 'Детальніше'
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
    ]
  },
  productPage: {
    overview: 'Огляд',
    keyFeatures: 'Ключові функції',
    requestDemo: 'Запросити демо',
    contactSales: "Зв'язатися",
    previous: 'Попередній',
    next: 'Наступний',
    notFoundTitle: 'Продукт не знайдено',
    notFoundText: 'Продукт, який ви шукаєте, не існує.',
    backHome: 'На головну'
  }
};

export const translations: Record<Language, Translations> = { en, ru, uk };
