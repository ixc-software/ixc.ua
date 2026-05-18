import React, { Fragment } from 'react';

const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

/** Turn bare emails into mailto links (safe: no raw HTML). */
function linkifyEmails(s: string, keyPrefix: string): React.ReactNode[] {
  if (!s) return [];
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(EMAIL_RE.source, 'g');
  let k = 0;
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) {
      nodes.push(<Fragment key={`${keyPrefix}-x-${k++}`}>{s.slice(last, m.index)}</Fragment>);
    }
    const addr = m[1];
    nodes.push(
      <a key={`${keyPrefix}-e-${k++}`} className="news-rich-link" href={`mailto:${addr}`}>
        {addr}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < s.length) {
    nodes.push(<Fragment key={`${keyPrefix}-x-${k++}`}>{s.slice(last)}</Fragment>);
  }
  return nodes.length ? nodes : [<Fragment key={keyPrefix}>{s}</Fragment>];
}

/** Inline **bold** (no nesting) + clickable emails. */
function parseBold(str: string, keyPrefix: string): React.ReactNode {
  const parts = str.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return <>{linkifyEmails(parts[0], keyPrefix)}</>;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      if (parts[i]) {
        out.push(
          <Fragment key={`${keyPrefix}-t-${i}`}>{linkifyEmails(parts[i], `${keyPrefix}-t-${i}`)}</Fragment>
        );
      }
    } else {
      out.push(
        <strong key={`${keyPrefix}-b-${i}`} className="news-rich-strong">
          {linkifyEmails(parts[i], `${keyPrefix}-b-${i}-in`)}
        </strong>
      );
    }
  }
  return <>{out}</>;
}

function parseSectionBody(body: string, baseKey: string): React.ReactNode[] {
  const lines = body.split('\n');
  const out: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trimEnd();
    if (!line.trim()) {
      i++;
      continue;
    }

    const trimmed = line.trimStart();
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trimStart();
        if (t.startsWith('- ') || t.startsWith('• ')) {
          items.push(t.replace(/^[-•]\s+/, ''));
          i++;
        } else break;
      }
      out.push(
        <ul key={`ul-${baseKey}-${out.length}`} className="news-rich-list">
          {items.map((item, j) => (
            <li key={j}>{parseBold(item, `${baseKey}-li-${j}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quotes: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trimStart();
        if (t.startsWith('> ')) {
          quotes.push(t.slice(2).trim());
          i++;
        } else break;
      }
      out.push(
        <blockquote key={`q-${baseKey}-${out.length}`} className="news-rich-quote">
          {quotes.map((q, j) => (
            <p key={j}>{parseBold(q, `${baseKey}-q-${j}`)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    const para: string[] = [];
    while (i < lines.length) {
      const t = lines[i];
      const ts = t.trimStart();
      if (!t.trim()) break;
      if (ts.startsWith('- ') || ts.startsWith('• ') || ts.startsWith('> ')) break;
      para.push(t.trim());
      i++;
    }
    if (para.length) {
      out.push(
        <p key={`p-${baseKey}-${out.length}`} className="news-rich-para">
          {parseBold(para.join(' '), `${baseKey}-p-${out.length}`)}
        </p>
      );
    }
  }

  return out;
}

function parseLead(lead: string): React.ReactNode[] {
  return lead
    .trim()
    .split(/\n\n+/)
    .filter(Boolean)
    .map((para, i) => (
      <p
        key={`lead-${i}`}
        className={i === 0 ? 'news-rich-kicker' : i === 1 ? 'news-rich-dateline' : 'news-rich-lead'}
      >
        {parseBold(para.replace(/\n/g, ' '), `lead-${i}`)}
      </p>
    ));
}

export function RichNewsBody({ content }: { content: string }) {
  const chunks = content.split(/\n---\n/);
  const nodes: React.ReactNode[] = [];

  if (chunks[0]?.trim()) {
    nodes.push(
      <div key="lead" className="news-rich-lead-wrap">
        {parseLead(chunks[0])}
      </div>
    );
  }

  for (let ci = 1; ci < chunks.length; ci++) {
    const chunk = chunks[ci].trim();
    if (!chunk) continue;
    const lines = chunk.split('\n');
    const first = lines[0].trim();
    if (!first.startsWith('## ')) {
      nodes.push(
        <div key={`orphan-${ci}`} className="news-rich-orphan">
          {parseSectionBody(chunk, `o-${ci}`)}
        </div>
      );
      continue;
    }
    const title = first.slice(3).trim();
    const rest = lines.slice(1).join('\n').trim();
    nodes.push(
      <section key={`sec-${ci}`} className="news-rich-section">
        <h2 className="news-rich-section-title">{parseBold(title, `sec-${ci}-h`)}</h2>
        {rest ? parseSectionBody(rest, `sec-${ci}`) : null}
      </section>
    );
  }

  return <div className="news-rich-root">{nodes}</div>;
}
