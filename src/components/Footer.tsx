import React from 'react';
import { RoutePath } from '../types';
import { BeckonLogo } from './BeckonLogo';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: RoutePath) => {
    onNavigate(route);
  };

  const industryLinks = [
    { label: 'Restaurants & F&B Groups', route: '/industries/restaurants' },
    { label: 'Construction & Field Trades', route: '/industries/construction' },
    { label: 'Delivery & Logistics Fleets', route: '/industries/delivery-logistics' },
    { label: 'Retail & Multi-Site Commerce', route: '/industries/retail' },
    { label: 'Professional Services & Consultancies', route: '/industries/professional-services' },
    { label: 'Boutique Hospitality & Hotels', route: '/industries/hospitality' }
  ];

  const siteLinks = [
    { label: 'Home Overview', route: '/' },
    { label: 'Practice Industries', route: '/industries' },
    { label: 'About Us & Firm Philosophy', route: '/about' },
    { label: 'Frequently Asked Questions', route: '/about#faq' },
    { label: 'Start Business Assessment', route: '/assessment' }
  ];

  return (
    <footer className="bg-[#0B0C0E] text-[#8C8F98] border-t border-white/10 pt-20 pb-14 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => handleNav('/')}
              className="flex items-center group text-left cursor-pointer focus:outline-none"
            >
              <BeckonLogo theme="light" size="md" />
            </button>

            <p className="text-xs sm:text-sm text-[#8C8F98] max-w-sm leading-relaxed font-normal">
              A business transformation consultancy. We design the connected systems a well-run company operates on.
            </p>

            <div className="pt-2 text-[11px] font-manrope font-semibold text-[#C7A472] tracking-[0.16em]">
              ESTABLISHED ARCHITECTURE · 100% VENDOR NEUTRAL
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="md:col-span-3 space-y-3 font-manrope">
            <div className="text-[11px] font-bold uppercase text-[#C7A472] tracking-[0.2em] font-manrope">
              PAGES
            </div>
            <ul className="space-y-2 text-xs font-manrope">
              {siteLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(item.route as RoutePath)}
                    className="text-[#8C8F98] hover:text-white transition-colors text-left cursor-pointer font-manrope"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="md:col-span-4 space-y-3 font-manrope">
            <div className="text-[11px] font-bold uppercase text-[#C7A472] tracking-[0.2em] font-manrope">
              INDUSTRIES
            </div>
            <ul className="space-y-2 text-xs font-manrope">
              {industryLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(item.route as RoutePath)}
                    className="text-[#8C8F98] hover:text-white transition-colors text-left cursor-pointer font-manrope"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-manrope text-[#6A6C71] gap-4">
          <div>
            © {new Date().getFullYear()} BECKON PARTNERS CONSULTANCY. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
