import type { BlogPost } from '../blogPosts';

const en = `A **VoIP softswitch** routes, rates, and bills every call on your network. In 2026, the next layer of margin is not more hardware — it is **AI automation** on top of the switch: fewer clicks, faster partner replies, and batch updates that used to take an hour done in minutes.

This guide explains what **AI on a softswitch** means for wholesale and retail carriers, and **how to use it** in practice — from natural-language commands and messenger integration to scheduled traffic reports pulled live from your **softswitch REST API**.

## Why add AI to a softswitch?

Carrier managers still lose hours to the same loop: partner message → open billing UI → find the right screen → copy rates or routes → reply in another app. A **softswitch** already holds routing, LCR, tariffs, balances, and CDRs. AI should read and write that data — not replace it.

With **IXC Softswitch** paired with **DealoAgent AI**, operators typically move from **5–10 accounts per manager** to **100+** on the same team — because the switch updates in batch while partners get answers on WhatsApp, Telegram, MS Teams, or email.

## What AI automation adds to your softswitch

AI does not replace your **softswitch software**. It connects to the same billing database, permissions, and APIs you already run:

- **Natural-language commands** — describe routing or rate changes; the platform applies **batch updates** across carriers without clicking through ten screens.
- **Messenger + email channels** — read partner requests and send replies on the channel they use.
- **Live softswitch data** — traffic, tops, targets, and balances from the **IXC Softswitch REST API**, not stale spreadsheets.
- **Scheduled dispatch** — daily or custom cadence for top destinations, traffic alerts, and balance notices.
- **Analytics** — commitments, traffic deltas, and target-destination reviews summarized before anything goes to a partner.

[IXC Softswitch](/products/softswitch) covers Class 4/5 routing, LCR, billing, and APIs. [AI Automation](/products/ai-automation) is the DealoAgent layer that operates it through conversation and messengers.

## How to use AI on your softswitch — step by step

### Step 1 — Connect your channels

Link the channels your carriers already use:

- **Email** (Gmail and rate-mail workflows)
- **Telegram**
- **WhatsApp**
- **Microsoft Teams**

DealoAgent reads inbound partner traffic from these channels, pulls context from **IXC Billing**, and can reply on the same thread. Your team stops copying messages into the billing UI.

### Step 2 — Issue commands in your language

Instead of navigating menus, tell the system what you need. Examples that map to real **softswitch** operations:

- *"Add India Mobile to carriers 1, 2, and 3 with today's rates."*
- *"Add terminator SipRoute-B for Cuba Mobile on carriers 1–3."*
- *"Show ASR and margin for Vietnam Mobile last 24 hours."*

The AI translates intent into **batch write-back** on IXC — routes, tariff lines, terminators, and related objects — with full read, write, and delete coverage across exposed softswitch capabilities.

### Step 3 — Handle inbound partner requests end to end

Typical flow:

- Partner asks for a rate change or new destination in **Teams** or **WhatsApp**.
- DealoAgent pulls current tariffs and routing from **IXC Softswitch**.
- Updates land on the switch in batch.
- Partner receives confirmation — e.g. *"All set — prices sent"* — on the same channel.

The **softswitch is already updated** before the reply goes out. No manual copy-paste between messenger and billing.

### Step 4 — Schedule tops, targets, and traffic reports

Set **periodic tasks** (daily or custom):

- Pull traffic and margin from the **softswitch API**
- Push **top destinations**, **target reviews**, and **balance notices** to partner channels automatically
- Run batch IXC updates first, then dispatch — no manual morning trigger

This is where API v2 (hundreds of documented routes on **IXC Billing WebV7**) matters: AI and automation need reliable, scoped access to live switch data.

### Step 5 — Use AI for analytics, not just clicks

AI handles work that used to mean Excel and tribal knowledge:

- Filling a **commitment** when a partner sends a 30-line target spreadsheet
- Summarizing traffic deltas before a commercial call
- Flagging balance thresholds before credit exposure grows

Review the summary, approve if needed, and let automation push to partners on schedule.

## Example workflows for softswitch operators

These are the workflows carriers adopt first — **analyze tops and targets from live softswitch data**, **push summaries on a schedule**, then **apply rate updates** when the numbers say so.

### Real-time top & target destination analysis

- **Old way:** Export CDR, build a pivot in Excel, compare to a commitment or target sheet, then decide what to tell the partner.
- **With AI on softswitch:** DealoAgent pulls **live traffic, top destinations, and target gaps** from the **IXC Softswitch REST API** — ASR, margin, deltas vs yesterday, balance exposure — and summarizes what needs attention **before** you open a messenger or billing screen.

### Scheduled periodic dispatch (messengers & email)

- **Old way:** Every morning — export, format, copy-paste the same traffic summary into **Telegram**, **WhatsApp**, **Teams**, or **email** for each carrier.
- **With AI on softswitch:** A **periodic task** runs on your cadence (daily, weekly, or custom). It executes against live softswitch data, builds **top destinations**, **target reviews**, and **balance notices**, and **sends automatically** to each partner on their preferred channel — no manual trigger.

### Rate update after the analysis

- **Old way:** After reviewing tops/targets offline, open the billing UI per carrier, upload or edit rates, then send a separate email or chat message.
- **With AI on softswitch:** Once analysis flags a change, one command applies **batch rate and route updates** on the **softswitch** — e.g. *"Add India Mobile to carriers 1, 2, and 3 with today's rates"* — and DealoAgent replies on the same **messenger or email** thread with confirmation and the updated sheet.

### Partner responds to a target summary

- **Old way:** Partner replies in chat with a 30-line target spreadsheet; you reconcile manually against commitments in Excel and the billing UI.
- **With AI on softswitch:** Inbound message is read from **WhatsApp**, **Telegram**, **Teams**, or **email**; AI parses targets, compares to **IXC** commitments and live traffic, proposes fill or routing changes, and dispatches the answer on the same channel.

## Who benefits most

- **Wholesale voice** operators with many originator/terminator relationships
- **Retail VoIP** providers answering daily rate and routing questions
- **SMS carriers** with parallel commercial load (where IXC SMS modules apply)
- Teams that want **one manager per 100+ accounts** instead of 5–10

## Getting started with IXC Softswitch + DealoAgent

- Run **IXC Softswitch** (or upgrade to current **V6** / **WebV7** billing UI).
- Enable **AI Automation** and connect DealoAgent to your messenger and email accounts.
- Map permissions so AI uses the same roles and billing scope as your NOC.
- Start with one workflow — **scheduled top & target dispatch** to messengers, then add real-time analysis and batch rate updates.

Request a demo or upgrade planning: **sales@ixc.ua** · **noc@ixc.ua**

## Summary

A **softswitch** is still the system of record for routing and billing. **AI automation** is how modern carriers operate it: commands in your language, partners on their preferred channel, and live data from the switch — not duplicate spreadsheets. If you are evaluating **softswitch software** in 2026, ask how open the **REST API** is and whether AI can run batch updates safely on top of your existing permissions.

[Explore IXC Softswitch](/products/softswitch) · [AI Automation overview](/products/ai-automation) · [June 2026 product update](/news/ixc-june-2026-update)`;

