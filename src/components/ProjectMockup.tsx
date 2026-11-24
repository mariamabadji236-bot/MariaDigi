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
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#EDE0F4] border border-[#34223F]/10 px-4 pt-4 pb-3 flex flex-col justify-between select-none`}
        aria-label="Aperçu des maquettes mobiles IdeaFlow"
      >
        <div className="flex items-center justify-between text-[11px] text-[#70428C] font-medium">
          <span>IdéaFlow · Application mobile</span>
          <span className="text-[#34223F]/60">Maquettes Figma</span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-3 sm:gap-5 py-2 overflow-hidden">
          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0">
            <img
              src="/assets/aistudio/Tableau_de_bord_f00a8583.png"
              alt="IdéaFlow — Tableau de bord"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0 translate-y-1.5">
            <img
              src="/assets/aistudio/Evaluation_0c744c7f.png"
              alt="IdéaFlow — Évaluer mon idée"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {!compact && (
            <div className="hidden sm:block h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0">
              <img
                src="/assets/aistudio/Comparer_603ab043.png"
                alt="IdéaFlow — Comparer mes idées"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#34223F]/60 border-t border-[#34223F]/10 pt-2">
          <span>11 écrans UI complets</span>
          <span>Capture · Évaluation · Priorisation</span>
        </div>
      </div>
    );
  }

  if (theme === 'karaange') {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#F8F6F9] to-[#EDE0F4] border border-[#34223F]/10 px-4 pt-4 pb-3 flex flex-col justify-between select-none`}
        aria-label="Aperçu des maquettes mobiles Karaange Kids"
      >
        <div className="flex items-center justify-between text-[11px] text-[#70428C] font-medium">
          <span>Karaange Kids · PEL Challenge</span>
          <span className="text-[#34223F]/60">Prototype mobile Figma</span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-3 sm:gap-5 py-2 overflow-hidden">
          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0">
            <img
              src="/assets/aistudio/Page_d_accueil_P2_85865425.png"
              alt="Karaange Kids — Sélection du profil (P2)"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0 translate-y-1.5">
            <img
              src="/assets/aistudio/07___Accueil_enfant_P6_5b376b53.png"
              alt="Karaange Kids — Accueil enfant (P6)"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {!compact && (
            <div className="hidden sm:block h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#34223F]/15 shadow-md shrink-0">
              <img
                src="/assets/aistudio/08___Les_7_aventures_P7_ee841d08.png"
                alt="Karaange Kids — Les 7 aventures (P7)"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#34223F]/60 border-t border-[#34223F]/10 pt-2">
          <span>19 écrans &amp; vidéos interactives</span>
          <span>UX Research · UI Mobile</span>
        </div>
      </div>
    );
  }

  if (theme === 'sangalkam') {
    return (
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#F6ECFA] via-[#FFFFFF] to-[#EDE0F4] border border-[#34223F]/10 px-4 pt-4 pb-3 flex flex-col justify-between select-none`}
        aria-label="Aperçu des maquettes mobiles Sangal Go"
      >
        <div className="flex items-center justify-between text-[11px] text-[#70428C] font-medium">
          <span>Sangal Go · Sangalkam</span>
          <span className="text-[#34223F]/60">Maquettes haute fidélité</span>
        </div>

        <div className="flex-1 flex items-center justify-center gap-3 sm:gap-5 py-2 overflow-hidden">
          {/* Screen 04: Accueil usager */}
          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#D9E0DC] shadow-md shrink-0 p-2 flex flex-col gap-1.5 text-[#17211C]">
            <div className="text-[7px] text-[#5C6862] leading-none">Bonjour,</div>
            <div className="text-[11px] font-extrabold leading-none">Awa</div>
            <div className="rounded-md border border-[#0F7B4F] px-1.5 py-1 text-[7px] text-[#5C6862] truncate">
              Où allez-vous ?
            </div>
            <div className="rounded-lg bg-[#0F7B4F] text-white p-1.5 space-y-1">
              <div className="text-[6px] text-[#CDEBDB]">Sangalkam → Dakar</div>
              <div className="text-[12px] font-extrabold leading-none">06:15</div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="rounded-full bg-[#E6F4EC] text-[#0A5C3B] px-1.5 py-0.5 text-[6px] font-bold">
                  Carrefour Mosquée
                </span>
                <span className="rounded-full bg-[#FFF1D0] text-[#6B4700] px-1.5 py-0.5 text-[6px] font-bold">
                  4 places
                </span>
              </div>
            </div>
            <div className="rounded-md border border-[#E1E7E3] px-1.5 py-1 text-[6.5px] font-semibold truncate">
              Sangalkam → Rufisque
            </div>
          </div>

          {/* Screen 10: Place réservée SG-4821 */}
          <div className="h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#D9E0DC] shadow-md shrink-0 translate-y-1.5 p-2 flex flex-col items-center justify-between text-center text-[#17211C]">
            <div className="w-6 h-6 rounded-full bg-[#0F7B4F] text-white flex items-center justify-center text-[10px] font-bold mt-1">
              ✓
            </div>
            <div className="space-y-0.5">
              <div className="text-[9.5px] font-extrabold leading-tight">Place réservée !</div>
              <div className="text-[6.5px] text-[#5C6862]">SMS envoyé</div>
            </div>
            <div className="w-full rounded-lg border border-[#E1E7E3] p-1.5 text-left space-y-0.5">
              <div className="text-[6px] text-[#5C6862]">Code</div>
              <div className="text-[10px] font-extrabold tracking-wider text-[#0F7B4F]">
                SG-4821
              </div>
              <div className="text-[6px] text-[#5C6862] truncate">06:15 · 500 F à bord</div>
            </div>
            <div className="w-full rounded-md bg-[#0F7B4F] text-white py-1 text-[7px] font-bold">
              Voir point de départ
            </div>
          </div>

          {/* Screen 12: Suivi du trajet (hidden in compact) */}
          {!compact && (
            <div className="hidden sm:flex h-full max-h-[210px] aspect-[9/19] rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#D9E0DC] shadow-md shrink-0 p-2 flex-col justify-between text-[#17211C]">
              <div>
                <div className="text-[8.5px] font-bold leading-tight">Suivi du trajet</div>
                <div className="text-[6.5px] text-[#5C6862]">Vers Dakar Plateau</div>
              </div>
              <div className="h-14 rounded-lg bg-[#E6F4EC] relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 100 56" className="w-full h-full" aria-hidden="true">
                  <path
                    d="M15 44 Q45 30 58 24 T85 12"
                    stroke="#0F7B4F"
                    strokeWidth="2.5"
                    strokeDasharray="2 3"
                    fill="none"
                  />
                  <circle cx="15" cy="44" r="4" fill="#0F7B4F" />
                  <circle cx="85" cy="12" r="4" fill="#F2B134" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#E6F4EC] text-[#0A5C3B] px-1.5 py-0.5 text-[6px] font-bold">
                  Arrivée
                </span>
                <span className="text-[10px] font-extrabold">32 min</span>
              </div>
              <div className="rounded-md bg-[#FFF1D0] text-[#6B4700] px-1.5 py-1 text-[6px] font-medium leading-tight">
                Réseau faible : infos enregistrées.
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#34223F]/60 border-t border-[#34223F]/10 pt-2">
          <span>15 écrans &amp; charte graphique</span>
          <span>3 parcours · Mobilité locale</span>
        </div>
      </div>
    );
  }

  const labelMap: Record<'mairie', { tag: string; title: string; detail: string }> = {
    mairie: {
      tag: 'Administration locale · UX/UI',
      title: 'Suivi d’autorisation de construire',
      detail: 'Parcours citoyen & tableau agent · Diamaguène / Sicap Mbao',
    },
  };

  const info = labelMap[theme === 'mairie' ? 'mairie' : 'mairie'];

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
