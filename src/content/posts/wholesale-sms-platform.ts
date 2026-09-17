import type { BlogPost } from '../blogPosts';

const en = `A **wholesale SMS platform** is how aggregators buy and sell **A2P** traffic: **SMPP** binds, **routing**, and **billing**. In 2026 that stack is not enough. Carriers drop you when **casino, scam, and other blocked content** leaks onto a bind they trusted — then your clean OTP customers lose the route too.

[IXC SMS Platform](/products/sms-platform) is switching plus billing on [IXC Softswitch](/products/softswitch) (or as a standalone module). **IXC SMS AI** sits on the same path: **analysis**, **realtime detect-and-reject**, or **both**, so risky messages die on your switch instead of on the terminator's filter.

## What wholesale aggregators actually run

This is not a retail SMS gateway. A wholesale SMS company interconnects:

- **Originators** — aggregators, enterprises, CPaaS, OTP senders
- **Terminators** — MNOs, other wholesalers, country routes
- **SMPP 3.4** (and often HTTP) as the bind protocol
- **Per-message rating**, prepaid wallets, postpaid credit
- **DLR (delivery reports)** as the quality metric — the SMS analogue of ASR

The platform must route, bill, and fail over. It must also prove to upstream that the mix you send is the mix you claimed.

## SMPP, A2P routing, and billing

### SMPP 3.4

**SMPP** is how wholesale SMS moves between platforms: bind, submit, DLR, throughput limits. IXC speaks **SMPP 3.4**, on the softswitch base or as a **separate module** that can start on one server.

### A2P routing

**A2P (application-to-person)** is OTP, alerts, notifications, and marketing. Routing is not "cheapest prefix":

- Destination **MCC-MNC** / operator
- Vendor **DLR**, latency, and throttle
- Sender ID and registered vs unregistered policy
- Failover when a bind or vendor fails
- Separate commercial classes so transactional traffic is not mixed onto a route that forbids promo

Same idea as [LCR for voice](/blog/lcr-routing-voip), with delivery rate instead of ASR.

### Billing

Every message is a rated event — the analogue of a voice [CDR](/blog/voip-billing-softswitch):

- Prepaid and postpaid originators
- Buy/sell rates by destination
- Credit limits and real-time balance
- Invoices and traffic reports

Without billing you cannot run wholesale. Without content control you cannot **keep** the routes you opened.

## Why routes die: casino, scam, and blocked A2P

Upstream carriers and MNOs filter:

- **Casino / gambling** promo
- **Scam and phishing** — fake banks, fake OTPs, "verify your wallet"
- **Brand impersonation** and noisy or malicious short links
- **Adult / high-risk** where the interconnect forbids it
- Other packs the destination market treats as **blocked content**

Typical sequence: complaints and content-filter hits, then **your bind or IP is removed from routing**. You notice when DLR collapses and the account manager says the route is closed.

Keyword lists lag. Templates rotate. One originator can poison a shared trunk overnight. Wholesale providers need to **see the mix** and **stop the message before it is submitted upstream**.

## IXC SMS AI — analysis, realtime, or both

Same commercial idea as [AI call analysis on voice](/blog/voip-call-analysis-ai): know what you carry, then act. SMS is text, so you can go further — **reject on the submit path**.

Choose the mode per client and per route.

### 1. Analysis — know your traffic

You **mark** an originator, a day, a destination, or a sample of stored messages. IXC returns a **traffic-profile report**:

- Share of **casino / gambling**
- **Scam / phishing / social-engineering** cues
- Transactional **OTP / alerts** vs promo
- **Adult / high-risk** where relevant
- Other verticals your team names (**on-demand detections**)

Use the report to reprice, freeze an originator, show a carrier a clean profile, or decide which label packs belong in realtime. This is the commercial layer: *know your traffic* before you argue about DLR.

### 2. Realtime — detect and reject before the carrier

On each **submit** (SMPP or API), AI inspects **body, sender, and destination** against your policy, then:

- **Pass** — clean transactional / allowed class
- **Reject** — the originator gets the error; the terminator **never sees** the message
- **Quarantine** — hold for review instead of burning a route
- **Policy route** — send only to vendors that accept that class (do not dump casino onto a premium OTP bind)

Realtime is what keeps you **in the carrier's routing table**. Analysis without reject still lets the next burst through.

### 3. Both — recommended for wholesale

- Analysis **tunes** thresholds, sender packs, and URL/host fingerprints
- Realtime **enforces** them on every message
- Rejects and quarantines **feed** the next report so models follow new casino/scam templates

Run analysis-only while you learn a new originator; switch on realtime once policy is set; keep both on shared high-risk routes.

> The goal is not a public blacklist. The goal is that blocked A2P dies on your platform before the upstream moves you out of routing.

## On-demand detections

Clients ask IXC to look for the issues that actually get them dropped in their markets, for example:

- Casino / betting / slots promo (local language)
- Phishing and fake-OTP brand packs
- Investment / wallet-drain lures
- Short-link and domain hosts already tied to filtered A2P
- Originators tagged OTP who start sending promo

Tell IXC what to detect; mark a sample; run analysis, realtime, or both.

## What stays on the platform

AI does not replace the switch:

- SMS routing, billing, and switching on one stack
- SMPP 3.4
- Scale from low volume to thousands of messages per hour
- Buy or rent, 24/7/365 NOC
- Same company as wholesale voice if you run **both**

Content control is how that stack **stays interconnected**.

## Summary

A wholesale SMS platform is **SMPP**, **A2P routing**, and **billing**. Aggregators lose carrier routes when **casino, scam, and blocked A2P** reach the terminator. IXC adds **AI analysis**, **realtime detect-and-reject**, or **both** — so risky messages never leave your switch.

See [IXC SMS Platform](/products/sms-platform) or [talk to sales](/#get-in-touch).`;

