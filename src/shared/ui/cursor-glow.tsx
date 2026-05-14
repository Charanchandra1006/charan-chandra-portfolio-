import { useEffect, useState } from 'react';
import { useReducedMotion } from '@shared/hooks';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    // Only show on desktop with pointer device
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background:
          'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
}
