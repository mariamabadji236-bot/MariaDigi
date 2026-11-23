import React from 'react';

export interface ToolItem {
  name: string;
  role: string;
  mark: React.ReactNode;
}

export const TOOLS_LIST: ToolItem[] = [
  {
    name: 'Figma',
    role: 'UX/UI & Prototypage',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path
          d="M8.5 3H12V8.5H8.5C6.84315 8.5 5.5 7.15685 5.5 5.5C5.5 3.84315 6.84315 3 8.5 3Z"
          fill="#F24E1E"
        />
        <path
          d="M12 3H15.5C17.1569 3 18.5 4.34315 18.5 6C18.5 7.65685 17.1569 8.5 15.5 8.5H12V3Z"
          fill="#FF7262"
        />
        <path
          d="M8.5 8.5H12V14H8.5C6.84315 14 5.5 12.6569 5.5 11C5.5 9.34315 6.84315 8.5 8.5 8.5Z"
          fill="#A259FF"
        />
        <circle cx="15.25" cy="11.25" r="2.75" fill="#1ABCFE" />
        <path
          d="M8.5 14H12V17.5C12 19.1569 10.6569 20.5 9 20.5C7.34315 20.5 6 19.1569 6 17.5C6 15.567 7.11929 14 8.5 14Z"
          fill="#0ACF83"
        />
      </svg>
    ),
  },
  {
    name: 'Google AI Studio',
    role: 'Prototypage & Création Web',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="md-aistudio-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="55%" stopColor="#6E56CF" />
            <stop offset="100%" stopColor="#1BA1E3" />
          </linearGradient>
        </defs>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="#EEF4FF" />
        <path
          d="M12 5C12.35 8.85 15.15 11.65 19 12C15.15 12.35 12.35 15.15 12 19C11.65 15.15 8.85 12.35 5 12C8.85 11.65 11.65 8.85 12 5Z"
          fill="url(#md-aistudio-grad)"
        />
        <circle cx="17.5" cy="6.5" r="1.3" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: 'Canva',
    role: 'Contenus & Social Media',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="md-canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="55%" stopColor="#3F6EE8" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="9.5" fill="url(#md-canva-grad)" />
        <path
          d="M15.4 9.5C14.65 8.45 13.5 7.9 12.1 7.9C9.65 7.9 7.8 9.75 7.8 12.15C7.8 14.55 9.6 16.3 12 16.3C13.5 16.3 14.7 15.65 15.5 14.5"
          stroke="#FFFFFF"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Adobe Illustrator',
    role: 'Identité & Vectoriel',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#330000" />
        <path
          d="M7.3 16.2L9.75 8.2H11.5L13.95 16.2H12.2L11.65 14.2H9.55L9 16.2H7.3ZM9.85 12.85H11.35L10.6 10.05L9.85 12.85Z"
          fill="#FF9A00"
        />
        <rect x="15.05" y="10.4" width="1.6" height="5.8" rx="0.3" fill="#FF9A00" />
        <circle cx="15.85" cy="8.55" r="0.95" fill="#FF9A00" />
      </svg>
    ),
  },
  {
    name: 'Adobe Photoshop',
    role: 'Retouche & Visuels',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#001E36" />
        <path
          d="M7.2 16.2V8.2H10.2C12 8.2 13.05 9.15 13.05 10.65C13.05 12.2 11.95 13.15 10.1 13.15H8.85V16.2H7.2ZM8.85 11.75H10.05C10.95 11.75 11.45 11.35 11.45 10.65C11.45 9.95 10.95 9.55 10.05 9.55H8.85V11.75Z"
          fill="#31A8FF"
        />
        <path
          d="M17.35 11.75C16.75 11.45 16.15 11.35 15.7 11.35C15.15 11.35 14.9 11.55 14.9 11.85C14.9 12.15 15.2 12.3 15.95 12.6C17.05 13 17.65 13.5 17.65 14.55C17.65 15.75 16.7 16.35 15.3 16.35C14.55 16.35 13.85 16.15 13.4 15.85V14.45C13.9 14.8 14.55 15.05 15.2 15.05C15.8 15.05 16.1 14.85 16.1 14.5C16.1 14.15 15.85 13.95 15.05 13.65C14 13.25 13.4 12.75 13.4 11.8C13.4 10.75 14.3 10.1 15.65 10.1C16.3 10.1 16.9 10.25 17.35 10.45V11.75Z"
          fill="#31A8FF"
        />
      </svg>
    ),
  },
  {
    name: 'CapCut',
    role: 'Montage Vidéo',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#111111" />
        <path
          d="M6.5 8.2L14.5 12L6.5 15.8V13.6L10.3 12L6.5 10.4V8.2Z"
          fill="#FFFFFF"
        />
        <path
          d="M17.5 8.2L12.7 10.8L14.3 12L12.7 13.2L17.5 15.8V13.8L14.8 12L17.5 10.2V8.2Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    role: 'Organisation & Analyse',
    mark: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#FFFFFF" stroke="#E2DCE8" />
        <path
          d="M18.2 12.15C18.2 11.68 18.16 11.23 18.08 10.8H12.15V13.36H15.54C15.39 14.17 14.93 14.86 14.24 15.32V16.97H16.34C17.57 15.84 18.2 14.16 18.2 12.15Z"
          fill="#4285F4"
        />
        <path
          d="M12.15 18.3C13.85 18.3 15.28 17.74 16.34 16.97L14.24 15.32C13.67 15.7 12.97 15.93 12.15 15.93C10.53 15.93 9.15 14.84 8.66 13.38H6.5V15.08C7.56 17.18 9.7 18.3 12.15 18.3Z"
          fill="#34A853"
        />
        <path
          d="M8.66 13.38C8.54 13 8.47 12.58 8.47 12.15C8.47 11.72 8.54 11.3 8.66 10.92V9.22H6.5C6.06 10.1 5.8 11.1 5.8 12.15C5.8 13.2 6.06 14.2 6.5 15.08L8.66 13.38Z"
          fill="#FBBC05"
        />
        <path
          d="M12.15 8.37C13.07 8.37 13.9 8.69 14.55 9.31L16.39 7.47C15.27 6.43 13.85 5.8 12.15 5.8C9.7 5.8 7.56 6.92 6.5 9.02L8.66 10.72C9.15 9.26 10.53 8.37 12.15 8.37Z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
];

