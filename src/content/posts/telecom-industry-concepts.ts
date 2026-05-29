import type { BlogPost } from '../blogPosts';

const en = `The telecom industry has its own vocabulary — **LATAs**, **interexchange carriers**, **softswitches**, **LCR**, **CDRs**. This guide explains the core concepts a modern VoIP operator needs, from the legacy PSTN terms that still shape regulation to the IP technology that runs today's networks.

## How the telephone network is structured

Traditional telephony splits the world into local serving areas and the carriers that connect them:

- A **local exchange carrier (LEC)** handles calls inside a local area — historically a single **telephone exchange** identified by area code and prefix (NPA-NXX).
- An **interexchange carrier (IXC)**, commonly called a long-distance company, carries traffic *between* those areas. In U.S. terminology, an IXC moves calls across multiple **local access and transport areas (LATAs)** — so-called interLATA traffic.
- Each carrier is assigned a four-digit **carrier identification code (CIC)**, and the default long-distance carrier on a line is the **presubscribed interexchange carrier (PIC)**.

These distinctions predate VoIP, but they still drive numbering, interconnection rules, and how calls are rated as local, intraLATA, or interLATA.

## From hardware switches to softswitches

The PSTN routed calls through proprietary hardware switches. Modern networks replace them with a **softswitch** — software that controls call routing on commodity servers.

For voice traffic transfer, carriers now use **softswitches and VoIP protocols** instead of tandem switches and SS7 alone. **Internet telephony service providers (ITSPs)** use this to bridge VoIP↔POTS, computer-to-phone, and IP devices to legacy phone services.

A softswitch separates every call into two planes:

- **Signaling** — call setup and teardown, usually over **SIP** (or **H.323** in older networks).
- **Media** — the audio itself, carried as **RTP** using codecs like G.711, G.729, or Opus.

## Class 4 vs Class 5

The PSTN's switch hierarchy survives as a naming convention:

- A **Class 4 softswitch** handles **wholesale** carrier-to-carrier transit and termination — high volumes, LCR, protocol conversion, and fraud control.
- A **Class 5 softswitch** delivers **retail** subscriber features — IVR, voicemail, call forwarding, and DID management.

See our [Class 4 vs Class 5 guide](/blog/class-4-vs-class-5-softswitch) for a deeper comparison.

## Routing and least cost routing (LCR)

When a call arrives, the softswitch chooses a supplier based on rules: priority, percentage split, quality, or **least cost routing (LCR)** — picking the cheapest viable route that still meets quality targets. Good routing balances **margin** against **ASR/ACD/PDD** quality metrics. More in our [LCR routing guide](/blog/lcr-routing-voip).

## Billing and CDRs

Every completed call produces a **CDR (Call Detail Record)** — the timestamped, rated record used for invoicing. A billing engine rates each CDR against tariffs and updates **prepaid** or **postpaid** balances in real time. This is the foundation of [VoIP billing on a softswitch](/blog/voip-billing-softswitch).

## Interconnection, termination, and origination

- **Origination** — where a call enters the network (the calling side).
- **Termination** — delivering the call to its final destination network.
- **Interconnection** — the commercial and technical agreements that let carriers exchange traffic, settle minutes, and route between networks.

## Key terms at a glance

- **PSTN** — the legacy public switched telephone network.
- **VoIP** — voice carried over IP rather than circuit-switched lines.
- **SIP / RTP** — signaling and media protocols of modern voice.
- **DID** — a direct inward dialing number assigned to a subscriber.
- **CLI / CLD** — calling and called number identifiers used in routing and fraud rules.
- **FAS** — false answer supervision, billing for calls that never truly connected.

## Summary

Today's VoIP networks still live inside the regulatory and numbering framework of the PSTN — LATAs, interexchange carriers, and carrier codes — while running on software. A softswitch ties these worlds together: it routes calls with LCR, bridges VoIP to legacy networks, and meters every second into CDRs for billing.`;

