import React, { useState } from 'react';
import { RoutePath } from '../types';
import { INDUSTRIES } from '../data/industriesData';
import { BeckonLogo } from './BeckonLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Building2 
} from 'lucide-react';

interface NavbarProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const handleNavClick = (route: RoutePath) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setIndustriesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300">
      <div className="relative px-3.5 sm:px-6 py-2 flex items-center justify-between gap-2 sm:gap-6">
        {/* Glassmorphism Background Layer isolated from children */}
        <div className="absolute inset-0 bg-[#FAF8F5]/90 backdrop-blur-xl border border-[#E2DED6] shadow-[0_10px_30px_-5px_rgba(15,17,21,0.08)] rounded-full -z-10 pointer-events-none" />
        
        {/* Brand Logo & Monogram */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center group text-left focus:outline-none cursor-pointer"
            aria-label="Beckon Partners Home"
          >
            <BeckonLogo theme="dark" size="sm" />
          </button>

          <div className="hidden sm:block h-5 w-[1px] bg-[#E2DED6] mx-1" />
        </div>

        {/* Clean Desktop Navigation (Core Destinations: Home, Industries, About Us) */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 font-manrope" aria-label="Main Navigation">
          
          {/* Home */}
          <button
            onClick={() => handleNavClick('/')}
            className={`px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer rounded-full font-manrope ${
              currentRoute === '/' 
                ? 'text-[#0F1115] bg-[#E8E4DC]/70' 
                : 'text-[#52555C] hover:text-[#0F1115] hover:bg-[#F3F1ED]'
            }`}
          >
            Home
          </button>

          {/* Industries (With quick dropdown) */}
          <div 
            className="relative"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('/industries')}
              className={`px-4 py-1.5 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer rounded-full font-manrope ${
                currentRoute.startsWith('/industries') 
                  ? 'text-[#0F1115] bg-[#E8E4DC]/70' 
                  : 'text-[#52555C] hover:text-[#0F1115] hover:bg-[#F3F1ED]'
              }`}
            >
              Industries
              <ChevronDown className={`w-3 h-3 text-[#6A6C71] transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#856A41]' : ''}`} />
            </button>

            {industriesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2 z-50 animate-in fade-in duration-150">
                <div className="p-3.5 rounded-[18px] shadow-xl border border-[#E2DED6] bg-[#FAF8F5]/98 backdrop-blur-2xl space-y-1">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#856A41] tracking-[0.16em] border-b border-[#E2DED6] mb-1.5 flex items-center justify-between font-manrope">
                    <span>INDUSTRIES WE SPECIALIZE IN</span>
                    <Building2 className="w-3.5 h-3.5 text-[#856A41]" />
                  </div>
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => handleNavClick(`/industries/${ind.slug}` as RoutePath)}
                      className="w-full text-left px-3 py-2 rounded-[10px] hover:bg-[#F3F1ED] transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="text-xs font-medium text-[#0F1115] group-hover:text-[#856A41] transition-colors font-manrope">
                        {ind.name}
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#8C8F98] group-hover:text-[#856A41] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                  
                  {/* Bottom callout: Specialized without appearing limited */}
                  <div className="pt-2 mt-1.5 border-t border-[#E2DED6]">
                    <button
                      onClick={() => handleNavClick('/assessment')}
                      className="w-full text-left px-3 py-2 rounded-[10px] bg-[#E8E4DC]/60 hover:bg-[#0B0C0E] text-[#52555C] hover:text-[#F6F4F0] transition-all flex items-center justify-between group cursor-pointer font-manrope"
                    >
                      <span className="text-[11px] font-semibold tracking-tight">
                        Don’t see your industry? <span className="font-normal opacity-80">Start a Business Assessment</span>
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#856A41] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About Us (The Firm, Philosophy, FAQs) */}
          <button
            onClick={() => handleNavClick('/about')}
            className={`px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer rounded-full font-manrope ${
              currentRoute === '/about' 
                ? 'text-[#0F1115] bg-[#E8E4DC]/70' 
                : 'text-[#52555C] hover:text-[#0F1115] hover:bg-[#F3F1ED]'
            }`}
          >
            About Us
          </button>
        </nav>

        {/* Right CTA Button (Pill Button: Start Assessment) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('/assessment')}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold font-manrope uppercase tracking-wider bg-[#0B0C0E] hover:bg-[#856A41] text-[#F6F4F0] hover:text-white transition-all shadow-xs flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Start Assessment</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#E8E4DC] text-[#0F1115] ml-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Simplified Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#FAF8F5]/98 backdrop-blur-2xl border border-[#E2DED6] rounded-[22px] shadow-2xl p-5 space-y-4">
          <div className="space-y-1 font-manrope">
            {[
              { label: 'Home', route: '/' },
              { label: 'Industries (Sector Architectures)', route: '/industries' },
              { label: 'About Us (The Firm & Philosophy)', route: '/about' },
              { label: 'Start Assessment & Diagnostic', route: '/assessment' }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.route as RoutePath)}
                className="w-full text-left py-2.5 px-3 rounded-[12px] text-xs font-semibold text-[#0F1115] hover:bg-[#F3F1ED] flex items-center justify-between cursor-pointer font-manrope"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6A6C71]" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2DED6]">
            <button
              onClick={() => handleNavClick('/assessment')}
              className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B0C0E] text-[#F6F4F0] flex items-center justify-center gap-2 cursor-pointer font-manrope"
            >
              <span>Start Assessment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