const ru = `**Оптовая SMS-платформа** — это как агрегаторы покупают и продают **A2P**-трафик: **SMPP**-бинды, **маршрутизация** и **биллинг**. В 2026 этого стека недостаточно. Операторы снимают вас с маршрутизации, когда на доверенный bind утекают **casino, scam и другой blocked-контент** — и чистые OTP-клиенты теряют тот же route.

[IXC SMS Platform](/products/sms-platform) — коммутация и биллинг на [IXC Softswitch](/products/softswitch) (или отдельным модулем). **IXC SMS AI** на том же пути: **анализ**, **realtime detect-and-reject** или **оба режима**, чтобы рискованные сообщения умирали на вашем свитче, а не на фильтре терминатора.

## Что реально запускает wholesale SMS

Это не розничный SMS-шлюз. Оптовая SMS-компания стыкует:

- **Originators** — агрегаторы, enterprise, CPaaS, отправители OTP
- **Terminators** — MNO, другие оптовики, страновые маршруты
- **SMPP 3.4** (часто и HTTP) как протокол bind
- **Потарифную оценку каждого сообщения**, prepaid-кошельки, postpaid-кредит
- **DLR (delivery reports)** как метрику качества — SMS-аналог ASR

Платформа должна маршрутизировать, тарифицировать и делать failover. И доказывать апстриму, что mix, который вы шлёте, — тот, который заявляли.

## SMPP, A2P-маршрутизация и биллинг

### SMPP 3.4

**SMPP** — как wholesale SMS ходит между платформами: bind, submit, DLR, лимиты throughput. IXC говорит на **SMPP 3.4**, на базе софтсвитча или как **отдельный модуль** (можно с одного сервера).

### A2P-маршрутизация

**A2P (application-to-person)** — OTP, алерты, уведомления и маркетинг. Маршрутизация — это не «самый дешёвый префикс»:

- Назначение **MCC-MNC** / оператор
- **DLR**, латентность и throttle поставщика
- Sender ID и политика registered vs unregistered
- Failover, когда bind или вендор падает
- Разделение коммерческих классов, чтобы транзакционный трафик не смешивался с promo на маршруте, где promo запрещён

Та же идея, что [LCR для голоса](/blog/lcr-routing-voip), только вместо ASR — delivery rate.

### Биллинг

Каждое сообщение — тарифицируемое событие, аналог голосового [CDR](/blog/voip-billing-softswitch):

- Prepaid и postpaid originators
- Buy/sell по направлениям
- Кредитные лимиты и баланс в реальном времени
- Счета и отчёты по трафику

Без биллинга wholesale не работает. Без контроля контента вы **не удержите** открытые routes.

## Почему умирают маршруты: casino, scam и blocked A2P

Апстрим и MNO фильтруют:

- **Casino / gambling** promo
- **Scam и phishing** — фейковые банки, фейковые OTP, «подтвердите кошелёк»
- **Подмена бренда** и шумные/вредоносные короткие ссылки
- **Adult / high-risk**, где интерконнект это запрещает
- Другие пакеты, которые рынок назначения считает **blocked content**

Типичная цепочка: жалобы и срабатывания контент-фильтра, затем **ваш bind или IP снимают с маршрутизации**. Вы узнаёте, когда падает DLR и аккаунт-менеджер говорит, что route закрыт.

Списки ключевых слов отстают. Шаблоны меняются. Один originator может отравить общий транк за ночь. Оптовикам нужно **видеть mix** и **останавливать сообщение до submit на апстрим**.

## IXC SMS AI — анализ, realtime или оба

Та же коммерческая идея, что [AI-анализ звонков](/blog/voip-call-analysis-ai): знать, что вы несёте, затем действовать. SMS — текст, поэтому можно дальше: **reject на пути submit**.

Режим выбираете по клиенту и по маршруту.

### 1. Анализ — know your traffic

Вы **отмечаете** originator, день, направление или выборку сохранённых сообщений. IXC возвращает **отчёт профиля трафика**:

- Доля **casino / gambling**
- Признаки **scam / phishing / social-engineering**
- Транзакционные **OTP / alerts** vs promo
- **Adult / high-risk**, где это важно
- Другие вертикали, которые назовёт команда (**on-demand detections**)

Отчёт — чтобы пересчитать цену, заморозить originator, показать оператору чистый профиль или решить, какие пакеты меток включать в realtime. Коммерческий слой: *знать свой трафик* до спора про DLR.

### 2. Realtime — detect и reject до оператора

На каждом **submit** (SMPP или API) AI смотрит **текст, sender и направление** по вашей политике, затем:

- **Pass** — чистый транзакционный / разрешённый класс
- **Reject** — ошибка originator'у; терминатор **не видит** сообщение
- **Quarantine** — на ревью, а не на сжигание route
- **Policy route** — только к вендорам, которые принимают этот класс (не сливать casino на premium OTP bind)

Realtime держит вас **в routing table оператора**. Анализ без reject пропускает следующий всплеск.

### 3. Оба — рекомендуется для wholesale

- Анализ **настраивает** пороги, пакеты sender'ов и fingerprints URL/хостов
- Realtime **исполняет** их на каждом сообщении
- Reject и quarantine **кормят** следующий отчёт, чтобы модели ловили новые casino/scam шаблоны

Анализ, пока изучаете нового originator; realtime, когда политика зафиксирована; оба режима — на общих высокорисковых маршрутах.

> Цель — не публичный чёрный список. Цель — чтобы blocked A2P умирал на вашей платформе до того, как апстрим снимет вас с маршрутизации.

## On-demand детекции

Клиенты просят IXC искать то, из-за чего их реально снимают на их рынках, например:

- Casino / betting / slots promo (локальный язык)
- Phishing и пакеты фейковых OTP под бренды
- Инвест-/wallet-drain приманки
- Короткие ссылки и домены, уже связанные с filtered A2P
- Originators с тегом OTP, которые начинают слать promo

Скажите IXC, что детектировать; отметьте выборку; запустите анализ, realtime или оба.

## Что остаётся на платформе

AI не заменяет свитч:

- Маршрутизация, биллинг и коммутация SMS на одном стеке
- SMPP 3.4
- Масштаб от малого объёма до тысяч сообщений в час
- Покупка или аренда, NOC 24/7/365
- Та же компания, что и wholesale voice, если ведёте **оба** направления

Контроль контента — как этот стек **остаётся в интерконнекте**.

## Итог

Оптовая SMS-платформа — это **SMPP**, **A2P-маршрутизация** и **биллинг**. Агрегаторы теряют carrier routes, когда **casino, scam и blocked A2P** доходят до терминатора. IXC добавляет **AI-анализ**, **realtime detect-and-reject** или **оба** — чтобы рискованные сообщения не покидали ваш свитч.

[IXC SMS Platform](/products/sms-platform) · [написать в sales](/#get-in-touch).`;

