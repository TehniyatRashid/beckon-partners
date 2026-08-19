import React from 'react';
import { RoutePath } from '../types';
import { BUSINESS_SYSTEMS } from '../data/systemsData';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface SystemsOverviewPageProps {
  onNavigate: (route: RoutePath) => void;
}

const SYSTEM_IMAGES: Record<string, string> = {
  'customer-growth': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
  'revenue-growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  'operational-excellence': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
  'team-productivity': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  'executive-intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
};

export const SystemsOverviewPage: React.FC<SystemsOverviewPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89635]" />
            <span>CONNECTED SYSTEM ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900">
            The Five <span className="font-serif-headline italic text-[#C5A059]">Connected</span> Business Systems.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            We organize business operations into five interconnected operational pillars. Middleware and unified APIs bind them into a single operating engine.
          </p>
        </motion.div>

        {/* 5 Systems Detailed Cards */}
        <div className="space-y-12">
          {BUSINESS_SYSTEMS.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Visual Image Header */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200">
                  <img 
                    src={SYSTEM_IMAGES[sys.slug] || SYSTEM_IMAGES['customer-growth']} 
                    alt={sys.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200 text-xs font-bold text-zinc-900 font-mono">
                    PILLAR {sys.number}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-md">
                    <div className="text-[10px] uppercase text-[#B89635] font-bold">KEY IMPACT METRIC</div>
                    <div className="text-2xl font-bold text-zinc-900 font-mono">{sys.metricsHighlight.stat}</div>
                    <div className="text-xs text-zinc-600 font-medium">{sys.metricsHighlight.label}</div>
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase text-[#B89635] tracking-wider">
                      Business Operating System
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                    {sys.title}
                  </h2>

                  <p className="text-sm text-[#C5A059] font-serif-headline italic">
                    "{sys.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {sys.summary}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase text-zinc-500 mb-2">Core System Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
                      {sys.capabilities.slice(0, 6).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-4">
                    <button
                      onClick={() => {
                        onNavigate(`/systems/${sys.slug}` as RoutePath);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold text-xs hover:bg-[#C5A059] hover:text-zinc-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Explore {sys.title} System</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
