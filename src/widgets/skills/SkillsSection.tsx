import { motion } from 'framer-motion';
import { SectionHeading, GlassCard } from '@shared/ui';
import { staggerContainer, staggerItem } from '@shared/lib';
import { skillCategories } from '@entities/skill';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="🚀 Technical Expertise"
          title="Skills &"
          highlight="Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={staggerItem}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 border border-accent-500/20 flex items-center justify-center text-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-slate-300 rounded-lg text-sm font-medium hover:border-accent-500/30 hover:text-accent-300 hover:bg-accent-500/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
