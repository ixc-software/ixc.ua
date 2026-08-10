import type { BlogPost } from '../blogPosts';

const en = `Organised **voice recordings** on [IXC Softswitch](/products/softswitch) and in [IXC Billing 7](/blog/ixc-recording) unlock the next layer IXC delivers to clients: **AI call analysis** on **post-recorded** media — traffic-profile reports, coaching insight, voice quality, and FAS/voicemail detection after the call is stored.

This is an **IXC service**, end to end inside your platform. You **mark the calls**, send them for analysis, and receive an **automatic report back in IXC**.

See also the [IXC Recording product announcement](/news/ixc-recording).

## How the client workflow works

1. **Record** — Softswitch captures audio for the traffic you enable; Billing 7 keeps the archive findable.
2. **Mark** — Select calls or batches: coaching samples, suspect prefixes, a day’s wholesale dump, or a compliance set.
3. **Send from IXC** — Submit marked media for analysis without leaving the platform.
4. **Get the report in IXC** — Results return automatically — ready for commercial, NOC, and quality teams.

Same switch. Same billing UI. Analysis as a managed IXC deliverable on **recorded** audio.

## Why recordings come first

Without a structured archive, analysis never scales: you cannot score conversations, classify traffic, or train FAS/voicemail models if every Call-ID is a hunt on disk.

With **IXC Recording**, media is browseable by hour, searchable, and reachable from Originator/Terminator reports. That same store is what you mark and send for post-recorded ML review.

## High-level traffic report — deep profile insights

Beyond single-call coaching, IXC analysis returns a **high-level traffic report** built from ML/AI transcription review across the marked batch:

- **Traffic profile** — what mix are you really carrying?
- **Call-centre** patterns — agent/customer dialogue, hold, scripted openers
- **Scam / social-engineering** cues in speech and transcript
- **Gambling / casino** and other vertical markers
- **Adult / high-risk** content signals where relevant
- Other verticals your commercial team cares about

Transcription + ML review turns a pile of CDRs into a readable profile of the voice you terminate or originate — **know your traffic**, and you sell it more competitively.

## Voice quality — hear the real line

The report also surfaces **real voice quality** from the media itself — not only signalling metrics:

- Speech clarity and usable (“cleared”) minutes vs total duration
- Noise, one-way audio, dead air, and clipped speech patterns
- Codec / media issues that explain poor ACD without blaming the route alone

Useful for wholesale quality disputes and for deciding which suppliers deserve traffic.

## Sample analysis report — what clients get back

Example insight from an IXC call-analysis run on recorded call-centre traffic:

### Volume & coverage

- **1,217** calls analysed
- **2,154.1** total minutes (**1,596.5** speech-only / “cleared” minutes)
- **12** unique agent voiceprints
- Dominant language on both legs (example run: Czech)
- Transcriptions for customer and agent sides

### Emotion & coaching

Customer emotion mix (share of labeled moods above 10%):

- **Happy — 35.2%** → mine winning phrases; propagate into scripts
- **Neutral — 27.2%** → biggest upside: discovery, mirroring, closing cues that convert neutral → happy
- **Sad — 22.2%** → diagnose root causes (delivery, pricing, hold time) and target coaching

Score = **0.60 × transcript sentiment + 0.40 × customer mood**. *Satisfied* when Score ≥ **0.60**.

Team snapshot:

- Top satisfaction rate: **agent_13 — 38.9%**
- Highest customer speech-only talk: **agent_2 — 136.2 min**
- Best average score: **agent_5 — 0.54**

### Post-detections in the same report

- **FAS / false-answer** candidates flagged on stored media
- **Voicemail / IVR / non-human** answer candidates
- **Speech fingerprints** of those detections — stored so ML can recognise the same patterns later on new recordings
- Supplier / prefix rollups when FAS or voicemail rates climb in the batch

> Immediate playbook: convert even half of neutral to happy → measurable CSAT/NPS uplift without extra headcount — while the same report feeds fraud and quality fingerprint libraries.

## Post-recorded FAS & voicemail detection (+ fingerprints)

Wholesale and retail still lose money to:

- **FAS (False Answer Supervision)** — billed “answered” media that is not a real conversation
- **Voicemail / IVR dumps** — answered channels that never reach a human

IXC analysis works on **post-recorded** calls (the media already in Recording):

- Detect FAS and voicemail signatures on the stored audio
- **Mark** those detections on the call
- Extract a **speech fingerprint** for each FAS/voicemail pattern
- Reuse fingerprints so later batches (and future detectors) recognise the same audio signatures faster

Evidence stays next to the call in IXC — same habit as PCAP — without claiming live in-call disconnect in this layer.

## On-demand detections — what clients ask for

Analysis is not a fixed checklist. Clients request **on-demand detections** for the issues they actually need, for example:

- Custom traffic-profile labels (branded scam packs, local verticals, competitor scripts)
- Prohibited phrases, risky promises, compliance packs per market
- Language / dialect mix on a destination
- Agent interruption rate, hold-time speech, script drift
- One-way audio or silence thresholds for a specific supplier
- Fingerprint packs for known FAS or voicemail banks in a region

Tell IXC what to look for; mark the sample set; get the report back in the platform.

## Call-centre traffic — possible next features

For call-centre flows, transcripts unlock more than coaching scores. One high-value path:

- **SMS post-call campaigns** — messages generated from the call transcript, **100% personalised**, that **follow the call** (offer, reminder, next step, satisfaction ask — tied to what was actually said)
- Triggered after the conversation ends, not generic blast templates
- Same Recording + analysis stack: mark the traffic, get transcript insight, then act on the outcome

## Who benefits

- **Call centres** — CSAT/NPS coaching from emotion and transcript scores; path to personalised SMS follow-ups after each call
- **Traffic-profile / commercial** — high-level reports that classify scam, gambling, casino, call-centre, and other verticals from ML transcription review
- **Wholesale NOC / quality** — post-recorded FAS and voicemail marks, voice-quality insight, supplier rollups
- **Compliance** — searchable transcripts and audit-friendly evidence
- **Routing / fraud teams** — growing fingerprint libraries from marked detections for later ML matching

## How the pieces fit

- [IXC Softswitch](/products/softswitch) — captures and stores media when recording is enabled
- [IXC Recording](/blog/ixc-recording) — Billing 7 archive you mark and send from
- **IXC call analysis** — post-recorded ML reports: traffic profile, coaching, voice quality, FAS/voicemail marks + fingerprints, on-demand detections

## Summary

**IXC Recording** stores the audio. **IXC call analysis** reviews it after the fact: mark calls, get automatic reports — traffic profile, coaching, real voice quality, and post-recorded FAS/voicemail detections with speech fingerprints for later ML. Custom detections on demand for what each client needs. For call-centre traffic, transcripts also open **personalised SMS post-call campaigns** that follow the conversation. Start with recording on Billing **7.0.90+**, then analyse the same files from inside IXC.`;

