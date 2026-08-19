import React, { useState } from 'react';
import { RoutePath } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, Plus, Minus } from 'lucide-react';
import { usePageScrollTriggers } from '../hooks/useGsapScrollTrigger';

interface IndustriesOverviewPageProps {
  onNavigate: (route: RoutePath) => void;
}


interface SectorItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  focus: string;
  summary: string;
  metric: string;
  image: string;
}

const SECTORS: SectorItem[] = [
  {
    id: 'restaurants',
    slug: 'restaurants',
    number: '01',
    name: 'Restaurants & Hospitality Groups',
    focus: 'Floor pacing, live recipe costing & supplier ordering',
    summary: 'Directly sync POS sales, prep sheets, and inventory so your kitchen and management see exact margins every night.',
    metric: 'Real-time gross profit per dish',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'construction',
    slug: 'construction',
    number: '02',
    name: 'Construction & Field Trades',
    focus: 'Daily site logs, sub-contractors & variation claims',
    summary: 'Connect job sites to accounting. Log variations on mobile with site photos and send client approvals the same afternoon.',
    metric: 'Zero unbilled scope changes',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'delivery-logistics',
    slug: 'delivery-logistics',
    number: '03',
    name: 'Fleet Delivery & Logistics',
    focus: 'Driver dispatch, digital POD & automated billing',
    summary: 'Automate route dispatch, digital signature capture at the delivery dock, and instant invoice generation on drop completion.',
    metric: 'Same-day freight invoicing',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'retail',
    slug: 'retail',
    number: '04',
    name: 'Retail & Multi-Store Commerce',
    focus: 'Inventory sync, warehouse orders & POS alignment',
    summary: 'Keep physical stores, e-commerce channels, and warehouse stock levels matched with automated restock triggers.',
    metric: 'Real-time multi-location stock levels',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    number: '05',
    name: 'Professional Services & Consultancies',
    focus: 'Client onboarding, team time-tracking & milestone billing',
    summary: 'Streamline project setup, contract signing, timesheet approvals, and progress invoicing into a single structured pipeline.',
    metric: 'Immediate milestone invoice trigger',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    number: '06',
    name: 'Boutique Hotels & Venues',
    focus: 'Direct reservations, housekeeping status & guest profiles',
    summary: 'Connect your front desk, housekeeping team, and event booking systems to minimize commission fees and turn rooms faster.',
    metric: 'Instant room status updates',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85'
  }
];

const FAQS = [
  {
    q: 'Do we have to replace our existing software or point-of-sale?',
    a: 'No. In 90% of our client engagements, you keep the software your team already knows (such as your POS, accounting tool, or inventory app). We build direct connections and automations between them so data flows automatically without manual data entry.'
  },
  {
    q: 'How long does an industry integration typically take?',
    a: 'The initial operational diagnostic takes 1 to 2 weeks. Building, testing, and handing over the integrated workflows takes between 4 and 8 weeks depending on the number of sites and legacy tools.'
  },
  {
    q: 'Who maintains the system after you complete the setup?',
    a: 'Your team owns 100% of the setup, workflows, and documentation. We train your internal staff and managers during handover so you are never locked into ongoing consultant retainers or proprietary middleware.'
  },
  {
    q: 'What if our business operates across more than one sector?',
    a: 'Many of our clients run hybrid models—such as a hospitality venue with retail merchandise, or a contractor with logistics fleets. We design tailored multi-unit workflows connected to one executive dashboard.'
  },
  {
    q: 'How do you prevent staff friction when introducing new workflows?',
    a: 'We design workflows around how your staff already work. Frontline staff use simple mobile triggers or their current app interfaces—they never have to learn complicated new software suites.'
  }
];

