/**
 * Latest Updates entry: July 2026 WebV7 report — v7.0.67 → v7.0.84.
 *
 * Hero image: `public/news/july-2026-latest-update.jpg` (on-page)
 * OG / X card: `public/news/july-2026-og.jpg` (1200×630 JPEG — keep under ~500KB for X)
 * Prompt: `public/news/july-2026-latest-update.prompt.txt`
 */
export const july2026NewsImagePrompt = `Professional B2B telecom product update hero image, 16:9 landscape (1920×1080), dark navy background with subtle green circuit-board glow.

Branding: use exact IXC corporate logo badge (blue rounded square, 3D V / stacked curved bars) top-center between panels. No "IXC" / "iXC" / "Wholesale VoIP" text in the top-left corner. Orange distressed rubber stamp "1 new client" overlaid near center.

TOP — green pill "July 2026 report" + dark pill "18 releases".
LEFT — WebV7 CDR detail: SIP A/B-leg diagram, "PCAP available", v7.0.84 chips.
RIGHT — Tariff & compliance: Merge / Replace / Schedule / Wipe + A-number daily cap gauge.
CENTER — blue ↔ arrow, corporate logo above, orange "1 new client" stamp.

Style: enterprise telecom SaaS, glassmorphism, no stock photos, no people. Carrier-grade, precise.`;

