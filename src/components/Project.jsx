import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import projects from '../data/projects';

function Project() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <SectionTitle>Selected Projects</SectionTitle>
          <a
            href="https://github.com/duckling69"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition"
          >
            All repos on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Projects - 2 column rich cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional projects */}
        {others.length > 0 && (
          <>
            <div className="mt-8 mb-4 text-xs uppercase tracking-[1.5px] text-zinc-500">Other notable work</div>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, compact = false }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 hover:border-indigo-500/50 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-xl tracking-tight text-white group-hover:text-indigo-400 transition">
              {project.title}
            </h3>
            <span className="text-[10px] px-2 py-px rounded bg-zinc-900 border border-zinc-800 text-zinc-500">{project.category}</span>
          </div>
          <p className="text-indigo-400 text-sm mt-0.5">{project.tagline}</p>
        </div>
        <FaGithub className="w-5 h-5 mt-1 text-zinc-400 group-hover:text-white flex-shrink-0 transition" />
      </div>

      <p className={`mt-4 text-zinc-400 leading-relaxed ${compact ? 'text-sm line-clamp-3' : 'text-[15px]'}`}>
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && !compact && (
        <ul className="mt-4 space-y-1 text-sm text-zinc-300">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex gap-2">• {h}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, compact ? 5 : 8).map((tech, idx) => (
          <span
            key={idx}
            className="text-[11px] px-2.5 py-px rounded-md border border-zinc-800 bg-black/40 text-zinc-400 group-hover:border-zinc-700 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export default Project;
