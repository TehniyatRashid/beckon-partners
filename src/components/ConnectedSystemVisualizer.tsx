import React, { useState } from 'react';
import { 
  UserCheck, 
  Cpu, 
  TrendingUp, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  RefreshCw,
  MessageSquare,
  FileText,
  DollarSign
} from 'lucide-react';

export const ConnectedSystemVisualizer: React.FC = () => {
  const [mode, setMode] = useState<'disconnected' | 'connected'>('connected');
  const [activeNode, setActiveNode] = useState<string | null>('executive');

  const nodes = [
    {
      id: 'customer',
      title: '01. Customer Growth',
      sub: 'Phone, Web, WhatsApp, CRM',
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      disconnectedText: 'Leads trapped in voicemail & inboxes. Manual re-typing.',
      connectedText: '<60s AI instant qualification & CRM auto-entry.',
      color: 'emerald'
    },
    {
      id: 'operations',
      title: '03. Operational Excellence',
      sub: 'Dispatch, Workflows, Jobs',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      disconnectedText: 'Paper job sheets, lost tickets, delayed field dispatch.',
      connectedText: 'Automated job routing & real-time client notifications.',
      color: 'blue'
    },
    {
      id: 'revenue',
      title: '02. Revenue Growth',
      sub: 'POS, Recipe Costing, Margins',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      disconnectedText: 'Unnoticed supplier inflation & recipe margin leakage.',
      connectedText: 'Live cost-of-goods calculation & margin alerts.',
      color: 'amber'
    },
    {
      id: 'team',
      title: '04. Team Productivity',
      sub: 'Tasks, Shifts, Handovers',
      icon: <Users className="w-5 h-5 text-purple-400" />,
      disconnectedText: 'Vague task ownership, missed shift handover logs.',
      connectedText: 'Single-pane task management & manager escalations.',
      color: 'purple'
    },
    {
      id: 'executive',
      title: '05. Executive Intelligence',
      sub: 'Unified BI & Leadership View',
      icon: <BarChart3 className="w-5 h-5 text-rose-400" />,
      disconnectedText: 'End-of-month spreadsheets and guessing metrics.',
      connectedText: 'Real-time 360° visibility & automated morning briefings.',
      color: 'rose'
    }
  ];

  const logs = mode === 'connected' ? [
    { time: '13:14:02', event: '[CUSTOMER] AI Phone Receptionist answered inbound lead -> CRM job card created.' },
    { time: '13:14:05', event: '[OPERATIONS] Route dispatched to Engineer #04 -> WhatsApp client notification sent.' },
    { time: '13:14:12', event: '[REVENUE] Supplier invoice scanned -> Recipe COGS auto-updated (Margin 68.4%).' },
    { time: '13:14:18', event: '[TEAM] Shift handover completed -> Zero pending maintenance items.' },
    { time: '13:14:22', event: '[EXECUTIVE] Morning briefing compiled -> Gross profit +14.2% vs baseline.' }
  ] : [
    { time: '13:14:02', event: '⚠️ [ERROR] Call missed on office landline (No answer after 5 rings).' },
    { time: '13:14:05', event: '⚠️ [DELAY] Field worker waiting 45 mins for office staff to re-type job sheet.' },
    { time: '13:14:12', event: '⚠️ [LEAKAGE] Supplier price increase ignored in manual ledger (COGS up 8%).' },
    { time: '13:14:18', event: '⚠️ [MISCOMMUNICATION] Evening shift unaware of morning client complaint.' },
    { time: '13:14:22', event: '⚠️ [REPORTING] CEO requesting monthly financial report (3-day build delay).' }
  ];

  return (
    <section className="py-20 relative bg-[#070707] text-white border-y border-neutral-800/80 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono-tech uppercase text-neutral-400 mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Signature System Visualizer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Most Businesses Aren’t Broken.<br />
            <span className="text-neutral-400 font-normal">Their Systems Are Disconnected.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Toggle below to see how Beckon replaces fragmented, isolated software silos with one continuous operating system.
          </p>

          {/* Interactive State Toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <button
              onClick={() => setMode('disconnected')}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono-tech font-bold transition-all flex items-center gap-2 ${
                mode === 'disconnected'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-800/80 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>01. Disconnected Silos (Traditional)</span>
            </button>
            <button
              onClick={() => setMode('connected')}
              className={`px-5 py-2.5 rounded-lg text-xs font-mono-tech font-bold transition-all flex items-center gap-2 ${
                mode === 'connected'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>02. Beckon Connected System</span>
            </button>
          </div>
        </div>

        {/* Visual Canvas Diagram */}
        <div className="card-dark p-6 sm:p-10 rounded-2xl border border-neutral-800 bg-[#0C0C0C] relative shadow-2xl">
          
          {/* Status Header Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-8">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${mode === 'connected' ? 'bg-emerald-500 animate-ping' : 'bg-rose-500'}`} />
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">System Architecture Mode: </span>
                <span className={`text-xs font-mono-tech font-bold ${mode === 'connected' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {mode === 'connected' ? 'CONNECTED BUSINESS OPERATING SYSTEM' : 'DISCONNECTED SOFTWARE SILOS'}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono-tech text-neutral-500 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-neutral-400" />
              <span>Real-Time Event Stream Simulation</span>
            </div>
          </div>

          {/* Node Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                    mode === 'connected'
                      ? isSelected
                        ? 'bg-neutral-900 border-emerald-500/80 shadow-lg shadow-emerald-950/30'
                        : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      : 'bg-neutral-950/90 border-rose-900/40 opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded bg-neutral-950 border border-neutral-800">
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-mono-tech text-neutral-500">
                      {node.id.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                  <p className="text-[11px] text-neutral-400 mb-3">{node.sub}</p>

                  <div className={`p-2.5 rounded text-[11px] leading-relaxed font-mono-tech ${
                    mode === 'connected'
                      ? 'bg-emerald-950/30 text-emerald-300 border border-emerald-900/40'
                      : 'bg-rose-950/30 text-rose-300 border border-rose-900/40'
                  }`}>
                    {mode === 'connected' ? node.connectedText : node.disconnectedText}
                  </div>

                  {/* Flow Arrow for Connected Mode */}
                  {mode === 'connected' && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Flow Indicator Line */}
          {mode === 'connected' && (
            <div className="mt-8 p-4 rounded-xl bg-neutral-900/80 border border-emerald-900/40 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/80 flex items-center justify-center text-emerald-400 font-bold font-mono-tech text-xs">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono-tech">
                    ONE BUSINESS. ONE CONNECTED SYSTEM.
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Data moves automatically from Customer lead → Dispatch → Recipe Costing → Team Task → CEO Dashboard.
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono-tech text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded border border-emerald-800/60 whitespace-nowrap">
                ✓ 0 Manual Repetitive Retyping
              </div>
            </div>
          )}

          {/* Live System Log Console */}
          <div className="mt-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono-tech text-xs">
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Live System Event Audit Stream</span>
              <span className="text-neutral-400">Status: OK</span>
            </div>
            <div className="space-y-1.5">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2 text-neutral-300">
                  <span className="text-neutral-600 text-[11px]">{log.time}</span>
                  <span className={mode === 'connected' ? 'text-neutral-200' : 'text-rose-300'}>{log.event}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
