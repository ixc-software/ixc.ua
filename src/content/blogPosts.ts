import type { Language } from '../i18n/translations';
import { softswitchAiAutomationPost } from './posts/softswitch-ai-automation';
import { class4VsClass5Post } from './posts/class-4-vs-class-5-softswitch';
import { lcrRoutingPost } from './posts/lcr-routing-voip';
import { voipBillingPost } from './posts/voip-billing-softswitch';
import { voipFraudPost } from './posts/voip-fraud-prevention';
import { telecomIndustryConceptsPost } from './posts/telecom-industry-concepts';
import { ixcRecordingPost } from './posts/ixc-recording';
import { voipCallAnalysisAiPost } from './posts/voip-call-analysis-ai';

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPostLocale {
  /** H1 + <title> base (suffix added by SEO layer). */
  title: string;
  /** Meta description (aim for ~150–160 chars). */
  description: string;
  /** Short summary for listing cards. */
  excerpt: string;
  /** Markdown-ish body: ## / ### headings, - lists, > quotes, **bold**, *italic*, [links](/path). */
  content: string;
  /** Optional FAQ block — rendered on the page and emitted as FAQPage JSON-LD. */
  faq?: BlogFaqItem[];
}

export interface BlogPost {
  slug: string;
  /**
   * Canonical site path for this post. Defaults to `/blog/${slug}`.
   * Set to a top-level path (e.g. `/telecom-industry-concepts`) to serve the
   * article at a specific URL — used to reclaim historical inbound links.
   */
  path?: string;
  /** ISO date published. */
  date: string;
  /** ISO date last updated (defaults to `date`). */
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  /** Absolute URL used for OG/Twitter + JSON-LD images. */
  image: string;
  /** Site-relative path used for the on-page hero image. */
  localImage: string;
  imageObjectFit?: 'cover' | 'contain';
  en: BlogPostLocale;
  ru: BlogPostLocale;
  uk: BlogPostLocale;
  zh: BlogPostLocale;
}

export type LocalizedBlogPost = BlogPostLocale &
  Pick<BlogPost, 'slug' | 'date' | 'updated' | 'author' | 'category' | 'tags' | 'image' | 'localImage' | 'imageObjectFit'>;