const ru = `**VoIP-софтсвитч** маршрутизирует, тарифицирует и биллит каждый вызов в сети. В 2026 году следующий слой маржи — не железо, а **AI-автоматизация** поверх свитча: меньше кликов, быстрее ответы партнёрам и пакетные изменения за минуты вместо часа.

Этот материал объясняет, что значит **AI на софтсвитче** для оптовых и розничных операторов, и **как использовать** его на практике — от команд на родном языке и интеграции мессенджеров до расписания отчётов по трафику из **REST API софтсвитча**.

## Зачем AI на софтсвитче?

Менеджеры теряют часы на цикл: сообщение партнёра → биллинг → нужный экран → копирование тарифов → ответ в другом приложении. **Софтсвитч** уже хранит маршруты, LCR, тарифы, балансы и CDR. AI должен читать и писать эти данные — не заменять платформу.

С **IXC Softswitch** и **DealoAgent AI** команда часто переходит от **5–10 контрактов на менеджера** к **100+** при том же штате.

## Что даёт AI-автоматизация

AI не заменяет **софтсвитч**. Он работает с той же БД биллинга, правами и API:

- **Команды на языке** — пакетные изменения маршрутов и тарифов без десяти экранов UI.
- **Мессенджеры и email** — чтение запросов и ответы в канале партнёра.
- **Живые данные свитча** — трафик, tops, targets, балансы из **REST API IXC Softswitch**.
- **Расписание** — ежедневная или кастомная рассылка top destinations, алертов и балансов.
- **Аналитика** — commitments, дельты трафика, разбор targets до отправки партнёру.

[IXC Softswitch](/products/softswitch) — маршрутизация, LCR, биллинг, API. [AI-автоматизация](/products/ai-automation) — слой DealoAgent для работы через диалог и мессенджеры.

## Как использовать AI — по шагам

### Шаг 1 — Подключите каналы

- **Email**, **Telegram**, **WhatsApp**, **Microsoft Teams**

DealoAgent читает входящие запросы, берёт контекст из **IXC Billing** и отвечает в том же канале.

### Шаг 2 — Команды на родном языке

Примеры реальных операций на **софтсвитче**:

- *«Добавить India Mobile операторам 1, 2 и 3 по сегодняшним тарифам.»*
- *«Добавить терминатор SipRoute-B для Cuba Mobile на carriers 1–3.»*
- *«Показать ASR и маржу по Vietnam Mobile за 24 часа.»*

AI переводит намерение в **пакетную запись** в IXC.

### Шаг 3 — Входящие запросы партнёров

- Партнёр пишет в **Teams** или **WhatsApp**
- DealoAgent берёт тарифы и маршруты из **IXC Softswitch**
- Изменения применяются пакетом
- Партнёр получает *«Готово — цены отправлены»* в том же канале

### Шаг 4 — Расписание tops, targets и трафика

- Данные из **API софтсвитча**
- Автоотправка **top destinations**, **targets** и **балансов**
- Сначала пакетные изменения в IXC, затем рассылка

### Шаг 5 — Аналитика

- Заполнение **commitment** по Excel на 30 строк от партнёра
- Сводки дельт трафика до коммерческого звонка
- Пороги баланса до роста кредитного риска

## Примеры workflow

Типичный порядок внедрения: **анализ tops и targets по живым данным софтсвитча** → **рассылка по расписанию в мессенджеры и email** → **обновление тарифов**, когда цифры это требуют.

### Анализ top & target destinations в реальном времени

- **Вручную:** Экспорт CDR, сводная в Excel, сравнение с commitment, затем решение что писать партнёру.
- **С AI на софтсвитче:** DealoAgent берёт **живой трафик, top destinations и разрывы по targets** из **REST API IXC Softswitch** — ASR, маржа, дельты, баланс — и формирует сводку **до** мессенджера или биллинга.

### Периодическая рассылка (мессенджеры и email)

- **Вручную:** Каждое утро — экспорт, форматирование, копипаст одной и той же сводки в **Telegram**, **WhatsApp**, **Teams** или **email** по каждому carrier.
- **С AI на софтсвитче:** **Периодическая задача** по расписанию (ежедневно, еженедельно или свой цикл) читает данные со свитча, собирает **top destinations**, **разбор targets** и **уведомления по балансу** и **отправляет автоматически** в канал каждого партнёра.

### Обновление тарифов после анализа

- **Вручную:** После разбора tops/targets — отдельно биллинг по каждому carrier, правка тарифов, отдельное письмо или чат.
- **С AI на софтсвитче:** Когда анализ показал изменение — одна команда делает **пакетное обновление тарифов и маршрутов** на софтсвитче, DealoAgent отвечает в том же **мессенджере или email** с подтверждением и актуальным листом.

### Ответ партнёра на сводку по targets

- **Вручную:** Партнёр присылает Excel на 30 строк; вы сверяете commitment вручную с биллингом.
- **С AI на софтсвитче:** Входящее из **WhatsApp**, **Telegram**, **Teams** или **email**; AI разбирает targets, сравнивает с **IXC** и трафиком, предлагает fill или маршрут, отвечает в том же канале.

## С чего начать

- **IXC Softswitch** (или апгрейд до **V6** / **WebV7**).
- Включить **AI-автоматизацию**, подключить DealoAgent к мессенджерам и почте.
- Настроить права как у NOC.
- Начать с одного сценария — **рассылка top & target по расписанию** в мессенджеры, затем анализ в реальном времени и пакетные тарифы.

**sales@ixc.ua** · **noc@ixc.ua**

## Итог

**Софтсвитч** — система учёта маршрутов и биллинга. **AI** — способ управлять им в 2026: команды на языке, партнёры в своём канале, живые данные со свитча. При выборе **софтсвитча** спрашивайте про **REST API** и безопасные пакетные изменения поверх текущих прав.

[IXC Softswitch](/products/softswitch) · [AI-автоматизация](/products/ai-automation) · [Обновление за июнь 2026](/news/ixc-june-2026-update)`;

