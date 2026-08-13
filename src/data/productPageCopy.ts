import type { Language } from '../i18n/translations';
import type { ProductSlug } from './productCatalog';

export interface ProductPageCopy {
  subtitle: string;
  description: string;
  features: string[];
  realTimeReporting?: string[];
  callRoutingDepending?: string[];
}

const en: Record<ProductSlug, ProductPageCopy> = {
  softswitch: {
    subtitle: 'Carrier-Grade VoIP Switching & Billing',
    description:
      'IXC Softswitch is a highly customized and scalable platform that serves to deliver VoIP wholesale services. This carrier-grade solution includes both switching and billing. IXC Softswitch is designed to serve the most sophisticated needs of carriers and ensures the most accurate real-time billing of postpaid and prepaid calls. It supports up to 4,000 VoIP channels per server with CPS up to 800 and unlimited horizontal scalability.',
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
      'Multi-level permission system for maximum security'
    ]
  },
  'ixc-recording': {
    subtitle: 'Call Media Archive · AI Analysis · Detect & Drop · SMS Post-call',
    description:
      'IXC Recording is the media layer on Softswitch and Billing 7: softswitch captures call audio; Billing 7 organises the archive by hour with search, playback, and one-click access from Originator and Terminator reports. Mark recorded calls in IXC to receive automatic AI analysis reports — traffic profiles, coaching, real voice quality, FAS/voicemail detect and drop with speech fingerprints, on-demand detections, and call-centre paths such as personalised SMS post-call campaigns from the transcript.',
    features: [
      'Softswitch media capture — voice recording written on the switch for enabled traffic',
      'Billing 7 archive — browse by hour, search, play, export, and manage retention',
      'One-click from call reports — open recordings from Originator and Terminator the same way as PCAP',
      'AI call analysis — mark calls in IXC, get automatic reports back in the platform',
      'High-level traffic profile — ML/transcription review for call-centre, scam, gambling, casino, and other verticals',
      'Know your traffic — sell more competitively with a readable profile of what you actually carry',
      'Real voice quality — clarity, cleared minutes, noise, one-way audio, and media issues from the recording itself',
      'Emotion & coaching insight — agent and customer scores for call-centre operations',
      'SMS post-call campaigns — 100% personalised messages from the call transcript that follow the conversation',
      'FAS/voicemail detect and drop — mark bad answers and act before minutes burn',
      'Speech fingerprints — store FAS/voicemail signatures for later ML matching on new batches',
      'On-demand detections — custom issue packs clients need (compliance phrases, supplier silence thresholds, regional fingerprint packs, and more)'
    ]
  },
  'ai-automation': {
    subtitle: 'IXC ↔ DealoAgent — Voice & SMS Carrier Operations at Scale',
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
      'Built for wholesale voice & SMS carriers — routing, billing, and partner ops in one AI layer'
    ]
  },
  'white-black-list': {
    subtitle: 'Advanced Access List Module',
    description:
      'SIM blocking is one of the main problems of GSM termination business. In many countries, mobile operators and providers block GSM Gateways — affecting overall business and revenues of terminating companies. To help solve this issue, IXC has developed the Access List module. IXC Access List enables routing specific numbers via selected carriers (terminator/originator). The numbers can be uploaded by the user and then auto-updated by the system based on desired criteria.',
    features: [
      'Whitelist Scenario — route specific allowed numbers via selected carriers; all others routed via remaining terminators in failover scheme',
      'Blacklist Scenario — restrict specific numbers from being routed via selected terminators; helpful against anti-fraud test calls',
      'Filter by Called Numbers (CLD) and/or Caller IDs (CLI/ANI)',
      'Auto-update of number lists by the system based on desired criteria',
      'Auto-deletion of numbers after preconfigured expiration date',
      'User-friendly interface with 24/7/365 support'
    ]
  },
  'monitoring-tool': {
    subtitle: 'Real-Time Traffic Analysis & Alerting',
    description:
      'IXC Monitoring Tool enables real-time traffic analysis, tracking key performance metrics such as ASR, ACD, PDD, and Profit. The system continuously checks these parameters and compares them to defined thresholds. When any value deviates from the desired range, the tool triggers an alert based on customizable rules.',
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
  'ixc-autotester': {
    subtitle: 'Automated Route Quality Testing',
    description:
      'IXC Autotester is a fully automated solution for testing multiple routes and destinations. It helps improve route quality by detecting poor-performance connections and providing detailed insights into both existing and new interconnections. The tool automatically records test calls in MP3 format, allowing recordings to be reviewed directly in the web interface or attached to email notifications.',
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
  'sms-platform': {
    subtitle: 'All-In-One SMS Wholesale Solution',
    description:
      'IXC has developed an all-in-one solution for SMS Wholesale companies. The competitively priced IXC SMS Platform is designed to make sending bulk SMS simple — from small companies running a few messages per month to high-volume customers sending thousands of messages per hour. The platform works on the basis of IXC V5 Softswitch but can also be used as a separate module, requiring only one server to run.',
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
  'google-api': {
    subtitle: 'Seamless Google Docs & Sheets Sync',
    description:
      'IXC Google API is an online integration with Google documents and spreadsheets. Many customers keep their top/target destinations in Google spreadsheet docs for sharing — IXC makes this procedure automatic. Desired statistics are automatically updated to specific Google docs so everyone can see them online.',
    features: [
      'Integrate any IXC modules with Google Documents and Spreadsheets',
      'Automatic updates of statistics to specified Google Docs',
      'Real-time sharing of top/target destinations with stakeholders',
      'Continuously expanding library of supported tables and data',
      'Custom integrations available upon request',
      'Zero manual effort — fully automated sync'
    ]
  },
  'technical-specifications': {
    subtitle: 'Technical specification overview',
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
      '24/7 NOC with multilingual support (EN, RU)'
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
      'Top/target destination report'
    ],
    callRoutingDepending: [
      'Percent allocation',
      'Minute cost (least cost routing)',
      'ASR/ACD/PDD-based routing',
      'Called party number',
      'Calling party group',
      'Quality routing',
      'Priority routing',
      'Easy managed routing trees'
    ]
  }
};

const ru: Record<ProductSlug, ProductPageCopy> = {
  softswitch: {
    subtitle: 'Операторская VoIP-коммутация и биллинг',
    description:
      'IXC Softswitch — настраиваемая масштабируемая платформа для оптового VoIP. Решение операторского класса включает коммутацию и биллинг. Платформа рассчитана на сложные задачи операторов и обеспечивает точный биллинг prepaid и postpaid в реальном времени. До 4 000 VoIP-каналов на сервер, CPS до 800 и неограниченное горизонтальное масштабирование.',
    features: [
      'Высокая ёмкость — до 4 000 VoIP-каналов на сервер, CPS до 800, неограниченное горизонтальное масштабирование',
      'Интеллектуальная маршрутизация — LCR, ASR/ACD, PDD, приоритет, процентная, A/B-номер, по времени и наследуемая',
      'Гибкость протоколов — SIP и H.323 с транскодингом и SMS (SMPP 3.4)',
      'Поддержка кодеков — основные VoIP и GSM кодеки с транскодингом в реальном времени',
      'Встроенный SIP Firewall — защита от SIP-спама и несанкционированного доступа',
      'Расширенный API — JSON API для внешних приложений, включая Telegram-бота',
      'Гибкие SIP-профили — настройка под любой сценарий SIP RFC',
      'Модуль ограничения CPS — отсев лишних SIP-попыток при перегрузке без влияния на реальный трафик',
      'Автоматический биллинг — счета формируются автоматически и отправляются клиентам в их часовом поясе',
      'Автоуправление тарифами — загрузка прайсов с IMAP и подтверждение повышений через Telegram-бота',
      'Современный веб-интерфейс — финансовые, операционные и управленческие отчёты, тёмная/светлая тема',
      'Клиентский портал — активные вызовы и отчёты в реальном времени',
      'История маршрутизации — callpath в CDR со всеми попытками и кодами разъединения',
      'IXC Recording — софтсвитч пишет медиа; Billing 7 ищет, воспроизводит и хранит записи по часам с переходом из отчётов Originator и Terminator',
      'AI-анализ звонков — отметьте записи в IXC; автоматические отчёты: профиль трафика, эмоции/агент/транскрипт, качество голоса и детекции по запросу',
      'Post-recorded FAS и голосовая почта — метки на сохранённом аудио и speech fingerprints для последующего ML',
      'Защита данных — автоматический бэкап и двухфакторная аутентификация',
      'Отчёт Traffic Flow — статистика по направлениям с цветовыми фильтрами и экспортом XLS/CSV',
      'Отчёт по балансу — трафик, счета, платежи, долги, кредитные лимиты и баланс в реальном времени',
      'Отчёт по прибыли — прибыль и объёмы в графиках, группировка по периоду и фильтрам',
      'Отчёт Variation — тренды трафика в абсолютных и относительных значениях с порогами',
      'Agreements & Commitments — целевые объёмы с ежедневным расчётом и напоминаниями',
      'Таблица маршрутизации — правила с наследованием, сценариями, массовыми операциями и CSV',
      'Current Routes — анализ маршрута: тарифы поставщиков, объёмы, качество и ожидаемые повышения',
      'Контроль баланса — алгоритм лимитов с Telegram-оповещениями для быстрого пополнения',
      'Многоуровневая система прав для максимальной безопасности'
    ]
  },
  'ixc-recording': {
    subtitle: 'Архив медиа · AI-анализ · Detect & Drop · SMS после звонка',
    description:
      'IXC Recording — медиа-слой на Softswitch и Billing 7: софтсвитч пишет аудио вызова; Billing 7 ведёт архив по часам с поиском, прослушиванием и переходом из отчётов Originator и Terminator. Отметьте записи в IXC и получите автоматические AI-отчёты — профили трафика, коучинг, реальное качество голоса, FAS/голосовая почта с speech fingerprints, детекции по запросу и персонализированные SMS-кампании по транскрипту.',
    features: [
      'Захват медиа на софтсвитче — запись для включённого трафика',
      'Архив Billing 7 — просмотр по часам, поиск, воспроизведение, экспорт и retention',
      'Переход из отчётов — открытие записей из Originator и Terminator как PCAP',
      'AI-анализ звонков — отметьте вызовы в IXC, получите отчёты в платформе',
      'Профиль трафика — ML/транскрипция: call-centre, scam, gambling, casino и другие вертикали',
      'Знайте свой трафик — продавайте конкурентнее с читаемым профилем того, что вы реально несёте',
      'Реальное качество голоса — ясность, минуты, шум, one-way audio и проблемы медиа из записи',
      'Эмоции и коучинг — оценки агента и клиента для call-центра',
      'SMS после звонка — персонализированные сообщения по транскрипту разговора',
      'FAS/голосовая почта detect and drop — метки плохих ответов до сжигания минут',
      'Speech fingerprints — подписи FAS/voicemail для ML на новых пакетах',
      'Детекции по запросу — пакеты под клиента (compliance, тишина поставщика, региональные fingerprints и др.)'
    ]
  },
  'ai-automation': {
    subtitle: 'IXC ↔ DealoAgent — операции голосовых и SMS-операторов в масштабе',
    description:
      'AI-автоматизация связывает IXC Softswitch с DealoAgent AI: менеджеры перестают жить в цикле копирования между почтой, мессенджерами и биллингом. Спросите на родном языке — добавить направления операторам 1–3, изменить маршрутизацию Cuba Mobile или закрыть commitment с оператором X по Excel на 30 строк — и изменения в IXC применяются пакетом без многошаговых кликов, с полным чтением, записью и удалением по всем возможностям софтсвитча. Периодические задачи: ежедневные пакетные обновления в IXC и рассылка top destinations, алертов по трафику и балансу во все каналы. Глубокая аналитика по сложным целям; Teams, Telegram, Gmail и WhatsApp получают ответ партнёру. Те же зарплаты; до 10× прибыли и 100+ контрактов на менеджера вместо 5–10.',
    features: [
      'Партнёрство IXC ↔ DealoAgent — AI читает и пишет софтсвитч, а не только мессенджеры',
      'Команды на родном языке — без жёсткого синтаксиса: маршруты, тарифы, commitments',
      'Пакетные обновления IXC — направления, тарифы и маршрутизация за один шаг',
      'Глубокая аналитика — commitments, target-листы и многострочный Excel разбираются автоматически',
      'Оркестрация каналов — Gmail, Telegram, WhatsApp, MS Teams и IXC в одном потоке',
      'Полное покрытие IXC — чтение, запись и удаление по всем возможностям платформы',
      'Отложенная запись — пакетные изменения в IXC по расписанию и рассылка результатов в каналы',
      'Регулярная рассылка — top destinations, алерты трафика и баланса партнёрам (например, каждое утро)',
      'Уведомления партнёрам — «Готово — цены отправлены» или подтверждение маршрутизации в Teams',
      'Масштаб на менеджера — с 5–10 контрактов вручную до 100+ при том же ФОТ',
      'Конкурентное преимущество — до 10× прибыли с той же численностью против copy-paste',
      'Для оптовых voice и SMS операторов — маршрутизация, биллинг и работа с партнёрами в одном AI-слое'
    ]
  },
  'white-black-list': {
    subtitle: 'Модуль Access List',
    description:
      'Блокировка SIM — одна из главных проблем GSM-терминации. Во многих странах операторы блокируют GSM-шлюзы, снижая выручку терминаторов. Модуль Access List позволяет маршрутизировать выбранные номера через заданных операторов (terminator/originator). Списки загружает пользователь, система обновляет их по заданным критериям.',
    features: [
      'Whitelist — разрешённые номера через выбранных операторов; остальные — через оставшихся терминаторов в failover',
      'Blacklist — запрет маршрутизации указанных номеров через выбранных терминаторов; полезно против антифрод-тестов',
      'Фильтр по Called Numbers (CLD) и/или Caller ID (CLI/ANI)',
      'Автообновление списков по заданным критериям',
      'Автоудаление номеров после срока истечения',
      'Удобный интерфейс и поддержка 24/7/365'
    ]
  },
  'monitoring-tool': {
    subtitle: 'Анализ трафика и оповещения в реальном времени',
    description:
      'IXC Monitoring Tool анализирует трафик в реальном времени: ASR, ACD, PDD и прибыль. Система непрерывно сравнивает метрики с порогами. При отклонении срабатывает алерт по настраиваемым правилам.',
    features: [
      'Мониторинг ASR, ACD, PDD и прибыли в реальном времени',
      'Настраиваемые правила алертов — для originator и terminator',
      'Автописьма по шаблонам при выходе статистики за пороги',
      'Автоблокировка слабых маршрутов',
      'Автоматические Trouble Ticket письма поставщикам',
      'Интеграция с Telegram-ботом для мгновенных уведомлений',
      'Все события пишутся в БД для последующего анализа',
      'Контроль прибыли с тревогой при низкой марже'
    ]
  },
  'ixc-autotester': {
    subtitle: 'Автоматическое тестирование качества маршрутов',
    description:
      'IXC Autotester автоматически тестирует маршруты и направления: находит слабые соединения и даёт детальную картину существующих и новых интерконнектов. Тестовые вызовы пишутся в MP3 — прослушивание в веб-интерфейсе или вложение в email.',
    features: [
      'Полностью автоматическое тестирование маршрутов и направлений — за несколько кликов',
      'MP3-запись тестовых вызовов — слушать в интерфейсе или скачать',
      'SIP и H.323 с любым кодеком (G.711, G.723, G.729)',
      'Расписание регулярных тестов — непрерывный контроль маршрутов',
      'Реальный RTP-поток для проверки качества аудио',
      'Email с записями и результатами тестов',
      'Автодетект плохого качества и FAS (False Answer Supervision)',
      'Тест существующих и новых интерконнектов'
    ]
  },
  'sms-platform': {
    subtitle: 'Комплексное решение для оптового SMS',
    description:
      'IXC SMS Platform — решение «всё в одном» для оптовых SMS-компаний. Конкурентная цена: от нескольких сообщений в месяц до тысяч в час. Работает на базе IXC V5 Softswitch или как отдельный модуль — достаточно одного сервера.',
    features: [
      'Маршрутизация, биллинг и коммутация SMS на одной платформе',
      'Масштаб от малого объёма до тысяч сообщений в час',
      'На базе IXC V5 Softswitch или отдельным модулем',
      'Протокол SMPP 3.4',
      'Достаточно одного сервера',
      'Варианты покупки и аренды',
      'Техподдержка 24/7/365'
    ]
  },
  'google-api': {
    subtitle: 'Синхронизация с Google Docs и Sheets',
    description:
      'IXC Google API — онлайн-интеграция с документами и таблицами Google. Многие клиенты держат top/target destinations в таблицах для шаринга — IXC делает это автоматически. Нужная статистика обновляется в выбранных документах, и её видят все онлайн.',
    features: [
      'Интеграция модулей IXC с Google Documents и Spreadsheets',
      'Автообновление статистики в указанных Google Docs',
      'Шаринг top/target destinations со стейкхолдерами в реальном времени',
      'Расширяемая библиотека поддерживаемых таблиц и данных',
      'Кастомные интеграции по запросу',
      'Без ручной работы — полностью автоматическая синхронизация'
    ]
  },
  'technical-specifications': {
    subtitle: 'Обзор технических характеристик',
    description:
      'Сводка возможностей платформы IXC: сетевые протоколы, масштаб, интеллектуальная маршрутизация, безопасность, медиа и кодеки, API, биллинг и отчётность, клиентский опыт и эксплуатация. Полный печатный документ — в PDF ниже.',
    features: [
      'Развёртывание в SIP и H.323 с транскодингом протоколов',
      'До 4 000 VoIP-каналов на сервер, CPS до 200',
      'Неограниченное масштабирование',
      'Продвинутая безопасность',
      'Повторная маршрутизация даже после SIP 180/183',
      'Кодеки G.711, G.723.1, G.726, G.729A/B/AB и GSM',
      'SMS SMPP 3.4',
      'Большинство функций платформы через JSON API',
      'Интеллектуальная маршрутизация (LCR, ACD/ASR, PDD, приоритет и др.)',
      'Распределение трафика в процентах',
      'Собственный firewall против SIP-спама',
      'Обработка RTP (signaling и full proxy)',
      'Несколько методов аутентификации',
      'Неограниченная таблица маршрутов',
      'Онлайн-биллинг и отчётность',
      'Шаблон активных вызовов с широким набором полей',
      'Автоматический бэкап данных',
      'Мощное управление пользователями',
      'Клиентский портал с активными вызовами',
      'Конвертация кодеков и совместимость с Cisco, Lucent, Quintum',
      'Интуитивный GUI с возможностями кастомизации',
      'Автотестер маршрутов с живыми записями для качества и FAS',
      'NOC 24/7 с поддержкой EN, RU'
    ],
    realTimeReporting: [
      'Детальный статистический отчёт',
      'Отчёт Traffic Flow',
      'Отчёт по прибыльности и графики',
      'Отчёты и графики ASR/ACD',
      'Отчёт по причинам разъединения',
      'Отчёт по платежам',
      'Отчёт о доходах и расходах',
      'Расходы по категориям',
      'Автогенерация инвойсов',
      'Statement и лимиты одновременных вызовов',
      'Отчёт конфигурации системы для терминатора',
      'Отчёт top/target destinations'
    ],
    callRoutingDepending: [
      'Процентное распределение',
      'Стоимость минуты (LCR)',
      'Маршрутизация по ASR/ACD/PDD',
      'Номер вызываемого',
      'Группа вызывающего',
      'Маршрутизация по качеству',
      'Приоритетная маршрутизация',
      'Удобные деревья маршрутизации'
    ]
  }
};

const uk: Record<ProductSlug, ProductPageCopy> = {
  softswitch: {
    subtitle: 'Операторська VoIP-комутація та білінг',
    description:
      'IXC Softswitch — налаштовувана масштабована платформа для оптового VoIP. Рішення операторського класу включає комутацію та білінг. Платформа розрахована на складні задачі операторів і забезпечує точний білінг prepaid і postpaid у реальному часі. До 4 000 VoIP-каналів на сервер, CPS до 800 і необмежене горизонтальне масштабування.',
    features: [
      'Висока ємність — до 4 000 VoIP-каналів на сервер, CPS до 800, необмежене горизонтальне масштабування',
      'Інтелектуальна маршрутизація — LCR, ASR/ACD, PDD, пріоритет, відсоткова, A/B-номер, за часом і успадкована',
      'Гнучкість протоколів — SIP і H.323 з транскодінгом і SMS (SMPP 3.4)',
      'Підтримка кодеків — основні VoIP і GSM кодеки з транскодінгом у реальному часі',
      'Вбудований SIP Firewall — захист від SIP-спаму та несанкціонованого доступу',
      'Розширений API — JSON API для зовнішніх застосунків, включно з Telegram-ботом',
      'Гнучкі SIP-профілі — налаштування під будь-який сценарій SIP RFC',
      'Модуль обмеження CPS — відсів зайвих SIP-спроб під час перевантаження без впливу на реальний трафік',
      'Автоматичний білінг — рахунки формуються автоматично й надсилаються клієнтам у їхньому часовому поясі',
      'Автокерування тарифами — завантаження прайсів з IMAP і підтвердження підвищень через Telegram-бота',
      'Сучасний вебінтерфейс — фінансові, операційні та управлінські звіти, темна/світла тема',
      'Клієнтський портал — активні виклики та звіти в реальному часі',
      'Історія маршрутизації — callpath у CDR з усіма спробами та кодами роз’єднання',
      'IXC Recording — софтсвіч пише медіа; Billing 7 шукає, відтворює й зберігає записи за годинами з переходом зі звітів Originator і Terminator',
      'AI-аналіз дзвінків — позначте записи в IXC; автоматичні звіти: профіль трафіку, емоції/агент/транскрипт, якість голосу та детекції на запит',
      'Post-recorded FAS і голосова пошта — мітки на збереженому аудіо та speech fingerprints для подальшого ML',
      'Захист даних — автоматичний бекап і двофакторна автентифікація',
      'Звіт Traffic Flow — статистика за напрямками з кольоровими фільтрами та експортом XLS/CSV',
      'Звіт по балансу — трафік, рахунки, платежі, борги, кредитні ліміти та баланс у реальному часі',
      'Звіт по прибутку — прибуток і обсяги в графіках, групування за періодом і фільтрами',
      'Звіт Variation — тренди трафіку в абсолютних і відносних значеннях із порогами',
      'Agreements & Commitments — цільові обсяги з щоденним розрахунком і нагадуваннями',
      'Таблиця маршрутизації — правила з успадкуванням, сценаріями, масовими операціями та CSV',
      'Current Routes — аналіз маршруту: тарифи постачальників, обсяги, якість і очікувані підвищення',
      'Контроль балансу — алгоритм лімітів із Telegram-сповіщеннями для швидкого поповнення',
      'Багаторівнева система прав для максимальної безпеки'
    ]
  },
  'ixc-recording': {
    subtitle: 'Архів медіа · AI-аналіз · Detect & Drop · SMS після дзвінка',
    description:
      'IXC Recording — медіа-шар на Softswitch і Billing 7: софтсвіч пише аудіо виклику; Billing 7 веде архів за годинами з пошуком, прослуховуванням і переходом зі звітів Originator і Terminator. Позначте записи в IXC і отримайте автоматичні AI-звіти — профілі трафіку, коучинг, реальна якість голосу, FAS/голосової пошти зі speech fingerprints, детекції на запит і персоналізовані SMS-кампанії за транскриптом.',
    features: [
      'Захоплення медіа на софтсвічі — запис для увімкненого трафіку',
      'Архів Billing 7 — перегляд за годинами, пошук, відтворення, експорт і retention',
      'Перехід зі звітів — відкриття записів з Originator і Terminator як PCAP',
      'AI-аналіз дзвінків — позначте виклики в IXC, отримайте звіти в платформі',
      'Профіль трафіку — ML/транскрипція: call-centre, scam, gambling, casino та інші вертикалі',
      'Знайте свій трафік — продавайте конкурентніше з читабельним профілем того, що ви реально несете',
      'Реальна якість голосу — ясність, хвилини, шум, one-way audio та проблеми медіа із запису',
      'Емоції та коучинг — оцінки агента і клієнта для call-центру',
      'SMS після дзвінка — персоналізовані повідомлення за транскриптом розмови',
      'FAS/голосової пошти detect and drop — мітки поганих відповідей до спалювання хвилин',
      'Speech fingerprints — підписи FAS/voicemail для ML на нових пакетах',
      'Детекції на запит — пакети під клієнта (compliance, тиша постачальника, регіональні fingerprints тощо)'
    ]
  },
  'ai-automation': {
    subtitle: 'IXC ↔ DealoAgent — операції голосових і SMS-операторів у масштабі',
    description:
      'AI-автоматизація з’єднує IXC Softswitch із DealoAgent AI: менеджери припиняють жити в циклі копіювання між поштою, месенджерами та білінгом. Запитайте рідною мовою — додати напрямки операторам 1–3, змінити маршрутизацію Cuba Mobile або закрити commitment з оператором X за Excel на 30 рядків — і зміни в IXC застосовуються пакетом без багатокрокових кліків, з повним читанням, записом і видаленням за всіма можливостями софтсвіча. Періодичні задачі: щоденні пакетні оновлення в IXC і розсилка top destinations, алертів трафіку та балансу в усі канали. Глибока аналітика за складними цілями; Teams, Telegram, Gmail і WhatsApp отримують відповідь партнеру. Ті самі зарплати; до 10× прибутку і 100+ контрактів на менеджера замість 5–10.',
    features: [
      'Партнерство IXC ↔ DealoAgent — AI читає й пише софтсвіч, а не лише месенджери',
      'Команди рідною мовою — без жорсткого синтаксису: маршрути, тарифи, commitments',
      'Пакетні оновлення IXC — напрямки, тарифи та маршрутизація за один крок',
      'Глибока аналітика — commitments, target-списки та багаторядковий Excel розбираються автоматично',
      'Оркестрація каналів — Gmail, Telegram, WhatsApp, MS Teams і IXC в одному потоці',
      'Повне покриття IXC — читання, запис і видалення за всіма можливостями платформи',
      'Відкладений запис — пакетні зміни в IXC за розкладом і розсилка результатів у канали',
      'Регулярна розсилка — top destinations, алерти трафіку та балансу партнерам (наприклад, щоранку)',
      'Сповіщення партнерам — «Готово — ціни надіслано» або підтвердження маршрутизації в Teams',
      'Масштаб на менеджера — з 5–10 контрактів вручну до 100+ за того самого ФОП',
      'Конкурентна перевага — до 10× прибутку з тією самою чисельністю проти copy-paste',
      'Для оптових voice і SMS операторів — маршрутизація, білінг і робота з партнерами в одному AI-шарі'
    ]
  },
  'white-black-list': {
    subtitle: 'Модуль Access List',
    description:
      'Блокування SIM — одна з головних проблем GSM-термінації. У багатьох країнах оператори блокують GSM-шлюзи, знижуючи виручку термінаторів. Модуль Access List дозволяє маршрутизувати вибрані номери через заданих операторів (terminator/originator). Списки завантажує користувач, система оновлює їх за заданими критеріями.',
    features: [
      'Whitelist — дозволені номери через вибраних операторів; решта — через інших термінаторів у failover',
      'Blacklist — заборона маршрутизації вказаних номерів через вибраних термінаторів; корисно проти антифрод-тестів',
      'Фільтр за Called Numbers (CLD) та/або Caller ID (CLI/ANI)',
      'Автооновлення списків за заданими критеріями',
      'Автовидалення номерів після закінчення строку',
      'Зручний інтерфейс і підтримка 24/7/365'
    ]
  },
  'monitoring-tool': {
    subtitle: 'Аналіз трафіку та сповіщення в реальному часі',
    description:
      'IXC Monitoring Tool аналізує трафік у реальному часі: ASR, ACD, PDD і прибуток. Система безперервно порівнює метрики з порогами. За відхилення спрацьовує алерт за налаштовуваними правилами.',
    features: [
      'Моніторинг ASR, ACD, PDD і прибутку в реальному часі',
      'Налаштовувані правила алертів — для originator і terminator',
      'Автолисти за шаблонами, коли статистика виходить за пороги',
      'Автоблокування слабких маршрутів',
      'Автоматичні Trouble Ticket листи постачальникам',
      'Інтеграція з Telegram-ботом для миттєвих сповіщень',
      'Усі події пишуться в БД для подальшого аналізу',
      'Контроль прибутку з тривогою за низької маржі'
    ]
  },
  'ixc-autotester': {
    subtitle: 'Автоматичне тестування якості маршрутів',
    description:
      'IXC Autotester автоматично тестує маршрути та напрямки: знаходить слабкі з’єднання і дає детальну картину наявних і нових інтерконектів. Тестові виклики пишуться в MP3 — прослуховування у вебінтерфейсі або вкладення в email.',
    features: [
      'Повністю автоматичне тестування маршрутів і напрямків — за кілька кліків',
      'MP3-запис тестових викликів — слухати в інтерфейсі або завантажити',
      'SIP і H.323 з будь-яким кодеком (G.711, G.723, G.729)',
      'Розклад регулярних тестів — безперервний контроль маршрутів',
      'Реальний RTP-потік для перевірки якості аудіо',
      'Email із записами та результатами тестів',
      'Автодетект поганої якості та FAS (False Answer Supervision)',
      'Тест наявних і нових інтерконектів'
    ]
  },
  'sms-platform': {
    subtitle: 'Комплексне рішення для оптового SMS',
    description:
      'IXC SMS Platform — рішення «все в одному» для оптових SMS-компаній. Конкурентна ціна: від кількох повідомлень на місяць до тисяч на годину. Працює на базі IXC V5 Softswitch або як окремий модуль — достатньо одного сервера.',
    features: [
      'Маршрутизація, білінг і комутація SMS на одній платформі',
      'Масштаб від малого обсягу до тисяч повідомлень на годину',
      'На базі IXC V5 Softswitch або окремим модулем',
      'Протокол SMPP 3.4',
      'Достатньо одного сервера',
      'Варіанти купівлі та оренди',
      'Техпідтримка 24/7/365'
    ]
  },
  'google-api': {
    subtitle: 'Синхронізація з Google Docs і Sheets',
    description:
      'IXC Google API — онлайн-інтеграція з документами та таблицями Google. Багато клієнтів тримають top/target destinations у таблицях для спільного доступу — IXC робить це автоматично. Потрібна статистика оновлюється у вибраних документах, і її бачать усі онлайн.',
    features: [
      'Інтеграція модулів IXC з Google Documents і Spreadsheets',
      'Автооновлення статистики в зазначених Google Docs',
      'Шеринг top/target destinations зі стейкхолдерами в реальному часі',
      'Розширювана бібліотека підтримуваних таблиць і даних',
      'Кастомні інтеграції на запит',
      'Без ручної роботи — повністю автоматична синхронізація'
    ]
  },
  'technical-specifications': {
    subtitle: 'Огляд технічних характеристик',
    description:
      'Зведення можливостей платформи IXC: мережеві протоколи, масштаб, інтелектуальна маршрутизація, безпека, медіа та кодеки, API, білінг і звітність, клієнтський досвід і експлуатація. Повний друкований документ — у PDF нижче.',
    features: [
      'Розгортання в SIP і H.323 з транскодінгом протоколів',
      'До 4 000 VoIP-каналів на сервер, CPS до 200',
      'Необмежене масштабування',
      'Розширена безпека',
      'Повторна маршрутизація навіть після SIP 180/183',
      'Кодеки G.711, G.723.1, G.726, G.729A/B/AB і GSM',
      'SMS SMPP 3.4',
      'Більшість функцій платформи через JSON API',
      'Інтелектуальна маршрутизація (LCR, ACD/ASR, PDD, пріоритет тощо)',
      'Розподіл трафіку у відсотках',
      'Власний firewall проти SIP-спаму',
      'Обробка RTP (signaling і full proxy)',
      'Кілька методів автентифікації',
      'Необмежена таблиця маршрутів',
      'Онлайн-білінг і звітність',
      'Шаблон активних викликів із широким набором полів',
      'Автоматичний бекап даних',
      'Потужне керування користувачами',
      'Клієнтський портал з активними викликами',
      'Конвертація кодеків і сумісність із Cisco, Lucent, Quintum',
      'Інтуїтивний GUI з можливостями кастомізації',
      'Автотестер маршрутів із живими записами для якості та FAS',
      'NOC 24/7 з підтримкою EN, RU'
    ],
    realTimeReporting: [
      'Детальний статистичний звіт',
      'Звіт Traffic Flow',
      'Звіт по прибутковості та графіки',
      'Звіти та графіки ASR/ACD',
      'Звіт за причинами роз’єднання',
      'Звіт по платежах',
      'Звіт про доходи та витрати',
      'Витрати за категоріями',
      'Автогенерація інвойсів',
      'Statement і ліміти одночасних викликів',
      'Звіт конфігурації системи для термінатора',
      'Звіт top/target destinations'
    ],
    callRoutingDepending: [
      'Відсотковий розподіл',
      'Вартість хвилини (LCR)',
      'Маршрутизація за ASR/ACD/PDD',
      'Номер викликуваного',
      'Група викликаючого',
      'Маршрутизація за якістю',
      'Пріоритетна маршрутизація',
      'Зручні дерева маршрутизації'
    ]
  }
};

const zh: Record<ProductSlug, ProductPageCopy> = {
  softswitch: {
    subtitle: '运营商级 VoIP 交换与计费',
    description:
      'IXC Softswitch 是面向批发 VoIP 的高度可定制、可扩展平台。该运营商级方案同时包含交换与计费，满足运营商最复杂的需求，并为预付费与后付费呼叫提供精确的实时计费。单服务器最多 4,000 路 VoIP 信道，CPS 最高 800，支持无限水平扩展。',
    features: [
      '高容量 — 单服务器最多 4,000 路 VoIP 信道，CPS 最高 800，无限水平扩展',
      '智能路由 — LCR、ASR/ACD、PDD、优先级、百分比、A/B 号码、分时与继承路由',
      '协议灵活 — 可部署于 SIP 与 H.323 网络，支持协议转码与 SMS（SMPP 3.4）',
      '全面编解码支持 — 主流 VoIP 与 GSM 编解码，实时转码',
      '集成 SIP 防火墙 — 专有防火墙，防止 SIP 垃圾与未授权访问',
      '丰富 API — 面向外部应用的 JSON API，含 Telegram 机器人支持',
      '灵活 SIP 配置文件 — 适配任意 SIP RFC 呼叫场景',
      'CPS 限制模块 — 过载时拒绝多余 SIP 尝试，不影响真实话务',
      '自动计费 — 自动生成财务发票并按客户时区发送',
      '自动费率管理 — 从 IMAP 邮件服务器自动上传费率，涨价经 Telegram 机器人确认',
      '现代 Web 界面 — 财务、运营与管理报表，深色/浅色主题',
      '客户门户 — 实时活动呼叫与报表概览',
      '呼叫路由历史 — 在 CDR 报表中查看 callpath、全部路由尝试与拆线码',
      'IXC Recording — 软交换采集媒体；Billing 7 按小时浏览、搜索、播放与管理录音，并可从 Originator/Terminator 报表一键进入',
      'AI 通话分析 — 在 IXC 中标记录音；自动报告话务画像（诈骗、博彩、赌场等）、情绪/坐席/转写、语音质量与按需检测',
      '事后 FAS 与语音信箱检测 — 在已存音频上标记检测，并构建 speech fingerprint 供后续 ML 匹配',
      '数据保护 — 自动备份与双因素认证',
      '话务流向报表 — 按目的地分组的统计、颜色过滤规则，导出 XLS/CSV',
      '余额报表 — 每客户财务全貌：话务、发票、付款、欠款、信用额度、实时余额',
      '利润报表 — 利润与量的图形指标，可按周期及目的地/客户筛选',
      '波动报表 — 日/周/月绝对与相对话务趋势，可设自定义阈值',
      '协议与承诺量 — 目标话务量、每日计算与自动提醒',
      '路由表 — 完整规则视图，含继承、定时场景、批量操作与 CSV 导入导出',
      '当前路由工具 — 分析任意目的地的供应商费率、话务量、质量与待生效涨价',
      '实时余额检查 — 智能算法确保不超过信用额度，Telegram 提醒以便快速充值',
      '多级权限体系，保障安全'
    ]
  },
  'ixc-recording': {
    subtitle: '通话媒体归档 · AI 分析 · 检测与丢弃 · 通话后短信',
    description:
      'IXC Recording 是 Softswitch 与 Billing 7 上的媒体层：软交换采集通话音频；Billing 7 按小时整理归档，支持搜索、回放，以及从 Originator/Terminator 报表一键进入。在 IXC 中标记录音即可获得自动 AI 分析报告——话务画像、辅导、真实语音质量、带 speech fingerprint 的 FAS/语音信箱检测与丢弃、按需检测，以及基于转写的个性化通话后短信营销。',
    features: [
      '软交换媒体采集 — 为已启用话务在交换机上写入语音录音',
      'Billing 7 归档 — 按小时浏览、搜索、播放、导出并管理保留期',
      '从呼叫报表一键进入 — 与 PCAP 相同方式从 Originator/Terminator 打开录音',
      'AI 通话分析 — 在 IXC 中标记呼叫，平台内自动回传报告',
      '高层话务画像 — 对呼叫中心、诈骗、博彩、赌场等垂直的 ML/转写审阅',
      '了解您的话务 — 以可读画像更有竞争力地销售您实际承载的流量',
      '真实语音质量 — 从录音本身得到清晰度、有效分钟、噪声、单向音频与媒体问题',
      '情绪与辅导洞察 — 面向呼叫中心的坐席与客户评分',
      '通话后短信营销 — 100% 基于转写、跟随对话的个性化短信',
      'FAS/语音信箱检测与丢弃 — 在分钟被消耗前标记异常应答并采取行动',
      'Speech fingerprint — 存储 FAS/语音信箱特征，供后续批次 ML 匹配',
      '按需检测 — 客户所需的定制问题包（合规用语、供应商静音阈值、区域指纹包等）'
    ]
  },
  'ai-automation': {
    subtitle: 'IXC ↔ DealoAgent — 规模化语音与 SMS 运营商运营',
    description:
      'AI 自动化将 IXC Softswitch 与 DealoAgent AI 连接，使运营商经理不再在邮件、即时通讯与计费界面之间复制粘贴。用母语提问——给运营商 1–3 添加目的地、修改 Cuba Mobile 路由，或根据 30 行 Excel 与运营商 X 敲定承诺量——IXC 即可批量落地变更，无需多步点击，并覆盖软交换全部读、写、删能力。可设定每日或自定义周期任务：在 IXC 中批量更新，再把热门目的地、话务告警与余额通知自动推送到所有运营商渠道。复杂目标由深度分析处理；Teams、Telegram、Gmail 与 WhatsApp 向伙伴回复。同等人力成本下，利润最高可达 10 倍，每名经理账户从 5–10 提升到 100+。',
    features: [
      'IXC ↔ DealoAgent 合作 — AI 读写软交换，而不仅是即时通讯',
      '母语指令 — 无僵硬语法；自然描述路由、费率或承诺量',
      '批量 IXC 更新 — 一次应用目的地、费率与路由，跳过多步界面',
      '深度分析 — 自动分析承诺量、目标清单与多行 Excel 导入',
      '渠道编排 — Gmail、Telegram、WhatsApp、MS Teams 与 IXC 同一流程',
      '完整 IXC 覆盖 — 对平台暴露的全部软交换能力进行读、写、删',
      '定时回写 — 按每日或自定义节奏自动批量变更 IXC，再把结果推送到各渠道',
      '定时分发 — 按周期向所有伙伴发送热门目的地、话务告警与余额通知（如每天早晨）',
      '伙伴通知 — 在 Teams 与即时通讯中发送“已完成——价格已发出”或路由确认',
      '经理规模 — 从手工 5–10 个账户到同等薪资预算下的 100+',
      '竞争优势 — 相对复制粘贴流程，同等编制下利润最高可达 10 倍',
      '面向批发语音与 SMS 运营商 — 路由、计费与伙伴运营在同一 AI 层'
    ]
  },
  'white-black-list': {
    subtitle: '高级访问列表模块',
    description:
      'SIM 卡封锁是 GSM 落地业务的主要问题之一。许多国家的移动运营商会封锁 GSM 网关，影响落地公司的整体业务与收入。IXC Access List 模块可将指定号码经由选定运营商（落地/主叫）路由。号码由用户上传，系统再按设定条件自动更新。',
    features: [
      '白名单场景 — 允许的号码经选定运营商路由；其余号码经剩余落地按故障转移方案路由',
      '黑名单场景 — 禁止指定号码经选定落地路由；有助于抵御反欺诈测试呼叫',
      '按被叫号码（CLD）和/或主叫号码（CLI/ANI）过滤',
      '系统按设定条件自动更新号码列表',
      '到期后自动删除号码',
      '易用界面，支持 24/7/365'
    ]
  },
  'monitoring-tool': {
    subtitle: '实时话务分析与告警',
    description:
      'IXC Monitoring Tool 提供实时话务分析，跟踪 ASR、ACD、PDD 与利润等关键指标。系统持续核对这些参数并与阈值比较。一旦偏离目标范围，即按可定制规则触发告警。',
    features: [
      '实时监控 ASR、ACD、PDD 与利润指标',
      '可定制告警规则 — 适用于主叫与落地',
      '统计偏离阈值时按可配置模板自动发邮件告警',
      '对表现不佳的路由自动封锁',
      '自动向供应商发送 Trouble Ticket 邮件以加快处理',
      'Telegram 机器人集成，即时通知',
      '全部事件写入数据库供后续分析',
      '利润监控，低毛利时告警'
    ]
  },
  'ixc-autotester': {
    subtitle: '自动路由质量测试',
    description:
      'IXC Autotester 可自动测试多条路由与目的地，通过发现低质量连接并提供现有与新建互联的详细洞察来提升路由质量。测试呼叫自动录制为 MP3，可在 Web 界面直接回听或随邮件通知附上。',
    features: [
      '全自动测试多条路由与目的地 — 只需几次点击即可开始',
      '测试呼叫 MP3 录音 — 在 Web 界面收听或本地下载',
      '支持 SIP 与 H.323，任意编解码（G.711、G.723、G.729）',
      '安排周期性测试 — 持续监控路由',
      '生成真实 RTP 媒体流以准确测试音频质量',
      '邮件通知附带通话录音与测试结果',
      '自动检测劣质与 FAS（虚假应答）',
      '测试现有与新建互联路由'
    ]
  },
  'sms-platform': {
    subtitle: '一体化批发短信方案',
    description:
      'IXC 为批发短信公司打造一体化方案。价格有竞争力的 IXC SMS Platform 让群发短信变简单——从每月少量消息的小公司到每小时数千条的大客户。平台基于 IXC V5 Softswitch，也可作为独立模块，仅需一台服务器。',
    features: [
      '短信路由、计费与交换集于同一平台',
      '从低量扩展到每小时数千条消息',
      '基于 IXC V5 Softswitch 或作为独立模块',
      '支持 SMPP 3.4 协议',
      '仅需一台服务器即可运行',
      '可购买或租用',
      '含 24/7/365 技术支持'
    ]
  },
  'google-api': {
    subtitle: '与 Google 文档和表格无缝同步',
    description:
      'IXC Google API 是与 Google 文档和电子表格的在线集成。许多客户把热门/目标目的地放在 Google 表格中共享——IXC 将此流程自动化。所需统计会自动更新到指定 Google 文档，供所有人在线查看。',
    features: [
      '将任意 IXC 模块与 Google 文档和表格集成',
      '自动将统计更新到指定 Google 文档',
      '与相关方实时共享热门/目标目的地',
      '持续扩展的受支持表格与数据库',
      '可按需提供定制集成',
      '零手工操作 — 全自动同步'
    ]
  },
  'technical-specifications': {
    subtitle: '技术规格概览',
    description:
      'IXC 平台技术要点汇总：网络协议、规模、智能路由、安全、媒体与编解码、API、计费与报表、客户体验与运维支持。完整可打印文档请使用下方 PDF。',
    features: [
      '可部署于 SIP 与 H.323 VoIP 网络，支持协议转码',
      '单服务器最多 4,000 路 VoIP 信道，CPS 最高 200',
      '无限扩展',
      '高级安全',
      '即使在 SIP 180/183 之后仍可重新路由',
      '支持 G.711、G.723.1、G.726、G.729A/B/AB 与 GSM 编解码',
      '支持 SMS SMPP 3.4',
      '大部分平台功能可通过 JSON API 使用',
      '智能路由（LCR、ACD/ASR、PDD、优先级等）',
      '按百分比分配话务',
      '专有防火墙防止 SIP 垃圾',
      'RTP 处理（信令与完整代理模式）',
      '多种认证方式',
      '无限呼叫路由表',
      '在线计费与报表',
      '活动呼叫模板，显示字段丰富',
      '自动数据备份',
      '强大的用户管理',
      '带活动呼叫的客户门户',
      '编解码转换，并与 Cisco、Lucent、Quintum 互操作',
      '直观易用、可定制的 GUI',
      '自动路由测试器，含实时语音录音以检测质量与 FAS',
      '24/7 NOC，支持多语言（EN、RU）'
    ],
    realTimeReporting: [
      '详细统计报表',
      '话务流向报表',
      '盈利报表与图表',
      'ASR/ACD 报表与图表',
      '拆线原因报表',
      '付款报表',
      '收入与支出报表',
      '按类别支出',
      '自动生成发票',
      '对账单与并发呼叫限制',
      '指定落地的系统配置报表',
      '热门/目标目的地报表'
    ],
    callRoutingDepending: [
      '百分比分配',
      '分钟成本（最低成本路由）',
      '基于 ASR/ACD/PDD 的路由',
      '被叫号码',
      '主叫组',
      '质量路由',
      '优先级路由',
      '易于管理的路由树'
    ]
  }
};

export const productPageCopy: Record<Language, Record<ProductSlug, ProductPageCopy>> = {
  en,
  ru,
  uk,
  zh
};

export function getProductPageCopy(lang: Language, slug: ProductSlug): ProductPageCopy {
  return productPageCopy[lang][slug] ?? productPageCopy.en[slug];
}
