import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@shared/ui/icons";
import { MagneticButton, GlassCard, GradientText } from "@shared/ui";
import { siteConfig, socialLinks } from "@shared/constants";
import { letterStagger, letterChild, fadeUp, slideInRight } from "@shared/lib";

const socialIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: (props) => <Mail {...(props as React.ComponentProps<typeof Mail>)} />,
};

export function HeroSection() {
  const words = "M Charan Chandra".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium text-accent-400">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Headline with letter stagger */}
            <div>
              <motion.p
                className="text-fluid-lg text-slate-400 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                className="text-fluid-3xl md:text-fluid-4xl font-bold leading-tight"
                variants={letterStagger}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block whitespace-nowrap"
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${wordIndex}-${charIndex}`}
                        variants={letterChild}
                        className="gradient-text-strong inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordIndex !== words.length - 1 && "\u00A0"}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-fluid-xl text-slate-400 font-light"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-fluid-base text-slate-500 max-w-xl leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              I craft beautiful, functional applications that blend modern web
              technologies with AI to create meaningful digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <MagneticButton href="#projects" variant="primary">
                View Projects
              </MagneticButton>
              <MagneticButton
                href={siteConfig.resumeUrl}
                variant="glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-3 pt-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel={
                      link.icon !== "mail" ? "noopener noreferrer" : undefined
                    }
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-200"
                    aria-label={link.label}
                  >
                    {Icon && <Icon width={18} height={18} />}
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Floating card */}
          <motion.div
            className="hidden lg:block"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <div className="animate-float">
              <GlassCard className="shadow-2xl max-w-md ml-auto" padding="lg">
                <div className="space-y-6">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      CC
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {siteConfig.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        Full-Stack Developer
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm text-slate-400">
                        Available for opportunities
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-500" />
                      <span className="text-sm text-slate-400">
                        {siteConfig.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-500" />
                      <span className="text-sm text-slate-400">
                        AI & Web Development
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="pt-6 border-t border-glass-border">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">
                          <GradientText>3+</GradientText>
                        </div>
                        <div className="text-xs text-slate-500">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          <GradientText>30+</GradientText>
                        </div>
                        <div className="text-xs text-slate-500">
                          Technologies
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          <GradientText>4</GradientText>
                        </div>
                        <div className="text-xs text-slate-500">Domains</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-accent-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
