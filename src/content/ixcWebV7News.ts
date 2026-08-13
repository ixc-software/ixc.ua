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
  zh: {
    title: 'IXC Billing WebV7 — 运营商新功能（对比旧版 v6 界面）',
    content: `产品更新

2026 年 6 月 — IXC Software Distribution Corp.

**IXC Billing WebV7** 是新一代 IXC 计费与交换机管理界面。同一套计费数据库、同一套权限模型——但比 **旧版 v6 计费 UI** 更干净、更快、更有引导。

我们还在每个主要选择器中加入了 **快速搜索**——destinations、payees、codes、originators 和 terminators——无需滚动长下拉列表即可找到正确行。

---
## 1. 可全天使用的现代工作区

**变化：** 旧版 v6 UI 使用密集表格、嵌套侧边栏分区，以及顶栏中单独的「Show advanced menu」开关。WebV7 打开即是宽敞仪表盘：持久左侧边栏、清晰分区标签（Management、Reports、Finance、System、Troubleshooting），内容在宽屏显示器上扩展而不显得拥挤。

![旧版 v6 计费界面 — 密集侧边栏与仪表盘表格](/news/webv7-ui-v6-was.png)
![WebV7 浅色主题 — 仪表盘与导航](/news/webv7-ui-v7-light.png)
![WebV7 深色主题 — 夜间同一工作区](/news/webv7-ui-v7-dark.png)

---
## 2. 数秒内找到任意屏幕 — 搜索 + 收藏

**变化：** 在 v6 中您滚动长侧边栏列表或开关「advanced menu」。WebV7 在侧边栏顶部加入 **菜单搜索**（输入屏幕名称，直接跳转）以及 **★ Favorites**——将日常使用的屏幕（Active Calls、Tariff Plans、Reload config 等）固定到顶部。无需 cookie 技巧，也没有隐藏菜单。

---
## 3. 每个页面与字段内置帮助

**变化：** 旧版界面依赖外部手册和口口相传的经验。WebV7 在页面标题、表格列、表单字段、选项卡和操作按钮上放置上下文帮助 **(?)**。可从页头开关帮助。新操作员在配置 originators、路由或 CDR 模板时可边做边学——无需离开当前屏幕。

---
## 4. 浅色、深色与自动主题

**变化：** 旧版 v6 UI 提供浅色/深色切换，但没有统一的主题系统。WebV7 允许每位用户从顶栏选择 **Light**、**Dark** 或 **Auto**（跟随操作系统）——所有屏幕观感一致，包括 NOC 夜班。

---
## 5. Quick Setup — 在一条流程中接入客户或供应商

**变化：** 旧版界面主菜单没有对等功能。WebV7 增加 **Quick setup**——分步向导（payee → originator/terminator → 路由 → 价格 → reload → 可选 call-path 测试），引导您建立可用路由，无需在十个不同屏幕间跳转。

---
## 6. 更智能的费率表导入 — 上线前预览

**变化：** 旧版费率上传往往像「上传然后碰运气」。WebV7 在客户/供应商 tariff plans 上的 **Smart upload** 提供多步流程：选择文件 → 表头不同时映射列 → 预览行数与警告 → 确认导入。价格进入交换机之前，您就能看到激活通知与解析问题。

---
## 7. 客户费率邮件 — 从 tariff plan 发送、入池并确认

**变化：** 旧版费率邮件分散在 tariff UI、手工邮件和有限跟踪中。在客户 tariff plan 上，WebV7 为每个 payee 显示 **Customer rate email** 面板：可发信状态、交换机上的待处理池、**Send updates**、**Apply pool now**、confirm-mode 标志，以及明确阻断项（「set payee Email」「enable rates mailbox」）。客户收到费率表之前，操作员就能看到将发生什么。

---
## 8. Email Setup 中心 — 模板、收件箱与供应商费率审批

**变化：** 旧版界面把邮件散落在 System → Mailing 和更旧的服务器配置中。WebV7 **System → Email setup** 是选项卡式中心：通用账户、邮件模板、消息收件箱、费率审批（供应商费率表队列）和解析模板——每个选项卡带公司范围与权限。审批供应商导入无需翻找隐藏屏幕。

---
## 9. 重要系统工具回到主菜单

**变化：** 在 v6 中，CDR templates、Manage currencies 和 Manage interfaces 等项经常从侧边栏注释掉——只有知道 URL 才能进入。WebV7 将它们公开列在 **System** 下，与 codec profiles、signalling profiles、translate rules 和 black lists 并列——上线后操作员需要的屏幕。

---
## 10. 角色与权限 — 分组、可搜索、可审计

**变化：** 旧版角色编辑是一长串扁平复选框。WebV7 **Roles / permissions** 使用模块手风琴（Originators、Routing、Reports、…），带筛选、按模块全选，以及每条权限的 **(?)** 帮助。**Permission Report** 是矩阵：顶部为角色，侧边为权限——在一个视图中编辑多个角色并一次保存。

---
## 11. 仪表盘与报表 — 监控更清晰，干扰更少

**变化：** v6 主页堆叠大量 HTML 表格和旧版图表嵌入。WebV7 **Main page** 以卡片布局保留熟悉的组件（softswitch 状态、CPS、余额告警、话务增量、价格变更），并按角色控制可见性，另加干净加载的 active calls 图表。报表使用一致的筛选、分页，以及与 WebV7 其余部分相同的帮助模式。

---
## 12. 面向值班检查的移动友好导航

**变化：** v6 侧边栏以桌面为先。WebV7 在较窄宽度折叠为汉堡菜单——可从平板打开 Active Calls 或 Reload config，无需横向滚动旧版表格。

---
## 13. 选择器内快速搜索 — destinations、payees、codes 等

**变化：** 忙碌屏幕上 **destinations**、**payees**、**codes**、**originators** 和 **terminators** 的长下拉列表很难用。WebV7 在 **每个选择器内加入快速搜索**——输入几个字符，立即过滤列表，选中正确行。同一套计费数据；在 route rules、tariff plans 和报表上更少翻找。

---
## 可用性

**IXC Billing WebV7** 正在向现有 IXC Softswitch 部署逐步推出。请向客户团队或 **noc@ixc.ua** 咨询升级规划与培训。

---
## 关于 IXC Software Distribution Corp. (™ IXC Softswitch)

IXC 提供自 1999 年起在生产环境验证的运营商级 VoIP 基础设施。**办公地址：** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **媒体：** alex@ixc.ua`,
  },
};
