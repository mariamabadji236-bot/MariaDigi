import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'certifications', label: 'Certifications' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F9]/92 backdrop-blur-md border-b border-[#34223F]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('accueil')}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70428C] rounded-sm cursor-pointer whitespace-nowrap shrink-0"
          aria-label="MariaDigi — Retour à l’accueil"
        >
          <Logo />
        </button>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#70428C] ${
                  isActive
                    ? 'text-[#70428C] font-semibold'
                    : 'text-[#34223F]/75 hover:text-[#34223F]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#70428C] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('contact')}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70428C] ${
              currentPage === 'contact'
                ? 'bg-[#34223F] text-white'
                : 'bg-[#70428C] text-white hover:bg-[#34223F]'
            }`}
          >
            Me contacter
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#34223F] hover:bg-[#F6ECFA] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#70428C]"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#34223F]/10 px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F6ECFA] text-[#70428C] font-semibold'
                      : 'text-[#34223F]/85 hover:bg-[#F8F6F9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleSelect('contact')}
              className="mt-2 w-full text-center px-5 py-3 rounded-lg text-base font-medium bg-[#70428C] text-white hover:bg-[#34223F] transition-colors cursor-pointer"
            >
              Me contacter
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