export const getToolLogo = (name: string): React.ReactNode | null => {
  const found = TOOLS_LIST.find((tool) => tool.name.toLowerCase() === name.toLowerCase());
  return found ? found.mark : null;
};

interface ToolsMarqueeProps {
  title?: string;
}

export const ToolsMarquee: React.FC<ToolsMarqueeProps> = ({
  title = 'Outils & Environnement de création',
}) => {
  return (
    <section aria-label={title} className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-medium text-[#70428C]">{title}</div>
        <div className="text-xs text-[#34223F]/55 hidden sm:block">
          Survolez pour mettre en pause
        </div>
      </div>

      <div className="md-marquee-wrapper relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-[#34223F]/10 py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-[#FFFFFF] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-[#FFFFFF] to-transparent"
        />

        <div className="md-marquee-track flex w-max items-center">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className="flex items-center gap-4 pr-4 shrink-0"
            >
              {TOOLS_LIST.map((tool) => (
                <div
                  key={`${copyIndex}-${tool.name}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#F8F6F9] border border-[#34223F]/10 hover:border-[#B58ACB] hover:bg-[#F6ECFA]/55 transition-colors shrink-0"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#34223F]/10 flex items-center justify-center shrink-0 shadow-xs">
                    {tool.mark}
                  </span>
                  <div className="whitespace-nowrap">
                    <div className="text-sm font-medium text-[#34223F]">{tool.name}</div>
                    <div className="text-xs text-[#34223F]/60">{tool.role}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
