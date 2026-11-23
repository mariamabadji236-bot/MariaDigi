import React from 'react';
import { ProjectItem } from '../types';

interface ProjectMockupProps {
  theme: ProjectItem['visualTheme'];
  compact?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ theme, compact = false }) => {
  const heightClass = compact ? 'h-56 sm:h-64' : 'h-64 sm:h-80';

  if (theme === 'galsenfrika') {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#EDE1F5] border border-[#34223F]/10 p-5 flex flex-col justify-between select-none`}
        aria-label="Aperçu maquette e-commerce Galsenfrika"
      >
        <div className="flex items-center justify-between text-[11px] text-[#34223F]/65">
          <span className="font-serif font-semibold tracking-wide text-[#34223F]">GALSENFRIKA</span>
          <span>Collection Textile · E-commerce</span>
        </div>

        <div className="grid grid-cols-12 gap-3 my-auto items-center">
          <div className="col-span-7 bg-[#FFFFFF] rounded-lg border border-[#34223F]/10 p-3.5 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider text-[#70428C] font-semibold">
              Tissu artisanal local
            </div>
            <div className="font-serif text-base text-[#34223F] mt-1 leading-snug">
              Savoir-faire textile &amp; coupe contemporaine
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-block px-2.5 py-1 rounded bg-[#70428C] text-white text-[10px] font-medium">
                Découvrir la pièce
              </span>
              <span className="text-[10px] text-[#34223F]/60">Guide des tailles</span>
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#70428C] to-[#B58ACB] p-2.5 flex flex-col justify-end text-white">
              <span className="text-[10px] font-medium opacity-90">Social &amp; Contenu</span>
              <span className="text-xs font-serif">Storytelling matière</span>
            </div>
            <div className="h-14 rounded-lg bg-[#F6ECFA] border border-[#B58ACB]/40 p-2.5 flex flex-col justify-center">
              <span className="text-[10px] text-[#70428C] font-semibold">Tunnel Email</span>
              <span className="text-[11px] text-[#34223F]/80">Acquisition &amp; Fidélisation</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#34223F]/55 border-t border-[#34223F]/10 pt-2">
          <span>Étude de marché</span>
          <span>Social Media</span>
          <span>Expérience Boutique</span>
        </div>
      </div>
    );
  }

  if (theme === 'kerfacile') {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#34223F] via-[#4A2E5C] to-[#70428C] p-5 flex items-center justify-center gap-4 select-none`}
        aria-label="Aperçu maquette mobile Kër Facile"
      >
        {/* Mobile Frame 1: Réservation */}
        <div className="w-36 sm:w-40 bg-[#FFFFFF] rounded-2xl p-3 shadow-lg text-[#34223F] flex flex-col gap-2">
          <div className="flex items-center justify-between text-[10px] font-semibold text-[#70428C]">
            <span>Kër Facile</span>
            <span>Étape 1/3</span>
          </div>
          <div className="text-xs font-serif font-semibold leading-tight">
            Nettoyage à domicile
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="rounded-md bg-[#F6ECFA] px-2 py-1.5 text-[10px] font-medium text-[#34223F]">
              Appartement · Standard
            </div>
            <div className="rounded-md border border-[#34223F]/15 px-2 py-1.5 text-[10px] text-[#34223F]/75">
              Grand ménage
            </div>
          </div>
          <div className="mt-1 rounded-md bg-[#70428C] text-white text-center py-1.5 text-[10px] font-medium">
            Choisir un créneau
          </div>
        </div>

        {/* Mobile Frame 2: Prestataire */}
        <div className="hidden sm:flex w-40 bg-[#F8F6F9] rounded-2xl p-3 shadow-lg text-[#34223F] flex-col gap-2 translate-y-2">
          <div className="text-[10px] text-[#34223F]/60 font-medium">Espace Prestataire</div>
          <div className="rounded-lg bg-[#FFFFFF] border border-[#34223F]/10 p-2 space-y-1">
            <div className="text-[11px] font-semibold text-[#34223F]">Mission confirmée</div>
            <div className="text-[10px] text-[#34223F]/70">Quartier · Créneau horaire</div>
          </div>
          <div className="flex items-center justify-between text-[10px] pt-1 text-[#70428C] font-medium">
            <span>User Flow</span>
            <span>Wireframe UI</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === 'ideaflow') {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#FFFFFF] via-[#F8F6F9] to-[#F6ECFA] border border-[#34223F]/10 p-5 flex flex-col justify-between select-none`}
        aria-label="Aperçu interface IdeaFlow"
      >
        <div className="flex items-center justify-between text-[11px] text-[#34223F]/65">
          <span className="font-serif font-semibold text-[#34223F]">IdeaFlow</span>
          <span>Workspace · Capture &amp; Tri</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 my-auto">
          <div className="rounded-lg bg-[#FFFFFF] border border-[#34223F]/10 p-3 space-y-2">
            <div className="text-[10px] font-semibold text-[#70428C]">01. Capture</div>
            <div className="h-2 w-4/5 rounded bg-[#F6ECFA]" />
            <div className="h-2 w-3/5 rounded bg-[#34223F]/10" />
            <div className="text-[10px] text-[#34223F]/70 pt-1">Note brute rapide</div>
          </div>
          <div className="rounded-lg bg-[#F6ECFA] border border-[#B58ACB]/40 p-3 space-y-2">
            <div className="text-[10px] font-semibold text-[#34223F]">02. Tri</div>
            <div className="h-2 w-full rounded bg-[#B58ACB]/50" />
            <div className="h-2 w-2/3 rounded bg-[#70428C]/35" />
            <div className="text-[10px] text-[#34223F]/80 pt-1">Par thématique</div>
          </div>
          <div className="rounded-lg bg-[#34223F] p-3 space-y-2 text-white">
            <div className="text-[10px] font-semibold text-[#F6ECFA]">03. Plan</div>
            <div className="h-2 w-4/5 rounded bg-white/30" />
            <div className="h-2 w-1/2 rounded bg-[#B58ACB]" />
            <div className="text-[10px] text-white/80 pt-1">Actions claires</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#34223F]/55 border-t border-[#34223F]/10 pt-2">
          <span>Concept UX/UI</span>
          <span>Architecture d’information</span>
        </div>
      </div>
    );
  }

  const labelMap: Record<'mairie' | 'karaange' | 'sangalkam', { tag: string; title: string; detail: string }> = {
    mairie: {
      tag: 'Administration locale · UX/UI',
      title: 'Suivi d’autorisation de construire',
      detail: 'Parcours citoyen & tableau agent · Diamaguène / Sicap Mbao',
    },
    karaange: {
      tag: 'Application mobile · Sensibilisation',
      title: 'Karaange Kids — Sécurité en ligne',
      detail: 'Parcours ludique enfant & alerte adulte de confiance',
    },
    sangalkam: {
      tag: 'Mobilité de proximité · Sangalkam',
      title: 'Mon quartier : transport local',
      detail: 'Recherche terrain, repérage trajets & expérience usager',
    },
  };

  const info = labelMap[theme];

  return (
    <div
      className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#F6ECFA] to-[#FFFFFF] border border-[#34223F]/10 p-5 flex flex-col justify-between select-none`}
      aria-label={`Aperçu visuel ${info.title}`}
    >
      <div className="text-[11px] font-medium text-[#70428C]">{info.tag}</div>
      <div className="bg-[#FFFFFF] rounded-lg border border-[#34223F]/10 p-4 shadow-sm space-y-2">
        <div className="font-serif text-base text-[#34223F]">{info.title}</div>
        <div className="text-xs text-[#34223F]/70">{info.detail}</div>
        <div className="pt-2 flex gap-2">
          <span className="h-1.5 w-12 rounded-full bg-[#70428C]" />
          <span className="h-1.5 w-8 rounded-full bg-[#B58ACB]/60" />
          <span className="h-1.5 w-6 rounded-full bg-[#F6ECFA]" />
        </div>
      </div>
      <div className="text-[10px] text-[#34223F]/55">Recherche · Personas · Parcours utilisateur</div>
    </div>
  );
};