const ru = `У телеком-отрасли свой словарь — **LATA**, **межоператорские операторы (IXC)**, **софтсвитчи**, **LCR**, **CDR**. Это руководство объясняет ключевые концепции, нужные современному VoIP-оператору: от устаревших терминов PSTN, которые до сих пор определяют регулирование, до IP-технологий сегодняшних сетей.

## Как устроена телефонная сеть

Традиционная телефония делит мир на локальные зоны обслуживания и операторов, которые их соединяют:

- **Местный оператор связи (LEC)** обслуживает вызовы внутри локальной зоны — исторически одной телефонной станции (NPA-NXX).
- **Межоператорский оператор (IXC)**, обычно — компания дальней связи, передаёт трафик *между* зонами. В терминологии США IXC передаёт вызовы между несколькими **local access and transport areas (LATA)** — это interLATA-трафик.
- Каждому оператору присвоен четырёхзначный **код идентификации оператора (CIC)**, а оператор дальней связи по умолчанию на линии — это **presubscribed interexchange carrier (PIC)**.

Эти различия появились до VoIP, но они до сих пор определяют нумерацию, правила присоединения и тарификацию вызовов как местных, intraLATA или interLATA.

## От аппаратных коммутаторов к софтсвитчам

PSTN маршрутизировала вызовы через проприетарные аппаратные коммутаторы. Современные сети заменяют их **софтсвитчем** — ПО, управляющим маршрутизацией на обычных серверах.

Для передачи голоса операторы используют **софтсвитчи и VoIP-протоколы** вместо только тандемных коммутаторов и SS7. **Провайдеры интернет-телефонии (ITSP)** так соединяют VoIP↔POTS, компьютер-телефон и IP-устройства с устаревшими телефонными сервисами.

Софтсвитч делит каждый вызов на две плоскости:

- **Сигнализация** — установление и завершение вызова, обычно по **SIP** (или **H.323** в старых сетях).
- **Медиа** — собственно звук в виде **RTP** с кодеками G.711, G.729 или Opus.

## Класс 4 и класс 5

Иерархия коммутаторов PSTN сохранилась как соглашение об именовании:

- **Софтсвитч класса 4** — **оптовый** транзит и терминация между операторами: большие объёмы, LCR, конвертация протоколов и контроль фрода.
- **Софтсвитч класса 5** — **розничные** абонентские функции: IVR, голосовая почта, переадресация и управление DID.

Подробнее — в нашем [сравнении класса 4 и класса 5](/blog/class-4-vs-class-5-softswitch).

## Маршрутизация и least cost routing (LCR)

Когда приходит вызов, софтсвитч выбирает поставщика по правилам: приоритет, процентное распределение, качество или **least cost routing (LCR)** — самый дешёвый маршрут, который ещё удовлетворяет целям качества. Хорошая маршрутизация балансирует **маржу** и метрики **ASR/ACD/PDD**. Подробнее — в [руководстве по LCR](/blog/lcr-routing-voip).

## Биллинг и CDR

Каждый состоявшийся вызов формирует **CDR (Call Detail Record)** — тарифицированную запись с метками времени для выставления счетов. Биллинг тарифицирует каждый CDR по тарифам и обновляет **предоплатные** или **постоплатные** балансы в реальном времени. Это основа [биллинга VoIP на софтсвитче](/blog/voip-billing-softswitch).

## Присоединение, терминация и origination

- **Origination** — где вызов входит в сеть (вызывающая сторона).
- **Терминация** — доставка вызова в конечную сеть назначения.
- **Присоединение (interconnection)** — коммерческие и технические соглашения, позволяющие операторам обмениваться трафиком и взаиморасчётами.

## Ключевые термины кратко

- **PSTN** — устаревшая телефонная сеть общего пользования.
- **VoIP** — голос по IP вместо коммутации каналов.
- **SIP / RTP** — протоколы сигнализации и медиа современной связи.
- **DID** — номер прямого набора, назначенный абоненту.
- **CLI / CLD** — идентификаторы вызывающего и вызываемого номера в маршрутизации и правилах антифрода.
- **FAS** — false answer supervision, тарификация несостоявшихся вызовов.

## Итог

Современные VoIP-сети живут внутри регуляторной и нумерационной структуры PSTN — LATA, межоператорские операторы и коды операторов — но работают на ПО. Софтсвитч связывает эти миры: маршрутизирует вызовы с LCR, соединяет VoIP с устаревшими сетями и учитывает каждую секунду в CDR для биллинга.`;

