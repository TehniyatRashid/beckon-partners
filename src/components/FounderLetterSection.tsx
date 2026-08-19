import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { RoutePath } from '../types';

interface FounderLetterSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

export const FounderLetterSection: React.FC<FounderLetterSectionProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const pillars = [
    {
      title: 'What We Do',
      desc: 'Map how work moves today, then rebuild the path so it moves without being pushed.'
    },
    {
      title: "Who It's For",
      desc: 'Established companies with real customers that have outgrown how they were set up.'
    },
    {
      title: 'How We Work',
      desc: 'One system at a time, each proven with a number before the next is started.'
    }
  ];

  return (
    <section 
      id="founder-letter"
      className="bg-[#0B0C0E] text-[#F6F4F0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Letter Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-bold text-[#C7A472] uppercase tracking-[0.2em] font-mono">
            A LETTER FROM THE FOUNDER
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-white">
            Why Beckon<br />Partners Exists
          </h2>
          
          <div className="space-y-4 pt-2 text-sm sm:text-base md:text-lg text-[#A0A3AA] leading-relaxed font-sans font-normal">
            <p>
              Most owners we meet have already bought the software. What they don't have is a system , one place where the work, the customer and the numbers actually meet.
            </p>
            <p className="text-white font-medium">
              We don't sell tools. We design how the business runs.
            </p>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#161820] border border-white/10 shadow-2xl max-w-4xl mx-auto aspect-video group">
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-[#0B0C0E] via-[#161820] to-[#202430] p-6 text-center"
            >
              {/* Subtle ambient light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,164,114,0.08)_0%,transparent_70%)] pointer-events-none"></div>

              {/* Center Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0B0C0E]/90 border border-white/20 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#C7A472] group-hover:text-[#0B0C0E] transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
                <div className="text-xs sm:text-sm text-[#BFC2C9] font-mono tracking-wider uppercase">
                  Watch Founder Keynote (02:18)
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black flex flex-col justify-between p-6 text-white font-sans">
              <div className="flex items-center justify-between text-xs font-mono text-[#C7A472]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7A472] animate-ping"></span>
                  BECKON PARTNERS — FOUNDER LETTER
                </span>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="p-1 rounded-full hover:bg-white/20 text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-sm sm:text-base text-[#F6F4F0] max-w-xl italic">
                  "Real operational performance comes from systems that link every stage of your customer lifecycle directly to your bottom line."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="px-4 py-1.5 rounded-full bg-white/20 text-xs hover:bg-white/30 transition-colors"
                  >
                    Pause Video
                  </button>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3 Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-sans">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[18px] bg-[#12141C]/80 border border-white/10 hover:border-[#C7A472]/40 transition-all duration-300 space-y-3"
            >
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8C8F98] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