const whatIsASoftswitchEn = `A **softswitch** is the software at the heart of every modern VoIP network. It decides where each call goes, connects carriers and customers over IP, applies rates, and records every billable second — all in software running on standard servers instead of legacy switching hardware.

This guide explains what a softswitch is, how it works, the difference between Class 4 and Class 5 systems, the features that matter for wholesale and retail VoIP, and how to choose the right platform in 2026.

## What is a softswitch?

A **softswitch** (short for "software switch") is a software-based call-control system that routes voice and SMS traffic across IP networks. It replaces the proprietary, hardware-based telephone switches of the PSTN era with flexible software that runs on commodity Linux servers or in the cloud.

In practice, a softswitch sits between your suppliers (carriers that terminate calls) and your customers (operators, call centers, or end users). It receives a call, looks up the best route, applies your pricing and policies, and bridges the two legs together while metering the call for billing.

## How does a softswitch work?

Every call a softswitch handles is split into two planes:

- **Signaling** — the setup, control, and teardown of a call, usually over **SIP** (Session Initiation Protocol) or, in older networks, **H.323**.
- **Media** — the actual audio, carried as **RTP** packets, using codecs such as G.711, G.729, or Opus.

A typical call flow looks like this:

- A customer sends a SIP INVITE to the softswitch.
- The softswitch authenticates the customer and checks their balance and permissions.
- It runs **routing logic** to pick the best supplier — frequently using **LCR (Least Cost Routing)** to maximize margin.
- It bridges the call, monitors quality in real time, and writes a **CDR (Call Detail Record)** when the call ends.
- The billing engine rates the CDR and updates prepaid or postpaid balances.

## Class 4 vs Class 5 softswitch

Softswitches are commonly described as Class 4 or Class 5, a distinction inherited from the traditional telephone network:

- **Class 4 softswitch** — built for **wholesale** carrier-to-carrier traffic. It focuses on high call volumes, transit and termination between operators, LCR, protocol conversion, and fraud control. Capacity and routing intelligence matter most.
- **Class 5 softswitch** — built for **retail** end-user services. It adds subscriber features such as IVR, voicemail, call forwarding, DID management, and customer self-service.

Many operators need both. A single platform can run wholesale Class 4 routing and retail Class 5 features together.

## Key features of a modern softswitch

When evaluating a softswitch in 2026, look for:

- **Intelligent routing & LCR** — priority, percentage, and quality-based routing with A-number/B-number rules.
- **Real-time billing** — prepaid and postpaid, multi-currency, with live balances and automated rate import.
- **Monitoring & alerts** — ASR, ACD, PDD, and margin metrics with thresholds and instant notifications.
- **Security & anti-fraud** — SIP firewall, DDoS protection, white/black lists, and FAS detection.
- **APIs & integrations** — REST/JSON APIs so you can automate provisioning and connect external systems.
- **Scalability** — thousands of concurrent channels per server and clean horizontal scaling.

## Softswitch vs SBC, PBX, and media gateway

These terms are often confused:

- A **softswitch** routes, controls, and bills calls across a network.
- An **SBC (Session Border Controller)** secures and normalizes SIP at the network edge; it complements a softswitch but doesn't replace its routing and billing.
- A **PBX** serves a single organization's internal phones.
- A **media gateway** converts between IP and legacy TDM/PSTN circuits.

## How to choose a softswitch

Use this checklist when comparing platforms:

- Does it support your **scale** — channels, calls per second, and CDR volume?
- Does it offer the **routing and billing** depth your business model needs?
- How strong are its **security and anti-fraud** tools?
- Are there **open APIs** for automation and integration?
- What does **support** look like — is there a 24/7 NOC?
- Is it proven in **production** with real carriers?

## Common softswitch challenges

Operators most often struggle with:

- **VoIP fraud** — stolen credentials and traffic pumping that drain balances.
- **FAS (False Answer Supervision)** — suppliers billing for calls that never truly connect.
- **DDoS and SIP floods** — attacks that overload signaling.
- **Quality drift** — falling ASR/ACD that erodes customer trust.

The right softswitch turns these from emergencies into controlled, monitored events.

## Summary

A softswitch is the control and billing core of modern VoIP. Wholesale operators rely on Class 4 transit and LCR; retail providers need Class 5 subscriber features. Combining both on one stack keeps routing, CDRs, and monitoring aligned. When comparing platforms, weigh scale, billing depth, security, APIs, and operational visibility — not headline rate alone.`;

