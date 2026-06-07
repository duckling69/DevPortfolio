import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import experience from '../data/experience';
import SectionTitle from './SectionTitle';

function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Experience</SectionTitle>

        <div className="space-y-8 mt-8">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-indigo-400 inline-flex items-center gap-1.5 group-hover:underline"
                        >
                          {job.company}
                          <ExternalLink className="w-4 h-4 opacity-60" />
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="inline-block px-3 py-0.5 text-xs font-medium tracking-wider rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {job.role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-sm text-zinc-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 text-zinc-300 mb-5 pl-1">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed text-[15px]">
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                {job.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8 tracking-wide">
          Full professional history and references available upon request.
        </p>
      </div>
    </section>
  );
}

export default Experience;
