import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-baseline font-serif text-xl sm:text-2xl tracking-tight text-[#34223F] whitespace-nowrap shrink-0 select-none ${className}`}
    >
      <span className="font-semibold">Maria</span>
      <span className="font-medium italic text-[#70428C]">Digi</span>
      <span className="ml-0.5 text-[#B58ACB]" aria-hidden="true">
        .
      </span>
    </span>
  );
};
