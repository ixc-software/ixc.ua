/**
 * Latest Updates entry: August 2026 report — Ubuntu 26.04, WebV7 7.1, IXC Club carriers.
 *
 * Public copy is operator-facing. Do not paste internal draft notes
 * (lab hosts, system= flags, CI files, compiler flags, DB columns, permissions).
 *
 * Hero (on-page): `public/news/august-2026-latest-update.jpg`
 * OG / X card: `public/news/august-2026-og.jpg` (1200×630 JPEG — keep under ~300KB for X)
 * Prompt: `public/news/august-2026-latest-update.prompt.txt`
 */
export const august2026NewsImagePrompt = `Professional B2B telecom product update hero image, 16:9 landscape, dark navy background with subtle teal/cyan circuit glow.

Branding: exact IXC corporate logo badge (blue rounded square, 3D V / stacked curved bars) top-center. No "IXC" / "iXC" / "Wholesale VoIP" text in the top-left corner.

TOP — green pill "August 2026 report" + dark pill "18 releases".
LEFT — Ubuntu 26.04 LTS / C++26 / gcc-16 / Boost 1.90 / poll+eventfd; WebV7 v7.1.3.
RIGHT — multilingual UI EN/RU/简体中文, recordings waveform, Check IP green status.
CENTER — blue ↔ arrow, corporate logo above, orange distressed rubber stamp with huge flashing digits **77** (Voice) and **82** (SMS).

Style: enterprise telecom SaaS, glassmorphism, no stock photos, no people. Carrier-grade, precise.`;

