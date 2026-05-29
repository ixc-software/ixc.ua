import type { BlogPost } from '../blogPosts';

const en = `Accurate **VoIP billing** turns routed minutes into revenue. On a **softswitch**, every **CDR (Call Detail Record)** feeds rating, balances, and finance exports.

## How billing works

When a call ends, the switch records CLI/CLD, duration, disconnect cause, customer and vendor, and applied rates. The billing engine rates the CDR and updates prepaid or postpaid balances.

## Prepaid vs postpaid

**Prepaid** — balance must cover the call before or as it completes; common for wholesalers, calling cards, and high-risk accounts.

**Postpaid** — invoicing on a cycle from aggregated CDRs; common for contracted carriers with credit limits.

Many platforms support **both** with shared routing and reporting.

## Rating essentials

- Rate decks per prefix with effective dates and billing increments (6+6, 1+1)
- Tariff plans per customer or product line
- Rounding rules matching commercial terms
- Automated vendor rate import to avoid manual lag

## Operational visibility

Finance needs accurate CDRs; operations needs them sooner:

- Live balances and credit warnings
- Margin by destination, vendor, and customer
- CDR search for disputes
- Alerts when balances cross thresholds

Quality monitoring ties ASR drops to revenue risk on the same data.

## Common failures

- Delayed CDRs that drive invoice disputes
- Wrong prefix lengths causing systematic under-billing
- Poor disconnect-code mapping for failed calls
- Separate billing systems that drift from routing

## Summary

Billing on a softswitch should be real-time, prefix-accurate, and visible to both finance and NOC — especially when prepaid exposure is high.`;

const ru = `Точный **биллинг VoIP** превращает минуты в выручку. На **софтсвитче** каждая **CDR** питает тарификацию, балансы и экспорт в финансы.

## Как работает биллинг

После вызова фиксируются CLI/CLD, длительность, код завершения, клиент и поставщик, тарифы. Движок тарифицирует CDR и обновляет предоплату или постоплату.

## Предоплата и постоплата

**Предоплата** — баланс должен покрывать вызов до или при завершении; типично для опта и calling card.

**Постоплата** — счета по циклам из агрегированных CDR; типично для контрактных операторов с кредитными лимитами.

Многие платформы поддерживают **обе** модели на общих маршрутах и отчётах.

## Основы тарификации

- Тарифы по префиксу с датами и инкрементами (6+6, 1+1)
- Тарифные планы на клиента
- Правила округления по договору
- Автоимпорт тарифов поставщиков

## Операционная видимость

Финансам нужны точные CDR; операциям — раньше:

- Живые балансы и предупреждения
- Маржа по направлению, поставщику, клиенту
- Поиск CDR для споров
- Алерты по порогам баланса

Мониторинг качества связывает падение ASR с риском выручки.

## Типичные сбои

- Задержка CDR и споры по счетам
- Ошибки длины префикса и недобилливание
- Слабый маппинг disconnect codes
- Отдельный биллинг, расходящийся с маршрутизацией

## Итог

Биллинг на софтсвитче должен быть realtime, точным по префиксам и видимым финансам и NOC — особенно при высокой предоплатной экспозиции.`;

const uk = `Точний **білінг VoIP** перетворює хвилини на виручку. На **софтсвічі** кожна **CDR** живить тарифікацію, баланси та експорт у фінанси.

## Як працює білінг

Після виклику фіксуються CLI/CLD, тривалість, код завершення, клієнт і постачальник, тарифи. Рушій тарифікує CDR і оновлює передоплату чи післяплату.

## Передоплата й післяплата

**Передоплата** — баланс має покривати виклик до або під час завершення; типово для опту та calling card.

**Післяплата** — рахунки за циклами з агрегованих CDR; типово для контрактних операторів із кредитними лімітами.

Багато платформ підтримують **обидві** моделі на спільних маршрутах і звітах.

## Основи тарифікації

- Тарифи за префіксом із датами та інкрементами (6+6, 1+1)
- Тарифні плани на клієнта
- Правила округлення за договором
- Автоімпорт тарифів постачальників

## Операційна видимість

Фінансам потрібні точні CDR; операціям — раніше:

- Живі баланси та попередження
- Маржа за напрямком, постачальником, клієнтом
- Пошук CDR для спорів
- Сповіщення за порогами балансу

Моніторинг якості пов’язує падіння ASR із ризиком виручки.

## Типові збої

- Затримка CDR і спори за рахунками
- Помилки довжини префікса й недобіллювання
- Слабкий маппінг disconnect codes
- Окремий білінг, що розходиться з маршрутизацією

## Підсумок

Білінг на софтсвічі має бути realtime, точним за префіксами й видимим фінансам і NOC — особливо за високої передоплатної експозиції.`;

