import type { BlogPost } from '../blogPosts';

const en = `**IXC Recording** is a stack feature on **IXC Softswitch** and **IXC Billing 7**. The softswitch captures call media when recording is enabled; Billing 7 organises that archive so your team — and the next wave of IXC analysis — can work from the same audio.

This overview covers what Recording unlocks, what operators get today, and how it feeds **AI call analysis**, **FAS**, and **voicemail** detection. Product announcement: [IXC Recording news](/news/ixc-recording).

## What problem does it solve?

Carriers already have CDRs, routes, and signalling traces. They did not have **structured call audio** on the platform — the layer machines and people need for traffic insight, fraud hearing, and call-centre coaching.

Without Recording:

- Audio lives as raw files on the server, not as a first-class platform capability
- There is nothing reliable to mark and send for **IXC call analysis**
- FAS and voicemail detectors have no media path to listen to
- High-volume networks drown in unmanaged files instead of a searchable archive

**IXC Recording** closes that gap: softswitch capture plus Billing 7 archive — the foundation for everything that hears the call.

## What’s new for operators

### 1. Recordings page (Troubleshooting)

A new **Troubleshooting → Recordings** screen shows how much disk is used and lists **hour buckets** — groupings by time (for example *2026-08-05 09*) with:

- how many calls are in that hour
- total size
- when the newest and oldest recording in that bucket were made

Open a bucket to see individual calls. No more scrolling through endless flat lists.

### 2. Search across all recordings

Need one call but don’t know the hour? Use **Search all buckets**:

- partial Call-ID
- partial voice tag (route / digits label on the file)
- recorded date range

Results show which hour bucket each match belongs to, so you can drill in or act from the list.

### 3. Listen, export, clean up

Open a recording to hear it, download audio for a partner or compliance pack, and remove what you no longer need — one call or a batch. Same files you later **mark** for IXC analysis reports.

### 4. Retention rules

Optional retention policy on the same page:

- delete recordings older than **X days**
- keep only the **N** most recent calls
- trim automatically when disk usage passes a limit

Rules can be saved and run on demand — so the archive stays ready for analysis, not buried in unmanaged media.

### 5. From call reports — without leaving your workflow

On **Originator Calls** and **Terminator Calls**, when recording is active, open the recording from the call row — the same habit as opening a SIP trace. Listen or export without hunting the Troubleshooting menu.

## Before vs with V7 Recordings

### Before

- Files scattered by hour on the server
- Hard to find one Call-ID among thousands
- Jump between reports and server paths
- Manual cleanup
- No clean path to AI analysis or FAS/voicemail hearing

### With V7 Recordings

- Clear hour buckets and pagination
- Search by Call-ID, tag, or date
- Open from Originator / Terminator reports
- Retention rules built into the UI
- Mark → analyse → automatic report pipeline can start

## Who is it for?

- **Platform owners** building the next layer — AI traffic analysis, FAS, voicemail detection
- **Call centres & wholesale** that will mark calls and get IXC analysis reports back
- **Quality / compliance** — locate and export specific conversations when needed
- **Operations** — monitor disk use and apply retention before storage fills up

Access follows your usual roles and permissions.

## What you need to use it

**IXC Recording** spans both layers:

- **Softswitch** — recording enabled for your platform (install/build) and on the originator signalling profile for the traffic you want captured
- **Billing 7** — Recordings UI, report deep-links, export, and retention for what exists on disk

## Why it matters — and what’s next

Recording is not the end product. It is the **first step** toward [IXC call analysis](/blog/voip-call-analysis-ai) — mark calls, get the report back automatically — and toward real-time **FAS** and **voicemail** detection on the same media path.

## Availability

**IXC Recording** requires a softswitch build with voice recording enabled, plus **IXC Billing 7.0.90** or later for the operator UI. See the [product announcement](/news/ixc-recording) or contact **noc@ixc.ua**.

## Summary

Softswitch capture plus Billing 7 archive: hour buckets, search, listen/export, retention, and report deep-links — the foundation for IXC analysis and detection, not a side tool for tickets.`;

