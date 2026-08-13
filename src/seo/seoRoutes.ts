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
    },
    zh: {
      title: 'VoIP 软交换方案 — 批发与零售 | IXC',
      description:
        '面向运营商的运营商级 VoIP 软交换：4/5 类路由、LCR、自动计费、REST API、监控与 FAS 工具、多语言 NOC——自 1999 年起生产验证。'
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
    },
    zh: {
      title: '关于 IXC Softswitch — 电信路由与计费',
      description:
        'IXC 为批发与零售 VoIP 打造运营商级语音平台：路由、计费、分析与集成——自 1999 年起获全球运营商信赖。'
    }
  } satisfies SeoPagePair,
  ixcClub: {
    en: {
      title: 'IXC Club — Curated Telecom Introductions for IXC Clients',
      description:
        'IXC Club helps eligible softswitch clients grow: 3–5 profile-matched voice and SMS interconnection introductions per week via Teams — business development included.',
    },
    ru: {
      title: 'IXC Club — отобранные знакомства в телекоме для клиентов IXC',
      description:
        'IXC Club помогает клиентам софтсвитча расти: 3–5 подобранных voice и SMS интерконнектов в неделю через Teams — business development включён.',
    },
    uk: {
      title: 'IXC Club — відібрані знайомства в телекомі для клієнтів IXC',
      description:
        'IXC Club допомагає клієнтам софтсвітча рости: 3–5 підібраних voice і SMS інтерконектів на тиждень через Teams — business development включено.',
    },
    zh: {
      title: 'IXC Club — 为 IXC 客户精选电信引荐',
      description:
        'IXC Club 帮助符合条件的软交换客户增长：每周通过 Teams 获得 3–5 个按画像匹配的语音与短信互联引荐——商务拓展包含在内。',
    },
  } satisfies SeoPagePair,
  privacyPolicy: {
    en: {
      title: 'Privacy Policy | IXC Softswitch',
      description:
        'Privacy Policy for ixc.ua — how IXC Software Distribution Corp. (Miami, FL) collects, uses, and protects your personal information.',
    },
    ru: {
      title: 'Политика конфиденциальности | IXC Softswitch',
      description:
        'Политика конфиденциальности ixc.ua — как IXC Software Distribution Corp. (Майами, США) обрабатывает персональные данные.',
    },
    uk: {
      title: 'Політика конфіденційності | IXC Softswitch',
      description:
        'Політика конфіденційності ixc.ua — як IXC Software Distribution Corp. (Маямі, США) обробляє персональні дані.',
    },
    zh: {
      title: '隐私政策 | IXC Softswitch',
      description:
        'ixc.ua 隐私政策——IXC Software Distribution Corp.（美国佛罗里达州迈阿密）如何收集、使用和保护您的个人信息。',
    },
  } satisfies SeoPagePair,
  platformBrochure: {
    en: {
      title: 'IXC Softswitch — Platform walkthrough (screens & reports) | IXC',
      description:
        'Tour the IXC UI: main dashboard, traffic and CDR reports, access lists, balance and profit, auto rate import, live balance, routing, monitoring, autotester, and 24/7 NOC — with product screenshots.'
    },
    ru: {
      title: 'IXC Softswitch — обзор платформы (скриншоты и отчёты) | IXC',
      description:
        'Интерфейс IXC: дашборд, traffic flow и CDR, access list, баланс и profit, авто-тарифы, live balance, маршрутизация, мониторинг, автотестер и NOC 24/7 — со скриншотами.'
    },
    uk: {
      title: 'IXC Softswitch — огляд платформи (скріни та звіти) | IXC',
      description:
        'Інтерфейс IXC: дашборд, traffic flow і CDR, access list, баланс і profit, авто-тарифи, live balance, маршрутизація, моніторинг, автотестер і NOC 24/7 — зі скріншотами.'
    },
    zh: {
      title: 'IXC Softswitch — 平台导览（界面与报表）| IXC',
      description:
        '浏览 IXC 界面：主仪表盘、话务与 CDR 报表、访问列表、余额与利润、自动费率导入、实时余额、路由、监控、自动测试器与 24/7 NOC——含产品截图。'
    }
  } satisfies SeoPagePair,
  blog: {
    en: {
      title: 'VoIP Blog — Softswitch Guides, Routing & Billing',
      description:
        'Neutral guides on VoIP softswitch technology: Class 4/5 routing, LCR, billing, monitoring, anti-fraud, and FAS detection.'
    },
    ru: {
      title: 'VoIP-блог — гайды по софтсвитчу, маршрутизации и биллингу',
      description:
        'Нейтральные руководства по VoIP-софтсвитчу: маршрутизация класса 4/5, LCR, биллинг, мониторинг, антифрод и FAS.'
    },
    uk: {
      title: 'VoIP-блог — гайди з софтсвічем, маршрутизації та білінгу',
      description:
        'Нейтральні посібники з VoIP-софтсвічем: маршрутизація класу 4/5, LCR, білінг, моніторинг, антифрод і FAS.'
    },
    zh: {
      title: 'VoIP 博客 — 软交换指南、路由与计费',
      description:
        '中立的 VoIP 软交换技术指南：4/5 类路由、LCR、计费、监控、反欺诈与 FAS 检测。'
    }
  } satisfies SeoPagePair,
  blogTitleSuffix: {
    en: ' | VoIP Blog',
    ru: ' | VoIP-блог',
    uk: ' | VoIP-блог',
    zh: ' | VoIP 博客'
  } satisfies Record<Language, string>,
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
      },
      zh: {
        title: 'IXC VoIP 软交换 — 4/5 类路由、计费与扩展',
        description:
          '面向运营商的高容量 VoIP 软交换：每台服务器数千通道、LCR、预付/后付计费、SIP/H.323、JSON API、SIP 防火墙——申请演示。'
      }
    } satisfies SeoPagePair,
    'ixc-recording': {
      en: {
        title: 'IXC Recording — Call Archive, AI Analysis & FAS Detection',
        description:
          'Softswitch captures call media; Billing 7 organises the archive. Mark calls for AI traffic profiles, voice quality, coaching, and post-recorded FAS/voicemail fingerprints.'
      },
      ru: {
        title: 'IXC Recording — архив звонков, AI-анализ и детекция FAS',
        description:
          'Софтсвитч пишет медиа; Billing 7 упорядочивает архив. Отметьте вызовы для AI-профиля трафика, качества голоса, коучинга и post-recorded FAS/voicemail fingerprints.'
      },
      uk: {
        title: 'IXC Recording — архів дзвінків, AI-аналіз і детекція FAS',
        description:
          'Софтсвіч пише медіа; Billing 7 впорядковує архів. Позначте виклики для AI-профілю трафіку, якості голосу, коучингу та post-recorded FAS/voicemail fingerprints.'
      },
      zh: {
        title: 'IXC Recording — 通话归档、AI 分析与 FAS 检测',
        description:
          '软交换采集通话媒体；Billing 7 整理归档。标记呼叫以获得 AI 流量画像、语音质量、辅导以及录音后 FAS/语音信箱指纹。'
      }
    } satisfies SeoPagePair,
    'ai-automation': {
      en: {
        title: 'AI Automation for Voice & SMS Carriers — IXC ↔ DealoAgent',
        description:
          'Native-language AI for carrier ops: batch IXC softswitch updates, deep analytics, Teams/Telegram/Gmail dispatch — scale from 5–10 to 100+ accounts per manager.'
      },
      ru: {
        title: 'AI-автоматизация для голосовых и SMS-операторов — IXC ↔ DealoAgent',
        description:
          'AI на родном языке для операторов: пакетные изменения в IXC, глубокая аналитика, рассылка в Teams/Telegram/Gmail — от 5–10 до 100+ контрактов на менеджера.'
      },
      uk: {
        title: 'AI-автоматизація для голосових та SMS-операторів — IXC ↔ DealoAgent',
        description:
          'AI рідною мовою для операторів: пакетні зміни в IXC, глибока аналітика, розсилка в Teams/Telegram/Gmail — від 5–10 до 100+ контрактів на менеджера.'
      },
      zh: {
        title: '语音与 SMS 运营商 AI 自动化 — IXC ↔ DealoAgent',
        description:
          '面向运营商运营的母语 AI：批量更新 IXC 软交换、深度分析、Teams/Telegram/Gmail 分发——每名经理从 5–10 个账户扩展到 100+。'
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
      },
      zh: {
        title: '白/黑名单模块 — VoIP 路由访问列表 | IXC',
        description:
          '动态白名单/黑名单路由：按 CLI/CLD 过滤、自动更新、过期规则——减少软交换上的欺诈与 SIM 封禁问题。'
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
      },
      zh: {
        title: '话务监控与告警 — ASR、PDD、利润 | IXC',
        description:
          '实时 ASR、ACD、PDD 与利润监控，含阈值、邮件/Telegram 告警、自动阻断与工单邮件，面向 VoIP 运营商。'
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
      },
      zh: {
        title: 'IXC Autotester — 路由质量与 FAS 检测',
        description:
          '自动测试呼叫、MP3 录音、计划任务、SIP/H.323——提升路由质量并在批发语音路由上发现 FAS。'
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
      },
      zh: {
        title: 'SMS 批发平台 — 路由与计费 | IXC',
        description:
          '群发短信，含路由、计费与 SMPP 3.4——在 IXC 软交换基础设施上从低量扩展到高吞吐。'
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
      },
      zh: {
        title: 'Google 表格与文档集成 — IXC 统计同步',
        description:
          '自动将 IXC 统计与目的地数据推送到 Google 表格和文档——与团队共享实时话务与路由视图。'
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
      },
      zh: {
        title: '产品技术规格 — IXC VoIP 平台',
        description:
          'SIP/H.323、通道容量、智能路由、编解码、SMPP、API、计费、实时报表、安全、客户门户、自动测试器与 24/7 NOC（EN、RU）。'
      }
    } satisfies SeoPagePair
  },
  newsTitleSuffix: {
    en: ' | IXC Softswitch',
    ru: ' | IXC Softswitch',
    uk: ' | IXC Softswitch',
    zh: ' | IXC Softswitch'
  } satisfies Record<Language, string>,
  newsFallbackDescription: {
    en: 'Product news, release notes, and updates from the IXC VoIP softswitch team.',
    ru: 'Новости продукта, релизы и обновления от команды VoIP-софтсвитча IXC.',
    uk: 'Новини продукту, релізи та оновлення від команди VoIP-софтсвіча IXC.',
    zh: 'IXC VoIP 软交换团队的产品新闻、版本说明与更新。'
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
    },
    zh: {
      title: '未找到页面 | IXC Softswitch',
      description: '找不到您要查找的页面。了解 IXC 面向批发与零售 VoIP 的软交换方案。'
    }
  } satisfies SeoPagePair
} as const;

export type ProductSlug = keyof typeof seoRoutes.products;
