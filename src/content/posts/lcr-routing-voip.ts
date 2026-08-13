import type { BlogPost } from '../blogPosts';

const en = `**LCR (Least Cost Routing)** is how wholesale VoIP operators pick termination at the lowest cost that still meets quality rules. On a **softswitch**, LCR is live policy on every call — not a static spreadsheet.

## What LCR does

For each destination prefix the switch compares vendors by **rate**, **priority**, and **constraints** (quality, capacity, regulatory rules), then selects a path that minimizes cost within policy.

## Typical decision chain

- Normalize the dialed number (prefix rules, A/B-number policies)
- Match customer buy rate and vendor sell rates
- Drop blocked prefixes, exhausted capacity, or failed quality thresholds
- Rank routes by cost, percentage, or quality score
- Place the call with failover if the first choice fails
- Write a **CDR** for billing and margin analysis

## LCR vs simple priority

- **Fixed priority** — simple but may leave margin on the table
- **Load-sharing** — spreads capacity; cost may be suboptimal
- **Quality-based** — favors better ASR/ACD even if slightly more expensive
- **Full LCR** — dynamic ranking with quality floors and failover

Profitable networks usually combine **lowest cost with quality guards**.

## Data you need

Accurate rate sheets with effective dates, live ASR/ACD/PDD per vendor, CPS/channel limits, and real-time margin by destination.

## Common mistakes

- Routing to the cheapest vendor without FAS or ASR checks
- Stale vendor rates until billing shows negative margin
- No failover on single-vendor routes
- Ignoring A-number translation requirements

## Summary

LCR drives wholesale margin. Pair cost ranking with quality thresholds, failover, automated rate updates, and route testing before vendors enter the pool.`;

const ru = `**LCR (Least Cost Routing)** — выбор терминации с минимальной стоимостью при соблюдении правил качества. На **софтсвитче** LCR — живая политика на каждый вызов, а не статичная таблица.

## Что делает LCR

Для каждого префикса софтсвитч сравнивает поставщиков по **тарифу**, **приоритету** и **ограничениям** (качество, ёмкость, регуляторика) и выбирает путь с минимальной стоимостью в рамках политики.

## Типичная цепочка

- Нормализация номера (префиксы, A/B-number)
- Сопоставление buy/sell rate
- Отсев блокировок, лимитов и порогов качества
- Ранжирование по стоимости, проценту или качеству
- Установка вызова с failover
- Формирование **CDR** для биллинга и маржи

## LCR и простой приоритет

- **Фиксированный приоритет** — просто, но не всегда выгодно
- **Распределение нагрузки** — для ёмкости
- **По качеству** — лучший ASR/ACD
- **Полный LCR** — динамический рейтинг с порогами и failover

## Нужные данные

Актуальные тарифы, ASR/ACD/PDD в реальном времени, лимиты CPS/каналов, маржа по направлениям.

## Типичные ошибки

- Слепой самый дешёвый маршрут без проверки FAS/ASR
- Устаревшие тарифы поставщиков
- Отсутствие failover
- Игнор правил A-number

## Итог

LCR определяет маржу опта. Сочетайте рейтинг стоимости с порогами качества, failover, автообновлением тарифов и тестами маршрутов.`;

const uk = `**LCR (Least Cost Routing)** — вибір термінації з мінімальною вартістю за дотримання правил якості. На **софтсвічі** LCR — жива політика на кожен виклик, а не статична таблиця.

## Що робить LCR

Для кожного префікса софтсвіч порівнює постачальників за **тарифом**, **пріоритетом** і **обмеженнями** (якість, ємність, регуляторика) та обирає шлях із мінімальною вартістю в межах політики.

## Типовий ланцюжок

- Нормалізація номера (префікси, A/B-number)
- Зіставлення buy/sell rate
- Відсів блокувань, лімітів і порогів якості
- Ранжування за вартістю, відсотком або якістю
- Встановлення виклику з failover
- Формування **CDR** для білінгу та маржі

## LCR і простий пріоритет

- **Фіксований пріоритет** — просто, але не завжди вигідно
- **Розподіл навантаження** — для ємності
- **За якістю** — кращий ASR/ACD
- **Повний LCR** — динамічний рейтинг із порогами та failover

## Потрібні дані

Актуальні тарифи, ASR/ACD/PDD у реальному часі, ліміти CPS/каналів, маржа за напрямками.

## Типові помилки

- Сліпий найдешевший маршрут без перевірки FAS/ASR
- Застарілі тарифи постачальників
- Відсутність failover
- Ігнор правил A-number

## Підсумок

LCR визначає маржу опту. Поєднуйте рейтинг вартості з порогами якості, failover, автооновленням тарифів і тестами маршрутів.`;

