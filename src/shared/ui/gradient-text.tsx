import type { ReactNode } from 'react';
import { cn } from '@shared/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export function GradientText({ children, className, as: Tag = 'span' }: GradientTextProps) {
  return (
    <Tag className={cn('gradient-text', className)}>
      {children}
    </Tag>
  );
}
