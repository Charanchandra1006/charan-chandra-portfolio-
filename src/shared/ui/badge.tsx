import { cn } from '@shared/utils';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-accent-950/50 text-accent-300 border border-accent-800/30',
    accent: 'bg-accent-500/10 text-accent-400 border border-accent-500/20',
    outline: 'bg-transparent text-slate-300 border border-slate-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
