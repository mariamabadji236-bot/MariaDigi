import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileCode2,
  FileText,
  Film,
  Image as ImageIcon,
  Layout,
  X,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ScaledHtmlBoardProps {
  src: string;
  title: string;
  nativeWidth: number;
  nativeHeight: number;
}

const ScaledHtmlBoard: React.FC<ScaledHtmlBoardProps> = ({
  src,
  title,
  nativeWidth,
  nativeHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateScale = () => {
      if (el.clientWidth > 0) {
        setScale(el.clientWidth / nativeWidth);
      }
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [nativeWidth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-[#FFFFFF]"
    >
      <iframe
        key={src}
        src={src}
        title={title}
        scrolling="no"
        className="border-0 block origin-top-left"
        style={{
          width: `${nativeWidth}px`,
          height: `${nativeHeight}px`,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

type TabKey = 'overview' | 'prototype' | 'personas' | 'flow' | 'deliverables';

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    setActiveTab('overview');
    setScreenIndex(0);
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

  const screens = project.prototypeScreens ?? [];
  const hasPrototype = screens.length > 0;
  const activeScreen = screens[screenIndex] ?? screens[0];

  const tabs: [TabKey, string][] = hasPrototype
    ? [
        ['overview', 'Vue d’ensemble'],
        ['prototype', `Prototype & Écrans (${screens.length})`],
        ['personas', 'Recherche & Personas'],
        ['flow', 'User Flow & Parcours'],
        ['deliverables', 'Livrables & Outils'],
      ]
    : [
        ['overview', 'Vue d’ensemble'],
        ['personas', 'Recherche & Personas'],
        ['flow', 'User Flow & Parcours'],
        ['deliverables', 'Livrables & Outils'],
      ];

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
              {project.role && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </>
              )}
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
            {tabs.map(([key, label]) => (
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

          {activeTab === 'prototype' && hasPrototype && activeScreen && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl text-[#34223F]">
                    Parcours interactif du prototype
                  </h3>
                  <p className="text-sm text-[#34223F]/70 mt-1">
                    Sélectionnez une étape dans l’ordre du parcours pour consulter chaque écran ou
                    séquence animée.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setScreenIndex((prev) => Math.max(0, prev - 1))}
                    disabled={screenIndex === 0}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-[#34223F]/15 text-xs font-medium text-[#34223F] hover:bg-[#F6ECFA] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                    aria-label="Écran précédent"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Précédent</span>
                  </button>
                  <span className="text-xs font-medium text-[#70428C] tabular-nums px-1">
                    {screenIndex + 1} / {screens.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setScreenIndex((prev) => Math.min(screens.length - 1, prev + 1))
                    }
                    disabled={screenIndex === screens.length - 1}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-[#34223F]/15 text-xs font-medium text-[#34223F] hover:bg-[#F6ECFA] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                    aria-label="Écran suivant"
                  >
                    <span>Suivant</span>
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Ordered Chronological Playlist */}
                <div className="lg:col-span-5 max-h-[460px] overflow-y-auto pr-1 space-y-2">
                  {screens.map((item, idx) => {
                    const isSelected = idx === screenIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setScreenIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-colors cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#F6ECFA] border-[#70428C]/45 text-[#34223F]'
                            : 'bg-[#F8F6F9] border-[#34223F]/10 text-[#34223F]/80 hover:border-[#B58ACB]'
                        }`}
                      >
                        <span
                          className={`text-xs font-semibold tabular-nums mt-0.5 shrink-0 ${
                            isSelected ? 'text-[#70428C]' : 'text-[#34223F]/55'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <div className="min-w-0 flex-1 space-y-0.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-medium text-[#70428C]">
                              {item.step}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-[#34223F]/55 shrink-0">
                              {item.mediaType === 'video' ? (
                                <>
                                  <Film className="w-3 h-3" aria-hidden="true" />
                                  <span>Vidéo</span>
                                </>
                              ) : item.mediaType === 'html' ? (
                                <>
                                  <Layout className="w-3 h-3" aria-hidden="true" />
                                  <span>{item.boardFormat === 'landscape' ? 'Charte' : 'Maquette'}</span>
                                </>
                              ) : (
                                <>
                                  <ImageIcon className="w-3 h-3" aria-hidden="true" />
                                  <span>Écran</span>
                                </>
                              )}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-[#34223F] truncate">
                            {item.title}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Stage Preview (Mobile Frame or Landscape Board) */}
                <div className="lg:col-span-7 rounded-2xl bg-[#F8F6F9] border border-[#34223F]/10 p-5 sm:p-6 flex flex-col items-center gap-5">
                  {activeScreen.mediaType === 'html' &&
                  activeScreen.boardFormat === 'landscape' ? (
                    <div className="w-full rounded-xl overflow-hidden border border-[#34223F]/15 bg-[#FFFFFF] shadow-md aspect-[1440/520]">
                      <ScaledHtmlBoard
                        src={activeScreen.src}
                        title={`${activeScreen.step} — ${activeScreen.title}`}
                        nativeWidth={1440}
                        nativeHeight={520}
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[270px] rounded-[1.75rem] bg-[#34223F] p-2.5 shadow-xl">
                      <div className="rounded-[1.25rem] overflow-hidden bg-[#FFFFFF] aspect-[9/19] flex items-center justify-center">
                        {activeScreen.mediaType === 'video' ? (
                          <video
                            key={activeScreen.src}
                            src={activeScreen.src}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain bg-[#FAF8F5]"
                          />
                        ) : activeScreen.mediaType === 'html' ? (
                          <ScaledHtmlBoard
                            src={activeScreen.src}
                            title={`${activeScreen.step} — ${activeScreen.title}`}
                            nativeWidth={390}
                            nativeHeight={844}
                          />
                        ) : (
                          <img
                            key={activeScreen.src}
                            src={activeScreen.src}
                            alt={`${activeScreen.step} — ${activeScreen.title}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain bg-[#FAF8F5]"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  <div className="w-full text-center space-y-1.5 border-t border-[#34223F]/10 pt-4">
                    <div className="text-xs font-semibold text-[#70428C]">
                      {activeScreen.step} ·{' '}
                      {activeScreen.mediaType === 'video'
                        ? 'Prototype animé'
                        : activeScreen.mediaType === 'html'
                          ? activeScreen.boardFormat === 'landscape'
                            ? 'Direction artistique'
                            : 'Maquette haute fidélité'
                          : 'Écran UI'}
                    </div>
                    <h4 className="font-serif text-lg text-[#34223F]">{activeScreen.title}</h4>
                    <p className="text-sm text-[#34223F]/75 max-w-md mx-auto leading-relaxed">
                      {activeScreen.description}
                    </p>
                  </div>
                </div>
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

                {project.presentationPdfUrl && (
                  <div className="pt-3">
                    <a
                      href={project.presentationPdfUrl}
                      download="Presentation_Karaange_Kids_Mariama_Badji.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F6ECFA] border border-[#B58ACB]/40 text-sm font-medium text-[#70428C] hover:bg-[#70428C] hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4" aria-hidden="true" />
                      <span>Télécharger la présentation PDF (18 pages)</span>
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                {project.prototypeHtmlBundleUrl && (
                  <div className="pt-3">
                    <a
                      href={project.prototypeHtmlBundleUrl}
                      download="Sangal_Go_Maquettes_haute_fidelite.html"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F6ECFA] border border-[#B58ACB]/40 text-sm font-medium text-[#70428C] hover:bg-[#70428C] hover:text-white transition-colors"
                    >
                      <FileCode2 className="w-4 h-4" aria-hidden="true" />
                      <span>Télécharger la planche complète (HTML)</span>
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
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
