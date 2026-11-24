import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { EDUCATION, PROFILE } from '../data/portfolioData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-8 sm:pt-12 space-y-16 sm:space-y-20">
      {/* Intro Header */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl space-y-5 border-b border-[#34223F]/10 pb-10"
      >
        <div className="text-xs sm:text-sm font-medium text-[#70428C]">
          À propos · {PROFILE.fullName}
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl leading-tight text-[#34223F] text-balance">
          Allier compréhension humaine et clarté stratégique dans chaque projet digital.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[#34223F]/80">
          Passionnée par le digital, je suis certifiée en UX Design par Google et en Marketing
          Digital. Basée à Dakar, je construis une pratique rigoureuse où la recherche utilisateur
          éclaire directement la conception d’interfaces et la stratégie de communication.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href={PROFILE.cvPngPath}
            download="CV_Mariama_Badji_MariaDigi.png"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Télécharger mon CV (PNG)</span>
          </a>
          <button
            type="button"
            onClick={() => onNavigate('projets')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FFFFFF] border border-[#34223F]/15 text-[#34223F] text-sm font-medium hover:bg-[#F6ECFA] transition-colors cursor-pointer"
          >
            <span>Explorer mes réalisations</span>
            <ArrowRight className="w-4 h-4 text-[#70428C]" aria-hidden="true" />
          </button>
        </div>
      </motion.section>

      {/* Parcours, Vision, Motivations & Approche */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            num: '01.',
            title: 'Mon parcours',
            body: 'Après un Baccalauréat série L2 et une première formation en Transport et Logistique qui m’a donné le sens de l’organisation et des flux, j’ai choisi d’orienter mon parcours vers les métiers du numérique. J’ai suivi un cursus en Marketing Digital à Xarala Academy puis une formation spécialisée en UI/UX Design à Simplon Sénégal, complétés par le certificat Google UX Design.',
          },
          {
            num: '02.',
            title: 'Ma vision du digital',
            body: 'Un bon produit digital ne cherche pas à impressionner par la complexité. Il résout un problème concret avec respect pour le temps et l’attention de ses utilisateurs, tout en servant des objectifs de communication lisibles pour l’organisation qui le porte.',
          },
          {
            num: '03.',
            title: 'Mes motivations',
            body: 'Ce qui m’anime au quotidien est de transformer des problématiques réelles — qu’il s’agisse de services de proximité, d’accès administratif, d’éducation ou de valorisation de produits locaux — en parcours numériques simples, rassurants et accessibles.',
          },
          {
            num: '04.',
            title: 'Mon approche du design',
            body: 'Je commence toujours par écouter et observer avant de dessiner : formulation de la problématique, recherche utilisateur, personas, user flows et wireframes. Chaque choix visuel — typographie, contraste, hiérarchie — doit faciliter la compréhension et la prise de décision.',
          },
        ].map((block) => (
          <div
            key={block.num}
            className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8 space-y-3"
          >
            <div className="text-xs font-semibold text-[#70428C] tabular-nums">{block.num}</div>
            <h2 className="font-serif text-2xl text-[#34223F]">{block.title}</h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#34223F]/80">{block.body}</p>
          </div>
        ))}
      </section>

      {/* Formations Timeline */}
      <section className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-10 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-medium text-[#70428C]">Parcours académique &amp; formations</div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#34223F]">Mes formations</h2>
        </div>

        <div className="divide-y divide-[#34223F]/10">
          {EDUCATION.map((item) => (
            <div
              key={`${item.institution}-${item.period}`}
              className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
            >
              <div className="md:col-span-3 text-sm font-medium text-[#70428C] tabular-nums">
                {item.period}
              </div>
              <div className="md:col-span-4">
                <div className="font-serif text-lg text-[#34223F]">{item.institution}</div>
                <div className="text-sm font-medium text-[#34223F]/75">{item.program}</div>
              </div>
              <div className="md:col-span-5 text-sm leading-relaxed text-[#34223F]/75">
                {item.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Objectifs professionnels */}
      <section className="rounded-2xl bg-[#F6ECFA] border border-[#B58ACB]/35 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-medium text-[#70428C]">Objectifs professionnels</div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#34223F]">
            Contribuer à des projets alliant expérience utilisateur et impact communicationnel.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#34223F]/80">
            Je souhaite intégrer une équipe produit, une agence digitale ou accompagner des
            entreprises et startups dans la recherche utilisateur, le design d’interfaces et le
            déploiement de stratégies digitales cohérentes.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-6 py-3.5 rounded-lg bg-[#70428C] text-white text-sm font-medium hover:bg-[#34223F] transition-colors cursor-pointer shrink-0"
        >
          Échanger avec moi
        </button>
      </section>
    </div>
  );
};
