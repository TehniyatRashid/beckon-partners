import React from 'react';
import { RoutePath } from '../types';
import { HeroSection } from '../components/HeroSection';
import { PhilosophyBannerSection } from '../components/PhilosophyBannerSection';
import { ProblemTableSection } from '../components/ProblemTableSection';
import { ConnectExistingSoftwareSection } from '../components/ConnectExistingSoftwareSection';
import { BusinessSystemsDarkSection } from '../components/BusinessSystemsDarkSection';
import { HowAProcessGetsBuiltSection } from '../components/HowAProcessGetsBuiltSection';
import { IndustriesWeServeSection } from '../components/IndustriesWeServeSection';
import { ResultsBigStatsSection } from '../components/ResultsBigStatsSection';
import { DiscoveryCallCtaSection } from '../components/DiscoveryCallCtaSection';
import { usePageScrollTriggers } from '../hooks/useGsapScrollTrigger';

interface HomePageProps {
  onNavigate: (route: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const containerRef = usePageScrollTriggers();

  return (
    <div 
      ref={containerRef}
      className="bg-[#FAF8F5] text-[#0F1115] font-sans selection:bg-[#E8E4DC] selection:text-[#0F1115]"
    >
      
      {/* 01 — HERO SECTION (Light, Architectural, with 5-Systems Transformation Animation) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 02 — PHILOSOPHY & CREDIBILITY BANNER (Light, Concise) */}
      <PhilosophyBannerSection />

      {/* 03 — THE PROBLEM COMPARISON TABLE (Light, Connected Transition) */}
      <ProblemTableSection />

      {/* 04 — CONNECT EXISTING SOFTWARE (Light, Seamless Integration Grid) */}
      <ConnectExistingSoftwareSection />

      {/* 05 — FIVE BUSINESS SYSTEMS SHOWCASES WITH MOCKUPS (Obsidian Dark) */}
      <BusinessSystemsDarkSection onNavigate={onNavigate} />

      {/* 06 — HOW A SYSTEM GETS BUILT 5-STEP METHODOLOGY (Obsidian Dark) */}
      <HowAProcessGetsBuiltSection />

      {/* 07 — INDUSTRIES WE SERVE MINIMAL REAL-IMAGE CARDS (Obsidian Dark) */}
      <IndustriesWeServeSection onNavigate={onNavigate} />

      {/* 08 — RESULTS & BIG METRICS (Obsidian Dark) */}
      <ResultsBigStatsSection />

      {/* 09 — DISCOVERY CALL CTA (Obsidian Dark, Connected Final Anchor) */}
      <DiscoveryCallCtaSection onNavigate={onNavigate} />

    </div>
  );
};