const uk = `**VoIP-софтсвіч** маршрутизує, тарифікує та білить кожен виклик у мережі. У 2026 році наступний шар маржі — не залізо, а **AI-автоматизація** поверх свічу: менше кліків, швидші відповіді партнерам і пакетні зміни за хвилини замість години.

Цей матеріал пояснює, що означає **AI на софтсвічі** для оптових і роздрібних операторів, і **як використовувати** його на практиці — від команд рідною мовою та інтеграції месенджерів до розкладу звітів по трафіку з **REST API софтсвітча**.

## Навіщо AI на софтсвічі?

Менеджери втрачають години на цикл: повідомлення партнера → білінг → потрібний екран → копіювання тарифів → відповідь в іншому додатку. **Софтсвіч** уже зберігає маршрути, LCR, тарифи, баланси та CDR. AI має читати й писати ці дані — не замінювати платформу.

З **IXC Softswitch** і **DealoAgent AI** команда часто переходить від **5–10 контрактів на менеджера** до **100+** за той самий штат.

## Що дає AI-автоматизація

AI не замінює **софтсвіч**. Він працює з тією ж БД білінгу, правами та API:

- **Команди мовою** — пакетні зміни маршрутів і тарифів без десяти екранів UI.
- **Месенджери та email** — читання запитів і відповіді в каналі партнера.
- **Живі дані свічу** — трафік, tops, targets, баланси з **REST API IXC Softswitch**.
- **Розклад** — щоденна або кастомна розсилка top destinations, алертів і балансів.
- **Аналітика** — commitments, дельти трафіку, розбір targets до відправки партнеру.

[IXC Softswitch](/products/softswitch) — маршрутизація, LCR, білінг, API. [AI-автоматизація](/products/ai-automation) — шар DealoAgent для роботи через діалог і месенджери.

## Як використовувати AI — покроково

### Крок 1 — Підключіть канали

- **Email**, **Telegram**, **WhatsApp**, **Microsoft Teams**

DealoAgent читає вхідні запити, бере контекст з **IXC Billing** і відповідає в тому ж каналі.

### Крок 2 — Команди рідною мовою

Приклади реальних операцій на **софтсвічі**:

- *«Додати India Mobile операторам 1, 2 і 3 за сьогоднішніми тарифами.»*
- *«Додати термінатор SipRoute-B для Cuba Mobile на carriers 1–3.»*
- *«Показати ASR і маржу по Vietnam Mobile за 24 години.»*

AI перекладає намір у **пакетний запис** в IXC.

### Крок 3 — Вхідні запити партнерів

- Партнер пише в **Teams** або **WhatsApp**
- DealoAgent бере тарифи та маршрути з **IXC Softswitch**
- Зміни застосовуються пакетом
- Партнер отримує *«Готово — ціни надіслано»* у тому ж каналі

### Крок 4 — Розклад tops, targets і трафіку

- Дані з **API софтсвітча**
- Автовідправка **top destinations**, **targets** і **балансів**
- Спочатку пакетні зміни в IXC, потім розсилка

### Крок 5 — Аналітика

- Заповнення **commitment** за Excel на 30 рядків від партнера
- Зведення дельт трафіку до комерційного дзвінка
- Пороги балансу до зростання кредитного ризику

## Приклади workflow

Типовий порядок впровадження: **аналіз tops і targets за живими даними софтсвітча** → **розсилка за розкладом у месенджери та email** → **оновлення тарифів**, коли цифри цього вимагають.

### Аналіз top & target destinations у реальному часі

- **Вручну:** Експорт CDR, зведена в Excel, порівняння з commitment, потім рішення що писати партнеру.
- **З AI на софтсвічі:** DealoAgent бере **живий трафік, top destinations і розриви по targets** з **REST API IXC Softswitch** — ASR, маржа, дельти, баланс — і формує зведення **до** месенджера чи білінгу.

### Періодична розсилка (месенджери та email)

- **Вручну:** Щоранку — експорт, форматування, копіпаст однієї зведення в **Telegram**, **WhatsApp**, **Teams** або **email** для кожного carrier.
- **З AI на софтсвічі:** **Періодична задача** за розкладом (щодня, щотижня або свій цикл) читає дані зі свічу, збирає **top destinations**, **розбір targets** і **сповіщення по балансу** і **надсилає автоматично** в канал кожного партнера.

### Оновлення тарифів після аналізу

- **Вручну:** Після розбору tops/targets — окремо білінг по кожному carrier, правка тарифів, окремий лист або чат.
- **З AI на софтсвічі:** Коли аналіз показав зміну — одна команда робить **пакетне оновлення тарифів і маршрутів** на софтсвічі, DealoAgent відповідає в тому ж **месенджері або email** з підтвердженням і актуальним листом.

### Відповідь партнера на зведення по targets

- **Вручну:** Партнер надсилає Excel на 30 рядків; ви звіряєте commitment вручну з білінгом.
- **З AI на софтсвічі:** Вхідне з **WhatsApp**, **Telegram**, **Teams** або **email**; AI розбирає targets, порівнює з **IXC** і трафіком, пропонує fill або маршрут, відповідає в тому ж каналі.

## З чого почати

- **IXC Softswitch** (або апгрейд до **V6** / **WebV7**).
- Увімкнути **AI-автоматизацію**, підключити DealoAgent до месенджерів і пошти.
- Налаштувати права як у NOC.
- Почати з одного сценарію — **розсилка top & target за розкладом** у месенджери, потім аналіз у реальному часі та пакетні тарифи.

**sales@ixc.ua** · **noc@ixc.ua**

## Підсумок

**Софтсвіч** — система обліку маршрутів і білінгу. **AI** — спосіб керувати ним у 2026: команди мовою, партнери у своєму каналі, живі дані зі свічу. Обираючи **софтсвіч**, питайте про **REST API** і безпечні пакетні зміни поверх поточних прав.

[IXC Softswitch](/products/softswitch) · [AI-автоматизація](/products/ai-automation) · [Оновлення за червень 2026](/news/ixc-june-2026-update)`;

