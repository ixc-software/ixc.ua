/* Listing fields only. Article bodies stay in the page chunks.
   Written by npm run generate:listing-cards (dev, build, and GitHub Actions).
*/
export type NewsCard = {
  slug: string
  date: string
  link?: string
  image?: string
  local_image?: string
  en: { title: string }
  ru: { title: string }
  uk: { title: string }
  zh: { title: string }
}

export const newsCards: NewsCard[] = [
  {
    "slug": "ixc-october-2026-update",
    "date": "2026-10-31",
    "link": "https://ixc.ua/news/ixc-october-2026-update",
    "image": "https://ixc.ua/news/october-2026-og.jpg",
    "local_image": "/news/october-2026-latest-update.jpg",
    "en": {
      "title": "October 2026 report — Routing center, Autotester, CDR media quality (WebV7 v7.1.4 → v7.1.47)"
    },
    "ru": {
      "title": "Отчёт за октябрь 2026 — Routing center, Autotester, качество медиа в CDR (WebV7 v7.1.4 → v7.1.47)"
    },
    "uk": {
      "title": "Звіт за жовтень 2026 — Routing center, Autotester, якість медіа в CDR (WebV7 v7.1.4 → v7.1.47)"
    },
    "zh": {
      "title": "October 2026 report — Routing center, Autotester, CDR media quality (WebV7 v7.1.4 → v7.1.47)"
    }
  },
  {
    "slug": "ixc-september-2026-update",
    "date": "2026-09-30",
    "link": "https://ixc.ua/news/ixc-september-2026-update",
    "image": "https://ixc.ua/news/september-2026-og.jpg",
    "local_image": "/news/september-2026-latest-update.jpg",
    "en": {
      "title": "September 2026 report — G.711 / G.729 transcode, Ubuntu 26 recording, IXC Club (100 voice + 114 SMS)"
    },
    "ru": {
      "title": "Отчёт за сентябрь 2026 — транскод G.711 / G.729, recording на Ubuntu 26, IXC Club (100 voice + 114 SMS)"
    },
    "uk": {
      "title": "Звіт за вересень 2026 — транскод G.711 / G.729, recording на Ubuntu 26, IXC Club (100 voice + 114 SMS)"
    },
    "zh": {
      "title": "September 2026 report — G.711 / G.729 transcode, Ubuntu 26 recording, IXC Club (100 voice + 114 SMS)"
    }
  },
  {
    "slug": "ixc-august-2026-update",
    "date": "2026-08-31",
    "link": "https://ixc.ua/news/ixc-august-2026-update",
    "image": "https://ixc.ua/news/august-2026-og.jpg",
    "local_image": "/news/august-2026-latest-update.webp",
    "en": {
      "title": "August 2026 report — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)"
    },
    "ru": {
      "title": "Отчёт за август 2026 — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)"
    },
    "uk": {
      "title": "Звіт за серпень 2026 — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)"
    },
    "zh": {
      "title": "August 2026 report — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)"
    }
  },
  {
    "slug": "ixc-recording",
    "date": "2026-08-07",
    "link": "https://ixc.ua/news/ixc-recording",
    "image": "https://ixc.ua/news/ixc-recording-og.jpg",
    "local_image": "/news/ixc-recording-latest-update.webp",
    "en": {
      "title": "IXC Recording — the foundation for AI call analysis, FAS & voicemail detection"
    },
    "ru": {
      "title": "IXC Recording — основа для AI-анализа звонков, детекции FAS и голосовой почты"
    },
    "uk": {
      "title": "IXC Recording — основа для AI-аналізу дзвінків, детекції FAS і голосової пошти"
    },
    "zh": {
      "title": "IXC Recording — AI 通话分析、FAS 与语音信箱检测的基础"
    }
  },
  {
    "slug": "ixc-july-2026-update",
    "date": "2026-07-31",
    "link": "https://ixc.ua/news/ixc-july-2026-update",
    "image": "https://ixc.ua/news/july-2026-og.jpg",
    "local_image": "/news/july-2026-latest-update.webp",
    "en": {
      "title": "July 2026 report — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, tariff imports)"
    },
    "ru": {
      "title": "Отчёт за июль 2026 — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, импорт тарифов)"
    },
    "uk": {
      "title": "Звіт за липень 2026 — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, імпорт тарифів)"
    },
    "zh": {
      "title": "2026 年 7 月报告 — WebV7 v7.0.67 → v7.0.84（SIP PCAP、A-number 上限、费率导入）"
    }
  },
  {
    "slug": "ixc-june-2026-update",
    "date": "2026-06-18",
    "link": "https://ixc.ua/news/ixc-june-2026-update",
    "image": "https://ixc.ua/news/june-2026-latest-update.png",
    "local_image": "/news/june-2026-latest-update.webp",
    "en": {
      "title": "June 2026 — new clients, DealoAgent channels live, WebV7 v7.0.66"
    },
    "ru": {
      "title": "Июнь 2026 — новые клиенты, каналы DealoAgent, WebV7 v7.0.66"
    },
    "uk": {
      "title": "Червень 2026 — нові клієнти, канали DealoAgent, WebV7 v7.0.66"
    },
    "zh": {
      "title": "2026 年 6 月 — 新客户、DealoAgent 渠道上线、WebV7 v7.0.66"
    }
  },
  {
    "slug": "ixc-ai-automation",
    "date": "2026-06-16",
    "link": "https://ixc.ua/news/ixc-ai-automation",
    "image": "https://ixc.ua/news/ai-automation-latest-update.png",
    "local_image": "/news/ai-automation-latest-update.webp",
    "en": {
      "title": "AI Automation for Voice & SMS Carriers — IXC ↔ DealoAgent release"
    },
    "ru": {
      "title": "AI-автоматизация для голосовых и SMS-операторов — релиз IXC ↔ DealoAgent"
    },
    "uk": {
      "title": "AI-автоматизація для голосових та SMS-операторів — реліз IXC ↔ DealoAgent"
    },
    "zh": {
      "title": "面向语音与 SMS 运营商的 AI 自动化 — IXC ↔ DealoAgent 发布"
    }
  },
  {
    "slug": "ixc-webv7",
    "date": "2026-06-01",
    "link": "https://ixc.ua/news/ixc-webv7",
    "image": "https://ixc.ua/news/webv7-latest-update.png",
    "local_image": "/news/webv7-latest-update.webp",
    "en": {
      "title": "IXC Billing WebV7 — what’s new for operators (vs legacy v6 UI)"
    },
    "ru": {
      "title": "IXC Billing WebV7 — что нового для операторов (vs интерфейс v6)"
    },
    "uk": {
      "title": "IXC Billing WebV7 — що нового для операторів (vs інтерфейс v6)"
    },
    "zh": {
      "title": "IXC Billing WebV7 — 运营商新功能（对比旧版 v6 界面）"
    }
  },
  {
    "slug": "ixc-softswitch-v6",
    "date": "2026-05-18",
    "link": "https://ixc.ua/news/ixc-softswitch-v6",
    "image": "https://ixc.ua/news/news_25.png",
    "local_image": "/news/news_25.webp",
    "en": {
      "title": "IXC Softswitch V6 — performance, security, and cloud-ready operations"
    },
    "ru": {
      "title": "IXC Softswitch V6 — производительность, безопасность и облачные внедрения"
    },
    "uk": {
      "title": "IXC Softswitch V6 — продуктивність, безпека та хмарна готовність"
    },
    "zh": {
      "title": "IXC Softswitch V6 — 性能、安全与云就绪运营"
    }
  },
  {
    "slug": "daily-minutes",
    "date": "2026-03-12",
    "link": "https://interexc.com/daily-minutes",
    "image": "https://ixc.ua/news/news_3.jpg",
    "local_image": "/news/news_3.jpg",
    "en": {
      "title": "Daily minutes in RT and TD"
    },
    "ru": {
      "title": "Ежедневные минуты в RT и TD"
    },
    "uk": {
      "title": "Щоденні хвилини в RT і TD"
    },
    "zh": {
      "title": "RT 与 TD 中的每日分钟数"
    }
  },
  {
    "slug": "anum-bnum-routing",
    "date": "2025-11-17",
    "link": "https://interexc.com/anum-bnum-routing",
    "image": "https://ixc.ua/news/news_4.jpg",
    "local_image": "/news/news_4.webp",
    "en": {
      "title": "Anum/Bnum routing improvements"
    },
    "ru": {
      "title": "Улучшения маршрутизации Anum/Bnum"
    },
    "uk": {
      "title": "Покращення маршрутизації Anum/Bnum"
    },
    "zh": {
      "title": "Anum/Bnum 路由改进"
    }
  },
  {
    "slug": "ixc-softswitch-6-1-6",
    "date": "2025-08-30",
    "link": "https://interexc.com/ixc-softswitch-6-1-6",
    "image": "https://ixc.ua/news/news_5.jpg",
    "local_image": "/news/news_5.webp",
    "en": {
      "title": "IXC Softswitch New Release"
    },
    "ru": {
      "title": "Новая версия Softswitch IXC"
    },
    "uk": {
      "title": "Нова версія Softswitch IXC"
    },
    "zh": {
      "title": "IXC Softswitch 新版本发布"
    }
  },
  {
    "slug": "ixc-telegram-credit-add",
    "date": "2025-07-12",
    "link": "https://interexc.com/ixc-telegram-credit-add",
    "image": "https://ixc.ua/news/news_6.jpg",
    "local_image": "/news/news_6.jpg",
    "en": {
      "title": "Telegram bot new features"
    },
    "ru": {
      "title": "Новые возможности Telegram-бота"
    },
    "uk": {
      "title": "Нові функції телеграм-бота"
    },
    "zh": {
      "title": "Telegram 机器人新功能"
    }
  },
  {
    "slug": "ixc-softswitch-6.1.4",
    "date": "2025-05-12",
    "link": "https://interexc.com/ixc-softswitch-6.1.4",
    "image": "https://ixc.ua/news/news_7.jpg",
    "local_image": "/news/news_7.webp",
    "en": {
      "title": "IXC Softswitch New Release!"
    },
    "ru": {
      "title": "Новая версия IXC Softswitch!"
    },
    "uk": {
      "title": "Нова версія Softswitch IXC!"
    },
    "zh": {
      "title": "IXC Softswitch 新版本发布！"
    }
  },
  {
    "slug": "access-list-disconenct-codes",
    "date": "2024-10-20",
    "link": "https://interexc.com/access-list-disconenct-codes",
    "image": "https://ixc.ua/news/news_8.jpg",
    "local_image": "/news/news_8.jpg",
    "en": {
      "title": "Access List Enhancement"
    },
    "ru": {
      "title": "Улучшение списка доступа"
    },
    "uk": {
      "title": "Розширення списку доступу"
    },
    "zh": {
      "title": "Access List 增强"
    }
  },
  {
    "slug": "sip-loop-detection",
    "date": "2024-09-12",
    "link": "https://interexc.com/sip-loop-detection",
    "image": "https://ixc.ua/news/news_9.jpg",
    "local_image": "/news/news_9.jpg",
    "en": {
      "title": "SIP loop detection"
    },
    "ru": {
      "title": "Обнаружение SIP-петли"
    },
    "uk": {
      "title": "Виявлення петлі SIP"
    },
    "zh": {
      "title": "SIP 环路检测"
    }
  },
  {
    "slug": "last-price-change",
    "date": "2024-03-12",
    "link": "https://interexc.com/last-price-change",
    "image": "https://ixc.ua/news/news_10.jpg",
    "local_image": "/news/news_10.jpg",
    "en": {
      "title": "Last Price Change Feature"
    },
    "ru": {
      "title": "Функция последнего изменения цены"
    },
    "uk": {
      "title": "Функція останньої зміни ціни"
    },
    "zh": {
      "title": "最近价格变更功能"
    }
  },
  {
    "slug": "data-export-pdf-xls",
    "date": "2023-12-15",
    "link": "https://interexc.com/data-export-pdf-xls",
    "image": "https://ixc.ua/news/news_11.jpg",
    "local_image": "/news/news_11.jpg",
    "en": {
      "title": "Data export to xls/pdf"
    },
    "ru": {
      "title": "Экспорт данных в xls/pdf"
    },
    "uk": {
      "title": "Експорт даних у формат xls/pdf"
    },
    "zh": {
      "title": "数据导出为 xls/pdf"
    }
  },
  {
    "slug": "anumber-replace",
    "date": "2023-05-24",
    "link": "https://interexc.com/anumber-replace",
    "image": "https://ixc.ua/news/news_12.jpg",
    "local_image": "/news/news_12.webp",
    "en": {
      "title": "Caller number replacement"
    },
    "ru": {
      "title": "Замена номера звонящего"
    },
    "uk": {
      "title": "Заміна номера абонента"
    },
    "zh": {
      "title": "主叫号码替换"
    }
  },
  {
    "slug": "monitoring-tool-enhanced",
    "date": "2023-02-24",
    "link": "https://interexc.com/monitoring-tool-enhanced",
    "image": "https://ixc.ua/news/news_13.jpg",
    "local_image": "/news/news_13.jpg",
    "en": {
      "title": "Monitoring tool enhanced"
    },
    "ru": {
      "title": "Улучшен инструмент мониторинга"
    },
    "uk": {
      "title": "Покращено засіб моніторингу"
    },
    "zh": {
      "title": "监控工具增强"
    }
  },
  {
    "slug": "dynamic-graphs",
    "date": "2022-12-20",
    "link": "https://interexc.com/dynamic-graphs",
    "image": "https://ixc.ua/news/news_14.jpg",
    "local_image": "/news/news_14.jpg",
    "en": {
      "title": "Dynamic graphs"
    },
    "ru": {
      "title": "Динамические графики"
    },
    "uk": {
      "title": "Динамічні графіки"
    },
    "zh": {
      "title": "动态图表"
    }
  },
  {
    "slug": "email-parser",
    "date": "2022-06-29",
    "link": "https://interexc.com/email-parser",
    "image": "https://ixc.ua/news/news_15.jpg",
    "local_image": "/news/news_15.webp",
    "en": {
      "title": "Email parser is now available!"
    },
    "ru": {
      "title": "Парсер электронной почты теперь доступен!"
    },
    "uk": {
      "title": "Парсер електронної пошти тепер доступний!"
    },
    "zh": {
      "title": "邮件解析器现已上线！"
    }
  },
  {
    "slug": "routing-scenarios",
    "date": "2022-04-15",
    "link": "https://interexc.com/routing-scenarios",
    "image": "https://ixc.ua/news/news_16.jpg",
    "local_image": "/news/news_16.webp",
    "en": {
      "title": "Routing scenarios implemented!"
    },
    "ru": {
      "title": "Сценарии маршрутизации реализованы!"
    },
    "uk": {
      "title": "Сценарії маршрутизації реалізовано!"
    },
    "zh": {
      "title": "路由场景已实现！"
    }
  },
  {
    "slug": "pdd-measure",
    "date": "2022-01-12",
    "link": "https://interexc.com/pdd-measure",
    "image": "https://ixc.ua/news/news_17.jpg",
    "local_image": "/news/news_17.webp",
    "en": {
      "title": "PDD measure re-defined!"
    },
    "ru": {
      "title": "Измерение PDD пересмотрено!"
    },
    "uk": {
      "title": "Захід ПТД перевизначено!"
    },
    "zh": {
      "title": "PDD 测量重新定义！"
    }
  },
  {
    "slug": "ixc-telegram-bot",
    "date": "2021-09-30",
    "link": "https://interexc.com/ixc-telegram-bot",
    "image": "https://ixc.ua/news/news_18.jpg",
    "local_image": "/news/news_18.webp",
    "en": {
      "title": "IXC Telegram bot"
    },
    "ru": {
      "title": "Telegram-бот IXC"
    },
    "uk": {
      "title": "IXC Telegram бот"
    },
    "zh": {
      "title": "IXC Telegram 机器人"
    }
  },
  {
    "slug": "safe-routing-gsm-termination",
    "date": "2021-04-23",
    "link": "https://interexc.com/safe-routing-gsm-termination",
    "image": "https://ixc.ua/news/news_19.jpg",
    "local_image": "/news/news_19.webp",
    "en": {
      "title": "Safe Routing with GSM termination!"
    },
    "ru": {
      "title": "Безопасная маршрутизация с GSM терминацией!"
    },
    "uk": {
      "title": "Безпечна маршрутизація з термінацією GSM!"
    },
    "zh": {
      "title": "GSM 落地的安全路由！"
    }
  },
  {
    "slug": "pcap-of-any-call",
    "date": "2021-02-15",
    "link": "https://interexc.com/pcap-of-any-call",
    "image": "https://ixc.ua/news/news_20.jpg",
    "local_image": "/news/news_20.webp",
    "en": {
      "title": "Get .pcap of any call!"
    },
    "ru": {
      "title": "Получите .pcap любого звонка!"
    },
    "uk": {
      "title": "Отримайте .pcap будь-якого дзвінка!"
    },
    "zh": {
      "title": "获取任意呼叫的 .pcap！"
    }
  },
  {
    "slug": "keep-your-system-clean",
    "date": "2020-08-13",
    "link": "https://interexc.com/keep-your-system-clean",
    "image": "https://ixc.ua/news/news_21.jpg",
    "local_image": "/news/news_21.webp",
    "en": {
      "title": "Keep your system clean"
    },
    "ru": {
      "title": "Держите вашу систему в чистоте"
    },
    "uk": {
      "title": "Тримайте свою систему в чистоті"
    },
    "zh": {
      "title": "保持系统整洁"
    }
  },
  {
    "slug": "media-ip-added-to-cdr",
    "date": "2020-06-12",
    "link": "https://interexc.com/media-ip-added-to-cdr",
    "image": "https://ixc.ua/news/news_22.jpg",
    "local_image": "/news/news_22.webp",
    "en": {
      "title": "Media IP address added to CDR info!"
    },
    "ru": {
      "title": "IP-адрес носителя добавлен в информацию о CDR!"
    },
    "uk": {
      "title": "IP-адресу носія додано до інформації CDR!"
    },
    "zh": {
      "title": "Media IP 地址已加入 CDR 信息！"
    }
  },
  {
    "slug": "company-logo-in-rn",
    "date": "2020-05-20",
    "link": "https://interexc.com/company-logo-in-rn",
    "image": "https://ixc.ua/news/news_23.jpg",
    "local_image": "/news/news_23.webp",
    "en": {
      "title": "Your company logo in rate notifications!"
    },
    "ru": {
      "title": "Логотип вашей компании в уведомлениях о тарифах!"
    },
    "uk": {
      "title": "Логотип вашої компанії в тарифних повідомленнях!"
    },
    "zh": {
      "title": "费率通知中展示您的公司标志！"
    }
  },
  {
    "slug": "sip-trace-from-web-1",
    "date": "2020-01-13",
    "link": "https://interexc.com/sip-trace-from-web-1",
    "image": "https://ixc.ua/news/news_24.jpg",
    "local_image": "/news/news_24.webp",
    "en": {
      "title": "How to get SIP trace from IXC Softswtich"
    },
    "ru": {
      "title": "Как получить трассировку SIP от IXC Softswtich"
    },
    "uk": {
      "title": "Як отримати трасування SIP від ​​IXC Softswtich"
    },
    "zh": {
      "title": "如何从 IXC Softswtich 获取 SIP 跟踪"
    }
  },
  {
    "slug": "meet-ixc-at-itw-2019",
    "date": "2019-06-10",
    "link": "https://interexc.com/meet-ixc-at-itw-2019",
    "image": "https://ixc.ua/news/news_0.jpg",
    "local_image": "/news/news_0.webp",
    "en": {
      "title": "Meet IXC at ITW 2019"
    },
    "ru": {
      "title": "Встречайте IXC на ITW 2019"
    },
    "uk": {
      "title": "Зустрічайте IXC на ITW 2019"
    },
    "zh": {
      "title": "ITW 2019 与 IXC 会面"
    }
  },
  {
    "slug": "ixc-softswitch-5-7-1-released",
    "date": "2019-05-15",
    "link": "https://interexc.com/ixc-softswitch-5-7-1-released",
    "image": "https://ixc.ua/news/news_1.jpg",
    "local_image": "/news/news_1.webp",
    "en": {
      "title": "IXC Softswitch 5.7.1 released!"
    },
    "ru": {
      "title": "Выпущена версия IXC Softswitch 5.7.1!"
    },
    "uk": {
      "title": "IXC Softswitch 5.7.1 випущено!"
    },
    "zh": {
      "title": "IXC Softswitch 5.7.1 发布！"
    }
  },
  {
    "slug": "white-black-list-module-imporved",
    "date": "2019-04-12",
    "link": "https://interexc.com/white-black-list-module-imporved",
    "image": "https://ixc.ua/news/news_2.jpg",
    "local_image": "/news/news_2.webp",
    "en": {
      "title": "White/black list module improved!"
    },
    "ru": {
      "title": "Улучшен модуль белого/черного списка!"
    },
    "uk": {
      "title": "Покращено модуль білого/чорного списку!"
    },
    "zh": {
      "title": "白/黑名单模块已改进！"
    }
  }
]