const ru = `**IXC Recording** — функция стека на **IXC Softswitch** и в **IXC Billing 7**. Софтсвитч захватывает медиа при включённой записи; Billing 7 упорядочивает архив, чтобы и команда, и следующий слой анализа IXC опирались на одно и то же аудио.

Обзор: что открывает Recording, что получают операторы сегодня и как это питает **AI-анализ звонков**, **FAS** и **голосовую почту**. Анонс: [новость IXC Recording](/news/ixc-recording).

## Какую задачу решает?

У операторов уже есть CDR, маршруты и signalling. Не было **структурированного аудио вызовов** на платформе — слоя, который нужен машинам и людям для инсайта по трафику, «слышания» фрода и коучинга call-centre.

Без Recording:

- Аудио лежит сырыми файлами на сервере, а не как возможность платформы
- Нечего надёжно отмечать и отправлять на **анализ звонков IXC**
- У детекторов FAS и voicemail нет медиа-пути
- Высокие объёмы тонут в неуправляемых файлах вместо поискового архива

**IXC Recording** закрывает разрыв: захват на softswitch плюс архив в Billing 7 — фундамент для всего, что слышит вызов.

## Что нового для операторов

### 1. Страница Recordings (Troubleshooting)

Новый экран **Troubleshooting → Recordings** показывает использование диска и **часовые бакеты** с числом вызовов, размером и границами времени. Откройте бакет — отдельные вызовы без бесконечного плоского списка.

### 2. Поиск по всем записям

**Search all buckets** — по Call-ID, метке маршрута или дате. Результат показывает час-бакет.

### 3. Прослушать, выгрузить, очистить

Откройте запись, скачайте аудио для партнёра или compliance, удалите лишнее — один вызов или пакет. Те же файлы позже **отмечаете** для отчётов анализа IXC.

### 4. Правила хранения

Срок давности, «оставить N последних», автоочистка при росте диска — архив готов к анализу, а не погребён под медиа.

### 5. Из отчётов по вызовам

В Originator / Terminator при активной записи откройте аудио из строки вызова — как SIP-трассировку.

## Было vs с Recordings в V7

### Было

- Файлы по часам на сервере
- Трудно найти Call-ID
- Прыжки между отчётами и путями
- Ручная очистка
- Нет чистого пути к AI-анализу и FAS/voicemail

### С Recordings в V7

- Часовые бакеты и пагинация
- Поиск по Call-ID, тегу, дате
- Открытие из отчётов Originator / Terminator
- Retention в UI
- Можно стартовать пайплайн отметить → анализ → автоматический отчёт

## Для кого

- **Владельцы платформы**, строящие следующий слой — AI-анализ трафика, FAS, voicemail
- **Call centres и wholesale**, которые будут отмечать вызовы и получать отчёты IXC
- **Качество / compliance** — найти и выгрузить конкретный разговор при необходимости
- **Операции** — диск и retention до переполнения

Доступ — через обычные роли.

## Что нужно

- **Softswitch** — запись на уровне платформы (install/build) и в signalling-профиле оригинатора
- **Billing 7** — UI Recordings, deep-link из отчётов, экспорт и retention

## Зачем это важно — и что дальше

Recording — не конечный продукт. Это **первый шаг** к [анализу звонков IXC](/blog/voip-call-analysis-ai) — отметить вызовы, получить отчёт автоматически — и к real-time **FAS** / **voicemail** на том же медиа-пути.

## Доступность

Сборка софтсвитча с голосовой записью и **IXC Billing 7.0.90+**. См. [анонс](/news/ixc-recording) или **noc@ixc.ua**.

## Итог

Захват на softswitch плюс архив Billing 7: бакеты, поиск, прослушивание/экспорт, retention и deep-link из отчётов — фундамент анализа и детекции IXC, а не побочный инструмент для тикетов.`;