export const softswitchAiAutomationPost: BlogPost = {
  slug: 'softswitch-ai-automation',
  date: '2026-07-06',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: [
    'softswitch',
    'voip softswitch',
    'softswitch software',
    'ai automation',
    'dealoagent',
    'wholesale voip',
    'carrier voip',
  ],
  image: 'https://ixc.ua/blog/softswitch-ai-automation.png',
  localImage: '/blog/softswitch-ai-automation.png',
  imageObjectFit: 'contain',
  en: {
    title: 'VoIP Softswitch AI: How to Use AI Automation on Your Carrier Switch (2026)',
    description:
      'How to use AI on a VoIP softswitch: natural-language batch updates, WhatsApp/Telegram/Teams integration, scheduled traffic reports, and IXC + DealoAgent workflows.',
    excerpt:
      'Practical guide to AI on a VoIP softswitch — commands, messenger integration, scheduled tops/targets from the REST API, and how carriers scale to 100+ accounts per manager.',
    content: en,
    faq: [
      {
        q: 'Can AI replace a VoIP softswitch?',
        a: 'No. AI automation operates on top of your softswitch — it reads and writes routing, tariffs, and balances through APIs while the switch remains the system of record.',
      },
      {
        q: 'What channels does softswitch AI automation support?',
        a: 'IXC ↔ DealoAgent supports email, Telegram, WhatsApp, and Microsoft Teams for inbound partner requests and outbound replies.',
      },
      {
        q: 'How do natural-language commands work on a softswitch?',
        a: 'You describe the change in plain language; the AI translates it into batch updates on IXC Softswitch — routes, rates, terminators — without navigating multiple billing screens.',
      },
      {
        q: 'What softswitch data can AI pull automatically?',
        a: 'Traffic, top destinations, targets, balances, ASR/ACD metrics, and commitment context via the IXC Softswitch REST API — for scheduled reports or on-demand replies.',
      },
      {
        q: 'How many carrier accounts can one manager handle with AI?',
        a: 'Manual workflows often limit managers to 5–10 accounts; AI automation on IXC + DealoAgent is designed to support 100+ accounts per manager on the same team.',
      },
    ],
  },
  ru: {
    title: 'AI на софтсвитче VoIP: как использовать автоматизацию на carrier switch (2026)',
    description:
      'Как использовать AI на VoIP-софтсвитче: пакетные команды, WhatsApp/Telegram/Teams, расписание отчётов по трафику и workflow IXC + DealoAgent.',
    excerpt:
      'Практическое руководство по AI на софтсвитче — команды, мессенджеры, tops/targets из REST API и масштаб до 100+ контрактов на менеджера.',
    content: ru,
    faq: [
      {
        q: 'Может ли AI заменить VoIP-софтсвитч?',
        a: 'Нет. AI работает поверх софтсвитча — читает и пишет маршруты, тарифы и балансы через API, а свитч остаётся системой учёта.',
      },
      {
        q: 'Какие каналы поддерживает AI-автоматизация?',
        a: 'IXC ↔ DealoAgent: email, Telegram, WhatsApp и Microsoft Teams для входящих запросов и исходящих ответов.',
      },
      {
        q: 'Как работают команды на естественном языке?',
        a: 'Вы описываете изменение; AI переводит его в пакетные обновления IXC Softswitch без навигации по множеству экранов биллинга.',
      },
      {
        q: 'Какие данные софтсвитча AI может брать автоматически?',
        a: 'Трафик, top destinations, targets, балансы, ASR/ACD и контекст commitments через REST API IXC Softswitch.',
      },
      {
        q: 'Сколько контрактов на менеджера с AI?',
        a: 'Вручную часто 5–10; с AI на IXC + DealoAgent — ориентир 100+ контрактов на менеджера.',
      },
    ],
  },
  uk: {
    title: 'AI на софтсвічі VoIP: як використовувати автоматизацію на carrier switch (2026)',
    description:
      'Як використовувати AI на VoIP-софтсвічі: пакетні команди, WhatsApp/Telegram/Teams, розклад звітів по трафіку та workflow IXC + DealoAgent.',
    excerpt:
      'Практичний посібник з AI на софтсвічі — команди, месенджери, tops/targets з REST API і масштаб до 100+ контрактів на менеджера.',
    content: uk,
    faq: [
      {
        q: 'Чи може AI замінити VoIP-софтсвіч?',
        a: 'Ні. AI працює поверх софтсвітча — читає й пише маршрути, тарифи та баланси через API, а свіч залишається системою обліку.',
      },
      {
        q: 'Які канали підтримує AI-автоматизація?',
        a: 'IXC ↔ DealoAgent: email, Telegram, WhatsApp і Microsoft Teams для вхідних запитів і вихідних відповідей.',
      },
      {
        q: 'Як працюють команди природною мовою?',
        a: 'Ви описуєте зміну; AI перекладає її в пакетні оновлення IXC Softswitch без навігації багатьма екранами білінгу.',
      },
      {
        q: 'Які дані софтсвітча AI може брати автоматично?',
        a: 'Трафік, top destinations, targets, баланси, ASR/ACD і контекст commitments через REST API IXC Softswitch.',
      },
      {
        q: 'Скільки контрактів на менеджера з AI?',
        a: 'Вручну часто 5–10; з AI на IXC + DealoAgent — орієнтир 100+ контрактів на менеджера.',
      },
    ],
  },
};
