/**
 * Latest Updates entry: September 2026 report — G.711/G.729, transcode, Ubuntu 26 recording.
 *
 * Public copy is operator-facing. Do not paste internal draft notes
 * (lab hosts, image hashes, CI files, compiler flags, class names, codec registry IDs).
 *
 * Hero (on-page): `public/news/september-2026-latest-update.jpg`
 * OG / X card: `public/news/september-2026-og.jpg` (1200×630 JPEG — keep under ~300KB for X)
 * Prompt: `public/news/september-2026-latest-update.prompt.txt`
 */
export const september2026NewsImagePrompt = `Professional B2B telecom product update hero, 16:9, dark navy with teal circuit glow.

Branding: exact IXC corporate logo badge top-center. No "IXC" wordmark in corners.

TOP — green pill "September 2026 report" + dark pill "G.711 / G.729".
LEFT — G.711 / G.729 / full transcode.
RIGHT — Recordings player, Ubuntu 26.04, WebV7 v7.1.3.
CENTER — orange distressed stamp with huge flashing digits **100** (Voice) and **114** (SMS), label IXC Club.

Style: enterprise telecom SaaS, glassmorphism, no stock photos, no people.`;

export const ixcSeptember2026News = {
  slug: 'ixc-september-2026-update',
  date: '2026-09-30',
  link: 'https://ixc.ua/news/ixc-september-2026-update',
  image: 'https://ixc.ua/news/september-2026-og.jpg',
  local_image: '/news/september-2026-latest-update.jpg',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'September 2026 report — G.711 / G.729 transcode, Ubuntu 26 recording, IXC Club (100 voice + 114 SMS)',
    content: `PRODUCT UPDATE

September 2026 — IXC Software Distribution Corp.

September is a **media month** on the switch: in-tree **G.711** and **G.729** (including Annex B), **full transcode** on mixed routes, and **voice recording on Ubuntu 26.04**. Play Annex B calls from **Recordings**. **IXC Club** is now **100 voice** and **114 SMS** carriers (**+23** / **+32** vs August).

@btn Softswitch product | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **100** voice + **114** SMS carriers

**What changed:** The live interconnect network grew again in September.

- **Voice:** **100** carriers total (**+23** vs August)
- **SMS:** **114** carriers total (**+32** vs August)

Eligible IXC Softswitch clients still get profile-matched introductions — without exhibition fees, travel, or a full-time BD hunt.

@btn How IXC Club works | /ixc-club

---
## 2. G.711 and G.729 on the live path — mixed routes transcode in the switch

**What changed:** Production voice no longer depends on a third-party codec pack. The switch carries **G.711 A-law / µ-law** and **G.729 including Annex B**, and **recode between them** when originator and terminator disagree.

Hold/resume, comfort noise, and DTMF follow the new media path. Operators do not SSH into a box to “fix codecs” — mixed G.711 / G.729 interconnects recode in the switch.

Ubuntu **24.04** and **FreeBSD 14** still ship. New Linux work is proven on **Ubuntu 26.04**.

---
## 3. Ubuntu 26.04 — recording is on

**What changed:** Ubuntu **26.04 LTS** installs can **record** — same Troubleshooting → Recordings archive as on other supported OS builds.

Find a call, play it, download WAV, or mark it for AI analysis. Recording stays a company-level choice, as in August.

@btn How Recording works | /blog/ixc-recording
@btn AI analysis & measurements | /blog/voip-call-analysis-ai

---
## 4. Recordings — G.729 Annex B playback

**What changed:** **Troubleshooting → Recordings** now plays **G.729 Annex B** dumps (silence / SID in the WAV).

- Help text lists G.711 A/µ-law and G.729 including Annex B
- Signalling-profile save is smoother
- Menus unchanged: **English · Русский · 简体中文**

---
## Also this month

- Cleaner RTP path: jitter buffer, hold/resume from signalling, DTMF and comfort-noise relay
- Recordings (and AI upload) are correct for Annex B dumps
- Talk to your account team if you still rely on older codec packs beyond G.711 / G.729

---
## By the numbers

| Metric | Value |
| --- | --- |
| IXC Club | **Voice 100** · **SMS 114** (**+23** / **+32** vs August) |
| Codecs on the live path | **G.711** and **G.729** (incl. Annex B), with transcode |
| Ubuntu 26.04 | Recording **on** |

---
## Availability

**IXC Softswitch** and **WebV7** updates roll out through your account team. Ask about Ubuntu 26.04 recording, G.711/G.729 interconnects, and IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Contact us | /#get-in-touch
@btn August 2026 report | /news/ixc-august-2026-update

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'Отчёт за сентябрь 2026 — транскод G.711 / G.729, recording на Ubuntu 26, IXC Club (100 voice + 114 SMS)',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Сентябрь 2026 — IXC Software Distribution Corp.

Сентябрь — **media-месяц** на свитче: свои **G.711** и **G.729** (включая Annex B), **полный транскод** на смешанных маршрутах и **voice recording на Ubuntu 26.04**. Annex B можно слушать из **Recordings**. **IXC Club** теперь **100 voice** и **114 SMS** операторов (**+23** / **+32** к августу).

@btn Softswitch | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **100** voice + **114** SMS операторов

**Что изменилось:** Живая interconnect-сеть снова выросла в сентябре.

- **Voice:** **100** операторов всего (**+23** к августу)
- **SMS:** **114** операторов всего (**+32** к августу)

Клиенты IXC Softswitch на подходящих тарифах по-прежнему получают контакты под профиль — без выставок, командировок и отдельного BD-штата.

@btn Как работает IXC Club | /ixc-club

---
## 2. G.711 и G.729 на live path — смешанные маршруты транскодируются на свитче

**Что изменилось:** Production voice больше не зависит от стороннего codec pack. Свитч несёт **G.711 A-law / µ-law** и **G.729 включая Annex B** и **перекодирует между ними**, если originator и terminator не совпадают.

Hold/resume, comfort noise и DTMF идут по новому media path. Операторам не нужно SSH «чинить кодеки» — смешанные G.711 / G.729 interconnects recode на свитче.

Ubuntu **24.04** и **FreeBSD 14** по-прежнему поставляются. Новая Linux-работа проверена на **Ubuntu 26.04**.

---
## 3. Ubuntu 26.04 — recording включён

**Что изменилось:** Инсталляции **Ubuntu 26.04 LTS** могут **писать разговоры** — тот же архив Troubleshooting → Recordings, что и на других поддерживаемых ОС.

Найти вызов, прослушать, скачать WAV или отправить на AI-анализ. Recording по-прежнему включается на уровне компании, как в августе.

@btn Как работает Recording | /blog/ixc-recording
@btn AI-анализ и измерения | /blog/voip-call-analysis-ai

---
## 4. Recordings — воспроизведение G.729 Annex B

**Что изменилось:** **Troubleshooting → Recordings** теперь играет дампы **G.729 Annex B** (silence / SID в WAV).

- Help перечисляет G.711 A/µ-law и G.729 включая Annex B
- Сохранение signalling-profile проходит ровнее
- Меню без изменений: **English · Русский · 简体中文**

---
## Также в этом месяце

- Чище RTP path: jitter buffer, hold/resume из сигнализации, DTMF и comfort-noise
- Recordings (и AI upload) корректны для дампов Annex B
- Если вы всё ещё опираетесь на старые codec packs кроме G.711 / G.729 — напишите account-команде

---
## В цифрах

| Метрика | Значение |
| --- | --- |
| IXC Club | **Voice 100** · **SMS 114** (**+23** / **+32** к августу) |
| Кодеки на live path | **G.711** и **G.729** (вкл. Annex B), с транскодом |
| Ubuntu 26.04 | Recording **включён** |

---
## Доступность

Обновления **IXC Softswitch** и **WebV7** — через вашу account-команду. Ubuntu 26.04 recording, interconnects G.711/G.729 и IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Связаться с нами | /#get-in-touch
@btn Отчёт за август 2026 | /news/ixc-august-2026-update

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч в продакшене с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'Звіт за вересень 2026 — транскод G.711 / G.729, recording на Ubuntu 26, IXC Club (100 voice + 114 SMS)',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Вересень 2026 — IXC Software Distribution Corp.

Вересень — **media-місяць** на свічі: власні **G.711** і **G.729** (включно з Annex B), **повний транскод** на змішаних маршрутах і **voice recording на Ubuntu 26.04**. Annex B можна слухати з **Recordings**. **IXC Club** тепер **100 voice** і **114 SMS** операторів (**+23** / **+32** до серпня).

@btn Softswitch | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **100** voice + **114** SMS операторів

**Що змінилось:** Жива interconnect-мережа знову зросла у вересні.

- **Voice:** **100** операторів усього (**+23** до серпня)
- **SMS:** **114** операторів усього (**+32** до серпня)

Клієнти IXC Softswitch на відповідних тарифах як і раніше отримують контакти під профіль — без виставок, відряджень і окремого BD-штату.

@btn Як працює IXC Club | /ixc-club

---
## 2. G.711 і G.729 на live path — змішані маршрути транскодуються на свічі

**Що змінилось:** Production voice більше не залежить від стороннього codec pack. Свіч несе **G.711 A-law / µ-law** і **G.729 включно з Annex B** і **перекодовує між ними**, якщо originator і terminator не збігаються.

Hold/resume, comfort noise і DTMF йдуть новим media path. Операторам не потрібно SSH «лагодити кодеки» — змішані G.711 / G.729 interconnects recode на свічі.

Ubuntu **24.04** і **FreeBSD 14** як і раніше постачаються. Нова Linux-робота перевірена на **Ubuntu 26.04**.

---
## 3. Ubuntu 26.04 — recording увімкнений

**Що змінилось:** Інсталяції **Ubuntu 26.04 LTS** можуть **писати розмови** — той самий архів Troubleshooting → Recordings, що й на інших підтримуваних ОС.

Знайти виклик, прослухати, завантажити WAV або відправити на AI-аналіз. Recording як і раніше вмикається на рівні компанії, як у серпні.

@btn Як працює Recording | /blog/ixc-recording
@btn AI-аналіз і вимірювання | /blog/voip-call-analysis-ai

---
## 4. Recordings — відтворення G.729 Annex B

**Що змінилось:** **Troubleshooting → Recordings** тепер грає дампи **G.729 Annex B** (silence / SID у WAV).

- Help перелічує G.711 A/µ-law і G.729 включно з Annex B
- Збереження signalling-profile проходить рівніше
- Меню без змін: **English · Русский · 简体中文**

---
## Також цього місяця

- Чистіший RTP path: jitter buffer, hold/resume із сигналізації, DTMF і comfort-noise
- Recordings (і AI upload) коректні для дампів Annex B
- Якщо ви все ще спираєтесь на старі codec packs крім G.711 / G.729 — напишіть account-команді

---
## У цифрах

| Метрика | Значення |
| --- | --- |
| IXC Club | **Voice 100** · **SMS 114** (**+23** / **+32** до серпня) |
| Кодеки на live path | **G.711** і **G.729** (вкл. Annex B), з транскодом |
| Ubuntu 26.04 | Recording **увімкнений** |

---
## Доступність

Оновлення **IXC Softswitch** і **WebV7** — через вашу account-команду. Ubuntu 26.04 recording, interconnects G.711/G.729 і IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Зв'язатися з нами | /#get-in-touch
@btn Звіт за серпень 2026 | /news/ixc-august-2026-update

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч у продакшені з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
};
