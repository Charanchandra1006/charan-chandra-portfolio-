import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { experienceItems } from '@entities/experience';

const typeIcons = {
  education: GraduationCap,
  achievement: Award,
  event: Calendar,
} as const;

const statusColors = {
  'in-progress': 'bg-green-500',
  completed: 'bg-[#3f3f46]',
} as const;

export function ExperienceSection() {
  return (
    <section id="education" className="py-12">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold">
          Experience & Education
        </h2>
        <div className="flex-1 h-[1px] bg-[#27272a]" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-[#27272a]" />

          <div className="space-y-8">
            {experienceItems.map((item, index) => {
              const Icon = typeIcons[item.type];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[10px] top-6 w-3 h-3 rounded-full ${
                      item.status ? statusColors[item.status] : 'bg-[#3f3f46]'
                    } ring-4 ring-[#000000] z-10`}
                  />

                  {/* Card */}
                  <div className="bg-[#09090b] border border-[#27272a] rounded-2xl p-6 hover:border-[#3f3f46] transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-text-muted" />
                      <span className="text-xs font-mono text-text-muted">{item.period}</span>
                      {item.status === 'in-progress' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary mb-3">{item.organization}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                    
                    {item.highlight && (
                      <span className="inline-block mt-4 px-3 py-1 rounded-lg border border-[#27272a] bg-[#18181b] text-xs text-text-secondary font-medium">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
