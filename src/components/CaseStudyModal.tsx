import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

type TabKey = 'overview' | 'personas' | 'flow' | 'deliverables';

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#34223F]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#34223F]/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky modal header */}
        <div className="sticky top-0 z-10 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#34223F]/10 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#70428C] font-medium">
              <span>{project.nature}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2
              id="case-study-title"
              className="font-serif text-2xl sm:text-3xl text-[#34223F] mt-1"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-[#34223F]/70 hover:text-[#34223F] hover:bg-[#F6ECFA] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[#70428C]"
            aria-label="Fermer l’étude de cas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <ProjectMockup theme={project.visualTheme} />

          {/* Interactive Case Study Tabs */}
          <div
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F8F6F9] rounded-xl border border-[#34223F]/10"
            role="tablist"
            aria-label="Sections de l’étude de cas"
          >
            {(
              [
                ['overview', 'Vue d’ensemble'],
                ['personas', 'Recherche & Personas'],
                ['flow', 'User Flow & Parcours'],
                ['deliverables', 'Livrables & Outils'],
              ] as [TabKey, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === key
                    ? 'bg-[#FFFFFF] text-[#70428C] shadow-sm'
                    : 'text-[#34223F]/70 hover:text-[#34223F]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#34223F]">Contexte du projet</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#34223F]/80">
                  {project.context}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#34223F]">Besoin utilisateur identifié</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#34223F]/80">
                  {project.userNeed}
                </p>
              </div>
              <div className="md:col-span-2 pt-2 border-t border-[#34223F]/10 space-y-3">
                <h3 className="font-serif text-xl text-[#34223F]">Démarche appliquée</h3>
                <ul className="space-y-2.5">
                  {project.approach.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#34223F]/85"
                    >
                      <span className="font-serif text-[#70428C] font-semibold tabular-nums shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'personas' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-[#34223F]">Personas clés</h3>
                <p className="text-sm text-[#34223F]/70 mt-1">
                  Profils types modélisés à partir de l’analyse des besoins et points de friction.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.personas.map((persona) => (
                  <div
                    key={persona.name}
                    className="rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 p-5 space-y-3"
                  >
                    <div>
                      <div className="font-serif text-lg text-[#34223F]">{persona.name}</div>
                      <div className="text-xs font-medium text-[#70428C]">{persona.role}</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-[#34223F]/85">
                        <strong className="font-semibold text-[#34223F]">Objectif :</strong>{' '}
                        {persona.need}
                      </p>
                      <p className="text-[#34223F]/75">
                        <strong className="font-semibold text-[#34223F]">Point de friction :</strong>{' '}
                        {persona.frustration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-[#34223F]">User Flow principal</h3>
                <p className="text-sm text-[#34223F]/70 mt-1">
                  Enchaînement des étapes clés conçu pour limiter la charge cognitive.
                </p>
              </div>
              <ol className="space-y-3">
                {project.userFlow.map((node, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F6F9] border border-[#34223F]/10"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#F6ECFA] text-[#70428C] font-semibold text-sm flex items-center justify-center shrink-0 tabular-nums">
                      {i + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[#34223F]">{node}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-[#34223F]">Éléments réalisés</h3>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-[#34223F]/85"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#70428C] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-[#34223F]">Outils mobilisés</h3>
                <div className="text-sm sm:text-base text-[#34223F]/80 leading-relaxed">
                  {project.tools.join(' · ')}
                </div>
                <p className="text-xs text-[#34223F]/60 pt-2 border-t border-[#34223F]/10">
                  Note d’authenticité : ce projet est présenté dans le respect strict des travaux
                  réellement menés ({project.nature}), sans données chiffrées simulées.
                </p>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-[#34223F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#34223F]/75">
              Vous souhaitez échanger sur ma démarche pour ce projet ?
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors cursor-pointer"
            >
              <span>Discuter de ce projet</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
