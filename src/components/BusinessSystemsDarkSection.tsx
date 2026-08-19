import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  Workflow, 
  Users, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { RoutePath } from '../types';

interface BusinessSystemsDarkSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

interface SystemData {
  id: string;
  num: string;
  navTitle: string;
  label: string;
  headline: string;
  description: string;
  steps: string[];
  icon: React.ComponentType<{ className?: string }>;
  illustration: React.ReactNode;
}

/* =========================================================================
   1. CUSTOMER GROWTH: ABSTRACT ANIMATED RISING VOLUME & ACQUISITION WAVE
========================================================================= */
const CustomerGrowthAbstract: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] rounded-[22px] bg-[#12141A] border border-[#C7A472]/20 p-6 flex flex-col justify-between shadow-2xl overflow-hidden select-none">
      {/* Subtle background ambient glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C7A472]/10 blur-2xl pointer-events-none" />

      {/* Top Graphic: Inflow wave curve with live pulse dot */}
      <div className="relative h-16 w-full flex items-center justify-center">
        <svg className="w-full h-14 overflow-visible" viewBox="0 0 260 50" fill="none">
          {/* Base guide track */}
          <path
            d="M 5 40 Q 65 38 120 22 T 255 8"
            stroke="#2A2E3D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Animated Gold Growth Wave */}
          <motion.path
            d="M 5 40 Q 65 38 120 22 T 255 8"
            stroke="#C7A472"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {/* Pulse Orb at the Peak */}
          <motion.circle
            cx="255"
            cy="8"
            r="5"
            fill="#DFBA84"
            animate={{ r: [4, 7, 4], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Bottom Graphic: Rising Customer Capacity Bars */}
      <div className="flex items-end justify-between gap-3 h-28 pt-4 px-2 border-t border-white/5">
        {[
          { height: '40%', delay: 0.1 },
          { height: '55%', delay: 0.2 },
          { height: '70%', delay: 0.3 },
          { height: '85%', delay: 0.4 },
          { height: '100%', delay: 0.5 },
        ].map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
            <div className="w-full h-full bg-[#1A1D27] rounded-[8px] flex items-end overflow-hidden p-1">
              <motion.div
                className="w-full rounded-[6px] bg-gradient-to-t from-[#8E6E3D] via-[#C7A472] to-[#E5C99E]"
                initial={{ height: 0 }}
                animate={{ height: bar.height }}
                transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   2. REVENUE GROWTH: ANIMATED PROFIT PIE / DONUT & MARGIN EXPANSION CHART
========================================================================= */
const RevenueGrowthAbstract: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] rounded-[22px] bg-[#12141A] border border-[#C7A472]/20 p-6 flex items-center justify-between shadow-2xl overflow-hidden select-none gap-4">
      {/* Left Graphic: Interactive Gold Donut / Pie chart (Margin locked vs Delivery costs) */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#1F2330"
              strokeWidth="12"
              fill="none"
            />
            {/* Base segment */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#343A4E"
              strokeWidth="12"
              strokeDasharray="238.76"
              strokeDashoffset="90"
              fill="none"
            />
            {/* Gold Realized Profit Margin Segment */}
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              stroke="#C7A472"
              strokeWidth="12"
              strokeDasharray="238.76"
              strokeDashoffset="238.76"
              strokeLinecap="round"
              fill="none"
              animate={{ strokeDashoffset: 140 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>

          {/* Center core pulse */}
          <motion.div
            className="absolute w-6 h-6 rounded-full bg-[#C7A472]/20 border border-[#C7A472]/40"
            animate={{ scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Right Graphic: Upward Revenue Growth Bars with margin lock highlight */}
      <div className="flex-1 flex items-end justify-between gap-2.5 h-32 px-1">
        {[
          { total: '45%', margin: '18%', delay: 0.1 },
          { total: '65%', margin: '28%', delay: 0.25 },
          { total: '90%', margin: '40%', delay: 0.4 },
        ].map((item, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full items-center">
            <div className="w-full bg-[#1A1D27] rounded-[8px] h-full flex flex-col justify-end p-1 overflow-hidden">
              <motion.div
                className="w-full bg-[#343A4E] rounded-b-[4px]"
                initial={{ height: 0 }}
                animate={{ height: item.total }}
                transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
              />
              <motion.div
                className="w-full bg-[#C7A472] rounded-t-[4px] -mt-1"
                initial={{ height: 0 }}
                animate={{ height: item.margin }}
                transition={{ duration: 0.9, delay: item.delay + 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   3. OPERATIONAL EXCELLENCE: CONNECTED PIPELINE & SEAMLESS AUTOMATION NODES
========================================================================= */
const OperationsAbstract: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] rounded-[22px] bg-[#12141A] border border-[#C7A472]/20 p-6 flex flex-col justify-center shadow-2xl overflow-hidden select-none">
      <div className="relative w-full h-40 flex items-center justify-between">
        {/* Connection Link 1 */}
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[28%] h-[2px] bg-[#222736]">
          <motion.div
            className="h-full bg-[#C7A472]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Connection Link 2 */}
        <div className="absolute left-[54%] top-1/2 -translate-y-1/2 w-[28%] h-[2px] bg-[#222736]">
          <motion.div
            className="h-full bg-[#C7A472]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>

        {/* Node 1: Origin Action */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-[16px] bg-[#1A1D27] border-2 border-[#C7A472] flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-5 h-5 rounded-full bg-[#C7A472] flex items-center justify-center">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#0B0C0E]"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Node 2: Synchronized Dispatch */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-[16px] bg-[#1A1D27] border-2 border-[#C7A472]/60 flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex flex-col gap-1 items-center">
            <div className="w-5 h-1.5 bg-[#C7A472] rounded-full"></div>
            <div className="w-3.5 h-1.5 bg-[#8E6E3D] rounded-full"></div>
          </div>
        </motion.div>

        {/* Node 3: Execution / Fulfillment */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-[16px] bg-[#1A1D27] border-2 border-[#C7A472] flex items-center justify-center shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="w-6 h-6 rounded-full bg-[#C7A472]/20 border border-[#C7A472] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C7A472]"></div>
          </div>
        </motion.div>
      </div>

      {/* Synchronized status bar beneath */}
      <div className="h-1.5 w-full bg-[#1A1D27] rounded-full overflow-hidden mt-2">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8E6E3D] via-[#C7A472] to-[#DFBA84]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

/* =========================================================================
   4. TEAM PRODUCTIVITY: CONNECTED TEAM MEMBERS & EXECUTION NETWORK
========================================================================= */
const TeamProductivityAbstract: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] rounded-[22px] bg-[#12141A] border border-[#C7A472]/20 p-6 flex items-center justify-center shadow-2xl overflow-hidden select-none">
      <div className="relative w-56 h-48 flex items-center justify-center">
        {/* Connecting Ring / Vector lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 190">
          <line x1="110" y1="95" x2="110" y2="28" stroke="#C7A472" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <line x1="110" y1="95" x2="35" y2="145" stroke="#C7A472" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <line x1="110" y1="95" x2="185" y2="145" stroke="#C7A472" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

          {/* Animated Connecting Pulse Rings */}
          <motion.circle
            cx="110"
            cy="95"
            r="35"
            stroke="#C7A472"
            strokeWidth="1"
            fill="none"
            animate={{ r: [20, 60], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>

        {/* Central Core Hub (Company SOP / Standard) */}
        <motion.div
          className="relative z-10 w-14 h-14 rounded-full bg-[#1A1D27] border-2 border-[#C7A472] flex items-center justify-center shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 rounded-full bg-[#C7A472] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0B0C0E]"></div>
          </div>
        </motion.div>

        {/* Satellite Member Node 1 (Top) */}
        <motion.div
          className="absolute top-2 w-10 h-10 rounded-full bg-[#1E2230] border border-[#C7A472]/80 flex items-center justify-center shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-[#8E6E3D]"></div>
        </motion.div>

        {/* Satellite Member Node 2 (Bottom Left) */}
        <motion.div
          className="absolute bottom-2 left-2 w-10 h-10 rounded-full bg-[#1E2230] border border-[#C7A472]/80 flex items-center justify-center shadow-lg"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-4 h-4 rounded-full bg-[#C7A472]"></div>
        </motion.div>

        {/* Satellite Member Node 3 (Bottom Right) */}
        <motion.div
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#1E2230] border border-[#C7A472]/80 flex items-center justify-center shadow-lg"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-4 h-4 rounded-full bg-[#DFBA84]"></div>
        </motion.div>
      </div>
    </div>
  );
};

/* =========================================================================
   5. EXECUTIVE INTELLIGENCE: ABSTRACT MULTI-DIMENSIONAL RADAR / PRISM
========================================================================= */
const ExecutiveIntelligenceAbstract: React.FC = () => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] rounded-[22px] bg-[#12141A] border border-[#C7A472]/20 p-6 flex items-center justify-center shadow-2xl overflow-hidden select-none">
      <div className="relative w-52 h-44 flex items-center justify-center">
        {/* Geometric radar grid lines */}
        <svg className="w-full h-full" viewBox="0 0 200 170">
          {/* Outer polygon */}
          <polygon
            points="100,15 185,65 185,150 15,150 15,65"
            stroke="#262B3B"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Inner polygon */}
          <polygon
            points="100,50 145,78 145,125 55,125 55,78"
            stroke="#262B3B"
            strokeWidth="1"
            fill="none"
          />

          {/* Animated Gold Performance Radar Envelope */}
          <motion.polygon
            points="100,28 170,72 155,140 38,135 30,70"
            stroke="#C7A472"
            strokeWidth="2.5"
            fill="rgba(199, 164, 114, 0.22)"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Radial axis lines */}
          <line x1="100" y1="95" x2="100" y2="15" stroke="#3A4156" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="95" x2="185" y2="65" stroke="#3A4156" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="95" x2="185" y2="150" stroke="#3A4156" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="95" x2="15" y2="150" stroke="#3A4156" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="95" x2="15" y2="65" stroke="#3A4156" strokeWidth="1" strokeDasharray="2 2" />

          {/* Core Apex Point */}
          <circle cx="100" cy="28" r="4" fill="#DFBA84" />
          <circle cx="170" cy="72" r="4" fill="#C7A472" />
          <circle cx="155" cy="140" r="4" fill="#C7A472" />
          <circle cx="38" cy="135" r="4" fill="#C7A472" />
          <circle cx="30" cy="70" r="4" fill="#8E6E3D" />
        </svg>

        {/* Center alignment pulse */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-[#C7A472]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

/* =========================================================================
   MAIN SECTION COMPONENT
========================================================================= */
export const BusinessSystemsDarkSection: React.FC<BusinessSystemsDarkSectionProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const systems: SystemData[] = [
    {
      id: 'customer-growth',
      num: '01',
      navTitle: '01 / Customer Growth',
      label: 'CUSTOMER GROWTH',
      headline: 'Turn Attention Into Customers — And Customers Into Repeat Business.',
      description: 'Connect The Entire Customer Journey, From First Enquiry To Conversion, Automated Follow-Up, Feedback And Retention.',
      steps: ['ATTRACT', 'CONVERT', 'UNDERSTAND', 'RETAIN'],
      icon: TrendingUp,
      illustration: <CustomerGrowthAbstract />
    },
    {
      id: 'revenue-growth',
      num: '02',
      navTitle: '02 / Revenue Growth',
      label: 'REVENUE GROWTH',
      headline: 'Know Where Revenue Is Created, Where It Is Lost, And Where It Can Grow.',
      description: 'Connect Sales, Dynamic Pricing, Job Costing And Profitability So The Business Can Protect Margins And Make Informed Decisions.',
      steps: ['SELL', 'MEASURE', 'PROTECT', 'GROW'],
      icon: DollarSign,
      illustration: <RevenueGrowthAbstract />
    },
    {
      id: 'operational-excellence',
      num: '03',
      navTitle: '03 / Operational Excellence',
      label: 'OPERATIONAL EXCELLENCE',
      headline: 'Make The Work Flow Smoothly Without Unnecessary Friction.',
      description: 'Connect The Operational Processes Behind Daily Delivery So Information Stays Accurate And Repetitive Administrative Work Is Eliminated.',
      steps: ['PLAN', 'EXECUTE', 'AUTOMATE', 'IMPROVE'],
      icon: Workflow,
      illustration: <OperationsAbstract />
    },
    {
      id: 'team-productivity',
      num: '04',
      navTitle: '04 / Team Productivity',
      label: 'TEAM PRODUCTIVITY',
      headline: 'Give People The Clarity And Systems To Do Their Best Work.',
      description: 'Connect Teams, Responsibilities, Information And Workflows So Staff Spend Less Time Chasing Status Updates And More Time Executing.',
      steps: ['ALIGN', 'COLLABORATE', 'EXECUTE', 'IMPROVE'],
      icon: Users,
      illustration: <TeamProductivityAbstract />
    },
    {
      id: 'executive-intelligence',
      num: '05',
      navTitle: '05 / Executive Intelligence',
      label: 'EXECUTIVE INTELLIGENCE',
      headline: 'Give Leadership A Clear Real-Time View Across The Entire Business.',
      description: 'Connect The Key Performance Indicators So Leaders Can Spot Operational Gaps Early And Make Strategic Decisions With Complete Confidence.',
      steps: ['SEE', 'UNDERSTAND', 'DECIDE', 'ACT'],
      icon: BarChart3,
      illustration: <ExecutiveIntelligenceAbstract />
    }
  ];

  // Smooth background cycle unless hovered or interacted with
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % systems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, systems.length]);

  const currentSystem = systems[activeIndex];

  return (
    <section 
      id="systems-section"
      className="bg-[#0B0C0E] text-[#F6F4F0] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans border-t border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            1. EDITORIAL HEADER & CONTEXT STATEMENT
        ========================================================================= */}
        <div className="space-y-4 border-b border-white/10 pb-10">
          <div className="text-xs font-mono font-bold text-[#C7A472] uppercase tracking-[0.2em]">
            FIVE SYSTEMS. ONE BUSINESS.
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            How Every Business Works.
          </h2>

          <p className="text-base sm:text-lg text-[#A0A3AA] leading-relaxed max-w-3xl font-normal pt-1">
            Every business runs through five connected systems — customer growth, revenue, operations, teams and leadership. Beckon connects them so the business can work as one.
          </p>
        </div>

        {/* =========================================================================
            2. STATIC-CONTAINED MASTER-DETAIL EDITORIAL LAYOUT (Zero scroll jumping)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Refined Editorial System Selector Nav (Hover or Click) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {systems.map((sys, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-[12px] text-left transition-all duration-200 cursor-pointer w-full group relative ${
                    isActive
                      ? 'bg-white text-[#0B0C0E] font-bold shadow-xl'
                      : 'bg-transparent text-[#8C8F98] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm tracking-tight font-sans">
                    {sys.navTitle}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeEditorialPill"
                      className="w-1.5 h-4 rounded-full bg-[#C7A472] shrink-0"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Area: Editorial Chapter Layout with Static Height Container */}
          <div className="lg:col-span-8 min-h-[380px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSystem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Editorial Copy Block without "System" in H1 */}
                <div className="md:col-span-7 space-y-4">
                  {/* Category Eyebrow & Number */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#C7A472] tracking-[0.2em] uppercase">
                      SYSTEM {currentSystem.num}
                    </span>
                  </div>
                  
                  {/* Clean H1/Title (No 'System' suffix) */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight font-sans">
                    {currentSystem.label}
                  </h3>

                  {/* Headline */}
                  <div className="text-base sm:text-lg font-medium text-white/90 leading-snug">
                    {currentSystem.headline}
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-sm sm:text-base text-[#A0A3AA] leading-relaxed font-normal">
                    {currentSystem.description}
                  </p>

                  {/* Connected Journey Pathway */}
                  <div className="pt-3 border-t border-white/10 flex items-center flex-wrap gap-2 text-xs font-mono font-semibold tracking-wider text-[#C7A472]">
                    {currentSystem.steps.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-2.5 py-1 rounded bg-[#171A23] border border-[#C7A472]/20 text-[#DFBA84]">
                          {step}
                        </span>
                        {idx < currentSystem.steps.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-[#636773]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Right Illustration: Pure Abstract Animated Illustration */}
                <div className="md:col-span-5 flex justify-center items-center">
                  {currentSystem.illustration}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
