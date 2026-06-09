import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Folder } from "lucide-react";
import { GithubIcon } from "@shared/ui/icons";
import { projects } from "@entities/project";

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative flex ${
        featured ? "flex-col md:flex-row" : "flex-col"
      } bg-[#09090b] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#3f3f46] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]`}
    >
      {/* Gradient accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Image */}
      <div
        className={`relative overflow-hidden bg-[#09090b] ${
          featured
            ? "md:w-1/2 aspect-video md:aspect-auto md:min-h-[320px]"
            : "aspect-video"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />

        {/* Category badge on image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
            <Folder className="w-3 h-3" />
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 p-6 ${featured ? "md:p-8 justify-center" : ""}`}
      >
        {/* Title */}
        <h3
          className={`font-bold text-white mb-3 leading-tight ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {project.title.split("–")[0].trim()}
          {project.title.includes("–") && (
            <span className="text-text-muted font-normal">
              {" "}
              – {project.title.split("–")[1]?.trim()}
            </span>
          )}
        </h3>

        {/* Description */}
        <p
          className={`text-text-secondary leading-relaxed mb-5 ${
            featured ? "text-sm md:text-base" : "text-sm line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium text-text-muted bg-[#18181b] rounded-lg border border-[#27272a] group-hover:border-[#3f3f46] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-text-secondary bg-[#18181b] border border-[#27272a] rounded-lg hover:text-white hover:border-[#3f3f46] hover:bg-[#27272a] transition-all"
            >
              <GithubIcon width={14} height={14} />
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white rounded-lg hover:bg-gray-200 transition-all"
            >
              <ExternalLink width={14} height={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Corner arrow on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRight className="w-5 h-5 text-white/40" />
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-12">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-xs uppercase tracking-widest text-text-secondary font-semibold">
          Featured Projects
        </h2>
        <div className="flex-1 h-[1px] bg-[#27272a]" />
        <span className="text-xs text-text-muted font-mono">
          {projects.length} projects
        </span>
      </div>

      {/* Featured project - full width hero card */}
      <div className="mb-6">
        <ProjectCard project={featuredProject} index={0} featured />
      </div>

      {/* Other projects - 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
