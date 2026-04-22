import type { Language } from '../i18n/translations';

export type SeoPagePair = Record<Language, { title: string; description: string }>;

/** Centralized route SEO (titles + meta descriptions) — keep in sync with index.html defaults for `/`. */
export const seoRoutes = {
  home: {
    en: {
      title: 'VoIP Softswitch Solution — Wholesale & Retail | IXC',
      description:
        'Carrier-grade VoIP softswitch for operators: Class 4/5 routing, LCR, automated billing, REST APIs, monitoring & FAS tools, multilingual NOC — production-proven since 1999.'
    },
    ru: {
      title: 'Решение VoIP softswitch — опт и розница | IXC',
      description:
        'Операторский VoIP-софтсвитч: маршрутизация класса 4/5, LCR, автоматический биллинг, API, мониторинг и поддержка NOC 24/7 — в продакшене с 1999 года.'
    },
    uk: {
      title: 'Рішення VoIP softswitch — опт і роздріб | IXC',
      description:
        'Операторський VoIP-софтсвіч: маршрутизація класу 4/5, LCR, автоматичний білінг, API, моніторинг та підтримка NOC 24/7 — у продакшені з 1999 року.'
    }
  } satisfies SeoPagePair,
  about: {
    en: {
      title: 'About IXC Softswitch — Telecom Routing & Billing',
      description:
        'IXC builds carrier-grade voice platforms for wholesale and retail VoIP: routing, billing, analytics, integrations — trusted by operators worldwide since 1999.'
    },
    ru: {
      title: 'О компании IXC Softswitch — маршрутизация и биллинг',
      description:
        'IXC создаёт платформы голосовой связи операторского класса для оптового и розничного VoIP: маршрутизация, биллинг, аналитика и интеграции — с 1999 года.'
    },
    uk: {
      title: 'Про IXC Softswitch — маршрутизація та білінг',
      description:
        'IXC розробляє голосові платформи операторського класу для оптового та роздрібного VoIP: маршрутизація, білінг, аналітика та інтеграції — з 1999 року.'
    }
  } satisfies SeoPagePair,
  products: {
    softswitch: {
      en: {
        title: 'IXC VoIP Softswitch — Class 4/5 Routing, Billing & Scale',
        description:
          'High-capacity VoIP softswitch for carriers: up to thousands of channels per server, LCR, prepaid/postpaid billing, SIP/H.323, JSON API, SIP firewall — request a demo.'
      },
      ru: {
        title: 'IXC VoIP Softswitch — маршрутизация класса 4/5 и биллинг',
        description:
          'Высоконагруженный VoIP-софтсвитч: LCR, предоплата/постоплата, SIP/H.323, JSON API, SIP firewall — запросите демо.'
      },
      uk: {
        title: 'IXC VoIP Softswitch — маршрутизація класу 4/5 та білінг',
        description:
          'Високонавантажений VoIP-софтсвіч: LCR, передоплата/постоплата, SIP/H.323, JSON API, SIP firewall — замовте демо.'
      }
    } satisfies SeoPagePair,
    'white-black-list': {
      en: {
        title: 'White/Black List Module — Access Lists for VoIP Routing | IXC',
        description:
          'Dynamic whitelist/blacklist routing: filter by CLI/CLD, auto-updates, expiry rules — reduce fraud and SIM blocking issues on your softswitch.'
      },
      ru: {
        title: 'Белый/чёрный списки — маршрутизация по номерам | IXC',
        description:
          'Динамические белые и чёрные списки: фильтрация по CLI/CLD, автообновление и срок действия — снижение фрода и SIM-блокировок.'
      },
      uk: {
        title: 'Білий/чорний списки — маршрутизація за номерами | IXC',
        description:
          'Динамічні білі та чорні списки: фільтрація за CLI/CLD, автооновлення та термін дії — менше шахрайства та SIM-блокувань.'
      }
    } satisfies SeoPagePair,
    'monitoring-tool': {
      en: {
        title: 'Traffic Monitoring & Alerts — ASR, PDD, Margin | IXC',
        description:
          'Real-time ASR, ACD, PDD and profit monitoring with thresholds, email/Telegram alerts, auto-blocking and ticket emails for VoIP operators.'
      },
      ru: {
        title: 'Мониторинг трафика — ASR, PDD, маржа, оповещения | IXC',
        description:
          'Метрики в реальном времени, пороги, e-mail и Telegram, автоблокировки маршрутов — для операторов VoIP.'
      },
      uk: {
        title: 'Моніторинг трафіку — ASR, PDD, маржа, сповіщення | IXC',
        description:
          'Метрики в реальному часі, пороги, e-mail і Telegram, автоблокування маршрутів — для VoIP-операторів.'
      }
    } satisfies SeoPagePair,
    'ixc-autotester': {
      en: {
        title: 'IXC Autotester — Route Quality & FAS Detection',
        description:
          'Automated test calls, MP3 recordings, schedules, SIP/H.323 — improve route quality and catch FAS on wholesale voice routes.'
      },
      ru: {
        title: 'IXC Autotester — качество маршрутов и FAS',
        description:
          'Автотесты, записи MP3, расписания, SIP/H.323 — контроль качества и выявление FAS на оптовых маршрутах.'
      },
      uk: {
        title: 'IXC Autotester — якість маршрутів та FAS',
        description:
          'Автотести, запис MP3, розклади, SIP/H.323 — контроль якості та виявлення FAS на оптових маршрутах.'
      }
    } satisfies SeoPagePair,
    'sms-platform': {
      en: {
        title: 'SMS Wholesale Platform — Routing & Billing | IXC',
        description:
          'Bulk SMS with routing, billing and SMPP 3.4 — scales from low volume to high throughput on IXC softswitch infrastructure.'
      },
      ru: {
        title: 'Платформа SMS wholesale — маршрутизация и биллинг | IXC',
        description:
          'Массовые SMS: маршрутизация, биллинг, SMPP 3.4 — от малых объёмов до высокой нагрузки на базе IXC.'
      },
      uk: {
        title: 'Платформа SMS wholesale — маршрутизація та білінг | IXC',
        description:
          'Масові SMS: маршрутизація, білінг, SMPP 3.4 — від низьких обсягів до високого навантаження на базі IXC.'
      }
    } satisfies SeoPagePair,
    'google-api': {
      en: {
        title: 'Google Sheets & Docs Integration — IXC Statistics Sync',
        description:
          'Push IXC statistics and destination data to Google Sheets and Docs automatically — share live traffic and routing views with your team.'
      },
      ru: {
        title: 'Интеграция с Google — синхронизация статистики IXC',
        description:
          'Автоматическая выгрузка статистики и данных IXC в Google Таблицы и Документы — общий доступ к метрикам.'
      },
      uk: {
        title: 'Інтеграція з Google — синхронізація статистики IXC',
        description:
          'Автоматичне оновлення статистики та даних IXC в Google Таблицях і Документах — спільний доступ до метрик.'
      }
    } satisfies SeoPagePair,
    'technical-specifications': {
      en: {
        title: 'Product Technical Specifications — IXC VoIP Platform',
        description:
          'SIP/H.323, channel capacity, intelligent routing, codecs, SMPP, APIs, billing, real-time reports, security, customer portal, autotester, and 24/7 NOC (EN, RU).'
      },
      ru: {
        title: 'Технические спецификации — платформа IXC VoIP',
        description:
          'SIP/H.323, ёмкость, интеллектуальная маршрутизация, кодеки, SMPP, API, биллинг, отчёты в реальном времени, безопасность, портал, автотестер и NOC 24/7 (EN, RU).'
      },
      uk: {
        title: 'Технічні специфікації — платформа IXC VoIP',
        description:
          'SIP/H.323, ємність, інтелектуальна маршрутизація, кодеки, SMPP, API, білінг, звіти в реальному часі, безпека, портал, автотестер та NOC 24/7 (EN, RU).'
      }
    } satisfies SeoPagePair
  },
  newsTitleSuffix: {
    en: ' | IXC Softswitch',
    ru: ' | IXC Softswitch',
    uk: ' | IXC Softswitch'
  } satisfies Record<Language, string>,
  newsFallbackDescription: {
    en: 'Product news, release notes, and updates from the IXC VoIP softswitch team.',
    ru: 'Новости продукта, релизы и обновления от команды VoIP-софтсвитча IXC.',
    uk: 'Новини продукту, релізи та оновлення від команди VoIP-софтсвіча IXC.'
  } satisfies Record<Language, string>,
  notFound: {
    en: {
      title: 'Page Not Found | IXC Softswitch',
      description: 'The page you are looking for could not be found. Explore IXC softswitch solutions for wholesale and retail VoIP.'
    },
    ru: {
      title: 'Страница не найдена | IXC Softswitch',
      description: 'Страница не найдена. Решения IXC для оптового и розничного VoIP.'
    },
    uk: {
      title: 'Сторінку не знайдено | IXC Softswitch',
      description: 'Сторінку не знайдено. Рішення IXC для оптового та роздрібного VoIP.'
    }
  } satisfies SeoPagePair
} as const;

export type ProductSlug = keyof typeof seoRoutes.products;
