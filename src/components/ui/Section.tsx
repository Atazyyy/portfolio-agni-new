import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'alt';
}

export function Section({
  id,
  children,
  className = '',
  variant = 'default',
}: SectionProps) {
  const variantClass = variant === 'alt' ? 'section-alt' : '';

  return (
    <section
      id={id}
      className={`section ${variantClass} ${className}`.trim()}
    >
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
