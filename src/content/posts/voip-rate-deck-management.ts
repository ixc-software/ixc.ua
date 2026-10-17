import type { BlogPost } from '../blogPosts';

const en = `A **rate deck** (rate sheet) is the buy or sell price list by prefix that [LCR](/blog/lcr-routing-voip) and [billing](/blog/voip-billing-softswitch) both depend on. Wholesale margin dies when a vendor increase lands in email and sits unapplied — or applies live without anyone confirming it.

This is not how CDRs get rated. This is how prices **get onto the switch** before the next call. On [IXC Softswitch](/products/softswitch) that means IMAP ingest, previewed imports, **effective dates**, and Telegram confirmation on increases.

## What a wholesale rate deck is

Every interconnect has two lists:

- **Vendor (terminator) rates** — your cost
- **Customer (originator) rates** — what you sell

Each row is a prefix (or code), a price, a billing increment (6+6, 1+1), a currency, and an **effective date**. The industry still ships these as XLS/CSV in email. The switch has to turn that file into live LCR without breaking today's traffic.

## Why stale decks kill LCR

[Least cost routing](/blog/lcr-routing-voip) ranks vendors by the rates it currently holds. If those rates are yesterday's:

- You keep sending to a vendor who already raised the price — **negative margin** until the invoice
- You leave a cheaper vendor unused because their new sheet never landed
- Customer sell rates stay cheap while your cost moved — you fill volume and lose money

Quality floors (ASR/ACD/PDD) cannot save a deck that is wrong.

## The ingest problem

A trading desk does not update "a rate". It handles **many vendors, many files, many dates**:

- Attachments with different column names and prefix formats
- Weekend or midnight **increases** that must not go live blindly
- Partial updates (only India Mobile) vs a full A–Z replace
- A sheet dated tomorrow that must not overwrite today's live LCR
- The same destination on customer plans that still need a matching sell update

Manual copy-paste into billing is how silent losses start.

## IXC rate-deck workflow

### IMAP auto-upload

Vendors mail sheets to a mailbox the switch watches. Parse templates map columns; the **rate-approvals** queue shows what arrived before prices hit routing. You are not hunting attachments across ten inboxes.

### Smart upload — preview before live prices

When a file is uploaded (or pulled from mail), **Smart upload** is pick file → map columns if headers differ → preview row counts and warnings → confirm. Activation notices and parse issues show **before** the deck is live.

### Import modes

Choose the mode that matches the email, not a default "overwrite everything":

- **Merge (partial)** — update only codes in the file; leave the rest of the live deck
- **Replace full deck** — rebuild live (and scheduled) sheets from today's file
- **Schedule full deck** — future activation; do not touch today's live rates
- **New plan wipe** — empty a plan and start clean

Wrong mode is how you delete 8,000 codes you meant to keep.

### Effective dates

A sheet with tomorrow's date must sit as a **scheduled** deck until it activates. Live LCR keeps using today. Cumulative future lists stack; you can see what will change before it does.

### Rate increases — confirm before you eat them

A cost increase is not a merge you apply on autopilot. IXC flags increases and asks for **Telegram confirmation** before they become the new LCR input. Decreases can flow faster; increases need a human yes — or a matching sell-rate move.

### Current Routes before you set sell

[Current Routes](/products/softswitch) shows, for a destination: suppliers, rates, volumes, quality, and **pending increases**. Set customer sell rates from that view, not from the last spreadsheet on the desktop.

### Customer rate emails

Outbound is the other half: mail-ready status, pending pool on the switch, send updates, apply pool, confirm-mode flags. The customer gets the sheet you actually loaded — not a file that drifted from billing.

## Common mistakes

- Applying a vendor increase without checking quality or moving sell rates
- Using **replace** when the vendor sent a **partial** file
- Ignoring **effective date** so a future deck overwrites live LCR at noon
- Duplicate codes and wrong prefix length (systematic under-billing — see [VoIP billing](/blog/voip-billing-softswitch))
- Letting IMAP import run with no approval queue

## Summary

Wholesale rate decks are the input to LCR and billing. Import from IMAP, preview with Smart upload, pick merge vs replace vs scheduled, and **confirm increases in Telegram** before they hit routing. Then check Current Routes and push customer sheets from the same plan.

See [IXC Softswitch](/products/softswitch) or [talk to sales](/#get-in-touch).`;

