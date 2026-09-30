/* Listing fields only. Article bodies stay in the page chunks.
   Written by npm run generate:listing-cards (dev, build, and GitHub Actions).
*/
import type { Language } from '../i18n/translations'

export type BlogCardLocale = { title: string; description: string; excerpt: string }

export type BlogCard = {
  slug: string
  path?: string
  date: string
  updated?: string
  author: string
  category: string
  tags: string[]
  image: string
  localImage: string
  imageObjectFit?: 'cover' | 'contain'
  en: BlogCardLocale
  ru: BlogCardLocale
  uk: BlogCardLocale
  zh: BlogCardLocale
}

export const blogCards: BlogCard[] = [
  {
    "slug": "wholesale-sms-platform",
    "date": "2026-09-17",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "wholesale sms",
      "smpp",
      "a2p",
      "sms billing",
      "sms fraud",
      "casino sms",
      "ai",
      "sms aggregator"
    ],
    "image": "https://ixc.ua/blog/wholesale-sms-platform-og.jpg",
    "localImage": "/blog/wholesale-sms-platform.webp",
    "updated": "2026-09-17",
    "imageObjectFit": "contain",
    "en": {
      "title": "Wholesale SMS Platform: SMPP, A2P Routing, Billing & AI Content Control",
      "description": "Wholesale SMS for aggregators: SMPP 3.4, A2P routing, billing, plus AI analysis or real-time reject of casino/scam SMS before carriers drop your routes.",
      "excerpt": "SMPP, A2P routing, and billing — plus AI analysis and realtime detect-and-reject so casino and scam SMS never reach the terminator."
    },
    "ru": {
      "title": "Оптовая SMS-платформа: SMPP, A2P, биллинг и AI-контроль контента",
      "description": "Wholesale SMS для агрегаторов: SMPP 3.4, A2P-маршрутизация, биллинг и AI-анализ или realtime reject casino/scam SMS до снятия с маршрутизации.",
      "excerpt": "SMPP, A2P-маршрутизация и биллинг — плюс AI-анализ и realtime detect-and-reject, чтобы casino и scam не доходили до терминатора."
    },
    "uk": {
      "title": "Оптова SMS-платформа: SMPP, A2P, білінг і AI-контроль контенту",
      "description": "Wholesale SMS для агрегаторів: SMPP 3.4, A2P-маршрутизація, білінг і AI-аналіз або realtime reject casino/scam SMS до зняття з маршрутизації.",
      "excerpt": "SMPP, A2P-маршрутизація та білінг — плюс AI-аналіз і realtime detect-and-reject, щоб casino і scam не доходили до термінатора."
    },
    "zh": {
      "title": "批发短信平台：SMPP、A2P 路由、计费与 AI 内容控制",
      "description": "面向聚合商的批发短信：SMPP 3.4、A2P 路由、计费，以及在运营商下线路之前对赌场/诈骗短信的 AI 分析或实时拒绝。",
      "excerpt": "SMPP、A2P 路由与计费——外加 AI 分析与实时检测拒绝，让赌场与诈骗短信到不了落地运营商。"
    }
  },
  {
    "slug": "ixc-recording",
    "date": "2026-08-07",
    "author": "Oleksii Vinogradov",
    "category": "Product",
    "tags": [
      "ixc recording",
      "voice recordings",
      "voip",
      "softswitch",
      "ixc billing 7",
      "pcap",
      "cdr"
    ],
    "image": "https://ixc.ua/blog/ixc-recording.png",
    "localImage": "/blog/ixc-recording.webp",
    "updated": "2026-08-07",
    "imageObjectFit": "contain",
    "en": {
      "title": "IXC Recording on Softswitch & Billing 7 — the foundation for AI call analysis",
      "description": "IXC Recording: softswitch voice capture plus Billing 7 archive — the first step to IXC call analysis, FAS and voicemail detection.",
      "excerpt": "Softswitch captures the media; Billing 7 organises the archive — foundation for mark → analyse → automatic IXC reports."
    },
    "ru": {
      "title": "IXC Recording на Softswitch и в Billing 7 — фундамент AI-анализа звонков",
      "description": "IXC Recording: захват на софтсвитче плюс архив Billing 7 — первый шаг к анализу звонков IXC, FAS и голосовой почте.",
      "excerpt": "Софтсвитч пишет медиа; Billing 7 упорядочивает архив — основа пайплайна отметить → анализ → автоматический отчёт IXC."
    },
    "uk": {
      "title": "IXC Recording на Softswitch і в Billing 7 — фундамент AI-аналізу дзвінків",
      "description": "IXC Recording: захоплення на софтсвічі плюс архів Billing 7 — перший крок до аналізу дзвінків IXC, FAS і голосової пошти.",
      "excerpt": "Софтсвіч пише медіа; Billing 7 впорядковує архів — основа пайплайну позначити → аналіз → автоматичний звіт IXC."
    },
    "zh": {
      "title": "IXC Recording 在 Softswitch 与 Billing 7 上——AI 呼叫分析的基础",
      "description": "IXC Recording：软交换语音采集加上 Billing 7 归档——通向 IXC 呼叫分析、FAS 与语音信箱检测的第一步。",
      "excerpt": "软交换采集媒体；Billing 7 整理归档——标记 → 分析 → 自动 IXC 报告流水线的基础。"
    }
  },
  {
    "slug": "voip-call-analysis-ai",
    "date": "2026-08-07",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "call analysis",
      "ixc recording",
      "traffic profile",
      "fas detection",
      "voicemail detection",
      "ai",
      "call centre",
      "softswitch"
    ],
    "image": "https://ixc.ua/blog/voip-call-analysis-ai.png",
    "localImage": "/blog/voip-call-analysis-ai.webp",
    "updated": "2026-08-07",
    "imageObjectFit": "contain",
    "en": {
      "title": "IXC call analysis — mark recorded calls, get the report back automatically",
      "description": "Post-recorded IXC call analysis: traffic-profile reports (scam, gambling, casino), voice quality, coaching, FAS/voicemail marks with speech fingerprints, and on-demand detections.",
      "excerpt": "Mark recorded calls in IXC → automatic reports: traffic profile, voice quality, coaching, post-recorded FAS/voicemail fingerprints, and custom on-demand detections."
    },
    "ru": {
      "title": "Анализ звонков IXC — отметьте записанные вызовы, получите отчёт автоматически",
      "description": "Post-recorded анализ звонков IXC: отчёты профиля трафика (scam, gambling, casino), качество голоса, коучинг, метки FAS/voicemail с speech fingerprints и on-demand детекции.",
      "excerpt": "Отметьте записанные вызовы в IXC → автоматические отчёты: профиль трафика, качество голоса, коучинг, post-recorded FAS/voicemail fingerprints и кастомные детекции."
    },
    "uk": {
      "title": "Аналіз дзвінків IXC — позначте записані виклики, отримайте звіт автоматично",
      "description": "Post-recorded аналіз дзвінків IXC: звіти профілю трафіку (scam, gambling, casino), якість голосу, коучинг, мітки FAS/voicemail із speech fingerprints і on-demand детекції.",
      "excerpt": "Позначте записані виклики в IXC → автоматичні звіти: профіль трафіку, якість голосу, коучинг, post-recorded FAS/voicemail fingerprints і кастомні детекції."
    },
    "zh": {
      "title": "IXC 呼叫分析——标记已录音呼叫，自动拿回报告",
      "description": "事后录音的 IXC 呼叫分析：话务画像报告（scam、gambling、casino）、语音质量、辅导、带 speech fingerprint 的 FAS/语音信箱标记，以及按需检测。",
      "excerpt": "在 IXC 中标记已录音呼叫 → 自动报告：话务画像、语音质量、辅导、事后 FAS/语音信箱 fingerprint，以及自定义按需检测。"
    }
  },
  {
    "slug": "what-is-a-softswitch",
    "date": "2026-05-29",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "softswitch",
      "voip",
      "class 4 softswitch",
      "class 5 softswitch",
      "sip",
      "lcr"
    ],
    "image": "https://ixc.ua/blog/what-is-a-softswitch.png",
    "localImage": "/blog/what-is-a-softswitch.webp",
    "updated": "2026-05-29",
    "imageObjectFit": "contain",
    "en": {
      "title": "What Is a Softswitch? A Complete Guide for VoIP Carriers (2026)",
      "description": "A softswitch is the software that routes and bills VoIP calls. Learn how softswitches work, Class 4 vs Class 5, key features, and how to choose one in 2026.",
      "excerpt": "What a softswitch is, how it works, Class 4 vs Class 5, the features that matter, and how to choose the right VoIP softswitch in 2026."
    },
    "ru": {
      "title": "Что такое софтсвитч? Полное руководство для VoIP-операторов (2026)",
      "description": "Софтсвитч — это ПО, которое маршрутизирует и тарифицирует VoIP-вызовы. Как он работает, класс 4 и 5, ключевые функции и как выбрать софтсвитч в 2026.",
      "excerpt": "Что такое софтсвитч, как он работает, класс 4 и класс 5, важные функции и как выбрать VoIP-софтсвитч в 2026 году."
    },
    "uk": {
      "title": "Що таке софтсвіч? Повний посібник для VoIP-операторів (2026)",
      "description": "Софтсвіч — це ПЗ, яке маршрутизує й тарифікує VoIP-виклики. Як він працює, клас 4 і 5, ключові функції та як обрати софтсвіч у 2026 році.",
      "excerpt": "Що таке софтсвіч, як він працює, клас 4 і клас 5, важливі функції та як обрати VoIP-софтсвіч у 2026 році."
    },
    "zh": {
      "title": "什么是软交换？面向 VoIP 运营商的完整指南（2026）",
      "description": "软交换是路由并计费 VoIP 呼叫的软件。了解软交换如何工作、4 类与 5 类、关键功能，以及如何在 2026 年选择。",
      "excerpt": "什么是软交换、如何工作、4 类与 5 类、真正重要的功能，以及如何在 2026 年选择合适的 VoIP 软交换。"
    }
  },
  {
    "slug": "softswitch-ai-automation",
    "date": "2026-07-06",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "softswitch",
      "voip softswitch",
      "softswitch software",
      "ai automation",
      "dealoagent",
      "wholesale voip",
      "carrier voip"
    ],
    "image": "https://ixc.ua/blog/softswitch-ai-automation.png",
    "localImage": "/blog/softswitch-ai-automation.webp",
    "imageObjectFit": "contain",
    "en": {
      "title": "VoIP Softswitch AI: How to Use AI Automation on Your Carrier Switch (2026)",
      "description": "How to use AI on a VoIP softswitch: natural-language batch updates, WhatsApp/Telegram/Teams integration, scheduled traffic reports, and IXC + DealoAgent workflows.",
      "excerpt": "Practical guide to AI on a VoIP softswitch — commands, messenger integration, scheduled tops/targets from the REST API, and how carriers scale to 100+ accounts per manager."
    },
    "ru": {
      "title": "AI на софтсвитче VoIP: как использовать автоматизацию на carrier switch (2026)",
      "description": "Как использовать AI на VoIP-софтсвитче: пакетные команды, WhatsApp/Telegram/Teams, расписание отчётов по трафику и workflow IXC + DealoAgent.",
      "excerpt": "Практическое руководство по AI на софтсвитче — команды, мессенджеры, tops/targets из REST API и масштаб до 100+ контрактов на менеджера."
    },
    "uk": {
      "title": "AI на софтсвічі VoIP: як використовувати автоматизацію на carrier switch (2026)",
      "description": "Як використовувати AI на VoIP-софтсвічі: пакетні команди, WhatsApp/Telegram/Teams, розклад звітів по трафіку та workflow IXC + DealoAgent.",
      "excerpt": "Практичний посібник з AI на софтсвічі — команди, месенджери, tops/targets з REST API і масштаб до 100+ контрактів на менеджера."
    },
    "zh": {
      "title": "VoIP 软交换 AI：如何在运营商交换机上使用 AI 自动化（2026）",
      "description": "如何在 VoIP 软交换上使用 AI：自然语言批量更新、WhatsApp/Telegram/Teams 集成、定时话务报告，以及 IXC + DealoAgent 工作流。",
      "excerpt": "VoIP 软交换上的 AI 实践指南——命令、即时通讯集成、来自 REST API 的定时 tops/targets，以及运营商如何扩展到每位经理 100+ 账户。"
    }
  },
  {
    "slug": "class-4-vs-class-5-softswitch",
    "date": "2026-05-22",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "class 4 softswitch",
      "class 5 softswitch",
      "wholesale voip",
      "retail voip",
      "softswitch"
    ],
    "image": "https://ixc.ua/blog/class-4-vs-class-5-softswitch.png",
    "localImage": "/blog/class-4-vs-class-5-softswitch.webp",
    "imageObjectFit": "contain",
    "en": {
      "title": "Class 4 vs Class 5 Softswitch: What’s the Difference?",
      "description": "Class 4 softswitch routes wholesale carrier traffic; Class 5 serves retail subscribers. Compare features, use cases, and when operators need both.",
      "excerpt": "Wholesale transit vs retail subscriber services — how Class 4 and Class 5 softswitches differ and when operators need both."
    },
    "ru": {
      "title": "Софтсвитч класса 4 и 5: в чём разница?",
      "description": "Софтсвитч класса 4 маршрутизирует оптовый трафик; класса 5 — розницу. Сравнение функций и сценариев, когда нужны оба.",
      "excerpt": "Оптовый транзит и розничные абонентские услуги — чем отличаются софтсвитчи класса 4 и 5."
    },
    "uk": {
      "title": "Софтсвіч класу 4 і 5: у чому різниця?",
      "description": "Софтсвіч класу 4 маршрутизує оптовий трафік; класу 5 — роздріб. Порівняння функцій і сценаріїв, коли потрібні обидва.",
      "excerpt": "Оптовий транзит і роздрібні абонентські послуги — чим відрізняються софтсвічі класу 4 і 5."
    },
    "zh": {
      "title": "4 类与 5 类软交换：有何区别？",
      "description": "4 类软交换路由批发运营商话务；5 类服务零售用户。对比功能、场景，以及何时两者都需要。",
      "excerpt": "批发过境与零售用户业务——4 类与 5 类软交换有何不同，以及运营商何时两者都需要。"
    }
  },
  {
    "slug": "lcr-routing-voip",
    "date": "2026-05-15",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "lcr",
      "voip routing",
      "least cost routing",
      "softswitch",
      "wholesale voip"
    ],
    "image": "https://ixc.ua/blog/lcr-routing-voip.png",
    "localImage": "/blog/lcr-routing-voip.webp",
    "imageObjectFit": "contain",
    "en": {
      "title": "LCR Routing Explained: How VoIP Carriers Maximize Margin",
      "description": "Least Cost Routing (LCR) on a VoIP softswitch: how it works, quality guards, failover, and common mistakes that hurt wholesale margin.",
      "excerpt": "How LCR picks termination routes on a softswitch, what data you need, and how to protect margin without sacrificing ASR."
    },
    "ru": {
      "title": "Маршрутизация LCR: как VoIP-операторы максимизируют маржу",
      "description": "LCR на софтсвитче: как работает, защита по качеству, failover и типичные ошибки, снижающие маржу опта.",
      "excerpt": "Как LCR выбирает маршруты терминации, какие данные нужны и как сохранить маржу без падения ASR."
    },
    "uk": {
      "title": "Маршрутизація LCR: як VoIP-оператори максимізують маржу",
      "description": "LCR на софтсвічі: як працює, захист за якістю, failover і типові помилки, що знижують маржу опту.",
      "excerpt": "Як LCR обирає маршрути термінації, які дані потрібні та як зберегти маржу без падіння ASR."
    },
    "zh": {
      "title": "LCR 路由解析：VoIP 运营商如何最大化利润",
      "description": "VoIP 软交换上的最低成本路由（LCR）：工作原理、质量护栏、故障转移，以及损害批发利润的常见错误。",
      "excerpt": "软交换如何用 LCR 选择落地路由、需要哪些数据，以及如何在不牺牲 ASR 的前提下保护利润。"
    }
  },
  {
    "slug": "voip-billing-softswitch",
    "date": "2026-05-08",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "voip billing",
      "cdr",
      "prepaid voip",
      "softswitch",
      "rate deck"
    ],
    "image": "https://ixc.ua/blog/voip-billing-softswitch.png",
    "localImage": "/blog/voip-billing-softswitch.webp",
    "imageObjectFit": "contain",
    "en": {
      "title": "VoIP Billing on a Softswitch: Prepaid, Postpaid & Real-Time CDR",
      "description": "How VoIP softswitch billing works: CDR rating, prepaid vs postpaid, rate decks, real-time balances, and avoiding revenue leaks.",
      "excerpt": "CDR-based billing, prepaid and postpaid models, rate management, and the reports carriers need on a VoIP softswitch."
    },
    "ru": {
      "title": "Биллинг VoIP на софтсвитче: предоплата, постоплата и CDR в реальном времени",
      "description": "Как работает биллинг на софтсвитче: CDR, предоплата и постоплата, тарифы и балансы без потерь выручки.",
      "excerpt": "Биллинг по CDR, модели предоплаты и постоплаты, управление тарифами и отчёты в реальном времени."
    },
    "uk": {
      "title": "Білінг VoIP на софтсвічі: передоплата, післяплата та CDR у реальному часі",
      "description": "Як працює білінг на софтсвічі: CDR, передоплата й післяплата, тарифи та баланси без втрат виручки.",
      "excerpt": "Білінг за CDR, моделі передоплати й післяплати, керування тарифами та звіти в реальному часі."
    },
    "zh": {
      "title": "软交换上的 VoIP 计费：预付、后付与实时 CDR",
      "description": "VoIP 软交换计费如何工作：CDR 评级、预付与后付、费率表、实时余额，以及避免收入泄漏。",
      "excerpt": "基于 CDR 的计费、预付与后付模式、费率管理，以及运营商在 VoIP 软交换上需要的报表。"
    }
  },
  {
    "slug": "voip-fraud-prevention",
    "date": "2026-05-01",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "voip fraud",
      "sip security",
      "fas",
      "softswitch",
      "blacklist"
    ],
    "image": "https://ixc.ua/blog/voip-fraud-prevention.png",
    "localImage": "/blog/voip-fraud-prevention.webp",
    "imageObjectFit": "contain",
    "en": {
      "title": "VoIP Fraud Prevention on a Softswitch: SIP Security & FAS",
      "description": "Stop VoIP fraud on your softswitch: toll fraud, IRSF, FAS, SIP security, blacklists, and monitoring — a practical carrier playbook.",
      "excerpt": "Toll fraud, FAS, and SIP attacks — how to limit losses with routing controls, blacklists, monitoring, and route testing."
    },
    "ru": {
      "title": "Защита от VoIP-фрода на софтсвитче: SIP-безопасность и FAS",
      "description": "VoIP-фрод на софтсвитче: toll fraud, IRSF, FAS, SIP-безопасность, списки и мониторинг — практический playbook.",
      "excerpt": "Toll fraud, FAS и SIP-атаки — как снизить потери лимитами, списками, мониторингом и автотестом."
    },
    "uk": {
      "title": "Захист від VoIP-фроду на софтсвічі: SIP-безпека та FAS",
      "description": "VoIP-фрод на софтсвічі: toll fraud, IRSF, FAS, SIP-безпека, списки та моніторинг — практичний playbook.",
      "excerpt": "Toll fraud, FAS і SIP-атаки — як зменшити втрати лімітами, списками, моніторингом і автотестом."
    },
    "zh": {
      "title": "软交换上的 VoIP 欺诈防护：SIP 安全与 FAS",
      "description": "在软交换上阻止 VoIP 欺诈：长途欺诈、IRSF、FAS、SIP 安全、黑名单与监控——实用的运营商手册。",
      "excerpt": "长途欺诈、FAS 与 SIP 攻击——如何通过路由控制、黑名单、监控与路由测试限制损失。"
    }
  },
  {
    "slug": "telecom-industry-concepts",
    "date": "2026-05-29",
    "author": "Oleksii Vinogradov",
    "category": "Guides",
    "tags": [
      "telecom",
      "interexchange carrier",
      "softswitch",
      "voip",
      "lata",
      "pstn",
      "lcr"
    ],
    "image": "https://ixc.ua/blog/telecom-industry-concepts.png",
    "localImage": "/blog/telecom-industry-concepts.webp",
    "path": "/telecom-industry-concepts",
    "updated": "2026-05-29",
    "imageObjectFit": "contain",
    "en": {
      "title": "Telecom Industry Concepts: IXC, Softswitch, LCR & Billing",
      "description": "Core telecom concepts for VoIP carriers: interexchange carriers (IXC), LATAs, softswitch, Class 4/5, SIP/RTP, LCR routing, CDRs, and billing — explained.",
      "excerpt": "From interexchange carriers and LATAs to softswitches, LCR, and CDRs — the essential telecom industry concepts every VoIP operator should know."
    },
    "ru": {
      "title": "Концепции телеком-отрасли: IXC, софтсвитч, LCR и биллинг",
      "description": "Ключевые телеком-концепции для VoIP-операторов: межоператорские операторы (IXC), LATA, софтсвитч, класс 4/5, SIP/RTP, LCR, CDR и биллинг.",
      "excerpt": "От межоператорских операторов и LATA до софтсвитчей, LCR и CDR — основные концепции телеком-отрасли для каждого VoIP-оператора."
    },
    "uk": {
      "title": "Концепції телеком-галузі: IXC, софтсвіч, LCR та білінг",
      "description": "Ключові телеком-концепції для VoIP-операторів: міжоператорські оператори (IXC), LATA, софтсвіч, клас 4/5, SIP/RTP, LCR, CDR та білінг.",
      "excerpt": "Від міжоператорських операторів і LATA до софтсвічів, LCR і CDR — основні концепції телеком-галузі для кожного VoIP-оператора."
    },
    "zh": {
      "title": "电信行业概念：IXC、软交换、LCR 与计费",
      "description": "VoIP 运营商的核心电信概念：interexchange carrier（IXC）、LATA、软交换、4/5 类、SIP/RTP、LCR 路由、CDR 与计费——逐一讲解。",
      "excerpt": "从 interexchange carrier 与 LATA 到软交换、LCR 与 CDR——每位 VoIP 运营商都应掌握的核心电信行业概念。"
    }
  }
]

export function getPostPath(post: Pick<BlogCard, 'slug' | 'path'>): string {
  return post.path ?? `/blog/${post.slug}`
}

export function getLocalizedBlogCard(post: BlogCard, lang: Language) {
  const loc = post[lang] ?? post.en
  return {
    slug: post.slug,
    date: post.date,
    updated: post.updated,
    author: post.author,
    category: post.category,
    tags: post.tags,
    image: post.image,
    localImage: post.localImage,
    imageObjectFit: post.imageObjectFit,
    ...loc,
  }
}
