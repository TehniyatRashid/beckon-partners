import React from 'react';

export const ThreeBusinessesCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      sector: 'FIELD SERVICE',
      title: 'A 40-Vehicle Heating And Plumbing Company',
      meta: '62 staff · three depots',
      challenge: 'Calls landed on a shared mobile and jobs were scheduled on a whiteboard. Roughly a third of evening calls were never returned.',
      built: 'One intake system: every call answered and qualified, then scheduled against live engineer availability, with the job card created before anyone touched a keyboard.',
      outcome: '+31% more jobs completed per week, with no additional engineers and no change to opening hours'
    },
    {
      sector: 'HEALTHCARE',
      title: 'A Four-Site Dental Group',
      meta: '31 staff · 9,000 active patients',
      challenge: 'Reception was answering the same six questions all day while patients waited at the desk. Recall lists were printed and worked by hand, when there was time.',
      built: 'Front-desk load moved to phone and WhatsApp assistants, and recall became an automatic sequence tied to each patient\'s actual treatment history.',
      outcome: '-68% inbound calls reaching reception, and recall appointments booked rose by just over half.'
    },
    {
      sector: 'PROFESSIONAL SERVICES',
      title: 'A Regional Accountancy Practice',
      meta: '18 staff · 400 business clients',
      challenge: 'New enquiries sat in a partner\'s inbox for days. Onboarding a client took eleven emails and two weeks before any work could start.',
      built: 'A single pipeline from enquiry to engagement letter, with document collection, checks and scheduling handled by the system rather than by chasing.',
      outcome: '11 days cut from average onboarding, and no enquiry now sits unanswered for longer than an hour.'
    }
  ];

  return (
    <section 
      id="selected-work-section"
      className="bg-[#FAF8F5] text-[#0F1115] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DC]"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[11px] font-bold text-[#856A41] uppercase tracking-[0.2em] font-mono">
              — SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F1115] leading-[1.08] font-sans">
              Three Businesses That Stopped<br />
              Running On Memory.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm sm:text-base text-[#52555C] leading-relaxed font-sans font-normal">
              Named details withheld at client request. The numbers are theirs.
            </p>
          </div>
        </div>

        {/* 3 Case Study Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4 font-sans">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="p-7 sm:p-8 rounded-[20px] bg-white border border-[#E8E4DC] hover:border-[#856A41]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Sector Badge */}
                <div className="text-[10px] font-mono font-bold text-[#856A41] uppercase tracking-[0.16em]">
                  {study.sector}
                </div>

                {/* Title & Meta */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F1115] tracking-tight font-sans">
                    {study.title}
                  </h3>
                  <div className="text-xs text-[#8C8F98] font-mono mt-1">
                    {study.meta}
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-1.5 pt-2 border-t border-[#E8E4DC]">
                  <div className="text-[10px] uppercase font-bold text-[#8C8F98] font-mono tracking-wider">
                    CHALLENGE
                  </div>
                  <p className="text-xs text-[#52555C] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* What We Built */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] uppercase font-bold text-[#8C8F98] font-mono tracking-wider">
                    WHAT WE BUILT
                  </div>
                  <p className="text-xs text-[#52555C] leading-relaxed">
                    {study.built}
                  </p>
                </div>
              </div>

              {/* Outcome Highlight Box */}
              <div className="p-4 rounded-[14px] bg-[#FAF8F5] border border-[#E8E4DC] space-y-1 mt-4">
                <div className="text-[10px] uppercase font-bold text-[#856A41] font-mono tracking-wider">
                  OUTCOME
                </div>
                <p className="text-xs font-semibold text-[#0F1115] leading-relaxed">
                  {study.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
