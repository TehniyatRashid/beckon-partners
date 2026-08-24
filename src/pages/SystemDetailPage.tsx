import React, { useState } from 'react';
import { RoutePath } from '../types';
import { BUSINESS_SYSTEMS } from '../data/systemsData';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Zap, 
  ArrowLeft,
  Play,
  RotateCcw,
  Sparkles,
  Workflow,
  Server
} from 'lucide-react';

interface SystemDetailPageProps {
  systemSlug: string;
  onNavigate: (route: RoutePath) => void;
}

const SYSTEM_HERO_PHOTOS: Record<string, string> = {
  'customer-growth': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
  'revenue-growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  'operational-excellence': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
  'team-productivity': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
  'executive-intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80'
};

export const SystemDetailPage: React.FC<SystemDetailPageProps> = ({ systemSlug, onNavigate }) => {
  const system = BUSINESS_SYSTEMS.find(s => s.slug === systemSlug) || BUSINESS_SYSTEMS[0];

  // Interactive Workflow Simulation State
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % system.exampleWorkflow.steps.length);
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setActiveStepIndex(0);
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev >= system.exampleWorkflow.steps.length - 1) {
          clearInterval(interval);
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => {
            onNavigate('/systems');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 hover:text-[#C5A059] mb-8 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Connected Systems Matrix</span>
        </button>

        {/* ==========================================
            01 — HERO HEADER & BLUEPRINT
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white p-8 sm:p-12 mb-16 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
                <Sparkles className="w-3.5 h-3.5 text-[#B89635]" />
                <span>SYSTEM {system.number} OF 05 ARCHITECTURE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                {system.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#C5A059] font-serif-headline italic">
                "{system.tagline}"
              </p>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {system.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('/assessment');
                  }}
                  className="px-7 py-3.5 rounded-xl bg-zinc-900 text-white font-bold text-xs hover:bg-[#C5A059] hover:text-zinc-950 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Assess Your {system.title} System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('/contact');
                  }}
                  className="px-6 py-3.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-900 font-bold text-xs transition-all cursor-pointer"
                >
                  <span>Book Architecture Review</span>
                </button>
              </div>
            </div>

            {/* Right Visual Key Metric Showcase Box */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200 shadow-md space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 text-xs font-bold">
                  <span className="text-[#B89635] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                    CORE TELEMETRY
                  </span>
                  <span className="text-zinc-500 font-mono">BECKON OS</span>
                </div>

                <div>
                  <div className="text-xs text-zinc-500 uppercase font-mono">SIGNATURE IMPACT METRIC</div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mt-1 font-mono tracking-tight">
                    {system.metricsHighlight.stat}
                  </div>
                  <div className="text-sm font-bold text-[#C5A059] mt-1">
                    {system.metricsHighlight.label}
                  </div>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {system.metricsHighlight.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 space-y-2">
                  <div className="text-[11px] font-bold uppercase text-zinc-500">PRIMARY OUTCOMES:</div>
                  {system.outcomes.slice(0, 3).map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ==========================================
            02 — INTERACTIVE WORKFLOW SIMULATION ENGINE
        ========================================== */}
        <div className="mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#B89635] tracking-wider mb-2">
                  <Workflow className="w-4 h-4 text-[#B89635]" />
                  <span>LIVE SYSTEM WORKFLOW SIMULATION</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900">
                  {system.exampleWorkflow.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-xs hover:bg-[#C5A059] hover:text-zinc-950 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Simulating Workflow...' : 'Simulate Live Flow'}</span>
                </button>

                <button
                  onClick={() => setActiveStepIndex(0)}
                  className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 transition-all cursor-pointer"
                  title="Reset Step"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Trigger Banner */}
            <div className="p-4 rounded-2xl bg-[#FAF6EB] border border-[#E8DFCA] mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8DFCA] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#B89635]">AUTOMATED TRIGGER EVENT</div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900">{system.exampleWorkflow.trigger}</div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-zinc-900 bg-white border border-zinc-200 px-3 py-1 rounded-full hidden sm:inline-block">
                LIVE INPUT DETECTED
              </span>
            </div>

            {/* Step Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {system.exampleWorkflow.steps.map((stepText, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;

                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                      isActive 
                        ? 'bg-[#FAF6EB] border-[#C5A059] shadow-md' 
                        : isPassed 
                        ? 'bg-zinc-50 border-zinc-300 text-zinc-800' 
                        : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center font-mono ${
                          isActive 
                            ? 'bg-[#C5A059] text-zinc-950' 
                            : isPassed 
                            ? 'bg-zinc-900 text-white' 
                            : 'bg-zinc-100 text-zinc-600'
                        }`}>
                          0{idx + 1}
                        </span>

                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {isActive ? 'PROCESSING' : isPassed ? 'COMPLETED' : 'PENDING'}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-bold leading-relaxed text-zinc-900">
                        {stepText}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-500">Node Execution</span>
                      <span className={`font-mono font-bold ${isActive ? 'text-[#B89635]' : 'text-zinc-400'}`}>
                        {isActive ? '<12ms SYNC' : 'READY'}
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#C5A059]"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Target Outcome Output Banner */}
            <motion.div 
              key={activeStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-zinc-950 flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">MEASURABLE WORKFLOW OUTCOME</div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">{system.exampleWorkflow.result}</p>
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-[#d8b473] text-xs font-bold text-zinc-950 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

          </div>
        </div>

        {/* ==========================================
            03 — VISUAL SYSTEM CAPABILITIES
        ========================================== */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B89635] mb-2">
                MODULE SPECS & ENGINE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
                Integrated System <span className="font-serif-headline italic text-[#C5A059]">Modules</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md">
              Each capability functions as a plug-and-play middleware module connected via standard REST & Webhook APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {system.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-[#C5A059] transition-all flex flex-col justify-between group space-y-4 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#B89635] font-bold px-2.5 py-1 rounded bg-[#FAF6EB] border border-[#E8DFCA]">
                      MODULE 0{i + 1}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">100% AUTOMATED</span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#C5A059] transition-colors leading-snug">
                    {cap}
                  </h3>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 text-zinc-800 font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Real-time API Sync</span>
                  </span>
                  <span className="text-zinc-400 font-mono text-[10px]">v4.2</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            04 — INFRASTRUCTURE MATRIX
        ========================================== */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-8">
            <div>
              <div className="text-xs font-mono uppercase text-[#B89635]">INFRASTRUCTURE MATRIX</div>
              <h3 className="text-2xl font-bold text-zinc-900 mt-1">Underlying Technology Stack Mesh</h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline-block">256-BIT ENCRYPTED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-mono text-xs">
            {system.technologyStack.map((tech, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-[#C5A059] transition-all flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <Server className="w-4 h-4 text-[#C5A059]" />
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                </div>
                <div className="font-bold text-zinc-900 text-xs">{tech}</div>
                <div className="text-[10px] text-zinc-500">REST / WEBHOOK API</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            05 — BOTTOM CALL TO ACTION
        ========================================== */}
        <div className="p-10 rounded-3xl bg-white border border-zinc-200 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>READY TO CONNECT YOUR OPERATIONAL ENGINE?</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 max-w-2xl mx-auto leading-tight">
            Deploy {system.title} Across Your Enterprise
          </h3>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Schedule an architecture session with our lead engineers to map your baseline operational metrics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('/assessment');
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-[#C5A059] text-white hover:text-zinc-950 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              <span>Start Business Assessment</span>
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold border border-zinc-200 text-zinc-900 hover:bg-zinc-100 transition-all cursor-pointer"
            >
              <span>Speak with Systems Architect</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
