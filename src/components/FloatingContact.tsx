import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, MessageSquare } from 'lucide-react';

export const FloatingContact: React.FC = () => {
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
          <Send size={18} /> Telegram
        </a>
        <a
          href="https://wa.me/13056806411"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-option fab-option-whatsapp"
          onClick={() => setOpen(false)}
        >
          <Phone size={18} /> WhatsApp
        </a>
        <a
          href="https://teams.microsoft.com/l/chat/0/0?users=alex@ixc.ua"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-option fab-option-teams"
          onClick={() => setOpen(false)}
        >
          <MessageSquare size={18} /> Teams
        </a>
        <a
          href="mailto:sales@ixc.ua"
          className="fab-option fab-option-email"
          onClick={() => setOpen(false)}
        >
          <Mail size={18} /> Email
        </a>
      </div>

      <button
        className="fab-btn"
        onClick={() => setOpen(!open)}
        aria-label="Contact us"
        title="Need help?"
      >
        <span className="fab-btn-pulse" />
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
