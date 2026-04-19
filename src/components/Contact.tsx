import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
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
        setErrorMessage(data?.errors?.map((err: { message: string }) => err.message).join(', ') || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact-form" className="section container section-glow section-glow-right">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Mail size={32} color="var(--accent-color)" />
        <h2 style={{ fontSize: '2.5rem' }}>Get in Touch</h2>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '600px' }}>
        Have questions about IXC Softswitch? Looking for a demo or pricing details? Drop us a message and we'll get back to you shortly.
      </p>

      <div className="contact-layout">
        {/* Form */}
        <div className="glass contact-form-card">
          {status === 'success' ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <CheckCircle size={48} />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button
                className="btn btn-outline"
                onClick={() => setStatus('idle')}
                style={{ marginTop: '1.5rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-label">
                  <User size={16} />
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="contact-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-label">
                  <Mail size={16} />
                  Email
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
                  Company
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.8rem' }}> (optional)</span>
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  placeholder="Your company name"
                  className="contact-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-label">
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or ask a question..."
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Sidebar */}
        <div className="contact-info">
          <div className="glass contact-info-card">
            <div className="contact-info-icon" style={{ background: 'rgba(79, 124, 172, 0.15)' }}>
              <Mail size={22} color="var(--accent-color)" />
            </div>
            <div>
              <h4>Email Us</h4>
              <a href="mailto:sales@ixc.ua">sales@ixc.ua</a>
            </div>
          </div>

          <div className="glass contact-info-card">
            <div className="contact-info-icon" style={{ background: 'rgba(36, 161, 222, 0.15)' }}>
              <Send size={22} color="#24a1de" />
            </div>
            <div>
              <h4>Telegram</h4>
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
              <h4>Office</h4>
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
