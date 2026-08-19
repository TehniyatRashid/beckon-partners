import React from 'react';
import { Search, Compass, GitMerge, SlidersHorizontal, TrendingUp, ArrowRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const stages = [
    {
      number: 'Stage 01',
      title: 'Discover',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      time: 'WEEKS 1–2',
      detail: 'We follow the work through the business as it happens — where it stalls, who owns it, and what page it stalls on.'
    },
    {
      number: 'Stage 02',
      title: 'Design',
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      time: 'WEEKS 2–4',
      detail: 'We draw the system before we build it: what happens, who owns it, and what "done" means at every single handoff.'
    },
    {
      number: 'Stage 03',
      title: 'Connect',
      icon: <GitMerge className="w-5 h-5 text-amber-400" />,
      time: 'WEEKS 4–8',
      detail: 'We build and join the pieces, then run them alongside the old way until the team trusts them completely.'
    },
    {
      number: 'Stage 04',
      title: 'Optimise',
      icon: <SlidersHorizontal className="w-5 h-5 text-purple-400" />,
      time: 'ONGOING',
      detail: 'Front-desk load moved to phone and WhatsApp assistants, and recall sequences tied to each patient or client history.'
    },
    {
      number: 'Stage 05',
      title: 'Scale',
      icon: <TrendingUp className="w-5 h-5 text-rose-400" />,
      time: 'QUARTERLY',
      detail: 'Once one part of the business runs cleanly, the same system extends to the next site, team or service line.'
    }
  ];

  return (
    <section className="py-20 bg-[#070707] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono-tech uppercase text-neutral-500 tracking-wider mb-2">
              —— HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              How A System Gets Built.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            A single proven methodology built to de-risk transformation. We prove the change with a number before moving to the next phase.
          </p>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stages.map((stg, i) => (
            <div 
              key={i}
              className="card-dark p-5 rounded-xl border border-neutral-800 bg-[#0E0E0E] hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase">{stg.number}</span>
                  <div className="p-2 rounded bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {stg.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {stg.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {stg.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-800/80 text-[10px] font-mono-tech text-neutral-500 uppercase">
                {stg.time}
              </div>
            </div>
          ))}
        </div>

        {/* Baseline Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F0F0F] border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono-tech uppercase text-neutral-400">Baseline Principle</div>
            <div className="text-sm font-bold text-white">
              We baseline the business before anything is built. That's the only way a number afterwards means anything.
            </div>
          </div>

          <a
            href="/methodology"
            className="px-4 py-2.5 rounded text-xs font-mono-tech font-semibold bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Read Full Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