const ru = `**Rate deck** (тарифный лист) — это buy/sell прайс по префиксам, на котором стоят [LCR](/blog/lcr-routing-voip) и [биллинг](/blog/voip-billing-softswitch). Маржа опта умирает, когда повышение вендора лежит в почте неприменённым — или выходит в live без подтверждения.

Это не про тарификацию CDR. Это про то, как цены **попадают на свитч** до следующего вызова. На [IXC Softswitch](/products/softswitch) это IMAP-загрузка, превью импорта, **effective dates** и подтверждение повышений в Telegram.

## Что такое wholesale rate deck

У каждого интерконнекта два списка:

- **Тарифы вендора (terminator)** — ваша себестоимость
- **Тарифы клиента (originator)** — то, что вы продаёте

Строка — префикс (код), цена, инкремент (6+6, 1+1), валюта и **дата вступления**. Индустрия по-прежнему шлёт это XLS/CSV в email. Свитч должен превратить файл в живой LCR, не сломав сегодняшний трафик.

## Почему устаревшие деки убивают LCR

[Least cost routing](/blog/lcr-routing-voip) ранжирует вендоров по тем тарифам, которые сейчас в системе. Если это вчерашние:

- Вы продолжаете слать к вендору, который уже поднял цену — **отрицательная маржа** до инвойса
- Более дешёвый вендор простаивает, потому что новый лист не загрузили
- Sell клиенту остаётся дешёвым, а cost вырос — вы набираете объём и теряете деньги

Пороги качества (ASR/ACD/PDD) не спасают неверный дек.

## Проблема ingest

Торговый стол обновляет не «один тариф», а **много вендоров, файлов и дат**:

- Вложения с разными колонками и форматом префиксов
- Повышения в выходные или ночью, которые нельзя пускать в live вслепую
- Частичные апдейты (только India Mobile) vs полная замена A–Z
- Лист на завтра, который не должен затереть сегодняшний live LCR
- Те же направления на клиентских планах, которым нужен парный sell

Копипаст в биллинг вручную — откуда начинаются тихие убытки.

## Workflow тарифов IXC

### Автозагрузка с IMAP

Вендоры шлют листы на ящик, который смотрит свитч. Шаблоны парсинга мапят колонки; очередь **rate approvals** показывает, что пришло, до попадания цен в маршрутизацию. Не нужно ловить вложения в десяти инбоксах.

### Smart upload — превью до live

При загрузке файла (или съёме с почты): выбрать файл → смапить колонки, если заголовки другие → превью числа строк и предупреждений → подтвердить. Activation notices и ошибки парсинга видны **до** того, как дек станет live.

### Режимы импорта

Режим должен совпадать с письмом, а не с дефолтом «перезаписать всё»:

- **Merge (partial)** — обновить только коды из файла; остальной live-дек не трогать
- **Replace full deck** — пересобрать live (и scheduled) листы из сегодняшнего файла
- **Schedule full deck** — активация в будущем; сегодняшний live не трогать
- **New plan wipe** — очистить план и начать с нуля

Неверный режим — как удалить 8 000 кодов, которые хотели оставить.

### Effective dates

Лист с завтрашней датой должен лежать как **scheduled**, пока не активируется. Live LCR продолжает сегодня. Будущие прайсы копятся; видно, что изменится, до факта.

### Повышения — подтвердить, прежде чем съесть

Рост cost — не merge на автопилоте. IXC помечает increases и просит **подтверждение в Telegram**, прежде чем они станут новым входом LCR. Понижения могут идти быстрее; повышениям нужен человеческий yes — или парный сдвиг sell.

### Current Routes до того, как ставите sell

[Current Routes](/products/softswitch) по направлению показывает поставщиков, ставки, объёмы, качество и **ожидающие повышения**. Sell клиенту ставьте из этого вида, а не из последнего Excel на рабочем столе.

### Письма с тарифами клиентам

Вторая половина — исходящее: статус mail-ready, pending pool на свитче, send updates, apply pool, флаги confirm. Клиент получает тот лист, который вы реально загрузили — не файл, разъехавшийся с биллингом.

## Типичные ошибки

- Применить повышение вендора без проверки качества и без сдвига sell
- **Replace**, когда вендор прислал **partial**
- Игнорировать **effective date**, и будущий дек затирает live LCR в полдень
- Дубли кодов и неверная длина префикса (системный недобор — см. [биллинг VoIP](/blog/voip-billing-softswitch))
- IMAP-импорт без очереди approvals

## Итог

Wholesale rate decks — вход для LCR и биллинга. Забирайте с IMAP, смотрите Smart upload, выбирайте merge / replace / scheduled и **подтверждайте повышения в Telegram**, прежде чем они попадут в маршрутизацию. Затем Current Routes и рассылка клиентских листов с того же плана.

[IXC Softswitch](/products/softswitch) · [написать в sales](/#get-in-touch).`;

