import { useState, useRef, useEffect } from 'react';
import { LocaleLink as Link } from './LocaleLink';
import {
  Sparkles,
  GripVertical,
  MousePointer2,
  Copy,
  Link2,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';
import './AiIntegration.css';

import gmailLogo from '../assets/logo_gmail.svg';
import gcalLogo from '../assets/logo_gcalendar.svg';
import telegramLogo from '../assets/logo_telegram.svg';
import whatsappLogo from '../assets/logo_whatsapp.svg';
import billingDashboard from '../assets/ixc-billing-dashboard.png';
import dealoagentLogo from '../assets/dealoagent-logo.png';

const ixcLogoUrl = `${import.meta.env.BASE_URL}logo.png`;

const TeamsLogo = () => (
  <svg viewBox="0 0 48 48" className="ai-int-teams-svg" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="#5059C9"/>
    <path d="M29.5 18c-3.5 0-6.5 1.5-8.5 4H33a5 5 0 0 1 5 5v8a11 11 0 0 0 4-8.5C42 21.5 36.4 18 29.5 18Z" fill="#5059C9"/>
    <path d="M20 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" fill="#7B83EB"/>
    <path d="M4 26a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v10a14 14 0 0 1-14 14H18A14 14 0 0 1 4 36V26Z" fill="#7B83EB"/>
    <path d="M22 18H8a4 4 0 0 0-4 4v14a14 14 0 0 0 14 14 14 14 0 0 0 4-.6V22a4 4 0 0 0-4-3.9H22A3.9 3.9 0 0 0 22 18Z" fill="url(#teams_grad)"/>
    <path d="M23 18H8a4 4 0 0 0-4 4v14a14 14 0 0 0 14 14 14 14 0 0 0 4-.6V22a4 4 0 0 0-4-3.9H23A3.9 3.9 0 0 0 23 18Z" fill="rgba(0,0,0,0.1)"/>
    <path d="M15 23v10.5M10.5 27.5h9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="teams_grad" x1="4" y1="18" x2="26" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5A62C3"/>
        <stop offset="0.5" stopColor="#4D55BD"/>
        <stop offset="1" stopColor="#3940AB"/>
      </linearGradient>
    </defs>
  </svg>
);

type AppId = 'gmail' | 'gcalendar' | 'telegram' | 'whatsapp' | 'teams';

const APPS: { id: AppId; name: string; logo: string | null; color: string; bgColor: string }[] = [
  { id: 'gmail', name: 'Gmail', logo: gmailLogo, color: '#EA4335', bgColor: '#fef2f2' },
  { id: 'gcalendar', name: 'Calendar', logo: gcalLogo, color: '#1A73E8', bgColor: '#eff6ff' },
  { id: 'telegram', name: 'Telegram', logo: telegramLogo, color: '#2AABEE', bgColor: '#f0f9ff' },
  { id: 'whatsapp', name: 'WhatsApp', logo: whatsappLogo, color: '#25D366', bgColor: '#f0fdf4' },
  { id: 'teams', name: 'Teams', logo: null, color: '#6264A7', bgColor: '#f5f3ff' },
];

const APP_CONTENT: Record<AppId, {
  lines: string[];
  copyText: string;
  copyLabel: string;
  billingRegion: 'top-destinations' | 'target-destinations';
}> = {
  gmail: {
    lines: [
      'From: ops@carrier-voip.com',
      'Subject: Top destinations — daily export',
      'Please send today\'s top destinations report.',
      'India All leads at 205 min, ASR 50%, profit 101.',
    ],
    copyText: 'India All · 205 min · ASR 50% · Profit 101',
    copyLabel: 'top destinations',
    billingRegion: 'top-destinations',
  },
  gcalendar: {
    lines: [
      '📅 Route review — Terminator Test Carrier',
      'Thu, Jun 16 · 10:00–10:30 AM',
      'Agenda: top destinations & margin check',
      'Pull figures from IXC Billing before the call.',
    ],
    copyText: 'India All · Duration 205 · Price 0.00455',
    copyLabel: 'top destinations',
    billingRegion: 'top-destinations',
  },
  telegram: {
    lines: [
      'Partner (Retail VoIP): Route update',
      'Received target destinations for review.',
      'UK Proper ↓40%, Cuba Proper ↑60%.',
      'Copy target destinations from billing and confirm.',
    ],
    copyText: 'UK Proper · -40% · 121 min',
    copyLabel: 'target destinations',
    billingRegion: 'target-destinations',
  },
  whatsapp: {
    lines: [
      'Sales: Need top destinations snapshot',
      'For wholesale proposal due by EOD.',
      'Check IXC Billing main page report.',
      'Include ASR, ACD and profit per route.',
    ],
    copyText: 'India All · ASR 50 · ACD 4.02 · Profit 101',
    copyLabel: 'top destinations',
    billingRegion: 'top-destinations',
  },
  teams: {
    lines: [
      '#routing channel',
      'NOC: traffic spike on Cuba Proper (+60%)',
      'Review target destinations in billing.',
      'Update LCR before evening peak.',
    ],
    copyText: 'Cuba Proper · +60% · 321 min',
    copyLabel: 'target destinations',
    billingRegion: 'target-destinations',
  },
};

const BILLING_HIGHLIGHT: Record<'top-destinations' | 'target-destinations', { top: string; left: string; width: string; height: string }> = {
  'top-destinations': { top: '71%', left: '51%', width: '45%', height: '20%' },
  'target-destinations': { top: '71%', left: '3%', width: '45%', height: '20%' },
};

type MessengerChannel = 'teams' | 'telegram' | 'gmail' | 'whatsapp' | 'ixc';

type ChannelDispatch = {
  channel: MessengerChannel;
  direction: 'sent' | 'received';
  partners: string;
  summary: string;
};

type ConversationStep = {
  query: string;
  responseType: 'list' | 'traffic' | 'balance' | 'batch' | 'routing';
  responseContent: { name: string; detail: string }[] | { label: string; value: string }[];
  reportIntro: string;
  channelDispatches: ChannelDispatch[];
};

const CONVERSATIONS: ConversationStep[] = [
  {
    query: "Send today's top destinations to wholesale carriers on MS Teams",
    responseType: 'list',
    reportIntro: 'Top destinations from IXC Billing:',
    responseContent: [
      { name: 'India All', detail: '205 min · ASR 50 · Profit 101' },
      { name: 'Cuba Proper', detail: '+60% · 321 min' },
      { name: 'UK Proper', detail: '-40% · 121 min' },
    ],
    channelDispatches: [
      { channel: 'ixc', direction: 'received', partners: 'IXC Billing', summary: 'Top destinations report' },
      { channel: 'gmail', direction: 'received', partners: 'ops@carrier-voip.com', summary: 'Top destinations request' },
      { channel: 'teams', direction: 'sent', partners: 'Carrier 1', summary: 'Top destinations report' },
      { channel: 'teams', direction: 'sent', partners: 'Carrier 2', summary: 'Top destinations report' },
      { channel: 'teams', direction: 'sent', partners: 'Carrier 3', summary: 'Top destinations report' },
    ],
  },
  {
    query: 'Alert carriers about traffic down on UK Proper — Telegram and email',
    responseType: 'traffic',
    reportIntro: 'Traffic change detected:',
    responseContent: [
      { label: 'Most increased', value: 'Cuba Proper · +60%' },
      { label: 'Most decreased', value: 'UK Proper · -40%' },
    ],
    channelDispatches: [
      { channel: 'telegram', direction: 'received', partners: 'Retail VoIP partner', summary: 'UK route status update' },
      { channel: 'telegram', direction: 'sent', partners: '2 carriers', summary: 'Traffic-down alert' },
      { channel: 'gmail', direction: 'sent', partners: '4 carriers', summary: 'Traffic-down alert' },
    ],
  },
  {
    query: 'Notify carriers with balance running out today',
    responseType: 'balance',
    reportIntro: 'Balance threshold hit:',
    responseContent: [
      { name: 'JJF-tel-Buy', detail: 'Balance 0.03' },
      { name: 'Eth-Zakariyya-Buy', detail: 'Balance 0.04' },
      { name: 'Originator Test', detail: 'Incost 201' },
    ],
    channelDispatches: [
      { channel: 'telegram', direction: 'sent', partners: 'JJF-tel-Buy', summary: 'Low-balance reminder' },
      { channel: 'telegram', direction: 'sent', partners: 'Eth-Zakariyya-Buy', summary: 'Low-balance reminder' },
      { channel: 'gmail', direction: 'sent', partners: '3 carriers', summary: 'Low-balance reminder' },
      { channel: 'whatsapp', direction: 'sent', partners: 'Originator Test', summary: 'Low-balance reminder' },
    ],
  },
  {
    query: 'Add India Mobile destination to carriers 1, 2, and 3 — use today\'s rates',
    responseType: 'batch',
    reportIntro: 'IXC batch applied (no multi-step UI):',
    responseContent: [
      { name: 'Carrier 1', detail: 'India Mobile · rate 0.00412' },
      { name: 'Carrier 2', detail: 'India Mobile · rate 0.00412' },
      { name: 'Carrier 3', detail: 'India Mobile · rate 0.00412' },
    ],
    channelDispatches: [
      { channel: 'ixc', direction: 'sent', partners: 'IXC Softswitch', summary: '3 destinations added' },
      { channel: 'teams', direction: 'sent', partners: 'Carriers 1–3', summary: 'All set — prices sent' },
    ],
  },
  {
    query: 'Add terminator SipRoute-B to carriers 1, 2, 3 for Cuba Mobile routing',
    responseType: 'routing',
    reportIntro: 'Routing updated in IXC:',
    responseContent: [
      { name: 'Carrier 1', detail: 'Cuba Mobile · +SipRoute-B' },
      { name: 'Carrier 2', detail: 'Cuba Mobile · +SipRoute-B' },
      { name: 'Carrier 3', detail: 'Cuba Mobile · +SipRoute-B' },
    ],
    channelDispatches: [
      { channel: 'ixc', direction: 'sent', partners: 'IXC Softswitch', summary: 'LCR · Cuba Mobile' },
      { channel: 'teams', direction: 'sent', partners: 'NOC #routing', summary: 'Routing change confirmed' },
    ],
  },
];

function ChannelLogo({ channel }: { channel: MessengerChannel }) {
  if (channel === 'teams') {
    return (
      <span className="ai-int-flow-icon-inner">
        <TeamsLogo />
      </span>
    );
  }
  if (channel === 'ixc') {
    return (
      <span className="ai-int-flow-icon-inner ai-int-flow-icon-inner--ixc">
        <img src={ixcLogoUrl} alt="" width={20} height={20} />
      </span>
    );
  }
  const logos: Record<Exclude<MessengerChannel, 'teams' | 'ixc'>, string> = {
    gmail: gmailLogo,
    telegram: telegramLogo,
    whatsapp: whatsappLogo,
  };
  return (
    <span className="ai-int-flow-icon-inner">
      <img src={logos[channel]} alt="" width={20} height={20} />
    </span>
  );
}

function FlowArrow({ direction }: { direction: 'sent' | 'received' }) {
  return (
    <div className={`ai-int-flow-track ai-int-flow-track--${direction}`} aria-hidden="true">
      <span className="ai-int-flow-pulse" />
      <span className="ai-int-flow-head">{direction === 'sent' ? '→' : '←'}</span>
    </div>
  );
}

function ChannelFlowRail({
  dispatches,
  visible,
}: {
  dispatches: ChannelDispatch[];
  visible: boolean;
}) {
  return (
    <aside className={`ai-int-channel-rail ${visible ? 'ai-int-channel-rail--active' : ''}`} aria-label="Channel dispatch flow">
      <div className="ai-int-channel-rail-title">Channels</div>
      <div className="ai-int-channel-rail-hub" title="DealoAgent chat">
        <img src={dealoagentLogo} alt="" className="ai-int-channel-rail-hub-img" />
      </div>
      <div className="ai-int-channel-rail-list">
        {visible && dispatches.map((dispatch, i) => (
          <div
            key={`${dispatch.channel}-${dispatch.direction}-${i}`}
            className={`ai-int-flow-node ai-int-flow-node--${dispatch.direction}`}
            style={{ animationDelay: `${i * 450}ms` }}
          >
            {dispatch.direction === 'sent' ? (
              <>
                <FlowArrow direction="sent" />
                <div className="ai-int-flow-icon">
                  <ChannelLogo channel={dispatch.channel} />
                </div>
              </>
            ) : (
              <>
                <div className="ai-int-flow-icon">
                  <ChannelLogo channel={dispatch.channel} />
                </div>
                <FlowArrow direction="received" />
              </>
            )}
            <div className="ai-int-flow-meta">
              <span className={`ai-int-flow-badge ai-int-flow-badge--${dispatch.direction}`}>
                {dispatch.direction === 'sent' ? 'Sent' : 'In'}
              </span>
              <span className="ai-int-flow-partner">{dispatch.partners}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

/** Slider auto-animation — 50% of previous speed (period ×2). */
const SLIDER_ANIM_MS = 5600;
const CYCLE_MS = {
  start: 2240,
  select: 2520,
  switch: 2240,
  copy: 1960,
  done: 3360,
  next: 1680,
} as const;

export function AiIntegration() {
  const { t } = useLanguage();

  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const [activeApp, setActiveApp] = useState<AppId>('gmail');
  const [copyPhase, setCopyPhase] = useState<'idle' | 'reading' | 'switching' | 'selecting' | 'copying' | 'done'>('idle');
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [showBilling, setShowBilling] = useState(false);

  const [convoIndex, setConvoIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e as React.MouseEvent).clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };
  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e as React.TouchEvent).touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false; };
    const handleGlobalMouseMove = (e: MouseEvent) => { handleMouseMove(e); };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    let animationFrameId: number;
    let startTime: number | null = null;
    const animateSlider = (timestamp: number) => {
      if (!isDragging.current) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        setSliderPosition(50 + Math.sin(elapsed / SLIDER_ANIM_MS) * 35);
      } else {
        startTime = null;
      }
      animationFrameId = requestAnimationFrame(animateSlider);
    };
    animationFrameId = requestAnimationFrame(animateSlider);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const appOrder: AppId[] = ['gmail', 'gcalendar', 'telegram', 'whatsapp', 'teams'];
    let appIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      const app = appOrder[appIndex % appOrder.length];
      const region = APP_CONTENT[app].billingRegion;
      const highlight = BILLING_HIGHLIGHT[region];
      setActiveApp(app);
      setShowBilling(false);
      setCopyPhase('idle');
      setCursorPos({ x: 50, y: 38 });

      timeoutId = setTimeout(() => {
        setCopyPhase('reading');
        setCursorPos({ x: 58, y: 48 });

        timeoutId = setTimeout(() => {
          setCopyPhase('switching');
          setShowBilling(true);
          setCursorPos({ x: 50, y: 72 });

          timeoutId = setTimeout(() => {
            setCopyPhase('selecting');
            setCursorPos({
              x: parseFloat(highlight.left) + parseFloat(highlight.width) / 2,
              y: parseFloat(highlight.top) + parseFloat(highlight.height) / 2,
            });

            timeoutId = setTimeout(() => {
              setCopyPhase('copying');

              timeoutId = setTimeout(() => {
                setCopyPhase('done');
                appIndex++;
                timeoutId = setTimeout(runCycle, CYCLE_MS.next);
              }, CYCLE_MS.done);
            }, CYCLE_MS.copy);
          }, CYCLE_MS.switch);
        }, CYCLE_MS.select);
      }, CYCLE_MS.start);
    };

    runCycle();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const typeCharacter = (text: string, index: number) => {
      if (index <= text.length) {
        setTypingText(text.slice(0, index));
        setIsTyping(true);
        timeoutId = setTimeout(() => typeCharacter(text, index + 1), 30 + Math.random() * 50);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setShowResponse(true);
          timeoutId = setTimeout(() => {
            setConvoIndex(prev => (prev + 1) % CONVERSATIONS.length);
            setTypingText('');
            setShowResponse(false);
          }, 3000);
        }, 800);
      }
    };
    const startConversation = () => {
      timeoutId = setTimeout(() => typeCharacter(CONVERSATIONS[convoIndex].query, 0), 500);
    };
    startConversation();
    return () => clearTimeout(timeoutId);
  }, [convoIndex]);

  const currentConvo = CONVERSATIONS[convoIndex];
  const currentAppData = APP_CONTENT[activeApp];
  const billingHighlight = BILLING_HIGHLIGHT[currentAppData.billingRegion];
  const listContent = ['list', 'batch', 'routing'].includes(currentConvo.responseType) && Array.isArray(currentConvo.responseContent)
    ? currentConvo.responseContent as { name: string; detail: string }[]
    : [];
  const trafficContent = currentConvo.responseType === 'traffic' && Array.isArray(currentConvo.responseContent)
    ? currentConvo.responseContent as { label: string; value: string }[]
    : [];
  const balanceContent = currentConvo.responseType === 'balance' && Array.isArray(currentConvo.responseContent)
    ? currentConvo.responseContent as { name: string; detail: string }[]
    : [];
  const isBillingCopying = showBilling && (copyPhase === 'selecting' || copyPhase === 'copying');

  return (
    <section id="ai-integration" className="section container section-glow" style={{ scrollMarginTop: '6rem' }}>
      <SectionHeading
        spacious
        icon={<Link2 size={32} />}
        title={t.aiIntegration.title}
        subtitle={t.aiIntegration.subtitle}
      />

      <div className="ai-int-partners" aria-label={t.aiIntegration.partnership}>
        <div className="ai-int-partner-item">
          <img src={ixcLogoUrl} alt="IXC Softswitch" className="ai-int-partner-logo ai-int-partner-logo--ixc" />
          <span className="ai-int-partner-label">IXC</span>
        </div>
        <span className="ai-int-partner-link" aria-hidden="true">↔</span>
        <div className="ai-int-partner-item">
          <img src={dealoagentLogo} alt="DealoAgent" className="ai-int-partner-logo ai-int-partner-logo--dealoagent" />
          <span className="ai-int-partner-label">DealoAgent</span>
        </div>
      </div>

      <div className="ai-int-slider-wrap ai-int-demo">
          <div
            ref={containerRef}
            className="ai-int-slider"
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            <div
              className="ai-int-panel ai-int-panel--new"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="ai-int-approach-label ai-int-approach-label--right">
                <span className="ai-int-approach-pill ai-int-approach-pill--new">
                  {t.aiIntegration.newApproach}
                </span>
                <span className="ai-int-approach-caption ai-int-approach-caption--new">
                  {t.aiIntegration.newApproachCaption}
                </span>
              </div>

              <div className="ai-int-panel-body">
                <div className="ai-int-chat">
                  <div className="ai-int-chat-header">
                    <div className="ai-int-chat-user">
                      <div className="ai-int-chat-avatar">
                        <img src={dealoagentLogo} alt="" className="ai-int-chat-avatar-img" />
                      </div>
                      <div>
                        <div className="ai-int-chat-name">DealoAgent AI</div>
                        <div className="ai-int-chat-status">
                          <span className="ai-int-status-dot" />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ai-int-chat-body">
                    <div className="ai-int-chat-messages">
                      <div className="ai-int-msg-user">
                        <div className="ai-int-bubble-user">
                          {typingText}
                          {isTyping && <span style={{ animation: 'ai-int-pulse 1s infinite' }}>|</span>}
                        </div>
                      </div>

                      <div className={`ai-int-msg-bot ${showResponse ? 'ai-int-msg-bot--visible' : 'ai-int-msg-bot--hidden'}`}>
                        <div className="ai-int-bubble-bot">
                          <div className="ai-int-analysis-label">
                            <Sparkles className="ai-int-icon-xs" />
                            Analyzed & dispatched
                          </div>

                          {['list', 'batch', 'routing'].includes(currentConvo.responseType) && (
                            <>
                              <p>{currentConvo.reportIntro}</p>
                              <div className="ai-int-result-list">
                                {listContent.map((item, i) => (
                                  <div key={i} className="ai-int-result-item">
                                    <div className="ai-int-result-avatar">{item.name[0]}</div>
                                    <div className="ai-int-result-text">
                                      <div className="ai-int-result-name">{item.name}</div>
                                      <div className="ai-int-result-detail">{item.detail}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {currentConvo.responseType === 'traffic' && (
                            <>
                              <p>{currentConvo.reportIntro}</p>
                              <div className="ai-int-status-grid">
                                {trafficContent.map((item, i) => (
                                  <div key={i} className={`ai-int-status-card ${i === 0 ? 'ai-int-status-card--green' : 'ai-int-status-card--blue'}`}>
                                    <div className="ai-int-status-card-label">{item.label}</div>
                                    <div>{item.value}</div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                          {currentConvo.responseType === 'balance' && (
                            <>
                              <p>{currentConvo.reportIntro}</p>
                              <div className="ai-int-result-list">
                                {balanceContent.map((item, i) => (
                                  <div key={i} className="ai-int-result-item">
                                    <div className="ai-int-result-avatar">{item.name[0]}</div>
                                    <div className="ai-int-result-text">
                                      <div className="ai-int-result-name">{item.name}</div>
                                      <div className="ai-int-result-detail">{item.detail}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <ChannelFlowRail
                      dispatches={currentConvo.channelDispatches}
                      visible={showResponse}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="ai-int-panel ai-int-panel--old"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="ai-int-approach-label ai-int-approach-label--left">
                <span className="ai-int-approach-pill ai-int-approach-pill--old">
                  {t.aiIntegration.oldApproach}
                </span>
                <span className="ai-int-approach-caption ai-int-approach-caption--old">
                  {t.aiIntegration.oldApproachCaption}
                </span>
              </div>

              <div className="ai-int-panel-body ai-int-panel-body--old">
                <div className="ai-int-app-window">
                  <div className="ai-int-tabs">
                    {APPS.map(app => (
                      <div
                        key={app.id}
                        className={`ai-int-tab ${activeApp === app.id ? 'ai-int-tab--active' : ''}`}
                        style={{
                          borderBottomColor: activeApp === app.id ? app.color : 'transparent',
                        }}
                      >
                        <div className="ai-int-tab-icon">
                          {app.logo ? (
                            <img src={app.logo} alt={app.name} width={16} height={16} />
                          ) : (
                            <TeamsLogo />
                          )}
                        </div>
                        <span>{app.name}</span>
                        {activeApp === app.id && (
                          <span className="ai-int-tab-dot" style={{ background: app.color }} />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="ai-int-app-content-wrap">
                    {APPS.map(app => (
                      <div
                        key={app.id}
                        className={`ai-int-app-pane ${activeApp === app.id ? 'ai-int-app-pane--visible' : 'ai-int-app-pane--hidden'}`}
                        style={{ background: app.bgColor }}
                      >
                        <div className="ai-int-app-pane-header">
                          <div className="ai-int-app-pane-icon">
                            {app.logo ? (
                              <img src={app.logo} alt={app.name} width={20} height={20} />
                            ) : (
                              <TeamsLogo />
                            )}
                          </div>
                          <span className="ai-int-app-pane-title">{app.name}</span>
                          <span className="ai-int-app-pane-minimize">— minimize</span>
                        </div>

                        <div>
                          {APP_CONTENT[app.id].lines.map((line, i) => {
                            const isHighlighted = i === 3 && activeApp === app.id && copyPhase === 'reading';
                            return (
                              <div key={i} className={`ai-int-line ${isHighlighted ? 'ai-int-line--highlight' : ''}`}>
                                {line}
                              </div>
                            );
                          })}
                        </div>

                        {copyPhase === 'reading' && activeApp === app.id && (
                          <div className="ai-int-copy-badge">
                            <Copy className="ai-int-icon-xs" />
                            <span>Read request</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`ai-int-billing ${showBilling ? 'ai-int-billing--active' : 'ai-int-billing--dim'}`}>
                  <div className="ai-int-billing-header">
                    <span>IXC Billing</span>
                    <span className="ai-int-billing-header-note">Main Page · manual copy required</span>
                  </div>

                  <div className="ai-int-billing-screenshot-wrap">
                    <img
                      src={billingDashboard}
                      alt="IXC Billing dashboard — top and target destinations"
                      className="ai-int-billing-screenshot"
                    />
                    {isBillingCopying && (
                      <div
                        className={`ai-int-billing-highlight ${copyPhase === 'copying' ? 'ai-int-billing-highlight--copying' : ''}`}
                        style={{
                          top: billingHighlight.top,
                          left: billingHighlight.left,
                          width: billingHighlight.width,
                          height: billingHighlight.height,
                        }}
                      />
                    )}
                    {copyPhase === 'copying' && showBilling && (
                      <div className="ai-int-billing-copy-badge">
                        <Copy className="ai-int-icon-xs" />
                        <span>Ctrl+C</span>
                      </div>
                    )}
                  </div>

                  {copyPhase === 'copying' && showBilling && (
                    <div className="ai-int-paste-banner">
                      <Copy className="ai-int-icon-xs" />
                      <span>Copying {currentAppData.copyLabel} from billing UI... (Ctrl+C)</span>
                    </div>
                  )}
                </div>

                <div
                  className="ai-int-cursor"
                  style={{
                    left: `${cursorPos.x}%`,
                    top: `${cursorPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <MousePointer2 className="ai-int-icon-md ai-int-icon-fill" style={{ color: '#000', filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))' }} />
                  {(copyPhase === 'copying' || copyPhase === 'selecting') && showBilling && (
                    <div className="ai-int-cursor-ring" />
                  )}
                </div>
              </div>
            </div>

            <div className="ai-int-handle" style={{ left: `${sliderPosition}%` }}>
              <div className="ai-int-handle-glow" />
              <div className="ai-int-handle-knob">
                <GripVertical className="ai-int-icon-md" />
              </div>
            </div>
          </div>
        </div>

        <div className="ai-int-footer-wrap">
          <p className="ai-int-footer">{t.aiIntegration.footer}</p>
          <Link to="/products/ai-automation" className="btn btn-primary ai-int-footer-cta">
            {t.aiIntegration.learnMore}
          </Link>
        </div>
    </section>
  );
}
