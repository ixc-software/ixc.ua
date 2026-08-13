import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

export const FloatingContact: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className={`fab-container ${open ? 'fab-open' : ''}`}>
      <div className="fab-options">
        <a
          href="https://t.me/alex12alex"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-option fab-option-telegram"
          onClick={() => setOpen(false)}
        >
          <Send size={18} /> {t.common.telegram}
        </a>
        <a
          href="https://wa.me/13056806411"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-option fab-option-whatsapp"
          onClick={() => setOpen(false)}
        >
          <Phone size={18} /> {t.common.whatsapp}
        </a>
        <a
          href="https://teams.microsoft.com/l/chat/0/0?users=alex@ixc.ua"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-option fab-option-teams"
          onClick={() => setOpen(false)}
        >
          <MessageSquare size={18} /> {t.common.teams}
        </a>
        <a
          href="mailto:sales@ixc.ua"
          className="fab-option fab-option-email"
          onClick={() => setOpen(false)}
        >
          <Mail size={18} /> {t.common.email}
        </a>
      </div>

      <button
        className="fab-btn"
        onClick={() => setOpen(!open)}
        aria-label={t.common.contactUs}
        title={t.common.needHelp}
      >
        <span className="fab-btn-pulse" />
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
