import React, { useState } from 'react';
import { RoutePath } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft,
  Utensils, 
  Receipt, 
  CalendarCheck, 
  MessageSquare, 
  Package, 
  Users, 
  ChefHat, 
  Check, 
  Sparkles,
  Zap,
  TrendingUp,
  AlertTriangle,
  ArrowDown,
  Layers,
  BarChart3,
  RefreshCw,
  PhoneCall,
  Clock,
  DollarSign
} from 'lucide-react';

interface RestaurantIndustryPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const RestaurantIndustryPage: React.FC<RestaurantIndustryPageProps> = ({ onNavigate }) => {
  const [activeSystemNode, setActiveSystemNode] = useState<'pos' | 'reservations' | 'whatsapp' | 'inventory' | 'kitchen' | 'staff'>('pos');
  const [isProblemConnected, setIsProblemConnected] = useState(false);
  const [hoveredProblemIndex, setHoveredProblemIndex] = useState<number | null>(null);
  const [architectureFlow, setArchitectureFlow] = useState<'pos' | 'reservations' | 'kitchen'>('pos');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF9F7] text-[#0F1115] font-sans selection:bg-[#E8E4DC] selection:text-[#0F1115] pt-28 pb-24">
      
      {/* Top Breadcrumb & Navigation Back */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => {
            onNavigate('/industries');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-manrope font-bold text-[#52555C] hover:text-[#856A41] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>ALL INDUSTRIES</span>
        </button>
      </div>

      {/* ==========================================
          01 — HERO SECTION
      ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Small Eyebrow Badge - Glassy */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-bronze font-manrope text-[11px] font-bold text-[#856A41] tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#856A41] animate-pulse"></span>
              <span>RESTAURANTS & F&B</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F1115] leading-[1.08] font-sans">
              Make your restaurant <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#856A41]">run better.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#52555C] leading-relaxed max-w-xl font-sans font-normal">
              Connect your POS, reservations, inventory, customer and staff systems so your team spends less time fixing problems and more time running the business.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 font-sans">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-7 py-3.5 rounded-[12px] text-xs font-bold bg-[#0B0C0E] text-[#F6F4F0] hover:bg-[#856A41] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>See how it works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-[12px] text-xs font-bold bg-white/80 backdrop-blur-md text-[#0F1115] border border-[#E2DED6] hover:bg-[#F3F1ED] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Beckon</span>
              </button>
            </div>

            {/* Quick Proof Metrics */}
            <div className="pt-8 border-t border-[#E2DED6] grid grid-cols-3 gap-4 font-manrope text-xs">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0F1115]">+4.5%</div>
                <div className="text-[11px] text-[#52555C] font-sans mt-0.5">Potential Net Margin</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#856A41]">Zero</div>
                <div className="text-[11px] text-[#52555C] font-sans mt-0.5">Missed Peak Bookings</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0F1115]">25%</div>
                <div className="text-[11px] text-[#52555C] font-sans mt-0.5">Less Food Waste</div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual: Connected Restaurant Systems Diagram (Glassy Premium Obsidian) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="p-6 sm:p-8 rounded-[26px] bg-[#12141A]/85 backdrop-blur-2xl text-[#F6F4F0] border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden font-sans">
              
              {/* Glossy Reflective Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none"></div>

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7A472] animate-pulse"></span>
                  <span className="text-xs font-manrope font-bold tracking-widest text-[#F6F4F0]">
                    CONNECTED OPERATING SYSTEM
                  </span>
                </div>
                <span className="text-[11px] font-manrope text-[#BFC2C9] glass-pill px-3 py-1 rounded-full">
                  Live Glass Sync
                </span>
              </div>

              {/* Interactive System Canvas */}
              <div className="py-8 relative z-10">
                
                {/* Central Beckon Hub Node */}
                <div className="flex justify-center mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="p-4 px-6 rounded-[16px] glass-bronze text-white border border-[#C7A472]/50 shadow-xl text-center space-y-1 relative glass-glow-bronze"
                  >
                    <div className="text-[10px] font-manrope tracking-widest text-[#C7A472] uppercase font-bold">
                      BECKON CONNECTED CORE
                    </div>
                    <div className="text-sm font-bold font-sans">Unified Restaurant Engine</div>
                    <div className="text-[10px] text-[#F6F4F0]/80 font-manrope">Real-Time Data Sync</div>
                  </motion.div>
                </div>

                {/* Surrounding 6 System Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'pos', name: 'POS', icon: Receipt, desc: 'Sales & Items' },
                    { id: 'reservations', name: 'Reservations', icon: CalendarCheck, desc: 'Tables & Guests' },
                    { id: 'whatsapp', name: 'WhatsApp', icon: MessageSquare, desc: 'Direct Messaging' },
                    { id: 'inventory', name: 'Inventory', icon: Package, desc: 'Stock & Depletion' },
                    { id: 'kitchen', name: 'Kitchen', icon: ChefHat, desc: 'Prep & Orders' },
                    { id: 'staff', name: 'Staff', icon: Users, desc: 'Shifts & Rota' },
                  ].map((node) => {
                    const isActive = activeSystemNode === node.id;
                    const Icon = node.icon;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveSystemNode(node.id as any)}
                        className={`p-3.5 rounded-[14px] text-left transition-all border cursor-pointer relative glass-card-hover ${
                          isActive 
                            ? 'bg-[#1A1D26]/90 border-[#C7A472] shadow-lg ring-1 ring-[#C7A472]/60' 
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-1.5 rounded-[8px] ${isActive ? 'bg-[#856A41] text-white' : 'bg-white/10 text-[#BFC2C9]'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C7A472]"></span>}
                        </div>
                        <div className="text-xs font-bold text-[#F6F4F0] font-sans">{node.name}</div>
                        <div className="text-[10px] text-[#BFC2C9] mt-0.5 font-manrope">{node.desc}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Flow Explanation Bar */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeSystemNode}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-6 p-4 rounded-[14px] glass-panel-dark border border-[#C7A472]/30 text-xs font-manrope text-[#F6F4F0] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#C7A472] shrink-0" />
                      <div>
                        <span className="text-[#C7A472] font-bold uppercase mr-2">
                          {activeSystemNode.toUpperCase()} FLOW:
                        </span>
                        <span className="text-[#BFC2C9]">
                          {
                            activeSystemNode === 'pos' ? 'Sales data → Recipe costs → Inventory → Margin visibility' :
                            activeSystemNode === 'reservations' ? 'Missed call → WhatsApp response → Booking → Customer record' :
                            activeSystemNode === 'whatsapp' ? 'Direct guest chat → Table confirmation → Instant upsell' :
                            activeSystemNode === 'inventory' ? 'Kitchen stock depletion → Reorder alert → Waste reduction' :
                            activeSystemNode === 'kitchen' ? 'KDS prep status → Ingredient tracking → Dish margin protection' :
                            'Clock-ins → Rota scheduling → Live labor cost ratio'
                          }
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          02 — THE PROBLEM SECTION (ISOLATION VS CONNECTED)
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#F3F1ED]/80 backdrop-blur-md border-y border-[#E2DED6]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1115] font-sans">
              Your systems shouldn't work in isolation.
            </h2>
            <p className="text-base sm:text-lg text-[#52555C] font-sans leading-relaxed">
              When your POS, reservations, inventory and staff tools don't share information, small gaps turn into lost revenue, wasted time and unnecessary work.
            </p>

            {/* Interactive State Toggle Button - Glassy */}
            <div className="inline-flex p-1 rounded-[12px] bg-white/80 backdrop-blur-md border border-[#E2DED6] shadow-xs font-manrope text-xs">
              <button
                onClick={() => setIsProblemConnected(false)}
                className={`px-4 py-2 rounded-[10px] font-bold transition-all cursor-pointer ${
                  !isProblemConnected 
                    ? 'bg-[#0B0C0E] text-white shadow-xs' 
                    : 'text-[#52555C] hover:text-[#0F1115]'
                }`}
              >
                Disconnected Systems (Default)
              </button>
              <button
                onClick={() => setIsProblemConnected(true)}
                className={`px-4 py-2 rounded-[10px] font-bold transition-all cursor-pointer ${
                  isProblemConnected 
                    ? 'bg-[#856A41] text-white shadow-xs' 
                    : 'text-[#52555C] hover:text-[#0F1115]'
                }`}
              >
                Beckon Connected System
              </button>
            </div>
          </div>

          {/* Interactive Visual Canvas */}
          <div className="p-8 sm:p-12 rounded-[26px] bg-white/80 backdrop-blur-xl border border-[#E2DED6] shadow-sm relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 font-sans">
              
              {[
                { name: 'POS', desc: 'Registers & Sales', bad: 'Isolated sales figures', good: 'Auto-depletes recipe stock' },
                { name: 'Reservations', desc: 'Table Bookings', bad: 'Unanswered peak calls', good: 'Instant WhatsApp confirmation' },
                { name: 'Inventory', desc: 'Stock & Costs', bad: 'Untracked price shifts', good: 'Real-time recipe cost sync' },
                { name: 'WhatsApp', desc: 'Guest Messages', bad: 'Manual copy-pasting', good: 'Direct booking & reminders' },
                { name: 'Staff', desc: 'Rosters & Shift', bad: 'Disconnected labor costs', good: 'Live revenue/labor ratios' }
              ].map((sys, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-[18px] border transition-all duration-300 text-left ${
                    isProblemConnected 
                      ? 'bg-[#FAF9F7]/90 border-[#856A41] shadow-xs' 
                      : 'bg-[#F3F1ED]/60 border-[#E2DED6]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-manrope text-[#856A41]">0{idx + 1}</span>
                    <span className={`w-2 h-2 rounded-full ${isProblemConnected ? 'bg-[#856A41]' : 'bg-red-400'}`}></span>
                  </div>
                  <h3 className="text-base font-bold text-[#0F1115] font-sans">{sys.name}</h3>
                  <p className="text-xs text-[#52555C] mt-0.5 mb-3 font-sans">{sys.desc}</p>
                  
                  <div className="pt-3 border-t border-[#E2DED6] text-xs font-sans">
                    {!isProblemConnected ? (
                      <span className="text-red-700 bg-red-50/80 backdrop-blur-xs px-2 py-1 rounded-[6px] inline-block font-medium">
                        ✕ {sys.bad}
                      </span>
                    ) : (
                      <span className="text-[#856A41] bg-[#856A41]/10 px-2 py-1 rounded-[6px] inline-block font-bold">
                        ✓ {sys.good}
                      </span>
                    )}
                  </div>
                </div>
              ))}

            </div>

            {/* Status Callout Footer */}
            <div className="mt-8 pt-6 border-t border-[#E2DED6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isProblemConnected ? 'bg-[#856A41]' : 'bg-red-500 animate-ping'}`}></span>
                <span className="font-bold text-[#0F1115]">
                  {isProblemConnected ? 'STATUS: SINGLE UNIFIED OPERATING ENGINE' : 'STATUS: SILOED TOOLS & DATA LEAKS'}
                </span>
              </div>
              <span className="text-[#52555C]">
                {isProblemConnected ? 'All systems synchronized continuously' : 'Click "Beckon Connected System" above to visualize sync'}
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          03 — WHERE RESTAURANTS LOSE MONEY (5 EDITORIAL ROWS)
      ========================================== */}
      <section className="py-20 md:py-28 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-manrope font-bold text-[#856A41] uppercase tracking-[0.16em]">
            WHERE RESTAURANTS LOSE TIME AND MONEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1115] font-sans">
            The problems usually hide in the gaps.
          </h2>
        </div>

        {/* 5 Clean Editorial Rows (No cards, thin dividers, pure Linear style) */}
        <div className="border-t border-[#E2DED6]">
          {[
            {
              num: "01",
              icon: PhoneCall,
              title: "Missed reservations",
              desc: "Calls come in while your team is busy. Some customers never get a response.",
              detail: "Know when stock and costs don't match"
            },
            {
              num: "02",
              icon: DollarSign,
              title: "Food costs creep up",
              desc: "Ingredient prices change, but your menu margins don't always keep up.",
              detail: "Protect dish profitability automatically"
            },
            {
              num: "03",
              icon: Package,
              title: "Stock doesn't match sales",
              desc: "Your POS says one thing. Your kitchen stock says another.",
              detail: "Reconcile theoretical vs physical depletion"
            },
            {
              num: "04",
              icon: Clock,
              title: "Too much manual work",
              desc: "Staff spend time copying information between systems.",
              detail: "Automate shift handovers and data entry"
            },
            {
              num: "05",
              icon: BarChart3,
              title: "You can't see the whole picture",
              desc: "Important numbers are spread across different tools.",
              detail: "See what is actually making you money"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredProblemIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProblemIndex(idx)}
                onMouseLeave={() => setHoveredProblemIndex(null)}
                className={`py-8 border-b border-[#E2DED6] transition-all cursor-pointer group px-4 rounded-xl ${
                  isHovered ? 'bg-[#F3F1ED]/80 backdrop-blur-md' : 'bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Icon */}
                  <div className="md:col-span-1 flex items-center gap-3">
                    <span className="text-xs font-manrope font-bold text-[#856A41]">{item.num}</span>
                    <div className={`p-2 rounded-[8px] transition-colors ${isHovered ? 'bg-[#856A41] text-white' : 'bg-[#E8E4DC] text-[#0F1115]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-bold text-[#0F1115] font-sans group-hover:text-[#856A41] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Short Explanation */}
                  <div className="md:col-span-5">
                    <p className="text-sm text-[#52555C] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Micro Interaction Highlight */}
                  <div className="md:col-span-2 text-right hidden md:block font-manrope text-xs text-[#856A41] font-bold">
                    {item.detail}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ==========================================
          04 — HOW BECKON CONNECTS IT (ARCHITECTURE VISUAL)
      ========================================== */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#0B0C0E] text-white border-y border-white/10 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-manrope font-bold text-[#C7A472] uppercase tracking-[0.16em]">
              CONNECTED SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F6F4F0] font-sans">
              One connected system behind your restaurant.
            </h2>
            <p className="text-base sm:text-lg text-[#BFC2C9] font-sans">
              We connect the tools you already use so information moves where it needs to go.
            </p>
          </div>

          {/* Interactive Flow Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-manrope text-xs">
            <span className="text-[#BFC2C9] mr-2">Select Glass Flow:</span>
            {[
              { id: 'pos', label: 'POS & Sales Flow' },
              { id: 'reservations', label: 'Reservations & WhatsApp Flow' },
              { id: 'kitchen', label: 'Kitchen & Recipe Flow' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setArchitectureFlow(tab.id as any)}
                className={`px-4 py-2 rounded-[10px] font-bold transition-all cursor-pointer ${
                  architectureFlow === tab.id
                    ? 'bg-[#856A41] text-white shadow-md'
                    : 'glass-pill text-[#BFC2C9] hover:bg-white/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Architectural Diagram Box - Dark Glassy */}
          <div className="p-8 sm:p-12 rounded-[26px] bg-[#12141A]/85 backdrop-blur-2xl border border-white/12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden font-sans">
            
            <div className="text-center font-manrope text-xs font-bold text-[#C7A472] uppercase tracking-widest mb-8">
              YOUR RESTAURANT OPERATING ARCHITECTURE
            </div>

            {/* Architecture Hierarchy */}
            <div className="space-y-8">
              
              {/* Top Layer: Input Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className={`p-4 rounded-[14px] border transition-all ${architectureFlow === 'pos' ? 'glass-bronze' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">POS</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Registers & Orders</div>
                </div>

                <div className={`p-4 rounded-[14px] border transition-all ${architectureFlow === 'reservations' ? 'glass-bronze' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">RESERVATIONS</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Bookings & Phone Calls</div>
                </div>

                <div className={`p-4 rounded-[14px] border transition-all ${architectureFlow === 'reservations' ? 'glass-bronze' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">WHATSAPP</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Customer Messaging</div>
                </div>
              </div>

              {/* Middle Flow Arrow */}
              <div className="flex justify-center text-[#C7A472]">
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </div>

              {/* Central Beckon Hub */}
              <div className="p-6 rounded-[18px] glass-bronze text-white text-center border border-[#C7A472]/50 shadow-xl max-w-md mx-auto glass-glow-bronze">
                <div className="text-xs font-manrope font-bold tracking-widest text-[#F6F4F0]">BECKON SYSTEM</div>
                <p className="text-xs text-[#F6F4F0]/90 mt-1 font-sans">Automated Data Routing & Real-Time Sync</p>
              </div>

              {/* Bottom Flow Arrow */}
              <div className="flex justify-center text-[#C7A472]">
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </div>

              {/* Bottom Layer: Functional Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className={`p-4 rounded-[14px] border transition-all ${architectureFlow === 'kitchen' || architectureFlow === 'pos' ? 'glass-bronze' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">COSTS</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Recipe Margins & Stock</div>
                </div>

                <div className={`p-4 rounded-[14px] border transition-all ${architectureFlow === 'reservations' ? 'glass-bronze' : 'bg-white/5 border-white/10'}`}>
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">CUSTOMERS</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Captured Bookings & VIPs</div>
                </div>

                <div className="p-4 rounded-[14px] bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-[#F6F4F0] font-manrope">TEAM</div>
                  <div className="text-[11px] text-[#BFC2C9] mt-1 font-sans">Shift Handover & Rotas</div>
                </div>
              </div>

            </div>

            {/* Flow Banner Summary */}
            <div className="mt-8 pt-6 border-t border-white/10 p-4 rounded-[14px] bg-black/40 backdrop-blur-md text-xs font-manrope text-[#F6F4F0] flex items-center justify-between">
              <div>
                <span className="text-[#C7A472] font-bold">ACTIVE ROUTE: </span>
                {
                  architectureFlow === 'pos' ? 'Sales data → Recipe costs → Inventory → Margin visibility' :
                  architectureFlow === 'reservations' ? 'Missed call → WhatsApp response → Booking → Customer record' :
                  'Kitchen stock → Depletion → Reorder alert → Waste control'
                }
              </div>
              <span className="text-[#BFC2C9] hidden sm:inline">Connected Live</span>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          05 — WHAT CHANGES (BENCHMARK METRICS)
      ========================================== */}
      <section className="py-20 md:py-28 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E2DED6]">
        
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-manrope font-bold text-[#856A41] uppercase tracking-[0.16em]">
            MEASURABLE OUTCOMES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1115] font-sans">
            Better systems. Better numbers.
          </h2>
        </div>

        {/* Horizontal Editorial Metric Rows (Linear Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E2DED6]">
          
          <div className="pt-6 md:pt-0 md:pr-8 space-y-3">
            <div className="text-5xl sm:text-6xl font-extrabold text-[#0F1115] font-manrope tracking-tight">
              +4.5%
            </div>
            <div className="text-base font-bold text-[#0F1115] font-sans">
              Potential margin improvement
            </div>
            <p className="text-xs sm:text-sm text-[#52555C] leading-relaxed font-sans">
              Better recipe costing and less waste. Know when stock and costs don't match.
            </p>
          </div>

          <div className="pt-6 md:pt-0 md:px-8 space-y-3">
            <div className="text-5xl sm:text-6xl font-extrabold text-[#856A41] font-manrope tracking-tight">
              0
            </div>
            <div className="text-base font-bold text-[#0F1115] font-sans">
              Missed peak-time bookings
            </div>
            <p className="text-xs sm:text-sm text-[#52555C] leading-relaxed font-sans">
              Automated reservation handling keeps customers moving even when your team is busy.
            </p>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-3">
            <div className="text-5xl sm:text-6xl font-extrabold text-[#0F1115] font-manrope tracking-tight">
              25%
            </div>
            <div className="text-base font-bold text-[#0F1115] font-sans">
              Less food waste
            </div>
            <p className="text-xs sm:text-sm text-[#52555C] leading-relaxed font-sans">
              Better tracking between sales, recipes and stock across all kitchen stations.
            </p>
          </div>

        </div>

      </section>

      {/* ==========================================
          06 — REAL BUSINESS EXAMPLE (CASE STUDY JOURNEY)
      ========================================== */}
      <section className="py-20 md:py-28 bg-[#F3F1ED]/80 backdrop-blur-md border-b border-[#E2DED6]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="text-xs font-manrope font-bold text-[#856A41] uppercase tracking-[0.16em]">
              PROVEN IN PRACTICE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F1115] font-sans">
              Four locations. One connected system.
            </h2>
            <p className="text-base sm:text-lg text-[#52555C] font-sans leading-relaxed">
              A multi-location restaurant group connected its POS, recipe costing, inventory and WhatsApp booking systems.
            </p>
          </div>

          {/* Visual Step-by-Step Journey Card - Glassy Obsidian */}
          <div className="p-8 sm:p-12 rounded-[26px] bg-[#12141A]/90 backdrop-blur-2xl text-white border border-white/12 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left font-sans">
              
              <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-manrope text-[#C7A472]">STEP 01</div>
                <div className="text-lg font-bold text-[#F6F4F0] font-sans">4 Locations</div>
                <p className="text-xs text-[#BFC2C9]">Siloed POS & paper bookings</p>
              </div>

              <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-manrope text-[#C7A472]">STEP 02</div>
                <div className="text-lg font-bold text-[#F6F4F0] font-sans">Connected Systems</div>
                <p className="text-xs text-[#BFC2C9]">POS + Recipe Costing + WhatsApp</p>
              </div>

              <div className="p-5 rounded-[16px] bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-manrope text-[#C7A472]">STEP 03</div>
                <div className="text-lg font-bold text-[#F6F4F0] font-sans">24/7 WhatsApp Booking</div>
                <p className="text-xs text-[#BFC2C9]">No missed inquiries during service</p>
              </div>

              <div className="p-6 rounded-[16px] glass-bronze text-white space-y-1 border border-[#C7A472]/50 shadow-xl glass-glow-bronze">
                <div className="text-xs font-manrope text-[#F6F4F0]">MONTHLY OUTCOME</div>
                <div className="text-2xl font-bold font-manrope">$18,000/mo</div>
                <p className="text-xs text-[#F6F4F0]">additional reservations captured</p>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
              <span className="text-xs text-[#BFC2C9]">
                Full system deployment completed in 6 weeks without service disruption.
              </span>
              <button
                onClick={() => {
                  onNavigate('/assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-[12px] bg-white text-[#0B0C0E] hover:bg-[#C7A472] hover:text-white font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer font-manrope"
              >
                <span>Start a Business Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          07 — THE BIG IDEA (STATEMENT)
      ========================================== */}
      <section className="py-24 md:py-36 bg-[#0B0C0E] text-[#F6F4F0] text-center relative overflow-hidden border-b border-white/10">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 font-sans">
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F4F0] leading-tight">
            Your restaurant doesn't need more software.
          </h2>

          <p className="text-2xl sm:text-4xl font-normal italic text-[#C7A472]">
            It needs the systems you already have to work together.
          </p>

        </div>

      </section>

      {/* ==========================================
          08 — CONSULTANCY CTA
      ========================================== */}
      <section className="py-24 md:py-32 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-bronze text-xs font-manrope font-bold text-[#856A41]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SYSTEM ASSESSMENT & ADVISORY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0F1115] font-sans">
            Find what's disconnected.
          </h2>

          <p className="text-base sm:text-lg text-[#52555C] leading-relaxed max-w-2xl mx-auto font-sans">
            We'll look at how your restaurant currently handles customers, operations, data and technology — and show you where the biggest gaps are.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
            <button
              onClick={() => {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-[12px] text-xs sm:text-sm font-bold bg-[#0B0C0E] text-[#F6F4F0] hover:bg-[#856A41] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-manrope"
            >
              <span>Start a Business Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-[12px] text-xs sm:text-sm font-bold border border-[#E2DED6] bg-white/80 backdrop-blur-md text-[#0F1115] hover:bg-[#F3F1ED] transition-all cursor-pointer font-manrope"
            >
              <span>Talk to an Industry Specialist</span>
            </button>
          </div>

        </div>

      </section>

    </div>
  );
};
