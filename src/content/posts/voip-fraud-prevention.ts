import type { BlogPost } from '../blogPosts';

const en = `**VoIP fraud** can drain a prepaid balance in minutes. A carrier **softswitch** is the first control point when routing, lists, and monitoring live together.

## Common fraud types

- **Toll fraud / traffic pumping** — stolen credentials to high-rate destinations
- **IRSF** — collusion on expensive termination
- **PBX hacking** — weak customer credentials abused to originate calls
- **FAS** — billing for calls that never connected properly
- **CLI spoofing / SIM-box** — manipulated A-numbers bypass pricing or quality rules

Losses appear as sudden balance drops, ASR anomalies, or margin collapse on specific prefixes.

## Edge security

- Strong SIP authentication and IP ACLs
- SIP firewall with rate limits and geo blocks
- DDoS and INVITE-flood protection on signaling
- TLS/SRTP where partners support it

## Routing controls

- Per-account credit and CPS limits
- Destination allow/deny lists for premium ranges
- Maximum call duration caps
- Dynamic white/black lists on CLI/CLD with expiry and bulk import

## Detection

Fraud often shows in metrics before invoices:

- ASR/ACD/PDD thresholds with actionable alerts (not unreadable email floods)
- Margin alerts when a destination turns negative
- Scheduled autotests with recordings to catch FAS
- Auto-block or deprioritize routes when quality fails

## Response playbook

- Freeze account or set CPS to zero
- Add hot prefixes to network-wide blacklists
- Capture SIP trace/PCAP for disputes
- Rotate credentials and force re-registration
- CDR review to find the first fraudulent pattern

On prepaid traffic, speed beats the attacker’s dialer.

## Summary

Effective fraud control combines **edge security**, **routing policy**, **real-time monitoring**, and **route testing** — integrated on the switch, not spread across disconnected tools.`;

const ru = `**VoIP-фрод** может обнулить предоплатный баланс за минуты. Операторский **софтсвитч** — первая точка контроля, когда маршрутизация, списки и мониторинг связаны.

## Типы фрода

- **Toll fraud / накрутка** — украденные учётные данные на дорогие направления
- **IRSF** — сговор на дорогой терминации
- **Взлом PBX** — слабые пароли клиента
- **FAS** — тарификация несостоявшихся вызовов
- **Подмена CLI / SIM-box** — обход правил цены и качества

Потери: резкое падение баланса, аномалии ASR, коллапс маржи по префиксам.

## Безопасность на границе

- SIP-аутентификация и IP ACL
- SIP firewall, rate limit, геоблоки
- Защита от DDoS и INVITE-flood
- TLS/SRTP где возможно

## Контроль маршрутизации

- Кредитные и CPS лимиты на аккаунт
- Allow/deny премиум-направлений
- Лимит длительности вызова
- Динамические белые/чёрные списки CLI/CLD

## Обнаружение

- Пороги ASR/ACD/PDD с полезными алертами
- Алерты маржи
- Автотесты с записями против FAS
- Автоблок или понижение маршрута при падении качества

## Реагирование

- Заморозка аккаунта, CPS = 0
- Чёрные списки по сети
- SIP trace/PCAP
- Смена credentials
- Разбор CDR по паттерну

На предоплате важна скорость.

## Итог

Контроль фрода = **безопасность границы**, **политика маршрутизации**, **мониторинг в реальном времени** и **тест маршрутов** на одной платформе.`;

const uk = `**VoIP-фрод** може обнулити передплачений баланс за хвилини. Операторський **софтсвіч** — перша точка контролю, коли маршрутизація, списки й моніторинг пов’язані.

## Типи фроду

- **Toll fraud / накрутка** — викрадені облікові дані на дорогі напрямки
- **IRSF** — змова на дорогій термінації
- **Злам PBX** — слабкі паролі клієнта
- **FAS** — тарифікація невдалих викликів
- **Підміна CLI / SIM-box** — обхід правил ціни й якості

Втрати: різке падіння балансу, аномалії ASR, колапс маржі за префіксами.

## Безпека на межі

- SIP-автентифікація та IP ACL
- SIP firewall, rate limit, геоблоки
- Захист від DDoS і INVITE-flood
- TLS/SRTP де можливо

## Контроль маршрутизації

- Кредитні та CPS ліміти на акаунт
- Allow/deny преміум-напрямків
- Ліміт тривалості виклику
- Динамічні білі/чорні списки CLI/CLD

## Виявлення

- Пороги ASR/ACD/PDD із корисними сповіщеннями
- Сповіщення маржі
- Автотести з записами проти FAS
- Автоблок або зниження маршруту при падінні якості

## Реагування

- Заморозка акаунта, CPS = 0
- Чорні списки по мережі
- SIP trace/PCAP
- Зміна credentials
- Розбір CDR за патерном

На передоплаті важлива швидкість.

## Підсумок

Контроль фроду = **безпека межі**, **політика маршрутизації**, **моніторинг у реальному часі** та **тест маршрутів** на одній платформі.`;