const uk = `**Оптова SMS-платформа** — як агрегатори купують і продають **A2P**-трафік: **SMPP**-бінди, **маршрутизація** та **білінг**. У 2026 цього стека замало. Оператори знімають вас із маршрутизації, коли на довірений bind потрапляють **casino, scam та інший blocked-контент** — і чисті OTP-клієнти втрачають той самий route.

[IXC SMS Platform](/products/sms-platform) — комутація плюс білінг на [IXC Softswitch](/products/softswitch) (або окремим модулем). **IXC SMS AI** на тому ж шляху: **аналіз**, **realtime detect-and-reject** або **обидва режими**, щоб ризиковані повідомлення помирали на вашому свічі, а не на фільтрі термінатора.

## Що насправді запускає wholesale SMS

Це не роздрібний SMS-шлюз. Оптова SMS-компанія стикує:

- **Originators** — агрегатори, enterprise, CPaaS, відправники OTP
- **Terminators** — MNO, інші оптовики, країнові маршрути
- **SMPP 3.4** (часто й HTTP) як протокол bind
- **Потарифну оцінку кожного повідомлення**, prepaid-гаманці, postpaid-кредит
- **DLR (delivery reports)** як метрику якості — SMS-аналог ASR

Платформа має маршрутизувати, тарифікувати й робити failover. І доводити апстріму, що mix, який ви шлете, — той, який заявляли.

## SMPP, A2P-маршрутизація та білінг

### SMPP 3.4

**SMPP** — як wholesale SMS ходить між платформами: bind, submit, DLR, ліміти throughput. IXC говорить **SMPP 3.4**, на базі софтсвіча або як **окремий модуль** (можна з одного сервера).

### A2P-маршрутизація

**A2P (application-to-person)** — OTP, алерти, сповіщення та маркетинг. Маршрутизація — це не «найдешевший префікс»:

- Призначення **MCC-MNC** / оператор
- **DLR**, латентність і throttle постачальника
- Sender ID і політика registered vs unregistered
- Failover, коли bind або вендор падає
- Розділення комерційних класів, щоб транзакційний трафік не змішувався з promo на маршруті, де promo заборонено

Та сама ідея, що [LCR для голосу](/blog/lcr-routing-voip), лише замість ASR — delivery rate.

### Білінг

Кожне повідомлення — тарифікована подія, аналог голосового [CDR](/blog/voip-billing-softswitch):

- Prepaid і postpaid originators
- Buy/sell за напрямками
- Кредитні ліміти та баланс у реальному часі
- Рахунки й звіти по трафіку

Без білінгу wholesale не працює. Без контролю контенту ви **не втримаєте** відкриті routes.

## Чому вмирають маршрути: casino, scam і blocked A2P

Апстрім і MNO фільтрують:

- **Casino / gambling** promo
- **Scam і phishing** — фейкові банки, фейкові OTP, «підтвердіть гаманець»
- **Підміна бренду** та шумні/шкідливі короткі посилання
- **Adult / high-risk**, де інтерконект це забороняє
- Інші пакети, які ринок призначення вважає **blocked content**

Типовий ланцюг: скарги й спрацювання контент-фільтра, потім **ваш bind або IP знімають із маршрутизації**. Ви дізнаєтесь, коли падає DLR і акаунт-менеджер каже, що route закрито.

Списки ключових слів відстають. Шаблони змінюються. Один originator може отруїти спільний транк за ніч. Оптовикам потрібно **бачити mix** і **зупиняти повідомлення до submit на апстрім**.

## IXC SMS AI — аналіз, realtime або обидва

Та сама комерційна ідея, що [AI-аналіз дзвінків](/blog/voip-call-analysis-ai): знати, що ви несете, потім діяти. SMS — текст, тож можна далі: **reject на шляху submit**.

Режим обираєте по клієнту і по маршруту.

### 1. Аналіз — know your traffic

Ви **позначаєте** originator, день, напрямок або вибірку збережених повідомлень. IXC повертає **звіт профілю трафіку**:

- Частка **casino / gambling**
- Ознаки **scam / phishing / social-engineering**
- Транзакційні **OTP / alerts** vs promo
- **Adult / high-risk**, де це важливо
- Інші вертикалі, які назве команда (**on-demand detections**)

Звіт — щоб перерахувати ціну, заморозити originator, показати оператору чистий профіль або вирішити, які пакети міток вмикати в realtime. Комерційний шар: *знати свій трафік* до суперечки про DLR.

### 2. Realtime — detect і reject до оператора

На кожному **submit** (SMPP або API) AI дивиться **текст, sender і напрямок** за вашою політикою, потім:

- **Pass** — чистий транзакційний / дозволений клас
- **Reject** — помилка originator'у; термінатор **не бачить** повідомлення
- **Quarantine** — на рев'ю, а не на спалення route
- **Policy route** — лише до вендорів, які приймають цей клас (не зливати casino на premium OTP bind)

Realtime тримає вас **у routing table оператора**. Аналіз без reject пропускає наступний сплеск.

### 3. Обидва — рекомендовано для wholesale

- Аналіз **налаштовує** пороги, пакети sender'ів і fingerprints URL/хостів
- Realtime **виконує** їх на кожному повідомленні
- Reject і quarantine **живлять** наступний звіт, щоб моделі ловили нові casino/scam шаблони

Аналіз, поки вивчаєте нового originator; realtime, коли політику зафіксовано; обидва режими — на спільних високоризикових маршрутах.

> Мета — не публічний чорний список. Мета — щоб blocked A2P помирав на вашій платформі до того, як апстрім зніме вас із маршрутизації.

## On-demand детекції

Клієнти просять IXC шукати те, через що їх реально знімають на їхніх ринках, наприклад:

- Casino / betting / slots promo (локальна мова)
- Phishing і пакети фейкових OTP під бренди
- Інвест-/wallet-drain приманки
- Короткі посилання й домени, вже пов'язані з filtered A2P
- Originators із тегом OTP, які починають слати promo

Скажіть IXC, що детектити; позначте вибірку; запустіть аналіз, realtime або обидва.

## Що лишається на платформі

AI не замінює свіч:

- Маршрутизація, білінг і комутація SMS на одному стеку
- SMPP 3.4
- Масштаб від малого обсягу до тисяч повідомлень на годину
- Купівля або оренда, NOC 24/7/365
- Та сама компанія, що й wholesale voice, якщо ведете **обидва** напрямки

Контроль контенту — як цей стек **лишається в інтерконекті**.

## Підсумок

Оптова SMS-платформа — це **SMPP**, **A2P-маршрутизація** та **білінг**. Агрегатори втрачають carrier routes, коли **casino, scam і blocked A2P** доходять до термінатора. IXC додає **AI-аналіз**, **realtime detect-and-reject** або **обидва** — щоб ризиковані повідомлення не покидали ваш свіч.

[IXC SMS Platform](/products/sms-platform) · [написати в sales](/#get-in-touch).`;

