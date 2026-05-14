import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMagnetic } from '@shared/hooks';
import { cn } from '@shared/utils';
import { tapScale } from '@shared/lib';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'glass';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
  target,
  rel,
  type = 'button',
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic({ strength: 0.2 });

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] font-medium',
    glass:
      'glass text-slate-200 hover:text-white hover:border-accent-500/30 font-medium',
  };

  const sharedClasses = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full',
    'transition-all duration-300 cursor-pointer text-sm md:text-base',
    'min-h-[44px] min-w-[44px]',
    variants[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement | null>}
        href={href}
        target={target}
        rel={rel}
        className={sharedClasses}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileTap={tapScale}
        style={{ transition: 'transform 0.15s ease-out, box-shadow 0.3s, background 0.3s' }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement | null>}
      type={type}
      className={sharedClasses}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={tapScale}
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.3s, background 0.3s' }}
    >
      {children}
    </motion.button>
  );
}
