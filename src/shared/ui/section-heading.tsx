import { motion } from 'framer-motion';
import { fadeUp } from '@shared/lib';
import { GradientText } from './gradient-text';
import { cn } from '@shared/utils';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ badge, title, highlight, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn('text-center mb-12 md:mb-16 lg:mb-20', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-accent-400 mb-4">
        {badge}
      </span>
      <h2 className="text-fluid-4xl font-bold mb-4 text-balance">
        {title} <GradientText>{highlight}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-fluid-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
