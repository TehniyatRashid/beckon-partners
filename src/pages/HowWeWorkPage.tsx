import React, { useState } from 'react';
import { RoutePath } from '../types';
import { motion } from 'motion/react';
import { 
  Search, 
  Layers, 
  Workflow, 
  Sliders, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Database, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  UserCheck 
} from 'lucide-react';

interface HowWeWorkPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeSystemTab, setActiveSystemTab] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Discover & Map',
      subtitle: 'Weeks 1–2 · Bottleneck Audit',
      desc: 'We follow the work through your business as it happens. We shadow teams, audit spreadsheet handoffs, identify data drop-offs, and measure exact dollar costs of manual tasks.',
      output: 'Time & Margin Leakage Map with hard dollar ROI projections.',
      commitment: '2 hours shadowing per operational lead; zero disruption to daily trade.',
      icon: Search
    },
    {
      num: '02',
      title: 'Architect & Design',
      subtitle: 'Weeks 2–4 · Blueprint Sign-Off',
      desc: 'We draw the entire system before writing code. We define what happens at every handoff, what triggers an event, and what "done" means for every team and software API.',
      output: 'Complete Visual Data Flow Architecture & API Integration Schema.',
      commitment: '60-minute executive review and blueprint sign-off session.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Connect & Build',
      subtitle: 'Weeks 4–8 · Parallel Run Validation',
      desc: 'We build the middleware connections and join your software tools. We run the new system alongside your old way until your team trusts it 100% with zero lost records.',
      output: 'Live Connected Middleware Layer with real-time sync & error logging.',
      commitment: 'Parallel verification testing with key system operators.',
      icon: Workflow
    },
    {
      num: '04',
      title: 'Optimise & Automate',
      subtitle: 'Ongoing · SLA Verification',
      desc: 'Routine manual steps are automated. Inbound phone and WhatsApp requests are handled instantly, and CRM alerts notify managers before issues escalate.',
      output: 'Monthly Operational SLA Report comparing actual speed vs baseline.',
      commitment: '30-minute monthly performance sync with Beckon architects.',
      icon: Sliders
    },
    {
      num: '05',
      title: 'Scale & Expand',
      subtitle: 'Quarterly · Portfolio Rollout',
      desc: 'Once one branch, team, or service line runs cleanly, the system effortlessly extends to your next depot, office, or acquisition without proportional headcount.',
      output: 'Replicable Site Expansion Playbook & Centralized Executive Dashboard.',
      commitment: 'Quarterly strategic roadmap alignment.',
      icon: TrendingUp
    }
  ];

  const connectedSystems = [
    {
      id: 'customer-intake',
      title: 'Customer & Intake Architecture',
      tagline: 'Zero missed enquiries, instant multi-channel response',
      description: 'Connects inbound calls, website forms, WhatsApp messages, and quote requests into one instant triage pipeline.',
      icon: UserCheck,
      keyFeatures: [
        'Instant 24/7 AI call & message qualification',
        'Direct CRM lead creation with enriched company data',
        'Automatic calendar scheduling and reminder nudges',
        'Missed-call recovery via instant WhatsApp follow-up'
      ]
    },
    {
      id: 'revenue-pipeline',
      title: 'Revenue & Pipeline Intelligence',
      tagline: 'Track every quote, proposal, and deal without chasing',
      description: 'Bridges sales conversations with live margins, dynamic proposal generation, and automated client follow-ups.',
      icon: TrendingUp,
      keyFeatures: [
        'Real-time deal margin calculation based on cost data',
        'Automated document & digital signature tracking',
        'WhatsApp engagement triggers when client views proposal',
        'Pipeline stage velocity & slippage alerts'
      ]
    },
    {
      id: 'operational-middleware',
      title: 'Operational & Middleware Sync',
      tagline: 'Eliminate duplicate data entry across all your tools',
      description: 'A custom, bidirectional sync engine connecting your CRM, accounting, inventory, and field software.',
      icon: Cpu,
      keyFeatures: [
        'Sub-second bidirectional sync across QuickBooks, Xero, Zoho, POS',
        'Automated reconciliation between invoices and bank deposits',
        'Centralized schema ensuring single source of truth',
        'Automated exception alerts for mismatched data'
      ]
    },
    {
      id: 'team-productivity',
      title: 'Team Productivity & Dispatch',
      tagline: 'Clear accountability and task handoffs across departments',
      description: 'Synchronizes project management, technician dispatching, shift scheduling, and job completion verification.',
      icon: Users,
      keyFeatures: [
        'Automated job ticket generation from approved quotes',
        'GPS-aware route and engineer capacity scheduling',
        'Digital proof of delivery (POD) & mobile sign-offs',
        'Real-time labor utilization & overtime tracking'
      ]
    },
    {
      id: 'executive-bi',
      title: 'Executive BI & Unit Economics',
      tagline: 'Live business vitals without waiting for monthly spreadsheets',
      description: 'Synthesizes revenue, cashflow, payroll, inventory, and margin metrics into an always-on executive cockpit.',
      icon: BarChart3,
      keyFeatures: [
        'Live consolidated P&L and cash runway indicators',
        'Product & service line gross margin breakdowns',
        'Automated morning executive summary via Slack/WhatsApp',
        'Multi-location benchmark comparison in one view'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5] text-[#0F1115] min-h-screen font-sans selection:bg-[#E8E4DC] selection:text-[#0F1115]">
      
      {/* =========================================================================
          01 — HERO HEADER
      ========================================================================= */}
      <section className="pt-8 sm:pt-14 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DC]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-[11px] font-mono font-bold text-[#856A41] uppercase tracking-[0.2em]">
            <Zap className="w-3.5 h-3.5 text-[#856A41]" />
            <span>DISCIPLINED TRANSFORMATION & ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0F1115] leading-[1.06]">
            How We Build <br />
            <span className="text-[#856A41]">Connected Systems.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#52555C] max-w-2xl mx-auto leading-relaxed">
            We de-risk business transformation through a proven 5-step engineering methodology that connects your existing tools, data, and workflows into one unified operating engine.
          </p>
        </div>
      </section>

      {/* =========================================================================
          02 — 5-STEP METHODOLOGY INTERACTIVE BLUEPRINT
      ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#856A41]">
                THE 5-STEP ROADMAP
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1115]">
                From Bottleneck Audit to Scalable Execution
              </h2>
            </div>
            <span className="text-xs font-mono text-[#856A41] font-bold bg-[#FAF6EB] border border-[#E8DFCA] px-3.5 py-1.5 rounded-full w-fit">
              ZERO OPERATIONAL DOWNTIME
            </span>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-2 bg-[#EFEBE3] rounded-[18px] border border-[#E2DED6]">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 sm:p-4 rounded-[14px] text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'bg-white text-[#0F1115] shadow-md border border-[#E2DED6]' 
                      : 'text-[#52555C] hover:text-[#0F1115] hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1">
                    <span className={isActive ? 'text-[#856A41]' : 'text-[#8C8F98]'}>{s.num}</span>
                    <span className="text-[10px] opacity-70 hidden sm:inline">STEP</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-[24px] bg-white border border-[#E2DED6] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[14px] bg-[#FAF6EB] border border-[#E8DFCA] flex items-center justify-center text-[#856A41]">
                  {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#856A41] uppercase tracking-wider">
                    {steps[activeStep].subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-[#0F1115] tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#52555C] leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="p-4 rounded-[14px] bg-[#FAF8F5] border border-[#E8E4DC] space-y-1">
                  <div className="text-[10px] font-bold text-[#856A41] uppercase">KEY DELIVERABLE</div>
                  <div className="text-[#0F1115] font-sans font-medium">{steps[activeStep].output}</div>
                </div>
                <div className="p-4 rounded-[14px] bg-[#FAF8F5] border border-[#E8E4DC] space-y-1">
                  <div className="text-[10px] font-bold text-[#52555C] uppercase">CLIENT TIME COMMITMENT</div>
                  <div className="text-[#0F1115] font-sans font-medium">{steps[activeStep].commitment}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-[20px] bg-[#0B0C0E] text-white space-y-4 shadow-xl border border-white/10">
              <div className="text-[11px] font-mono text-[#C7A472] uppercase font-bold tracking-widest">
                GUARANTEED OUTCOME
              </div>
              <div className="text-2xl font-bold font-sans">
                Measurable ROI &amp; 100% Team Clarity
              </div>
              <p className="text-xs text-[#8C8F98] leading-relaxed">
                Every phase must prove its return on investment before we deploy the next module. No guesswork, no endless consultancy scope creep.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#C7A472]">
                <span>Stage {steps[activeStep].num} of 05</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          03 — THE CONNECTED SYSTEMS MATRIX (OBSIDIAN DARK SECTION)
      ========================================================================= */}
      <section className="bg-[#0B0C0E] text-[#F6F4F0] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C7A472]">
              THE 5 CONNECTED PILLARS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Architecture Behind a Well-Run Business
            </h2>
            <p className="text-sm sm:text-base text-[#8C8F98] leading-relaxed">
              We design and connect five core operating systems so information flows automatically between sales, operations, finance, and management.
            </p>
          </div>

          {/* System Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {connectedSystems.map((sys, idx) => (
              <button
                key={sys.id}
                onClick={() => setActiveSystemTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeSystemTab === idx
                    ? 'bg-[#C7A472] text-[#0B0C0E] shadow-md font-bold'
                    : 'bg-[#161820] text-[#8C8F98] hover:text-white border border-white/10'
                }`}
              >
                0{idx + 1} · {sys.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active System Showcase Card */}
          <div className="p-8 sm:p-12 rounded-[24px] bg-[#12141C] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#C7A472] font-bold uppercase tracking-wider">
                  SYSTEM 0{activeSystemTab + 1} ARCHITECTURE
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {connectedSystems[activeSystemTab].title}
                </h3>
                <p className="text-sm sm:text-base text-[#C7A472] font-medium">
                  {connectedSystems[activeSystemTab].tagline}
                </p>
              </div>

              <p className="text-sm text-[#A0A3AA] leading-relaxed">
                {connectedSystems[activeSystemTab].description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  CORE CONNECTED CAPABILITIES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {connectedSystems[activeSystemTab].keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#D5D7DD]">
                      <Check className="w-4 h-4 text-[#C7A472] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-[20px] bg-[#0B0C0E] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#C7A472]">
                <span>INTEGRATION STATUS</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C7A472] animate-pulse" />
                  REAL-TIME SYNC
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#161820] text-[#A0A3AA] flex justify-between">
                  <span>Data Ingestion Latency</span>
                  <strong className="text-white">&lt; 14 ms</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-[#161820] text-[#A0A3AA] flex justify-between">
                  <span>Webhook Error Rate</span>
                  <strong className="text-[#C7A472]">0.00%</strong>
                </div>
                <div className="p-2.5 rounded-lg bg-[#161820] text-[#A0A3AA] flex justify-between">
                  <span>Reconciliation Model</span>
                  <strong className="text-white">Continuous</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('/assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-white text-[#0B0C0E] hover:bg-[#C7A472] transition-colors text-xs font-bold font-sans flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Audit This System For Your Firm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          04 — FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-14 rounded-[26px] bg-[#0B0C0E] text-[#F6F4F0] text-center space-y-6 shadow-2xl border border-white/10">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C7A472]">
            START YOUR SYSTEM AUDIT
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Connect Your Business Systems?
          </h2>

          <p className="text-sm sm:text-base text-[#8C8F98] max-w-xl mx-auto leading-relaxed">
            Take our 5-minute Connected Systems Assessment to discover where your business is losing time, revenue, and customer momentum.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold bg-white text-[#0B0C0E] hover:bg-[#C7A472] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start Business Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