const ru = `Организованные **голосовые записи** на [IXC Softswitch](/products/softswitch) и в [IXC Billing 7](/blog/ixc-recording) открывают следующий слой, который IXC даёт клиентам: **AI-анализ звонков** по **уже записанному** медиа — отчёты профиля трафика, коучинг, качество голоса и детекция FAS/голосовой почты после сохранения вызова.

Это **сервис IXC** целиком внутри платформы. Вы **отмечаете вызовы**, отправляете на анализ и получаете **автоматический отчёт обратно в IXC**.

См. также [анонс IXC Recording](/news/ixc-recording).

## Как работает workflow клиента

1. **Запись** — софтсвитч пишет аудио выбранного трафика; Billing 7 держит архив находимым.
2. **Отметить** — выборка: коучинг, подозрительные префиксы, дневной wholesale-дамп, compliance-набор.
3. **Отправить из IXC** — передайте отмеченное медиа на анализ, не покидая платформу.
4. **Получить отчёт в IXC** — результат возвращается автоматически — для коммерции, NOC и качества.

Тот же свитч. Тот же UI. Анализ как управляемая поставка IXC по **записанному** аудио.

## Почему сначала записи

Без структурированного архива анализ не масштабируется: нельзя скорить разговоры, классифицировать трафик или обучать модели FAS/voicemail, если каждый Call-ID — охота на диске.

С **IXC Recording** медиа доступны по часам, через поиск и из отчётов. Этот же склад вы отмечаете и отправляете на post-recorded ML-разбор.

## Высокоуровневый отчёт по трафику — глубокий профиль

Помимо коучинга по отдельным звонкам, анализ IXC возвращает **high-level traffic report** на основе ML/AI-разбора транскриптов по отмеченной выборке:

- **Профиль трафика** — что вы реально несёте?
- Паттерны **call-centre** — диалог агент/клиент, hold, скриптовые открывашки
- Признаки **scam / social-engineering** в речи и транскрипте
- Маркеры **gambling / casino** и других вертикалей
- Сигналы **adult / high-risk**, где это важно
- Другие вертикали, важные вашей коммерции

Транскрипция + ML превращает кучу CDR в читаемый профиль голоса, который вы терминируете или оригинате — **знайте свой трафик**, и продавайте его конкурентоспособнее.

## Качество голоса — реальная линия

Отчёт также показывает **реальное качество голоса** из медиа — не только signalling:

- Разборчивость и usable («очищенные») минуты vs общая длительность
- Шум, one-way, dead air, обрезанная речь
- Проблемы кодека / медиа, которые объясняют плохой ACD без обвинения маршрута

Для wholesale-споров по качеству и выбора поставщиков.

## Пример отчёта анализа — что получает клиент

Пример инсайта из прогона анализа IXC на записанном call-centre трафике:

### Объём и покрытие

- **1 217** проанализированных вызовов
- **2 154,1** минут всего (**1 596,5** speech-only / «очищенных»)
- **12** уникальных voiceprint агентов
- Доминирующий язык на обоих плечах (в примере: чешский)
- Транскрипции клиента и агента

### Эмоции и коучинг

Эмоции клиента (доля >10%):

- **Happy — 35,2%** → вытаскивать выигрышные фразы в скрипты
- **Neutral — 27,2%** → upside: discovery, mirroring, closing → happy
- **Sad — 22,2%** → причины (доставка, цена, hold) и коучинг

Score = **0,60 × sentiment + 0,40 × mood**. *Satisfied* при Score ≥ **0,60**.

Снимок команды:

- Лучший satisfaction: **agent_13 — 38,9%**
- Больше речи клиента: **agent_2 — 136,2 мин**
- Лучший средний score: **agent_5 — 0,54**

### Post-detections в том же отчёте

- Кандидаты **FAS / ложного ответа** на сохранённом медиа
- Кандидаты **voicemail / IVR / нечеловеческого** ответа
- **Speech fingerprints** этих детекций — чтобы ML узнавал те же паттерны на новых записях
- Сводки по поставщикам / префиксам при росте FAS или voicemail в выборке

> Плейбук: перевести половину neutral в happy → рост CSAT/NPS — и тот же отчёт пополняет библиотеки fingerprint для фрода и качества.

## Post-recorded детекция FAS и voicemail (+ fingerprints)

Wholesale и retail теряют деньги на:

- **FAS** — «отвеченный» медиа без реального разговора
- **Voicemail / IVR** — отвеченные каналы без человека

Анализ IXC работает по **уже записанным** вызовам (медиа в Recording):

- Детект сигнатур FAS и voicemail на сохранённом аудио
- **Пометить** детекции на вызове
- Снять **speech fingerprint** каждого паттерна FAS/voicemail
- Переиспользовать fingerprints на следующих выборках (и в будущих детекторах)

Доказательства остаются рядом с вызовом в IXC — как PCAP — без заявки на live disconnect в этом слое.

## On-demand детекции — что просят клиенты

Анализ — не жёсткий чеклист. Клиенты заказывают **on-demand детекции** под свои задачи, например:

- Свои метки профиля трафика (локальные scam-паки, вертикали, скрипты конкурентов)
- Запрещённые фразы, рискованные обещания, compliance-пакеты по рынкам
- Языковой / диалектный микс на направлении
- Interruptions агента, речь на hold, drift скрипта
- Пороги one-way / тишины для конкретного поставщика
- Fingerprint-паки известных FAS или voicemail-банков региона

Скажите IXC, что искать; отметьте выборку; получите отчёт в платформе.

## Call-centre трафик — возможные следующие функции

Для call-centre потоков транскрипты дают больше, чем коучинг. Один сильный сценарий:

- **SMS post-call кампании** — сообщения по транскрипту звонка, **на 100% персонализированные**, которые **следуют за звонком** (офер, напоминание, следующий шаг, опрос удовлетворённости — по тому, что реально сказали)
- Запуск после окончания разговора, а не generic blast-шаблоны
- Тот же стек Recording + анализ: отметьте трафик, получите инсайт по транскрипту, затем действуйте по итогу

## Кому это нужно

- **Call centres** — CSAT/NPS-коучинг по эмоциям и транскриптам; путь к персонализированным SMS follow-up после каждого звонка
- **Профиль трафика / коммерция** — high-level отчёты: scam, gambling, casino, call-centre и другие вертикали из ML-разбора транскриптов
- **Wholesale NOC / качество** — post-recorded метки FAS и voicemail, качество голоса, сводки по поставщикам
- **Compliance** — searchable транскрипты и evidence
- **Routing / fraud** — растущие библиотеки fingerprints с помеченных детекций для последующего ML

## Как стыкуются части

- [IXC Softswitch](/products/softswitch) — пишет и хранит медиа при включённой записи
- [IXC Recording](/blog/ixc-recording) — архив Billing 7, из которого отмечаете и отправляете
- **Анализ звонков IXC** — post-recorded ML-отчёты: профиль трафика, коучинг, качество голоса, метки FAS/voicemail + fingerprints, on-demand детекции

## Итог

**IXC Recording** хранит аудио. **Анализ звонков IXC** разбирает его после записи: отметьте вызовы, получите автоматические отчёты — профиль трафика, коучинг, реальное качество голоса и post-recorded FAS/voicemail с speech fingerprints для дальнейшего ML. Кастомные детекции по запросу клиента. Для call-centre трафика транскрипты также открывают **персонализированные SMS post-call кампании**, которые следуют за разговором. Начните с записи в Billing **7.0.90+**, затем анализируйте те же файлы внутри IXC.`;

