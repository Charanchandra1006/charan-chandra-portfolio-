import { useRef, useCallback, type RefObject } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface MagneticConfig {
  strength?: number;
  ease?: number;
}

interface UseMagneticReturn {
  ref: RefObject<HTMLElement | null>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export function useMagnetic(config: MagneticConfig = {}): UseMagneticReturn {
  const { strength = 0.3 } = config;
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReduced || !ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength, prefersReduced]
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
