import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, FileBadge2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { certificateDocuments } from '../certificatesData';

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

function CertificateCard({
  images,
  title,
  description,
  certificateNo,
  registeredDate,
  certificateNoLabel,
  registeredDateLabel,
  pageLabel,
  viewFullLabel,
}: {
  images: readonly string[];
  title: string;
  description: string;
  certificateNo: string;
  registeredDate: string;
  certificateNoLabel: string;
  registeredDateLabel: string;
  pageLabel: (page: number) => string;
  viewFullLabel: string;
}) {
  const [page, setPage] = useState(0);
  const multiPage = images.length > 1;
  const lastPage = images.length - 1;
  const fullUrl = assetUrl(images[page]);

  useEffect(() => {
    images.forEach((src) => {
      const preload = new Image();
      preload.src = assetUrl(src);
    });
  }, [images]);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(lastPage, p + 1));

  return (
    <article className="certificate-card glass">
      <div className="certificate-card-header">
        <h3>{title}</h3>
        <p className="certificate-card-description">{description}</p>
        <dl className="certificate-card-meta">
          <div>
            <dt>{certificateNoLabel}</dt>
            <dd>{certificateNo}</dd>
          </div>
          <div>
            <dt>{registeredDateLabel}</dt>
            <dd>{registeredDate}</dd>
          </div>
        </dl>
      </div>

      <div className="certificate-card-viewer">
        <div
          className={`certificate-image-frame${multiPage ? ' certificate-image-frame--multi' : ''}`}
          aria-live="polite"
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={assetUrl(src)}
              alt={multiPage ? `${title} — ${pageLabel(i + 1)}` : title}
              className={`certificate-image${i === page ? ' is-active' : ''}`}
              loading="eager"
              decoding="sync"
              draggable={false}
              aria-hidden={i !== page}
            />
          ))}
        </div>

        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-view-link"
        >
          {viewFullLabel} <ExternalLink size={14} />
        </a>

        {multiPage && (
          <div className="certificate-pages">
            <button
              type="button"
              className="certificate-nav-btn"
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous page"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="certificate-page-dots" role="tablist" aria-label="Certificate pages">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={pageLabel(i + 1)}
                  className={`certificate-page-dot${i === page ? ' is-active' : ''}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>

            <span className="certificate-page-indicator">
              {pageLabel(page + 1)} / {images.length}
            </span>

            <button
              type="button"
              className="certificate-nav-btn"
              onClick={goNext}
              disabled={page === lastPage}
              aria-label="Next page"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export function CertificatesAndTrademarks() {
  const { t } = useLanguage();
  const pageLabel = (page: number) => t.about.certificatesPageLabel.replace('{n}', String(page));

  return (
    <section className="section container">
      <SectionHeading
        spacious
        icon={<FileBadge2 size={32} />}
        title={t.about.certificatesTitle}
        subtitle={t.about.certificatesSubtitle}
      />

      <div className="certificates-grid">
        {certificateDocuments.map((doc, i) => {
          const meta = t.about.certificatesDocuments[i];
          return (
            <CertificateCard
              key={i}
              images={doc.images}
              title={meta.title}
              description={meta.description}
              certificateNo={meta.certificateNo}
              registeredDate={meta.registeredDate}
              certificateNoLabel={t.about.certificatesNoLabel}
              registeredDateLabel={t.about.certificatesDateLabel}
              pageLabel={pageLabel}
              viewFullLabel={t.about.certificatesViewFull}
            />
          );
        })}
      </div>
    </section>
  );
}