const uk = `**Rate deck** (тарифний лист) — це buy/sell прайс за префіксами, на якому стоять [LCR](/blog/lcr-routing-voip) і [білінг](/blog/voip-billing-softswitch). Маржа опту вмирає, коли підвищення вендора лежить у пошті незастосованим — або виходить у live без підтвердження.

Це не про тарифікацію CDR. Це про те, як ціни **потрапляють на свіч** до наступного виклику. На [IXC Softswitch](/products/softswitch) це IMAP-завантаження, прев’ю імпорту, **effective dates** і підтвердження підвищень у Telegram.

## Що таке wholesale rate deck

У кожного інтерконекту два списки:

- **Тарифи вендора (terminator)** — ваша собівартість
- **Тарифи клієнта (originator)** — те, що ви продаєте

Рядок — префікс (код), ціна, інкремент (6+6, 1+1), валюта й **дата набрання чинності**. Індустрія досі шле це XLS/CSV в email. Свіч має перетворити файл на живий LCR, не зламавши сьогоднішній трафік.

## Чому застарілі деки вбивають LCR

[Least cost routing](/blog/lcr-routing-voip) ранжує вендорів за тарифами, які зараз у системі. Якщо це вчорашні:

- Ви далі шлете до вендора, який уже підняв ціну — **від’ємна маржа** до інвойсу
- Дешевший вендор простоює, бо новий лист не завантажили
- Sell клієнту лишається дешевим, а cost зріс — ви набираєте обсяг і втрачаєте гроші

Пороги якості (ASR/ACD/PDD) не рятують хибний дек.

## Проблема ingest

Торговий стіл оновлює не «один тариф», а **багато вендорів, файлів і дат**:

- Вкладення з різними колонками та форматом префіксів
- Підвищення у вихідні або вночі, які не можна пускати в live наосліп
- Часткові апдейти (лише India Mobile) vs повна заміна A–Z
- Лист на завтра, який не повинен затерти сьогоднішній live LCR
- Ті самі напрямки на клієнтських планах, яким потрібен парний sell

Копіпаст у білінг вручну — звідки починаються тихі збитки.

## Workflow тарифів IXC

### Автозавантаження з IMAP

Вендори шлють листи на скриньку, яку дивиться свіч. Шаблони парсингу маплять колонки; черга **rate approvals** показує, що прийшло, до потрапляння цін у маршрутизацію. Не треба ловити вкладення в десяти інбоксах.

### Smart upload — прев’ю до live

Під час завантаження файлу (або зняття з пошти): обрати файл → замапити колонки, якщо заголовки інші → прев’ю кількості рядків і попереджень → підтвердити. Activation notices і помилки парсингу видно **до** того, як дек стане live.

### Режими імпорту

Режим має збігатися з листом, а не з дефолтом «перезаписати все»:

- **Merge (partial)** — оновити лише коди з файлу; решту live-дека не чіпати
- **Replace full deck** — перезібрати live (і scheduled) листи з сьогоднішнього файлу
- **Schedule full deck** — активація в майбутньому; сьогоднішній live не чіпати
- **New plan wipe** — очистити план і почати з нуля

Хибний режим — як видалити 8 000 кодів, які хотіли залишити.

### Effective dates

Лист із завтрашньою датою має лежати як **scheduled**, доки не активується. Live LCR продовжує сьогодні. Майбутні прайси накопичуються; видно, що зміниться, до факту.

### Підвищення — підтвердити, перш ніж з’їсти

Зростання cost — не merge на автопілоті. IXC позначає increases і просить **підтвердження в Telegram**, перш ніж вони стануть новим входом LCR. Зниження можуть іти швидше; підвищенням потрібен людський yes — або парний зсув sell.

### Current Routes до того, як ставите sell

[Current Routes](/products/softswitch) за напрямком показує постачальників, ставки, обсяги, якість і **очікувані підвищення**. Sell клієнту ставте з цього вигляду, а не з останнього Excel на робочому столі.

### Листи з тарифами клієнтам

Друга половина — вихідне: статус mail-ready, pending pool на свічі, send updates, apply pool, прапорці confirm. Клієнт отримує той лист, який ви реально завантажили — не файл, що розійшовся з білінгом.

## Типові помилки

- Застосувати підвищення вендора без перевірки якості й без зсуву sell
- **Replace**, коли вендор надіслав **partial**
- Ігнорувати **effective date**, і майбутній дек затирає live LCR опівдні
- Дублі кодів і хибна довжина префікса (системний недобір — див. [білінг VoIP](/blog/voip-billing-softswitch))
- IMAP-імпорт без черги approvals

## Підсумок

Wholesale rate decks — вхід для LCR і білінгу. Забирайте з IMAP, дивіться Smart upload, обирайте merge / replace / scheduled і **підтверджуйте підвищення в Telegram**, перш ніж вони потраплять у маршрутизацію. Потім Current Routes і розсилка клієнтських листів із того ж плану.

[IXC Softswitch](/products/softswitch) · [написати в sales](/#get-in-touch).`;