const whatIsASoftswitchRu = `**Софтсвитч** — это программное ядро любой современной VoIP-сети. Он решает, куда направить каждый вызов, соединяет операторов и клиентов по IP, применяет тарифы и фиксирует каждую тарифицируемую секунду — всё это программно, на обычных серверах, без устаревшего коммутационного оборудования.

В этом руководстве объясняется, что такое софтсвитч, как он работает, чем отличаются системы класса 4 и класса 5, какие функции важны для оптового и розничного VoIP и как выбрать подходящую платформу в 2026 году.

## Что такое софтсвитч?

**Софтсвитч** (от англ. "software switch", программный коммутатор) — это программная система управления вызовами, которая маршрутизирует голосовой трафик и SMS по IP-сетям. Она заменяет проприетарные аппаратные телефонные коммутаторы эпохи PSTN гибким ПО, работающим на обычных Linux-серверах или в облаке.

На практике софтсвитч находится между вашими поставщиками (операторами, которые терминируют вызовы) и вашими клиентами (операторами, колл-центрами или конечными пользователями). Он принимает вызов, выбирает оптимальный маршрут, применяет ваши тарифы и политики и соединяет оба плеча вызова, одновременно учитывая его для биллинга.

## Как работает софтсвитч?

Каждый вызов, который обрабатывает софтсвитч, делится на две плоскости:

- **Сигнализация** — установление, управление и завершение вызова, обычно по **SIP** (Session Initiation Protocol) или, в более старых сетях, по **H.323**.
- **Медиа** — собственно звук, передаваемый в виде **RTP**-пакетов с использованием кодеков, таких как G.711, G.729 или Opus.

Типичный поток вызова выглядит так:

- Клиент отправляет SIP INVITE на софтсвитч.
- Софтсвитч аутентифицирует клиента и проверяет его баланс и права.
- Запускается **логика маршрутизации**, чтобы выбрать лучшего поставщика — часто с помощью **LCR (Least Cost Routing)** для максимизации маржи.
- Софтсвитч соединяет вызов, отслеживает качество в реальном времени и формирует **CDR (Call Detail Record)** по завершении вызова.
- Биллинг тарифицирует CDR и обновляет предоплаченные или постоплаченные балансы.

## Софтсвитч класса 4 и класса 5

Софтсвитчи принято делить на класс 4 и класс 5 — это различие унаследовано от традиционной телефонной сети:

- **Софтсвитч класса 4** — для **оптового** трафика между операторами. Основной упор на высокие объёмы вызовов, транзит и терминацию между операторами, LCR, конвертацию протоколов и контроль фрода. Важнее всего ёмкость и интеллект маршрутизации.
- **Софтсвитч класса 5** — для **розничных** услуг конечным пользователям. Добавляет абонентские функции: IVR, голосовую почту, переадресацию, управление DID и самообслуживание клиентов.

Многим операторам нужны оба класса. Одна платформа может совмещать оптовую маршрутизацию класса 4 и розничные функции класса 5.

## Ключевые функции современного софтсвитча

При выборе софтсвитча в 2026 году обращайте внимание на:

- **Интеллектуальная маршрутизация и LCR** — по приоритету, проценту и качеству, с правилами по A-номеру/B-номеру.
- **Биллинг в реальном времени** — предоплата и постоплата, мультивалютность, живые балансы и автоматический импорт тарифов.
- **Мониторинг и оповещения** — ASR, ACD, PDD и метрики маржи с порогами и мгновенными уведомлениями.
- **Безопасность и антифрод** — SIP firewall, защита от DDoS, белые/чёрные списки и выявление FAS.
- **API и интеграции** — REST/JSON API для автоматизации провижининга и подключения внешних систем.
- **Масштабируемость** — тысячи одновременных каналов на сервер и удобное горизонтальное масштабирование.

## Софтсвитч против SBC, PBX и медиашлюза

Эти термины часто путают:

- **Софтсвитч** маршрутизирует, контролирует и тарифицирует вызовы по всей сети.
- **SBC (Session Border Controller)** защищает и нормализует SIP на границе сети; он дополняет софтсвитч, но не заменяет его маршрутизацию и биллинг.
- **PBX (АТС)** обслуживает внутреннюю телефонию одной организации.
- **Медиашлюз** конвертирует трафик между IP и устаревшими каналами TDM/PSTN.

## Как выбрать софтсвитч

Используйте этот чек-лист при сравнении платформ:

- Поддерживает ли он ваш **масштаб** — каналы, вызовы в секунду и объём CDR?
- Достаточно ли глубоки **маршрутизация и биллинг** для вашей бизнес-модели?
- Насколько сильны инструменты **безопасности и антифрода**?
- Есть ли **открытые API** для автоматизации и интеграции?
- Как организована **поддержка** — есть ли NOC 24/7?
- Проверен ли он в **продакшене** с реальными операторами?

## Типичные проблемы при работе с софтсвитчем

Чаще всего операторы сталкиваются с:

- **VoIP-фрод** — украденные учётные данные и накрутка трафика, истощающие балансы.
- **FAS (ложный ответ)** — поставщики тарифицируют вызовы, которые на самом деле не соединились.
- **DDoS и SIP-флуд** — атаки, перегружающие сигнализацию.
- **Дрейф качества** — падение ASR/ACD, подрывающее доверие клиентов.

Правильный софтсвитч превращает эти угрозы из аварий в контролируемые и наблюдаемые события.

## Итог

Софтсвитч — ядро управления и биллинга современного VoIP. Оптовикам нужен транзит класса 4 и LCR; рознице — функции класса 5. Объединение на одном стеке выравнивает маршрутизацию, CDR и мониторинг. При выборе платформы оценивайте масштаб, глубину биллинга, безопасность, API и операционную прозрачность — не только цену минуты.`;