export const IndustriesOverviewPage: React.FC<IndustriesOverviewPageProps> = ({ onNavigate }) => {
  const containerRef = usePageScrollTriggers();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleOpen = (slug: string) => {
    onNavigate(`/industries/${slug}` as RoutePath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#FAF8F5] text-[#0F1115] min-h-screen selection:bg-[#E8E4DC] selection:text-[#0F1115] font-sans"
    >
      
      {/* =========================================================================
          01 — HERO (Clean, Bold, Large Typography)
          ========================================================================= */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.24em] text-[#856A41] block">
              PRACTICE SECTORS
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-[#0F1115] leading-[1.04] font-inter">
              <span className="font-semibold block">Tailored For How</span>
              <span className="text-[#6B6E76] font-light block">Your Business Operates.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#0F1115]/10 pt-6"
          >
            <p className="text-base sm:text-lg text-[#52555C] font-normal max-w-2xl">
              Practical Workflows Built Around The Actual Handoffs Between Your Front-Line Team, Operations Managers, And Accounting.
            </p>
            <span className="text-xs font-manrope font-bold uppercase tracking-widest text-[#856A41] shrink-0">
              6 Practice Sectors
            </span>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          02 — SINGLE UNIFIED SECTOR SHOWCASE (Large Visual Cards with Fluid Animations)
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SECTORS.map((sector, idx) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                onClick={() => handleOpen(sector.slug)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                {/* Large Aspect Ratio Image */}
                <div className="relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-[#15171C] border border-[#0F1115]/10 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#0F1115]/10 text-[10px] font-manrope font-bold text-[#0F1115] tracking-widest uppercase">
                    {sector.number}
                  </div>

                  {/* Highlight Metric over image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-manrope font-semibold text-[#C7A472] uppercase tracking-wider block mb-0.5">
                      Key Outcome
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight block">
                      {sector.metric}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-2 border-b border-[#0F1115]/15 pb-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#0F1115] tracking-tight group-hover:text-[#856A41] transition-colors font-inter">
                      {sector.name}
                    </h2>
                    <div className="w-8 h-8 rounded-full border border-[#0F1115]/20 flex items-center justify-center text-[#8C8F98] group-hover:text-[#0F1115] group-hover:border-[#0F1115] group-hover:bg-[#F2EFE9] transition-all shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs font-manrope font-semibold text-[#856A41] uppercase tracking-wider">
                    {sector.focus}
                  </p>
                  
                  <p className="text-sm text-[#52555C] font-normal leading-relaxed pt-1">
                    {sector.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Can't Find Your Industry Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 sm:p-12 rounded-[20px] bg-[#F4EFE6] border border-[#E0D9CB] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-manrope font-bold uppercase tracking-[0.24em] text-[#856A41] block">
                CUSTOM &amp; HYBRID ENTERPRISES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1115] font-inter">
                Don't see your specific industry listed?
              </h3>
              <p className="text-sm sm:text-base text-[#52555C] font-normal leading-relaxed">
                Whether you manage wholesale supply chains, specialized medical clinics, boutique advisory firms, or high-volume multi-entity companies, our 5-systems architecture is built for any business with operational handoffs, disconnected software, and manual bottlenecks.
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
                <span>Start Business Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#C7A472]" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          03 — INDUSTRY FREQUENTLY ASKED QUESTIONS (Accordion)
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#0F1115]/10 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-manrope font-semibold uppercase tracking-[0.24em] text-[#856A41] block mb-3">
              PRACTICE QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#0F1115] font-inter">
              Common Questions From Founders And Operations Directors.
            </h2>
          </div>

          <div className="border-t border-[#0F1115]/15 divide-y divide-[#0F1115]/15">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="py-6 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-start justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                  >
                    <span className="text-lg sm:text-xl font-semibold text-[#0F1115] group-hover:text-[#856A41] transition-colors font-inter">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#0F1115]/15 flex items-center justify-center text-[#0F1115] shrink-0 mt-0.5 group-hover:border-[#0F1115] transition-all">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-base text-[#52555C] font-normal leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          04 — DIRECT CTA (No Fluff)
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#0B0C0E] text-[#FAF8F5]"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <span className="text-[11px] font-manrope uppercase tracking-[0.24em] text-[#C7A472] font-semibold block">
            GET STARTED
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight font-inter">
            <span className="block font-semibold">Ready To See Where</span>
            <span className="block text-[#A0A3AA] font-normal">Your Business Is Losing Time?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#BFC2C9] font-normal max-w-md mx-auto leading-relaxed">
            Take Our 5-Minute Assessment To Identify Your Key Operational Gaps And Receive A Tailored Implementation Blueprint.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                onNavigate('/assessment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0F1115] text-xs font-manrope font-bold tracking-widest uppercase rounded-[10px] hover:bg-[#EAEAEA] transition-colors cursor-pointer shadow-md"
            >
              Start Free Assessment →
            </button>
            <button
              onClick={() => {
                onNavigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-[#FAF8F5] text-xs font-manrope font-semibold tracking-widest uppercase rounded-[10px] hover:bg-white/5 transition-colors cursor-pointer border border-white/20"
            >
              About Firm
            </button>
          </div>

        </div>
      </motion.section>

    </div>
  );
};
