/**
 * Latest Updates entry: IXC Recording on Softswitch & Billing 7 (Aug 2026).
 *
 * Core story: Recording is the foundation for AI traffic analysis, FAS & voicemail
 * detection — not a ticket/dispute tool. Audience: non-technical / non-IXC readers.
 *
 * Hero (on-page): `public/news/ixc-recording-latest-update.jpg`
 * OG / X card: `public/news/ixc-recording-og.jpg` (1200×630 JPEG, keep under ~300KB)
 * Prompt: `public/news/ixc-recording-latest-update.prompt.txt`
 * Source PNG (optional archive): `public/news/ixc-recording-latest-update.png` — never use large PNGs as `image` / og:image
 */
export const ixcRecordingNewsImagePrompt = `Professional B2B telecom product update hero image, 16:9 landscape (1920×1080), dark navy background with subtle teal audio waveform glow.

CRITICAL branding (must follow exactly):
- Use the EXACT attached corporate logo icon ONLY: blue rounded square with the 3D light-blue stylized V / stacked curved bars emblem (public/logo.png). Place that logo badge prominently at top center.
- Do NOT invent any other logo. Do NOT use wifi bars, signal waves, circuit E-marks, or any alternate icon.
- Do NOT put "IXC", "iXC", or "Billing 7" as a floating wordmark next to a fake logo.
- Sidebar app icon inside the mock UI must also be the same attached logo badge (scaled small), not a different mark.

Composition:
- TOP CENTER: exact IXC logo badge from reference.
- LEFT green pill badge: "Voice recordings" with small waveform icon.
- CENTER: large glass UI window "Troubleshooting → Recordings" showing hour buckets table (e.g. 2026-08-05 09, call counts, disk size bars) and an expanded row with audio waveform player.
- RIGHT: floating translucent Call report card with green Answered badge and prominent "Recording · view" button.
- Background: glowing cyan sine-wave patterns, glassmorphism, soft depth shadows.

Style: enterprise VoIP SaaS marketing, carrier-grade, no people, no stock photos, no third-party logos. High resolution.`;