const uk = `**IXC Recording** — функція стека на **IXC Softswitch** і в **IXC Billing 7**. Софтсвіч захоплює медіа при увімкненому записі; Billing 7 впорядковує архів, щоб і команда, і наступний шар аналізу IXC спиралися на те саме аудіо.

Огляд: що відкриває Recording, що отримують оператори сьогодні і як це живить **AI-аналіз дзвінків**, **FAS** і **голосову пошту**. Анонс: [новина IXC Recording](/news/ixc-recording).

## Яку задачу вирішує?

В операторів уже є CDR, маршрути й signalling. Не було **структурованого аудіо викликів** на платформі — шару, потрібного машинам і людям для інсайту по трафіку, «чуття» фроду та коучингу call-centre.

Без Recording:

- Аудіо лежить сирими файлами на сервері, а не як можливість платформи
- Немає чого надійно позначати й надсилати на **аналіз дзвінків IXC**
- У детекторів FAS і voicemail немає медіа-шляху
- Високі обсяги тонуть у некерованих файлах замість пошукового архіву

**IXC Recording** закриває розрив: захоплення на softswitch плюс архів у Billing 7 — фундамент для всього, що чує виклик.

## Що нового для операторів

### 1. Сторінка Recordings (Troubleshooting)

Новий екран **Troubleshooting → Recordings** показує використання диска й **годинні бакети** з кількістю викликів, розміром і межами часу. Відкрийте бакет — окремі виклики без нескінченного плоского списку.

### 2. Пошук по всіх записах

**Search all buckets** — за Call-ID, міткою маршруту чи датою. Результат показує годинний бакет.

### 3. Прослухати, вивантажити, очистити

Відкрийте запис, завантажте аудіо для партнера чи compliance, видаліть зайве — один виклик або пакет. Ті самі файли пізніше **позначаєте** для звітів аналізу IXC.

### 4. Правила зберігання

Строк давності, «залишити N останніх», автоочищення при зростанні диска — архів готовий до аналізу, а не похований під медіа.

### 5. Зі звітів по викликах

В Originator / Terminator при активному записі відкрийте аудіо з рядка виклику — як SIP-трасування.

## Було vs з Recordings у V7

### Було

- Файли по годинах на сервері
- Важко знайти Call-ID
- Стрибки між звітами й шляхами
- Ручне очищення
- Немає чистого шляху до AI-аналізу та FAS/voicemail

### З Recordings у V7

- Годинні бакети та пагінація
- Пошук за Call-ID, тегом, датою
- Відкриття зі звітів Originator / Terminator
- Retention в UI
- Можна стартувати пайплайн позначити → аналіз → автоматичний звіт

## Для кого

- **Власники платформи**, що будують наступний шар — AI-аналіз трафіку, FAS, voicemail
- **Call centres і wholesale**, які позначатимуть виклики й отримуватимуть звіти IXC
- **Якість / compliance** — знайти й вивантажити конкретну розмову за потреби
- **Операції** — диск і retention до переповнення

Доступ — через звичайні ролі.

## Що потрібно

- **Softswitch** — запис на рівні платформи (install/build) і в signalling-профілі оригінатора
- **Billing 7** — UI Recordings, deep-link зі звітів, експорт і retention

## Навіщо це важливо — і що далі

Recording — не кінцевий продукт. Це **перший крок** до [аналізу дзвінків IXC](/blog/voip-call-analysis-ai) — позначити виклики, отримати звіт автоматично — і до real-time **FAS** / **voicemail** на тому ж медіа-шляху.

## Доступність

Збірка софтсвіча з голосовим записом і **IXC Billing 7.0.90+**. Див. [анонс](/news/ixc-recording) або **noc@ixc.ua**.

## Підсумок

Захоплення на softswitch плюс архів Billing 7: бакети, пошук, прослуховування/експорт, retention і deep-link зі звітів — фундамент аналізу та детекції IXC, а не побічний інструмент для тікетів.`;