export const voipBillingPost: BlogPost = {
  slug: 'voip-billing-softswitch',
  date: '2026-05-08',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: ['voip billing', 'cdr', 'prepaid voip', 'softswitch', 'rate deck'],
  image: 'https://ixc.ua/blog/voip-billing-softswitch.png',
  localImage: '/blog/voip-billing-softswitch.png',
  imageObjectFit: 'contain',
  en: {
    title: 'VoIP Billing on a Softswitch: Prepaid, Postpaid & Real-Time CDR',
    description:
      'How VoIP softswitch billing works: CDR rating, prepaid vs postpaid, rate decks, real-time balances, and avoiding revenue leaks.',
    excerpt:
      'CDR-based billing, prepaid and postpaid models, rate management, and the reports carriers need on a VoIP softswitch.',
    content: en,
    faq: [
      {
        q: 'What is a CDR in VoIP?',
        a: 'A Call Detail Record logs each call with numbers, duration, rates, and disconnect cause — the basis for billing and margin analysis.'
      },
      {
        q: 'Can one softswitch handle prepaid and postpaid?',
        a: 'Yes. Many platforms support both models with shared routing, balances, and reporting.'
      },
      {
        q: 'How fast should prepaid balances update?',
        a: 'Ideally in real time before or as calls complete to limit credit exposure.'
      }
    ]
  },
  ru: {
    title: 'Биллинг VoIP на софтсвитче: предоплата, постоплата и CDR в реальном времени',
    description:
      'Как работает биллинг на софтсвитче: CDR, предоплата и постоплата, тарифы и балансы без потерь выручки.',
    excerpt:
      'Биллинг по CDR, модели предоплаты и постоплаты, управление тарифами и отчёты в реальном времени.',
    content: ru,
    faq: [
      {
        q: 'Что такое CDR в VoIP?',
        a: 'Call Detail Record — запись вызова с номерами, длительностью, тарифами и кодом завершения; основа биллинга и маржи.'
      },
      {
        q: 'Может ли один софтсвитч вести предоплату и постоплату?',
        a: 'Да. Многие платформы поддерживают обе модели с общей маршрутизацией и балансами.'
      },
      {
        q: 'Как быстро обновляются балансы при предоплате?',
        a: 'Желательно в реальном времени до или при завершении вызова, чтобы ограничить кредитный риск.'
      }
    ]
  },
  uk: {
    title: 'Білінг VoIP на софтсвічі: передоплата, післяплата та CDR у реальному часі',
    description:
      'Як працює білінг на софтсвічі: CDR, передоплата й післяплата, тарифи та баланси без втрат виручки.',
    excerpt:
      'Білінг за CDR, моделі передоплати й післяплати, керування тарифами та звіти в реальному часі.',
    content: uk,
    faq: [
      {
        q: 'Що таке CDR у VoIP?',
        a: 'Call Detail Record — запис виклику з номерами, тривалістю, тарифами та кодом завершення; основа білінгу та маржі.'
      },
      {
        q: 'Чи може один софтсвіч вести передоплату й післяплату?',
        a: 'Так. Багато платформ підтримують обидві моделі зі спільною маршрутизацією та балансами.'
      },
      {
        q: 'Як швидко оновлюються баланси при передоплаті?',
        a: 'Бажано в реальному часі до або під час завершення виклику, щоб обмежити кредитний ризик.'
      }
    ]
  }
};
