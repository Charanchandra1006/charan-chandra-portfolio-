import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@shared/ui/icons";
import { projects } from "@entities/project";

export function ProjectsSection() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-12">
      <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-8">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col bg-[#09090b] border border-[#27272a] rounded-xl overflow-hidden group hover:border-[#3f3f46] transition-colors"
          >
            {/* Image */}
            <div className="aspect-video relative overflow-hidden bg-[#09090b] border-b border-[#27272a]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-text-muted">{project.category}</span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                      <GithubIcon width={14} height={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                      <ExternalLink width={14} height={14} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-sm font-semibold text-white mb-2">{project.title.split("–")[0].trim()}</h3>
              <p className="text-xs text-text-secondary line-clamp-3 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] text-text-muted bg-[#18181b] rounded border border-[#27272a]">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] text-text-muted bg-[#18181b] rounded border border-[#27272a]">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
