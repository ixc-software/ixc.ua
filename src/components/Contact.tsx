import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xojywrwz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors?.map((err: { message: string }) => err.message).join(', ') || t.contactForm.errorGeneric);
        setStatus('error');
      }
    } catch {
      setErrorMessage(t.contactForm.errorNetwork);
      setStatus('error');
    }
  };

  return (
    <section id="get-in-touch" className="section container section-glow section-glow-right" style={{ scrollMarginTop: '6rem' }}>
      <SectionHeading
        spacious
        icon={<Mail size={32} />}
        title={t.contactSection.title}
        subtitle={t.contactSection.subtitle}
      />

      <div className="contact-layout">
        <div className="glass contact-form-card">
          {status === 'success' ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <CheckCircle size={48} />
              </div>
              <h3>{t.contactForm.successTitle}</h3>
              <p>{t.contactForm.successText}</p>
              <button
                className="btn btn-outline"
                onClick={() => setStatus('idle')}
                style={{ marginTop: '1.5rem' }}
              >
                {t.contactForm.sendAnother}
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-label">
                  <User size={16} />
                  {t.contactForm.name}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder={t.contactForm.namePlaceholder}
                  className="contact-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-label">
                  <Mail size={16} />
                  {t.contactForm.email}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="contact-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-company" className="contact-label">
                  {t.contactForm.company}
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.8rem' }}> {t.contactForm.optional}</span>
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  placeholder={t.contactForm.companyPlaceholder}
                  className="contact-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-label">
                  <MessageSquare size={16} />
                  {t.contactForm.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contactForm.messagePlaceholder}
                  className="contact-input contact-textarea"
                  disabled={status === 'submitting'}
                />
              </div>

              {status === 'error' && (
                <div className="contact-error">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="contact-spinner" />
                    {t.contactForm.sending}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contactForm.send}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <div className="glass contact-info-card">
            <div className="contact-info-icon" style={{ background: 'rgba(79, 124, 172, 0.15)' }}>
              <Mail size={22} color="var(--accent-color)" />
            </div>
            <div>
              <h4>{t.contactForm.emailUs}</h4>
              <a href="mailto:sales@ixc.ua">sales@ixc.ua</a>
            </div>
          </div>

          <div className="glass contact-info-card">
            <div className="contact-info-icon" style={{ background: 'rgba(36, 161, 222, 0.15)' }}>
              <Send size={22} color="#24a1de" />
            </div>
            <div>
              <h4>{t.common.telegram}</h4>
              <a href="https://t.me/alex12alex" target="_blank" rel="noopener noreferrer">@alex12alex</a>
            </div>
          </div>

          <div className="glass contact-info-card">
            <div className="contact-info-icon" style={{ background: 'rgba(79, 124, 172, 0.1)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4>{t.common.office}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                7950 NW 53rd Street, Suite 337<br />
                Miami, Florida 33166
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