const zh = `**批发短信平台**是聚合商买卖 **A2P** 话务的方式：**SMPP** 绑定、**路由**与**计费**。到 2026 年，这一套已经不够。当**赌场、诈骗和其他被拦截内容**漏到运营商信任的 bind 上，他们会把你移出路由——你的干净 OTP 客户也会丢掉同一条线路。

[IXC SMS Platform](/products/sms-platform) 是在 [IXC Softswitch](/products/softswitch) 上的交换加计费（也可作独立模块）。**IXC SMS AI** 走同一路径：**分析**、**实时检测并拒绝**，或**两者一起**，让高风险消息死在你的交换机上，而不是死在落地运营商的过滤器上。

## 批发聚合商实际在跑什么

这不是零售短信网关。批发短信公司对接的是：

- **Originators** — 聚合商、企业、CPaaS、OTP 发送方
- **Terminators** — MNO、其他批发商、国家路由
- **SMPP 3.4**（也常用 HTTP）作为 bind 协议
- **按条评级**、预付钱包、后付信用
- **DLR（送达报告）**作为质量指标——短信侧的 ASR

平台必须路由、计费、故障切换，还要向上游证明：你发出去的 mix，就是你声称的 mix。

## SMPP、A2P 路由与计费

### SMPP 3.4

**SMPP** 是批发短信在平台之间流动的方式：bind、submit、DLR、吞吐限制。IXC 支持 **SMPP 3.4**，基于软交换，或作为**独立模块**（可从单台服务器起步）。

### A2P 路由

**A2P（application-to-person）** 是 OTP、告警、通知与营销。路由不是“最便宜的前缀”：

- 目的地 **MCC-MNC** / 运营商
- 供应商 **DLR**、时延与限速
- Sender ID 以及已登记 / 未登记策略
- bind 或供应商故障时的 failover
- 商业类别隔离，避免把事务类话务混进禁止营销的路由

与[语音 LCR](/blog/lcr-routing-voip) 同一思路，只是用送达率代替 ASR。

### 计费

每条消息都是一次评级事件——对应语音 [CDR](/blog/voip-billing-softswitch)：

- 预付与后付 originators
- 按目的地的买卖费率
- 信用额度与实时余额
- 发票与话务报表

没有计费就做不了批发。没有内容控制，你**留不住**已经开通的路由。

## 路由为何被砍：赌场、诈骗与被拦截 A2P

上游运营商和 MNO 会过滤：

- **赌场 / 博彩**营销
- **诈骗与钓鱼** — 假银行、假 OTP、“验证你的钱包”
- **品牌仿冒**以及嘈杂或恶意短链
- 互联禁止的 **成人 / 高风险**内容
- 目的地市场视为 **blocked content** 的其他类别

典型顺序：投诉与内容过滤命中，然后**你的 bind 或 IP 被移出路由**。你往往在 DLR 崩掉、客户经理说线路已关时才知道。

关键词名单跟不上。模板会轮换。一个 originator 就能在一夜之间污染共享中继。批发商需要**看清 mix**，并在**提交到上游之前拦住消息**。

## IXC SMS AI — 分析、实时，或两者

与[语音 AI 呼叫分析](/blog/voip-call-analysis-ai)同一商业逻辑：先知道你在承载什么，再行动。短信是文本，因此可以更进一步——在 **submit 路径上拒绝**。

按客户、按路由选择模式。

### 1. 分析 — 了解你的话务

你**标记**某个 originator、某一天、某个目的地，或一批已存消息。IXC 返回**话务画像报告**：

- **赌场 / 博彩**占比
- **诈骗 / 钓鱼 / 社会工程**信号
- 事务类 **OTP / 告警** vs 营销
- 相关的 **成人 / 高风险**
- 团队点名的其他垂直（**按需检测**）

用报告来重新定价、冻结 originator、向上游出示干净画像，或决定哪些标签包进入实时策略。这是商务层：在争论 DLR 之前，*先知道你的话务*。

### 2. 实时 — 在运营商之前检测并拒绝

每次 **submit**（SMPP 或 API），AI 按你的策略检查**正文、发送方与目的地**，然后：

- **Pass** — 干净的事务类 / 允许类别
- **Reject** — originator 收到错误；落地**看不到**该消息
- **Quarantine** — 留审，而不是烧掉一条路由
- **Policy route** — 只发给接受该类别的供应商（不要把赌场流量倒进优质 OTP bind）

实时，才是让你**留在运营商路由表里**的能力。只有分析、没有拒绝，下一波爆发仍会穿过去。

### 3. 两者 — 批发场景建议如此

- 分析**调优**阈值、发送方包、URL/主机指纹
- 实时在每条消息上**执行**
- 拒绝与隔离**回灌**下一份报告，使模型跟上新的赌场/诈骗模板

熟悉新 originator 时先做分析；策略定稿后打开实时；共享高风险路由上两者并用。

> 目标不是一份公开黑名单。目标是：被拦截的 A2P 死在你的平台上，而不是等上游把你移出路由。

## 按需检测

客户请 IXC 查找真正导致他们在当地被下线路的问题，例如：

- 赌场 / 竞猜 / 老虎机营销（本地语言）
- 钓鱼与假 OTP 品牌包
- 投资 / 掏空钱包诱饵
- 已与 filtered A2P 关联的短链与域名
- 打着 OTP 标签却开始发营销的 originators

告诉 IXC 要检测什么；标记样本；跑分析、实时或两者。

## 平台上仍然保留什么

AI 不取代交换机：

- 同一套栈上的短信路由、计费与交换
- SMPP 3.4
- 从低量到每小时数千条
- 可买可租，NOC 24/7/365
- 若你同时做**语音批发**，仍是同一家公司

内容控制，是这套栈**保持互联**的方式。

## 小结

批发短信平台是 **SMPP**、**A2P 路由**与**计费**。当**赌场、诈骗和被拦截 A2P**到达落地运营商，聚合商就会丢掉路由。IXC 提供 **AI 分析**、**实时检测并拒绝**，或**两者**——让高风险消息不离开你的交换机。

见 [IXC SMS Platform](/products/sms-platform) 或[联系销售](/#get-in-touch)。`;