const whatIsASoftswitchUk = `**Софтсвіч** — це програмне ядро будь-якої сучасної VoIP-мережі. Він вирішує, куди спрямувати кожен виклик, з'єднує операторів і клієнтів через IP, застосовує тарифи та фіксує кожну тарифіковану секунду — і все це програмно, на звичайних серверах, без застарілого комутаційного обладнання.

У цьому посібнику пояснюється, що таке софтсвіч, як він працює, чим відрізняються системи класу 4 і класу 5, які функції важливі для оптового та роздрібного VoIP і як обрати відповідну платформу у 2026 році.

## Що таке софтсвіч?

**Софтсвіч** (від англ. "software switch", програмний комутатор) — це програмна система керування викликами, яка маршрутизує голосовий трафік і SMS через IP-мережі. Вона замінює пропрієтарні апаратні телефонні комутатори епохи PSTN гнучким ПЗ, що працює на звичайних Linux-серверах або в хмарі.

На практиці софтсвіч перебуває між вашими постачальниками (операторами, які термінують виклики) та вашими клієнтами (операторами, колл-центрами чи кінцевими користувачами). Він приймає виклик, обирає оптимальний маршрут, застосовує ваші тарифи й політики та з'єднує обидва плеча виклику, водночас обліковуючи його для білінгу.

## Як працює софтсвіч?

Кожен виклик, який обробляє софтсвіч, поділяється на дві площини:

- **Сигналізація** — встановлення, керування та завершення виклику, зазвичай через **SIP** (Session Initiation Protocol) або, у старіших мережах, через **H.323**.
- **Медіа** — власне звук, що передається у вигляді **RTP**-пакетів з використанням кодеків, як-от G.711, G.729 чи Opus.

Типовий потік виклику виглядає так:

- Клієнт надсилає SIP INVITE на софтсвіч.
- Софтсвіч автентифікує клієнта та перевіряє його баланс і права.
- Запускається **логіка маршрутизації**, щоб обрати найкращого постачальника — часто за допомогою **LCR (Least Cost Routing)** для максимізації маржі.
- Софтсвіч з'єднує виклик, відстежує якість у реальному часі та формує **CDR (Call Detail Record)** після завершення виклику.
- Білінг тарифікує CDR і оновлює передплачені або післяплачені баланси.

## Софтсвіч класу 4 і класу 5

Софтсвічі прийнято поділяти на клас 4 і клас 5 — це розрізнення успадковане від традиційної телефонної мережі:

- **Софтсвіч класу 4** — для **оптового** трафіку між операторами. Основний акцент на високих обсягах викликів, транзиті й термінації між операторами, LCR, конвертації протоколів і контролі фроду. Найважливіші — ємність та інтелект маршрутизації.
- **Софтсвіч класу 5** — для **роздрібних** послуг кінцевим користувачам. Додає абонентські функції: IVR, голосову пошту, переадресацію, керування DID і самообслуговування клієнтів.

Багатьом операторам потрібні обидва класи. Одна платформа може поєднувати оптову маршрутизацію класу 4 і роздрібні функції класу 5.

## Ключові функції сучасного софтсвіча

Обираючи софтсвіч у 2026 році, звертайте увагу на:

- **Інтелектуальна маршрутизація та LCR** — за пріоритетом, відсотком і якістю, з правилами за A-номером/B-номером.
- **Білінг у реальному часі** — передплата й післяплата, мультивалютність, живі баланси та автоматичний імпорт тарифів.
- **Моніторинг і сповіщення** — ASR, ACD, PDD та метрики маржі з порогами і миттєвими сповіщеннями.
- **Безпека та антифрод** — SIP firewall, захист від DDoS, білі/чорні списки та виявлення FAS.
- **API та інтеграції** — REST/JSON API для автоматизації провіженінгу та підключення зовнішніх систем.
- **Масштабованість** — тисячі одночасних каналів на сервер і зручне горизонтальне масштабування.

## Софтсвіч проти SBC, PBX і медіашлюзу

Ці терміни часто плутають:

- **Софтсвіч** маршрутизує, контролює й тарифікує виклики по всій мережі.
- **SBC (Session Border Controller)** захищає й нормалізує SIP на межі мережі; він доповнює софтсвіч, але не замінює його маршрутизацію та білінг.
- **PBX (АТС)** обслуговує внутрішню телефонію однієї організації.
- **Медіашлюз** конвертує трафік між IP і застарілими каналами TDM/PSTN.

## Як обрати софтсвіч

Скористайтеся цим чек-листом під час порівняння платформ:

- Чи підтримує він ваш **масштаб** — канали, виклики за секунду та обсяг CDR?
- Чи достатньо глибокі **маршрутизація й білінг** для вашої бізнес-моделі?
- Наскільки потужні інструменти **безпеки та антифроду**?
- Чи є **відкриті API** для автоматизації та інтеграції?
- Як організована **підтримка** — чи є NOC 24/7?
- Чи перевірений він у **продакшені** з реальними операторами?

## Типові проблеми під час роботи із софтсвічем

Найчастіше оператори стикаються з:

- **VoIP-фрод** — викрадені облікові дані та накрутка трафіку, що виснажують баланси.
- **FAS (хибна відповідь)** — постачальники тарифікують виклики, які насправді не з'єдналися.
- **DDoS і SIP-флуд** — атаки, що перевантажують сигналізацію.
- **Дрейф якості** — падіння ASR/ACD, що підриває довіру клієнтів.

Правильний софтсвіч перетворює ці загрози з аварій на контрольовані й спостережувані події.

## Підсумок

Софтсвіч — ядро керування та білінгу сучасного VoIP. Оптовикам потрібен транзит класу 4 і LCR; роздрібу — функції класу 5. Поєднання на одному стеку вирівнює маршрутизацію, CDR і моніторинг. Порівнюючи платформи, оцінюйте масштаб, глибину білінгу, безпеку, API та операційну прозорість — не лише ціну хвилини.`;

