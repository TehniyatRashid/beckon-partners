import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const ConnectExistingSoftwareSection: React.FC = () => {
  return (
    <section 
      id="connect-software-section"
      className="bg-[#FAF8F5] text-[#0F1115] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DC] font-sans overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: SCALABLE CONNECTED SOFTWARE ECOSYSTEM VISUAL DIAGRAM
          ========================================================================= */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <div className="relative w-full max-w-[520px] aspect-[520/420] select-none">
              
              {/* SVG LAYER: Smooth Organic Splines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                viewBox="0 0 520 420" 
                fill="none"
              >
                <defs>
                  <linearGradient id="lineGradConn" x1="260" y1="210" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C7A472" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#856A41" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* 1. Ray to Zoho (Top-Left) */}
                <path 
                  d="M 195 185 C 150 160, 115 125, 95 85" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />

                {/* 2. Ray to QuickBooks (Top-Center) */}
                <path 
                  d="M 260 155 C 260 120, 260 90, 260 65" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />

                {/* 3. Ray to Xero (Top-Right) */}
                <path 
                  d="M 325 185 C 370 160, 405 125, 425 85" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />

                {/* 4. Ray to Odoo (Middle-Left) */}
                <path 
                  d="M 180 220 C 135 225, 100 238, 75 245" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />

                {/* 5. Ray to WooCommerce (Middle-Right) */}
                <path 
                  d="M 340 220 C 385 225, 415 235, 435 240" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />

                {/* 6. Ray to Excel (Bottom-Right) */}
                <path 
                  d="M 315 255 C 345 285, 375 320, 395 345" 
                  stroke="url(#lineGradConn)" 
                  strokeWidth="1.75" 
                  strokeDasharray="4 4" 
                />
              </svg>

              {/* =========================================================================
                  CENTRAL HUB CARD
              ========================================================================= */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[52%] max-w-[260px]">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[18px] sm:rounded-[22px] border border-[#E8E4DC] shadow-[0_12px_36px_rgba(15,17,21,0.07)] p-4 sm:p-6 text-left space-y-2"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#0F1115] leading-snug tracking-tight font-sans">
                    You Already Have Great Software.
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#856A41] leading-snug font-sans">
                    The Problem Is, They Don't Work Together.
                  </p>
                </motion.div>
              </div>

              {/* =========================================================================
                  SATELLITE SOFTWARE LOGO CARDS
              ========================================================================= */}

              {/* 1. ZOHO */}
              <motion.div 
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute top-[6%] left-[6%] z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="4" width="18" height="18" rx="4" fill="#E42528" />
                    <rect x="26" y="4" width="18" height="18" rx="4" fill="#3DAE2B" />
                    <rect x="4" y="26" width="18" height="18" rx="4" fill="#2272B6" />
                    <rect x="26" y="26" width="18" height="18" rx="4" fill="#F5A623" />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-bold text-[#0F1115] tracking-tight font-sans">
                    zoho
                  </span>
                </div>
              </motion.div>

              {/* 2. QUICKBOOKS */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="absolute top-[0%] left-1/2 -translate-x-1/2 z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-1.5 sm:px-4 sm:py-2 flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#2CA01C" />
                    <path d="M13.5 9v9.5a2.5 2.5 0 0 1-2.5 2.5H8.5A2.5 2.5 0 0 1 6 18.5v-5A2.5 2.5 0 0 1 8.5 11h5" stroke="#FFF" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M18.5 23v-9.5a2.5 2.5 0 0 1 2.5-2.5h2.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5" stroke="#FFF" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0F1115] tracking-tight">
                    quickbooks
                  </span>
                </div>
              </motion.div>

              {/* 3. XERO */}
              <motion.div 
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-[6%] right-[6%] z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#13B5EA" />
                  <path d="M11 11l4.5 4.5m0 0L20 11m-4.5 4.5L11 20m4.5-4.5L20 20" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 16h2m12 0h2" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] sm:text-xs font-bold text-[#0F1115] tracking-tight">
                  xero
                </span>
              </motion.div>

              {/* 4. ODOO */}
              <motion.div 
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute top-[52%] left-[2%] z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-0.5">
                  <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-[#714B67] inline-block"></span>
                  <span className="text-xs sm:text-sm font-bold text-[#714B67] tracking-tighter leading-none -ml-0.5">
                    doo
                  </span>
                </div>
              </motion.div>

              {/* 5. WOOCOMMERCE */}
              <motion.div 
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-[50%] right-[2%] z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-1.5 sm:px-3.5 sm:py-2 flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-1">
                  <div className="bg-[#96588A] text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-[4px] leading-tight flex items-center justify-center">
                    WOO
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#0F1115] uppercase tracking-tight">
                    COMMERCE
                  </span>
                </div>
              </motion.div>

              {/* 6. MICROSOFT EXCEL */}
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute top-[76%] right-[14%] z-10 bg-white rounded-[12px] sm:rounded-[14px] border border-[#E8E4DC] shadow-sm px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
                  <rect x="9" y="5" width="19" height="22" rx="2" fill="#107C41" />
                  <path d="M12 11h13M12 16h13M12 21h13M18 5v22" stroke="#FFF" strokeOpacity="0.4" strokeWidth="1" />
                  <rect x="4" y="8" width="15" height="16" rx="2.5" fill="#21A366" />
                  <path d="M8 12.5l7 7M15 12.5l-7 7" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0F1115] tracking-tight">
                  Excel
                </span>
              </motion.div>

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: EDITORIAL CONTENT & THREE CORE PRINCIPLES
          ========================================================================= */}
          <div className="lg:col-span-6 space-y-8 font-sans">
            
            {/* Eyebrow and Headline */}
            <div className="space-y-3">
              <div className="text-[11px] font-bold text-[#856A41] uppercase tracking-[0.2em] font-mono">
                YOU PROBABLY DON'T NEED MORE SOFTWARE.
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-[#0F1115] leading-[1.12] font-sans">
                We Connect What Already Works And Build Only What's Missing.
              </h2>
            </div>

            {/* Three Value Checklist Rows */}
            <div className="space-y-6">
              
              {/* Row 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#0F1115] text-[#C7A472] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#0F1115]">
                    We Don't Replace What's Working.
                  </h4>
                  <p className="text-sm text-[#52555C] leading-relaxed">
                    We Integrate Directly With Your Existing Core Applications And Tools.
                  </p>
                </div>
              </motion.div>

              {/* Row 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#0F1115] text-[#C7A472] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#0F1115]">
                    We Eliminate Disconnected Data And Manual Work.
                  </h4>
                  <p className="text-sm text-[#52555C] leading-relaxed">
                    So Your Teams Can Focus Entirely On High-Value Customer Delivery.
                  </p>
                </div>
              </motion.div>

              {/* Row 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#0F1115] text-[#C7A472] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#0F1115]">
                    We Design One Connected System Around Your Business.
                  </h4>
                  <p className="text-sm text-[#52555C] leading-relaxed">
                    A Unified, Cohesive Operating Architecture, Not Just A Collection Of Isolated Apps.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
