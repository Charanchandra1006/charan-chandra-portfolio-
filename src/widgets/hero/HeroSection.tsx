import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@shared/ui/icons";
import { siteConfig, socialLinks } from "@shared/constants";

const socialIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: (props) => <Mail {...(props as React.ComponentProps<typeof Mail>)} />,
};

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center min-h-[60vh] py-12">
      <div className="max-w-4xl">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-sm text-text-secondary tracking-widest uppercase">Available for opportunities</span>
        </motion.div>
        
        <motion.h1 
          className="text-fluid-4xl md:text-[5rem] font-bold leading-[1.1] tracking-tight mb-8 text-white text-balance"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hi, I'm {siteConfig.name}.
        </motion.h1>
        
        <motion.p 
          className="text-fluid-lg md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Full-Stack Developer crafting beautiful, functional applications that blend modern web technologies with AI to create meaningful digital experiences.
        </motion.p>
      </div>

      <motion.div 
        className="flex flex-wrap items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a 
          href="#projects" 
          className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
        >
          View Projects
          <ArrowRight className="w-4 h-4" />
        </a>
        
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== "mail" ? "_blank" : undefined}
                rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-white hover:bg-[#27272a] hover:border-border-hover transition-all"
                aria-label={link.label}
              >
                {Icon && <Icon width={22} height={22} />}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
