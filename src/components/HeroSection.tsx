import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoutePath } from '../types';
import { BeckonLogo } from './BeckonLogo';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Users, 
  Compass,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Layers,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: RoutePath) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  // Story Phase: 1 = Disconnected Chaos (0-3s), 2 = Beckon Connects (3-6s), 3 = 5 Systems & Outcomes (6-10s)
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNav = (route: RoutePath) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The 5 Core Connected Systems — Ultra-Bold Glanceable Headlines (Read in 1 Second)
  const fiveSystems = [
    {
      id: 0,
      code: '01',
      title: 'Customer Growth',
      icon: Users,
      headline: 'Attract & Retain Customers',
      sub: 'AI lead qualification & auto-CRM sync',
      metric: '+42% Lead Velocity',
      color: 'from-amber-500/20 to-amber-500/5'
    },
    {
      id: 1,
      code: '02',
      title: 'Revenue Growth',
      icon: DollarSign,
      headline: 'Recover Lost Profit Margins',
      sub: 'Automated invoice & margin leakage guard',
      metric: '+18% Profit Realization',
      color: 'from-emerald-500/20 to-emerald-500/5'
    },
    {
      id: 2,
      code: '03',
      title: 'Operational Excellence',
      icon: Zap,
      headline: 'Stop Manual Work & Delays',
      sub: 'Smart auto-dispatch & digital job SOPs',
      metric: '99.4% Fulfillment Accuracy',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      id: 3,
      code: '04',
      title: 'Team Productivity',
      icon: Compass,
      headline: 'Help Teams Work Faster',
      sub: 'Single-pane task feeds & shift logs',
      metric: '18h/Wk Saved / Manager',
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      id: 4,
      code: '05',
      title: 'Executive Intelligence',
      icon: TrendingUp,
      headline: 'Real-Time CEO Visibility',
      sub: 'Unified P&L flash & 8 AM automated briefing',
      metric: '100% Real-Time Visibility',
      color: 'from-rose-500/20 to-rose-500/5'
    }
  ];

  // 4 Glanceable Disconnected Problems
  const problemSilos = [
    { label: 'Unanswered Leads', stat: '60% Lost Window', color: 'border-rose-500/40 text-rose-300' },
    { label: 'Manual Re-Typing', stat: '18h Wasted/Wk', color: 'border-rose-500/40 text-rose-300' },
    { label: 'Hidden Price Leakage', stat: '-8% Margin Loss', color: 'border-rose-500/40 text-rose-300' },
    { label: 'Late Reports', stat: 'Zero CEO Visibility', color: 'border-rose-500/40 text-rose-300' }
  ];

  // 10-Second Automated Story Loop (0-3s -> 3-6s -> 6-10s)
  useEffect(() => {
    if (!isPlaying) return;

    const timings = {
      1: 2800, // Phase 1: Disconnected Chaos (0-2.8s)
      2: 2500, // Phase 2: Beckon Connects (2.8-5.3s)
      3: 4500  // Phase 3: 5 Systems & Outcomes (5.3-9.8s)
    };

    timerRef.current = setTimeout(() => {
      setPhase((prev) => (prev === 3 ? 1 : ((prev + 1) as 1 | 2 | 3)));
    }, timings[phase]);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, phase]);

  return (
    <section 
      id="hero"
      className="relative bg-[#FAF8F5] text-[#0F1115] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-b border-[#E8E4DC]"
      aria-label="Beckon Partners Business Systems Advisory"
    >
      {/* Warm Grid & Background Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 17, 21, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 17, 21, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#C7A472]/12 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL HERO
            Left: High-Impact Strategic Positioning & CTAs
            Right: 0-10 Second Instant Visual Transformation Stage
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Advisory Positioning */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 sm:space-y-7">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D6D0C4] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#856A41] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#856A41] uppercase">
                Business Systems Advisory & Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-inter font-bold tracking-tight text-[#0F1115] leading-[1.12]">
              Your Business Has Systems. <br />
              <span className="text-[#856A41]">We Make Them Work Together.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#52555C] max-w-xl leading-relaxed font-manrope font-normal">
              We eliminate disconnected tools, manual data entry, and reporting blindspots—connecting your people, workflows, and data into five unified business systems built for scale.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => handleNav('/assessment')}
                className="px-8 py-3.5 rounded-full bg-[#0F1115] text-[#FAF8F5] text-sm sm:text-base font-semibold tracking-tight hover:bg-[#1E2028] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer border border-[#856A41]/40"
              >
                <span>Start Business Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#C7A472] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleNav('/systems')}
                className="px-5 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#0F1115] text-sm font-semibold border border-[#DCD6C8] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore 5 Systems</span>
                <ArrowUpRight className="w-4 h-4 text-[#856A41]" />
              </button>
            </div>

            {/* Trust Pill */}
            <div className="flex items-center gap-2 text-xs text-[#6A6D76] font-manrope pt-1">
              <ShieldCheck className="w-4 h-4 text-[#856A41]" />
              <span>Zero workflow disruption · Built alongside your existing software</span>
            </div>

          </div>

          {/* RIGHT COLUMN: 0-10 SECOND INSTANT VISUAL ANIMATION STAGE */}
          <div className="lg:col-span-7 w-full">
            
            <div className="bg-[#0B0C0E] text-white p-5 sm:p-6 rounded-[28px] border border-[#856A41]/30 shadow-[0_24px_60px_rgba(15,17,21,0.35)] relative overflow-hidden">
              
              {/* Radial Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7A472]/15 rounded-full blur-3xl pointer-events-none" />

              {/* -------------------------------------------------------------
                  10-SECOND AUTOMATED PROGRESS TIMER BAR (TOP)
                  ------------------------------------------------------------- */}
              <div className="mb-5 pb-3 border-b border-white/10 relative z-20">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      phase === 1 ? 'bg-rose-500 animate-ping' : phase === 2 ? 'bg-[#C7A472] animate-spin' : 'bg-emerald-400 animate-pulse'
                    }`} />
                    <span className="font-bold text-white uppercase tracking-wider">
                      {phase === 1 && '0s–3s: Disconnected Chaos'}
                      {phase === 2 && '3s–6s: Beckon Connects The Pieces'}
                      {phase === 3 && '6s–10s: 5 Connected Systems Active'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[#C7A472] text-[10px] flex items-center gap-1 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isPlaying ? 'Auto-Story' : 'Paused'}</span>
                    </button>

                    <button
                      onClick={() => { setPhase(1); setIsPlaying(true); }}
                      className="p-1 rounded bg-white/10 hover:bg-white/20 text-[#A0A3AA] text-[10px] cursor-pointer"
                      title="Replay Story"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar Line */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                  <motion.div
                    key={phase}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: phase === 1 ? 2.8 : phase === 2 ? 2.5 : 4.5, ease: 'linear' }}
                    className={`h-full ${
                      phase === 1 ? 'bg-rose-500' : phase === 2 ? 'bg-[#C7A472]' : 'bg-emerald-400'
                    }`}
                  />
                </div>
              </div>

              {/* -------------------------------------------------------------
                  CANVAS: 3 CLEAR INSTANT VISUAL PHASES
                  ------------------------------------------------------------- */}
              <div className="min-h-[340px] flex flex-col justify-center relative z-10">
                
                <AnimatePresence mode="wait">
                  
                  {/* =========================================================
                      PHASE 1 (0s-3s): DISCONNECTED CHAOS (Glanceable Red Alert)
                      ========================================================= */}
                  {phase === 1 && (
                    <motion.div
                      key="phase1"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-center"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        <span>Traditional Disconnected State</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold font-inter text-white">
                        Your Software Tools Don’t Talk To Each Other.
                      </h3>

                      {/* 4 Red Warning Blocks */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        {problemSilos.map((s, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-center space-y-1">
                            <span className="text-xs font-bold text-white block">{s.label}</span>
                            <span className="text-[11px] font-mono text-rose-400 block font-semibold">{s.stat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#A0A3AA] flex items-center justify-center gap-2">
                        <span>⚠️ Results in manual re-typing, delayed reports & lost profit margins</span>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================
                      PHASE 2 (3s-6s): BECKON CONNECTS (Magnetic Convergence)
                      ========================================================= */}
                  {phase === 2 && (
                    <motion.div
                      key="phase2"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-center space-y-5 py-4"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7A472]/20 border border-[#C7A472]/40 text-[#C7A472] text-xs font-mono font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-[#C7A472]" />
                        <span>Beckon Architecture Alignment</span>
                      </div>

                      {/* Pulsing Monogram Core */}
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-[#C7A472]/20 animate-ping absolute inset-0 pointer-events-none" />
                        <div className="w-20 h-20 rounded-2xl bg-[#0B0C0E] border-2 border-[#C7A472] shadow-[0_0_40px_rgba(199,164,114,0.4)] flex items-center justify-center relative z-10 p-2 overflow-hidden">
                          <BeckonLogo iconOnly theme="light" size="lg" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold font-inter text-white">
                        Beckon Connects Your People, Workflows & Data.
                      </h3>
                      <p className="text-xs text-[#A0A3AA] max-w-md">
                        Connecting isolated software silos into 5 synchronized operating systems without changing your existing tools.
                      </p>
                    </motion.div>
                  )}

                  {/* =========================================================
                      PHASE 3 (6s-10s): THE 5 CONNECTED SYSTEMS (Instant Glance)
                      ========================================================= */}
                  {phase === 3 && (
                    <motion.div
                      key="phase3"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between pb-1">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>5 Connected Business Systems Active</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#C7A472]">Hover any system to inspect</span>
                      </div>

                      {/* 5 Systems Cards with BIG BOLD Glanceable Headlines */}
                      <div className="grid grid-cols-1 gap-2">
                        {fiveSystems.map((sys, idx) => {
                          const IconComp = sys.icon;
                          const isHovered = hoveredSystem === idx;

                          return (
                            <div
                              key={sys.id}
                              onMouseEnter={() => setHoveredSystem(idx)}
                              onMouseLeave={() => setHoveredSystem(null)}
                              onClick={() => handleNav('/systems')}
                              className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                                isHovered 
                                  ? 'bg-gradient-to-r from-[#1C1F28] to-[#14161E] border-[#C7A472] shadow-lg translate-x-1'
                                  : 'bg-white/[0.04] border-white/10 hover:border-white/20'
                              }`}
                            >
                              {/* Left: Icon & Bold Headline */}
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-[#C7A472] text-[#0F1115] flex items-center justify-center shrink-0 font-bold">
                                  <IconComp className="w-4 h-4" />
                                </div>

                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-white truncate font-inter">
                                      {sys.title}
                                    </span>
                                    <span className="text-[9px] font-mono text-[#C7A472] bg-[#C7A472]/15 px-1.5 py-0.5 rounded border border-[#C7A472]/30">
                                      {sys.code}
                                    </span>
                                  </div>
                                  <div className="text-xs font-extrabold text-[#C7A472] truncate">
                                    → {sys.headline}
                                  </div>
                                </div>
                              </div>

                              {/* Right: Metric Badge */}
                              <div className="shrink-0 text-right">
                                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/60 block">
                                  {sys.metric}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>

              {/* -------------------------------------------------------------
                  BOTTOM METRIC TICKER (Always Glanceable Outcome Bar)
                  ------------------------------------------------------------- */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#A0A3AA] relative z-10">
                <div className="flex items-center gap-1.5 text-white">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">Measurable Result:</span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-emerald-400 font-bold">⚡ 0 Manual Retyping</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-bold">⚡ +18% Net Realization</span>
                  <span>·</span>
                  <span className="text-[#C7A472] font-bold">⚡ Real-Time CEO Visibility</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
