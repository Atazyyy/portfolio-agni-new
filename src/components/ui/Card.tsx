import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${hover ? '' : 'no-hover'} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

interface GradientCardProps {
  children: ReactNode;
  gradient: string;
  className?: string;
}

export function GradientCard({ children, gradient, className = '' }: GradientCardProps) {
  return (
    <div
      className={`gradient-card ${className}`.trim()}
      style={{ background: gradient }}
    >
      {children}
    </div>
  );
}
