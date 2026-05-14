import { useCounter, useScrollReveal } from '@shared/hooks';
import { cn } from '@shared/utils';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({ end, suffix = '', label, className }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const count = useCounter({ end, enabled: isVisible, duration: 2000 });

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-fluid-3xl md:text-fluid-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}
