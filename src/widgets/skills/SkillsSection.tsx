import { motion } from 'framer-motion';
import { skillsList } from '@entities/skill';

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-8">
          Skills & Technologies
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {skillsList.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#09090b] border border-[#27272a] rounded-lg text-sm text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] hover:bg-[#18181b] transition-all cursor-default"
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
