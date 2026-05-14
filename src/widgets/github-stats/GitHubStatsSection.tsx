import { motion } from 'framer-motion';
import { GitBranch, Code2, Activity } from 'lucide-react';
import { SectionHeading, GlassCard, AnimatedCounter } from '@shared/ui';
import { staggerContainer, staggerItem } from '@shared/lib';

const stats = [
  { icon: GitBranch, label: 'Repositories', value: 15, suffix: '+' },
  { icon: Code2, label: 'Technologies', value: 30, suffix: '+' },
  { icon: Activity, label: 'Contributions', value: 200, suffix: '+' },
];

export function GitHubStatsSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="📊 GitHub"
          title="Development"
          highlight="Activity"
          subtitle="A snapshot of my open-source contributions and activity"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="text-center" padding="lg">
                <stat.icon className="w-8 h-8 text-accent-500 mx-auto mb-4" />
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
