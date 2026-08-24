import React from 'react';

interface BeckonLogoProps {
  className?: string;
  iconOnly?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BeckonLogo: React.FC<BeckonLogoProps> = ({
  className = '',
  iconOnly = false,
  theme = 'dark',
  size = 'md'
}) => {
  const isLight = theme === 'light';
  const strokeColor = isLight ? '#FFFFFF' : '#0B0C0E';
  const textColor = isLight ? '#FFFFFF' : '#0F1115';
  const subtextColor = isLight ? '#A0A3AA' : '#52555C';

  // Dimension scaling
  const iconDimensions = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  }[size];

  const textClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img 
        src="/favicon.png" 
        alt="Beckon Partners Icon" 
        className={`object-contain ${iconDimensions} ${
          theme === 'light' ? 'opacity-90' : ''
        }`}
        style={{ 
          filter: theme === 'dark' ? 'url(#extract-black-logo)' : 'url(#extract-black-logo) invert(1)' 
        }}
      />

      {/* Brand Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col select-none leading-none tracking-tight">
          <span
            className={`font-black font-inter tracking-[0.06em] uppercase ${textClasses}`}
            style={{ color: textColor }}
          >
            BECKON
          </span>
          <span
            className={`font-bold font-inter tracking-[0.14em] uppercase text-[0.72em] mt-0.5`}
            style={{ color: subtextColor }}
          >
            PARTNERS
          </span>
        </div>
      )}
    </div>
  );
};
