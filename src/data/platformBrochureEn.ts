import type { BrochureData } from './platformBrochureTypes';

export const platformBrochureEn: BrochureData = {
  pageTitle: 'IXC Softswitch — product walkthrough',
  pageSubtitle:
    'Screens, reports, and tools from the live platform: dashboard, CDRs, access lists, billing, monitoring, autotester, and NOC support.',
  breadcrumb: 'Platform walkthrough',
  keyFeaturesTitle: 'Key features at a glance',
  keyFeatures: [
    {
      label: 'High capacity',
      text: 'Up to 4,000 VoIP channels per server, CPS up to 800, unlimited horizontal scalability.'
    },
    {
      label: 'Intelligent routing',
      text: 'LCR, ACD/ASR, PDD, priority, percentage-based, and A- / B-number routing; inheriting and time-based routing.'
    },
    {
      label: 'Protocol flexibility',
      text: 'SIP and H.323 with transcoding; SMS (SMPP 3.4) support.'
    },
    {
      label: 'Access list',
      text: 'Allow/deny list management with auto-adding and auto-resetting.'
    },
    {
      label: 'Route quality control',
      text: 'Automatic route tester with live voice recordings, quality monitoring, and FAS detection.'
    },
    {
      label: 'Codec support',
      text: 'Major VoIP and GSM codecs with real-time transcoding.'
    },
    {
      label: 'Integrated security',
      text: 'Proprietary SIP firewall against spam and unauthorized access.'
    },
    {
      label: 'API integration',
      text: 'Ready-to-use JSON API for external apps, including Telegram bot support.'
    },
    {
      label: 'Flexible SIP profiles',
      text: 'Customizable profiles for any SIP call scenario per RFC expectations.'
    },
    {
      label: 'CPS limitation',
      text: 'Reject unnecessary attempts under overload without hurting real traffic.'
    },
    {
      label: 'Automated billing',
      text: 'Invoices and bills generated automatically in customer time zones.'
    },
    {
      label: 'Modern web UI',
      text: 'Financial, operational, and management reports; dark and light theme.'
    },
    {
      label: 'Automated rate management',
      text: 'Rate upload and distribution from IMAP, with Telegram notifications.'
    },
    {
      label: 'Traffic monitoring',
      text: 'Continuous quality monitoring and alerting.'
    },
    {
      label: 'Call routing history',
      text: 'Inspect call path (callpath) from CDR reports.'
    },
    {
      label: 'Customer portal',
      text: 'Active calls and report overview for clients in real time.'
    },
    {
      label: 'Testing tools',
      text: 'Built-in SIP traffic generation for scenario testing.'
    },
    {
      label: 'Data protection',
      text: 'Automatic backups and two-factor authentication.'
    },
    {
      label: '24/7 NOC',
      text: 'Live multilingual support (EN, RU) around the clock.'
    }
  ],
  sections: [
    {
      id: 'main',
      title: 'Main page',
      images: [{ file: 'main_full_blured.png', alt: 'IXC main dashboard' }],
      subsections: [
        {
          title: 'Left side',
          items: [
            {
              label: 'Softswitches status',
              text: 'Status of all softswitches, total and connected calls in real time.'
            },
            {
              label: 'CPS (calls per second)',
              text: 'CPS per IP for each switch, with per–softswitch CPS limit controls.'
            },
            {
              label: 'Customers with low balance',
              text: 'List of customers with low balance, current balance, burn rate, and what remains.'
            },
            {
              label: 'Top 10 daily traffic',
              text: "Today's top 10, grouped for inbound and outbound."
            },
            {
              label: 'Most increased traffic (24h)',
              text: 'Destinations with the largest traffic growth in the last 24 hours.'
            },
            {
              label: 'Most decreased traffic (24h)',
              text: 'Largest traffic drops; optional warning emails in one click.'
            },
            {
              label: 'Target destinations',
              text: 'High attempt count and lower quality to focus tuning.'
            },
            {
              label: 'Top destinations',
              text: 'Destinations with the best call quality right now.'
            },
            {
              label: 'Recent price changes',
              text: 'Latest terminator and originator price edits with who changed them.'
            },
            {
              label: 'Recently created peers',
              text: 'Latest terminator and originator points with their key details.'
            },
            {
              label: 'Active web sessions',
              text: 'Current web users with IP and session time.'
            }
          ]
        },
        {
          title: 'Right side',
          items: [
            {
              label: 'Dynamic graph of active calls',
              text: 'Live total and connected calls, filterable for analysis.'
            },
            {
              label: 'Static graph by softswitch',
              text: 'How active calls are spread across all softswitches.'
            },
            {
              label: 'ASR, ACD, and profit',
              text: 'Overall ASR, ACD, and margin trends over time.'
            }
          ]
        }
      ]
    },
    {
      id: 'traffic-flow',
      title: 'Traffic flow report',
      images: [{ file: 'tf_report.png', alt: 'IXC traffic flow report' }],
      body: [
        'Customer and vendor traffic in one place, grouped by destination, with strong filters, sorting, and row color rules. Each row can open detailed call stats for the destination you select.'
      ]
    },
    {
      id: 'ot-calls',
      title: 'Originator/terminator calls report',
      images: [{ file: 'oc_whole.png', alt: 'IXC origination/termination calls report' }],
      body: [
        'The main CDR view: group by hour, day, or week, with destination operator detail. Filter by A/B number masks, duration, margin, PDD, disconnect reason, and more. Custom layout templates, color rules, auto-refresh, and XLS/CSV export.'
      ]
    },
    {
      id: 'routing-history',
      title: 'Call routing history',
      images: [{ file: 'oc_calls.png', alt: 'IXC call routing history in reports' }],
      body: [
        'When you use “Calls” in the report, you see the winning route and every attempt, including PDD and release codes, with direct links to full reports of rejected legs for root-cause analysis.'
      ]
    },
    {
      id: 'variation',
      title: 'Variation report (traffic trend)',
      images: [{ file: 'variat_report.png', alt: 'IXC traffic variation report' }],
      body: [
        'Absolute and relative change over days, weeks, or months, grouped by destination or customer, with filters for up/down trends and a custom percentage change threshold.'
      ]
    },
    {
      id: 'access-list',
      title: 'Access list (white/black list)',
      images: [
        { file: 'al_rules.png', alt: 'IXC access list — rules' },
        { file: 'al_list.png', alt: 'IXC access list — numbers' }
      ],
      body: [
        'GSM blocking is a real issue for many termination networks. IXC Access List steers specific numbers to chosen carriers (terminator or originator). Upload your lists; the system can maintain them and expire entries on a schedule. Use whitelist or blacklist mode.',
        'Routes use called numbers (CLD) and/or caller ID (CLI/ANI) as you configure.'
      ],
      extraBlocks: [
        {
          title: 'Whitelist scenario',
          body: 'Only the numbers you list for a chosen carrier are allowed on that path. Everything else on that leg fails over to your remaining terminators, so the carrier is reserved for the traffic you intend.'
        },
        {
          title: 'Blacklist scenario',
          body: 'Listed numbers are blocked for the chosen terminator, while others still flow. Useful when anti-fraud sends repeated test calls to a fixed set of numbers.'
        }
      ]
    },
    {
      id: 'balance',
      title: 'Balance report',
      images: [{ file: 'br_report.png', alt: 'IXC customer balance report' }],
      body: [
        'A full money view per customer: inbound and outbound, invoices, payments, debt, credit limit, and live balance. Open a customer to see the full transaction chain — invoices, payments, credits, and adjustments.'
      ]
    },
    {
      id: 'commitments',
      title: 'Agreements and commitments',
      images: [
        { file: 'comm_list.png', alt: 'IXC commitments list' },
        { file: 'comm_graph.png', alt: 'IXC commitment traffic graph' }
      ],
      body: [
        'Define target volumes by date range and destination. The system accrues daily, sends reminders if you fall short, and you can open a traffic graph for each deal.'
      ]
    },
    {
      id: 'profit',
      title: 'Profit report',
      images: [{ file: 'profit_report.png', alt: 'IXC profit report' }],
      body: [
        'Margin and volume in clear charts, with time grouping and filters for destinations or customers.'
      ]
    },
    {
      id: 'invoices',
      title: 'Invoices and bills',
      images: [{ file: 'bills.png', alt: 'IXC invoices and bills' }],
      body: [
        'Invoices are generated and emailed on each billing close in the customer’s time zone. Vendor bills are staged as “pending” until a real vendor invoice arrives, then you apply, pay, or reject if amounts disagree.'
      ]
    },
    {
      id: 'auto-rate',
      title: 'Auto rate upload',
      images: [
        { file: 'tg_increase.png', alt: 'IXC auto rate — Telegram rate increase' },
        { file: 'price_import_result.png', alt: 'IXC auto rate import result' }
      ],
      body: [
        'After a price template is tied to a customer, you can import rates to the right trunks from mail. If a same-day price increase is detected, confirm via a Telegram summary or reject the file. The vendor receives the outcome by email in both cases.'
      ]
    },
    {
      id: 'live-balance',
      title: 'Live balance checks',
      images: [{ file: 'tg_balance.png', alt: 'IXC live balance — Telegram' }],
      body: [
        'Every call is checked against your credit engine. When a limit is hit, the account is restricted and the manager gets a Telegram action with a quick way to add balance and restore service.'
      ]
    },
    {
      id: 'routing-rules',
      title: 'Routing table',
      images: [{ file: 'routing_list.png', alt: 'IXC routing table' }],
      body: [
        'All rules for an originator in one place: match criteria, price, priority, and reuse across tables. Schedule route open, close, or swap in bulk, with CSV in and out for mass change.'
      ]
    },
    {
      id: 'current-routes',
      title: 'Current routes',
      images: [{ file: 'current_routes.png', alt: 'IXC current routes' }],
      body: [
        'Pick a destination to see every supplier, rate, volume, and quality, plus any pending price increases, so you can set sell rates with confidence.'
      ]
    },
    {
      id: 'monitoring',
      title: 'IXC monitoring tool',
      images: [
        { file: 'monit_rule.png', alt: 'IXC monitoring — rule' },
        { file: 'monit_items.png', alt: 'IXC monitoring — events' }
      ],
      body: [
        'Track live ASR, ACD, PDD, and profit, compare to thresholds, and raise alerts. Rules can target originators and terminators with flexible groupings. Events are stored for post-mortems.',
        'Notifications go to email, Telegram, or an automatic block on the affected path. You can also send a supplier trouble-ticket message to speed up repairs.'
      ]
    },
    {
      id: 'autotester',
      title: 'IXC Autotester',
      images: [{ file: 'autotester.png', alt: 'IXC Autotester' }],
      body: [
        'Automated multi-route, multi-destination tests with live RTP and MP3 recordings, ideal for new interconnects. Schedule recurring runs and deliver results to email. SIP and H.323, codecs such as G.711, G.723, and G.729, with playback in the browser or download for offline review.'
      ]
    },
    {
      id: 'noc',
      title: '24/7 NOC support',
      images: [{ file: 'support.png', alt: 'IXC NOC support' }],
      body: [
        'Over 25 years of round-the-clock operations support. The team is available for your questions, feedback, and new ideas on how you want IXC to work for you.'
      ]
    }
  ],
  ctaTitle: 'Request a live session',
  ctaText: 'See routing, CDR, and billing in your own workflow — contact sales for a walkthrough or pilot.',
  ctaContact: 'Contact sales',
  ctaHome: 'Back to home'
};
