import React from 'react';
import { ShieldCheck, Cpu, Target } from 'lucide-react';

export const PhilosophyBannerSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: ShieldCheck,
      title: 'Vendor-Neutral Architecture',
      description: 'No software kickbacks, reselling markups, or proprietary vendor locks.'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Built Around Existing Systems',
      description: 'Zero disruptive whole-stack rip and replace. We connect your current stack.'
    },
    {
      num: '03',
      icon: Target,
      title: 'Measurable Business Outcomes',
      description: 'Every integration is tied directly to executive profit, capacity, and margin.'
    }
  ];

  return (
    <section 
      id="philosophy"
      className="relative bg-[#FAF8F5] border-y border-[#E2DED6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans"
      aria-label="Beckon Architecture Philosophy"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Seamless Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Philosophy Statement & Position */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D6D0C4] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#856A41]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#856A41] uppercase">
                Our Architecture Philosophy
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-inter font-bold text-[#0F1115] tracking-tight leading-[1.18]">
              We Don't Replace What Already Works. <br />
              <span className="text-[#856A41]">We Connect What Doesn't.</span>
            </h2>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#52555C] max-w-xl leading-relaxed font-manrope font-normal">
              We are not a software vendor. We evaluate your current platforms, identify where data stalls, and architect custom integrations so your existing tools finally speak to each other.
            </p>

          </div>

          {/* Right Column: 3 Editorial Architectural Tenets (Uncarded, Clean Typographic List) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#E2DED6] border-t lg:border-t-0 lg:border-l border-[#E2DED6] pt-8 lg:pt-0 lg:pl-10">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.num} className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5 group">
                  
                  {/* Subtle Monogrammed Number / Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#F2EFE9] border border-[#D6D0C4] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#856A41]/50 group-hover:bg-[#EAE6DF]">
                    <IconComponent className="w-4 h-4 text-[#856A41]" />
                  </div>

                  {/* Editorial Content */}
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#856A41] tracking-wider uppercase">
                        {pillar.num}
                      </span>
                      <h3 className="text-base font-inter font-bold text-[#0F1115] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#52555C] font-manrope leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
