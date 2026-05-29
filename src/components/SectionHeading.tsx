import React from 'react';

export type SectionHeadingProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Optional row below subtitle (e.g. carousel controls), centered */
  toolbar?: React.ReactNode;
  /** Adds extra space before the following content (major sections with grids) */
  spacious?: boolean;
  className?: string;
  subtitleClassName?: string;
};

export function SectionHeading({
  icon,
  title,
  subtitle,
  toolbar,
  spacious,
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <header
      className={['section-heading', spacious && 'section-heading--spacious', className].filter(Boolean).join(' ')}
    >
      <div className="section-heading-icon-wrap" aria-hidden="true">
        {icon}
      </div>
      <h2 className="section-heading-title">{title}</h2>
      {subtitle != null && subtitle !== '' ? (
        <p className={['section-heading-subtitle', subtitleClassName].filter(Boolean).join(' ')}>
          {subtitle}
        </p>
      ) : null}
      {toolbar != null ? <div className="section-heading-toolbar">{toolbar}</div> : null}
    </header>
  );
}
