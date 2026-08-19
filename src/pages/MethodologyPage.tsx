import React, { useState } from 'react';
import { RoutePath } from '../types';
import { motion } from 'motion/react';
import { 
  Search, 
  Compass, 
  GitMerge, 
  SlidersHorizontal, 
  TrendingUp, 
  Activity, 
  Sparkles
} from 'lucide-react';

interface MethodologyPageProps {
  onNavigate: (route: RoutePath) => void;
}

const STAGES = [
  {
    num: "01",
    title: "Discover & Baseline Mapping",
    timeline: "WEEKS 1–2",
    icon: Search,
    milestone: "SYSTEM BOTTLENECK AUDIT",
    summary: "We follow the work through the business as it happens — where it stalls, who owns it, and what page it stalls on. We shadow team members, inspect spreadsheet handoffs, and measure baseline cycle times.",
    output: "Time & Margin Leakage Map showing exact dollar cost of manual re-keying and delayed response.",
    commitment: "2 hours total shadowing per operational lead; zero disruption to active trade.",
    image: "https://images.unsplash.com/photo-1542744801-43245f175232?auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "02",
    title: "Architecture & System Design",
    timeline: "WEEKS 2–4",
    icon: Compass,
    milestone: "BLUEPRINT SIGN-OFF",
    summary: "We draw the system before we build it: what happens, who owns it, and what 'done' means at every single handoff. Every API endpoint, database schema, and staff trigger is documented in standard notation.",
    output: "Complete Visual Data Flow Architecture & API Integration Schema.",
    commitment: "60-minute executive review & architecture sign-off session.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "03",
    title: "Middleware Build & Parallel Run",
    timeline: "WEEKS 4–8",
    icon: GitMerge,
    milestone: "PARALLEL RUN VALIDATION",
    summary: "We build and join the pieces, then run them alongside the old way until the team trusts them completely. We test data integrity across edge cases, ensure zero lost records, and verify real-time sync speed.",
    output: "Deployed Connected Middleware Layer with real-time logging dashboard.",
    commitment: "Parallel data verification testing with key operators.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "04",
    title: "Optimisation & Fine-Tuning",
    timeline: "ONGOING",
    icon: SlidersHorizontal,
    milestone: "SLA VERIFICATION",
    summary: "Front-desk load moved to phone and WhatsApp assistants, and recall sequences tied to patient or client history. We monitor drop-off points and refine text responses based on actual conversation logs.",
    output: "Monthly Operational SLA Report comparing actual speed vs baseline.",
    commitment: "30-minute monthly performance sync with Beckon architects.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "05",
    title: "Multi-Site Scale & Expansion",
    timeline: "QUARTERLY",
    icon: TrendingUp,
    milestone: "PORTFOLIO EXPANSION",
    summary: "Once one part of the business runs cleanly, the same system extends to the next site, team or service line. System templates allow instant rollout for new depots, clinics, or regional offices.",
    output: "Replicable Site Expansion Playbook & Centralized Multi-Location Dashboard.",
    commitment: "Quarterly strategic roadmap alignment.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  }
];

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

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
            <span>DISCIPLINED TRANSFORMATION METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900">
            How A Connected System <span className="font-serif-headline italic text-[#C5A059]">Gets Built.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            De-risking business transformation through a 5-stage disciplined engineering methodology. We baseline performance before writing code, proving the ROI with hard numbers.
          </p>
        </motion.div>

        {/* Stepper Bar */}
        <div className="p-4 rounded-2xl bg-white border border-zinc-200 mb-12 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {STAGES.map((s, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`flex-1 p-4 rounded-xl border transition-all text-left cursor-pointer relative ${
                    isActive 
                      ? 'bg-[#FAF6EB] border-[#C5A059] shadow-xs' 
                      : 'bg-white border-zinc-200 hover:border-zinc-300 text-zinc-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#B89635]' : 'text-zinc-400'}`}>
                      STAGE {s.num}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">{s.timeline}</span>
                  </div>
                  <div className={`text-xs font-bold leading-snug line-clamp-1 ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                    {s.title}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C5A059] rounded-t-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive */}
        <motion.div 
          key={activeStage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border border-zinc-200 mb-16 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl bg-[#FAF6EB] border border-[#E8DFCA] text-[#C5A059]">
                  {React.createElement(STAGES[activeStage].icon, { className: "w-6 h-6" })}
                </span>
                <div>
                  <div className="text-xs font-mono text-[#B89635] uppercase font-bold">
                    STAGE {STAGES[activeStage].num} · {STAGES[activeStage].timeline}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900">
                    {STAGES[activeStage].title}
                  </h2>
                </div>
              </div>

              <div className="inline-block px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-800 font-mono">
                MILESTONE: {STAGES[activeStage].milestone}
              </div>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                {STAGES[activeStage].summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-2">
                <div className="p-4 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-1">
                  <span className="text-[#B89635] font-bold block uppercase text-[10px]">KEY DELIVERABLE OUTPUT:</span>
                  <p className="text-zinc-800 font-sans text-xs leading-normal">{STAGES[activeStage].output}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-1">
                  <span className="text-zinc-800 font-bold block uppercase text-[10px]">CLIENT COMMITMENT:</span>
                  <p className="text-zinc-800 font-sans text-xs leading-normal">{STAGES[activeStage].commitment}</p>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img 
                src={STAGES[activeStage].image} 
                alt={STAGES[activeStage].title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-5 text-white">
                <div>
                  <div className="text-xs font-bold text-[#C5A059]">Beckon Engineering Protocol</div>
                  <div className="text-sm font-semibold text-white">Guaranteed Operational SLA</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 5 Stages Grid */}
        <div className="space-y-6 mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#B89635] mb-2">
            COMPLETE 5-STAGE ROADMAP MATRIX
          </div>

          <div className="grid grid-cols-1 gap-6">
            {STAGES.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white hover:border-[#C5A059] transition-all shadow-xs"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#FAF6EB] border border-[#E8DFCA] text-[#C5A059]">
                      {React.createElement(s.icon, { className: "w-5 h-5" })}
                    </span>
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase">STAGE {s.num} · {s.timeline}</div>
                      <h3 className="text-xl font-bold text-zinc-900">{s.title}</h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 rounded border bg-[#FAF6EB] border-[#E8DFCA] text-[#B89635]">
                    MILESTONE: {s.milestone}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {s.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-600">
                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-zinc-200">
                    <strong className="text-zinc-900 block mb-1">Key Output:</strong> {s.output}
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAFAFA] border border-zinc-200">
                    <strong className="text-zinc-900 block mb-1">Client Commitment:</strong> {s.commitment}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-10 rounded-3xl bg-white border border-zinc-200 text-center space-y-6 shadow-xl">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 max-w-2xl mx-auto leading-tight">
            Ready to Begin Your System Transformation?
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Take our 5-minute Connected Systems Assessment to discover where your business is losing time and money.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-[#C5A059] text-white hover:text-zinc-950 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              <span>Start Business Assessment</span>
            </button>
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
