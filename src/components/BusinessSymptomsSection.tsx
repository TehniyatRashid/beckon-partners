import React from 'react';
import { Clock, FileCheck, Layers, MessageSquare, TrendingDown, EyeOff, AlertCircle } from 'lucide-react';

export const BusinessSymptomsSection: React.FC = () => {
  const symptoms = [
    {
      icon: <Clock className="w-5 h-5 text-neutral-400" />,
      symptom: 'The day disappears into the day',
      detail: 'Your most expensive people spend hours on work no customer would pay for. The cost is capacity you are already paying for and cannot use.'
    },
    {
      icon: <FileCheck className="w-5 h-5 text-neutral-400" />,
      symptom: 'The same information, typed three times',
      detail: 'Quote to job sheet to invoice, re-keyed by hand each time. Every copy is a chance to get it wrong in front of a customer.'
    },
    {
      icon: <Layers className="w-5 h-5 text-neutral-400" />,
      symptom: 'Tools that don’t talk to each other',
      detail: 'Six subscriptions, six versions of the truth, and nobody sure which one is current. The software isn’t the problem. The gaps between it are.'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-neutral-400" />,
      symptom: 'Customers wait for answers you already have',
      detail: 'The information exists somewhere in the business. It just can’t reach the person asking. Slow feels the same as careless from the outside.'
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-neutral-400" />,
      symptom: 'Good enquiries go cold in an inbox',
      detail: 'Nobody decided to lose them. There was simply no system that made following up unavoidable. This is the most expensive line on the list.'
    },
    {
      icon: <EyeOff className="w-5 h-5 text-neutral-400" />,
      symptom: 'Decisions made on a feeling',
      detail: 'You know the business is busy. You can’t say which part of it is actually profitable. Without a baseline, every improvement is a guess.'
    }
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono-tech uppercase text-neutral-500 tracking-wider mb-2">
              —— THE PROBLEM
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Most Businesses Aren’t Broken.<br />
              <span className="text-neutral-400 font-normal">Their Systems Are.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-neutral-400 leading-relaxed pt-2">
            None of what follows is a technology failure. Every one of them is a design failure, and design problems can be fixed.
          </div>
        </div>

        {/* Symptoms List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {symptomItems.map((item, index) => (
            <div 
              key={index} 
              className="card-dark p-6 rounded-2xl border border-neutral-800/80 bg-[#0F0F0F] hover:border-neutral-700 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.symptom}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cost of Silos Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#111111] to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs sm:text-sm text-neutral-300">
              <span className="font-bold text-white">Do you recognize these friction points in your company?</span>
              <span className="text-neutral-400 block sm:inline sm:ml-2">Our Business Health Assessment pinpoints your exact silo friction score in 4 minutes.</span>
            </div>
          </div>

          <a
            href="/assessment"
            className="px-4 py-2.5 rounded text-xs font-mono-tech font-bold bg-white text-black hover:bg-neutral-200 transition-all shrink-0 whitespace-nowrap"
          >
            Calculate System Friction
          </a>
        </div>

      </div>
    </section>
  );
};

const symptomItems = [
  {
    icon: <Clock className="w-5 h-5 text-neutral-400" />,
    symptom: 'The day disappears into the day',
    detail: 'Your most expensive people spend hours on work no customer would pay for. The cost is capacity you are already paying for and cannot use.'
  },
  {
    icon: <FileCheck className="w-5 h-5 text-neutral-400" />,
    symptom: 'The same information, typed three times',
    detail: 'Quote to job sheet to invoice, re-keyed by hand each time. Every copy is a chance to get it wrong in front of a customer.'
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-400" />,
    symptom: 'Tools that don’t talk to each other',
    detail: 'Six subscriptions, six versions of the truth, and nobody sure which one is current. The software isn’t the problem. The gaps between it are.'
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-neutral-400" />,
    symptom: 'Customers wait for answers you already have',
    detail: 'The information exists somewhere in the business. It just can’t reach the person asking. Slow feels the same as careless from the outside.'
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-neutral-400" />,
    symptom: 'Good enquiries go cold in an inbox',
    detail: 'Nobody decided to lose them. There was simply no system that made following up unavoidable. This is the most expensive line on the list.'
  },
  {
    icon: <EyeOff className="w-5 h-5 text-neutral-400" />,
    symptom: 'Decisions made on a feeling',
    detail: 'You know the business is busy. You can’t say which part of it is actually profitable. Without a baseline, every improvement is a guess.'
  }
];