const whatIsASoftswitchZh = `**软交换**是每张现代 VoIP 网络的软件核心。它决定每通呼叫的去向，通过 IP 连接运营商与客户，应用费率，并记录每一计费秒——全部以运行在标准服务器上的软件完成，而非传统交换硬件。

本指南说明什么是软交换、它如何工作、4 类与 5 类系统的区别、批发与零售 VoIP 真正重要的功能，以及如何在 2026 年选择合适的平台。

## 什么是软交换？

**软交换**（softswitch，即“软件交换机”）是基于软件的呼叫控制系统，在 IP 网络上路由语音与短信话务。它用可在通用 Linux 服务器或云上运行的灵活软件，取代 PSTN 时代专有的硬件电话交换机。

实践中，软交换位于您的供应商（落地呼叫的运营商）与您的客户（运营商、呼叫中心或最终用户）之间。它接收呼叫，查找最佳路由，应用您的定价与策略，桥接两腿，同时计量呼叫以供计费。

## 软交换如何工作？

软交换处理的每通呼叫分为两个平面：

- **信令** — 呼叫的建立、控制与拆除，通常使用 **SIP**（会话发起协议），在较老网络中则为 **H.323**。
- **媒体** — 实际音频，以 **RTP** 分组承载，使用 G.711、G.729 或 Opus 等编解码。

典型呼叫流程如下：

- 客户向软交换发送 SIP INVITE。
- 软交换认证客户并检查余额与权限。
- 运行**路由逻辑**选择最佳供应商——经常使用 **LCR（最低成本路由）** 以最大化利润。
- 桥接呼叫，实时监控质量，并在呼叫结束时写入 **CDR（呼叫详单）**。
- 计费引擎对 CDR 评级，并更新预付或后付余额。

## 4 类与 5 类软交换

软交换通常被描述为 4 类或 5 类，这一区分继承自传统电话网：

- **4 类软交换** — 面向**批发**运营商到运营商话务。聚焦高呼叫量、运营商之间的过境与落地、LCR、协议转换与欺诈控制。容量与路由智能最重要。
- **5 类软交换** — 面向**零售**最终用户业务。增加 IVR、语音信箱、呼叫转移、DID 管理与客户自助等用户功能。

许多运营商两者都需要。单一平台可以同时运行批发 4 类路由与零售 5 类功能。

## 现代软交换的关键功能

在 2026 年评估软交换时，请关注：

- **智能路由与 LCR** — 优先级、百分比与基于质量的路由，含 A 号码/B 号码规则。
- **实时计费** — 预付与后付、多币种、实时余额与自动费率导入。
- **监控与告警** — ASR、ACD、PDD 与利润指标，含阈值与即时通知。
- **安全与反欺诈** — SIP 防火墙、DDoS 防护、白/黑名单与 FAS 检测。
- **API 与集成** — REST/JSON API，便于自动化开通并连接外部系统。
- **可扩展性** — 每台服务器数千并发通道，以及清晰的水平扩展。

## 软交换与 SBC、PBX、媒体网关

这些术语经常被混淆：

- **软交换**在全网路由、控制并计费呼叫。
- **SBC（会话边界控制器）**在网络边缘保护并规范化 SIP；它补充软交换，但不能替代其路由与计费。
- **PBX** 服务单一组织的内部电话。
- **媒体网关**在 IP 与传统 TDM/PSTN 电路之间转换。

## 如何选择软交换

比较平台时使用这份清单：

- 是否支持您的**规模**——通道、每秒呼叫数与 CDR 量？
- **路由与计费**深度是否满足您的业务模式？
- **安全与反欺诈**工具有多强？
- 是否有用于自动化与集成的**开放 API**？
- **支持**如何——是否有 24/7 NOC？
- 是否已在真实运营商的**生产环境**中验证？

## 常见软交换挑战

运营商最常遇到：

- **VoIP 欺诈** — 盗用凭证与话务灌水耗尽余额。
- **FAS（虚假应答监视）** — 供应商对从未真正接通的呼叫计费。
- **DDoS 与 SIP 洪水** — 过载信令的攻击。
- **质量漂移** — ASR/ACD 下降侵蚀客户信任。

合适的软交换把这些从紧急事件变成可控、可监控的事件。

## 小结

软交换是现代 VoIP 的控制与计费核心。批发运营商依赖 4 类过境与 LCR；零售提供商需要 5 类用户功能。在同一套栈上结合两者，可保持路由、CDR 与监控一致。比较平台时，权衡规模、计费深度、安全、API 与运营可见性——而不只看标价。`;

