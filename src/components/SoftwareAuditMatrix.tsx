import React, { useState } from 'react';
import { SOFTWARE_INTEGRATIONS } from '../data/ecosystemData';
import { Check, Zap, Layers, RefreshCcw, ArrowRight } from 'lucide-react';

export const SoftwareAuditMatrix: React.FC = () => {
  const [selectedTools, setSelectedTools] = useState<string[]>([
    'pos-systems',
    'accounting',
    'crm-sales',
    'messaging-ai'
  ]);

  const toggleTool = (id: string) => {
    if (selectedTools.includes(id)) {
      setSelectedTools(selectedTools.filter(t => t !== id));
    } else {
      setSelectedTools([...selectedTools, id]);
    }
  };

  return (
    <section className="py-20 bg-[#0A0A0A] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono-tech uppercase text-neutral-500 tracking-wider mb-2">
            —— INTEGRATION STRATEGY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            You Probably Don’t Need More Software.<br />
            <span className="text-neutral-400 font-normal">You Need Your Software To Talk.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Most businesses already own enough software tools. The problem is that their systems exist in isolated silos.
            <strong className="text-white block mt-2">WE DON’T REPLACE WHAT WORKS. WE CONNECT WHAT’S MISSING.</strong>
          </p>
        </div>

        {/* Interactive Matrix Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Checkable Software Categories */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono-tech text-neutral-500 uppercase tracking-wider mb-3">
              Select the software tools your business already uses today:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOFTWARE_INTEGRATIONS.map((tool) => {
                const isChecked = selectedTools.includes(tool.id);
                return (
                  <div
                    key={tool.id}
                    onClick={() => toggleTool(tool.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isChecked
                        ? 'bg-neutral-900 border-neutral-600 shadow-md'
                        : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white mb-1 flex items-center gap-2">
                        <span>{tool.name}</span>
                      </div>
                      <div className="text-[11px] text-neutral-400 line-clamp-1">
                        {tool.examples.slice(0, 3).join(', ')}
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded flex items-center justify-center border text-xs shrink-0 mt-0.5 transition-all ${
                      isChecked ? 'bg-white border-white text-black font-bold' : 'border-neutral-700 bg-neutral-950'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: The Beckon Wrapper Outcome */}
          <div className="lg:col-span-5">
            <div className="card-dark p-6 rounded-2xl border border-neutral-800 bg-[#0E0E0E] font-mono-tech text-xs space-y-6 shadow-2xl sticky top-24">
              <div className="flex items-center gap-2 text-emerald-400 pb-3 border-b border-neutral-800">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="font-bold uppercase tracking-wider text-[11px]">BECKON CONNECTED MIDDLEWARE LAYER</span>
              </div>

              <div>
                <div className="text-neutral-400 mb-1">SELECTED TOOLS IN YOUR ARCHITECTURE:</div>
                <div className="text-2xl font-extrabold text-white font-mono-tech">
                  {selectedTools.length} Active System Silos
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">How Beckon Unifies Them:</div>
                
                <div className="p-3 rounded bg-neutral-950 border border-neutral-800 space-y-1.5 text-neutral-300">
                  <div className="text-white font-bold flex items-center gap-1.5">
                    <RefreshCcw className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Disrupted Staff Workflows</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Your team continues using the interfaces they know (POS, WhatsApp, Xero), while Beckon background bridges sync data automatically.
                  </p>
                </div>

                <div className="p-3 rounded bg-neutral-950 border border-neutral-800 space-y-1.5 text-neutral-300">
                  <div className="text-white font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Automated Data Orchestration</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Orders in POS update inventory in real-time, generate recipe COGS alerts, and feed executive reporting instantly.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/integrations"
                  className="w-full py-2.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 transition-all text-center flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <span>Explore Full Integration Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