const zh = `**费率表（rate deck / rate sheet）** 是按前缀的买卖价目，[LCR](/blog/lcr-routing-voip) 与[计费](/blog/voip-billing-softswitch)都依赖它。批发利润会死在：供应商涨价邮件躺着没导入，或未经确认就进入 live。

这不是 CDR 如何评级。这是价格在下一通呼叫之前**如何上到交换机**。在 [IXC Softswitch](/products/softswitch) 上，这意味着 IMAP 收取、带预览的导入、**生效日期**，以及涨价的 Telegram 确认。

## 批发费率表是什么

每条互联都有两份清单：

- **供应商（terminator）费率** — 你的成本
- **客户（originator）费率** — 你卖出的价格

每一行是前缀（或代码）、价格、计费增量（6+6、1+1）、币种和**生效日期**。行业仍用邮件里的 XLS/CSV。交换机必须把文件变成活的 LCR，且不能打断当天话务。

## 过期费率表如何毁掉 LCR

[最低成本路由](/blog/lcr-routing-voip) 按当前库里的费率给供应商排序。若仍是昨天的：

- 你还在把话务送给已经涨价的供应商 — 直到发票才发现**负利润**
- 更便宜的供应商闲置，因为新表从未入库
- 客户卖价仍便宜，而成本已升 — 你在冲量并亏钱

ASR/ACD/PDD 质量门槛救不了一张错误的表。

## 入库问题

交易台更新的不是“一个费率”，而是**许多供应商、许多文件、许多日期**：

- 列名与前缀格式各异的附件
- 周末或午夜的**涨价**，不能盲目上 live
- 部分更新（仅 India Mobile）vs 全量 A–Z 替换
- 日期为明天的表，不得覆盖今天的 live LCR
- 客户套餐上同一目的地仍需配对的卖价更新

手工粘贴进计费，是静默亏损的起点。

## IXC 费率表流程

### IMAP 自动上传

供应商把表发到交换机监视的邮箱。解析模板映射列；**rate approvals** 队列在价格进入路由之前展示到达内容。不必在十个收件箱里找附件。

### Smart upload — 上 live 之前预览

上传（或从邮件拉取）时：选文件 → 表头不同则映射列 → 预览行数与警告 → 确认。激活通知与解析问题在费率表 **live 之前**可见。

### 导入模式

模式必须匹配这封邮件，而不是默认“全部覆盖”：

- **Merge（部分）** — 只更新文件中的代码；其余 live 表不动
- **Replace full deck** — 用今天的文件重建 live（及已调度）表
- **Schedule full deck** — 将来激活；不碰今天的 live 费率
- **New plan wipe** — 清空计划，从头开始

选错模式，等于删掉本想保留的 8,000 个代码。

### 生效日期

日期为明天的表应作为 **scheduled** 停放，直到激活。Live LCR 继续用今天。未来价目可叠加；在变更发生前就能看到将变什么。

### 涨价 — 先确认再吃进

成本上涨不是自动驾驶的 merge。IXC 标记 increases，并在它们成为新的 LCR 输入之前要求 **Telegram 确认**。降价可以更快；涨价需要人点 yes — 或同步调整卖价。

### 定价前先看 Current Routes

[Current Routes](/products/softswitch) 按目的地显示供应商、费率、量、质量以及**待生效涨价**。客户卖价应从该视图设定，而不是桌面上最后一份电子表格。

### 发给客户的费率邮件

另一半是出站：mail-ready 状态、交换机上的 pending pool、发送更新、应用 pool、confirm 标志。客户收到的是你真正载入的表 — 而不是与计费脱节的文件。

## 常见错误

- 未检查质量、也未调整卖价就应用供应商涨价
- 供应商发来 **partial** 却用了 **replace**
- 忽略 **effective date**，未来表在中午覆盖 live LCR
- 重复代码与错误前缀长度（系统性少计费 — 见 [VoIP 计费](/blog/voip-billing-softswitch)）
- IMAP 导入没有 approvals 队列

## 小结

批发费率表是 LCR 与计费的输入。从 IMAP 收取，用 Smart upload 预览，选择 merge / replace / scheduled，并在进入路由之前 **用 Telegram 确认涨价**。然后看 Current Routes，并从同一套餐推送客户价表。

见 [IXC Softswitch](/products/softswitch) 或[联系销售](/#get-in-touch)。`;

