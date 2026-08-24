import React from 'react';
import { RoutePath } from '../types';
import { SOFTWARE_INTEGRATIONS } from '../data/ecosystemData';
import { ShieldCheck, Zap, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';

interface IntegrationsPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MIDDLEWARE ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Integrations & Middleware Strategy.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Rip-and-replace software migrations cause massive staff disruption, lost data, and downtime. Beckon connects your existing software through robust API middleware.
          </p>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 font-sans">
          <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EB] border border-[#E8DFCA] flex items-center justify-center text-[#C5A059] mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-1">Zero Staff Retraining</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Staff continue using POS, WhatsApp, or accounting software without learning confusing new interfaces.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-1">Enterprise Security</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Encrypted API tokens, role-based permission scopes, and complete chronological audit logs on every data transfer.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EB] border border-[#E8DFCA] flex items-center justify-center text-[#C5A059] mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-1">Real-Time Sync</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Webhooks fire instantly on transactions, lead creation, or inventory movement with zero batch delays.
            </p>
          </div>
        </div>

        {/* Integration Categories Detail */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 uppercase">
            Supported Integration Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <div className="p-3 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs font-mono text-zinc-700">
                  <span className="text-zinc-500 uppercase text-[10px] block mb-1">INTEGRATION PATTERN:</span>
                  {tool.howWeConnect}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-white border border-zinc-200 text-center shadow-xl space-y-4">
          <h3 className="text-2xl font-bold text-zinc-900">
            Have a custom legacy system or proprietary database?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
            We build custom REST, GraphQL, and SQL connectors for enterprise backends.
          </p>

          <button
            onClick={() => {
              onNavigate('/contact');
            }}
            className="px-8 py-3.5 rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-[#C5A059] hover:text-zinc-950 transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Talk to Integration Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