export const ixcRecordingPost: BlogPost = {
  slug: 'ixc-recording',
  date: '2026-08-07',
  updated: '2026-08-07',
  author: 'Oleksii Vinogradov',
  category: 'Product',
  tags: ['ixc recording', 'voice recordings', 'voip', 'softswitch', 'ixc billing 7', 'pcap', 'cdr'],
  image: 'https://ixc.ua/blog/ixc-recording.png',
  localImage: '/blog/ixc-recording.png',
  imageObjectFit: 'contain',
  en: {
    title: 'IXC Recording on Softswitch & Billing 7 — the foundation for AI call analysis',
    description:
      'IXC Recording: softswitch voice capture plus Billing 7 archive — the first step to IXC call analysis, FAS and voicemail detection.',
    excerpt:
      'Softswitch captures the media; Billing 7 organises the archive — foundation for mark → analyse → automatic IXC reports.',
    content: en,
    faq: [
      {
        q: 'What problem does IXC Recording solve?',
        a: 'It puts structured call audio on the platform — softswitch capture plus a Billing 7 archive — so IXC can run call analysis, FAS and voicemail detection on real media, not only CDRs.',
      },
      {
        q: 'Where do I find recordings in IXC Billing 7?',
        a: 'Open Troubleshooting → Recordings for hour buckets and search, or open a recording from Originator Calls and Terminator Calls when recording is active.',
      },
      {
        q: 'How does this lead to call analysis?',
        a: 'You mark calls in IXC from the organised archive, send them for analysis, and receive an automatic report back in IXC — emotion, agents, transcripts.',
      },
      {
        q: 'What do I need to use IXC Recording?',
        a: 'A softswitch build with voice recording enabled (platform plus originator signalling profile), and IXC Billing 7.0.90 or later for the Recordings UI.',
      },
    ],
  },
  ru: {
    title: 'IXC Recording на Softswitch и в Billing 7 — фундамент AI-анализа звонков',
    description:
      'IXC Recording: захват на софтсвитче плюс архив Billing 7 — первый шаг к анализу звонков IXC, FAS и голосовой почте.',
    excerpt:
      'Софтсвитч пишет медиа; Billing 7 упорядочивает архив — основа пайплайна отметить → анализ → автоматический отчёт IXC.',
    content: ru,
    faq: [
      {
        q: 'Какую задачу решает IXC Recording?',
        a: 'Структурированное аудио на платформе — захват на softswitch и архив в Billing 7 — чтобы IXC мог анализировать звонки и детектировать FAS/voicemail по реальному медиа, а не только по CDR.',
      },
      {
        q: 'Где найти записи в IXC Billing 7?',
        a: 'Troubleshooting → Recordings для бакетов и поиска, или открытие записи из Originator Calls и Terminator Calls при активной записи.',
      },
      {
        q: 'Как это ведёт к анализу звонков?',
        a: 'Вы отмечаете вызовы в IXC из упорядоченного архива, отправляете на анализ и получаете автоматический отчёт обратно в IXC.',
      },
      {
        q: 'Что нужно для IXC Recording?',
        a: 'Сборка софтсвитча с голосовой записью (платформа и signalling-профиль оригинатора) и IXC Billing 7.0.90 или новее.',
      },
    ],
  },
  uk: {
    title: 'IXC Recording на Softswitch і в Billing 7 — фундамент AI-аналізу дзвінків',
    description:
      'IXC Recording: захоплення на софтсвічі плюс архів Billing 7 — перший крок до аналізу дзвінків IXC, FAS і голосової пошти.',
    excerpt:
      'Софтсвіч пише медіа; Billing 7 впорядковує архів — основа пайплайну позначити → аналіз → автоматичний звіт IXC.',
    content: uk,
    faq: [
      {
        q: 'Яку задачу вирішує IXC Recording?',
        a: 'Структуроване аудіо на платформі — захоплення на softswitch і архів у Billing 7 — щоб IXC міг аналізувати дзвінки й детектити FAS/voicemail за реальним медіа, а не лише за CDR.',
      },
      {
        q: 'Де знайти записи в IXC Billing 7?',
        a: 'Troubleshooting → Recordings для бакетів і пошуку, або відкриття запису з Originator Calls і Terminator Calls при активному записі.',
      },
      {
        q: 'Як це веде до аналізу дзвінків?',
        a: 'Ви позначаєте виклики в IXC з упорядкованого архіву, надсилаєте на аналіз і отримуєте автоматичний звіт назад в IXC.',
      },
      {
        q: 'Що потрібно для IXC Recording?',
        a: 'Збірка софтсвіча з голосовим записом (платформа та signalling-профіль оригінатора) і IXC Billing 7.0.90 або новіша.',
      },
    ],
  },
};