export const voipFraudPost: BlogPost = {
  slug: 'voip-fraud-prevention',
  date: '2026-05-01',
  author: 'Oleksii Vinogradov',
  category: 'Guides',
  tags: ['voip fraud', 'sip security', 'fas', 'softswitch', 'blacklist'],
  image: 'https://ixc.ua/blog/voip-fraud-prevention.png',
  localImage: '/blog/voip-fraud-prevention.png',
  imageObjectFit: 'contain',
  en: {
    title: 'VoIP Fraud Prevention on a Softswitch: SIP Security & FAS',
    description:
      'Stop VoIP fraud on your softswitch: toll fraud, IRSF, FAS, SIP security, blacklists, and monitoring — a practical carrier playbook.',
    excerpt:
      'Toll fraud, FAS, and SIP attacks — how to limit losses with routing controls, blacklists, monitoring, and route testing.',
    content: en,
    faq: [
      {
        q: 'What is FAS in VoIP?',
        a: 'False Answer Supervision — a route signals answer before the call truly connects, allowing billing for traffic that did not reach the callee.'
      },
      {
        q: 'How fast can fraud drain a prepaid account?',
        a: 'Automated dialers can exhaust balances in minutes on high-rate destinations — real-time limits and alerts are essential.'
      },
      {
        q: 'What is the first step when fraud is suspected?',
        a: 'Stop exposure: freeze the account or cut CPS, blacklist hot prefixes, then trace CDRs and signaling to confirm the pattern.'
      }
    ]
  },
  ru: {
    title: 'Защита от VoIP-фрода на софтсвитче: SIP-безопасность и FAS',
    description:
      'VoIP-фрод на софтсвитче: toll fraud, IRSF, FAS, SIP-безопасность, списки и мониторинг — практический playbook.',
    excerpt:
      'Toll fraud, FAS и SIP-атаки — как снизить потери лимитами, списками, мониторингом и автотестом.',
    content: ru,
    faq: [
      {
        q: 'Что такое FAS в VoIP?',
        a: 'False Answer Supervision — маршрут сигнализирует ответ до реального соединения, и поставщик тарифицирует трафик, который не дошёл до абонента.'
      },
      {
        q: 'Как быстро фрод опустошает предоплатный счёт?',
        a: 'Автодозвон может исчерпать баланс за минуты — нужны лимиты и алерты в реальном времени.'
      },
      {
        q: 'Первый шаг при подозрении на фрод?',
        a: 'Остановить экспозицию: заморозить аккаунт или снизить CPS, занести префиксы в чёрный список, затем разобрать CDR и сигнализацию.'
      }
    ]
  },
  uk: {
    title: 'Захист від VoIP-фроду на софтсвічі: SIP-безпека та FAS',
    description:
      'VoIP-фрод на софтсвічі: toll fraud, IRSF, FAS, SIP-безпека, списки та моніторинг — практичний playbook.',
    excerpt:
      'Toll fraud, FAS і SIP-атаки — як зменшити втрати лімітами, списками, моніторингом і автотестом.',
    content: uk,
    faq: [
      {
        q: 'Що таке FAS у VoIP?',
        a: 'False Answer Supervision — маршрут сигналізує відповідь до реального з’єднання, і постачальник тарифікує трафік, який не дійшов до абонента.'
      },
      {
        q: 'Як швидко фрод спустошує передплачений рахунок?',
        a: 'Автодзвінок може вичерпати баланс за хвилини — потрібні ліміти й сповіщення в реальному часі.'
      },
      {
        q: 'Перший крок за підозри на фрод?',
        a: 'Зупинити експозицію: заморозити акаунт або знизити CPS, додати префікси в чорний список, потім розібрати CDR і сигналізацію.'
      }
    ]
  }
};
