import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Send, 
  CheckCheck, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  FileText,
  UserCheck,
  TrendingUp,
  Sliders
} from 'lucide-react';

export const LiveSystemsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'call' | 'pipeline' | 'whatsapp' | 'followup' | 'assistant'>('call');

  // Interactive WhatsApp State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: 'Hi, do you cover heating repair in North London?' },
    { sender: 'bot', text: 'Yes, we do! Boiler & heating service available today. What issues are you experiencing?' },
    { sender: 'user', text: 'Boiler is leaking water since this morning.' },
    { sender: 'bot', text: 'I can get an engineer to you tomorrow between 08:30 and 11:00. Would that work?' },
    { sender: 'user', text: 'Morning is perfect.' },
    { sender: 'bot', text: 'Booked: Tue 08:30 · Engineer assigned · Job card created in CRM.' }
  ]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = { sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, newMsg]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: 'Beckon AI: Enquiry logged instantly in CRM pipeline. Assigned to duty manager for confirmation!' 
        }
      ]);
    }, 800);
  };

  return (
    <section className="py-20 bg-[#0A0A0A] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono-tech uppercase text-neutral-500 tracking-wider mb-2">
            —— BUSINESS SYSTEMS IN ACTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            The Work Runs Itself, Or It Runs You.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            We rarely build all five systems at once. We start where the friction costs the most, prove the change with a number, then connect the next one.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-neutral-800 scrollbar-none font-mono-tech text-xs">
          <button
            onClick={() => setActiveTab('call')}
            className={`px-4 py-2.5 rounded-lg border font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'call' ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>01. Call Handling</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2.5 rounded-lg border font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'pipeline' ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>02. Enquiry Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-4 py-2.5 rounded-lg border font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'whatsapp' ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
            <span>03. WhatsApp Messaging</span>
          </button>

          <button
            onClick={() => setActiveTab('followup')}
            className={`px-4 py-2.5 rounded-lg border font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'followup' ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>04. Follow-Up Sequence</span>
          </button>

          <button
            onClick={() => setActiveTab('assistant')}
            className={`px-4 py-2.5 rounded-lg border font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'assistant' ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>05. Website Assistant</span>
          </button>
        </div>

        {/* Tab Content 01: Call Handling */}
        {activeTab === 'call' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-tech uppercase text-neutral-500">01. Front Door</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Call Handling</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Every call answered on the first ring, at any hour. It qualifies the caller, answers the forty questions your team answers every week, and books straight into the calendar, then leaves a written summary behind.
              </p>
              
              <div className="pt-4 border-t border-neutral-800">
                <div className="text-3xl font-extrabold text-white font-mono-tech">100%</div>
                <div className="text-xs text-neutral-400 mt-0.5">of calls answered, including the ones that used to reach voicemail</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark p-6 rounded-2xl border border-neutral-800 font-mono-tech text-xs bg-[#0F0F0F] space-y-4 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    LIVE CALL LOG ENTIRE SYSTEM
                  </span>
                  <span>LINE 1 · 00:47</span>
                </div>

                <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="text-neutral-500 text-[10px]">CALLER TRANSCRIPT:</div>
                  <p className="text-neutral-300">"Boiler's out, no hot water since this morning."</p>
                </div>

                <div className="p-3 rounded bg-neutral-900/80 border border-neutral-800 space-y-2">
                  <div className="text-emerald-400 text-[10px]">BECKON AI RECEPTIONIST RESPONSE:</div>
                  <p className="text-neutral-200">"I can get an engineer to you tomorrow between 08:30 and 11:00. Which suits?"</p>
                </div>

                <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Booked: Tue 08:30 · Engineer assigned · Job card created in CRM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 02: Enquiry Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-tech uppercase text-neutral-500">02. The Record</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Every Enquiry In One Place</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                One place where every enquiry lives, in the order it should be worked. No parallel spreadsheet, no relying on memory, no "I thought you were following that one up."
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-3xl font-extrabold text-white font-mono-tech">3x</div>
                <div className="text-xs text-neutral-400 mt-0.5">more enquiries worked through to a yes or a no, from the same pipeline</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark p-6 rounded-2xl border border-neutral-800 bg-[#0F0F0F] font-mono-tech text-xs space-y-4 shadow-2xl">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider pb-2 border-b border-neutral-800 flex justify-between">
                  <span>PIPELINE BOARD VIEW</span>
                  <span>THIS WEEK</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-neutral-500 font-bold mb-2">NEW (4)</div>
                    <div className="p-2 rounded bg-neutral-950 text-white border border-neutral-800 mb-1.5">
                      Halstead Fit-out
                      <div className="text-[10px] text-neutral-500 mt-1">$18,400</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-amber-500 font-bold mb-2">QUOTED (3)</div>
                    <div className="p-2 rounded bg-neutral-950 text-white border border-amber-900/40 mb-1.5">
                      Ardent Depot
                      <div className="text-[10px] text-neutral-500 mt-1">$42,000</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-blue-400 font-bold mb-2">DECISION (2)</div>
                    <div className="p-2 rounded bg-neutral-950 text-white border border-blue-900/40 mb-1.5">
                      Kestrel Phase 1
                      <div className="text-[10px] text-neutral-500 mt-1">$26,700</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-emerald-400 font-bold mb-2">WON (5)</div>
                    <div className="p-2 rounded bg-neutral-950 text-white border border-emerald-900/40 mb-1.5">
                      Cavendish & Co
                      <div className="text-[10px] text-neutral-500 mt-1">$33,000</div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-neutral-950 text-neutral-400 text-[11px] flex items-center gap-2">
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  <span>Nothing older than 48 hours without an automatic next action</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 03: WhatsApp Messaging */}
        {activeTab === 'whatsapp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-tech uppercase text-neutral-500">03. The Conversation</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">WhatsApp Messaging</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Customers message you the way they already message everyone else. Conversations are answered, qualified and routed instantly, and the whole thread stays attached to the customer record, so nothing has to be explained twice.
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-3xl font-extrabold text-white font-mono-tech">&lt;60s</div>
                <div className="text-xs text-neutral-400 mt-0.5">median first reply, at any hour, on any day</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark rounded-2xl border border-neutral-800 bg-[#0B141A] overflow-hidden shadow-2xl">
                
                {/* WhatsApp Header */}
                <div className="bg-[#202C33] px-4 py-3 border-b border-neutral-800 flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white">
                      B
                    </div>
                    <div>
                      <div className="font-bold text-white">Beckon Business Assistant</div>
                      <div className="text-[10px] text-emerald-400">Online · Instant Reply Active</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-400">WHATSAPP BUSINESS</span>
                </div>

                {/* Chat Messages Body */}
                <div className="p-4 space-y-3 max-h-72 overflow-y-auto text-xs font-mono-tech">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#202C33] text-neutral-200 rounded-tl-none'
                            : 'bg-[#005C4B] text-white rounded-tr-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form onSubmit={handleSendChat} className="p-3 bg-[#202C33] border-t border-neutral-800 flex items-center gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type an enquiry message..."
                    className="flex-1 bg-[#111B21] border border-neutral-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>
            </div>
          </div>
        )}

        {/* Tab Content 04: Follow-Up Sequence */}
        {activeTab === 'followup' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-tech uppercase text-neutral-500">04. The Follow-up</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Follow-Up</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Follow-up that happens whether anyone remembers or not. The right message at the right point in the relationship, written in your voice, stopping the moment a human replies.
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-3xl font-extrabold text-white font-mono-tech">2 in 5</div>
                <div className="text-xs text-neutral-400 mt-0.5">closed deals come from follow-up nobody previously had time to send</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark p-6 rounded-2xl border border-neutral-800 bg-[#0F0F0F] font-mono-tech text-xs space-y-3 shadow-2xl">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider pb-2 border-b border-neutral-800 flex justify-between">
                  <span>SEQUENCE: QUOTE SENT, NO REPLY</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>

                <div className="p-3 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">01. Quote summary, plus the two questions people always ask</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">DAY 1 · EMAIL</div>
                  </div>
                  <span className="text-[10px] text-neutral-400">64% open</span>
                </div>

                <div className="p-3 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">02. A similar job we finished last month</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">DAY 3 · EMAIL</div>
                  </div>
                  <span className="text-[10px] text-neutral-400">41% open</span>
                </div>

                <div className="p-3 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">03. "Still worth holding your slot?"</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">DAY 5 · WHATSAPP</div>
                  </div>
                  <span className="text-[10px] text-amber-400 font-bold">27% reply</span>
                </div>

                <div className="p-2.5 rounded bg-emerald-950/40 text-emerald-300 text-[11px] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sequence stops automatically the moment a person replies</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 05: Website Assistant */}
        {activeTab === 'assistant' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono-tech uppercase text-neutral-500">05. The Storefront</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Website Answers</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Your site stops being a brochure. It answers real questions from your own documents and pricing, qualifies the visitor while they're still interested, and hands your team a lead that arrives already briefed.
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-3xl font-extrabold text-white font-mono-tech">4x</div>
                <div className="text-xs text-neutral-400 mt-0.5">more visitors who identify themselves before they leave the site</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card-dark p-6 rounded-2xl border border-neutral-800 bg-[#0F0F0F] font-mono-tech text-xs space-y-4 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[10px] text-neutral-400">
                  <span>WEBSITE ASSISTANT EMBEDDED</span>
                  <span>SESSION 04-12</span>
                </div>

                <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 text-[11px]">
                  URL: yourcompany.com/services
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded bg-neutral-900 text-neutral-300 text-[11px]">
                    VISITOR: "Do you handle listed buildings?"
                  </div>
                  <div className="p-3 rounded bg-emerald-950/50 border border-emerald-800/60 text-emerald-200 text-[11px]">
                    ASSISTANT: "Yes, 50% of our work is listed properties. Shall I put you in touch with our conservation lead?"
                  </div>
                </div>

                <div className="p-3 rounded bg-neutral-950 border border-neutral-800 text-emerald-400 flex items-center justify-between">
                  <span>Lead Brief Generated → Sent to Duty Partner</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