const uk = `Організовані **голосові записи** на [IXC Softswitch](/products/softswitch) і в [IXC Billing 7](/blog/ixc-recording) відкривають наступний шар, який IXC дає клієнтам: **AI-аналіз дзвінків** за **вже записаним** медіа — звіти профілю трафіку, коучинг, якість голосу та детекція FAS/голосової пошти після збереження виклику.

Це **сервіс IXC** цілком усередині платформи. Ви **позначаєте виклики**, надсилаєте на аналіз і отримуєте **автоматичний звіт назад в IXC**.

Див. також [анонс IXC Recording](/news/ixc-recording).

## Як працює workflow клієнта

1. **Запис** — софтсвіч пише аудіо обраного трафіку; Billing 7 тримає архів знаходимим.
2. **Позначити** — вибірка: коучинг, підозрілі префікси, денний wholesale-дамп, compliance-набір.
3. **Надіслати з IXC** — передайте позначене медіа на аналіз, не покидаючи платформу.
4. **Отримати звіт в IXC** — результат повертається автоматично — для комерції, NOC і якості.

Той самий свіч. Той самий UI. Аналіз як керована поставка IXC за **записаним** аудіо.

## Чому спочатку записи

Без структурованого архіву аналіз не масштабується: не можна скорити розмови, класифікувати трафік чи навчати моделі FAS/voicemail, якщо кожен Call-ID — полювання на диску.

З **IXC Recording** медіа доступні за годинами, через пошук і зі звітів. Цей самий склад ви позначаєте й надсилаєте на post-recorded ML-розбір.

## Високорівневий звіт по трафіку — глибокий профіль

Окрім коучингу по окремих дзвінках, аналіз IXC повертає **high-level traffic report** на основі ML/AI-розбору транскриптів по позначеній вибірці:

- **Профіль трафіку** — що ви реально несете?
- Патерни **call-centre** — діалог агент/клієнт, hold, скриптові відкривачки
- Ознаки **scam / social-engineering** у мові й транскрипті
- Маркери **gambling / casino** та інших вертикалей
- Сигнали **adult / high-risk**, де це важливо
- Інші вертикалі, важливі вашій комерції

Транскрипція + ML перетворює купу CDR на читабельний профіль голосу, який ви термінуєте чи оригінуєте — **знайте свій трафік**, і продавайте його конкурентоспроможніше.

## Якість голосу — реальна лінія

Звіт також показує **реальну якість голосу** з медіа — не лише signalling:

- Розбірливість і usable («очищені») хвилини vs загальна тривалість
- Шум, one-way, dead air, обрізана мова
- Проблеми кодека / медіа, що пояснюють поганий ACD без звинувачення маршруту

Для wholesale-суперечок щодо якості та вибору постачальників.

## Приклад звіту аналізу — що отримує клієнт

Приклад інсайту з прогону аналізу IXC на записаному call-centre трафіку:

### Обсяг і покриття

- **1 217** проаналізованих викликів
- **2 154,1** хвилин загалом (**1 596,5** speech-only / «очищених»)
- **12** унікальних voiceprint агентів
- Домінантна мова на обох плечах (у прикладі: чеська)
- Транскрипції клієнта й агента

### Емоції та коучинг

Емоції клієнта (частка >10%):

- **Happy — 35,2%** → витягувати виграшні фрази в скрипти
- **Neutral — 27,2%** → upside: discovery, mirroring, closing → happy
- **Sad — 22,2%** → причини (доставка, ціна, hold) і коучинг

Score = **0,60 × sentiment + 0,40 × mood**. *Satisfied* при Score ≥ **0,60**.

Знімок команди:

- Найкращий satisfaction: **agent_13 — 38,9%**
- Більше мови клієнта: **agent_2 — 136,2 хв**
- Найкращий середній score: **agent_5 — 0,54**

### Post-detections у тому ж звіті

- Кандидати **FAS / хибної відповіді** на збереженому медіа
- Кандидати **voicemail / IVR / нелюдської** відповіді
- **Speech fingerprints** цих детекцій — щоб ML впізнавав ті самі патерни на нових записах
- Зведення за постачальниками / префіксами при зростанні FAS чи voicemail у вибірці

> Плейбук: перевести половину neutral у happy → зростання CSAT/NPS — і той самий звіт поповнює бібліотеки fingerprint для фроду й якості.

## Post-recorded детекція FAS і voicemail (+ fingerprints)

Wholesale і retail втрачають гроші на:

- **FAS** — «відповідене» медіа без реальної розмови
- **Voicemail / IVR** — відповідені канали без людини

Аналіз IXC працює за **вже записаними** викликами (медіа в Recording):

- Детект сигнатур FAS і voicemail на збереженому аудіо
- **Позначити** детекції на виклику
- Зняти **speech fingerprint** кожного патерну FAS/voicemail
- Повторно використовувати fingerprints на наступних вибірках (і в майбутніх детекторах)

Докази лишаються поруч із викликом в IXC — як PCAP — без заяви про live disconnect у цьому шарі.

## On-demand детекції — що просять клієнти

Аналіз — не жорсткий чекліст. Клієнти замовляють **on-demand детекції** під свої задачі, наприклад:

- Власні мітки профілю трафіку (локальні scam-паки, вертикалі, скрипти конкурентів)
- Заборонені фрази, ризикові обіцянки, compliance-пакети за ринками
- Мовний / діалектний мікс на напрямку
- Interruptions агента, мова на hold, drift скрипта
- Пороги one-way / тиші для конкретного постачальника
- Fingerprint-паки відомих FAS або voicemail-банків регіону

Скажіть IXC, що шукати; позначте вибірку; отримайте звіт у платформі.

## Call-centre трафік — можливі наступні функції

Для call-centre потоків транскрипти дають більше, ніж коучинг. Один сильний сценарій:

- **SMS post-call кампанії** — повідомлення за транскриптом дзвінка, **на 100% персоналізовані**, які **йдуть за дзвінком** (офер, нагадування, наступний крок, опитування задоволеності — за тим, що реально сказали)
- Запуск після закінчення розмови, а не generic blast-шаблони
- Той самий стек Recording + аналіз: позначте трафік, отримайте інсайт за транскриптом, потім дійте за підсумком

## Кому це потрібно

- **Call centres** — CSAT/NPS-коучинг за емоціями й транскриптами; шлях до персоналізованих SMS follow-up після кожного дзвінка
- **Профіль трафіку / комерція** — high-level звіти: scam, gambling, casino, call-centre та інші вертикалі з ML-розбору транскриптів
- **Wholesale NOC / якість** — post-recorded мітки FAS і voicemail, якість голосу, зведення за постачальниками
- **Compliance** — searchable транскрипти й evidence
- **Routing / fraud** — зростаючі бібліотеки fingerprints із позначених детекцій для подальшого ML

## Як стикуються частини

- [IXC Softswitch](/products/softswitch) — пише й зберігає медіа при увімкненому записі
- [IXC Recording](/blog/ixc-recording) — архів Billing 7, з якого позначаєте й надсилаєте
- **Аналіз дзвінків IXC** — post-recorded ML-звіти: профіль трафіку, коучинг, якість голосу, мітки FAS/voicemail + fingerprints, on-demand детекції

## Підсумок

**IXC Recording** зберігає аудіо. **Аналіз дзвінків IXC** розбирає його після запису: позначте виклики, отримайте автоматичні звіти — профіль трафіку, коучинг, реальна якість голосу та post-recorded FAS/voicemail із speech fingerprints для подальшого ML. Кастомні детекції на запит клієнта. Для call-centre трафіку транскрипти також відкривають **персоналізовані SMS post-call кампанії**, які йдуть за розмовою. Почніть із запису в Billing **7.0.90+**, потім аналізуйте ті самі файли всередині IXC.`;