export const ixcJuly2026News = {
  slug: 'ixc-july-2026-update',
  date: '2026-07-31',
  link: 'https://ixc.ua/news/ixc-july-2026-update',
  image: 'https://ixc.ua/news/july-2026-og.jpg',
  local_image: '/news/july-2026-latest-update.jpg',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'July 2026 report — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, tariff imports)',
    content: `PRODUCT UPDATE

July 2026 — IXC Software Distribution Corp.

**Period:** 1–31 July 2026 · **Versions shipped:** **v7.0.67 → v7.0.84** (**18 releases**) · **Scope:** Modern React operator interface for IXC softswitch billing and routing.

July was a strong month for V7: major troubleshooting tools, deeper tariff and routing workflows, and steady work on multi-tenant installs and older billing databases.

July V7 brings **SIP troubleshooting from inside CDR reports**, **A-number daily caps** for CLI compliance, and **smarter tariff imports** — plus 18 releases of routing, finance, and multi-tenant fixes.

@btn Softswitch product | /products/softswitch
@btn June 2026 update | /news/ixc-june-2026-update

---
## 1. SIP PCAP viewer in CDR reports (v7.0.84)

**What changed:** Operators can open **call-level packet captures** directly from CDR detail reports — no SSH, no manual file hunting.

![SIP call flow — PCAP sequence diagram with call context from CDR](/news/july-2026-sip-pcap-viewer.jpg)

- New **PCAP** column on CDR call detail tables
- One-click **SIP sequence diagram** with **A-leg / B-leg** filtering
- **Call context panel:** originator, terminator, disconnect cause, quick links to related records
- **Download PCAP** or export the diagram as **PNG** / copy to clipboard
- Clear status: **unavailable**, **wait** (capture still writing), **available**, **missing**
- Built for Linux deployments with **pcapsipdump** layout; integrates with the troubleshooting file store on pack hosts

PCAP analysis merges A/B-leg captures into SIP sequence diagrams with CDR context.

---
## 2. Translate A-number daily cap (v7.0.82)

**What changed:** Compliance-oriented limit on how often the same CLI can be presented in a rolling window.

- Per-group and company-wide **global cap** modes
- Configurable **rolling window** and reconcile interval
- Live view of capped numbers with **manual uncap**
- Background reconcile job keeps effective pools in sync with CDR usage
- Alert job when thresholds are hit
- Range rules no longer blocked by an artificial expand limit

---
## 3. Route item scenarios — scheduled enable / disable / switch (v7.0.70)

**What changed:** Time-based automation on individual route items.

- Scenarios dialog on each build rule: **daily** or **one-shot UTC** schedule
- Actions: **Enable**, **Disable**, or **Switch** (toggle)
- **History** tab for audit of applied changes
- Hourly background job applies due scenarios and triggers config reload when needed

---
## 4. Tariff plan import modes and smart upload (v7.0.81, v7.0.83)

**What changed:** Carrier rate decks are easier to handle without breaking live pricing.

Four import modes:

| Mode | Use case |
| --- | --- |
| **Merge (partial)** | Update only codes in the file; optional future-sheet propagation |
| **Replace full deck** | Rebuild live + scheduled sheets from today's file |
| **Schedule full deck** | Future activation without touching today's live rates |
| **New plan wipe** | Fresh plan — delete all existing sheets |

Also in **v7.0.83**:

- **Allow all codes** tab when adding route items (catch-all per terminator in one step)
- Smarter activation-notice handling and cumulative future price lists
- Future batch scheduling for price changes across customer/vendor plans

Tariff uploads distinguish merge vs replace vs scheduled future decks.

---
## 5. Routing and operations

- **Originator daily calls fill (v7.0.69)** — cron backfills traffic stats for routes table “today's traffic” columns
- Dial code enrichment on route items for clearer build-rules display
- **Translate A-numbers — prefix rules (v7.0.71):** bulk import \`prefix;real_prefix\`, file upload, optional replace-before-import
- Terminator address export and originator/terminator form cleanups (**v7.0.80**)
- Criterion validation for route items (**All / Exclude** in UI)

---
## 6. Finance and reporting

- **Invoice payment dialog overhaul (v7.0.73):** record payment against remaining balance; create a money account inline when none exist
- Active calls report template save fix
- Partition-aware softswitch labels in dashboard, active calls, and reports (**v7.0.72**)

---
## 7. Platform, security, and compatibility

- **API key company isolation (v7.0.75)** — integration keys scoped per company/partition
- **Legacy billing DB support (v7.0.76)** — capability detection via \`/api/health\`; UI adapts when columns/tables are missing
- Stability pass (**v7.0.67–77**): crash fixes, transient PostgreSQL reconnect, malformed JSON rejection
- Background jobs: balance payee emails, countries reference fill, buffer-number purge, RI scenario apply, A-number cap reconcile/alerts, originator daily calls

Route scenarios and A-number caps run on background reconcile schedules.

---
## By the numbers

| Metric | Value |
| --- | --- |
| Releases | **18** (v7.0.67 → v7.0.84) |
| Commits (non-merge) | **21** |
| Lines changed | ~**14.5k** added, ~**1.3k** removed |
| Major new UI | PCAP call dialog, A-number cap admin |

---
## Version changelog (condensed)

| Date | Version | Theme |
| --- | --- | --- |
| 2 Jul | v7.0.67–68 | Crash fixes, API stability |
| 3 Jul | v7.0.69–70 | Route traffic fill; RI scenarios + jobs |
| 7 Jul | v7.0.71 | Translate A-number prefix import |
| 8 Jul | v7.0.72–74 | Partition display; invoice payments |
| 9 Jul | v7.0.75 | API key partition isolation |
| 13 Jul | v7.0.76 | Legacy DB capability detection |
| 14 Jul | v7.0.77 | Stability |
| 19–20 Jul | v7.0.78–80 | Rules, A-number selection fixes |
| 24 Jul | v7.0.81–82 | Future price batch; A-number daily cap |
| 30 Jul | v7.0.83 | Routing + tariff import modes |
| 31 Jul | v7.0.84 | PCAP extraction in CDR |

---
## Availability

**IXC Softswitch** and **WebV7** updates roll out through your account team. Plan upgrades and onboarding: **sales@ixc.ua** · **noc@ixc.ua**

@btn Contact us | /#get-in-touch

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'Отчёт за июль 2026 — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, импорт тарифов)',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Июль 2026 — IXC Software Distribution Corp.

**Период:** 1–31 июля 2026 · **Релизы:** **v7.0.67 → v7.0.84** (**18 релизов**) · **Область:** современный React-интерфейс оператора для биллинга и маршрутизации IXC softswitch.

Июль был сильным месяцем для V7: крупные инструменты troubleshooting, более глубокие тарифные и routing-сценарии, плюс стабильная работа над multi-tenant установками и старыми billing-базами.

Июльский V7 даёт **SIP troubleshooting прямо из CDR-отчётов**, **дневные лимиты A-number** для CLI compliance и **умный импорт тарифов** — плюс 18 релизов routing, finance и multi-tenant фиксов.

@btn Softswitch | /products/softswitch
@btn Обновление за июнь 2026 | /news/ixc-june-2026-update

---
## 1. SIP PCAP viewer в CDR-отчётах (v7.0.84)

**Что изменилось:** Операторы открывают **packet capture уровня вызова** прямо из детального CDR — без SSH и ручного поиска файлов.

![SIP call flow — sequence diagram PCAP с контекстом вызова из CDR](/news/july-2026-sip-pcap-viewer.jpg)

- Новая колонка **PCAP** в таблицах call detail
- Один клик — **SIP sequence diagram** с фильтрами **A-leg / B-leg**
- **Панель контекста вызова:** originator, terminator, disconnect cause, быстрые ссылки на связанные записи
- **Скачать PCAP** или экспорт диаграммы в **PNG** / копирование в буфер
- Статусы: **unavailable**, **wait** (захват ещё пишется), **available**, **missing**
- Для Linux-деплоев с раскладкой **pcapsipdump**; интеграция с troubleshooting file store на pack-хостах

Анализ PCAP объединяет A/B-leg captures в SIP sequence diagrams с контекстом CDR.

---
## 2. Translate A-number daily cap (v7.0.82)

**Что изменилось:** Compliance-лимит — сколько раз один и тот же CLI может показываться в скользящем окне.

- Режимы cap: per-group и company-wide **global**
- Настраиваемые **rolling window** и interval reconcile
- Живой список capped-номеров с **ручным uncap**
- Фоновый reconcile держит пулы в синхроне с CDR usage
- Alert-job при достижении порогов
- Range-правила больше не упираются в искусственный expand limit

---
## 3. Route item scenarios — schedule enable / disable / switch (v7.0.70)

**Что изменилось:** Временная автоматизация на отдельных route items.

- Диалог scenarios на каждом build rule: **daily** или **one-shot UTC**
- Действия: **Enable**, **Disable** или **Switch** (toggle)
- Вкладка **History** для аудита применённых изменений
- Почасовой job применяет due-сценарии и при необходимости делает config reload

---
## 4. Режимы импорта тарифных планов и smart upload (v7.0.81, v7.0.83)

**Что изменилось:** Rate decks проще загружать, не ломая live-цены.

Четыре режима импорта:

| Режим | Когда использовать |
| --- | --- |
| **Merge (partial)** | Обновить только коды из файла; опционально propagate future-sheet |
| **Replace full deck** | Пересобрать live + scheduled sheets из сегодняшнего файла |
| **Schedule full deck** | Будущая активация без касания сегодняшних live rates |
| **New plan wipe** | Чистый план — удалить все существующие sheets |

Также в **v7.0.83**:

- Вкладка **Allow all codes** при добавлении route items (catch-all на terminator за один шаг)
- Умнее activation-notice и cumulative future price lists
- Future batch scheduling изменений цен по customer/vendor plans

Загрузки тарифов различают merge / replace / scheduled future decks.

---
## 5. Routing и operations

- **Originator daily calls fill (v7.0.69)** — cron дозаполняет traffic stats для колонок «today's traffic» в routes
- Обогащение dial code на route items для читаемых build-rules
- **Translate A-numbers — prefix rules (v7.0.71):** bulk import \`prefix;real_prefix\`, file upload, optional replace-before-import
- Экспорт адресов terminator и чистка форм originator/terminator (**v7.0.80**)
- Валидация criterion для route items (**All / Exclude** в UI)

---
## 6. Finance и reporting

- **Переработка диалога оплаты инвойса (v7.0.73):** платёж на remaining balance; inline-создание money account, если его нет
- Фикс сохранения шаблона Active calls report
- Partition-aware labels softswitch на dashboard, active calls и reports (**v7.0.72**)

---
## 7. Platform, security и compatibility

- **API key company isolation (v7.0.75)** — ключи интеграции scoped per company/partition
- **Legacy billing DB support (v7.0.76)** — capability detection через \`/api/health\`; UI адаптируется, если нет колонок/таблиц
- Stability pass (**v7.0.67–77**): crash-фиксы, transient PostgreSQL reconnect, reject malformed JSON
- Background jobs: balance payee emails, countries reference fill, buffer-number purge, RI scenario apply, A-number cap reconcile/alerts, originator daily calls

Route scenarios и A-number caps работают на background reconcile schedules.

---
## В цифрах

| Метрика | Значение |
| --- | --- |
| Релизы | **18** (v7.0.67 → v7.0.84) |
| Commits (non-merge) | **21** |
| Строк изменено | ~**14.5k** added, ~**1.3k** removed |
| Крупный новый UI | PCAP call dialog, A-number cap admin |

---
## Changelog версий (кратко)

| Дата | Версия | Тема |
| --- | --- | --- |
| 2 Jul | v7.0.67–68 | Crash-фиксы, API stability |
| 3 Jul | v7.0.69–70 | Route traffic fill; RI scenarios + jobs |
| 7 Jul | v7.0.71 | Translate A-number prefix import |
| 8 Jul | v7.0.72–74 | Partition display; invoice payments |
| 9 Jul | v7.0.75 | API key partition isolation |
| 13 Jul | v7.0.76 | Legacy DB capability detection |
| 14 Jul | v7.0.77 | Stability |
| 19–20 Jul | v7.0.78–80 | Rules, A-number selection fixes |
| 24 Jul | v7.0.81–82 | Future price batch; A-number daily cap |
| 30 Jul | v7.0.83 | Routing + tariff import modes |
| 31 Jul | v7.0.84 | PCAP extraction in CDR |

---
## Доступность

Обновления **IXC Softswitch** и **WebV7** — через вашу account-команду. Апгрейды и онбординг: **sales@ixc.ua** · **noc@ixc.ua**

@btn Связаться с нами | /#get-in-touch

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч в продакшене с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'Звіт за липень 2026 — WebV7 v7.0.67 → v7.0.84 (SIP PCAP, A-number caps, імпорт тарифів)',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Липень 2026 — IXC Software Distribution Corp.

**Період:** 1–31 липня 2026 · **Релізи:** **v7.0.67 → v7.0.84** (**18 релізів**) · **Область:** сучасний React-інтерфейс оператора для білінгу та маршрутизації IXC softswitch.

Липень був сильним місяцем для V7: великі інструменти troubleshooting, глибші тарифні й routing-сценарії, плюс стабільна робота над multi-tenant інсталяціями та старими billing-базами.

Липневий V7 дає **SIP troubleshooting прямо з CDR-звітів**, **денні ліміти A-number** для CLI compliance і **розумний імпорт тарифів** — плюс 18 релізів routing, finance та multi-tenant фіксів.

@btn Softswitch | /products/softswitch
@btn Оновлення за червень 2026 | /news/ixc-june-2026-update

---
## 1. SIP PCAP viewer у CDR-звітах (v7.0.84)

**Що змінилось:** Оператори відкривають **packet capture рівня дзвінка** прямо з детального CDR — без SSH і ручного пошуку файлів.

![SIP call flow — sequence diagram PCAP з контекстом дзвінка з CDR](/news/july-2026-sip-pcap-viewer.jpg)

- Нова колонка **PCAP** у таблицях call detail
- Один клік — **SIP sequence diagram** з фільтрами **A-leg / B-leg**
- **Панель контексту дзвінка:** originator, terminator, disconnect cause, швидкі посилання на пов’язані записи
- **Завантажити PCAP** або експорт діаграми в **PNG** / копіювання в буфер
- Статуси: **unavailable**, **wait** (захоплення ще пишеться), **available**, **missing**
- Для Linux-деплоїв із розкладкою **pcapsipdump**; інтеграція з troubleshooting file store на pack-хостах

Аналіз PCAP об’єднує A/B-leg captures у SIP sequence diagrams з контекстом CDR.

---
## 2. Translate A-number daily cap (v7.0.82)

**Що змінилось:** Compliance-ліміт — скільки разів той самий CLI може показуватись у ковзному вікні.

- Режими cap: per-group і company-wide **global**
- Налаштовувані **rolling window** і interval reconcile
- Живий список capped-номерів із **ручним uncap**
- Фоновий reconcile тримає пули в синхроні з CDR usage
- Alert-job при досягненні порогів
- Range-правила більше не впираються в штучний expand limit

---
## 3. Route item scenarios — schedule enable / disable / switch (v7.0.70)

**Що змінилось:** Часова автоматизація на окремих route items.

- Діалог scenarios на кожному build rule: **daily** або **one-shot UTC**
- Дії: **Enable**, **Disable** або **Switch** (toggle)
- Вкладка **History** для аудиту застосованих змін
- Погодинний job застосовує due-сценарії і за потреби робить config reload

---
## 4. Режими імпорту тарифних планів і smart upload (v7.0.81, v7.0.83)

**Що змінилось:** Rate decks легше завантажувати, не ламаючи live-ціни.

Чотири режими імпорту:

| Режим | Коли використовувати |
| --- | --- |
| **Merge (partial)** | Оновити лише коди з файлу; опційно propagate future-sheet |
| **Replace full deck** | Пересобрати live + scheduled sheets із сьогоднішнього файлу |
| **Schedule full deck** | Майбутня активація без дотику до сьогоднішніх live rates |
| **New plan wipe** | Чистий план — видалити всі наявні sheets |

Також у **v7.0.83**:

- Вкладка **Allow all codes** під час додавання route items (catch-all на terminator за один крок)
- Розумніше activation-notice і cumulative future price lists
- Future batch scheduling змін цін по customer/vendor plans

Завантаження тарифів розрізняють merge / replace / scheduled future decks.

---
## 5. Routing і operations

- **Originator daily calls fill (v7.0.69)** — cron дозаповнює traffic stats для колонок «today's traffic» у routes
- Збагачення dial code на route items для читабельних build-rules
- **Translate A-numbers — prefix rules (v7.0.71):** bulk import \`prefix;real_prefix\`, file upload, optional replace-before-import
- Експорт адрес terminator і чистка форм originator/terminator (**v7.0.80**)
- Валідація criterion для route items (**All / Exclude** в UI)

---
## 6. Finance і reporting

- **Переробка діалогу оплати інвойсу (v7.0.73):** платіж на remaining balance; inline-створення money account, якщо його немає
- Фікс збереження шаблону Active calls report
- Partition-aware labels softswitch на dashboard, active calls і reports (**v7.0.72**)

---
## 7. Platform, security і compatibility

- **API key company isolation (v7.0.75)** — ключі інтеграції scoped per company/partition
- **Legacy billing DB support (v7.0.76)** — capability detection через \`/api/health\`; UI адаптується, якщо немає колонок/таблиць
- Stability pass (**v7.0.67–77**): crash-фікси, transient PostgreSQL reconnect, reject malformed JSON
- Background jobs: balance payee emails, countries reference fill, buffer-number purge, RI scenario apply, A-number cap reconcile/alerts, originator daily calls

Route scenarios і A-number caps працюють на background reconcile schedules.

---
## У цифрах

| Метрика | Значення |
| --- | --- |
| Релізи | **18** (v7.0.67 → v7.0.84) |
| Commits (non-merge) | **21** |
| Рядків змінено | ~**14.5k** added, ~**1.3k** removed |
| Великий новий UI | PCAP call dialog, A-number cap admin |

---
## Changelog версій (стисло)

| Дата | Версія | Тема |
| --- | --- | --- |
| 2 Jul | v7.0.67–68 | Crash-фікси, API stability |
| 3 Jul | v7.0.69–70 | Route traffic fill; RI scenarios + jobs |
| 7 Jul | v7.0.71 | Translate A-number prefix import |
| 8 Jul | v7.0.72–74 | Partition display; invoice payments |
| 9 Jul | v7.0.75 | API key partition isolation |
| 13 Jul | v7.0.76 | Legacy DB capability detection |
| 14 Jul | v7.0.77 | Stability |
| 19–20 Jul | v7.0.78–80 | Rules, A-number selection fixes |
| 24 Jul | v7.0.81–82 | Future price batch; A-number daily cap |
| 30 Jul | v7.0.83 | Routing + tariff import modes |
| 31 Jul | v7.0.84 | PCAP extraction in CDR |

---
## Доступність

Оновлення **IXC Softswitch** і **WebV7** — через вашу account-команду. Апгрейди та онбординг: **sales@ixc.ua** · **noc@ixc.ua**

@btn Зв'язатися з нами | /#get-in-touch

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч у продакшені з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
  zh: {
    title: '2026 年 7 月报告 — WebV7 v7.0.67 → v7.0.84（SIP PCAP、A-number 上限、费率导入）',
    content: `产品更新

2026 年 7 月 — IXC Software Distribution Corp.

**周期：** 2026 年 7 月 1–31 日 · **发布版本：** **v7.0.67 → v7.0.84**（**18 个版本**）· **范围：** IXC 软交换计费与路由的现代 React 操作员界面。

7 月对 V7 是强势月份：重大排障工具、更深的费率与路由工作流，以及对多租户安装和旧计费数据库的持续改进。

7 月 V7 带来 **CDR 报表内的 SIP 排障**、面向 CLI 合规的 **A-number 每日上限**，以及 **更智能的费率导入**——外加 18 个版本的路由、财务与多租户修复。

@btn Softswitch 产品 | /products/softswitch
@btn 2026 年 6 月更新 | /news/ixc-june-2026-update

---
## 1. CDR 报表中的 SIP PCAP 查看器（v7.0.84）

**变化：** 操作员可直接从 CDR 详单报表打开 **呼叫级 packet captures**——无需 SSH，无需手工翻找文件。

![SIP 呼叫流程 — 带 CDR 呼叫上下文的 PCAP 时序图](/news/july-2026-sip-pcap-viewer.jpg)

- CDR call detail 表新增 **PCAP** 列
- 一键打开 **SIP sequence diagram**，支持 **A-leg / B-leg** 筛选
- **呼叫上下文面板：** originator、terminator、disconnect cause，以及相关记录的快捷链接
- **下载 PCAP**，或将图表导出为 **PNG** / 复制到剪贴板
- 清晰状态：**unavailable**、**wait**（捕获仍在写入）、**available**、**missing**
- 面向采用 **pcapsipdump** 布局的 Linux 部署；与 pack 主机上的 troubleshooting file store 集成

PCAP 分析将 A/B-leg 捕获合并为带 CDR 上下文的 SIP sequence diagrams。

---
## 2. Translate A-number daily cap（v7.0.82）

**变化：** 面向合规的限制——同一 CLI 在滚动窗口内可呈现的次数。

- 按组与公司范围的 **global cap** 模式
- 可配置 **rolling window** 与 reconcile 间隔
- 已封顶号码的实时视图，支持 **手动 uncap**
- 后台 reconcile 任务使有效号池与 CDR usage 保持同步
- 达到阈值时的告警任务
- Range 规则不再受人为 expand limit 阻挡

---
## 3. Route item scenarios — 定时 enable / disable / switch（v7.0.70）

**变化：** 针对单个 route items 的基于时间的自动化。

- 每个 build rule 上的 scenarios 对话框：**daily** 或 **one-shot UTC** 计划
- 动作：**Enable**、**Disable** 或 **Switch**（toggle）
- **History** 选项卡，用于已应用变更的审计
- 每小时后台任务应用到期 scenarios，并在需要时触发 config reload

---
## 4. 费率计划导入模式与 smart upload（v7.0.81、v7.0.83）

**变化：** 运营商费率表更易处理，且不破坏线上价格。

四种导入模式：

| 模式 | 适用场景 |
| --- | --- |
| **Merge (partial)** | 仅更新文件中的 codes；可选向 future-sheet 传播 |
| **Replace full deck** | 用今日文件重建 live + scheduled sheets |
| **Schedule full deck** | 未来激活，不触碰今日 live rates |
| **New plan wipe** | 全新计划 — 删除所有现有 sheets |

另在 **v7.0.83** 中：

- 添加 route items 时的 **Allow all codes** 选项卡（一步为 terminator 设置 catch-all）
- 更智能的 activation-notice 处理与累计 future price lists
- 跨 customer/vendor plans 的价格变更 future batch scheduling

费率上传区分 merge、replace 与 scheduled future decks。

---
## 5. 路由与运营

- **Originator daily calls fill（v7.0.69）** — cron 回填 routes 表「today's traffic」列的 traffic stats
- 在 route items 上丰富 dial code，使 build-rules 显示更清晰
- **Translate A-numbers — prefix rules（v7.0.71）：** 批量导入 \`prefix;real_prefix\`、文件上传、可选 replace-before-import
- Terminator 地址导出以及 originator/terminator 表单清理（**v7.0.80**）
- Route items 的 criterion 校验（UI 中的 **All / Exclude**）

---
## 6. 财务与报表

- **发票付款对话框重构（v7.0.73）：** 针对剩余余额记录付款；若不存在则可内联创建 money account
- Active calls 报表模板保存修复
- 仪表盘、active calls 与报表中的 partition-aware softswitch 标签（**v7.0.72**）

---
## 7. 平台、安全与兼容性

- **API key 公司隔离（v7.0.75）** — 集成密钥按 company/partition 限定范围
- **遗留计费库支持（v7.0.76）** — 通过 \`/api/health\` 进行能力检测；缺少列/表时 UI 自适应
- 稳定性专项（**v7.0.67–77**）：崩溃修复、短暂 PostgreSQL 重连、拒绝畸形 JSON
- 后台任务：balance payee emails、countries reference fill、buffer-number purge、RI scenario apply、A-number cap reconcile/alerts、originator daily calls

Route scenarios 与 A-number caps 在后台 reconcile 计划上运行。

---
## 数字一览

| 指标 | 数值 |
| --- | --- |
| 发布版本 | **18**（v7.0.67 → v7.0.84） |
| Commits（non-merge） | **21** |
| 变更行数 | 约 **14.5k** added，约 **1.3k** removed |
| 主要新 UI | PCAP call dialog、A-number cap admin |

---
## 版本 changelog（精简）

| 日期 | 版本 | 主题 |
| --- | --- | --- |
| 2 Jul | v7.0.67–68 | 崩溃修复、API 稳定性 |
| 3 Jul | v7.0.69–70 | Route traffic fill；RI scenarios + jobs |
| 7 Jul | v7.0.71 | Translate A-number prefix import |
| 8 Jul | v7.0.72–74 | Partition display；invoice payments |
| 9 Jul | v7.0.75 | API key partition isolation |
| 13 Jul | v7.0.76 | Legacy DB capability detection |
| 14 Jul | v7.0.77 | Stability |
| 19–20 Jul | v7.0.78–80 | Rules、A-number selection 修复 |
| 24 Jul | v7.0.81–82 | Future price batch；A-number daily cap |
| 30 Jul | v7.0.83 | Routing + tariff import modes |
| 31 Jul | v7.0.84 | CDR 中的 PCAP 提取 |

---
## 可用性

**IXC Softswitch** 与 **WebV7** 更新通过您的客户团队发布。规划升级与入网：**sales@ixc.ua** · **noc@ixc.ua**

@btn 联系我们 | /#get-in-touch

---
## 关于 IXC Software Distribution Corp. (™ IXC Softswitch)

IXC 提供自 1999 年起在生产环境验证的运营商级 VoIP 基础设施。**办公地址：** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **媒体：** alex@ixc.ua`,
  },
};