const uk = `У телеком-галузі свій словник — **LATA**, **міжоператорські оператори (IXC)**, **софтсвічі**, **LCR**, **CDR**. Цей посібник пояснює ключові концепції, потрібні сучасному VoIP-оператору: від застарілих термінів PSTN, що досі визначають регулювання, до IP-технологій сьогоднішніх мереж.

## Як влаштована телефонна мережа

Традиційна телефонія ділить світ на локальні зони обслуговування та операторів, які їх з'єднують:

- **Місцевий оператор зв'язку (LEC)** обслуговує виклики всередині локальної зони — історично однієї телефонної станції (NPA-NXX).
- **Міжоператорський оператор (IXC)**, зазвичай — компанія далекого зв'язку, передає трафік *між* зонами. У термінології США IXC передає виклики між кількома **local access and transport areas (LATA)** — це interLATA-трафік.
- Кожному оператору присвоєно чотиризначний **код ідентифікації оператора (CIC)**, а оператор далекого зв'язку за замовчуванням на лінії — це **presubscribed interexchange carrier (PIC)**.

Ці відмінності з'явилися до VoIP, але вони досі визначають нумерацію, правила приєднання та тарифікацію викликів як місцевих, intraLATA чи interLATA.

## Від апаратних комутаторів до софтсвічів

PSTN маршрутизувала виклики через пропрієтарні апаратні комутатори. Сучасні мережі замінюють їх **софтсвічем** — ПЗ, що керує маршрутизацією на звичайних серверах.

Для передавання голосу оператори використовують **софтсвічі та VoIP-протоколи** замість лише тандемних комутаторів і SS7. **Провайдери інтернет-телефонії (ITSP)** так з'єднують VoIP↔POTS, комп'ютер-телефон та IP-пристрої із застарілими телефонними сервісами.

Софтсвіч ділить кожен виклик на дві площини:

- **Сигналізація** — встановлення та завершення виклику, зазвичай через **SIP** (або **H.323** у старіших мережах).
- **Медіа** — власне звук у вигляді **RTP** з кодеками G.711, G.729 чи Opus.

## Клас 4 і клас 5

Ієрархія комутаторів PSTN збереглася як угода про найменування:

- **Софтсвіч класу 4** — **оптовий** транзит і термінація між операторами: великі обсяги, LCR, конвертація протоколів і контроль фроду.
- **Софтсвіч класу 5** — **роздрібні** абонентські функції: IVR, голосова пошта, переадресація та керування DID.

Докладніше — у нашому [порівнянні класу 4 і класу 5](/blog/class-4-vs-class-5-softswitch).

## Маршрутизація та least cost routing (LCR)

Коли надходить виклик, софтсвіч обирає постачальника за правилами: пріоритет, відсотковий розподіл, якість або **least cost routing (LCR)** — найдешевший маршрут, що ще задовольняє цілі якості. Хороша маршрутизація балансує **маржу** та метрики **ASR/ACD/PDD**. Докладніше — у [посібнику з LCR](/blog/lcr-routing-voip).

## Білінг і CDR

Кожен успішний виклик формує **CDR (Call Detail Record)** — тарифікований запис із мітками часу для виставлення рахунків. Білінг тарифікує кожен CDR за тарифами й оновлює **передплачені** або **післяплачені** баланси в реальному часі. Це основа [білінгу VoIP на софтсвічі](/blog/voip-billing-softswitch).

## Приєднання, термінація та origination

- **Origination** — де виклик входить у мережу (сторона, що викликає).
- **Термінація** — доставка виклику в кінцеву мережу призначення.
- **Приєднання (interconnection)** — комерційні й технічні угоди, що дозволяють операторам обмінюватися трафіком і взаєморозрахунками.

## Ключові терміни стисло

- **PSTN** — застаріла телефонна мережа загального користування.
- **VoIP** — голос через IP замість комутації каналів.
- **SIP / RTP** — протоколи сигналізації та медіа сучасного зв'язку.
- **DID** — номер прямого набору, призначений абоненту.
- **CLI / CLD** — ідентифікатори номера, що викликає та викликаного, у маршрутизації та правилах антифроду.
- **FAS** — false answer supervision, тарифікація невдалих викликів.

## Підсумок

Сучасні VoIP-мережі живуть усередині регуляторної та нумераційної структури PSTN — LATA, міжоператорські оператори й коди операторів — але працюють на ПЗ. Софтсвіч пов'язує ці світи: маршрутизує виклики з LCR, з'єднує VoIP із застарілими мережами та обліковує кожну секунду в CDR для білінгу.`;

