import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Github, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

function ProjectThumbnail({ project }: { project: ProjectItem }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0E1310] to-[#151C18] p-6 text-center">
        <Code2 className="h-8 w-8 text-[#00E676]" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-white">{project.title}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0A0D0B]">
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D100E] via-transparent to-transparent opacity-60"
      />
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-[#00E676]">04 · Projects</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Selected Systems &amp; Platforms
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#A1A8A4]">
              Backend services, rate-limiting engines, mobile booking architectures, and curated
              data pipelines.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D100E] transition-colors duration-200 hover:border-white/25"
            >
              <ProjectThumbnail project={project} />

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Unboxed 1-line kicker metadata */}
                  <div className="flex items-center gap-2 font-mono text-xs text-[#88918C] tabular-nums">
                    <span className="text-[#00E676]">{project.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#B4BBB7]">
                    {project.summary}
                  </p>

                  {/* Zero-pill tech tags as clean unboxed monospace metadata */}
                  <p className="mt-4 font-mono text-xs text-[#88918C]">
                    {project.techStack.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#00E676] px-4 py-2 text-xs font-semibold text-[#050706] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#22F28A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-xs font-medium text-[#D4D8D6] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#00E676]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
                  >
                    Architecture Notes
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* High-contrast Project Detail Lightbox Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0D100E] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#060807]/85 text-white transition-colors hover:border-[#00E676] hover:text-[#00E676] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full overflow-hidden bg-[#060807]">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.imageAlt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[#88918C]">
                <span className="text-[#00E676]">{activeProject.index}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.category}</span>
              </div>

              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-bold text-white"
              >
                {activeProject.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#D4D8D6]">
                {activeProject.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9CA39F]">
                {activeProject.architectureDetails}
              </p>

              <p className="mt-5 font-mono text-xs text-[#00E676]">
                {activeProject.techStack.join(' · ')}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#00E676] px-5 py-2.5 text-xs font-semibold text-[#050706] transition-colors hover:bg-[#22F28A]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View on GitHub ({activeProject.githubHandle})
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-4 py-2 text-xs font-medium text-[#D4D8D6] transition-colors hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