export const wholesaleSmsPlatformPost: BlogPost = {
  slug: 'wholesale-sms-platform',
  date: '2026-09-17',
  updated: '2026-09-17',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: [
    'wholesale sms',
    'smpp',
    'a2p',
    'sms billing',
    'sms fraud',
    'casino sms',
    'ai',
    'sms aggregator'
  ],
  image: 'https://ixc.ua/blog/wholesale-sms-platform-og.jpg',
  localImage: '/blog/wholesale-sms-platform.jpg',
  imageObjectFit: 'contain',
  en: {
    title: 'Wholesale SMS Platform: SMPP, A2P Routing, Billing & AI Content Control',
    description:
      'Wholesale SMS for aggregators: SMPP 3.4, A2P routing, billing, plus AI analysis or real-time reject of casino/scam SMS before carriers drop your routes.',
    excerpt:
      'SMPP, A2P routing, and billing — plus AI analysis and realtime detect-and-reject so casino and scam SMS never reach the terminator.',
    content: en,
    faq: [
      {
        q: 'What is a wholesale SMS platform?',
        a: 'Software that interconnects SMS originators and terminators with SMPP (typically 3.4), A2P routing, per-message billing, DLR, and credit control — the SMS equivalent of a Class 4 switch plus billing.'
      },
      {
        q: 'What is the difference between analysis and realtime SMS AI?',
        a: 'Analysis is a batch traffic-profile report on marked messages or originators (casino, scam, OTP vs promo, and on-demand packs). Realtime inspects each submit and can pass, reject, quarantine, or policy-route before the upstream carrier sees the message. IXC offers either mode or both.'
      },
      {
        q: 'Why do carriers remove SMS wholesalers from routing?',
        a: 'Usually content: casino/gambling, phishing, brand impersonation, or other blocked A2P on a bind they trusted. DLR then collapses for every customer on that trunk, not only the offender.'
      },
      {
        q: 'Does reject happen before the terminator?',
        a: 'Yes. In realtime mode the originator receives the error on submit; the terminator never sees the message. That is the point — protect the interconnect, not clean up after a complaint.'
      },
      {
        q: 'Can detections be customized?',
        a: 'Yes. Clients specify on-demand packs for the markets that actually drop them — local-language casino, fake-OTP brands, hosts, or OTP accounts leaking promo — then run analysis, realtime, or both.'
      }
    ]
  },
  ru: {
    title: 'Оптовая SMS-платформа: SMPP, A2P, биллинг и AI-контроль контента',
    description:
      'Wholesale SMS для агрегаторов: SMPP 3.4, A2P-маршрутизация, биллинг и AI-анализ или realtime reject casino/scam SMS до снятия с маршрутизации.',
    excerpt:
      'SMPP, A2P-маршрутизация и биллинг — плюс AI-анализ и realtime detect-and-reject, чтобы casino и scam не доходили до терминатора.',
    content: ru,
    faq: [
      {
        q: 'Что такое оптовая SMS-платформа?',
        a: 'ПО, которое стыкует SMS originators и terminators по SMPP (обычно 3.4), с A2P-маршрутизацией, тарификацией каждого сообщения, DLR и кредитным контролем — SMS-аналог софтсвитча класса 4 с биллингом.'
      },
      {
        q: 'Чем анализ отличается от realtime SMS AI?',
        a: 'Анализ — пакетный отчёт профиля трафика по отмеченным сообщениям или originators (casino, scam, OTP vs promo, on-demand пакеты). Realtime смотрит каждый submit и может pass, reject, quarantine или policy-route до того, как апстрим увидит сообщение. IXC даёт любой режим или оба.'
      },
      {
        q: 'Почему операторы снимают SMS-оптовиков с маршрутизации?',
        a: 'Чаще всего контент: casino/gambling, phishing, подмена бренда или другой blocked A2P на доверенном bind. DLR падает у всех клиентов на этом транке, не только у нарушителя.'
      },
      {
        q: 'Reject происходит до терминатора?',
        a: 'Да. В realtime originator получает ошибку на submit; терминатор сообщение не видит. Смысл — защитить интерконнект, а не разбирать жалобу после факта.'
      },
      {
        q: 'Можно ли кастомизировать детекции?',
        a: 'Да. Клиенты задают on-demand пакеты под рынки, где их реально снимают — casino на локальном языке, фейковые OTP-бренды, хосты или OTP-аккаунты, с которых пошёл promo — затем анализ, realtime или оба.'
      }
    ]
  },
  uk: {
    title: 'Оптова SMS-платформа: SMPP, A2P, білінг і AI-контроль контенту',
    description:
      'Wholesale SMS для агрегаторів: SMPP 3.4, A2P-маршрутизація, білінг і AI-аналіз або realtime reject casino/scam SMS до зняття з маршрутизації.',
    excerpt:
      'SMPP, A2P-маршрутизація та білінг — плюс AI-аналіз і realtime detect-and-reject, щоб casino і scam не доходили до термінатора.',
    content: uk,
    faq: [
      {
        q: 'Що таке оптова SMS-платформа?',
        a: 'ПЗ, яке стикує SMS originators і terminators по SMPP (зазвичай 3.4), з A2P-маршрутизацією, тарифікацією кожного повідомлення, DLR і кредитним контролем — SMS-аналог софтсвіча класу 4 з білінгом.'
      },
      {
        q: 'Чим аналіз відрізняється від realtime SMS AI?',
        a: 'Аналіз — пакетний звіт профілю трафіку по позначених повідомленнях або originators (casino, scam, OTP vs promo, on-demand пакети). Realtime дивиться кожен submit і може pass, reject, quarantine або policy-route до того, як апстрім побачить повідомлення. IXC дає будь-який режим або обидва.'
      },
      {
        q: 'Чому оператори знімають SMS-оптовиків із маршрутизації?',
        a: 'Найчастіше контент: casino/gambling, phishing, підміна бренду або інший blocked A2P на довіреному bind. DLR падає в усіх клієнтів на цьому транку, не лише в порушника.'
      },
      {
        q: 'Reject відбувається до термінатора?',
        a: 'Так. У realtime originator отримує помилку на submit; термінатор повідомлення не бачить. Сенс — захистити інтерконект, а не розбирати скаргу після факту.'
      },
      {
        q: 'Чи можна кастомізувати детекції?',
        a: 'Так. Клієнти задають on-demand пакети під ринки, де їх реально знімають — casino місцевою мовою, фейкові OTP-бренди, хости або OTP-акаунти, з яких пішов promo — потім аналіз, realtime або обидва.'
      }
    ]
  },
  zh: {
    title: '批发短信平台：SMPP、A2P 路由、计费与 AI 内容控制',
    description:
      '面向聚合商的批发短信：SMPP 3.4、A2P 路由、计费，以及在运营商下线路之前对赌场/诈骗短信的 AI 分析或实时拒绝。',
    excerpt:
      'SMPP、A2P 路由与计费——外加 AI 分析与实时检测拒绝，让赌场与诈骗短信到不了落地运营商。',
    content: zh,
    faq: [
      {
        q: '什么是批发短信平台？',
        a: '用 SMPP（通常 3.4）对接短信 originators 与 terminators 的软件，含 A2P 路由、按条计费、DLR 与信用控制——相当于带计费的 4 类交换机的短信版。'
      },
      {
        q: '短信 AI 的分析与实时有何不同？',
        a: '分析是对已标记消息或 originators 的批量话务画像（赌场、诈骗、OTP vs 营销，以及按需包）。实时检查每一次 submit，可在上游看到消息之前放行、拒绝、隔离或按策略改路。IXC 提供任一模式或两者。'
      },
      {
        q: '运营商为何把短信批发商移出路由？',
        a: '通常是内容：赌场/博彩、钓鱼、品牌仿冒，或其他被拦截 A2P 出现在他们信任的 bind 上。随后整条中继上所有客户的 DLR 都会崩掉，不只是肇事方。'
      },
      {
        q: '拒绝是否发生在落地之前？',
        a: '是。实时模式下 originator 在 submit 时收到错误；落地看不到该消息。目的是保护互联，而不是在投诉之后再清理。'
      },
      {
        q: '检测能否定制？',
        a: '可以。客户按真正会下线路的市场指定按需包——本地语言赌场、假 OTP 品牌、主机，或 OTP 账户泄漏营销——然后跑分析、实时或两者。'
      }
    ]
  }
};
