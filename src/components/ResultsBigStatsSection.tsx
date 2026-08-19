import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  symbolColor?: string;
}

const AnimatedNumber: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2.2,
  suffix = '%+',
  symbolColor = '#C7A472'
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-60px' });
  const [displayValue, setDisplayValue] = useState<number>(from);

  const springValue = useSpring(from, {
    stiffness: 45,
    damping: 18,
    mass: 0.8
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    } else {
      springValue.set(from);
    }
  }, [isInView, to, from, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className="inline-flex items-baseline font-sans font-medium tracking-tight">
      <span className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[118px] leading-none select-none">
        {displayValue}
      </span>
      <motion.span 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[102px] font-normal leading-none ml-0.5 select-none"
        style={{ color: symbolColor }}
        animate={isInView ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      >
        {suffix}
      </motion.span>
    </span>
  );
};

export const ResultsBigStatsSection: React.FC = () => {
  return (
    <section 
      id="results-section"
      className="bg-[#0B0C0E] text-[#F6F4F0] pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header (Matches reference image exact layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#C7A472] uppercase font-sans">
              <span className="w-4 h-[1.5px] bg-[#C7A472] inline-block"></span>
              VERIFIED IMPACT
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[68px] font-medium tracking-tight font-sans text-white leading-[1.05]">
              What Actually Changes.
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="text-base sm:text-lg text-[#8E929B] leading-relaxed font-sans font-normal max-w-lg">
              We Baseline The Business Before Anything Is Built. That's The Only Way A Number Afterwards Means Anything.
            </p>
          </div>
        </div>

        {/* 3 Full-Width Bordered Columns with Animated Moving Numbers */}
        <div className="border-t border-b border-white/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          
          {/* Stat 1: 40%+ Operational Efficiency */}
          <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-10 flex flex-col justify-between space-y-4 group">
            <div>
              <AnimatedNumber to={40} suffix="%+" symbolColor="#C7A472" />
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-normal text-white font-sans tracking-tight">
              Operational Efficiency
            </div>
          </div>

          {/* Stat 2: 60%+ Time Saved */}
          <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-10 flex flex-col justify-between space-y-4 group">
            <div>
              <AnimatedNumber to={60} suffix="%+" symbolColor="#C7A472" />
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-normal text-white font-sans tracking-tight">
              Time Saved
            </div>
          </div>

          {/* Stat 3: 2x Business Growth */}
          <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-10 flex flex-col justify-between space-y-4 group">
            <div>
              <AnimatedNumber to={2} suffix="x" symbolColor="#C7A472" />
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-normal text-white font-sans tracking-tight">
              Business Growth
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
