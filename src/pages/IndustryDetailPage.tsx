import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoutePath } from '../types';
import { EDITORIAL_INDUSTRIES, EditorialIndustryData } from '../data/editorialIndustriesData';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { usePageScrollTriggers } from '../hooks/useGsapScrollTrigger';

interface IndustryDetailPageProps {
  industrySlug: string;
  onNavigate: (route: RoutePath) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industrySlug,
  onNavigate
}) => {
  const containerRef = usePageScrollTriggers();
  // Normalize slug and fallback to restaurants if not found
  const data: EditorialIndustryData = EDITORIAL_INDUSTRIES[industrySlug] || EDITORIAL_INDUSTRIES.restaurants;

  // State for the Abstract Connected-System Visual (Phase: Disconnected -> Aligned -> Connected)
  const [activeVisualPhase, setActiveVisualPhase] = useState<'disconnected' | 'aligned' | 'connected'>('connected');

  // Hover state for Five Systems editorial index
  const [hoveredSystemIndex, setHoveredSystemIndex] = useState<number | null>(null);

  const fiveSystemNodes = [
    { id: 'customer', label: 'Customer', desc: 'Acquisition & Retention' },
    { id: 'revenue', label: 'Revenue', desc: 'Pricing & Cash Margins' },
    { id: 'operations', label: 'Operations', desc: 'Fulfillment & Logistics' },
    { id: 'team', label: 'Team', desc: 'Workflows & Communication' },
    { id: 'leadership', label: 'Leadership', desc: 'Clarity & Decisions' },
  ];

  return (
    <div 
      ref={containerRef}
      className="bg-[#FAF8F5] text-[#0F1115] min-h-screen selection:bg-[#E8E4DC] selection:text-[#0F1115] font-sans"
    >
      
      {/* =========================================================================
          01 — HERO (Editorial Opening Spread, Large Typography + 1 Strong Image)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#856A41] block">
              {data.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-8 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#0F1115] leading-[1.08] font-inter">
              <span className="font-semibold block">{data.heroHeadline.line1}</span>
              <span className="text-[#52555C] block font-light">{data.heroHeadline.line2}</span>
            </h1>
          </motion.div>

          {/* Supporting Copy & Primary Action */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16"
          >
            <div className="lg:col-span-8">
              <p className="text-lg sm:text-xl text-[#3A3D45] leading-relaxed font-normal max-w-3xl">
                {data.heroDescription}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <button
                onClick={() => {
                  onNavigate('/assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0F1115] text-[#FAF8F5] text-xs font-manrope font-semibold tracking-widest uppercase rounded-[8px] hover:bg-[#2A2D35] transition-colors cursor-pointer border border-[#0F1115]"
              >
                Start Your Business Assessment →
              </button>
              <button
                onClick={() => {
                  onNavigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-manrope font-medium tracking-wider text-[#52555C] hover:text-[#0F1115] transition-colors inline-flex items-center gap-1 cursor-pointer pt-1"
              >
                Explore About Beckon →
              </button>
            </div>
          </motion.div>

          {/* Single High-Contrast Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[14px] overflow-hidden bg-[#1A1C20] border border-[#0F1115]/10"
          >
            <img
              src={data.heroImage}
              alt={data.heroImageAlt}
              className="w-full h-full object-cover grayscale contrast-115 opacity-90 transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </motion.section>


      {/* =========================================================================
          02 — INDUSTRY REALITY (Editorial Numbered List, Thin Dividers, No Cards)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow & Section Heading */}
          <div className="mb-14 sm:mb-18 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#856A41] block mb-3">
              {data.realityEyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
              <span className="font-semibold block">{data.realityHeadline}</span>
            </h2>
          </div>

          {/* Clean Editorial List: 01, 02, 03, 04 */}
          <div className="border-t border-[#0F1115]/15">
            {data.bottlenecks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-8 sm:py-10 border-b border-[#0F1115]/15 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group"
              >
                {/* Large Number */}
                <div className="md:col-span-2">
                  <span className="text-sm sm:text-base font-manrope font-semibold tracking-widest text-[#8C8F98] group-hover:text-[#0F1115] transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0F1115] tracking-tight font-inter">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-base sm:text-lg text-[#52555C] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          03 — THE BECKON APPROACH (Dark Minimal Section with Abstract Connected Visual)
          Disconnected → Aligned → Connected
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0B0C0E] text-[#FAF8F5] border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Eyebrow & Title */}
          <div className="mb-16 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#C7A472] block mb-3">
              THE BECKON APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight mb-6 font-inter">
              <span className="font-semibold block">One Business.</span>
              <span className="text-[#8C8F98] block font-light">Many Moving Parts.</span>
            </h2>
            <p className="text-base sm:text-xl text-[#BFC2C9] font-normal leading-relaxed max-w-2xl">
              Beckon Connects The Systems Behind Customers, Revenue, Operations, Teams And Leadership — Creating One Clearer Way For The Business To Run.
            </p>
          </div>

          {/* Abstract Connected-System Visual Composition */}
          <div className="p-8 sm:p-12 rounded-[16px] bg-[#121418] border border-white/10">
            
            {/* Visual Phase Selector (Interactive State: Disconnected -> Aligned -> Connected) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
              <div className="text-xs font-manrope uppercase tracking-widest text-[#8C8F98]">
                System Architecture State
              </div>
              <div className="inline-flex rounded-full bg-white/5 p-1 border border-white/10">
                {(['disconnected', 'aligned', 'connected'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActiveVisualPhase(phase)}
                    className={`px-4 py-1.5 rounded-full text-xs font-manrope capitalize tracking-wider transition-all cursor-pointer ${
                      activeVisualPhase === phase
                        ? 'bg-white text-[#0B0C0E] font-bold shadow-sm'
                        : 'text-[#8C8F98] hover:text-white font-medium'
                    }`}
                  >
                    {phase}
                  </button>
                ))}
              </div>
            </div>

            {/* Minimalist Architectural Abstract Visual */}
            <div className="relative py-8 sm:py-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
                {fiveSystemNodes.map((node, i) => {
                  return (
                    <motion.div
                      key={node.id}
                      animate={{
                        y: activeVisualPhase === 'disconnected' ? (i % 2 === 0 ? -12 : 12) : 0,
                        opacity: activeVisualPhase === 'disconnected' ? 0.65 : 1,
                      }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className={`p-6 rounded-[12px] border transition-all ${
                        activeVisualPhase === 'connected'
                          ? 'bg-white/[0.04] border-white/30 text-white'
                          : activeVisualPhase === 'aligned'
                          ? 'bg-white/[0.02] border-white/20 text-[#D1D4DC]'
                          : 'bg-transparent border-dashed border-white/15 text-[#8C8F98]'
                      }`}
                    >
                      <div className="text-[10px] font-manrope font-semibold tracking-widest uppercase text-[#C7A472] mb-3">
                        0{i + 1}
                      </div>
                      <div className="text-base sm:text-lg font-semibold tracking-tight mb-1 font-inter text-white">
                        {node.label}
                      </div>
                      <div className="text-xs text-[#8C8F98] font-normal">
                        {node.desc}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connecting Vector Lines in Connected / Aligned Phase */}
              <AnimatePresence>
                {activeVisualPhase !== 'disconnected' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Architecture Caption */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-manrope text-[#8C8F98]">
              <span>Customer → Revenue → Operations → Team → Leadership</span>
              <span className="text-white/80">
                {activeVisualPhase === 'connected'
                  ? 'Active State: Synchronized Operational Flow'
                  : activeVisualPhase === 'aligned'
                  ? 'Transition State: Structured Workflow Definitions'
                  : 'Current Reality: Independent, Siloed Applications'}
              </span>
            </div>

          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          04 — WHAT CHANGES (From Disconnected to Designed — Clean Editorial Layout)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow & Section Heading */}
          <div className="mb-14 sm:mb-18 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#856A41] block mb-3">
              THE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
              <span className="font-semibold block">From Disconnected</span>
              <span className="text-[#52555C] block font-light">To Designed.</span>
            </h2>
          </div>

          {/* Simple Editorial Comparison: Typography + Whitespace + Directional Line */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Left: BEFORE */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#0F1115]/15 pb-4">
                <span className="text-xs font-manrope font-semibold tracking-[0.2em] uppercase text-[#8C8F98] block">
                  BEFORE
                </span>
                <span className="text-xl font-medium text-[#52555C] tracking-tight mt-1 block font-inter">
                  Fragmented & Manual
                </span>
              </div>
              <ul className="space-y-4 text-base text-[#52555C] leading-relaxed">
                {data.beforeItems.map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span className="text-xs text-[#8C8F98] font-manrope">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle: Subtle Directional Flow Indicator */}
            <div className="hidden lg:flex lg:col-span-2 items-center justify-center pt-16">
              <div className="w-10 h-10 rounded-full border border-[#0F1115]/15 flex items-center justify-center text-[#52555C]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex lg:hidden items-center justify-center py-2">
              <div className="w-8 h-8 rounded-full border border-[#0F1115]/15 flex items-center justify-center text-[#52555C]">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Right: WITH BECKON */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#0F1115] pb-4">
                <span className="text-xs font-manrope font-semibold tracking-[0.2em] uppercase text-[#0F1115] block">
                  WITH BECKON
                </span>
                <span className="text-xl font-semibold text-[#0F1115] tracking-tight mt-1 block font-inter">
                  Connected & Controlled
                </span>
              </div>
              <ul className="space-y-4 text-base text-[#0F1115] font-medium leading-relaxed">
                {data.afterItems.map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span className="text-xs text-[#0F1115] font-manrope">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          05 — FIVE SYSTEMS APPLIED TO THE INDUSTRY (Vertical Editorial Index, No Cards)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow & Heading */}
          <div className="mb-14 sm:mb-18 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#856A41] block mb-3">
              {data.fiveSystemsEyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
              <span className="font-semibold block">{data.fiveSystemsHeadline.line1}</span>
              <span className="text-[#52555C] block font-light">{data.fiveSystemsHeadline.line2}</span>
            </h2>
          </div>

          {/* Vertical Editorial Index */}
          <div className="border-t border-[#0F1115]/15">
            {data.systems.map((sys, idx) => {
              const isHovered = hoveredSystemIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredSystemIndex(idx)}
                  onMouseLeave={() => setHoveredSystemIndex(null)}
                  className="border-b border-[#0F1115]/15 py-8 sm:py-10 transition-colors group cursor-default"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                    
                    {/* Index Number */}
                    <div className="md:col-span-2">
                      <span className="text-sm sm:text-base font-manrope font-semibold tracking-widest text-[#8C8F98] group-hover:text-[#0F1115] transition-colors">
                        {sys.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-all font-inter ${
                          isHovered ? 'text-[#0F1115] translate-x-1' : 'text-[#0F1115]'
                        }`}>
                          {sys.title}
                        </h3>
                        <ArrowRight className={`w-4 h-4 text-[#0F1115] transition-all opacity-0 group-hover:opacity-100 ${
                          isHovered ? 'translate-x-1' : ''
                        }`} />
                      </div>
                    </div>

                    {/* One Short Sentence Description */}
                    <div className="md:col-span-6">
                      <p className="text-base sm:text-lg text-[#52555C] font-normal leading-relaxed">
                        {sys.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          06 — LARGE IMAGE / VISUAL PAUSE (One Strong Editorial Image)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[14px] overflow-hidden bg-[#1A1C20] border border-[#0F1115]/10">
            <img
              src={data.pauseImage}
              alt={data.pauseImageAlt}
              className="w-full h-full object-cover grayscale contrast-115 opacity-90 transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.section>


      {/* =========================================================================
          06.5 — CAN'T FIND YOUR INDUSTRY NOTICE & CUSTOM ASSESSMENT PROMPT
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#F5F2EC]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-[20px] bg-white border border-[#E4DFD5] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2.5 max-w-2xl">
              <span className="text-[11px] font-manrope font-bold uppercase tracking-[0.24em] text-[#856A41] block">
                SPECIALIZED &amp; HYBRID BUSINESSES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1115] font-inter">
                Can't find your specific industry?
              </h3>
              <p className="text-sm sm:text-base text-[#52555C] font-normal leading-relaxed">
                Whether you operate in manufacturing, specialized clinical care, wholesale distribution, or run a hybrid multi-unit model, our 5-systems architecture applies directly to your team's operational handoffs, legacy software, and data flow.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('/assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-4 bg-[#0B0C0E] text-white text-xs font-manrope font-bold tracking-wider uppercase rounded-[10px] hover:bg-[#856A41] transition-all cursor-pointer shadow-md hover:shadow-lg gap-2"
              >
                <span>Start Your Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#C7A472]" />
              </button>
              <button
                onClick={() => {
                  onNavigate('/industries');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-[#52555C] hover:text-[#0F1115] text-xs font-manrope font-semibold tracking-wider uppercase rounded-[10px] hover:bg-[#FAF8F5] transition-colors cursor-pointer border border-[#D5D0C6]"
              >
                All Industries
              </button>
            </div>
          </div>
        </div>
      </motion.section>


      {/* =========================================================================
          07 — FINAL CTA (Dark, Minimal, Direct Next Step)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0B0C0E] text-[#FAF8F5] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] sm:text-xs font-manrope uppercase tracking-[0.25em] text-[#C7A472] font-semibold block">
              START WITH THE BUSINESS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight font-inter">
            <span className="font-semibold block">See Where Your Business</span>
            <span className="text-[#8C8F98] block font-light">Can Run Better.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#BFC2C9] font-normal leading-relaxed max-w-xl mx-auto">
            Start With A Business Assessment To Identify Where Your Customer, Revenue, Operations And Team Systems Have The Most Room To Improve.
          </p>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0B0C0E] text-xs font-manrope font-bold tracking-widest uppercase rounded-[8px] hover:bg-[#EAEAEA] transition-colors cursor-pointer shadow-md"
            >
              Start Your Business Assessment →
            </button>
            <button
              onClick={() => {
                onNavigate('/industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-[#FAF8F5] text-xs font-manrope font-semibold tracking-widest uppercase rounded-[8px] hover:bg-white/5 transition-colors cursor-pointer border border-white/20"
            >
              View All Industries
            </button>
          </div>

        </div>
      </motion.section>

    </div>
  );
};
