import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { getToolLogo, ToolsMarquee } from '../components/ToolsMarquee';
import { PageId } from '../types';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-8 sm:pt-12 space-y-16">
      <div className="space-y-3 max-w-2xl border-b border-[#34223F]/10 pb-8">
        <div className="text-xs sm:text-sm font-medium text-[#70428C]">
          Savoir-faire &amp; Environnement technique
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#34223F]">Mes compétences</h1>
        <p className="text-base leading-relaxed text-[#34223F]/80">
          Une double expertise en conception d’interfaces centrées utilisateur et en stratégie de
          marketing digital, appuyée par des outils de design et d’intégration web.
        </p>
      </div>

      {/* Three Skill Pillars (No fabricated percentage bars) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <div className="text-xs font-semibold text-[#70428C] tabular-nums">
                0{idx + 1}.
              </div>
              <h2 className="font-serif text-2xl text-[#34223F]">{category.title}</h2>
              <p className="text-sm leading-relaxed text-[#34223F]/75">
                {category.description}
              </p>

              <ul className="pt-4 border-t border-[#34223F]/10 space-y-3">
                {category.items.map((skill) => {
                  const toolLogo = category.id === 'outils' ? getToolLogo(skill) : null;
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm sm:text-base text-[#34223F]"
                    >
                      {toolLogo ? (
                        <span className="w-7 h-7 rounded-md bg-[#F8F6F9] border border-[#34223F]/10 flex items-center justify-center shrink-0">
                          {toolLogo}
                        </span>
                      ) : (
                        <Check
                          className="w-4 h-4 text-[#70428C] shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Scrolling Tools Ribbon */}
      <ToolsMarquee title="Outils que j’utilise au quotidien" />

      {/* Methodology Strip */}
      <section className="bg-[#FFFFFF] rounded-2xl border border-[#34223F]/10 p-6 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-medium text-[#70428C]">Méthode de travail</div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#34223F]">
              Du besoin utilisateur au déploiement digital
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projets')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#70428C] hover:text-[#34223F] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Voir l’application dans mes projets</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 'Étape 01',
              title: 'Comprendre',
              detail: 'UX Research, observation terrain, étude de marché et définition des personas.',
            },
            {
              step: 'Étape 02',
              title: 'Structurer',
              detail: 'User Journey, User Flow, architecture de l’information et ligne éditoriale.',
            },
            {
              step: 'Étape 03',
              title: 'Concevoir',
              detail: 'Wireframing, prototypage interactif, UI Design et création de contenus visuels.',
            },
            {
              step: 'Étape 04',
              title: 'Diffuser & Tester',
              detail: 'Tests utilisateurs, SEO, email marketing, WordPress et suivi des indicateurs.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 p-5 space-y-2"
            >
              <div className="text-xs font-semibold text-[#70428C]">{item.step}</div>
              <h3 className="font-serif text-xl text-[#34223F]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#34223F]/75">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
