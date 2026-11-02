/**
 * Latest Updates entry: October 2026 report — Routing center, Autotester, CDR media quality.
 *
 * Public copy is operator-facing. Do not paste internal draft notes
 * (lab hosts, skipped versions, CPU march flags, table names, API paths, class names).
 *
 * Hero (on-page): `public/news/october-2026-latest-update.jpg`
 * OG / X card: `public/news/october-2026-og.jpg` (1200×630 JPEG — keep under ~300KB for X)
 * Prompt: `public/news/october-2026-latest-update.prompt.txt`
 */
export const october2026NewsImagePrompt = `Professional B2B telecom product update hero, 16:9, dark navy with teal circuit glow.

Branding: exact IXC corporate logo badge top-center. No "IXC" wordmark in corners.

TOP — green pill "October 2026 report" + dark pill "43 releases".
LEFT — embed/crop the real Routing center screenshot (two lists, minutes, attempts, ▲/▼ %).
RIGHT — IXC Autotester test-call batch, G.711 / G.729.
CENTER — corporate logo, blue ↔ arrow. No Club stamp.

Style: enterprise telecom SaaS, glassmorphism, no stock photos, no people.`;

export const ixcOctober2026News = {
  slug: 'ixc-october-2026-update',
  date: '2026-10-31',
  link: 'https://ixc.ua/news/ixc-october-2026-update',
  image: 'https://ixc.ua/news/october-2026-og.jpg',
  local_image: '/news/october-2026-latest-update.jpg',
  image_object_fit: 'contain' as const,
  rich_news: true,
  en: {
    title: 'October 2026 report — Routing center, Autotester, CDR media quality (WebV7 v7.1.4 → v7.1.47)',
    content: `PRODUCT UPDATE

October 2026 — IXC Software Distribution Corp.

October is a **WebV7 month**: a **Routing center**, **IXC Autotester**, invoices inside the operator UI, and a customer/vendor portal. The switch also writes **per-leg media quality** onto the CDR, and mixed **G.711 A-law / µ-law** interconnects translate without a full recode to PCM.

**Mr. 6 Foundation** published an interview with IXC founder **Oleksii Vinogradov** — DealoAgent, four people, and their agents.

@btn Softswitch product | /products/softswitch
@btn IXC Autotester | /products/ixc-autotester
@btn Founder interview | https://mr6.foundation/found/dealoagent-four-people-and-their-agents
@btn September 2026 report | /news/ixc-september-2026-update

---
## 1. Routing center — one place for traffic and the route

**What changed:** **Routing center** is the screen you open to see what the switch is doing, and to change it, without jumping between destinations, routes tables, and call reports.

Pick a window: today, the last hour, 24 hours, 3 days, or a custom from/to. Two lists sit side by side. Start from **Destinations**, **Codes**, or **Originators**. Each row is a name plus the traffic in that window: **minutes** and **attempts**. Under the numbers is the change against the previous window of the same length.

![Routing center lists: minutes, attempts, and the change versus the previous window](/news/october-2026-routing-center.jpg)

*Mexico is up 215% on minutes versus the previous window. Costa Rica, Malawi, and Brazil are down 11–19%. The originator on the right is the trunk that carried Mexico.*

Four orders on each list:

- **Minutes** — busiest first
- **Attempts** — most tries first. A destination can be loud in attempts and quiet in minutes
- **Increasing %** — largest rise first. Minutes now and none in the previous window count as the largest rise (the mark reads **new**)
- **Decreasing %** — largest fall first

The mark itself:

- **▲ +N%** (green) — minutes up more than 1%
- **▼ −N%** (red) — minutes down more than 1%
- **–** — within 1%
- Click the mark and Originator Calls opens for **both** periods, grouped by hour, already filtered to that destination, code, or trunk

Pick a row and the second list is the other side: originators that sent that destination, or destinations on that originator. Same minutes, attempts, and marks — you see *who* moved, not only that the country moved.

Under the lists, the route for that pair. A line at the top says what the next call will do. Codes that had traffic in the window are chips on that board, each with its own minutes, attempts, and the same ▲ / ▼. A code marked **own vendors** has extra suppliers saved only for that code.

On a vendor row: price, the quality numbers the switch already uses, **minutes**, **attempts**, and the same up/down mark. **Actual** is that percent group’s share of minutes in the window, next to the percent you set. Green took traffic and passed the bar. Pale passed and is only backup. Red was removed by the bar. Grey is disabled, excluded, or still inherited.

You change the route on this same page: drag priority, type percents, add a vendor, or **replace suppliers** for one code or the whole destination. Replace shows a preview and writes nothing until Apply. **Reload config** sends it to the switch. Calls already up stay up.

**Default routes** stay the company price list. This screen only turns that fallback on or off for the originator you are looking at. First-time setup from an originator with no table yet creates the routes table and quality rule on the same board.

---
## 2. IXC Autotester — a test call through one supplier

**What changed:** **IXC Autotester** places a test call through one supplier trunk from WebV7.

- Destination, number, prompt, and codec: **G.711 A-law**, **G.711 µ-law**, or **G.729**
- Several rows run as one batch; the switch reloads once
- Ingress can stay the company default or a chosen customer trunk
- Progress stays on the trunk after you leave the page. Cancel ends a live call
- Optional mail of the result, including the vendor NOC address

@btn Autotester product | /products/ixc-autotester

---
## 3. Media quality on the CDR

**What changed:** Each call now has **full, real voice-quality data** on the CDR: packets received vs expected, loss, jitter, and the last RTCP report from the peer (including round trip on a relayed call).

**Soon** a new routing parameter will use that quality to **re-route** — drop a bad vendor mid-hunt from the actual media, not only from ASR/ACD/QI.

---
## 4. Invoices, portal, and day-to-day ops

**What changed:** Finance and access catch up with the rest of WebV7.

- **Invoice generation** from the operator UI, including the logo on the PDF
- **Payee portal** — a customer sees their originator calls; a vendor sees their terminator calls. Other customers, supplier names, and profit stay off that screen
- **Drop** an active call from the report
- Rate emails can name the ingress trunk, service class, and customer prefix
- Gatekeeper accounts on a terminator (H.323)
- Mixed **G.711 A-law ↔ µ-law** interconnects translate directly — faster, same audio

Menus stay **English · Русский · 简体中文**. Ubuntu 24.04, Ubuntu 26.04, and FreeBSD 14 still ship.

---
## 5. Interview with the founder

**Mr. 6 Foundation** interviewed IXC founder **Oleksii Vinogradov** on DealoAgent: an AI-native CRM built by four people and their agents, starting in telecom — the industry IXC has served since 1999.

@btn Read the interview | https://mr6.foundation/found/dealoagent-four-people-and-their-agents

---
## Also this month

- Replace suppliers and percent edits write the originator’s own table (or copy a shared rule for this originator only)
- Active calls stay inside the current company
- In-dialog re-INVITE / hold is more stable
- ACD shown to operators is a clock

---
## By the numbers

| Metric | Value |
| --- | --- |
| WebV7 releases | **43** (v7.1.4 → v7.1.47) |
| Routing | **Routing center** for one originator × destination |
| Testing | **IXC Autotester** — G.711 or G.729 through one trunk |
| CDR | Per-leg **media quality** (loss, jitter, RTCP) |

---
## Availability

**IXC Softswitch** and **WebV7** updates roll out through your account team: **sales@ixc.ua** · **noc@ixc.ua**

@btn Contact us | /#get-in-touch
@btn September 2026 report | /news/ixc-september-2026-update

---
## About IXC Software Distribution Corp. (™ IXC Softswitch)

IXC delivers carrier-style VoIP infrastructure proven in production since 1999. **Office:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **Media:** alex@ixc.ua`,
  },
  ru: {
    title: 'Отчёт за октябрь 2026 — Routing center, Autotester, качество медиа в CDR (WebV7 v7.1.4 → v7.1.47)',
    content: `ОБНОВЛЕНИЕ ПРОДУКТА

Октябрь 2026 — IXC Software Distribution Corp.

Октябрь — **месяц WebV7**: **Routing center**, **IXC Autotester**, инвойсы в интерфейсе оператора и портал клиента/вендора. Свитч пишет **качество медиа по ноге** в CDR, а смешанные interconnects **G.711 A-law / µ-law** переводятся без полного recode в PCM.

**Mr. 6 Foundation** опубликовал интервью с основателем IXC **Oleksii Vinogradov** — DealoAgent, четыре человека и их агенты.

@btn Softswitch | /products/softswitch
@btn IXC Autotester | /products/ixc-autotester
@btn Интервью с основателем | https://mr6.foundation/found/dealoagent-four-people-and-their-agents
@btn Отчёт за сентябрь 2026 | /news/ixc-september-2026-update

---
## 1. Routing center — одно место для трафика и маршрута

**Что изменилось:** **Routing center** — экран, где видно, что делает свитч, и можно это менять, не прыгая между destinations, таблицами маршрутов и call reports.

Выберите окно: сегодня, последний час, 24 часа, 3 дня или свой from/to. Два списка рядом. Старт с **Destinations**, **Codes** или **Originators**. В строке — имя плюс трафик за окно: **минуты** и **attempts**. Под цифрами — изменение к предыдущему окну той же длины.

![Списки Routing center: минуты, attempts и изменение к предыдущему окну](/news/october-2026-routing-center.jpg)

*Mexico +215% по минутам к предыдущему окну. Costa Rica, Malawi и Brazil −11–19%. Originator справа — транк, который нёс Mexico.*

Четыре сортировки в каждом списке:

- **Minutes** — самые загруженные сверху
- **Attempts** — больше всего попыток сверху. Destination может быть громким в attempts и тихим в минутах
- **Increasing %** — самый большой рост сверху. Минуты сейчас и ноль в прошлом окне — самый большой рост (метка **new**)
- **Decreasing %** — самое большое падение сверху

Сама метка:

- **▲ +N%** (зелёная) — минуты выросли больше чем на 1%
- **▼ −N%** (красная) — минуты упали больше чем на 1%
- **–** — в пределах 1%
- Клик по метке открывает Originator Calls за **оба** периода, по часам, уже с фильтром на этот destination, code или транк

Выберите строку — второй список это другая сторона: originators, которые слали этот destination, или destinations на этом originator. Те же минуты, attempts и метки — видно *кто* сдвинулся, а не только что сдвинулась страна.

Под списками — маршрут для этой пары. Строка сверху говорит, что сделает следующий вызов. Коды с трафиком в окне — chips на доске, у каждого свои минуты, attempts и тот же ▲ / ▼. Код с меткой **own vendors** имеет своих поставщиков только для этого кода.

В строке вендора: цена, уже знакомые quality-цифры, **минуты**, **attempts** и та же метка вверх/вниз. **Actual** — доля минут этой percent group в окне, рядом с процентом, который вы задали. Green брал трафик и прошёл bar. Pale прошёл и только backup. Red снят bar. Grey — disabled, excluded или inherited.

Маршрут меняется на этой же странице: drag приоритета, percents, добавить вендора или **replace suppliers** на один код или весь destination. Replace показывает preview и ничего не пишет до Apply. **Reload config** уходит на свитч. Уже идущие вызовы не рвутся.

**Default routes** остаются прайс-листом компании. Этот экран только включает или выключает fallback для выбранного originator. Первый запуск с originator без таблицы создаёт таблицу маршрутов и правило качества на той же доске.

---
## 2. IXC Autotester — тестовый вызов через одного поставщика

**Что изменилось:** **IXC Autotester** ставит тестовый вызов через один supplier trunk из WebV7.

- Destination, номер, prompt и codec: **G.711 A-law**, **G.711 µ-law** или **G.729**
- Несколько строк — один batch; свитч reload один раз
- Ingress — default компании или выбранный customer trunk
- Прогресс остаётся на транке, если уйти со страницы. Cancel завершает живой вызов
- Опционально письмо с результатом, в том числе на NOC вендора

@btn Продукт Autotester | /products/ixc-autotester

---
## 3. Качество медиа в CDR

**Что изменилось:** У каждого вызова теперь **полные реальные данные о качестве голоса** в CDR: пакеты received vs expected, loss, jitter и последний RTCP-отчёт пира (включая round trip на relayed вызове).

**Скоро** новый параметр маршрутизации будет использовать это качество для **re-route** — снимать плохого вендора по реальному медиа, а не только по ASR/ACD/QI.

---
## 4. Инвойсы, портал и повседневные операции

**Что изменилось:** Finance и доступ догнали остальной WebV7.

- **Генерация инвойсов** из UI оператора, включая логотип на PDF
- **Payee portal** — клиент видит свои originator calls; вендор — свои terminator calls. Чужие клиенты, имена поставщиков и прибыль с экрана убраны
- **Drop** активного вызова из отчёта
- Rate emails могут назвать ingress trunk, service class и customer prefix
- Gatekeeper accounts на terminator (H.323)
- Смешанные **G.711 A-law ↔ µ-law** interconnects переводятся напрямую — быстрее, то же аудио

Меню: **English · Русский · 简体中文**. Ubuntu 24.04, Ubuntu 26.04 и FreeBSD 14 по-прежнему поставляются.

---
## 5. Интервью с основателем

**Mr. 6 Foundation** взял интервью у основателя IXC **Oleksii Vinogradov** о DealoAgent: AI-native CRM, который собрали четыре человека и их агенты, начиная с телекома — отрасли, которую IXC ведёт с 1999 года.

@btn Читать интервью | https://mr6.foundation/found/dealoagent-four-people-and-their-agents

---
## Также в этом месяце

- Replace suppliers и percents пишут собственную таблицу originator (или копируют общее правило только для него)
- Active calls остаются внутри текущей компании
- In-dialog re-INVITE / hold стабильнее
- ACD для операторов — часы

---
## В цифрах

| Метрика | Значение |
| --- | --- |
| Релизы WebV7 | **43** (v7.1.4 → v7.1.47) |
| Routing | **Routing center** для одного originator × destination |
| Testing | **IXC Autotester** — G.711 или G.729 через один транк |
| CDR | **Media quality** по ноге (loss, jitter, RTCP) |

---
## Доступность

Обновления **IXC Softswitch** и **WebV7** — через вашу account-команду: **sales@ixc.ua** · **noc@ixc.ua**

@btn Связаться с нами | /#get-in-touch
@btn Отчёт за сентябрь 2026 | /news/ixc-september-2026-update

---
## О компании IXC Software Distribution Corp. (™ IXC Softswitch)

Операторский VoIP софтсвитч в продакшене с 1999 года. **Офис:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **СМИ:** alex@ixc.ua`,
  },
  uk: {
    title: 'Звіт за жовтень 2026 — Routing center, Autotester, якість медіа в CDR (WebV7 v7.1.4 → v7.1.47)',
    content: `ОНОВЛЕННЯ ПРОДУКТУ

Жовтень 2026 — IXC Software Distribution Corp.

Жовтень — **місяць WebV7**: **Routing center**, **IXC Autotester**, інвойси в інтерфейсі оператора і портал клієнта/вендора. Свіч пише **якість медіа по нозі** в CDR, а змішані interconnects **G.711 A-law / µ-law** перекладаються без повного recode в PCM.

**Mr. 6 Foundation** опублікував інтерв’ю із засновником IXC **Oleksii Vinogradov** — DealoAgent, четверо людей і їхні агенти.

@btn Softswitch | /products/softswitch
@btn IXC Autotester | /products/ixc-autotester
@btn Інтерв’ю із засновником | https://mr6.foundation/found/dealoagent-four-people-and-their-agents
@btn Звіт за вересень 2026 | /news/ixc-september-2026-update

---
## 1. Routing center — одне місце для трафіку і маршруту

**Що змінилось:** **Routing center** — екран, де видно, що робить свіч, і можна це змінити, не стрибаючи між destinations, таблицями маршрутів і call reports.

Оберіть вікно: сьогодні, остання година, 24 години, 3 дні або свій from/to. Два списки поруч. Старт з **Destinations**, **Codes** або **Originators**. У рядку — ім’я плюс трафік за вікно: **хвилини** і **attempts**. Під цифрами — зміна до попереднього вікна тієї самої довжини.

![Списки Routing center: хвилини, attempts і зміна до попереднього вікна](/news/october-2026-routing-center.jpg)

*Mexico +215% за хвилинами до попереднього вікна. Costa Rica, Malawi і Brazil −11–19%. Originator справа — транк, який ніс Mexico.*

Чотири сортування в кожному списку:

- **Minutes** — найзавантаженіші зверху
- **Attempts** — найбільше спроб зверху. Destination може бути гучним в attempts і тихим у хвилинах
- **Increasing %** — найбільше зростання зверху. Хвилини зараз і нуль у минулому вікні — найбільше зростання (мітка **new**)
- **Decreasing %** — найбільше падіння зверху

Сама мітка:

- **▲ +N%** (зелена) — хвилини виросли більше ніж на 1%
- **▼ −N%** (червона) — хвилини впали більше ніж на 1%
- **–** — у межах 1%
- Клік по мітці відкриває Originator Calls за **обидва** періоди, по годинах, уже з фільтром на цей destination, code або транк

Оберіть рядок — другий список це інший бік: originators, які слали цей destination, або destinations на цьому originator. Ті самі хвилини, attempts і мітки — видно *хто* зрушився, а не лише що зрушилась країна.

Під списками — маршрут для цієї пари. Рядок зверху каже, що зробить наступний виклик. Коди з трафіком у вікні — chips на дошці, у кожного свої хвилини, attempts і той самий ▲ / ▼. Код із міткою **own vendors** має своїх постачальників лише для цього коду.

У рядку вендора: ціна, уже знайомі quality-цифри, **хвилини**, **attempts** і та сама мітка вгору/вниз. **Actual** — частка хвилин цієї percent group у вікні, поруч із відсотком, який ви задали. Green брав трафік і пройшов bar. Pale пройшов і лише backup. Red знятий bar. Grey — disabled, excluded або inherited.

Маршрут змінюється на цій самій сторінці: drag пріоритету, percents, додати вендора або **replace suppliers** на один код або весь destination. Replace показує preview і нічого не пише до Apply. **Reload config** іде на свіч. Виклики, що вже йдуть, не рвуться.

**Default routes** лишаються прайс-листом компанії. Цей екран лише вмикає або вимикає fallback для вибраного originator. Перший запуск з originator без таблиці створює таблицю маршрутів і правило якості на тій самій дошці.

---
## 2. IXC Autotester — тестовий виклик через одного постачальника

**Що змінилось:** **IXC Autotester** ставить тестовий виклик через один supplier trunk з WebV7.

- Destination, номер, prompt і codec: **G.711 A-law**, **G.711 µ-law** або **G.729**
- Кілька рядків — один batch; свіч reload один раз
- Ingress — default компанії або вибраний customer trunk
- Прогрес лишається на транку, якщо піти зі сторінки. Cancel завершує живий виклик
- Опційно лист із результатом, зокрема на NOC вендора

@btn Продукт Autotester | /products/ixc-autotester

---
## 3. Якість медіа в CDR

**Що змінилось:** У кожного виклику тепер **повні реальні дані про якість голосу** в CDR: пакети received vs expected, loss, jitter і останній RTCP-звіт піра (включно з round trip на relayed виклику).

**Незабаром** новий параметр маршрутизації використовуватиме цю якість для **re-route** — зніматиме поганого вендора за реальним медіа, а не лише за ASR/ACD/QI.

---
## 4. Інвойси, портал і повсякденні операції

**Що змінилось:** Finance і доступ наздогнали решту WebV7.

- **Генерація інвойсів** з UI оператора, включно з логотипом на PDF
- **Payee portal** — клієнт бачить свої originator calls; вендор — свої terminator calls. Чужі клієнти, імена постачальників і прибуток з екрана прибрані
- **Drop** активного виклику зі звіту
- Rate emails можуть назвати ingress trunk, service class і customer prefix
- Gatekeeper accounts на terminator (H.323)
- Змішані **G.711 A-law ↔ µ-law** interconnects перекладаються напряму — швидше, те саме аудіо

Меню: **English · Русский · 简体中文**. Ubuntu 24.04, Ubuntu 26.04 і FreeBSD 14 як і раніше постачаються.

---
## 5. Інтерв’ю із засновником

**Mr. 6 Foundation** взяв інтерв’ю в засновника IXC **Oleksii Vinogradov** про DealoAgent: AI-native CRM, який зібрали четверо людей і їхні агенти, починаючи з телекому — галузі, яку IXC веде з 1999 року.

@btn Читати інтерв’ю | https://mr6.foundation/found/dealoagent-four-people-and-their-agents

---
## Також цього місяця

- Replace suppliers і percents пишуть власну таблицю originator (або копіюють спільне правило лише для нього)
- Active calls лишаються всередині поточної компанії
- In-dialog re-INVITE / hold стабільніший
- ACD для операторів — годинник

---
## У цифрах

| Метрика | Значення |
| --- | --- |
| Релізи WebV7 | **43** (v7.1.4 → v7.1.47) |
| Routing | **Routing center** для одного originator × destination |
| Testing | **IXC Autotester** — G.711 або G.729 через один транк |
| CDR | **Media quality** по нозі (loss, jitter, RTCP) |

---
## Доступність

Оновлення **IXC Softswitch** і **WebV7** — через вашу account-команду: **sales@ixc.ua** · **noc@ixc.ua**

@btn Зв'язатися з нами | /#get-in-touch
@btn Звіт за вересень 2026 | /news/ixc-september-2026-update

---
## Про IXC Software Distribution Corp. (™ IXC Softswitch)

Операторський VoIP софтсвіч у продакшені з 1999 року. **Офіс:** 7950 NW 53rd Street, Suite 337, Miami, Florida 33166. **ЗМІ:** alex@ixc.ua`,
  },
};
