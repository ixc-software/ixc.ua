import type { BlogPost } from '../blogPosts';

const en = `Wholesale and retail VoIP operators often hear **Class 4** and **Class 5** when evaluating a **softswitch**. The labels come from the traditional telephone network but describe two different roles: carrier transit versus subscriber services.

## Class 4 softswitch

A **Class 4** (transit/tandem) switch routes **high-volume traffic between carriers**. It does not serve end subscribers directly.

Typical duties: wholesale termination and origination, **LCR**, protocol conversion (SIP/H.323), high channel capacity, interconnect billing, and carrier-scale anti-fraud.

## Class 5 softswitch

A **Class 5** switch connects **end users and business customers** with features they expect: DIDs, IVR, voicemail, forwarding, hunt groups, and self-service portals.

## How they differ

- **Users** — Class 4: carriers; Class 5: subscribers and SMBs
- **Traffic** — Class 4: few trunks, high volume; Class 5: many accounts, richer features
- **Billing** — Class 4: per-minute interconnect; Class 5: retail packages and balances
- **Metrics** — Class 4: ASR, PDD, margin; Class 5: ARPU, churn, feature use

## One platform or two?

- **Wholesale-only** — Class 4 is essential; Class 5 optional unless you resell with sub-accounts.
- **Retail-only** — Class 5 is core; some destinations still need wholesale peering behavior.
- **Hybrid** — Both on one stack avoids duplicate routing tables, CDR silos, and monitoring gaps.

## Summary

**Class 4** is transit and wholesale economics; **Class 5** is subscriber service delivery. Growing operators usually need both capabilities aligned on shared routing, billing, and quality data.`;

const ru = `Оптовые и розничные VoIP-операторы часто слышат про **класс 4** и **класс 5** при выборе **софтсвитча**. Термины пришли из классической сети, но описывают две роли: транзит между операторами и услуги абонентам.

## Софтсвитч класса 4

**Класс 4** (транзит) маршрутизирует **большие объёмы между операторами** и не обслуживает конечных абонентов.

Типичные задачи: оптовая терминация и оригинация, **LCR**, конвертация SIP/H.323, высокая ёмкость, interconnect-биллинг, антифрод.

## Софтсвитч класса 5

**Класс 5** подключает **конечных пользователей и бизнес-клиентов**: DID, IVR, голосовая почта, переадресация, порталы.

## Отличия

- **Пользователи** — класс 4: операторы; класс 5: абоненты и SMB
- **Трафик** — класс 4: мало транков, большой объём; класс 5: много счетов, больше функций
- **Биллинг** — класс 4: interconnect за минуту; класс 5: розничные пакеты и балансы
- **Метрики** — класс 4: ASR, PDD, маржа; класс 5: ARPU, отток

## Одна платформа или две?

- **Только опт** — класс 4 обязателен.
- **Только розница** — класс 5 в центре; для части направлений нужен оптовый пиринг.
- **Гибрид** — оба на одном стеке без дублирования маршрутов и CDR.

## Итог

**Класс 4** — транзит и оптовая экономика; **класс 5** — абонентские услуги. Растущим операторам обычно нужны обе роли на общих данных маршрутизации, биллинга и качества.`;

const uk = `Оптові та роздрібні VoIP-оператори часто чують про **клас 4** і **клас 5** під час оцінки **софтсвіча**. Терміни походять із класичної мережі, але описують дві ролі: транзит між операторами та послуги абонентам.

## Софтсвіч класу 4

**Клас 4** (транзит) маршрутизує **великі обсяги між операторами** і не обслуговує кінцевих абонентів.

Типові задачі: оптова термінація й оригінація, **LCR**, конвертація SIP/H.323, висока ємність, interconnect-білінг, антифрод.

## Софтсвіч класу 5

**Клас 5** підключає **кінцевих користувачів і бізнес-клієнтів**: DID, IVR, голосова пошта, переадресація, портали.

## Відмінності

- **Користувачі** — клас 4: оператори; клас 5: абоненти та SMB
- **Трафік** — клас 4: мало транків, великий обсяг; клас 5: багато рахунків, більше функцій
- **Білінг** — клас 4: interconnect за хвилину; клас 5: роздрібні пакети та баланси
- **Метрики** — клас 4: ASR, PDD, маржа; клас 5: ARPU, відтік

## Одна платформа чи дві?

- **Лише опт** — клас 4 обов’язковий.
- **Лише роздріб** — клас 5 у центрі; для частини напрямків потрібен оптовий пиринг.
- **Гібрид** — обидва на одному стеку без дублювання маршрутів і CDR.

## Підсумок

**Клас 4** — транзит і оптова економіка; **клас 5** — абонентські послуги. Зростаючим операторам зазвичай потрібні обидві ролі на спільних даних маршрутизації, білінгу та якості.`;