export const ixcAugust2026News = {
  slug: 'ixc-august-2026-update',
  date: '2026-08-31',
  link: 'https://ixc.ua/news/ixc-august-2026-update',
  image: 'https://ixc.ua/news/august-2026-og.jpg',
  local_image: '/news/august-2026-latest-update.jpg',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'August 2026 report — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)',
    content: `PRODUCT UPDATE

August 2026 — IXC Software Distribution Corp.

A strong month for IXC clients: **IXC Club** added **77 voice** and **82 SMS** carriers, **WebV7** crossed **7.1** with English / Russian / Chinese, and **IXC Softswitch** now ships on **Ubuntu 26.04 LTS** — with recordings + AI analysis, one-click IP checks, and invoices that follow each customer’s billing cycle.

@btn Softswitch product | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **77** voice + **82** SMS new carriers

**What changed:** The live interconnect network grew again in August — curated introductions, not a directory dump.

- **Voice:** **77** new carriers
- **SMS:** **82** new carriers

Eligible IXC Softswitch clients get profile-matched contacts without exhibition fees, travel, or a full-time BD team hunting leads from scratch.

@btn How IXC Club works | /ixc-club

---
## 2. Ubuntu 26.04 LTS — new Linux option for the switch

**What changed:** New Linux installs can run on **Ubuntu 26.04 LTS**. Ubuntu **24.04** and **FreeBSD 14** stay fully supported.

The core is on a modern C++ toolchain — more headroom under load, a cleaner media path, and the same carrier-grade routing and billing you already run. Ask your account team if a 26.04 move fits your next upgrade window.

---
## 3. WebV7 in three languages (v7.1)

**What changed:** Operators switch **English**, **Русский**, or **简体中文** from the header. The choice sticks for that user.

Login, menus, in-app help, reports, finance, and Quick Setup follow the selected language — including dates and charts. Customer web-access language stays in step.

---
## 4. Voice recordings + AI call analysis

**What changed:** **Troubleshooting → Recordings** is the operator archive: find a call, play it, download WAV, or mark it for AI analysis.

- Open a recording from the CDR the same way you open a SIP trace
- Play / download mixed audio (G.711 and G.729)
- Keep disk under control with retention by age, volume, or space
- Turn recording **on or off per company**
- **AI reports:** transcript, languages, emotions, billing context, speaker match

Recording must be enabled on the switch. More detail: **IXC Recording** and **IXC call analysis** — buttons below.

@btn How Recording works | /blog/ixc-recording
@btn AI analysis & measurements | /blog/voip-call-analysis-ai

---
## 5. Check IP — is this peer reachable?

**What changed:** Test a vendor or customer IP from the billing UI — no SSH.

- Port check plus a **SIP probe**
- **Green** — port open and SIP answered · **Yellow** — only one passed · **Red** — both failed
- Available on originator/terminator addresses, the terminator address list, and Quick Setup

---
## 6. Invoice generator that follows each customer’s cycle

**What changed:** Batch invoices no longer force one date range on every payee.

- Preview splits **daily / weekly / twice a month / monthly**
- **Missed periods** catch up when a customer is behind — several invoices in one run
- Add a product on the spot if the list is empty
- Send or resend from Finance → Invoices

---
## 7. PCAP — sequence diagram plus the actual SIP text

**What changed:** July’s call-flow diagram now includes the raw messages.

Expand a row for full packet text, copy it, filter by from / to / method / body. A-leg and B-leg captures still merge into one picture. Download PCAP or export the diagram as PNG.

---
## Also this month

- Searchable **all terminator addresses** list with Check IP
- Access lists stay inside the current company
- Reachability check while adding the first peer in Quick Setup
- CDR **Recording** column opens the same player as Troubleshooting → Recordings
- Stability and polish across routing, finance, and multi-company installs

---
## By the numbers

| Metric | Value |
| --- | --- |
| WebV7 releases | **18** (v7.0.85 → v7.1.3) |
| IXC Club new carriers | **Voice 77** · **SMS 82** |
| Linux | Ubuntu **26.04 LTS** added (24.04 and FreeBSD 14 still supported) |
| Operator UI | **English · Russian · Simplified Chinese** |

---
## Availability

**IXC Softswitch** and **WebV7** updates roll out through your account team. Ask about Ubuntu 26.04, Recording, and IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Contact us | /#get-in-touch
@btn July 2026 report | /news/ixc-july-2026-update

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'Отчёт за август 2026 — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Август 2026 — IXC Software Distribution Corp.

Сильный месяц для клиентов IXC: **IXC Club** добавил **77 voice** и **82 SMS** операторов, **WebV7** вышел на **7.1** с English / Russian / Chinese, а **IXC Softswitch** поставляется на **Ubuntu 26.04 LTS** — плюс recordings и AI-анализ, проверка IP одним кликом и инвойсы по циклу каждого клиента.

@btn Softswitch | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **77** voice + **82** SMS новых операторов

**Что изменилось:** Живая interconnect-сеть снова выросла — отобранные знакомства, не справочник.

- **Voice:** **77** новых операторов
- **SMS:** **82** новых операторов

Клиенты IXC Softswitch на подходящих тарифах получают контакты под профиль — без выставок, командировок и отдельного BD-штата.

@btn Как работает IXC Club | /ixc-club

---
## 2. Ubuntu 26.04 LTS — новый Linux для свитча

**Что изменилось:** Новые Linux-инсталляции могут работать на **Ubuntu 26.04 LTS**. Ubuntu **24.04** и **FreeBSD 14** по-прежнему полностью поддерживаются.

Ядро на современном C++ стеке — больше запаса под нагрузкой, чище media path, тот же операторский routing и биллинг. Окно апгрейда на 26.04 — через account-команду.

---
## 3. WebV7 на трёх языках (v7.1)

**Что изменилось:** Операторы переключают **English**, **Русский** или **简体中文** из шапки. Выбор сохраняется для пользователя.

Login, меню, подсказки, отчёты, финансы и Quick Setup идут на выбранном языке — включая даты и графики. Язык web-access клиента остаётся согласованным.

---
## 4. Записи звонков + AI-анализ

**Что изменилось:** **Troubleshooting → Recordings** — архив оператора: найти вызов, прослушать, скачать WAV или отправить на AI-анализ.

- Открыть запись из CDR так же, как SIP trace
- Play / download (G.711 и G.729)
- Retention по возрасту, объёму или диску
- Включить или выключить recording **на компанию**
- **AI-отчёты:** транскрипт, языки, эмоции, биллинг, speaker match

Recording должен быть включён на свитче. Подробнее: **IXC Recording** и **IXC call analysis** — кнопки ниже.

@btn Как работает Recording | /blog/ixc-recording
@btn AI-анализ и измерения | /blog/voip-call-analysis-ai

---
## 5. Check IP — пир доступен?

**Что изменилось:** Проверка IP вендора или клиента из биллинга — без SSH.

- Проверка порта плюс **SIP probe**
- **Green** — порт открыт и SIP ответил · **Yellow** — прошла одна проверка · **Red** — обе не прошли
- На адресах originator/terminator, в списке terminator addresses и в Quick Setup

---
## 6. Генератор инвойсов по циклу клиента

**Что изменилось:** Пакетные инвойсы больше не навязывают всем один период.

- Preview делит **daily / weekly / twice a month / monthly**
- **Missed periods** догоняют, если клиент отстал — несколько инвойсов за один запуск
- Добавить product на месте, если список пуст
- Отправить или переотправить из Finance → Invoices

---
## 7. PCAP — диаграмма и сам текст SIP

**Что изменилось:** Июльская call-flow диаграмма теперь с исходными сообщениями.

Раскрыть строку — полный текст пакета, копирование, фильтр by from / to / method / body. A-leg и B-leg по-прежнему в одной картине. Скачать PCAP или экспорт PNG.

---
## Также в этом месяце

- Поиск по **all terminator addresses** с Check IP
- Access lists остаются внутри текущей компании
- Проверка reachability при добавлении первого пира в Quick Setup
- Колонка CDR **Recording** открывает тот же плеер, что Troubleshooting → Recordings
- Стабильность и полировка routing, finance и multi-company

---
## В цифрах

| Метрика | Значение |
| --- | --- |
| Релизы WebV7 | **18** (v7.0.85 → v7.1.3) |
| Новые операторы IXC Club | **Voice 77** · **SMS 82** |
| Linux | Добавлен Ubuntu **26.04 LTS** (24.04 и FreeBSD 14 поддерживаются) |
| UI оператора | **English · Russian · Simplified Chinese** |

---
## Доступность

Обновления **IXC Softswitch** и **WebV7** — через вашу account-команду. Ubuntu 26.04, Recording и IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Связаться с нами | /#get-in-touch
@btn Отчёт за июль 2026 | /news/ixc-july-2026-update

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч в продакшене с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'Звіт за серпень 2026 — Ubuntu 26.04, WebV7 7.1, IXC Club (77 voice + 82 SMS)',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Серпень 2026 — IXC Software Distribution Corp.

Сильний місяць для клієнтів IXC: **IXC Club** додав **77 voice** і **82 SMS** операторів, **WebV7** вийшов на **7.1** з English / Russian / Chinese, а **IXC Softswitch** постачається на **Ubuntu 26.04 LTS** — плюс recordings і AI-аналіз, перевірка IP одним кліком і інвойси за циклом кожного клієнта.

@btn Softswitch | /products/softswitch
@btn IXC Club | /ixc-club
@btn IXC Recording | /news/ixc-recording

---
## 1. IXC Club — **77** voice + **82** SMS нових операторів

**Що змінилось:** Жива interconnect-мережа знову зросла — відібрані знайомства, не довідник.

- **Voice:** **77** нових операторів
- **SMS:** **82** нових операторів

Клієнти IXC Softswitch на відповідних тарифах отримують контакти під профіль — без виставок, відряджень і окремого BD-штату.

@btn Як працює IXC Club | /ixc-club

---
## 2. Ubuntu 26.04 LTS — новий Linux для свіча

**Що змінилось:** Нові Linux-інсталяції можуть працювати на **Ubuntu 26.04 LTS**. Ubuntu **24.04** і **FreeBSD 14** як і раніше повністю підтримуються.

Ядро на сучасному C++ стеку — більше запасу під навантаженням, чистіший media path, той самий операторський routing і білінг. Вікно апгрейду на 26.04 — через account-команду.

---
## 3. WebV7 трьома мовами (v7.1)

**Що змінилось:** Оператори перемикають **English**, **Русский** або **简体中文** з шапки. Вибір зберігається для користувача.

Login, меню, підказки, звіти, фінанси і Quick Setup йдуть вибраною мовою — включно з датами та графіками. Мова web-access клієнта лишається узгодженою.

---
## 4. Записи дзвінків + AI-аналіз

**Що змінилось:** **Troubleshooting → Recordings** — архів оператора: знайти виклик, прослухати, завантажити WAV або відправити на AI-аналіз.

- Відкрити запис із CDR так само, як SIP trace
- Play / download (G.711 і G.729)
- Retention за віком, обсягом або диском
- Увімкнути або вимкнути recording **на компанію**
- **AI-звіти:** транскрипт, мови, емоції, білінг, speaker match

Recording має бути ввімкнений на свічі. Детальніше: **IXC Recording** і **IXC call analysis** — кнопки нижче.

@btn Як працює Recording | /blog/ixc-recording
@btn AI-аналіз і вимірювання | /blog/voip-call-analysis-ai

---
## 5. Check IP — пір доступний?

**Що змінилось:** Перевірка IP вендора або клієнта з білінгу — без SSH.

- Перевірка порту плюс **SIP probe**
- **Green** — порт відкритий і SIP відповів · **Yellow** — пройшла одна перевірка · **Red** — обидві не пройшли
- На адресах originator/terminator, у списку terminator addresses і в Quick Setup

---
## 6. Генератор інвойсів за циклом клієнта

**Що змінилось:** Пакетні інвойси більше не нав’язують усім один період.

- Preview ділить **daily / weekly / twice a month / monthly**
- **Missed periods** наздоганяють, якщо клієнт відстав — кілька інвойсів за один запуск
- Додати product на місці, якщо список порожній
- Надіслати або перенадіслати з Finance → Invoices

---
## 7. PCAP — діаграма і сам текст SIP

**Що змінилось:** Липнева call-flow діаграма тепер із вихідними повідомленнями.

Розкрити рядок — повний текст пакета, копіювання, фільтр by from / to / method / body. A-leg і B-leg як і раніше в одній картині. Завантажити PCAP або експорт PNG.

---
## Також цього місяця

- Пошук по **all terminator addresses** з Check IP
- Access lists лишаються всередині поточної компанії
- Перевірка reachability під час додавання першого піра в Quick Setup
- Колонка CDR **Recording** відкриває той самий плеєр, що Troubleshooting → Recordings
- Стабільність і полірування routing, finance і multi-company

---
## У цифрах

| Метрика | Значення |
| --- | --- |
| Релізи WebV7 | **18** (v7.0.85 → v7.1.3) |
| Нові оператори IXC Club | **Voice 77** · **SMS 82** |
| Linux | Додано Ubuntu **26.04 LTS** (24.04 і FreeBSD 14 підтримуються) |
| UI оператора | **English · Russian · Simplified Chinese** |

---
## Доступність

Оновлення **IXC Softswitch** і **WebV7** — через вашу account-команду. Ubuntu 26.04, Recording і IXC Club: **sales@ixc.ua** · **noc@ixc.ua**

@btn Зв'язатися з нами | /#get-in-touch
@btn Звіт за липень 2026 | /news/ixc-july-2026-update

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч у продакшені з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
};
