import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { experienceItems } from '@entities/experience';

const typeIcons = {
  education: GraduationCap,
  achievement: Award,
  event: Calendar,
} as const;

export function ExperienceSection() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-8">
          Experience & Education
        </h2>

        <div className="space-y-12">
          {experienceItems.map((item, index) => {
            const Icon = typeIcons[item.type];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-[-48px] last:before:hidden before:w-[1px] before:bg-border"
              >
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black z-10" />
                
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-text-muted" />
                  <span className="text-xs font-mono text-text-muted">{item.period}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary mb-3">{item.organization}</p>
                <p className="text-sm text-text-muted leading-relaxed max-w-2xl">{item.description}</p>
                
                {item.highlight && (
                  <span className="inline-block mt-3 px-2.5 py-0.5 rounded border border-border text-xs text-text-secondary">
                    {item.highlight}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