const zh = `**LCR（Least Cost Routing，最低成本路由）**是批发 VoIP 运营商在满足质量规则的前提下，以最低成本选择落地的方式。在**软交换**上，LCR 是每通呼叫上的实时策略——而不是静态电子表格。

## LCR 做什么

对每个目的地前缀，交换机按**费率**、**优先级**与**约束**（质量、容量、监管规则）比较供应商，然后在策略范围内选择成本最低的路径。

## 典型决策链

- 规范化被叫号码（前缀规则、A/B 号码策略）
- 匹配客户买入费率与供应商卖出费率
- 剔除被拦前缀、耗尽容量或未达质量阈值的路由
- 按成本、百分比或质量分数排序路由
- 发起呼叫，首选失败则故障转移
- 写入 **CDR** 用于计费与利润分析

## LCR 与简单优先级

- **固定优先级** — 简单，但可能留下利润空间
- **负荷分担** — 分散容量；成本可能并非最优
- **基于质量** — 即使略贵也偏向更好的 ASR/ACD
- **完整 LCR** — 带质量下限与故障转移的动态排序

盈利网络通常把**最低成本与质量护栏**结合在一起。

## 您需要的数据

带生效日期的准确费率表、各供应商实时 ASR/ACD/PDD、CPS/通道限制，以及按目的地的实时利润。

## 常见错误

- 路由到最便宜供应商却不做 FAS 或 ASR 检查
- 供应商费率过期，直到计费才发现负利润
- 单供应商路由没有故障转移
- 忽略 A 号码变换要求

## 小结

LCR 驱动批发利润。将成本排序与质量阈值、故障转移、自动费率更新以及供应商入池前的路由测试结合起来。`;

export const lcrRoutingPost: BlogPost = {
  slug: 'lcr-routing-voip',
  date: '2026-05-15',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: ['lcr', 'voip routing', 'least cost routing', 'softswitch', 'wholesale voip'],
  image: 'https://ixc.ua/blog/lcr-routing-voip.png',
  localImage: '/blog/lcr-routing-voip.png',
  imageObjectFit: 'contain',
  en: {
    title: 'LCR Routing Explained: How VoIP Carriers Maximize Margin',
    description:
      'Least Cost Routing (LCR) on a VoIP softswitch: how it works, quality guards, failover, and common mistakes that hurt wholesale margin.',
    excerpt:
      'How LCR picks termination routes on a softswitch, what data you need, and how to protect margin without sacrificing ASR.',
    content: en,
    faq: [
      {
        q: 'What does LCR stand for in VoIP?',
        a: 'Least Cost Routing — selecting the lowest-cost termination path that meets your quality and policy rules.'
      },
      {
        q: 'Does LCR always pick the cheapest vendor?',
        a: 'It should pick the lowest cost among routes that pass quality thresholds. Blind cheapest-routing often increases FAS and failed calls.'
      },
      {
        q: 'What metrics should gate LCR decisions?',
        a: 'At minimum ASR, ACD, PDD, and margin per prefix; many operators also require autotest proof before promoting a vendor.'
      }
    ]
  },
  ru: {
    title: 'Маршрутизация LCR: как VoIP-операторы максимизируют маржу',
    description:
      'LCR на софтсвитче: как работает, защита по качеству, failover и типичные ошибки, снижающие маржу опта.',
    excerpt:
      'Как LCR выбирает маршруты терминации, какие данные нужны и как сохранить маржу без падения ASR.',
    content: ru,
    faq: [
      {
        q: 'Что означает LCR в VoIP?',
        a: 'Least Cost Routing — выбор пути терминации с минимальной стоимостью в рамках правил качества и политик.'
      },
      {
        q: 'LCR всегда выбирает самого дешёвого поставщика?',
        a: 'Среди маршрутов, прошедших пороги качества. Слепой выбор самого дешёвого часто увеличивает FAS и неуспешные вызовы.'
      },
      {
        q: 'Какие метрики должны ограничивать LCR?',
        a: 'Как минимум ASR, ACD, PDD и маржа по префиксу; многие требуют автотест перед включением поставщика.'
      }
    ]
  },
  uk: {
    title: 'Маршрутизація LCR: як VoIP-оператори максимізують маржу',
    description:
      'LCR на софтсвічі: як працює, захист за якістю, failover і типові помилки, що знижують маржу опту.',
    excerpt:
      'Як LCR обирає маршрути термінації, які дані потрібні та як зберегти маржу без падіння ASR.',
    content: uk,
    faq: [
      {
        q: 'Що означає LCR у VoIP?',
        a: 'Least Cost Routing — вибір шляху термінації з мінімальною вартістю в межах правил якості та політик.'
      },
      {
        q: 'LCR завжди обирає найдешевшого постачальника?',
        a: 'Серед маршрутів, що пройшли пороги якості. Сліпий вибір найдешевшого часто збільшує FAS і невдалі виклики.'
      },
      {
        q: 'Які метрики мають обмежувати LCR?',
        a: 'Щонайменше ASR, ACD, PDD і маржа за префіксом; багато хто вимагає автотест перед включенням постачальника.'
      }
    ]
  },
  zh: {
    title: 'LCR 路由解析：VoIP 运营商如何最大化利润',
    description:
      'VoIP 软交换上的最低成本路由（LCR）：工作原理、质量护栏、故障转移，以及损害批发利润的常见错误。',
    excerpt:
      '软交换如何用 LCR 选择落地路由、需要哪些数据，以及如何在不牺牲 ASR 的前提下保护利润。',
    content: zh,
    faq: [
      {
        q: 'VoIP 中的 LCR 是什么意思？',
        a: 'Least Cost Routing（最低成本路由）——在满足质量与策略规则的前提下，选择成本最低的落地路径。'
      },
      {
        q: 'LCR 是否总是选择最便宜的供应商？',
        a: '它应在通过质量阈值的路由中选择成本最低者。盲目选最便宜往往会增加 FAS 与失败呼叫。'
      },
      {
        q: '哪些指标应约束 LCR 决策？',
        a: '至少包括 ASR、ACD、PDD 以及按前缀的利润；许多运营商还要求自动测试通过后才提升供应商。'
      }
    ]
  }
};