export const blogPosts: BlogPost[] = [
  ixcRecordingPost,
  voipCallAnalysisAiPost,
  {
    slug: 'what-is-a-softswitch',
    date: '2026-05-29',
    updated: '2026-05-29',
    author: 'Oleksii Vinogradov',
    category: 'Guides',
    tags: ['softswitch', 'voip', 'class 4 softswitch', 'class 5 softswitch', 'sip', 'lcr'],
    image: 'https://ixc.ua/blog/what-is-a-softswitch.png',
    localImage: '/blog/what-is-a-softswitch.png',
    imageObjectFit: 'contain',
    en: {
      title: 'What Is a Softswitch? A Complete Guide for VoIP Carriers (2026)',
      description:
        'A softswitch is the software that routes and bills VoIP calls. Learn how softswitches work, Class 4 vs Class 5, key features, and how to choose one in 2026.',
      excerpt:
        'What a softswitch is, how it works, Class 4 vs Class 5, the features that matter, and how to choose the right VoIP softswitch in 2026.',
      content: whatIsASoftswitchEn,
      faq: [
        {
          q: 'What is a softswitch in simple terms?',
          a: 'A softswitch is software that connects and routes phone calls over the internet, deciding where each call goes and recording it for billing — doing in software what old telephone exchanges did in hardware.'
        },
        {
          q: 'What is the difference between a Class 4 and Class 5 softswitch?',
          a: 'A Class 4 softswitch routes high-volume wholesale traffic between carriers, while a Class 5 softswitch delivers retail features to end users such as voicemail, IVR, and call forwarding.'
        },
        {
          q: 'Is a softswitch the same as a PBX?',
          a: 'No. A PBX serves one organization\u2019s internal phone system, while a softswitch routes and bills traffic across an entire carrier network.'
        },
        {
          q: 'What protocols does a softswitch use?',
          a: 'Most softswitches use SIP for signaling and RTP for media, with some supporting H.323 for legacy networks and SMPP for SMS.'
        },
        {
          q: 'Can a softswitch run in the cloud?',
          a: 'Yes. Modern softswitches run on Linux servers and public cloud platforms, often with managed databases and elastic scaling.'
        }
      ]
    },
    ru: {
      title: 'Что такое софтсвитч? Полное руководство для VoIP-операторов (2026)',
      description:
        'Софтсвитч — это ПО, которое маршрутизирует и тарифицирует VoIP-вызовы. Как он работает, класс 4 и 5, ключевые функции и как выбрать софтсвитч в 2026.',
      excerpt:
        'Что такое софтсвитч, как он работает, класс 4 и класс 5, важные функции и как выбрать VoIP-софтсвитч в 2026 году.',
      content: whatIsASoftswitchRu,
      faq: [
        {
          q: 'Что такое софтсвитч простыми словами?',
          a: 'Софтсвитч — это программа, которая соединяет и маршрутизирует телефонные вызовы через интернет, решает, куда направить каждый вызов, и фиксирует его для биллинга — делая программно то, что старые телефонные станции делали аппаратно.'
        },
        {
          q: 'Чем отличается софтсвитч класса 4 от класса 5?',
          a: 'Софтсвитч класса 4 маршрутизирует оптовый трафик большого объёма между операторами, а софтсвитч класса 5 предоставляет розничные функции конечным пользователям: голосовую почту, IVR, переадресацию.'
        },
        {
          q: 'Софтсвитч и PBX — это одно и то же?',
          a: 'Нет. PBX обслуживает внутреннюю телефонию одной организации, а софтсвитч маршрутизирует и тарифицирует трафик по всей операторской сети.'
        },
        {
          q: 'Какие протоколы использует софтсвитч?',
          a: 'Большинство софтсвитчей используют SIP для сигнализации и RTP для медиа; некоторые поддерживают H.323 для устаревших сетей и SMPP для SMS.'
        },
        {
          q: 'Может ли софтсвитч работать в облаке?',
          a: 'Да. Современные софтсвитчи работают на Linux-серверах и в публичных облаках, часто с управляемыми БД и эластичным масштабированием.'
        }
      ]
    },
    uk: {
      title: 'Що таке софтсвіч? Повний посібник для VoIP-операторів (2026)',
      description:
        'Софтсвіч — це ПЗ, яке маршрутизує й тарифікує VoIP-виклики. Як він працює, клас 4 і 5, ключові функції та як обрати софтсвіч у 2026 році.',
      excerpt:
        'Що таке софтсвіч, як він працює, клас 4 і клас 5, важливі функції та як обрати VoIP-софтсвіч у 2026 році.',
      content: whatIsASoftswitchUk,
      faq: [
        {
          q: 'Що таке софтсвіч простими словами?',
          a: 'Софтсвіч — це програма, яка з\u2019єднує й маршрутизує телефонні виклики через інтернет, вирішує, куди спрямувати кожен виклик, і фіксує його для білінгу — роблячи програмно те, що старі телефонні станції робили апаратно.'
        },
        {
          q: 'Чим відрізняється софтсвіч класу 4 від класу 5?',
          a: 'Софтсвіч класу 4 маршрутизує оптовий трафік великого обсягу між операторами, а софтсвіч класу 5 надає роздрібні функції кінцевим користувачам: голосову пошту, IVR, переадресацію.'
        },
        {
          q: 'Софтсвіч і PBX — це одне й те саме?',
          a: 'Ні. PBX обслуговує внутрішню телефонію однієї організації, а софтсвіч маршрутизує й тарифікує трафік по всій операторській мережі.'
        },
        {
          q: 'Які протоколи використовує софтсвіч?',
          a: 'Більшість софтсвічів використовують SIP для сигналізації та RTP для медіа; деякі підтримують H.323 для застарілих мереж і SMPP для SMS.'
        },
        {
          q: 'Чи може софтсвіч працювати в хмарі?',
          a: 'Так. Сучасні софтсвічі працюють на Linux-серверах і в публічних хмарах, часто з керованими БД та еластичним масштабуванням.'
        }
      ]
    },
    zh: {
      title: '什么是软交换？面向 VoIP 运营商的完整指南（2026）',
      description:
        '软交换是路由并计费 VoIP 呼叫的软件。了解软交换如何工作、4 类与 5 类、关键功能，以及如何在 2026 年选择。',
      excerpt:
        '什么是软交换、如何工作、4 类与 5 类、真正重要的功能，以及如何在 2026 年选择合适的 VoIP 软交换。',
      content: whatIsASoftswitchZh,
      faq: [
        {
          q: '用简单的话说，什么是软交换？',
          a: '软交换是通过互联网连接并路由电话呼叫的软件，决定每通呼叫的去向并记录以供计费——用软件完成旧电话交换机用硬件完成的工作。'
        },
        {
          q: '4 类与 5 类软交换有何区别？',
          a: '4 类软交换在运营商之间路由大容量批发话务，而 5 类软交换向最终用户提供语音信箱、IVR、呼叫转移等零售功能。'
        },
        {
          q: '软交换和 PBX 是一回事吗？',
          a: '不是。PBX 服务一个组织的内部电话系统，而软交换在整个运营商网络上路由并计费话务。'
        },
        {
          q: '软交换使用哪些协议？',
          a: '大多数软交换使用 SIP 做信令、RTP 做媒体；有些还支持面向传统网络的 H.323 以及面向短信的 SMPP。'
        },
        {
          q: '软交换能否在云上运行？',
          a: '可以。现代软交换运行在 Linux 服务器与公有云平台上，常配托管数据库与弹性扩展。'
        }
      ]
    }
  },
  softswitchAiAutomationPost,
  class4VsClass5Post,
  lcrRoutingPost,
  voipBillingPost,
  voipFraudPost,
  telecomIndustryConceptsPost
];

/** Canonical site path for a post (`/blog/:slug` unless a custom `path` is set). */
export function getPostPath(post: Pick<BlogPost, 'slug' | 'path'>): string {
  return post.path ?? `/blog/${post.slug}`;
}

export function getLocalizedPost(post: BlogPost, lang: Language): LocalizedBlogPost {
  const loc = post[lang] ?? post.en;
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
    ...loc
  };
}

export function findBlogPost(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((p) => p.slug === slug);
}

/** Resolve a post by its canonical site path, ignoring any trailing slash. */
export function findBlogPostByPath(pathname: string | undefined): BlogPost | undefined {
  if (!pathname) return undefined;
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return blogPosts.find((p) => getPostPath(p) === normalized);
}
