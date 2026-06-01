/** Latest Updates entry: IXC Billing WebV7 operator UI (Jun 2026). */
export const ixcWebV7News = {
  slug: 'ixc-webv7',
  date: '2026-06-01',
  link: 'https://ixc.ua/news/ixc-webv7',
  image: 'https://ixc.ua/news/webv7-latest-update.png',
  local_image: '/news/webv7-latest-update.png',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'IXC Billing WebV7 — what’s new for operators (vs legacy v6 UI)',
    content: `PRODUCT UPDATE

June 2026 — IXC Software Distribution Corp.

**IXC Billing WebV7** is the next-generation IXC billing and switch management interface. Same billing database, same permissions model — but a cleaner, faster, more guided experience than the **legacy v6 billing UI**.

We also added **quick search** on every major selector — destinations, payees, codes, originators, and terminators — so you can find the right row without scrolling long dropdowns.

---
## 1. A modern workspace you can work in all day

**What changed:** The legacy v6 UI uses dense tables, nested sidebar sections, and a separate “Show advanced menu” toggle in the top bar. WebV7 opens on a spacious dashboard with a persistent left sidebar, clear section labels (Management, Reports, Finance, System, Troubleshooting), and content that scales on wide monitors without feeling cramped.

![Legacy v6 billing UI — dense sidebar and dashboard tables](/news/webv7-ui-v6-was.png)
![WebV7 light theme — dashboard and navigation](/news/webv7-ui-v7-light.png)
![WebV7 dark theme — same workspace at night](/news/webv7-ui-v7-dark.png)

---
## 2. Find any screen in seconds — search + favorites

**What changed:** In v6 you scroll long sidebar lists or flip “advanced menu” on/off. WebV7 adds **menu search** at the top of the sidebar (type a screen name, jump straight there) and **★ Favorites** — pin the screens you use daily (Active Calls, Tariff Plans, Reload config, and more) to the top. No cookie tricks, no hidden menus.

---
## 3. Built-in help on every page and field

**What changed:** The legacy UI relies on external manuals and tribal knowledge. WebV7 puts contextual help **(?)** on page titles, table columns, form fields, tabs, and action buttons. Toggle help on/off from the header. New operators can learn while configuring originators, routes, or CDR templates — without leaving the screen.

---
## 4. Light, dark, and auto theme

**What changed:** The legacy v6 UI offered a light/dark toggle but not a cohesive theme system. WebV7 lets each user pick **Light**, **Dark**, or **Auto** (follow OS) from the top bar — a consistent look across every screen, including night shifts in the NOC.

---
## 5. Quick Setup — onboard a customer or vendor in one flow

**What changed:** The legacy UI has no equivalent on the main menu. WebV7 adds **Quick setup** — a step-by-step wizard (payee → originator/terminator → routing → prices → reload → optional call-path test) that walks you through standing up a working route without jumping across ten different screens.

---
## 6. Smarter rate sheet import — preview before live prices

**What changed:** Legacy rate uploads often feel like “upload and hope.” WebV7 **Smart upload** on customer/vendor tariff plans gives a multi-step flow: pick file → map columns if headers differ → preview row counts and warnings → confirm import. You see activation notices and parse issues before prices hit the switch.

---
## 7. Customer rate emails — send, pool, and confirm from the tariff plan

**What changed:** Legacy rate mail is fragmented across tariff UI, manual email, and limited tracking. On a customer tariff plan, WebV7 shows a **Customer rate email** panel per payee: mail-ready status, pending pool on the switch, **Send updates**, **Apply pool now**, confirm-mode flags, and clear blockers (“set payee Email”, “enable rates mailbox”). Operators see what will happen before the customer gets the sheet.

---
## 8. Email Setup hub — patterns, inbox, and vendor rate approvals

**What changed:** The legacy UI scatters mail under System → Mailing and older server config. WebV7 **System → Email setup** is a tabbed hub: general accounts, mail patterns, message inbox, rate approvals (vendor sheet queue), and parse templates — with company scope and permissions per tab. Approve vendor imports without hunting through hidden screens.

---
## 9. Important system tools back on the main menu

**What changed:** In v6, items like CDR templates, Manage currencies, and Manage interfaces are often commented out of the sidebar — reachable only if you know the URL. WebV7 lists them openly under **System**, alongside codec profiles, signalling profiles, translate rules, and black lists — the screens operators need after go-live.

---
## 10. Roles & permissions — grouped, searchable, auditable

**What changed:** Legacy role editing is a long flat checkbox list. WebV7 **Roles / permissions** uses module accordions (Originators, Routing, Reports, …) with filter, per-module select-all, and **(?)** help on each permission. The **Permission Report** is a matrix: roles across the top, permissions down the side — edit multiple roles in one view and save once.

---
## 11. Dashboard & reports — clearer monitors, less clutter

**What changed:** The v6 main page packs many HTML tables and legacy graph embeds. WebV7 **Main page** keeps familiar widgets (softswitch status, CPS, balance alerts, traffic deltas, price changes) in card layouts with role-gated visibility, plus an active calls chart that loads cleanly. Reports use consistent filters, pagination, and the same help pattern as the rest of WebV7.

---
## 12. Mobile-friendly navigation for on-call checks

**What changed:** The v6 sidebar is desktop-first. WebV7 collapses to a hamburger menu on smaller widths — open Active Calls or Reload config from a tablet without horizontal scrolling through legacy tables.

---
## 13. Quick search in selectors — destinations, payees, codes, and more

**What changed:** Long dropdowns for **destinations**, **payees**, **codes**, **originators**, and **terminators** are painful on busy screens. WebV7 adds **quick search inside each selector** — type a few characters, filter the list instantly, pick the right row. Same billing data; less hunting on route rules, tariff plans, and reports.

---
## Availability

**IXC Billing WebV7** is rolling out to existing IXC Softswitch deployments. Ask your account team or **noc@ixc.ua** for upgrade planning and training.

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'IXC Billing WebV7 — что нового для операторов (vs интерфейс v6)',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Июнь 2026 — IXC Software Distribution Corp.

**IXC Billing WebV7** — интерфейс нового поколения для биллинга и управления софтсвитчем IXC. Та же база биллинга, та же модель прав — но удобнее, быстрее и с подсказками по сравнению с **устаревшим интерфейсом v6**.

Мы также добавили **быстрый поиск** во всех основных селекторах — пункты назначения, плательщики, коды, оригинаторы и терминаторы — чтобы находить нужную строку без прокрутки длинных списков.

---
## 1. Современное рабочее место на весь день

**Что изменилось:** В v6 — плотные таблицы, вложенное меню и переключатель «Расширенное меню» вверху. WebV7 открывается на просторном дашборде с постоянной боковой панелью, понятными разделами (Management, Reports, Finance, System, Troubleshooting) и масштабированием на широких мониторах.

![Интерфейс v6 — плотное меню и таблицы](/news/webv7-ui-v6-was.png)
![WebV7, светлая тема](/news/webv7-ui-v7-light.png)
![WebV7, тёмная тема](/news/webv7-ui-v7-dark.png)

---
## 2. Любой экран за секунды — поиск и избранное

**Что изменилось:** В v6 — длинные списки меню или «расширенное меню». В WebV7 — **поиск по меню** вверху боковой панели и **★ Избранное** для ежедневных экранов (Active Calls, тарифы, Reload config и др.).

---
## 3. Встроенная справка на страницах и полях

**Что изменилось:** Раньше — внешние мануалы. В WebV7 — **(?)** у заголовков, колонок, полей, вкладок и кнопок; справку можно отключить в шапке.

---
## 4. Светлая, тёмная и авто-тема

**Что изменилось:** В v6 был переключатель светлой/тёмной темы, но без единой системы оформления. WebV7 — **Light / Dark / Auto** (по ОС) в шапке: одинаковый вид на всех экранах, удобно для ночных смен в NOC.

---
## 5. Quick Setup — клиент или вендор в одном мастере

**Что изменилось:** В v6 такого пункта в меню нет. **Quick setup** ведёт по шагам: payee → originator/terminator → маршрутизация → цены → reload → опционально call path.

---
## 6. Умная загрузка rate sheet — превью до продакшена

**Что изменилось:** «Загрузил и надеюсь» → **Smart upload**: файл → сопоставление колонок → превью и предупреждения → подтверждение.

---
## 7. Письма клиенту с тарифа — отправка и пул

**Что изменилось:** На тарифе клиента — панель **Customer rate email**: статус, пул на свитче, **Send updates**, **Apply pool now**, confirm-mode и явные блокеры.

---
## 8. Email Setup — шаблоны, входящие, одобрения вендоров

**Что изменилось:** Почта разбросана по старым экранам. **System → Email setup** — вкладки: аккаунты, шаблоны, inbox, одобрения rate sheet, parse templates.

---
## 9. Системные инструменты снова в меню

**Что изменилось:** CDR templates, валюты, интерфейсы в v6 часто скрыты. В WebV7 они в **System** вместе с codec/signalling profiles, translate rules, black lists.

---
## 10. Роли и права — группы, поиск, матрица

**Что изменилось:** Длинный список галочек → аккордеоны по модулям, фильтр, **Permission Report** (роли × права), одно сохранение.

---
## 11. Дашборд и отчёты — карточки вместо шума

**Что изменилось:** Главная v6 — много HTML-таблиц. WebV7 — виджеты в карточках, график active calls, единые фильтры и справка.

---
## 12. Мобильная навигация для дежурства

**Что изменилось:** Боковое меню v6 — под десктоп. WebV7 — **гамбургер** на узких экранах, Active Calls и Reload с планшета.

---
## 13. Быстрый поиск в селекторах

**Что изменилось:** В селекторах **destinations**, **payees**, **codes**, **originators**, **terminators** — вводите несколько символов, список фильтруется мгновенно.

---
## Доступность

**IXC Billing WebV7** внедряется на действующих инсталляциях IXC Softswitch. План обновления: **noc@ixc.ua**

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'IXC Billing WebV7 — що нового для операторів (vs інтерфейс v6)',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Червень 2026 — IXC Software Distribution Corp.

**IXC Billing WebV7** — інтерфейс нового покоління для білінгу та керування софтсвічем IXC. Та сама база білінгу, та сама модель прав — але зручніший, швидший і з підказками порівняно з **застарілим інтерфейсом v6**.

Ми також додали **швидкий пошук** у всіх основних селекторах — destinations, payees, codes, originators і terminators — щоб знаходити потрібний рядок без прокрутки довгих списків.

---
## 1. Сучасне робоче місце на цілий день

**Що змінилось:** У v6 — щільні таблиці, вкладене меню й перемикач «Розширене меню» зверху. WebV7 відкривається на просторому дашборді з постійною бічною панеллю, зрозумілими розділами (Management, Reports, Finance, System, Troubleshooting) і масштабуванням на широких моніторах.

![Інтерфейс v6 — щільне меню та таблиці](/news/webv7-ui-v6-was.png)
![WebV7, світла тема](/news/webv7-ui-v7-light.png)
![WebV7, темна тема](/news/webv7-ui-v7-dark.png)

---
## 2. Будь-який екран за секунди — пошук і обране

**Що змінилось:** У v6 — довгі списки меню або «розширене меню». У WebV7 — **пошук по меню** вгорі бічної панелі та **★ Обране** для щоденних екранів (Active Calls, тарифи, Reload config тощо).

---
## 3. Вбудована довідка на сторінках і полях

**Що змінилось:** Раніше — зовнішні мануали. У WebV7 — **(?)** біля заголовків, колонок, полів, вкладок і кнопок; довідку можна вимкнути в шапці.

---
## 4. Світла, темна й авто-тема

**Що змінилось:** У v6 був перемикач світлої/темної теми, але без цілісної системи оформлення. WebV7 — **Light / Dark / Auto** (за ОС) у шапці: однаковий вигляд на всіх екранах, зручно для нічних змін у NOC.

---
## 5. Quick Setup — клієнт або вендор в одному майстрі

**Що змінилось:** У v6 такого пункту в меню немає. **Quick setup** веде кроками: payee → originator/terminator → маршрутизація → ціни → reload → за бажанням call path.

---
## 6. Розумне завантаження rate sheet — прев’ю до продакшену

**Що змінилось:** «Завантажив і сподіваєшся» → **Smart upload**: файл → зіставлення колонок → прев’ю й попередження → підтвердження.

---
## 7. Листи клієнту з тарифу — надсилання й пул

**Що змінилось:** На тарифі клієнта — панель **Customer rate email**: статус, пул на свічі, **Send updates**, **Apply pool now**, confirm-mode і явні блокери.

---
## 8. Email Setup — шаблони, вхідні, схвалення вендорів

**Що змінилось:** Пошту розкидано по старих екранах. **System → Email setup** — вкладки: акаунти, шаблони, inbox, схвалення rate sheet, parse templates.

---
## 9. Системні інструменти знову в меню

**Що змінилось:** CDR templates, валюти, інтерфейси в v6 часто приховані. У WebV7 вони в **System** разом із codec/signalling profiles, translate rules, black lists.

---
## 10. Ролі й права — групи, пошук, матриця

**Що змінилось:** Довгий список прапорців → акордеони за модулями, фільтр, **Permission Report** (ролі × права), одне збереження.

---
## 11. Дашборд і звіти — картки замість шуму

**Що змінилось:** Головна v6 — багато HTML-таблиць. WebV7 — віджети в картках, графік active calls, єдині фільтри й довідка.

---
## 12. Мобільна навігація для чергування

**Що змінилось:** Бічне меню v6 — під десктоп. WebV7 — **гамбургер** на вузьких екранах, Active Calls і Reload з планшета.

---
## 13. Швидкий пошук у селекторах

**Що змінилось:** У селекторах **destinations**, **payees**, **codes**, **originators**, **terminators** — введіть кілька символів, список фільтрується миттєво.

---
## Доступність

**IXC Billing WebV7** впроваджується на діючих інсталяціях IXC Softswitch. План оновлення: **noc@ixc.ua**

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
};
