import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';

interface ProblemItem {
  category: string;
  title: string;
  prefix: string;
  highlight: string;
}

export const ProblemTableSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);

  const problems: ProblemItem[] = [
    {
      category: 'Time',
      title: 'The Day Disappears Into The Day',
      prefix: 'Your Most Expensive People Spend Hours On Work No Customer Would Pay For.',
      highlight: "The Cost Is Capacity You're Already Paying For And Can't Use."
    },
    {
      category: 'Manual',
      title: 'The Same Information, Typed Three Times',
      prefix: 'Quote To Job Sheet To Invoice, Re-Keyed By Hand Each Time.',
      highlight: 'Every Copy Is A Chance To Get It Wrong In Front Of A Customer.'
    },
    {
      category: 'Tools',
      title: "Tools That Don't Talk To Each Other",
      prefix: 'Six Subscriptions, Six Versions Of The Truth, And Nobody Sure Which One Is Current.',
      highlight: "The Software Isn't The Problem. The Gaps Between It Are."
    },
    {
      category: 'Service',
      title: 'Customers Wait For Answers You Already Have',
      prefix: "The Information Exists Somewhere In The Business. It Just Can't Reach The Person Asking.",
      highlight: 'Slow Feels The Same As Careless From The Outside.'
    },
    {
      category: 'Revenue',
      title: 'Good Enquiries Go Cold In An Inbox',
      prefix: 'Nobody Decided To Lose Them. There Was Simply No System That Made Following Up Unavoidable.',
      highlight: 'This Is The Most Expensive Line On The List.'
    },
    {
      category: 'Visibility',
      title: 'Decisions Made On A Feeling',
      prefix: "You Know The Business Is Busy. You Can't Say Which Part Of It Is Actually Profitable.",
      highlight: 'Without A Baseline, Every Improvement Is A Guess.'
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

      // 2. Staggered Row Reveals with GSAP ScrollTrigger
      const rows = rowsContainerRef.current?.querySelectorAll('.problem-row');
      rows?.forEach((row, idx) => {
        const cat = row.querySelector('.row-category');
        const title = row.querySelector('.row-title');
        const text = row.querySelector('.row-text');
        const highlight = row.querySelector('.row-highlight');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        });

        tl.fromTo(
          row,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          0
        )
        .fromTo(
          [cat, title, text],
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' },
          0.1
        )
        .fromTo(
          highlight,
          { backgroundColor: 'transparent', color: '#52555C' },
          { backgroundColor: '#EFE7DC', color: '#0F1115', duration: 0.6, ease: 'power2.out' },
          0.25
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="problem-section"
      className="bg-[#FAF8F5] text-[#0F1115] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DC] font-sans"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
        >
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[11px] font-bold text-[#856A41] uppercase tracking-[0.2em] font-mono">
              THE PROBLEM
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F1115] leading-[1.08] font-sans">
              Most Businesses Aren't Broken.<br />
              <span className="text-[#6B6E76] font-normal">Their Systems Are.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm sm:text-base text-[#52555C] leading-relaxed font-sans font-normal">
              When Your Tools And Teams Work In Isolation, Everyday Tasks Take Twice As Long And High-Value Opportunities Slip Away. Here Is Where Growing Businesses Lose Time And Profit.
            </p>
          </div>
        </div>

        {/* Clean Natural Rows with Scroll-triggered GSAP Animations */}
        <div ref={rowsContainerRef} className="border-b border-[#E8E4DC]">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="problem-row border-t border-[#E8E4DC] py-8 sm:py-10 transition-colors duration-300 hover:bg-[#F4EFE6]/40 cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-baseline">
                {/* Category (Column 1) */}
                <div className="md:col-span-2">
                  <span className="row-category text-xs sm:text-sm font-semibold text-[#856A41] font-sans tracking-wide">
                    {item.category}
                  </span>
                </div>

                {/* Title (Column 2) */}
                <div className="md:col-span-5">
                  <h3 className="row-title text-xl sm:text-2xl md:text-[26px] font-bold text-[#0F1115] tracking-tight leading-snug font-sans">
                    {item.title}
                  </h3>
                </div>

                {/* Subtext with Highlight Marker (Column 3) */}
                <div className="row-text md:col-span-5 text-sm md:text-[15px] text-[#52555C] leading-relaxed font-sans">
                  <span>{item.prefix} </span>
                  <span className="row-highlight font-medium px-1.5 py-0.5 rounded-[2px] inline transition-colors">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

