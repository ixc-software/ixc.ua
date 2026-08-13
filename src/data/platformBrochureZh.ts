import type { BrochureData } from './platformBrochureTypes';

export const platformBrochureZh: BrochureData = {
  pageTitle: 'IXC Softswitch — 产品导览',
  pageSubtitle:
    '来自现网平台的界面、报表与工具：仪表盘、CDR、访问列表、计费、监控、自动测试器与 NOC 支持。',
  breadcrumb: '平台导览',
  keyFeaturesTitle: '核心功能一览',
  keyFeatures: [
    {
      label: '高容量',
      text: '每台服务器最多 4,000 条 VoIP 通道，CPS 最高 800，无限水平扩展。'
    },
    {
      label: '智能路由',
      text: 'LCR、ACD/ASR、PDD、优先级、百分比以及 A/B 号码路由；继承路由与分时路由。'
    },
    {
      label: '协议灵活',
      text: 'SIP 与 H.323 及转码；支持 SMS（SMPP 3.4）。'
    },
    {
      label: '访问列表',
      text: '允许/拒绝列表管理，支持自动添加与自动重置。'
    },
    {
      label: '路由质量控制',
      text: '自动路由测试器，实时录音、质量监控与 FAS 检测。'
    },
    {
      label: '编解码支持',
      text: '主流 VoIP 与 GSM 编解码，支持实时转码。'
    },
    {
      label: '集成安全',
      text: '自有 SIP 防火墙，防范垃圾呼叫与未授权访问。'
    },
    {
      label: 'API 集成',
      text: '即用 JSON API，面向外部应用，含 Telegram 机器人支持。'
    },
    {
      label: '灵活 SIP 配置文件',
      text: '可按 RFC 预期为任意 SIP 呼叫场景自定义配置。'
    },
    {
      label: 'CPS 限制',
      text: '过载时拒绝多余尝试，不影响真实话务。'
    },
    {
      label: '自动计费',
      text: '按客户时区自动生成发票与账单。'
    },
    {
      label: '现代 Web 界面',
      text: '财务、运营与管理报表；深色与浅色主题。'
    },
    {
      label: '自动费率管理',
      text: '从 IMAP 上传并分发费率，经 Telegram 通知。'
    },
    {
      label: '话务监控',
      text: '持续质量监控与告警。'
    },
    {
      label: '呼叫路由历史',
      text: '从 CDR 报表查看呼叫路径（callpath）。'
    },
    {
      label: 'IXC Recording',
      text: '软交换采集通话媒体；Billing 7 按小时浏览、搜索、播放与管理录音——可从 Originator 与 Terminator 呼叫报表一键进入。'
    },
    {
      label: '客户门户',
      text: '为客户实时展示活动呼叫与报表概览。'
    },
    {
      label: '测试工具',
      text: '内置 SIP 话务生成，用于场景测试。'
    },
    {
      label: '数据保护',
      text: '自动备份与双因素认证。'
    },
    {
      label: '24/7 NOC',
      text: '全天候多语言实时支持（EN、RU）。'
    }
  ],
  sections: [
    {
      id: 'main',
      title: '主页面',
      images: [{ file: 'main_full_blured.png', alt: 'IXC 主仪表盘' }],
      subsections: [
        {
          title: '左侧',
          items: [
            {
              label: '软交换状态',
              text: '全部软交换状态，以及实时总呼叫数与已接通呼叫数。'
            },
            {
              label: 'CPS（每秒呼叫数）',
              text: '各交换机按 IP 的 CPS，以及每台软交换的 CPS 限制控制。'
            },
            {
              label: '余额偏低的客户',
              text: '余额偏低客户列表，含当前余额、消耗速率与剩余额度。'
            },
            {
              label: '当日 Top 10 话务',
              text: '今日 Top 10，按入向与出向分组。'
            },
            {
              label: '话务增长最多（24 小时）',
              text: '过去 24 小时话务增长最大的目的地。'
            },
            {
              label: '话务下降最多（24 小时）',
              text: '最大话务下降；可一键发送可选告警邮件。'
            },
            {
              label: '目标目的地',
              text: '尝试次数高、质量偏低，便于重点调优。'
            },
            {
              label: '优质目的地',
              text: '当前呼叫质量最好的目的地。'
            },
            {
              label: '近期价格变更',
              text: '最新的 Terminator 与 Originator 价格修改及操作人。'
            },
            {
              label: '最近创建的对端',
              text: '最新的 Terminator 与 Originator 点及其关键信息。'
            },
            {
              label: '活动 Web 会话',
              text: '当前 Web 用户及其 IP 与会话时长。'
            }
          ]
        },
        {
          title: '右侧',
          items: [
            {
              label: '活动呼叫动态图',
              text: '实时总呼叫与已接通呼叫，可筛选分析。'
            },
            {
              label: '按软交换的静态图',
              text: '活动呼叫在全部软交换上的分布。'
            },
            {
              label: 'ASR、ACD 与利润',
              text: '整体 ASR、ACD 与利润随时间的趋势。'
            }
          ]
        }
      ]
    },
    {
      id: 'traffic-flow',
      title: '话务流报表',
      images: [{ file: 'tf_report.png', alt: 'IXC 话务流报表' }],
      body: [
        '客户与供应商话务集中一处，按目的地分组，具备强大筛选、排序与行颜色规则。每行可打开所选目的地的详细呼叫统计。'
      ]
    },
    {
      id: 'ot-calls',
      title: 'Originator/Terminator 呼叫报表',
      images: [{ file: 'oc_whole.png', alt: 'IXC 主叫/被叫呼叫报表' }],
      body: [
        '主要 CDR 视图：可按小时、日或周分组，含目的地运营商明细。可按 A/B 号码掩码、时长、利润、PDD、拆线原因等筛选。支持自定义布局模板、颜色规则、自动刷新以及 XLS/CSV 导出。'
      ]
    },
    {
      id: 'routing-history',
      title: '呼叫路由历史',
      images: [{ file: 'oc_calls.png', alt: 'IXC 报表中的呼叫路由历史' }],
      body: [
        '在报表中使用“Calls”时，可看到胜出路由及每一次尝试，包括 PDD 与释放码，并直接链接到被拒绝腿的完整报表，便于根因分析。'
      ]
    },
    {
      id: 'variation',
      title: '变化报表（话务趋势）',
      images: [{ file: 'variat_report.png', alt: 'IXC 话务变化报表' }],
      body: [
        '按日、周或月的绝对与相对变化，可按目的地或客户分组，支持上升/下降趋势筛选及自定义百分比变化阈值。'
      ]
    },
    {
      id: 'access-list',
      title: '访问列表（白/黑名单）',
      images: [
        { file: 'al_rules.png', alt: 'IXC 访问列表 — 规则' },
        { file: 'al_list.png', alt: 'IXC 访问列表 — 号码' }
      ],
      body: [
        'GSM 封禁对许多落地网络是现实问题。IXC 访问列表将特定号码导向选定运营商（Terminator 或 Originator）。上传列表后，系统可维护条目并按计划过期。可使用白名单或黑名单模式。',
        '路由按您的配置使用被叫号码（CLD）和/或主叫号码（CLI/ANI）。'
      ],
      extraBlocks: [
        {
          title: '白名单场景',
          body: '仅允许您为选定运营商列出的号码走该路径。该腿上的其余话务故障转移到其余 Terminator，从而将该运营商保留给您指定的话务。'
        },
        {
          title: '黑名单场景',
          body: '所列号码对被选定的 Terminator 拦截，其余号码仍可通行。适用于反欺诈向固定号码集反复发起测试呼叫的情况。'
        }
      ]
    },
    {
      id: 'balance',
      title: '余额报表',
      images: [{ file: 'br_report.png', alt: 'IXC 客户余额报表' }],
      body: [
        '按客户的完整资金视图：入向与出向、发票、付款、欠款、信用额度与实时余额。打开客户可查看完整交易链——发票、付款、贷记与调整。'
      ]
    },
    {
      id: 'commitments',
      title: '协议与承诺量',
      images: [
        { file: 'comm_list.png', alt: 'IXC 承诺量列表' },
        { file: 'comm_graph.png', alt: 'IXC 承诺量话务图' }
      ],
      body: [
        '按日期范围与目的地定义目标话务量。系统按日累计，未达标时发送提醒，并可打开每笔交易的话务图。'
      ]
    },
    {
      id: 'profit',
      title: '利润报表',
      images: [{ file: 'profit_report.png', alt: 'IXC 利润报表' }],
      body: [
        '以清晰图表展示利润与话务量，支持时间分组以及目的地或客户筛选。'
      ]
    },
    {
      id: 'invoices',
      title: '发票与账单',
      images: [{ file: 'bills.png', alt: 'IXC 发票与账单' }],
      body: [
        '每次计费周期结束时按客户时区生成发票并发送邮件。供应商账单先以“待处理”暂存，直至真实供应商发票到达，然后您可应用、付款，或在金额不符时拒绝。'
      ]
    },
    {
      id: 'auto-rate',
      title: '自动费率上传',
      images: [
        { file: 'tg_increase.png', alt: 'IXC 自动费率 — Telegram 费率上调' },
        { file: 'price_import_result.png', alt: 'IXC 自动费率导入结果' }
      ],
      body: [
        '价格模板绑定客户后，即可从邮件将费率导入正确中继。若检测到当日价格上调，可通过 Telegram 摘要确认或拒绝该文件。无论结果如何，供应商都会收到邮件通知。'
      ]
    },
    {
      id: 'live-balance',
      title: '实时余额检查',
      images: [{ file: 'tg_balance.png', alt: 'IXC 实时余额 — Telegram' }],
      body: [
        '每通呼叫都会对照信用引擎检查。达到限额时账户受限，经理会收到 Telegram 操作提示，可快速充值并恢复服务。'
      ]
    },
    {
      id: 'routing-rules',
      title: '路由表',
      images: [{ file: 'routing_list.png', alt: 'IXC 路由表' }],
      body: [
        '一个 Originator 的全部规则集中一处：匹配条件、价格、优先级，以及跨表复用。可批量计划路由开启、关闭或互换，并支持 CSV 导入导出以进行大规模变更。'
      ]
    },
    {
      id: 'current-routes',
      title: '当前路由',
      images: [{ file: 'current_routes.png', alt: 'IXC 当前路由' }],
      body: [
        '选择目的地即可查看每位供应商、费率、话务量与质量，以及任何待生效的价格上调，从而有把握地设定销售费率。'
      ]
    },
    {
      id: 'monitoring',
      title: 'IXC 监控工具',
      images: [
        { file: 'monit_rule.png', alt: 'IXC 监控 — 规则' },
        { file: 'monit_items.png', alt: 'IXC 监控 — 事件' }
      ],
      body: [
        '跟踪实时 ASR、ACD、PDD 与利润，对照阈值并触发告警。规则可面向 Originator 与 Terminator，分组灵活。事件会保存以便事后分析。',
        '通知可发送到邮件、Telegram，或自动阻断受影响路径。您还可以向供应商发送故障工单邮件以加快修复。'
      ]
    },
    {
      id: 'autotester',
      title: 'IXC Autotester',
      images: [{ file: 'autotester.png', alt: 'IXC Autotester' }],
      body: [
        '自动多路由、多目的地测试，含实时 RTP 与 MP3 录音，适合新互联。可安排定期运行并将结果发送到邮件。支持 SIP 与 H.323，以及 G.711、G.723、G.729 等编解码，可在浏览器播放或下载离线审听。'
      ]
    },
    {
      id: 'noc',
      title: '24/7 NOC 支持',
      images: [{ file: 'support.png', alt: 'IXC NOC 支持' }],
      body: [
        '超过 25 年的全天候运营支持。团队随时解答您的问题、收集反馈，并讨论您希望 IXC 如何为您工作的新想法。'
      ]
    }
  ],
  ctaTitle: '申请现场演示',
  ctaText: '在您自己的工作流中查看路由、CDR 与计费——联系销售安排导览或试点。',
  ctaContact: '联系销售',
  ctaHome: '返回首页'
};
