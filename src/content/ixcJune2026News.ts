/**
 * Latest Updates entry: June 2026 — new clients, DealoAgent channels, WebV7 v7.0.66.
 *
 * Hero image: save generated asset as `public/news/june-2026-latest-update.png`
 * Prompt: `public/news/june-2026-latest-update.prompt.txt`
 */
export const june2026NewsImagePrompt = `Professional B2B telecom product update hero image, 16:9 landscape (1920×1080), dark navy blue gradient background (#0a1118 to #1c3249).

Three-panel composition:

LEFT — IXC Softswitch WebV7 billing dashboard UI card: clean carrier tables, route names, traffic mini-chart, subtle blue accent #4f7cac. Small version badge pill in corner: "WebV7 v7.0.66". Tiny feature chips below: "REST API v2", "CDR filters", "Quick Setup".

CENTER — glowing bidirectional arrow ↔ in accent blue, connecting left and right panels.

RIGHT — DealoAgent AI assistant panel with purple accent (#7c3aed), friendly robot avatar, chat bubbles. Four messenger icons orbit the panel with thin connection lines into the IXC card: WhatsApp (green), Telegram (blue), Microsoft Teams (purple), email envelope (white/gray). Visual metaphor: messengers in, softswitch updates out.

TOP — green pill badge: "June 2026 update". Secondary small badge: "2 new clients".

Style: clean enterprise telecom SaaS, glassmorphism cards, soft depth shadows, no clutter, no stock photos, no real people, no copyrighted logos. Only stylized wordmarks "IXC" and "DealoAgent". Mood: carrier-grade, innovative, trustworthy wholesale VoIP.

High resolution, marketing website hero quality.`;

