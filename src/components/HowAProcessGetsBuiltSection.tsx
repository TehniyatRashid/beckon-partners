import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Layers, 
  Workflow, 
  Sliders, 
  TrendingUp
} from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';

export const HowAProcessGetsBuiltSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We Understand Your Business Operations, Structural Gaps, And Strategic Targets.',
      icon: Search,
      glowColor: 'rgba(199, 164, 114, 0.35)'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'We Architect Your Unified System Blueprint And 60-Day Implementation Roadmap.',
      icon: Layers,
      glowColor: 'rgba(199, 164, 114, 0.45)'
    },
    {
      num: '03',
      title: 'Connect',
      desc: 'We Integrate Your Core Software, Teams, And Workflows Into One Single Operating Engine.',
      icon: Workflow,
      glowColor: 'rgba(199, 164, 114, 0.45)'
    },
    {
      num: '04',
      title: 'Optimise',
      desc: 'We Automate Repetitive Handoffs, Eliminate Data Leakage, And Maximize Margin Velocity.',
      icon: Sliders,
      glowColor: 'rgba(223, 186, 132, 0.5)'
    },
    {
      num: '05',
      title: 'Scale',
      desc: 'We Equip Leadership With Real-Time Intelligence For Multi-Unit Expansion And Growth.',
      icon: TrendingUp,
      glowColor: 'rgba(223, 186, 132, 0.6)'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 86%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      // 2. Step columns staggered entry
      const cols = stepsContainerRef.current?.querySelectorAll('.methodology-col');
      if (cols && cols.length > 0) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: 'top 84%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-we-work-section"
      className="bg-[#0B0C0E] text-[#F6F4F0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.08, 0.04]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#C7A472] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        
        {/* =========================================================================
            HEADER (Capitalized Initial Headlines)
        ========================================================================= */}
        <div 
          ref={headerRef}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 relative"
        >
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] font-mono font-bold text-[#C7A472] tracking-[0.2em] uppercase">
              OUR METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-white leading-[1.12] font-sans">
              Measurable Outcomes Through A Five-Step Methodology.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#A0A3AA] leading-relaxed font-normal">
              Our Five-Step Methodology Ensures Alignment, Clarity, And Predictable Results At Every Stage.
            </p>
          </div>

          {/* Top-right watermark accent */}
          <div className="hidden lg:block select-none opacity-20 font-mono text-7xl font-bold tracking-tighter text-[#8C8F98]">
            05
          </div>
        </div>

        {/* =========================================================================
            CURVED PROCESS STAGE (Seamless golden line connecting ALL 5 nodes)
        ========================================================================= */}
        <div className="relative pt-6 pb-6">
          
          {/* Sinuous Curved Connecting Line for all 5 columns (Desktop - 1000px coordinate space) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-32 pointer-events-none z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1000 120" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                {/* Rich Gold Gradient */}
                <linearGradient id="process-5-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8E6E3D" />
                  <stop offset="20%" stopColor="#C7A472" />
                  <stop offset="40%" stopColor="#E5C99E" />
                  <stop offset="60%" stopColor="#C7A472" />
                  <stop offset="80%" stopColor="#E5C99E" />
                  <stop offset="100%" stopColor="#DFBA84" />
                </linearGradient>

                {/* Soft ambient glow filter */}
                <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ambient Glow Backdrop Track (Connecting through (100,60), (300,60), (500,60), (700,60), (900,60)) */}
              <path
                d="M 20 60 C 60 60, 70 60, 100 60 C 150 20, 250 20, 300 60 C 350 100, 450 100, 500 60 C 550 20, 650 20, 700 60 C 750 100, 850 100, 900 60 C 930 60, 960 60, 980 60"
                stroke="rgba(199, 164, 114, 0.3)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#gold-glow)"
              />

              {/* Base Structural Track connecting all 5 points */}
              <path
                d="M 20 60 C 60 60, 70 60, 100 60 C 150 20, 250 20, 300 60 C 350 100, 450 100, 500 60 C 550 20, 650 20, 700 60 C 750 100, 850 100, 900 60 C 930 60, 960 60, 980 60"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Highlighted Gold Continuous Connecting Wave */}
              <motion.path
                ref={pathRef}
                d="M 20 60 C 60 60, 70 60, 100 60 C 150 20, 250 20, 300 60 C 350 100, 450 100, 500 60 C 550 20, 650 20, 700 60 C 750 100, 850 100, 900 60 C 930 60, 960 60, 980 60"
                stroke="url(#process-5-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Flowing Energy Stream Animation across all 5 nodes */}
              <motion.path
                d="M 20 60 C 60 60, 70 60, 100 60 C 150 20, 250 20, 300 60 C 350 100, 450 100, 500 60 C 550 20, 650 20, 700 60 C 750 100, 850 100, 900 60 C 930 60, 960 60, 980 60"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="14 45"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: [0, -520] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                opacity={0.8}
              />

              {/* 5 Precision Anchor Terminal Rings at (100,60), (300,60), (500,60), (700,60), (900,60) */}
              {[100, 300, 500, 700, 900].map((cx, i) => (
                <g key={i}>
                  <circle cx={cx} cy={60} r="7" fill="#0B0C0E" stroke="#C7A472" strokeWidth="2.5" />
                  <circle cx={cx} cy={60} r="3" fill="#FFFFFF" />
                </g>
              ))}
            </svg>
          </div>

          {/* Vertical Glowing Connecting Line for Mobile / Tablet (Linking all 5 steps) */}
          <div className="block lg:hidden absolute top-12 bottom-12 left-9 w-[2px] bg-gradient-to-b from-[#C7A472] via-[#E5C99E] to-[#C7A472] z-0 opacity-40">
            <motion.div 
              className="w-full h-20 bg-white"
              animate={{ y: ['0%', '400%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* 5-Step Columns (Desktop: 5 equal 20% columns for 100% mathematical precision with the SVG line) */}
          <div ref={stepsContainerRef} className="flex flex-col lg:flex-row items-stretch justify-between relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;

              return (
                <div 
                  key={idx} 
                  className="methodology-col w-full lg:w-1/5 px-2 sm:px-4 py-6 lg:py-0 relative flex flex-col justify-start group border-b lg:border-b-0 border-white/10 lg:border-none"
                >
                  
                  {/* Huge Translucent Watermark Number behind each column */}
                  <div className="absolute top-2 lg:-top-6 left-4 lg:left-1/2 lg:-translate-x-1/2 select-none pointer-events-none text-7xl sm:text-8xl lg:text-[92px] font-bold text-white/[0.04] font-sans transition-colors duration-300 group-hover:text-white/[0.09]">
                    {step.num}
                  </div>

                  {/* Glowing Node Badge sitting directly on the connecting line */}
                  <div className="h-20 lg:h-32 flex items-center justify-start lg:justify-center relative mb-4 lg:mb-2 pl-2 lg:pl-0">
                    <div className="relative">
                      {/* Ambient Glow Aura */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.4 }}
                        className="absolute -inset-3 rounded-2xl blur-lg transition-all duration-300"
                        style={{ backgroundColor: step.glowColor }}
                      />

                      {/* Rounded Badge Container */}
                      <motion.div 
                        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-[16px] bg-[#12141C] border border-[#C7A472]/60 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#E5C99E] group-hover:shadow-[0_0_25px_rgba(199,164,114,0.4)] cursor-pointer"
                        whileHover={{ y: -4 }}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5C99E] transition-colors group-hover:text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Step Title & Copy (Capital Initial Headlines) */}
                  <div className="space-y-2 relative z-10 text-left lg:text-left lg:px-2">
                    <div className="text-xs font-mono font-bold text-[#C7A472] tracking-widest uppercase">
                      STEP {step.num}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-[#8C919D] leading-relaxed font-sans font-normal">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

