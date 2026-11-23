import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectMockup } from '../components/ProjectMockup';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterOption = 'Tous' | ProjectCategory;

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<FilterOption>('Tous');

  const filtered =
    filter === 'Tous' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  const primaryProjects = filtered.filter((p) => p.featured);
  const additionalProjects = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-8 sm:pt-12 space-y-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#34223F]/10 pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs sm:text-sm font-medium text-[#70428C]">
            Portfolio · Études de cas &amp; Concepts
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#34223F]">Mes projets</h1>
          <p className="text-base leading-relaxed text-[#34223F]/80">
            Chaque projet distingue clairement son cadre de réalisation (projet pratique de
            formation, parcours marketing digital ou concept UX/UI), sans chiffres simulés.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div
          className="inline-flex items-center gap-1 p-1 bg-[#FFFFFF] rounded-xl border border-[#34223F]/10 self-start"
          role="group"
          aria-label="Filtrer les projets par discipline"
        >
          {(['Tous', 'UX/UI Design', 'Marketing Digital'] as FilterOption[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === option
                  ? 'bg-[#70428C] text-white'
                  : 'text-[#34223F]/75 hover:text-[#34223F] hover:bg-[#F6ECFA]/60'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Primary Highlighted Projects */}
      {primaryProjects.length > 0 && (
        <section className="space-y-8">
          <h2 className="font-serif text-2xl text-[#34223F]">Études de cas principales</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                data-cursor="project"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 flex flex-col justify-between gap-6 hover:border-[#B58ACB] transition-colors"
              >
                <div className="space-y-5">
                  <ProjectMockup theme={project.visualTheme} compact />
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#70428C]">
                      {project.nature} · {project.year}
                    </div>
                    <h3 className="font-serif text-2xl text-[#34223F]">{project.title}</h3>
                    <div className="text-sm font-medium text-[#34223F]/80">{project.subtitle}</div>
                    <p className="text-sm leading-relaxed text-[#34223F]/75 pt-1">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#34223F]/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#34223F]/60">
                    {project.tools.slice(0, 3).join(' · ')}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#70428C] hover:text-[#34223F] transition-colors cursor-pointer shrink-0"
                  >
                    <span>Voir l’étude de cas</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Additional Practical CV Projects */}
      {additionalProjects.length > 0 && (
        <section className="space-y-8 pt-4">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-[#34223F]">
              Projets pratiques complémentaires
            </h2>
            <p className="text-sm text-[#34223F]/70">
              Travaux de recherche utilisateur et conception réalisés dans le cadre des formations
              2025–2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProjects.map((project) => (
              <article
                key={project.id}
                data-cursor="project"
                className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 flex flex-col justify-between gap-5 hover:border-[#B58ACB] transition-colors"
              >
                <div className="space-y-4">
                  <ProjectMockup theme={project.visualTheme} compact />
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#70428C]">
                      {project.nature} · {project.year}
                    </div>
                    <h3 className="font-serif text-xl text-[#34223F]">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-[#34223F]/75">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#70428C] hover:text-[#34223F] transition-colors cursor-pointer self-start"
                >
                  <span>Consulter la démarche</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
