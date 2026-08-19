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
      {/* Mathematical SVG Filter to extract black logo from white background */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="extract-black-logo" colorInterpolationFilters="sRGB">
          {/* 1. Invert the image so the black logo becomes white and the white background becomes black */}
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="-1 0 0 0 1
                    0 -1 0 0 1
                    0 0 -1 0 1
                    0 0 0 1 0"
            result="inverted"
          />
          {/* 2. Convert luminance to alpha. White pixels (the logo) become opaque. Black pixels (the background) become transparent. The RGB output is forced to black. */}
          <feColorMatrix
            in="inverted"
            type="luminanceToAlpha"
          />
        </filter>
      </svg>

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
