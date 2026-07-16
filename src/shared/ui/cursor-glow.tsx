import { useEffect, useState } from 'react';
import { useReducedMotion } from '@shared/hooks';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor components
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const glowSpringConfig = { damping: 40, stiffness: 100, mass: 1 };
  const glowMouseX = useSpring(mouseX, glowSpringConfig);
  const glowMouseY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    if (prefersReduced) return;

    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    // Initially hide cursor until first move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [prefersReduced, isVisible, mouseX, mouseY]);

  if (prefersReduced) return null;

  return (
    <>
      {/* Background Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          width: 400,
          height: 400,
          x: glowMouseX,
          y: glowMouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'transparent',
          borderColor: isHovering ? 'transparent' : 'rgba(255,255,255,0.5)',
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
