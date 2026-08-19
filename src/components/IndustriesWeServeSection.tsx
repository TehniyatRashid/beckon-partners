import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { RoutePath } from '../types';

interface IndustriesWeServeSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

interface IndustryItem {
  id: string;
  title: string;
  subheading: string;
  image: string;
}

export const IndustriesWeServeSection: React.FC<IndustriesWeServeSectionProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState<string | null>('restaurants');

  const industries: IndustryItem[] = [
    {
      id: 'restaurants',
      title: 'Restaurants & F&B',
      subheading: 'Kitchen Sync, Reservations & Margin Protection',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'construction',
      title: 'Construction & Trades',
      subheading: 'Job Costing, Subcontractors & Variation Capture',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'logistics',
      title: 'Delivery & Logistics',
      subheading: 'Fleet Dispatch, Invoicing & Delivery Tracking',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'retail',
      title: 'Retail & Multi-Site Commerce',
      subheading: 'Omnichannel Stock Flow & Store Performance',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'professional-services',
      title: 'Professional Services',
      subheading: 'Client Onboarding, Scope Control & Billing Cycles',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Hotels',
      subheading: 'Guest Experience, Front Office & Department Sync',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section 
      id="industries-section"
      className="bg-[#0B0C0E] text-[#F6F4F0] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header (Clean, No extraneous audit buttons) */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C7A472] uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-[#C7A472] inline-block" />
            SPECIALIZED ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            Industries We Serve.
          </h2>
        </div>

        {/* Horizontal Expanding Card Strip (6 spacious cards, perfect typography fitting) */}
        <div className="flex flex-col md:flex-row gap-3 w-full h-[520px] md:h-[460px] items-stretch overflow-hidden">
          {industries.map((ind) => {
            const isHovered = activeId === ind.id;

            return (
              <motion.div
                key={ind.id}
                onMouseEnter={() => setActiveId(ind.id)}
                onClick={() => {
                  setActiveId(ind.id);
                  if (onNavigate) {
                    onNavigate(`/industries/${ind.id}` as RoutePath);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                layout
                transition={{ type: "spring", stiffness: 240, damping: 28 }}
                className={`relative rounded-[18px] overflow-hidden cursor-pointer shadow-xl transition-all duration-300 border border-white/10 group ${
                  isHovered ? 'md:flex-[3.5] flex-[3]' : 'md:flex-[1.2] flex-[1]'
                }`}
              >
                {/* Real High-Res Industry Background Image */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Dark Gradient for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                {/* Top Corner Subtle Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C7A472]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimal Bottom Label Layout */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans drop-shadow-md leading-tight break-words">
                    {ind.title}
                  </h3>

                  {/* Subtitle appears smoothly when expanded */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, y: 4 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs sm:text-sm text-[#C7A472] font-medium mt-1 leading-snug drop-shadow"
                      >
                        {ind.subheading}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Can't Find Your Industry Quick Link */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8C8F98] border-t border-white/10">
          <span>Can't find your exact industry? We architect operational systems for specialized trade, medical, supply chain, and hybrid enterprises.</span>
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-white hover:text-[#C7A472] font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0 underline decoration-[#C7A472] underline-offset-4"
          >
            <span>Start your custom assessment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