export const voipRateDeckManagementPost: BlogPost = {
  slug: 'voip-rate-deck-management',
  date: '2026-10-17',
  updated: '2026-10-17',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: [
    'voip rate deck',
    'rate sheet',
    'wholesale voip rates',
    'lcr',
    'rate import',
    'effective date',
    'softswitch'
  ],
  image: 'https://ixc.ua/blog/voip-rate-deck-management-og.jpg',
  localImage: '/blog/voip-rate-deck-management.webp',
  imageObjectFit: 'contain',
  en: {
    title: 'Rate Deck Management for Wholesale VoIP: Import, Effective Dates & Increases',
    description:
      'Wholesale VoIP rate decks: IMAP ingest, Smart upload, merge vs replace vs scheduled, effective dates, and Telegram confirm on vendor increases before LCR.',
    excerpt:
      'How trading desks get vendor XLS onto the switch — IMAP, previewed imports, effective dates, and confirm-before-apply on rate increases.',
    content: en,
    faq: [
      {
        q: 'What is a VoIP rate deck?',
        a: 'A prefix-level buy or sell price list with increments, currency, and an effective date. Vendor decks are your cost; customer decks are what you charge. LCR and billing both read these lists.'
      },
      {
        q: 'Is rate-deck management the same as VoIP billing?',
        a: 'No. Billing rates CDRs after the call. Rate-deck management is how those prices get onto the switch beforehand — ingest, preview, effective dates, and increase control.'
      },
      {
        q: 'What is the difference between merge and replace on import?',
        a: 'Merge updates only the codes in the file and leaves the rest of the live deck. Replace rebuilds the whole deck from the file. Use schedule-full-deck when the sheet must activate later without touching today.'
      },
      {
        q: 'How should vendor rate increases be applied?',
        a: 'Not on autopilot. Flag the increase, confirm (IXC uses Telegram), check quality and Current Routes, then move customer sell rates if the spread would go negative.'
      },
      {
        q: 'Can vendor sheets arrive by email?',
        a: 'Yes. IXC watches an IMAP mailbox, parses with templates, and queues rate approvals so attachments become decks without copy-paste — after preview, not instead of it.'
      }
    ]
  },
  ru: {
    title: 'Rate deck для wholesale VoIP: импорт, effective dates и повышения',
    description:
      'Тарифные листы VoIP: IMAP, Smart upload, merge vs replace vs scheduled, даты вступления и подтверждение повышений в Telegram до LCR.',
    excerpt:
      'Как торговый стол кладёт вендорский XLS на свитч — IMAP, превью импорта, effective dates и confirm до применения повышений.',
    content: ru,
    faq: [
      {
        q: 'Что такое rate deck в VoIP?',
        a: 'Прайс buy или sell по префиксам с инкрементом, валютой и датой вступления. Деки вендора — ваша себестоимость; клиентские — то, что вы продаёте. LCR и биллинг читают эти списки.'
      },
      {
        q: 'Управление деками — это то же самое, что биллинг?',
        a: 'Нет. Биллинг тарифицирует CDR после вызова. Rate-deck management — как цены попадают на свитч заранее: ingest, превью, effective dates и контроль повышений.'
      },
      {
        q: 'Чем merge отличается от replace при импорте?',
        a: 'Merge обновляет только коды из файла и не трогает остальной live-дек. Replace пересобирает весь дек из файла. Schedule full deck — если лист должен включиться позже, не трогая сегодня.'
      },
      {
        q: 'Как применять повышения тарифов вендора?',
        a: 'Не на автопилоте. Пометить increase, подтвердить (в IXC — Telegram), проверить качество и Current Routes, затем сдвинуть sell клиенту, если спред уйдёт в минус.'
      },
      {
        q: 'Могут ли листы вендора приходить почтой?',
        a: 'Да. IXC смотрит IMAP-ящик, парсит шаблонами и ставит rate approvals в очередь — вложения становятся деками без копипаста, после превью, а не вместо него.'
      }
    ]
  },
  uk: {
    title: 'Rate deck для wholesale VoIP: імпорт, effective dates і підвищення',
    description:
      'Тарифні листи VoIP: IMAP, Smart upload, merge vs replace vs scheduled, дати набрання чинності та підтвердження підвищень у Telegram до LCR.',
    excerpt:
      'Як торговий стіл кладе вендорський XLS на свіч — IMAP, прев’ю імпорту, effective dates і confirm до застосування підвищень.',
    content: uk,
    faq: [
      {
        q: 'Що таке rate deck у VoIP?',
        a: 'Прайс buy або sell за префіксами з інкрементом, валютою й датою набрання чинності. Деки вендора — ваша собівартість; клієнтські — те, що ви продаєте. LCR і білінг читають ці списки.'
      },
      {
        q: 'Керування деками — це те саме, що білінг?',
        a: 'Ні. Білінг тарифікує CDR після виклику. Rate-deck management — як ціни потрапляють на свіч заздалегідь: ingest, прев’ю, effective dates і контроль підвищень.'
      },
      {
        q: 'Чим merge відрізняється від replace під час імпорту?',
        a: 'Merge оновлює лише коди з файлу й не чіпає решту live-дека. Replace перезбирає весь дек із файлу. Schedule full deck — якщо лист має увімкнутися пізніше, не чіпаючи сьогодні.'
      },
      {
        q: 'Як застосовувати підвищення тарифів вендора?',
        a: 'Не на автопілоті. Позначити increase, підтвердити (в IXC — Telegram), перевірити якість і Current Routes, потім зсунути sell клієнту, якщо спред піде в мінус.'
      },
      {
        q: 'Чи можуть листи вендора приходити поштою?',
        a: 'Так. IXC дивиться IMAP-скриньку, парсить шаблонами й ставить rate approvals у чергу — вкладення стають деками без копіпасту, після прев’ю, а не замість нього.'
      }
    ]
  },
  zh: {
    title: '批发 VoIP 费率表管理：导入、生效日期与涨价控制',
    description:
      '批发 VoIP 费率表：IMAP 收取、Smart upload、merge/replace/scheduled、生效日期，以及在进入 LCR 前用 Telegram 确认供应商涨价。',
    excerpt:
      '交易台如何把供应商 XLS 送上交换机——IMAP、带预览的导入、生效日期，以及涨价先确认再应用。',
    content: zh,
    faq: [
      {
        q: '什么是 VoIP 费率表？',
        a: '按前缀的买入或卖出价目，含计费增量、币种与生效日期。供应商表是你的成本；客户表是你的售价。LCR 与计费都读这些清单。'
      },
      {
        q: '费率表管理等于 VoIP 计费吗？',
        a: '不等于。计费在通话后对 CDR 评级。费率表管理是这些价格事先如何上到交换机——收取、预览、生效日期与涨价控制。'
      },
      {
        q: '导入时 merge 和 replace 有何区别？',
        a: 'Merge 只更新文件中的代码，其余 live 表不动。Replace 用文件重建整张表。若价表须稍后生效且不能碰今天，用 schedule full deck。'
      },
      {
        q: '供应商涨价应如何应用？',
        a: '不要自动驾驶。标记涨价、确认（IXC 用 Telegram）、检查质量与 Current Routes，若价差将变负再调整客户卖价。'
      },
      {
        q: '供应商价表能否通过邮件到达？',
        a: '可以。IXC 监视 IMAP 邮箱，用模板解析，并将 rate approvals 排队，使附件在预览之后成为费率表，而不是跳过预览。'
      }
    ]
  }
};