const zh = `批发与零售 VoIP 运营商在评估**软交换**时经常听到 **4 类**与 **5 类**。这些标签来自传统电话网，但描述的是两种不同角色：运营商过境与用户业务。

## 4 类软交换

**4 类**（过境/汇接）交换机路由**运营商之间的大容量话务**，并不直接服务最终用户。

典型职责：批发落地与发起、**LCR**、协议转换（SIP/H.323）、高通道容量、互联计费，以及运营商级反欺诈。

## 5 类软交换

**5 类**交换机连接**最终用户与企业客户**，提供他们期望的功能：DID、IVR、语音信箱、呼叫转移、寻线组与自助门户。

## 有何不同

- **用户** — 4 类：运营商；5 类：用户与中小企业
- **话务** — 4 类：中继少、容量大；5 类：账户多、功能更丰富
- **计费** — 4 类：按分钟互联；5 类：零售套餐与余额
- **指标** — 4 类：ASR、PDD、利润；5 类：ARPU、流失、功能使用

## 一套平台还是两套？

- **仅批发** — 4 类必不可少；除非以子账户转售，否则 5 类可选。
- **仅零售** — 5 类是核心；部分目的地仍需要批发对等行为。
- **混合** — 两者在同一套栈上，可避免重复路由表、CDR 孤岛与监控缺口。

## 小结

**4 类**是过境与批发经济；**5 类**是用户业务交付。成长中的运营商通常需要两者，并共享路由、计费与质量数据。`;

export const class4VsClass5Post: BlogPost = {
  slug: 'class-4-vs-class-5-softswitch',
  date: '2026-05-22',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: ['class 4 softswitch', 'class 5 softswitch', 'wholesale voip', 'retail voip', 'softswitch'],
  image: 'https://ixc.ua/blog/class-4-vs-class-5-softswitch.png',
  localImage: '/blog/class-4-vs-class-5-softswitch.png',
  imageObjectFit: 'contain',
  en: {
    title: 'Class 4 vs Class 5 Softswitch: What’s the Difference?',
    description:
      'Class 4 softswitch routes wholesale carrier traffic; Class 5 serves retail subscribers. Compare features, use cases, and when operators need both.',
    excerpt:
      'Wholesale transit vs retail subscriber services — how Class 4 and Class 5 softswitches differ and when operators need both.',
    content: en,
    faq: [
      {
        q: 'Can one softswitch handle Class 4 and Class 5?',
        a: 'Yes. Many platforms combine wholesale routing and retail subscriber features on a single routing and billing core.'
      },
      {
        q: 'Which class matters more for LCR?',
        a: 'LCR is primarily a Class 4 wholesale function, though retail routes can use similar logic for cost control.'
      },
      {
        q: 'Do I need Class 5 for wholesale-only?',
        a: 'Not always. Pure wholesalers focus on Class 4; Class 5 becomes relevant when you sell services directly to end users.'
      }
    ]
  },
  ru: {
    title: 'Софтсвитч класса 4 и 5: в чём разница?',
    description:
      'Софтсвитч класса 4 маршрутизирует оптовый трафик; класса 5 — розницу. Сравнение функций и сценариев, когда нужны оба.',
    excerpt:
      'Оптовый транзит и розничные абонентские услуги — чем отличаются софтсвитчи класса 4 и 5.',
    content: ru,
    faq: [
      {
        q: 'Может ли один софтсвитч вести класс 4 и 5?',
        a: 'Да. Многие платформы совмещают оптовую маршрутизацию и розничные функции на одном ядре.'
      },
      {
        q: 'LCR — это класс 4 или 5?',
        a: 'В основном класс 4; розница может использовать похожую логику для контроля себестоимости.'
      },
      {
        q: 'Нужен ли класс 5 только для опта?',
        a: 'Не всегда. Чистый опт фокусируется на классе 4; класс 5 нужен при продаже услуг конечным пользователям.'
      }
    ]
  },
  uk: {
    title: 'Софтсвіч класу 4 і 5: у чому різниця?',
    description:
      'Софтсвіч класу 4 маршрутизує оптовий трафік; класу 5 — роздріб. Порівняння функцій і сценаріїв, коли потрібні обидва.',
    excerpt:
      'Оптовий транзит і роздрібні абонентські послуги — чим відрізняються софтсвічі класу 4 і 5.',
    content: uk,
    faq: [
      {
        q: 'Чи може один софтсвіч вести клас 4 і 5?',
        a: 'Так. Багато платформ поєднують оптову маршрутизацію й роздрібні функції на одному ядрі.'
      },
      {
        q: 'LCR — це клас 4 чи 5?',
        a: 'Переважно клас 4; роздріб може використовувати подібну логіку для контролю собівартості.'
      },
      {
        q: 'Чи потрібен клас 5 лише для опту?',
        a: 'Не завжди. Чистий опт фокусується на класі 4; клас 5 потрібен при продажу послуг кінцевим користувачам.'
      }
    ]
  },
  zh: {
    title: '4 类与 5 类软交换：有何区别？',
    description:
      '4 类软交换路由批发运营商话务；5 类服务零售用户。对比功能、场景，以及何时两者都需要。',
    excerpt:
      '批发过境与零售用户业务——4 类与 5 类软交换有何不同，以及运营商何时两者都需要。',
    content: zh,
    faq: [
      {
        q: '一台软交换能否同时处理 4 类和 5 类？',
        a: '可以。许多平台在同一套路由与计费核心上结合批发路由与零售用户功能。'
      },
      {
        q: '对 LCR 而言哪一类更重要？',
        a: 'LCR 主要是 4 类批发功能，不过零售路由也可使用类似逻辑来控制成本。'
      },
      {
        q: '纯批发是否需要 5 类？',
        a: '不一定。纯批发商聚焦 4 类；当您直接向最终用户销售业务时，5 类才变得重要。'
      }
    ]
  }
};
