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
};
