import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  X, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  ChevronDown,
  Users,
  GitBranch,
  Database,
  Cpu
} from 'lucide-react';
import { usePageScrollTriggers } from '../hooks/useGsapScrollTrigger';

interface AboutPageProps {
  onNavigate: (route: RoutePath) => void;
  currentRoute?: RoutePath;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, currentRoute }) => {
  const containerRef = usePageScrollTriggers();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCompositionTab, setActiveCompositionTab] = useState<number>(0);

  useEffect(() => {
    if (currentRoute === '/about#faq') {
      const el = document.getElementById('faq');
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [currentRoute]);


  const multidisciplinaryAreas = [
    "BUSINESS STRATEGY",
    "OPERATIONS",
    "CUSTOMER EXPERIENCE",
    "REVENUE & GROWTH",
    "SYSTEMS DESIGN",
    "TECHNOLOGY",
    "DATA & INTELLIGENCE"
  ];

  const compositionElements = [
    {
      title: "PEOPLE",
      subtitle: "Teams & Leadership",
      description: "Aligning human accountability, handovers and executive clarity across departments.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PROCESS",
      subtitle: "Operational Workflows",
      description: "Eliminating redundant steps, manual bottlenecks, and unrecorded operational variations.",
      icon: GitBranch,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DATA",
      subtitle: "Single Source of Truth",
      description: "Connecting operational metrics directly with daily financial visibility and margins.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Connected Infrastructure",
      description: "Connecting existing tools and platforms into one seamless, coherent operating system.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const howWeWorkSteps = [
    {
      number: "01",
      name: "Discover",
      desc: "Understand the business as it operates today."
    },
    {
      number: "02",
      name: "Design",
      desc: "Define how it should work."
    },
    {
      number: "03",
      name: "Connect",
      desc: "Bring the right systems together."
    },
    {
      number: "04",
      name: "Optimise",
      desc: "Improve what is already working."
    },
    {
      number: "05",
      name: "Scale",
      desc: "Build for what comes next."
    }
  ];

  const faqs = [
    {
      question: "Do we need to replace our existing software?",
      answer: "No. Beckon is designed to connect what already works inside your business and clarify where gaps exist. We help your existing software, teams and processes work together as one coherent system rather than forcing disruptive wholesale replacements."
    },
    {
      question: "How do you approach a business transformation?",
      answer: "We start by understanding the real business: how customers are acquired, how work is delivered, how revenue is protected, and how leadership makes decisions. Only once the operational flow is clear do we design and connect the underlying systems."
    },
    {
      question: "How long does the process take?",
      answer: "Engagements are structured in focused phases. Discovery and systems architecture typically take 2 to 4 weeks, with tangible operational connections and workflow improvements rolling out in prioritized 30 to 60-day cycles."
    },
    {
      question: "Will implementation disrupt our operations?",
      answer: "Protecting ongoing daily operations is fundamental. We design changes to run cleanly alongside current processes until your team is comfortable and confident with the new connected flow."
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured in real operational outcomes: reduced administrative hours, faster cycle times, protected gross margins, zero dropped customer enquiries, and clear daily visibility for leadership."
    },
    {
      question: "How does Beckon remain vendor neutral?",
      answer: "Beckon accepts zero referral fees or reseller commissions from software vendors. We advise purely from your side of the table, ensuring every recommendation serves the long-term health of your business."
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="bg-[#FAF8F5] text-[#0F1115] min-h-screen selection:bg-[#E8E4DC] selection:text-[#0F1115] font-sans"
    >
      
      {/* =========================================================================
          01 — HERO (Editorial Opening Spread + Cinematic Founder Video)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block">
              THE FIRM
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#0F1115] leading-[1.08] font-inter">
              <span className="font-semibold block">We Don't Sell Tools.</span>
              <span className="text-[#52555C] block font-light">We Design How Business Runs.</span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <p className="text-lg sm:text-xl text-[#3A3D45] leading-relaxed font-normal">
              Beckon Partners Is A Business Transformation Consultancy Helping Established Companies Connect The Systems Behind How They Grow, Operate And Make Decisions.
            </p>
          </div>

          {/* Prominent Cinematic Founder Video */}
          <div className="relative w-full rounded-[16px] overflow-hidden bg-[#0B0C0E] border border-[#0F1115]/10 shadow-2xl aspect-[16/9] sm:aspect-[21/9] group">
            {!isPlaying ? (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center p-6 text-center z-10"
              >
                {/* Cinematic Photographic Backdrop */}
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85"
                  alt="Beckon Boardroom"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-black/40" />

                {/* Center Play Indicator */}
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#0B0C0E] transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                  </div>
                  <div className="text-xs font-manrope font-semibold tracking-widest text-white/80 uppercase">
                    Watch Founder Perspective (02:18)
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black z-20 flex">
                <video
                  src="/founder-video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                />
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer z-30 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          02 — WHY BECKON EXISTS (Realistic Photographic Composition & Illustration)
          PEOPLE · PROCESS · DATA · TECHNOLOGY
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block">
                WHY BECKON
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
                <span className="font-semibold block">Businesses Grow.</span>
                <span className="text-[#52555C] block font-light">Their Systems Grow Apart.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#52555C] font-normal leading-relaxed">
                <p>
                  As Companies Grow, New Tools, Processes And Teams Are Added To Solve Immediate Problems. Over Time, The Business Becomes Harder To See As A Whole.
                </p>
                <p className="text-[#0F1115] font-medium">
                  Beckon Exists To Reconnect It.
                </p>
              </div>
            </div>

            {/* Right Column: Realistic Multi-Layered Visual Composition */}
            <div className="lg:col-span-7">
              <div className="rounded-[20px] bg-[#0B0C0E] border border-[#0F1115]/10 overflow-hidden shadow-xl text-white relative">
                
                {/* Visual Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-manrope font-semibold uppercase tracking-widest text-[#BFC2C9]">
                      UNIFIED BUSINESS ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[11px] font-manrope text-[#8C8F98]">
                    SYNCHRONIZED SYSTEMS
                  </span>
                </div>

                {/* Main Interactive Stage with Realistic Photographic Backdrop */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeCompositionTab}
                      src={compositionElements[activeCompositionTab].image}
                      alt={compositionElements[activeCompositionTab].title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 0.35, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                    />
                  </AnimatePresence>
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/80 via-transparent to-[#0B0C0E]/80" />

                  {/* Connected Overlay Information */}
                  <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
                    
                    {/* Top Architectural Node Network */}
                    <div className="flex items-center justify-center gap-2 sm:gap-4 py-2">
                      {compositionElements.map((elem, idx) => {
                        const Icon = elem.icon;
                        const isActive = activeCompositionTab === idx;
                        return (
                          <React.Fragment key={elem.title}>
                            <button
                              onClick={() => setActiveCompositionTab(idx)}
                              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-manrope transition-all cursor-pointer border ${
                                isActive
                                  ? 'bg-white text-[#0B0C0E] font-bold border-white shadow-lg scale-105'
                                  : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/15'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              <span>{elem.title}</span>
                            </button>
                            {idx < compositionElements.length - 1 && (
                              <div className="hidden sm:block w-4 h-[1px] bg-white/20" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* Active Element Detail Box */}
                    <motion.div
                      key={activeCompositionTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 rounded-[14px] bg-[#14161C]/90 backdrop-blur-md border border-white/15 max-w-xl mx-auto w-full"
                    >
                      <div className="flex items-baseline justify-between mb-1.5">
                        <h4 className="text-lg sm:text-xl font-bold font-inter text-white">
                          {compositionElements[activeCompositionTab].title}
                        </h4>
                        <span className="text-xs font-manrope font-semibold text-[#8C8F98]">
                          {compositionElements[activeCompositionTab].subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#BFC2C9] leading-relaxed font-normal">
                        {compositionElements[activeCompositionTab].description}
                      </p>
                    </motion.div>

                  </div>
                </div>

                {/* Footer Insight */}
                <div className="p-4 bg-[#08090B] border-t border-white/10 text-center text-xs font-manrope text-[#8C8F98]">
                  Moving From Disconnected Tools Into One Cohesive Operating Architecture.
                </div>

              </div>
            </div>

          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          03 — THE BECKON POINT OF VIEW (Philosophical Principles)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Eyebrow & Headline */}
          <div className="mb-14 sm:mb-20 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block mb-3">
              HOW WE THINK
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
              <span className="font-semibold block">The Best System Is The One</span>
              <span className="text-[#52555C] block font-light">That Makes The Business Easier To Run.</span>
            </h2>
          </div>

          {/* Three Large Editorial Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            
            {/* Principle 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4 border-t border-[#0F1115]/15 pt-8"
            >
              <span className="text-xs font-manrope font-semibold text-[#8C8F98] tracking-widest block">
                01
              </span>
              <h3 className="text-2xl font-semibold text-[#0F1115] tracking-tight font-inter">
                Start With The Business.
              </h3>
              <p className="text-base text-[#52555C] leading-relaxed font-normal">
                We Understand How The Company Actually Works Before Deciding What Should Change.
              </p>
            </motion.div>

            {/* Principle 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4 border-t border-[#0F1115]/15 pt-8"
            >
              <span className="text-xs font-manrope font-semibold text-[#8C8F98] tracking-widest block">
                02
              </span>
              <h3 className="text-2xl font-semibold text-[#0F1115] tracking-tight font-inter">
                Connect What Matters.
              </h3>
              <p className="text-base text-[#52555C] leading-relaxed font-normal">
                We Bring The Right People, Processes, Information And Technology Together Instead Of Adding Tool Complexity.
              </p>
            </motion.div>

            {/* Principle 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4 border-t border-[#0F1115]/15 pt-8"
            >
              <span className="text-xs font-manrope font-semibold text-[#8C8F98] tracking-widest block">
                03
              </span>
              <h3 className="text-2xl font-semibold text-[#0F1115] tracking-tight font-inter">
                Build For What Comes Next.
              </h3>
              <p className="text-base text-[#52555C] leading-relaxed font-normal">
                The Systems We Design Support Today's Operation While Giving The Business Capacity To Expand Margins.
              </p>
            </motion.div>

          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          04 — WHAT WE BRING TO THE TABLE (Multidisciplinary Typographic List)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-10">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block">
              A MULTIDISCIPLINARY PRACTICE
            </span>
          </div>

          {/* Large Typographic List */}
          <div className="py-6 border-y border-[#0F1115]/15">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-2xl sm:text-4xl lg:text-5xl font-light font-inter tracking-tight text-[#0F1115]">
              {multidisciplinaryAreas.map((area, idx) => (
                <span key={area} className="inline-flex items-center gap-8">
                  <span className="hover:text-[#856A41] transition-colors cursor-default">
                    {area}
                  </span>
                  {idx < multidisciplinaryAreas.length - 1 && (
                    <span className="text-[#8C8F98] text-xl sm:text-2xl font-light">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-2xl">
            <p className="text-base sm:text-lg text-[#52555C] leading-relaxed font-normal">
              The Work Sits At The Intersection Of Business Strategy, Operations And Technology Architecture. No Single Discipline Sees The Complete Picture. Beckon Connects Them.
            </p>
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          05 — METHODOLOGY & DELIVERY PREVIEW
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-14 sm:mb-18 max-w-3xl">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block mb-3">
              FROM COMPLEXITY TO CLARITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
              <span className="font-semibold block">Understand. Design.</span>
              <span className="text-[#52555C] block font-light">Connect. Improve.</span>
            </h2>
          </div>

          {/* 5 Sequential Steps as Minimal List */}
          <div className="border-t border-[#0F1115]/15 mb-10">
            {howWeWorkSteps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="py-6 sm:py-8 border-b border-[#0F1115]/15 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline group"
              >
                <div className="sm:col-span-2">
                  <span className="text-sm font-manrope font-semibold tracking-widest text-[#8C8F98]">
                    {step.number}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <span className="text-xl font-semibold text-[#0F1115] font-inter">
                    {step.name}
                  </span>
                </div>
                <div className="sm:col-span-6">
                  <span className="text-base text-[#52555C] font-normal">
                    {step.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <button
              onClick={() => {
                onNavigate('/assessment');
              }}
              className="inline-flex items-center gap-2 text-xs font-manrope font-bold uppercase tracking-widest text-[#0F1115] hover:text-[#856A41] transition-colors cursor-pointer"
            >
              <span>Start Your Business Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          06 — WHO WE WORK WITH (Built for Businesses in Motion)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block">
                BUILT FOR BUSINESSES IN MOTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0F1115] leading-tight font-inter">
                <span className="font-semibold block">For Companies That Have</span>
                <span className="text-[#52555C] block font-light">Outgrown The Way They Used To Work.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#52555C] font-normal leading-relaxed">
                Beckon Works With Established Businesses Where Growth Has Introduced More Customers, More People, More Locations And More Complexity — And Where Disconnected Systems Are Beginning To Hold The Business Back.
              </p>
            </div>

            {/* Right Abstract Motion Progression */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-[16px] bg-[#121418] text-white border border-white/10 space-y-6">
                
                <div className="text-xs font-manrope uppercase tracking-widest text-[#8C8F98]">
                  OPERATIONAL EVOLUTION
                </div>

                <div className="space-y-3 font-inter text-sm sm:text-base">
                  {['MORE CUSTOMERS', 'MORE PEOPLE', 'MORE LOCATIONS', 'MORE COMPLEXITY'].map((label, idx) => (
                    <div 
                      key={label}
                      className="p-3.5 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-between text-[#BFC2C9]"
                    >
                      <span>{label}</span>
                      <span className="text-xs text-[#8C8F98] font-manrope">0{idx + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center text-white mb-3">
                    ↓
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-white font-inter">
                    ONE CONNECTED BUSINESS
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          07 — FAQ (Minimal Accordion, No Overload)
          ========================================================================= */}
      <motion.section 
        id="faq"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.25em] text-[#52555C] block">
              QUESTIONS WE HEAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#0F1115] font-inter">
              <span className="font-semibold block">Frequently Asked Questions.</span>
            </h2>
          </div>

          <div className="border-t border-[#0F1115]/15">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b border-[#0F1115]/15 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#0F1115] font-inter leading-snug group-hover:text-[#52555C] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`p-1 text-[#0F1115] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="pb-6 text-base text-[#52555C] leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </motion.section>


      {/* =========================================================================
          08 — FINAL CTA (Dark, Minimal, Editorial Next Step)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0B0C0E] text-[#FAF8F5] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div>
            <span className="text-[11px] sm:text-xs font-manrope uppercase tracking-[0.25em] text-[#8C8F98] font-semibold block">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight font-inter">
            <span className="font-semibold block">Let's Understand</span>
            <span className="text-[#8C8F98] block font-light">How Your Business Works.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#BFC2C9] font-normal leading-relaxed max-w-xl mx-auto">
            Begin With A Business Assessment And Identify Where Your Business Has The Greatest Opportunities To Improve.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => {
                onNavigate('/assessment');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0B0C0E] text-xs font-manrope font-bold tracking-widest uppercase rounded-[8px] hover:bg-[#EAEAEA] transition-colors cursor-pointer shadow-md"
            >
              Start Your Business Assessment →
            </button>
          </div>

        </div>
      </motion.section>

    </div>
  );
};