export const ixcJune2026News = {
  slug: 'ixc-june-2026-update',
  date: '2026-06-18',
  link: 'https://ixc.ua/news/ixc-june-2026-update',
  image: 'https://ixc.ua/news/june-2026-latest-update.png',
  local_image: '/news/june-2026-latest-update.png',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'June 2026 — new clients, DealoAgent channels live, WebV7 v7.0.66',
    content: `PRODUCT UPDATE

June 2026 — IXC Software Distribution Corp.

A busy month on the IXC side: **two new carrier clients** onboarded, **full messenger integration** between **IXC Softswitch** and **DealoAgent AI**, and a major **WebV7** release train — **v7.0.18 → v7.0.66**.

@btn AI Automation | /products/ai-automation
@btn WebV7 update | /news/ixc-webv7

---
## 1. Welcome — two new clients

**What changed:** IXC welcomed **two new wholesale voice clients** in June:

- **New IXC Softswitch client** — production routing, billing, and NOC onboarding on the carrier-grade stack.
- **New IXC ↔ DealoAgent AI Automation client** — softswitch plus AI automation from day one, scaling account coverage without growing headcount.

Welcome aboard — we're glad to have you on the network.

---
## 2. DealoAgent + IXC — all channels connected

**What changed:** The **IXC ↔ DealoAgent** integration now covers the full carrier comms stack end to end:

- **WhatsApp**, **Telegram**, **MS Teams**, and **email** — inbound partner requests and outbound replies on the channel each carrier prefers.
- **Scheduled and on-demand dispatch** from DealoAgent + IXC: **top destinations**, **target reviews**, and **traffic summaries** pushed to partners automatically.
- **Live traffic context** pulled from the **IXC Softswitch REST API** — real switch data, not spreadsheet copies.

Managers stop jumping between messengers and the billing UI; the switch is updated before the partner gets *"All set — prices sent"* in Teams or WhatsApp.

@btn See how AI Automation works | /products/ai-automation

---
## 3. WebV7 release train — v7.0.18 → v7.0.66

**What changed:** **IXC Billing WebV7** shipped **48 point releases** in June 2026 — security hardening, operator UX, API v2, and DealoAgent embed improvements.

### Added

- **REST API v2 registry** — **458 routes** with generated docs and scoped API keys
- Tariff **"merge ratesheets"** import mode + **effective date** parsing
- **Quick Setup** wizard enhancements — peer/price cards, reload progress
- **CDR & Traffic Flow** advanced filters with **per-user favorites**
- **CDR Excel export** with formatted cells
- **Config reload progress** indicator — header, Quick Setup, nav search
- **Softswitch last reload time** on dashboard
- **Active calls:** disconnect cause enrichment + translate code groups UI
- **Terminator priority** field; **payee responsibleId**
- **DealoAgent** embedded split layout + branding

### Fixed

- **Security audit:** removed legacy API handlers; auto DB change audit
- JWT/session and mail confirm-token hardening
- Bill screen crashes; specific crashes
- Price upload and route-rule creation bugs
- CDR template naming; API date-range filters
- Docker deploy and Alloy log shipping

### Changed

- API documentation panel simplified after registry migration

---
## Availability

**IXC Softswitch** and **WebV7** updates roll out through your account team. Plan upgrades and AI Automation onboarding: **sales@ixc.ua** · **noc@ixc.ua**

@btn Contact us | /#get-in-touch

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'Июнь 2026 — новые клиенты, каналы DealoAgent, WebV7 v7.0.66',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Июнь 2026 — IXC Software Distribution Corp.

Насыщенный месяц: **два новых оператора**, **полная интеграция мессенджеров** между **IXC Softswitch** и **DealoAgent AI**, и крупный релизный цикл **WebV7** — **v7.0.18 → v7.0.66**.

@btn AI-автоматизация | /products/ai-automation
@btn Обновление WebV7 | /news/ixc-webv7

---
## 1. Добро пожаловать — два новых клиента

**Что изменилось:** В июне IXC принял **двух новых оптовых voice-клиентов**:

- **Новый клиент IXC Softswitch** — маршрутизация, биллинг и NOC на операторском стеке.
- **Новый клиент IXC ↔ DealoAgent AI Automation** — софтсвитч и AI-автоматизация с первого дня, больше контрактов без роста штата.

Добро пожаловать в сеть.

---
## 2. DealoAgent + IXC — все каналы подключены

**Что изменилось:** Интеграция **IXC ↔ DealoAgent** закрывает полный цикл коммуникаций:

- **WhatsApp**, **Telegram**, **MS Teams** и **email** — входящие запросы партнёров и исходящие ответы в их канале.
- **По расписанию и по запросу** из DealoAgent + IXC: **top destinations**, **разбор targets** и **сводки по трафику** партнёрам автоматически.
- **Актуальный трафик** из **REST API IXC Softswitch** — данные со свитча, не копипаст из Excel.

Менеджеры не прыгают между мессенджерами и биллингом; свитч обновлён до ответа *«Готово — цены отправлены»* в Teams или WhatsApp.

@btn Как работает AI-автоматизация | /products/ai-automation

---
## 3. Релизный цикл WebV7 — v7.0.18 → v7.0.66

**Что изменилось:** **IXC Billing WebV7** — **48 точечных релизов** за июнь 2026: безопасность, UX операторов, API v2 и встраивание DealoAgent.

### Добавлено

- **REST API v2 registry** — **458 маршрутов** с автодокументацией и scoped API keys
- Импорт тарифов **«merge ratesheets»** + разбор **effective date**
- Улучшения мастера **Quick Setup** — карточки peer/price, прогресс reload
- Расширенные фильтры **CDR & Traffic Flow** с **избранным** на пользователя
- **Экспорт CDR в Excel** с форматированием ячеек
- Индикатор **прогресса reload конфига** — шапка, Quick Setup, поиск в меню
- **Время последнего reload** софтсвитча на дашборде
- **Active calls:** обогащение disconnect cause + UI translate code groups
- Поле **приоритета терминатора**; **payee responsibleId**
- Встроенный **DealoAgent** — split layout и брендинг

### Исправлено

- **Аудит безопасности:** удалены legacy API handlers; автоаудит изменений БД
- Усиление JWT/session и mail confirm-token
- Падения экрана Bill и отдельные краши
- Баги загрузки цен и создания route rules
- Именование CDR templates; фильтры API по датам
- Docker deploy и доставка логов Alloy

### Изменено

- Панель документации API упрощена после миграции на registry

---
## Доступность

Обновления **IXC Softswitch** и **WebV7** — через вашу account-команду. AI-автоматизация и апгрейды: **sales@ixc.ua** · **noc@ixc.ua**

@btn Связаться с нами | /#get-in-touch

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч в продакшене с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'Червень 2026 — нові клієнти, канали DealoAgent, WebV7 v7.0.66',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Червень 2026 — IXC Software Distribution Corp.

Насичений місяць: **два нових оператори**, **повна інтеграція месенджерів** між **IXC Softswitch** і **DealoAgent AI**, і великий релізний цикл **WebV7** — **v7.0.18 → v7.0.66**.

@btn AI-автоматизація | /products/ai-automation
@btn Оновлення WebV7 | /news/ixc-webv7

---
## 1. Вітаємо — два нових клієнти

**Що змінилось:** У червні IXC прийняв **двох нових оптових voice-клієнтів**:

- **Новий клієнт IXC Softswitch** — маршрутизація, білінг і NOC на операторському стеку.
- **Новий клієнт IXC ↔ DealoAgent AI Automation** — софтсвітч і AI-автоматизація з першого дня, більше контрактів без зростання штату.

Ласкаво просимо в мережу.

---
## 2. DealoAgent + IXC — усі канали підключені

**Що змінилось:** Інтеграція **IXC ↔ DealoAgent** закриває повний цикл комунікацій:

- **WhatsApp**, **Telegram**, **MS Teams** і **email** — вхідні запити партнерів і вихідні відповіді в їхньому каналі.
- **За розкладом і на вимогу** з DealoAgent + IXC: **top destinations**, **розбір targets** і **зведення по трафіку** партнерам автоматично.
- **Актуальний трафік** з **REST API IXC Softswitch** — дані зі свічу, не копіпаст з Excel.

Менеджери не стрибають між месенджерами та білінгом; свіч оновлено до відповіді *«Готово — ціни надіслано»* у Teams або WhatsApp.

@btn Як працює AI-автоматизація | /products/ai-automation

---
## 3. Релізний цикл WebV7 — v7.0.18 → v7.0.66

**Що змінилось:** **IXC Billing WebV7** — **48 точкових релізів** за червень 2026: безпека, UX операторів, API v2 і вбудовування DealoAgent.

### Додано

- **REST API v2 registry** — **458 маршрутів** з автодокументацією та scoped API keys
- Імпорт тарифів **«merge ratesheets»** + розбір **effective date**
- Покращення майстра **Quick Setup** — картки peer/price, прогрес reload
- Розширені фільтри **CDR & Traffic Flow** з **обраним** на користувача
- **Експорт CDR у Excel** з форматуванням комірок
- Індикатор **прогресу reload конфігу** — шапка, Quick Setup, пошук у меню
- **Час останнього reload** софтсвітча на дашборді
- **Active calls:** збагачення disconnect cause + UI translate code groups
- Поле **пріоритету термінатора**; **payee responsibleId**
- Вбудований **DealoAgent** — split layout і брендинг

### Виправлено

- **Аудит безпеки:** видалено legacy API handlers; автоаудит змін БД
- Посилення JWT/session і mail confirm-token
- Падіння екрана Bill і окремі краші
- Баги завантаження цін і створення route rules
- Іменування CDR templates; фільтри API за датами
- Docker deploy і доставка логів Alloy

### Змінено

- Панель документації API спрощено після міграції на registry

---
## Доступність

Оновлення **IXC Softswitch** і **WebV7** — через вашу account-команду. AI-автоматизація та апгрейди: **sales@ixc.ua** · **noc@ixc.ua**

@btn Зв'язатися з нами | /#get-in-touch

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч у продакшені з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
  zh: {
    title: '2026 年 6 月 — 新客户、DealoAgent 渠道上线、WebV7 v7.0.66',
    content: `产品更新

2026 年 6 月 — IXC Software Distribution Corp.

IXC 侧忙碌的一个月：**两家新运营商客户**完成入网，**IXC Softswitch** 与 **DealoAgent AI** 之间的 **全渠道即时通讯集成**上线，以及一轮重大 **WebV7** 发布列车——**v7.0.18 → v7.0.66**。

@btn AI 自动化 | /products/ai-automation
@btn WebV7 更新 | /news/ixc-webv7

---
## 1. 欢迎 — 两家新客户

**变化：** IXC 在 6 月迎来 **两家新的批发语音客户**：

- **新 IXC Softswitch 客户** — 在运营商级栈上完成生产路由、计费与 NOC 入网。
- **新 IXC ↔ DealoAgent AI Automation 客户** — 从第一天起同时使用软交换与 AI 自动化，在不增加编制的情况下扩大账户覆盖。

欢迎加入网络。

---
## 2. DealoAgent + IXC — 全渠道已连通

**变化：** **IXC ↔ DealoAgent** 集成现已端到端覆盖运营商通信栈：

- **WhatsApp**、**Telegram**、**MS Teams** 和 **email** — 按各运营商偏好的渠道接收伙伴请求并回复。
- 来自 DealoAgent + IXC 的 **定时与按需分发**：**top destinations**、**target reviews** 和 **traffic summaries** 自动推送给伙伴。
- 从 **IXC Softswitch REST API** 拉取的 **实时话务上下文**——真实交换机数据，而非表格副本。

经理无需在即时通讯与计费 UI 之间来回切换；伙伴在 Teams 或 WhatsApp 收到 *"已完成——价格已发送"* 之前，交换机已经更新。

@btn 了解 AI 自动化如何运作 | /products/ai-automation

---
## 3. WebV7 发布列车 — v7.0.18 → v7.0.66

**变化：** **IXC Billing WebV7** 在 2026 年 6 月发布了 **48 个点版本**——安全加固、操作员 UX、API v2 以及 DealoAgent 内嵌改进。

### 新增

- **REST API v2 registry** — **458 条路由**，含生成文档与 scoped API keys
- 费率 **「merge ratesheets」** 导入模式 + **effective date** 解析
- **Quick Setup** 向导增强 — peer/price 卡片、reload 进度
- **CDR & Traffic Flow** 高级筛选，支持 **按用户收藏**
- **CDR Excel 导出**，单元格已格式化
- **配置 reload 进度**指示器 — 页头、Quick Setup、导航搜索
- 仪表盘显示 **Softswitch 最近一次 reload 时间**
- **Active calls：** disconnect cause enrichment + translate code groups UI
- **Terminator priority** 字段；**payee responsibleId**
- **DealoAgent** 内嵌分栏布局 + 品牌

### 修复

- **安全审计：** 移除遗留 API handlers；数据库变更自动审计
- JWT/session 与邮件 confirm-token 加固
- Bill 屏幕崩溃；特定崩溃
- 价格上传与 route-rule 创建缺陷
- CDR 模板命名；API 日期范围筛选
- Docker 部署与 Alloy 日志投递

### 变更

- 迁移至 registry 后，API 文档面板简化

---
## 可用性

**IXC Softswitch** 与 **WebV7** 更新通过您的客户团队发布。规划升级与 AI 自动化入网：**sales@ixc.ua** · **noc@ixc.ua**

@btn 联系我们 | /#get-in-touch

---
## 关于 IXC Software Distribution Corp. (™ IXC Softswitch)

IXC 提供自 1999 年起在生产环境验证的运营商级 VoIP 基础设施。**办公地址：** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **媒体：** alex@ixc.ua`,
  },
};
