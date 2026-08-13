import React, { Fragment } from 'react';
import { LocaleLink as Link } from './LocaleLink';

const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function linkifyEmails(text: string, keyPrefix: string): React.ReactNode[] {
  if (!text) return [];
  const nodes: React.ReactNode[] = [];
  const re = new RegExp(EMAIL_RE.source, 'g');
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(<Fragment key={`${keyPrefix}-t-${k++}`}>{text.slice(last, m.index)}</Fragment>);
    const addr = m[1];
    nodes.push(
      <a key={`${keyPrefix}-e-${k++}`} className="blog-rich-link" href={`mailto:${addr}`}>
        {addr}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(<Fragment key={`${keyPrefix}-t-${k++}`}>{text.slice(last)}</Fragment>);
  return nodes.length ? nodes : [<Fragment key={keyPrefix}>{text}</Fragment>];
}

/** Render a Markdown link target as an internal router Link or external anchor. */
function renderLink(label: string, href: string, key: string): React.ReactNode {
  const isInternal = href.startsWith('/');
  if (isInternal) {
    return (
      <Link key={key} to={href} className="blog-rich-link">
        {label}
      </Link>
    );
  }
  const isMail = href.startsWith('mailto:');
  return (
    <a
      key={key}
      className="blog-rich-link"
      href={href}
      {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {label}
    </a>
  );
}

/** Inline parsing: [links](url), then **bold**, *italic*, then bare emails. */
function parseItalic(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(/\*(.+?)\*/g);
  if (parts.length === 1) return <>{linkifyEmails(parts[0], keyPrefix)}</>;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    if (i % 2 === 0) {
      out.push(<Fragment key={`${keyPrefix}-t-${i}`}>{linkifyEmails(parts[i], `${keyPrefix}-t-${i}`)}</Fragment>);
    } else {
      out.push(
        <em key={`${keyPrefix}-i-${i}`} className="blog-rich-em">
          {linkifyEmails(parts[i], `${keyPrefix}-i-${i}-in`)}
        </em>
      );
    }
  }
  return <>{out}</>;
}

function parseBold(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return parseItalic(parts[0], keyPrefix);
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    if (i % 2 === 0) {
      out.push(<Fragment key={`${keyPrefix}-t-${i}`}>{parseItalic(parts[i], `${keyPrefix}-t-${i}`)}</Fragment>);
    } else {
      out.push(
        <strong key={`${keyPrefix}-s-${i}`} className="blog-rich-strong">
          {parseItalic(parts[i], `${keyPrefix}-s-${i}-in`)}
        </strong>
      );
    }
  }
  return <>{out}</>;
}

/** Inline parsing: [links](url), then **bold**, *italic*, then bare emails. */
function parseInline(text: string, keyPrefix: string): React.ReactNode {
  const out: React.ReactNode[] = [];
  const re = new RegExp(LINK_RE.source, 'g');
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(<Fragment key={`${keyPrefix}-p-${k++}`}>{parseBold(text.slice(last, m.index), `${keyPrefix}-b-${k}`)}</Fragment>);
    out.push(renderLink(m[1], m[2], `${keyPrefix}-l-${k++}`));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={`${keyPrefix}-p-${k++}`}>{parseBold(text.slice(last), `${keyPrefix}-b-${k}`)}</Fragment>);
  return <>{out}</>;
}

/** Parse the full body into block-level elements. */
export function RichArticleBody({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      i++;
      continue;
    }

    if (line === '---') {
      nodes.push(<hr key={`hr-${i}`} className="blog-rich-hr" />);
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      nodes.push(
        <h3 key={`h3-${i}`} className="blog-rich-h3">
          {parseInline(line.slice(4).trim(), `h3-${i}`)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      nodes.push(
        <h2 key={`h2-${i}`} className="blog-rich-h2">
          {parseInline(line.slice(3).trim(), `h2-${i}`)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('• ')) {
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        if (t.startsWith('- ') || t.startsWith('• ')) {
          items.push(t.replace(/^[-•]\s+/, ''));
          i++;
        } else if (!t) {
          break;
        } else {
          break;
        }
      }
      nodes.push(
        <ul key={`ul-${i}`} className="blog-rich-list">
          {items.map((item, j) => (
            <li key={j}>{parseInline(item, `ul-${i}-${j}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.startsWith('> ')) {
      const quotes: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        if (t.startsWith('> ')) {
          quotes.push(t.slice(2).trim());
          i++;
        } else if (!t) {
          break;
        } else {
          break;
        }
      }
      nodes.push(
        <blockquote key={`q-${i}`} className="blog-rich-quote">
          {quotes.map((q, j) => (
            <p key={j}>{parseInline(q, `q-${i}-${j}`)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    const para: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t || t === '---' || t.startsWith('#') || t.startsWith('- ') || t.startsWith('• ') || t.startsWith('> ')) break;
      para.push(t);
      i++;
    }
    if (para.length) {
      nodes.push(
        <p key={`p-${i}`} className="blog-rich-para">
          {parseInline(para.join(' '), `p-${i}`)}
        </p>
      );
    }
  }

  return <div className="blog-rich-root">{nodes}</div>;
}
