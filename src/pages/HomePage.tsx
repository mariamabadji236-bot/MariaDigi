import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/portfolioData';
import { PageId, ProjectItem } from '../types';
import { ProjectMockup } from '../components/ProjectMockup';
import { ToolsMarquee } from '../components/ToolsMarquee';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const [portraitError, setPortraitError] = useState(false);
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* HERO SPLIT SECTION */}
      <section className="pt-8 sm:pt-14 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="text-xs sm:text-sm font-medium text-[#70428C]">
              {PROFILE.fullName} · {PROFILE.location}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-[#34223F] text-balance">
              {PROFILE.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#70428C]">
              {PROFILE.heroSubtitle}
            </p>

            <p className="text-base leading-relaxed text-[#34223F]/80 max-w-xl">
              {PROFILE.heroIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('projets')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70428C]"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={PROFILE.cvPath}
                download="CV_Mariama_Badji_MariaDigi.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FFFFFF] border border-[#34223F]/20 text-[#34223F] text-sm font-medium hover:bg-[#F6ECFA] hover:border-[#70428C]/40 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70428C]"
              >
                <Download className="w-4 h-4 text-[#70428C]" aria-hidden="true" />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden bg-[#B58ACB]/25 border border-[#34223F]/10 flex flex-col justify-between">
              {!portraitError ? (
                <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] overflow-hidden">
                  <img
                    src={PROFILE.heroPortraitPath}
                    alt={`Portrait professionnel de ${PROFILE.fullName}`}
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-serif text-3xl text-[#34223F]">MB</span>
                  <span className="text-sm text-[#70428C] mt-2">{PROFILE.fullName}</span>
                </div>
              )}

              <div className="bg-[#FFFFFF]/95 backdrop-blur-sm border-t border-[#34223F]/10 px-5 py-3.5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-base text-[#34223F]">{PROFILE.fullName}</div>
                  <div className="text-xs text-[#34223F]/65">
                    Certifiée Google UX Design &amp; Marketing Digital
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('apropos')}
                  className="text-xs font-medium text-[#70428C] hover:text-[#34223F] whitespace-nowrap cursor-pointer"
                >
                  Mon parcours →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Value Pillars Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-[#34223F]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              index: '01.',
              title: 'UX Research & Empathie',
              text: 'Compréhension des besoins réels, personas et cartographie des parcours.',
            },
            {
              index: '02.',
              title: 'UI Design & Prototypage',
              text: 'Wireframes clairs, interfaces soignées et systèmes visuels cohérents sur Figma.',
            },
            {
              index: '03.',
              title: 'Stratégie & Contenu',
              text: 'Positionnement digital, réseaux sociaux, inbound et email marketing.',
            },
            {
              index: '04.',
              title: 'Intégration WordPress',
              text: 'Mise en ligne accessible, SEO structuré et maintenance durable.',
            },
          ].map((pillar) => (
            <div key={pillar.index} className="space-y-1.5">
              <div className="text-xs font-semibold text-[#70428C] tabular-nums">
                {pillar.index}
              </div>
              <h2 className="font-serif text-lg text-[#34223F]">{pillar.title}</h2>
              <p className="text-sm leading-relaxed text-[#34223F]/75">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS MARQUEE */}
      <ToolsMarquee />

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#34223F]/10 pb-6">
          <div className="space-y-2">
            <div className="text-xs font-medium text-[#70428C]">Sélection d’études de cas</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#34223F]">
              Projets sélectionnés
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projets')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#70428C] hover:text-[#34223F] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Voir tous les projets</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              data-cursor="project"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-5 flex flex-col justify-between gap-5 hover:border-[#B58ACB] transition-colors duration-200"
            >
              <div className="space-y-4">
                <ProjectMockup theme={project.visualTheme} compact />
                <div className="space-y-2">
                  <div className="text-xs text-[#70428C] font-medium">
                    {project.nature} · {project.year}
                  </div>
                  <h3 className="font-serif text-2xl text-[#34223F]">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-[#34223F]/75">
                    {project.summary}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#70428C] group-hover:text-[#34223F] transition-colors cursor-pointer self-start"
              >
                <span>Lire l’étude de cas</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* QUIET EDITORIAL CTA BAND */}
      <section className="rounded-2xl bg-[#34223F] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-medium text-[#F6ECFA]/80">
            Opportunités · Recrutement · Collaborations
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-balance">
            Construisons des expériences digitales utiles et mémorables.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Disponible pour échanger avec des recruteurs, agences, entreprises et porteurs de
            projets autour de vos enjeux UX/UI et marketing digital.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-lg bg-[#FFFFFF] text-[#34223F] text-sm font-medium hover:bg-[#F6ECFA] transition-colors cursor-pointer"
          >
            Prendre contact
          </button>
          <button
            type="button"
            onClick={() => onNavigate('certifications')}
            className="px-6 py-3.5 rounded-lg border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            Voir mes certifications
          </button>
        </div>
      </section>
    </div>
  );
};
