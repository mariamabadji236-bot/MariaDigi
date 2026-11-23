import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { RabbitCursor } from './components/RabbitCursor';
import { AboutPage } from './pages/AboutPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { PageId, ProjectItem } from './types';

const VALID_PAGES: PageId[] = [
  'accueil',
  'apropos',
  'projets',
  'competences',
  'certifications',
  'contact',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'accueil';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F9] text-[#34223F]">
      <RabbitCursor />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'accueil' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}
            {currentPage === 'apropos' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'projets' && (
              <ProjectsPage onSelectProject={(project) => setSelectedProject(project)} />
            )}
            {currentPage === 'competences' && <SkillsPage onNavigate={handleNavigate} />}
            {currentPage === 'certifications' && <CertificationsPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => handleNavigate('contact')}
      />
    </div>
  );
}
