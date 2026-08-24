import React, { useState } from 'react';
import { RoutePath } from '../types';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Activity, ArrowRight, Building2, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenue: '$5M - $15M',
    systemFriction: 'Disconnected Software / Re-keying',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] text-zinc-900 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-xs font-bold text-[#B89635]">
            <span>CONNECT WITH BECKON PARTNERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
            Talk to a Principal Systems Architect.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            No sales scripts. No generic SDR pitches. You will speak directly with an architect who designs, builds, and maintains connected operational environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C5A059]" />
                <span>Practice Headquarters</span>
              </h2>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-zinc-400 mt-0.5" />
                  <div>
                    <div className="font-bold text-zinc-900">Beckon Partners Advisory</div>
                    <div className="text-zinc-600">Level 18, 100 Creek Street</div>
                    <div className="text-zinc-600">Brisbane City QLD 4000, Australia</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-bold text-zinc-900">Direct Advisory Desk</div>
                    <div className="text-[#B89635] font-mono font-bold">architecture@beckonpartners.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-bold text-zinc-900">Consultancy Line</div>
                    <div className="text-zinc-700 font-mono">+61 (07) 3100 8920</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-bold text-zinc-900">Architecture Advisory Hours</div>
                    <div className="text-zinc-600">Mon - Fri: 8:00 AM - 6:00 PM AEST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Callout */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="text-xs font-mono text-[#B89635] font-bold mb-2 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                <span>PRE-CALL DIAGNOSTIC</span>
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-2">Prefer to run a diagnostic first?</h3>
              <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                Take our 5-minute Business Health Assessment to generate an instant system bottleneck matrix before our call.
              </p>
              <button
                onClick={() => {
                  onNavigate('/assessment');
                }}
                className="w-full py-2.5 rounded-xl text-xs font-mono font-bold bg-[#FAFAFA] hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch 5-Min Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6EB] border border-[#E8DFCA] text-[#C5A059] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Request Received</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you. A Principal Systems Architect from Beckon Partners will review your details and reach out within 1 business day to confirm an architecture briefing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-zinc-100 text-zinc-800 hover:bg-zinc-200 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-1">Request Architecture Briefing</h3>
                    <p className="text-xs text-zinc-600">Fill out the details below to schedule an operational discovery session.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Nexus Logistics"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 400 000 000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Annual Revenue Scale</label>
                      <select
                        value={formData.revenue}
                        onChange={e => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900"
                      >
                        <option value="Under $5M">Under $5M</option>
                        <option value="$5M - $15M">$5M - $15M</option>
                        <option value="$15M - $50M">$15M - $50M</option>
                        <option value="$50M+">$50M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">Primary Friction Area</label>
                      <select
                        value={formData.systemFriction}
                        onChange={e => setFormData({ ...formData, systemFriction: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900"
                      >
                        <option value="Disconnected Software / Re-keying">Disconnected Software / Re-keying</option>
                        <option value="Lead Drop-off / Delayed Quoting">Lead Drop-off / Delayed Quoting</option>
                        <option value="Slow Invoicing & Cashflow">Slow Invoicing & Cashflow</option>
                        <option value="Lack of Executive Visibility">Lack of Executive Visibility</option>
                        <option value="Multi-site Scaling Bottleneck">Multi-site Scaling Bottleneck</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Brief Overview of Current Stack / Challenge</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current software setup (e.g. HubSpot, Xero, Jobber, custom DB) and what is holding your operations back..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-zinc-200 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-[#C5A059] text-white hover:text-zinc-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Architecture Briefing</span>
                  </button>

                  <div className="text-[11px] text-zinc-500 text-center flex items-center justify-center gap-1.5 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Your data is confidential and protected by strict advisory NDA protocols.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
