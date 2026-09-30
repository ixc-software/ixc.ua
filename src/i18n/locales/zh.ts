import type { Translations } from '../translations';

const locale: Translations = {
  nav: {
    home: '首页',
    products: '产品',
    aboutUs: '关于我们',
    contactUs: '联系我们',
    privacyPolicy: '隐私政策',
    blog: '博客',
    getFreeDemo: '免费演示',
    bannerAnnouncement: 'IXC Recording — AI 通话分析、FAS 与语音信箱检测的基础'
  },
  privacyPolicy: {
    title: '隐私政策',
    subtitle:
      'IXC Software Distribution Corp. 如何在 ixc.ua 收集、使用和保护个人信息。',
    lastUpdated: '最近更新',
  },
  hero: {
    title: '运营商级 VoIP 基础设施——自 1999 年起稳定生产运行',
    subtitle:
      '在同一套高容量平台上运营批发与零售语音：高级 LCR 与策略路由、自动计费、路由测试与 FAS 检测、API 与告警——并提供 24/7 多语言 NOC 支持。',
    aiStamp: 'Recording',
    exploreProducts: '了解 IXC Recording',
    contactSales: '联系销售'
  },
  trust: {
    since: '赢得信任始于',
    clients: '家全球批发 VoIP 客户。'
  },
  aiIntegration: {
    title: '语音与 SMS 运营商的 AI 自动化',
    subtitle:
      '当路由、费率核对、伙伴沟通和表格全部靠复制粘贴与人工分析时，一名运营商经理最多只能管 5–10 个账户。AI 能在同样人力成本下扩展到 100+——同等薪资预算下利润最高可达 10 倍，并相对仍在手工操作的竞争对手形成持久优势。',
    footer:
      '经理们仍在邮件和即时通讯里读写信息，在软交换里逐条点击路由和费率，再在两者之间复制粘贴。用母语提问——给运营商 1–3 添加目的地、修改 Cuba Mobile 路由，或根据 30 行 Excel 填满与运营商 X 的承诺量——IXC 即可批量落地变更，无需多步界面操作，同时 AI 完成深度分析。Teams 和即时通讯收到回复时，交换机已经更新。',
    partnership: 'IXC ↔ DealoAgent',
    oldApproach: '传统方式',
    newApproach: '新方式',
    oldApproachCaption: '每名经理最多 5–10 个账户',
    newApproachCaption: '同等人力下每名经理 100+ 个账户',
    learnMore: '了解更多 →',
  },
  products: {
    title: '核心产品',
    subtitle: '专为现代批发与零售 VoIP 业务打造的高精电信解决方案套件。',
    learnMore: '了解更多 →',
    cards: [
      { title: '软交换', description: '面向最大吞吐量、精细计费与智能路由的 4/5 类 VoIP 平台。' },
      { title: 'IXC Recording', description: '软交换采集通话媒体；Billing 7 整理归档——外加 AI 通话分析、流量画像、语音质量、FAS/语音信箱检测与丢弃，以及个性化通话后短信营销。' },
      { title: 'AI 自动化', description: 'IXC ↔ DealoAgent：母语指令、批量软交换更新与即时通讯分发——每名经理从 5–10 个账户扩展到 100+。' },
      { title: '白/黑名单', description: '动态防护与灵活路由规则，保障安全并防止垃圾呼叫。' },
      { title: '监控工具', description: '实时分析与动态图表，便于追踪 SIP 数据并立即排障。' },
      { title: '自动测试器', description: '主动生成自动测试呼叫并分析结果，确保路由质量。' },
      { title: 'SMS 平台', description: '批发短信路由、计费与 SMPP 3.4——外加 AI 分析与实时拒绝赌场、诈骗及被拦截 A2P，避免被运营商下线路。' },
      { title: 'Google API 集成', description: '与主流企业服务对接，扩展运营集成能力。' },
      { title: '产品技术规格', description: '协议、容量、路由、安全、编解码、计费、报表与 24/7 NOC——集中于一份参考。' },
    ]
  },
  ixcClub: {
    title: 'IXC Club',
    subtitle: '面向 IXC 客户的商务拓展——精选电信引荐，转化为新的语音与短信互联。',
    learnMore: 'IXC Club 如何运作',
    joinCta: '加入 IXC Club',
    pageTitle: 'IXC Club',
    pageSubtitle: '为 IXC 客户精选运营商引荐——新互联、直接成交、利润增长。',
    problemTitle: '为什么寻找新的电信联系人成本高昂',
    problemIntro:
      '批发语音与短信增长意味着不断结识新运营商。若自行搭建这条管道，费用很快累积：',
    problemCosts: [
      {
        title: '展会与行业活动费用',
        description: 'ITW、Capacity 及区域电信展的展位、赞助与活动套餐。',
      },
      {
        title: '机票与住宿',
        description: '销售与商务拓展团队跨区域面对面拜访潜在客户的差旅。',
      },
      {
        title: '商务拓展薪资',
        description: '全职经理负责猎取线索、跟进并筛选互联伙伴。',
      },
      {
        title: '增长的真实成本',
        description: '签约一条路由前往往要投入数月——增长成本可能超过它所带来的利润。',
      },
    ],
    problemFooter: '对许多运营商而言，从零搭建联系人网络是业务中最大的隐性成本之一。',
    solutionTitle: 'IXC 已建好网络——无需巨额投入即可增长',
    solutionText:
      'IXC 销售经理维护着数千个与愿意开展语音和短信互联的运营商的活跃关系。IXC Club 为符合条件的客户提供按画像匹配的精选引荐——展会、差旅与外联已经完成。您与合格伙伴洽谈、签约并提升利润，IXC 协助您的商务拓展，且不另收俱乐部费用。',
    flowTitle: 'IXC Club 如何运作',
    flowSubtitle: '从会员到新路由——围绕您的业务画像的简单流程。',
    flowSteps: [
      {
        title: '您是符合条件档位的 IXC 客户',
        description:
          '符合服务档位的在用 IXC Softswitch 客户自动加入 IXC Club——无需单独订阅。',
      },
      {
        title: '我们梳理您的业务画像',
        description:
          '语音或短信、批发或零售、区域、主叫/被叫侧重以及容量需求——使引荐贴合您的真实交易方式。',
      },
      {
        title: '每周通过 Microsoft Teams 获得 3–5 个精选联系人',
        description:
          '我们的团队从数千个活跃关系中挑选热门潜在客户，并在 Teams 上交付引荐——通常每周三到五次。',
      },
      {
        title: '您直接洽谈、签约并互联',
        description:
          '商务沟通、条款谈判与协议签署由您完成。IXC 不介入交易中间——我们只开门。',
      },
      {
        title: '新路由、更高利润——IXC 免费支持增长',
        description:
          '成功的互联增加您的流量与利润。IXC Club 是我们帮助客户增长的方式之一——商务拓展包含在您与 IXC 的合作中。',
      },
    ],
    highlightTitle: 'IXC 为何运营这个俱乐部',
    highlightText:
      '客户增长，整个网络对所有人更强。IXC Club 将您的交换机与运营连接到真实的商业机会——且不另收引荐费。',
    ctaTitle: '准备加入？',
    ctaText: '联系我们以确认档位、更新业务画像，并开始接收精选引荐。',
    benefits: [
      {
        title: '数千个活跃联系人',
        description: 'IXC 销售经理维护全球语音与短信运营商的活跃网络。',
      },
      {
        title: '语音与短信互联',
        description: '引荐面向希望与您建立新批发或零售路由的运营商。',
      },
      {
        title: '每周 3–5 个热门线索',
        description: '按您的画像匹配的精选潜在客户——不是静态名录导出。',
      },
      {
        title: '增长支持，无俱乐部费用',
        description: 'IXC 投入您的商务拓展，让您专注签约并扩大互联。',
      },
    ],
  },
  features: {
    title: '平台功能',
    subtitle: '面向现代批发与零售 VoIP 运营需求打造的全面能力集。',
    learnMore: '了解更多',
    items: [
      { title: '高容量', desc: '每台服务器最多 4,000 条 VoIP 通道，CPS 最高 800，无限水平扩展。' },
      { title: '智能路由', desc: 'LCR、ASR/ACD、PDD、优先级、百分比、A/B 号码、分时与继承路由。' },
      { title: '协议灵活', desc: 'SIP 与 H.323 及协议转码。内置 SMS（SMPP 3.4）支持。' },
      { title: '访问列表', desc: '内置允许/拒绝号码列表，支持自动添加与自动重置。' },
      { title: '路由质量控制', desc: '自动路由测试器，实时录音以监控质量并检测 FAS。' },
      { title: '编解码支持', desc: '主流 VoIP 与 GSM 编解码，支持实时转码。' },
      { title: '集成安全', desc: '自有 SIP 防火墙、双因素认证与自动备份。' },
      { title: '丰富 API', desc: '面向外部应用的 JSON API，支持 Telegram 机器人。' },
      { title: '灵活 SIP 配置文件', desc: '可按任意 SIP RFC 呼叫场景自定义配置。' },
      { title: 'CPS 限制', desc: '过载时拒绝多余 SIP 尝试，不影响真实话务。' },
      { title: '自动计费', desc: '按客户时区自动生成财务发票与账单。' },
      { title: '现代 Web 界面', desc: '直观 UI、详细报表、深色/浅色主题与实时仪表盘。' },
      { title: '自动费率管理', desc: '从 IMAP 自动上传费率，费率上调经 Telegram 确认。' },
      { title: '话务监控', desc: '持续监控话务质量、告警与自动阻断。' },
      { title: '呼叫路由历史', desc: '在 CDR 报表中完整分析呼叫路径、全部路由尝试与拆线码。' },
      { title: 'IXC Recording', desc: '软交换采集通话媒体；Billing 7 按小时浏览、搜索、播放与管理录音——可从 Originator 与 Terminator 呼叫报表一键进入。' },
      { title: '客户门户', desc: '为客户提供实时活动呼叫与报表概览。' },
      { title: '测试工具', desc: '内置 SIP 生成工具，可测试各类场景。' },
      { title: '数据保护', desc: '自动备份系统与双因素认证，增强安全。' },
      { title: '24/7 NOC 支持', desc: '超过 25 年的全天候多语言支持（EN、RU）。' },
    ]
  },
  testimonials: {
    title: '客户评价',
    subtitle: '全球领先电信运营商与批发 VoIP 提供商的信赖之选。',
    items: [
      { quote: '本公司将继续积极引入符合最高国际标准的高科技软件系统，从而显著提升整体运营效率。', author: 'Igor Litovchenko', role: '总裁，股份公司「Kyivstar G.S.M.」' },
      { quote: '切换到 IXC 后，我们在一套方案中获得了运营商级路由与计费。监控工具与 Telegram 集成让我们全天候掌握话务质量。', author: 'Gilbert Abboud', role: 'CTO — VoIP | 消息 · NGN Telecom' },
      { quote: '我们从第一天就把 IXC Softswitch V7 投入生产——没有预演阶段，直接承载现网话务。平台自第一通呼叫起就稳定支撑我们的批发业务。', author: 'Andrew Lujansky', role: '销售 · Valor DBA Lukovitel' },
    ]
  },
  blog: {
    title: '博客',
    subtitle: 'VoIP 软交换实用指南——路由、计费、监控与安全。',
    readMore: '阅读文章',
    viewAll: '查看全部文章',
    backToBlog: '返回博客',
    minRead: '分钟阅读',
    faqTitle: '常见问题',
    ctaTitle: '在您自己的话务上体验 IXC Softswitch',
    ctaText: '运营商级 4/5 类路由、实时计费、监控与反欺诈——自 1999 年起生产验证。',
    ctaButton: '了解软交换',
    notFoundTitle: '未找到文章',
    notFoundText: '您查找的文章不存在或可能已移动。'
  },
  news: {
    title: '最新动态',
    subtitle: 'IXC 的产品更新、版本发布与公告。',
    readMore: '阅读更多',
    breadcrumb: '新闻',
    backToNews: '返回新闻',
    notFoundTitle: '未找到新闻',
    notFoundText: '您查找的文章不存在。',
    previous: '上一条新闻',
    next: '下一条新闻'
  },
  contactSection: {
    title: '联系我们',
    subtitle:
      '对 IXC Softswitch 有疑问？需要演示或报价？请留言，我们会尽快回复。'
  },
  contactForm: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    email: '邮箱',
    company: '公司',
    optional: '（选填）',
    companyPlaceholder: '公司名称',
    message: '留言',
    messagePlaceholder: '介绍您的项目或提出问题…',
    send: '发送留言',
    sending: '发送中…',
    successTitle: '留言已发送！',
    successText: '感谢联系。我们将在 24 小时内回复。',
    sendAnother: '再发一条',
    emailUs: '发邮件给我们',
    errorGeneric: '出了点问题，请再试一次。',
    errorNetwork: '网络错误。请检查连接后重试。'
  },
  common: {
    email: '邮箱',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    teams: 'Teams',
    office: '办公室',
    sales: '销售',
    changeLanguage: '切换语言',
    toggleTheme: '切换主题',
    menu: '菜单',
    contactUs: '联系我们',
    needHelp: '需要帮助？',
    previousTestimonial: '上一条评价',
    nextTestimonial: '下一条评价'
  },
  team: {
    title: '我们的团队',
    founderRole: '创始人兼首席执行官',
    founderBio: 'Oleksii 拥有超过 30 年电信行业经验，领导 IXC Softswitch 的研发。他的愿景推动我们为全球批发与零售 VoIP 提供商交付一流的软交换与计费方案，确保卓越性能与可靠性。',
    connectLinkedIn: '在 LinkedIn 上联系'
  },
  footer: {
    description: '面向 VoIP 业务运营的高性能一体化解决方案。',
    productsTitle: '产品',
    companyTitle: '公司',
    contactTitle: '联系',
    contactText: '有问题？请联系我们的团队。',
    copyright: '保留所有权利。',
    salesLabel: '销售'
  },
  about: {
    title: '关于 IXC Softswitch',
    subtitle: 'IXC 为语音与电信运营商打造运营商级软件与服务。自 1999 年起，我们帮助运营商、服务提供商与企业以透明计费和稳健路由启动、扩展并优化可靠的语音网络。',
    missionTitle: '我们的使命',
    missionText: '让各种规模的运营商都能以盈利、安全、可扩展的方式提供可信赖的语音服务。',
    whatWeDoTitle: '我们做什么',
    whatWeDoSubtitle: '覆盖现代语音网络运营各方面的端到端方案。',
    whyTitle: '为何选择 IXC',
    whySubtitle: '使我们区别于竞争对手的优势。',
    ctaTitle: '联系我们',
    ctaText: '无论您是启动新网络、整合平台，还是加强收入管控，IXC 都能提供帮助。',
    ctaContactSales: '联系销售',
    ctaExploreProducts: '浏览产品',
    capabilities: [
      { title: '软交换与路由', description: '面向可用性与效率的高性能 SIP 路由、LCR 与策略控制。' },
      { title: '计费与中介', description: '面向批发与零售的精确 CDR 处理、评级、开票与收入保障。' },
      { title: '分析与报表', description: '实时仪表盘与历史洞察，管理利润、质量与话务流向。' },
      { title: '安全与合规', description: '用于缓解欺诈、执行支出限额并支持监管要求的工具。' },
      { title: '自动化与集成', description: '开放 API 与连接器，将 IXC 接入您的 OSS/BSS、CRM 与支付流程。' },
    ],
    strengths: [
      { title: '自 1999 年验证', description: '数十年电信经验沉淀为成熟、经实战检验的产品。' },
      { title: '运营商级可靠性', description: '面向高可用、可扩展与可预期性能而设计。' },
      { title: '快速见效', description: '实用功能、合理默认值，以及理解真实运营的团队。' },
      { title: '全心 24/7 支持', description: '超过 25 年的多语言实时支持（EN、RU）。经验丰富的团队从设计陪伴到日常运营。' },
    ],
    certificatesTitle: '证书与商标',
    certificatesSubtitle: 'IXC 品牌与软件在乌克兰国家知识产权局的正式注册。',
    certificatesNoLabel: '证书编号',
    certificatesDateLabel: '注册日期',
    certificatesPageLabel: '第 {n} 页',
    certificatesViewFull: '查看原图',
    certificatesDocuments: [
      {
        title: '商标：IXC',
        description: 'IXC 品牌在乌克兰的商标注册（尼斯分类 9、38、42）。',
        certificateNo: '44583',
        registeredDate: '15.11.2004',
      },
      {
        title: '商标：InterExchange Carrier',
        description: 'InterExchange Carrier 电信产品在乌克兰的商标注册（第 9 类）。',
        certificateNo: '43606',
        registeredDate: '15.09.2004',
      },
      {
        title: '著作权：IXC Billing Center',
        description: 'IXC Billing Center 软件套件（Softswitch Plus、Prepaid platform、Dialer、Switch Statistics、Softswitch Super）的国家著作权登记。',
        certificateNo: '9378',
        registeredDate: '18.02.2004',
      },
    ],
  },
  productPage: {
    overview: '概述',
    keyFeatures: '主要功能',
    realTimeReporting: '实时报表',
    callRoutingDepending: '呼叫路由取决于：',
    requestDemo: '申请演示',
    contactSales: '联系销售',
    downloadSpecPdf: '下载 PDF 规格',
    previous: '上一项',
    next: '下一项',
    notFoundTitle: '未找到产品',
    notFoundText: '您查找的产品不存在。',
    backHome: '返回首页'
  }
};

export default locale;
