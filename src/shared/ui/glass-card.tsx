import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@shared/utils';
import { hoverGlow } from '@shared/lib';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap = {
  sm: 'p-4 md:p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10 lg:p-12',
};

export function GlassCard({ children, className, hover = true, padding = 'md' }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl md:rounded-3xl',
        paddingMap[padding],
        className
      )}
      whileHover={hover ? hoverGlow : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
