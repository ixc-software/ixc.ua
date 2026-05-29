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
  }
};
