import React from 'react';
import { RoutePath } from '../types';
import { SOFTWARE_INTEGRATIONS } from '../data/ecosystemData';
import { BUSINESS_SYSTEMS } from '../data/systemsData';
import { Activity, Sparkles } from 'lucide-react';

interface EcosystemPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
            <Sparkles className="w-3.5 h-3.5 text-[#B89635]" />
            <span>PLATFORM ECOSYSTEM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Our Ecosystem Architecture.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            We map your existing tools across the five business layers, wrapping them in Beckon middleware without forcing disruptive tool replacements.
          </p>
        </div>

        {/* 5 Layer Mapping Visual Stack */}
        <div className="space-y-6 mb-16">
          <div className="text-xs font-mono uppercase font-bold text-[#B89635] mb-2">
            THE FIVE CONNECTED OPERATING LAYERS
          </div>

          {BUSINESS_SYSTEMS.map((sys) => (
            <div 
              key={sys.id}
              className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs hover:border-[#C5A059] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-1 md:max-w-md">
                <div className="text-xs font-mono text-[#B89635] font-bold">
                  LAYER {sys.number}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  {sys.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {sys.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {sys.technologyStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-zinc-200 text-zinc-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software Category Matrix */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 uppercase">
            Supported Software Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOFTWARE_INTEGRATIONS.map((tool) => (
              <div key={tool.id} className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs hover:border-[#C5A059] transition-all">
                <div className="text-xs font-mono text-[#B89635] uppercase font-bold mb-1">
                  {tool.category}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  {tool.description}
                </p>

                <div className="p-3 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs font-mono text-zinc-800 mb-4">
                  <span className="text-zinc-500 uppercase text-[10px] block mb-1">BECKON CONNECTOR:</span>
                  {tool.howWeConnect}
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-zinc-600">
                  {tool.examples.map((ex, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#FAF6EB] border border-[#E8DFCA] text-zinc-800">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-white border border-zinc-200 text-center shadow-xl space-y-4">
          <h3 className="text-2xl font-bold text-zinc-900">
            Is your current software stack supported?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
            We connect custom internal databases, legacy APIs, and off-the-shelf SaaS.
          </p>

          <button
            onClick={() => {
              onNavigate('/assessment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-[#C5A059] hover:text-zinc-950 transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Activity className="w-4 h-4" />
            <span>Audit Your Software Stack</span>
          </button>
        </div>

      </div>
    </div>
  );
};
