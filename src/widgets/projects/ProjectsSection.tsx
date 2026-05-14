import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@shared/ui/icons";
import { projects } from "@entities/project";
import { cn } from "@shared/utils";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // We are using the 4 real projects from entities
  const displayProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 flex flex-col items-center justify-center bg-black overflow-x-clip z-10"
    >
      {/* --- HEADER --- */}

      {/* Top Center: Heading */}
      <div className="flex flex-col items-center text-center mt-2">
        <h2 className="text-fluid-4xl font-bold text-white text-balance">
          PROJECTS
        </h2>
        <p className="text-slate-500 text-xs tracking-widest uppercase mt-3">
          A glimpse of things I've built
        </p>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-accent-500/80 to-transparent mt-4"
          animate={{ opacity: [0.3, 1, 0.3], height: [24, 32, 24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-32 z-20 flex flex-col items-center relative">
        {/* HORIZONTAL CARDS ROW */}
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-4 w-full relative z-30">
          {displayProjects.map((project, idx) => {
            const isActive = activeProject === idx;
            const isHoveredAny = activeProject !== null;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProject(idx)}
                onMouseLeave={() => setActiveProject(null)}
                className={cn(
                  "relative flex-1 min-w-[200px] max-w-[280px] h-[120px] rounded-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
                  "border border-white/5 bg-white/[0.02] backdrop-blur-xl",
                  isActive
                    ? "shadow-[0_0_40px_rgba(6,182,212,0.15)] border-white/20 scale-[1.02] -translate-y-2"
                    : "shadow-lg",
                  isHoveredAny && !isActive
                    ? "opacity-40 scale-[0.98]"
                    : "opacity-100",
                )}
              >
                {/* Subtle top glow line */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500",
                    isActive
                      ? "bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-100"
                      : "bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50",
                  )}
                />

                <div className="p-5 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-white/40">
                      0{idx + 1}
                    </span>
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        isActive
                          ? "bg-accent-400 shadow-[0_0_10px_#22d3ee]"
                          : "bg-white/10",
                      )}
                    />
                  </div>
                  <h3
                    className={cn(
                      "text-sm font-semibold tracking-wide transition-colors duration-300",
                      isActive ? "text-white" : "text-white/70",
                    )}
                  >
                    {project.title.split("–")[0].trim()}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EXPANDED PANEL */}
        <div className="w-full h-[480px] mt-8 relative">
          <AnimatePresence mode="wait">
            {activeProject !== null && (
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.99 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-20"
                onMouseEnter={() => setActiveProject(activeProject)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* LEFT SIDE: Visual Mockup */}
                <div className="w-full md:w-1/2 h-full relative overflow-hidden bg-black/50 border-r border-white/5">
                  {/* Subtle animated background gradient based on project */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-20 bg-gradient-to-br",
                      displayProjects[activeProject].gradient,
                    )}
                  />

                  {/* Premium Abstract Device Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <motion.div
                      initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: "easeOut",
                      }}
                      className="w-full h-full rounded-[2rem] border border-white/10 bg-black/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center group"
                    >
                      <img 
                        src={displayProjects[activeProject].image} 
                        alt={displayProjects[activeProject].title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT SIDE: Details */}
                <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-accent-500/80">
                      0{activeProject + 1}
                    </span>
                    <span className="w-8 h-[1px] bg-white/20" />
                    <span className="text-xs uppercase tracking-widest text-white/50">
                      {displayProjects[activeProject].category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-light text-white mb-6 tracking-wide">
                    {displayProjects[activeProject].title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
                    {displayProjects[activeProject].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {displayProjects[activeProject].features
                      .slice(0, 3)
                      .map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500/50 mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Footer area: Tech Stack + Actions */}
                  <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    {/* Tech Icons (Text tags for minimalism) */}
                    <div className="flex flex-wrap gap-2 max-w-[240px]">
                      {displayProjects[activeProject].techStack
                        .slice(0, 4)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      {displayProjects[activeProject].techStack.length > 4 && (
                        <span className="px-2.5 py-1 text-[10px] text-white/40">
                          +{displayProjects[activeProject].techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Minimal glowing buttons */}
                    <div className="flex gap-4">
                      {displayProjects[activeProject].liveUrl && (
                        <a
                          href={displayProjects[activeProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative px-6 py-2.5 text-xs font-medium tracking-widest text-white overflow-hidden rounded-full border border-accent-500/30 hover:border-accent-400 transition-colors"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            VIEW LIVE <ExternalLink size={12} />
                          </span>
                          <div className="absolute inset-0 bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors" />
                        </a>
                      )}
                      <a
                        href={displayProjects[activeProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-2.5 text-xs font-medium tracking-widest text-white overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-colors"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          GITHUB <GithubIcon width={12} height={12} />
                        </span>
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle State (when no project is hovered) */}
          <AnimatePresence>
            {activeProject === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-4 bg-white/[0.01]">
                    <div className="w-2 h-2 rounded-full bg-accent-500/50 animate-pulse" />
                  </div>
                  <p className="text-white/30 text-sm tracking-widest uppercase">
                    Hover a project to explore
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
