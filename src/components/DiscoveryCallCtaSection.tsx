import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { RoutePath } from '../types';

interface DiscoveryCallCtaSectionProps {
  onNavigate: (route: RoutePath) => void;
}

export const DiscoveryCallCtaSection: React.FC<DiscoveryCallCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="discovery-cta"
      className="bg-[#0B0C0E] text-[#F6F4F0] py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(circle,rgba(199,164,114,0.15)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold text-[#C7A472] uppercase tracking-[0.2em] font-mono"
        >
          DISCOVERY CONSULTATION
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-white max-w-3xl mx-auto leading-[1.08]"
        >
          Let's Design The Systems Your Business Actually Needs.
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#8C8F98] max-w-2xl mx-auto leading-relaxed font-sans font-normal"
        >
          Tell Us Where The Business Is Losing Time And We'll Tell You Honestly Whether We're The Right Team To Fix It. Forty-Five Minutes, No Sales Pitch.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans"
        >
          <button
            onClick={() => {
              onNavigate('/assessment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold bg-white text-[#0B0C0E] hover:bg-[#C7A472] hover:text-[#0B0C0E] transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Start Your Business Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              onNavigate('/about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold bg-[#161820] text-white border border-white/15 hover:border-white/30 transition-all flex items-center justify-center cursor-pointer"
          >
            <span>Explore Firm Philosophy</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-mono text-[#8C8F98]"
        >
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#C7A472]" />
            <span>WE REPLY WITHIN ONE WORKING DAY</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#C7A472]" />
            <span>WE TAKE ON FOUR ENGAGEMENTS A QUARTER</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