export const ixcRecordingNews = {
  slug: 'ixc-recording',
  date: '2026-08-07',
  link: 'https://ixc.ua/news/ixc-recording',
  image: 'https://ixc.ua/news/ixc-recording-og.jpg',
  local_image: '/news/ixc-recording-latest-update.jpg',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'IXC Recording — the foundation for AI call analysis, FAS & voicemail detection',
    content: `PRODUCT UPDATE

August 2026 — IXC Software Distribution Corp.

Carriers already see every call in billing and routing reports. The missing layer was the **audio itself** — structured, searchable, and ready for machines as well as people.

**IXC Recording** is that layer. Softswitch captures the media when recording is on; **IXC Billing 7** organises the archive. Together they are not an end product for tickets — they are the **first step** toward the next generation of IXC capabilities:

- **AI traffic & call analysis** for call-centre and wholesale flows — high-level traffic profiles (scam, gambling, casino, and more), transcripts, emotion, coaching, and real voice quality
- **Post-recorded FAS & voicemail detection** — mark bad answers on stored audio and build speech fingerprints for later ML matching
- **On-demand detections** — custom issue packs clients ask for on the same recorded media

Without recorded audio on the platform, none of that scales. With Recording in place, it can.

@btn How Recording works | /blog/ixc-recording
@btn AI analysis & measurements | /blog/voip-call-analysis-ai

---
## 1. Why recording comes first

AI that scores conversations, coaches agents, or flags FAS and voicemail needs a reliable media stream and archive. IXC Softswitch writes that audio for the traffic you enable. Billing 7 keeps it findable — by hour, by search, from the call report — so both operators and future models work from the same source of truth.

Capture on the switch. Clarity in the UI. One stack.

---
## 2. Organised audio, not a dump on disk

High-volume networks create thousands of files an hour. Recordings groups them by time, shows storage use, and lets you find a call across the archive. Retention policies keep the disk under control so the platform stays ready for analysis — not buried in unmanaged media.

---
## 3. Ready for people today — and models tomorrow

Operators can listen, export a clean playable file, and clean up what they no longer need. The same files become training and inference input for **call analysis**, **FAS**, and **voicemail** detectors as those features land.

Replay is useful. Programmable audio is the strategy.

---
## 4. From call reports into the next wave

Open a recording from Originator or Terminator calls the same way you open a SIP trace. That habit matters: audio stays attached to live traffic work — exactly where AI-assisted quality and fraud controls will act next.

---
## Where this goes

| Step | What it unlocks |
|---|---|
| **IXC Recording** (now) | Softswitch capture + Billing 7 archive |
| **AI call analysis** | Traffic profile, voice quality, transcripts, emotion, coaching |
| **FAS & voicemail (post-recorded)** | Marks + speech fingerprints for later ML matching |

Early analysis runs already show what structured call audio can reveal at scale — traffic profile, emotion mix, agent scoring, transcript insight. The client workflow stays inside IXC: **mark the calls**, send them for analysis, and get an **automatic report back** in the platform. Recording is how that pipeline starts on your switch.

@btn See sample analysis report | /blog/voip-call-analysis-ai
@btn Softswitch overview | /products/softswitch

---
## Availability

**IXC Recording** is available on softswitch builds with voice recording enabled, with the operator experience in **IXC Billing 7.0.90** and later. Ask **sales@ixc.ua** or **noc@ixc.ua** about enablement and the roadmap for analysis and detection.

@btn How Recording works | /blog/ixc-recording
@btn Get in touch | /#get-in-touch

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'IXC Recording — основа для AI-анализа звонков, детекции FAS и голосовой почты',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Август 2026 — IXC Software Distribution Corp.

Операторы уже видят каждый вызов в отчётах биллинга и маршрутизации. Не хватало слоя **самого аудио** — структурированного, доступного для поиска и готового и для людей, и для машин.

**IXC Recording** — этот слой. Софтсвитч пишет медиа при включённой записи; **IXC Billing 7** упорядочивает архив. Вместе это не «продукт для тикетов», а **первый шаг** к следующему поколению возможностей IXC:

- **AI-анализ трафика и звонков** для call-centre и wholesale — high-level профили трафика (scam, gambling, casino и др.), транскрипты, эмоции, коучинг и реальное качество голоса
- **Post-recorded детекция FAS и голосовой почты** — метки на сохранённом аудио и speech fingerprints для дальнейшего ML
- **On-demand детекции** — кастомные пакеты под задачи клиента на том же записанном медиа

Без записанного аудио на платформе это не масштабируется. С Recording — масштабируется.

@btn Как работает Recording | /blog/ixc-recording
@btn AI-анализ и измерения | /blog/voip-call-analysis-ai

---
## 1. Почему сначала запись

AI, который скорит разговоры, коучит агентов или ловит FAS и voicemail, нуждается в надёжном медиа-потоке и архиве. IXC Softswitch пишет это аудио для выбранного трафика. Billing 7 делает его находимым — по часам, через поиск, из отчёта по вызову — чтобы и операторы, и будущие модели опирались на один источник правды.

Захват на свитче. Ясность в UI. Один стек.

---
## 2. Упорядоченное аудио, а не свалка на диске

Высокие объёмы — тысячи файлов в час. Recordings группирует их по времени, показывает место на диске и ищет по архиву. Политики хранения держат объём под контролем, чтобы платформа была готова к анализу — а не погребена под неуправляемым медиа.

---
## 3. Сегодня — для людей, завтра — для моделей

Операторы могут прослушать, выгрузить удобный файл и убрать лишнее. Те же файлы станут входом для **анализа звонков**, детекторов **FAS** и **голосовой почты**, когда эти функции появятся.

Прослушать полезно. Программируемое аудио — стратегия.

---
## 4. Из отчётов по вызовам — к следующей волне

Откройте запись из Originator или Terminator так же, как SIP-трассировку. Привычка важна: аудио остаётся рядом с живым трафиком — там, где дальше будут работать AI-качество и антифрод.

---
## Куда это ведёт

| Шаг | Что открывает |
|---|---|
| **IXC Recording** (сейчас) | Захват на softswitch + архив в Billing 7 |
| **AI-анализ звонков** | Профиль трафика, качество голоса, транскрипты, эмоции, коучинг |
| **FAS и voicemail (post-recorded)** | Метки + speech fingerprints для дальнейшего ML |

Ранние прогоны анализа уже показывают, что даёт структурированное аудио в масштабе — профиль трафика, эмоции, скоринг агентов, инсайт по транскриптам. Workflow клиента остаётся в IXC: **отметьте вызовы**, отправьте на анализ и получите **автоматический отчёт обратно** в платформе. Recording — старт этого пайплайна на вашем свитче.

@btn Смотреть пример отчёта | /blog/voip-call-analysis-ai
@btn Обзор Softswitch | /products/softswitch

---
## Доступность

**IXC Recording** доступен на сборках софтсвитча с голосовой записью; операторский опыт — в **IXC Billing 7.0.90** и новее. Включение и roadmap анализа/детекции: **sales@ixc.ua** · **noc@ixc.ua**.

@btn Как работает Recording | /blog/ixc-recording
@btn Связаться | /#get-in-touch

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  uk: {
    title: 'IXC Recording — основа для AI-аналізу дзвінків, детекції FAS і голосової пошти',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Серпень 2026 — IXC Software Distribution Corp.

Оператори вже бачать кожен виклик у звітах білінгу та маршрутизації. Бракувало шару **самого аудіо** — структурованого, з пошуком і готового і для людей, і для машин.

**IXC Recording** — цей шар. Софтсвіч пише медіа при увімкненому записі; **IXC Billing 7** впорядковує архів. Разом це не «продукт для тікетів», а **перший крок** до наступного покоління можливостей IXC:

- **AI-аналіз трафіку та дзвінків** для call-centre і wholesale — high-level профілі трафіку (scam, gambling, casino тощо), транскрипти, емоції, коучинг і реальна якість голосу
- **Post-recorded детекція FAS і голосової пошти** — мітки на збереженому аудіо та speech fingerprints для подальшого ML
- **On-demand детекції** — кастомні пакети під задачі клієнта на тому ж записаному медіа

Без записаного аудіо на платформі це не масштабується. З Recording — масштабується.

@btn Як працює Recording | /blog/ixc-recording
@btn AI-аналіз і вимірювання | /blog/voip-call-analysis-ai

---
## 1. Чому спочатку запис

AI, який скорить розмови, коучить агентів або ловить FAS і voicemail, потребує надійного медіа-потоку й архіву. IXC Softswitch пише це аудіо для обраного трафіку. Billing 7 робить його знаходимим — за годинами, через пошук, зі звіту по виклику — щоб і оператори, і майбутні моделі спиралися на одне джерело правди.

Захоплення на свічі. Ясність в UI. Один стек.

---
## 2. Впорядковане аудіо, а не звалище на диску

Високі обсяги — тисячі файлів на годину. Recordings групує їх за часом, показує місце на диску й шукає по архіву. Політики зберігання тримають обсяг під контролем, щоб платформа була готова до аналізу — а не похована під некерованим медіа.

---
## 3. Сьогодні — для людей, завтра — для моделей

Оператори можуть прослухати, вивантажити зручний файл і прибрати зайве. Ті самі файли стануть входом для **аналізу дзвінків**, детекторів **FAS** і **голосової пошти**, коли ці функції з’являться.

Прослухати корисно. Програмоване аудіо — стратегія.

---
## 4. Зі звітів по викликах — до наступної хвилі

Відкрийте запис з Originator чи Terminator так само, як SIP-трасування. Звичка важлива: аудіо лишається поруч із живим трафіком — там, де далі працюватимуть AI-якість і антифрод.

---
## Куди це веде

| Крок | Що відкриває |
|---|---|
| **IXC Recording** (зараз) | Захоплення на softswitch + архів у Billing 7 |
| **AI-аналіз дзвінків** | Профіль трафіку, якість голосу, транскрипти, емоції, коучинг |
| **FAS і voicemail (post-recorded)** | Мітки + speech fingerprints для подальшого ML |

Ранні прогони аналізу вже показують, що дає структуроване аудіо в масштабі — профіль трафіку, емоції, скоринг агентів, інсайт за транскриптами. Workflow клієнта лишається в IXC: **позначте виклики**, надішліть на аналіз і отримайте **автоматичний звіт назад** у платформі. Recording — старт цього пайплайну на вашому свічі.

@btn Дивитися приклад звіту | /blog/voip-call-analysis-ai
@btn Огляд Softswitch | /products/softswitch

---
## Доступність

**IXC Recording** доступний на збірках софтсвіча з голосовим записом; операторський досвід — у **IXC Billing 7.0.90** і новіших. Увімкнення та roadmap аналізу/детекції: **sales@ixc.ua** · **noc@ixc.ua**.

@btn Як працює Recording | /blog/ixc-recording
@btn Зв’язатися | /#get-in-touch

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  zh: {
    title: 'IXC Recording — AI 通话分析、FAS 与语音信箱检测的基础',
    content: `产品更新

2026 年 8 月 — IXC Software Distribution Corp.

运营商已能在计费与路由报表中看到每一通呼叫。缺失的一层是 **音频本身**——结构化、可搜索，并同时面向人与机器。

**IXC Recording** 就是这一层。开启录音后，Softswitch 采集媒体；**IXC Billing 7** 整理归档。两者合在一起，不是用于工单/争议的终局产品，而是迈向下一代 IXC 能力的 **第一步**：

- **AI 话务与通话分析**，面向呼叫中心与批发流量 — 高层流量画像（scam、gambling、casino 等）、转写、情绪、辅导与真实语音质量
- **录音后 FAS 与语音信箱检测** — 在已存音频上标记异常应答，并构建 speech fingerprints，供后续 ML 匹配
- **按需检测** — 客户针对同一录音媒体提出的定制问题包

平台上没有录音音频，这一切都无法规模化。有了 Recording，就可以。

@btn Recording 如何工作 | /blog/ixc-recording
@btn AI 分析与测量 | /blog/voip-call-analysis-ai

---
## 1. 为什么先做录音

为对话评分、辅导坐席或标记 FAS 与语音信箱的 AI，需要可靠的媒体流与归档。IXC Softswitch 为您启用的话务写入该音频。Billing 7 让它可查找——按小时、按搜索、从呼叫报表进入——使操作员与未来模型共用同一事实源。

交换机上采集。界面中清晰呈现。一套栈。

---
## 2. 有组织的音频，而非磁盘上的堆积

高容量网络每小时产生数千个文件。Recordings 按时间分组、展示存储用量，并让您在归档中查找一通呼叫。保留策略控制磁盘占用，使平台随时可用于分析——而不是被未管理的媒体淹没。

---
## 3. 今天服务人 — 明天服务模型

操作员可以收听、导出干净可播放的文件，并清理不再需要的内容。同样的文件将成为 **通话分析**、**FAS** 和 **语音信箱** 检测器落地时的训练与推理输入。

回放有用。可编程音频才是策略。

---
## 4. 从呼叫报表进入下一波能力

从 Originator 或 Terminator 呼叫中打开录音，方式与打开 SIP 跟踪相同。这一习惯很重要：音频始终附着在实时话务工作上——正是下一步 AI 辅助质量与欺诈控制将作用的位置。

---
## 接下来走向何处

| 步骤 | 解锁内容 |
|---|---|
| **IXC Recording**（现已提供） | Softswitch 采集 + Billing 7 归档 |
| **AI 通话分析** | 流量画像、语音质量、转写、情绪、辅导 |
| **FAS 与语音信箱（录音后）** | 标记 + speech fingerprints，供后续 ML 匹配 |

早期分析运行已表明结构化通话音频在规模上能揭示什么——流量画像、情绪构成、坐席评分、转写洞察。客户工作流仍留在 IXC 内：**标记呼叫**，送去分析，并在平台中获得 **自动回传报告**。Recording 就是这条管道在您交换机上的起点。

@btn 查看分析报告示例 | /blog/voip-call-analysis-ai
@btn Softswitch 概览 | /products/softswitch

---
## 可用性

**IXC Recording** 可用于已启用语音录音的软交换版本，操作员体验在 **IXC Billing 7.0.90** 及更高版本中提供。关于开通以及分析与检测路线图，请联系 **sales@ixc.ua** 或 **noc@ixc.ua**。

@btn Recording 如何工作 | /blog/ixc-recording
@btn 联系我们 | /#get-in-touch

---
## 关于 IXC Software Distribution Corp. (™ IXC Softswitch)

IXC 提供自 1999 年起在生产环境验证的运营商级 VoIP 基础设施。**办公地址：** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **媒体：** alex@ixc.ua`,
  },
};