export const telecomIndustryConceptsPost: BlogPost = {
  slug: 'telecom-industry-concepts',
  path: '/telecom-industry-concepts',
  date: '2026-05-29',
  updated: '2026-05-29',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: ['telecom', 'interexchange carrier', 'softswitch', 'voip', 'lata', 'pstn', 'lcr'],
  image: 'https://ixc.ua/blog/telecom-industry-concepts.png',
  localImage: '/blog/telecom-industry-concepts.png',
  imageObjectFit: 'contain',
  en: {
    title: 'Telecom Industry Concepts: IXC, Softswitch, LCR & Billing',
    description:
      'Core telecom concepts for VoIP carriers: interexchange carriers (IXC), LATAs, softswitch, Class 4/5, SIP/RTP, LCR routing, CDRs, and billing — explained.',
    excerpt:
      'From interexchange carriers and LATAs to softswitches, LCR, and CDRs — the essential telecom industry concepts every VoIP operator should know.',
    content: en,
    faq: [
      {
        q: 'What is an interexchange carrier (IXC)?',
        a: 'An interexchange carrier is a long-distance telephone company that carries traffic between local serving areas (LATAs), as opposed to a local exchange carrier that handles calls within one area.'
      },
      {
        q: 'How do softswitches relate to interexchange carriers?',
        a: 'Modern interexchange carriers and ITSPs use softswitches and VoIP protocols instead of legacy tandem switches, letting them bridge VoIP to POTS and route long-distance traffic over IP.'
      },
      {
        q: 'What is the difference between Class 4 and Class 5?',
        a: 'A Class 4 softswitch handles wholesale carrier-to-carrier transit and termination, while a Class 5 softswitch delivers retail subscriber features such as IVR, voicemail, and call forwarding.'
      },
      {
        q: 'What is a CDR in telecom?',
        a: 'A Call Detail Record is the timestamped, rated record of a completed call that a billing engine uses to charge prepaid or postpaid balances.'
      }
    ]
  },
  ru: {
    title: 'Концепции телеком-отрасли: IXC, софтсвитч, LCR и биллинг',
    description:
      'Ключевые телеком-концепции для VoIP-операторов: межоператорские операторы (IXC), LATA, софтсвитч, класс 4/5, SIP/RTP, LCR, CDR и биллинг.',
    excerpt:
      'От межоператорских операторов и LATA до софтсвитчей, LCR и CDR — основные концепции телеком-отрасли для каждого VoIP-оператора.',
    content: ru,
    faq: [
      {
        q: 'Что такое межоператорский оператор (IXC)?',
        a: 'Это компания дальней связи, которая передаёт трафик между локальными зонами обслуживания (LATA), в отличие от местного оператора, обслуживающего вызовы внутри одной зоны.'
      },
      {
        q: 'Как софтсвитчи связаны с межоператорскими операторами?',
        a: 'Современные IXC и ITSP используют софтсвитчи и VoIP-протоколы вместо устаревших тандемных коммутаторов, что позволяет соединять VoIP с POTS и маршрутизировать дальний трафик по IP.'
      },
      {
        q: 'Чем отличается класс 4 от класса 5?',
        a: 'Софтсвитч класса 4 обслуживает оптовый транзит и терминацию между операторами, а класс 5 предоставляет розничные функции: IVR, голосовую почту, переадресацию.'
      },
      {
        q: 'Что такое CDR в телекоме?',
        a: 'Call Detail Record — это тарифицированная запись состоявшегося вызова с метками времени, по которой биллинг списывает средства с предоплатных или постоплатных балансов.'
      }
    ]
  },
  uk: {
    title: 'Концепції телеком-галузі: IXC, софтсвіч, LCR та білінг',
    description:
      'Ключові телеком-концепції для VoIP-операторів: міжоператорські оператори (IXC), LATA, софтсвіч, клас 4/5, SIP/RTP, LCR, CDR та білінг.',
    excerpt:
      'Від міжоператорських операторів і LATA до софтсвічів, LCR і CDR — основні концепції телеком-галузі для кожного VoIP-оператора.',
    content: uk,
    faq: [
      {
        q: 'Що таке міжоператорський оператор (IXC)?',
        a: 'Це компанія далекого зв\u2019язку, яка передає трафік між локальними зонами обслуговування (LATA), на відміну від місцевого оператора, що обслуговує виклики всередині однієї зони.'
      },
      {
        q: 'Як софтсвічі пов\u2019язані з міжоператорськими операторами?',
        a: 'Сучасні IXC та ITSP використовують софтсвічі та VoIP-протоколи замість застарілих тандемних комутаторів, що дозволяє з\u2019єднувати VoIP із POTS і маршрутизувати далекий трафік через IP.'
      },
      {
        q: 'Чим відрізняється клас 4 від класу 5?',
        a: 'Софтсвіч класу 4 обслуговує оптовий транзит і термінацію між операторами, а клас 5 надає роздрібні функції: IVR, голосову пошту, переадресацію.'
      },
      {
        q: 'Що таке CDR у телекомі?',
        a: 'Call Detail Record — це тарифікований запис успішного виклику з мітками часу, за яким білінг списує кошти з передплачених або післяплачених балансів.'
      }
    ]
  }
};