export const voipCallAnalysisAiPost: BlogPost = {
  slug: 'voip-call-analysis-ai',
  date: '2026-08-07',
  updated: '2026-08-07',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: [
    'call analysis',
    'ixc recording',
    'traffic profile',
    'fas detection',
    'voicemail detection',
    'ai',
    'call centre',
    'softswitch',
  ],
  image: 'https://ixc.ua/blog/voip-call-analysis-ai.png',
  localImage: '/blog/voip-call-analysis-ai.png',
  imageObjectFit: 'contain',
  en: {
    title: 'IXC call analysis — mark recorded calls, get the report back automatically',
    description:
      'Post-recorded IXC call analysis: traffic-profile reports (scam, gambling, casino), voice quality, coaching, FAS/voicemail marks with speech fingerprints, and on-demand detections.',
    excerpt:
      'Mark recorded calls in IXC → automatic reports: traffic profile, voice quality, coaching, post-recorded FAS/voicemail fingerprints, and custom on-demand detections.',
    content: en,
    faq: [
      {
        q: 'Is FAS and voicemail detection real-time in this service?',
        a: 'No. IXC call analysis runs on post-recorded media from IXC Recording. It detects and marks FAS/voicemail on stored audio and builds speech fingerprints for later ML matching.',
      },
      {
        q: 'What is in a high-level traffic report?',
        a: 'ML/AI transcription review across a marked batch to profile what you carry — call-centre, scam, gambling, casino, adult/high-risk, and other verticals your team needs.',
      },
      {
        q: 'Can clients request custom detections?',
        a: 'Yes. On-demand detections cover client-specific issues: compliance phrases, supplier silence thresholds, regional FAS fingerprint packs, language mix, script drift, and more.',
      },
      {
        q: 'How does this relate to IXC Recording?',
        a: 'Recording captures and organises media. Analysis marks calls from that archive, returns reports to IXC, and stores FAS/voicemail fingerprints for future matching.',
      },
    ],
  },
  ru: {
    title: 'Анализ звонков IXC — отметьте записанные вызовы, получите отчёт автоматически',
    description:
      'Post-recorded анализ звонков IXC: отчёты профиля трафика (scam, gambling, casino), качество голоса, коучинг, метки FAS/voicemail с speech fingerprints и on-demand детекции.',
    excerpt:
      'Отметьте записанные вызовы в IXC → автоматические отчёты: профиль трафика, качество голоса, коучинг, post-recorded FAS/voicemail fingerprints и кастомные детекции.',
    content: ru,
    faq: [
      {
        q: 'Детекция FAS и voicemail в этом сервисе — real-time?',
        a: 'Нет. Анализ IXC работает по уже записанному медиа из Recording: детектирует и помечает FAS/voicemail на сохранённом аудио и строит speech fingerprints для дальнейшего ML.',
      },
      {
        q: 'Что в high-level отчёте по трафику?',
        a: 'ML/AI-разбор транскриптов по отмеченной выборке: call-centre, scam, gambling, casino, adult/high-risk и другие вертикали, нужные команде.',
      },
      {
        q: 'Можно ли заказать кастомные детекции?',
        a: 'Да. On-demand: compliance-фразы, пороги тишины по поставщику, региональные FAS fingerprint-паки, языковой микс, drift скрипта и др.',
      },
      {
        q: 'Как это связано с IXC Recording?',
        a: 'Recording пишет и упорядочивает медиа. Анализ отмечает вызовы из архива, возвращает отчёты в IXC и сохраняет fingerprints FAS/voicemail.',
      },
    ],
  },
  uk: {
    title: 'Аналіз дзвінків IXC — позначте записані виклики, отримайте звіт автоматично',
    description:
      'Post-recorded аналіз дзвінків IXC: звіти профілю трафіку (scam, gambling, casino), якість голосу, коучинг, мітки FAS/voicemail із speech fingerprints і on-demand детекції.',
    excerpt:
      'Позначте записані виклики в IXC → автоматичні звіти: профіль трафіку, якість голосу, коучинг, post-recorded FAS/voicemail fingerprints і кастомні детекції.',
    content: uk,
    faq: [
      {
        q: 'Детекція FAS і voicemail у цьому сервісі — real-time?',
        a: 'Ні. Аналіз IXC працює за вже записаним медіа з Recording: детектить і позначає FAS/voicemail на збереженому аудіо та будує speech fingerprints для подальшого ML.',
      },
      {
        q: 'Що у high-level звіті по трафіку?',
        a: 'ML/AI-розбір транскриптів по позначеній вибірці: call-centre, scam, gambling, casino, adult/high-risk та інші вертикалі, потрібні команді.',
      },
      {
        q: 'Чи можна замовити кастомні детекції?',
        a: 'Так. On-demand: compliance-фрази, пороги тиші за постачальником, регіональні FAS fingerprint-паки, мовний мікс, drift скрипта тощо.',
      },
      {
        q: 'Як це пов’язано з IXC Recording?',
        a: 'Recording пише й упорядковує медіа. Аналіз позначає виклики з архіву, повертає звіти в IXC і зберігає fingerprints FAS/voicemail.',
      },
    ],
  },
};
