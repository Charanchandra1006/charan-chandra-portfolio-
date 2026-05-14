import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { SectionHeading, GlassCard } from '@shared/ui';
import { staggerContainer, staggerItem } from '@shared/lib';
import { experienceItems, type ExperienceItem } from '@entities/experience';

const typeIcons = {
  education: GraduationCap,
  achievement: Award,
  event: Calendar,
} as const;

const typeColors = {
  education: 'from-accent-500 to-accent-600',
  achievement: 'from-amber-500 to-orange-500',
  event: 'from-violet-500 to-purple-500',
} as const;

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const Icon = typeIcons[item.type];
  const gradient = typeColors[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={staggerItem}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8"
    >
      {/* Content - alternates sides on desktop */}
      <div className={`${isLeft ? 'md:text-right' : 'md:col-start-3'}`}>
        <GlassCard padding="md" className="inline-block w-full">
          <div className={`flex items-start gap-3 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0`}>
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-accent-400 text-sm font-medium mb-1">{item.organization}</p>
              <p className="text-slate-500 text-xs mb-3">{item.period}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              {item.highlight && (
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-bold border border-accent-500/20">
                  {item.highlight}
                </span>
              )}
              {item.status && (
                <span className={`inline-block mt-3 ${item.highlight ? 'ml-2' : ''} px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'in-progress'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {item.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </span>
              )}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Timeline dot - visible only on desktop */}
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${gradient} ring-4 ring-background z-10`} />
        <div className="w-0.5 flex-1 bg-glass-border" />
      </div>

      {/* Empty space for alternating layout */}
      <div className={`hidden md:block ${isLeft ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1'}`} />
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="🎓 Academic Journey"
          title="Education"
          highlight="Details"
          subtitle="My academic background and qualifications"
        />

        <motion.div
          className="max-w-5xl mx-auto space-y-6 md:space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {experienceItems.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
