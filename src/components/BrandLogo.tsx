import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asLink?: boolean;
}

export const MishnahMark: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="30 57 140 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Mishnah Online Mark"
  >
    <g
      stroke="currentColor"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(0 -3)"
    >
      <path d="M54 140 V68 L100 116 L146 68 V140" />
      <path d="M42 152 C68 144 88 146 100 154 C112 146 132 144 158 152" />
    </g>
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  asLink = true
}) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const content = (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className={`${iconSizes[size]} text-[#1B2442] dark:text-stone-100 flex-shrink-0 transition-colors`}>
        <MishnahMark className="w-full h-full" />
      </div>
      <div className="flex items-baseline gap-0.5 font-serif tracking-tight">
        <span className={`font-bold text-stone-900 dark:text-stone-100 ${textSizes[size]}`}>
          Mishnah
        </span>
        <span className="text-stone-500 dark:text-stone-400 font-sans text-xs tracking-normal font-medium">
          .online
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <a
        href="https://mishnah.online"
        className="hover:opacity-85 transition-opacity focus:outline-none"
        title="Mishnah.Online Home"
      >
        {content}
      </a>
    );
  }

  return content;
};
