import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  Settings2, 
  Zap, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

export const ConnectedSystemsVisual: React.FC = () => {
  // Mode: 'disconnected' (Silos) vs 'connected' (Beckon Ecosystem)
  const [mode, setMode] = useState<'connected' | 'disconnected'>('connected');
  const [activeNode, setActiveNode] = useState<number>(0);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  // 5 Core Beckon Systems
  const systems = [
    {
      id: 1,
      name: 'Customer Growth',
      icon: Users,
      tagline: 'Acquisition & Retention Engine',
      disconnectedStatus: 'Siloed leads, manual replies, lost inquiries',
      connectedStatus: 'Omnichannel lead capture & auto-nurture',
      metric: '+42% Lead Velocity',
      connectedDataFlow: 'Leads & booking intent push directly to revenue & schedule'
    },
    {
      id: 2,
      name: 'Revenue Growth',
      icon: TrendingUp,
      tagline: 'Margin & Monetization Control',
      disconnectedStatus: 'Delayed invoicing, untracked price leaks',
      connectedStatus: 'Live pricing, automated billing & COGS guard',
      metric: '+18% Net Realization',
      connectedDataFlow: 'Real-time sales & invoice items stream to operational staging'
    },
    {
      id: 3,
      name: 'Operational Excellence',
      icon: Settings2,
      tagline: 'Standardized Delivery & Inventory',
      disconnectedStatus: 'Manual spreadsheets, stockouts, paper logs',
      connectedStatus: 'Synchronized inventory, digital SOPs & audits',
      metric: '99.4% Order Accuracy',
      connectedDataFlow: 'Inventory usage updates labor scheduling & auto-supplier orders'
    },
    {
      id: 4,
      name: 'Team Productivity',
      icon: Zap,
      tagline: 'Capacity & Labor Alignment',
      disconnectedStatus: 'Shift confusion, double-entry admin burnout',
      connectedStatus: 'Dynamic shift sync, zero re-keying & task feeds',
      metric: '18h/wk Saved Per Manager',
      connectedDataFlow: 'Completed team logs & labor cost stream to executive flash report'
    },
    {
      id: 5,
      name: 'Executive Intelligence',
      icon: LineChart,
      tagline: 'Real-Time Leadership Visibility',
      disconnectedStatus: 'P&L reports delivered 15 days late',
      connectedStatus: 'Real-time unified P&L flash & predictive alerts',
      metric: 'Real-Time Telemetry',
      connectedDataFlow: 'Continuous performance signals optimize customer acquisition loops'
    }
  ];

  // Auto-cycle through the 5 nodes smoothly when in connected mode
  useEffect(() => {
    if (!isAutoCycling || mode !== 'connected') return;

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % systems.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoCycling, mode, systems.length]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-10">
      
      {/* State Switcher Tabs (Disconnected vs Beckon Connected) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-[#FAF8F5] p-1.5 sm:p-2 rounded-2xl border border-[#E2DED6] shadow-xs">
        
        {/* Toggle Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] rounded-xl w-full sm:w-auto">
          <button
            onClick={() => {
              setMode('disconnected');
              setIsAutoCycling(false);
            }}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-[10px] text-xs font-manrope font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mode === 'disconnected'
                ? 'bg-[#1C1E24] text-white shadow-sm'
                : 'text-[#6A6C71] hover:text-[#0F1115]'
            }`}
          >
            <AlertTriangle className={`w-3.5 h-3.5 ${mode === 'disconnected' ? 'text-[#E07A5F]' : 'text-[#8C8F98]'}`} />
            <span>Disconnected Business</span>
          </button>

          <button
            onClick={() => {
              setMode('connected');
              setIsAutoCycling(true);
            }}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-[10px] text-xs font-manrope font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mode === 'connected'
                ? 'bg-[#0B0C0E] text-[#F6F4F0] shadow-sm ring-1 ring-[#856A41]/30'
                : 'text-[#6A6C71] hover:text-[#0F1115]'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${mode === 'connected' ? 'text-[#C7A472]' : 'text-[#8C8F98]'}`} />
            <span>Connected by Beckon</span>
          </button>
        </div>

        {/* Status Indicator */}
        <div className="text-[11px] sm:text-xs font-manrope text-[#52555C] flex items-center gap-2 px-3 py-1">
          {mode === 'connected' ? (
            <>
              <span className="w-2 h-2 rounded-full bg-[#388E3C] animate-pulse" />
              <span className="font-semibold text-[#0F1115]">5 Synchronized Systems</span>
              <span className="text-[#8C8F98]">· Continuous Live Data Stream</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />
              <span className="font-semibold text-[#B33924]">Fragmented Silos</span>
              <span className="text-[#8C8F98]">· Data trapped in separate tools</span>
            </>
          )}
        </div>

      </div>

      {/* Main Interactive Stage */}
      <div className={`relative rounded-[24px] p-4 sm:p-7 transition-all duration-500 border ${
        mode === 'connected'
          ? 'bg-[#0B0C0E] text-white border-white/15 shadow-[0_20px_50px_rgba(15,17,21,0.25)]'
          : 'bg-[#14161C] text-[#F6F4F0] border-red-500/20 shadow-lg'
      }`}>
        
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#C7A472]">
            <Layers className="w-3.5 h-3.5" />
            <span>{mode === 'connected' ? 'Unified Enterprise Architecture' : 'Legacy Unconnected State'}</span>
          </div>

          <div className="text-[11px] text-[#A0A3AA] flex items-center gap-1.5 font-manrope">
            <span>Customer Growth</span>
            <ArrowRight className="w-3 h-3 text-[#C7A472]" />
            <span>Revenue</span>
            <ArrowRight className="w-3 h-3 text-[#C7A472]" />
            <span>Operations</span>
            <ArrowRight className="w-3 h-3 text-[#C7A472]" />
            <span>Team</span>
            <ArrowRight className="w-3 h-3 text-[#C7A472]" />
            <span>Intelligence</span>
          </div>
        </div>

        {/* 5 Systems Nodes Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
          {systems.map((system, idx) => {
            const Icon = system.icon;
            const isHighlighted = mode === 'connected' && activeNode === idx;
            const isConnected = mode === 'connected';

            return (
              <div
                key={system.id}
                onClick={() => {
                  setActiveNode(idx);
                  setIsAutoCycling(false);
                }}
                className={`relative p-3.5 sm:p-4 rounded-[16px] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[145px] sm:min-h-[165px] border ${
                  !isConnected
                    ? 'bg-white/[0.02] border-dashed border-red-400/30 hover:border-red-400/60'
                    : isHighlighted
                    ? 'bg-gradient-to-b from-[#1C1F28] to-[#12141A] border-[#C7A472] shadow-[0_0_25px_rgba(199,164,114,0.22)] scale-[1.02]'
                    : 'bg-white/[0.04] border-white/10 hover:border-white/25 hover:bg-white/[0.07]'
                }`}
              >
                
                {/* Node Top: Icon & Step Number */}
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-colors ${
                    !isConnected 
                      ? 'bg-red-500/10 text-red-300' 
                      : isHighlighted 
                      ? 'bg-[#C7A472] text-[#0B0C0E]' 
                      : 'bg-white/10 text-[#C7A472]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                    isHighlighted 
                      ? 'bg-[#C7A472]/20 text-[#C7A472] border border-[#C7A472]/40' 
                      : 'text-white/40'
                  }`}>
                    0{system.id}
                  </span>
                </div>

                {/* Node Body: Name & Status */}
                <div className="my-2 space-y-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white font-inter tracking-tight leading-tight">
                    {system.name}
                  </h4>
                  <p className="text-[11px] text-[#A0A3AA] line-clamp-2 leading-snug">
                    {isConnected ? system.connectedStatus : system.disconnectedStatus}
                  </p>
                </div>

                {/* Node Bottom: Indicator Badge */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                  {isConnected ? (
                    <span className="text-[#C7A472] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#388E3C]" />
                      <span>{system.metric}</span>
                    </span>
                  ) : (
                    <span className="text-red-400/90 flex items-center gap-1">
                      <AlertTriangle className="w-2.5 h-2.5" />
                      <span>Isolated</span>
                    </span>
                  )}

                  {isConnected && idx < systems.length - 1 && (
                    <ChevronRight className={`hidden md:block w-3 h-3 transition-transform ${
                      isHighlighted ? 'text-[#C7A472] translate-x-1' : 'text-white/20'
                    }`} />
                  )}
                </div>

                {/* Animated Connecting Pulse Line (Across Desktop) */}
                {isConnected && isHighlighted && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-[1px] rounded-[16px] border border-[#C7A472] pointer-events-none"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Live Synchronized Data Transmission Stream Details */}
        <div className="mt-4 p-3.5 rounded-[14px] bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
              mode === 'connected' ? 'bg-[#C7A472] animate-ping' : 'bg-red-400'
            }`} />
            <div>
              <span className="text-[#A0A3AA] text-[11px] block font-mono uppercase tracking-wider">
                {mode === 'connected' ? `Active Stream: ${systems[activeNode].name}` : 'Disconnection Impact'}
              </span>
              <p className="text-white font-medium text-xs sm:text-[13px] leading-snug">
                {mode === 'connected' 
                  ? systems[activeNode].connectedDataFlow 
                  : 'Data must be manually exported, reconciled in spreadsheets, and re-entered by staff each day.'}
              </p>
            </div>
          </div>

          {mode === 'connected' && (
            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className="text-[11px] font-mono text-[#C7A472] hover:text-white px-2.5 py-1 rounded-[8px] bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isAutoCycling ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                <span>{isAutoCycling ? 'Auto-Flowing' : 'Paused'}</span>
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
