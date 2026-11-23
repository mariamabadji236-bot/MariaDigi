import React from 'react';
import { Download, Mail, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { PageId } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleSelect = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#34223F]/10 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-[#34223F]/75 max-w-sm">
              Portfolio professionnel de {PROFILE.fullName}. Conception d’expériences digitales
              centrées utilisateur et stratégies de marketing digital à {PROFILE.location}.
            </p>
            <div className="pt-2">
              <a
                href={PROFILE.cvPath}
                download="CV_Mariama_Badji_MariaDigi.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#70428C] hover:text-[#34223F] transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Télécharger mon CV (PDF)</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="font-sans text-xs font-semibold tracking-wider uppercase text-[#34223F]/55">
              Navigation
            </h2>
            <ul className="space-y-2 text-sm">
              {(
                [
                  ['accueil', 'Accueil'],
                  ['apropos', 'À propos'],
                  ['projets', 'Mes projets'],
                  ['competences', 'Mes compétences'],
                  ['certifications', 'Certifications'],
                  ['contact', 'Contact'],
                ] as [PageId, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(id)}
                    className="text-[#34223F]/80 hover:text-[#70428C] transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h2 className="font-sans text-xs font-semibold tracking-wider uppercase text-[#34223F]/55">
              Coordonnées directes
            </h2>
            <ul className="space-y-2.5 text-sm text-[#34223F]/80">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#70428C] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#70428C]" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#70428C] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#70428C]" aria-hidden="true" />
                  <span>WhatsApp · {PROFILE.phoneDisplay}</span>
                </a>
              </li>
              <li className="pt-1 flex items-center gap-4">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#70428C] underline underline-offset-4 hover:text-[#34223F] transition-colors"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-[#34223F]/30">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => handleSelect('contact')}
                  className="text-sm font-medium text-[#70428C] underline underline-offset-4 hover:text-[#34223F] transition-colors cursor-pointer"
                >
                  Formulaire de contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#34223F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#34223F]/60">
          <p>© {new Date().getFullYear()} MariaDigi — {PROFILE.fullName}. Tous droits réservés.</p>
          <p>UX/UI Design · Marketing Digital · {PROFILE.location}</p>
        </div>
      </div>
    </footer>
  );
};
