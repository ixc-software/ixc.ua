import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HashScrollLink } from './HashScrollLink';

const EMAIL_RE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const IMAGE_LINE_RE = /^!\[(.*?)\]\((.*?)\)\s*$/;
const BTN_LINE_RE = /^@btn\s+(.+?)\s*\|\s*(\S+)\s*$/;

function isTableSeparator(line: string): boolean {
  const t = line.trim();
  if (!t.startsWith('|') || !t.endsWith('|')) return false;
  return t.replace(/\|/g, '').replace(/[-:\s]/g, '').length === 0;
}

function isTableRow(line: string): boolean {
  const t = line.trim();
  return t.startsWith('|') && t.endsWith('|') && !isTableSeparator(t);
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function renderNewsTable(rows: string[][], key: string) {
  if (!rows.length) return null;
  const [header, ...body] = rows;
  return (
    <div key={key} className="news-rich-table-wrap">
      <table className="news-rich-table">
        <thead>
          <tr>
            {header.map((cell, j) => (
              <th key={j} scope="col">
                {cell ? parseInline(cell, `${key}-h-${j}`) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{parseInline(cell, `${key}-r-${ri}-c-${ci}`)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function resolveNewsImageSrc(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const path = src.startsWith('/') ? src.slice(1) : src;
  return `${import.meta.env.BASE_URL}${path}`;
}

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

function renderNewsBtn(label: string, href: string, key: string) {
  const external = href.startsWith('http://') || href.startsWith('https://');
  const className = 'btn btn-primary news-rich-cta';
  const content = (
    <>
      {label} <ArrowRight size={18} />
    </>
  );
  const hashIndex = href.indexOf('#');
  const hasHash = hashIndex >= 0;
  return (
    <div key={key} className="news-rich-cta-wrap">
      {external ? (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : hasHash ? (
        <HashScrollLink
          to={{
            pathname: hashIndex > 0 ? href.slice(0, hashIndex) || '/' : '/',
            hash: href.slice(hashIndex + 1),
          }}
          className={className}
        >
          {content}
        </HashScrollLink>
      ) : (
        <Link to={href} className={className}>
          {content}
        </Link>
      )}
    </div>
  );
}

/** Inline **bold**, *italic*, and clickable emails. */
function parseItalic(str: string, keyPrefix: string): React.ReactNode {
  const parts = str.split(/\*(.+?)\*/g);
  if (parts.length === 1) return <>{linkifyEmails(parts[0], keyPrefix)}</>;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    if (i % 2 === 0) {
      out.push(
        <Fragment key={`${keyPrefix}-t-${i}`}>{linkifyEmails(parts[i], `${keyPrefix}-t-${i}`)}</Fragment>
      );
    } else {
      out.push(
        <em key={`${keyPrefix}-i-${i}`} className="news-rich-em">
          {linkifyEmails(parts[i], `${keyPrefix}-i-${i}-in`)}
        </em>
      );
    }
  }
  return <>{out}</>;
}

function parseInline(str: string, keyPrefix: string): React.ReactNode {
  const parts = str.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return parseItalic(parts[0], keyPrefix);
  const out: React.ReactNode[] = [];
  for (let i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    if (i % 2 === 0) {
      out.push(
        <Fragment key={`${keyPrefix}-t-${i}`}>{parseItalic(parts[i], `${keyPrefix}-t-${i}`)}</Fragment>
      );
    } else {
      out.push(
        <strong key={`${keyPrefix}-b-${i}`} className="news-rich-strong">
          {parseItalic(parts[i], `${keyPrefix}-b-${i}-in`)}
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
    const btnMatch = trimmed.match(BTN_LINE_RE);
    if (btnMatch) {
      out.push(renderNewsBtn(btnMatch[1].trim(), btnMatch[2].trim(), `btn-${baseKey}-${out.length}`));
      i++;
      continue;
    }

    if (isTableRow(trimmed)) {
      const rows: string[][] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        if (!t) break;
        if (isTableSeparator(t)) {
          i++;
          continue;
        }
        if (!isTableRow(t)) break;
        rows.push(parseTableRow(t));
        i++;
      }
      const table = renderNewsTable(rows, `tbl-${baseKey}-${out.length}`);
      if (table) out.push(table);
      continue;
    }

    const imageMatch = trimmed.match(IMAGE_LINE_RE);
    if (imageMatch) {
      const figures: { alt: string; src: string }[] = [
        { alt: imageMatch[1], src: imageMatch[2] },
      ];
      i++;
      while (i < lines.length) {
        const next = lines[i].trim();
        const nextImage = next.match(IMAGE_LINE_RE);
        if (!nextImage) break;
        figures.push({ alt: nextImage[1], src: nextImage[2] });
        i++;
      }
      out.push(
        <div
          key={`fig-${baseKey}-${out.length}`}
          className={`news-rich-figures${figures.length > 1 ? ' news-rich-figures--row' : ''}`}
        >
          {figures.map((fig, j) => (
            <figure key={j} className="news-rich-figure">
              <img src={resolveNewsImageSrc(fig.src)} alt={fig.alt} loading="lazy" />
              {fig.alt ? <figcaption>{fig.alt}</figcaption> : null}
            </figure>
          ))}
        </div>
      );
      continue;
    }

    if (trimmed.startsWith('### ')) {
      out.push(
        <h3 key={`h3-${baseKey}-${out.length}`} className="news-rich-subsection-title">
          {parseInline(trimmed.slice(4).trim(), `${baseKey}-h3-${out.length}`)}
        </h3>
      );
      i++;
      continue;
    }

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
            <li key={j}>{parseInline(item, `${baseKey}-li-${j}`)}</li>
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
            <p key={j}>{parseInline(q, `${baseKey}-q-${j}`)}</p>
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
      if (
        IMAGE_LINE_RE.test(ts) ||
        BTN_LINE_RE.test(ts) ||
        isTableRow(ts) ||
        isTableSeparator(ts) ||
        ts.startsWith('### ') ||
        ts.startsWith('- ') ||
        ts.startsWith('• ') ||
        ts.startsWith('> ')
      ) break;
      para.push(t.trim());
      i++;
    }
    if (para.length) {
      out.push(
        <p key={`p-${baseKey}-${out.length}`} className="news-rich-para">
          {parseInline(para.join(' '), `${baseKey}-p-${out.length}`)}
        </p>
      );
    }
  }

  return out;
}

function parseLead(lead: string): React.ReactNode[] {
  const blocks = lead.trim().split(/\n\n+/).filter(Boolean);
  const out: React.ReactNode[] = [];
  let textBlockIndex = 0;

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    for (const line of lines) {
      const btnMatch = line.match(BTN_LINE_RE);
      if (btnMatch) {
        out.push(renderNewsBtn(btnMatch[1].trim(), btnMatch[2].trim(), `lead-btn-${out.length}`));
      }
    }
    const prose = lines.filter((l) => !BTN_LINE_RE.test(l)).join(' ').trim();
    if (!prose) continue;
    const i = textBlockIndex++;
    out.push(
      <p
        key={`lead-${out.length}`}
        className={i === 0 ? 'news-rich-kicker' : i === 1 ? 'news-rich-dateline' : 'news-rich-lead'}
      >
        {parseInline(prose, `lead-${i}`)}
      </p>
    );
  }
  return out;
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
        <h2 className="news-rich-section-title">{parseInline(title, `sec-${ci}-h`)}</h2>
        {rest ? parseSectionBody(rest, `sec-${ci}`) : null}
      </section>
    );
  }

  return <div className="news-rich-root">{nodes}</div>;
}
