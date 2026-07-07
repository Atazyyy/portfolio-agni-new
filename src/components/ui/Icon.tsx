import type { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  size?: number;
  className?: string;
}

export function Icon({ children, size = 24, className = '' }: IconProps) {
  return (
    <span
      className={`icon ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
