import React, { useState } from 'react';
import { RoutePath } from '../types';
import { 
  Copy, 
  Check, 
  Palette, 
  CheckCircle2, 
  Sliders, 
  Sparkles
} from 'lucide-react';

interface BrandKitPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const BrandKitPage: React.FC<BrandKitPageProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'colors' | 'typography' | 'logo' | 'components'>('all');
  const [sampleText, setSampleText] = useState('Your Business Has Systems. We Make Them Work Together.');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const bronzeColors = [
    { name: 'Bronze Accent', hex: '#856A41', cssVar: '--bronze', bg: 'bg-[#856A41]', text: 'text-white', description: 'Primary warm bronze accent on light backgrounds.' },
    { name: 'Bronze Lite', hex: '#C7A472', cssVar: '--bronze-lite', bg: 'bg-[#C7A472]', text: 'text-black', description: 'Lighter bronze for dark backgrounds and high-contrast emphasis.' },
    { name: 'Bronze Wash', hex: 'rgba(133, 106, 65, 0.11)', cssVar: '--bronze-wash', bg: 'bg-[#856A41]/10', text: 'text-black', description: 'Faint tint for subtle background highlighting.' }
  ];

  const lightColors = [
    { name: 'Paper (Base Canvas)', hex: '#FAF9F7', cssVar: '--paper', bg: 'bg-[#FAF9F7]', border: 'border-[#E2DED6]', description: 'Soft off-white canvas, easy on the eyes.' },
    { name: 'Paper 2 (Alternating Sections)', hex: '#F3F1ED', cssVar: '--paper-2', bg: 'bg-[#F3F1ED]', border: 'border-[#E2DED6]', description: 'Slightly darker beige for alternating page bands.' },
    { name: 'Stone (Raised Surfaces)', hex: '#E8E4DC', cssVar: '--stone', bg: 'bg-[#E8E4DC]', border: 'border-[#E2DED6]', description: 'Warmer grey-beige for cards and thumbnails.' },
    { name: 'Line (Hairline Borders)', hex: '#E2DED6', cssVar: '--line', bg: 'bg-[#E2DED6]', border: 'border-[#E2DED6]', description: 'Subtle hairline borders between elements.' }
  ];

  const darkColors = [
    { name: 'Ink (Hero & Dark Sections)', hex: '#0B0B0C', cssVar: '--ink', bg: 'bg-[#0B0B0C]', text: 'text-white', description: 'Deep charcoal black, softer than pure black.' },
    { name: 'Ink 2 (Dark Cards)', hex: '#161719', cssVar: '--ink-2', bg: 'bg-[#161719]', text: 'text-white', description: 'Raised grey for layered dark cards.' },
    { name: 'Ink 3 (Nested Surfaces)', hex: '#212326', cssVar: '--ink-3', bg: 'bg-[#212326]', text: 'text-white', description: 'Slightly lighter dark surface.' }
  ];

  return (
    <div className="bg-[#FAF9F7] text-[#101113] selection:bg-[#E8E4DC] selection:text-[#101113] pt-32 pb-24 font-sans">
      
      {/* Page Header */}
      <section className="relative border-b border-[#E2DED6] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#856A41] uppercase tracking-[0.16em] mb-4 font-mono">
            <Palette className="w-4 h-4" />
            <span>DESIGN SYSTEM & BRANDKIT</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#101113] font-display">
                Beckon Brand Standards
              </h1>
              <p className="text-sm sm:text-base text-[#5B5D62] mt-3 max-w-2xl leading-relaxed font-normal">
                Official specifications for typography (Satoshi & Manrope), fluid type scales, bronze color palette, and component design tokens.
              </p>
            </div>

            {/* Quick Specs Overview Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E2DED6] text-xs font-mono text-[#101113] shadow-xs">
                <span className="text-[#6A6C71] mr-2">Display Font:</span>
                <span className="text-[#856A41] font-bold">Satoshi</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E2DED6] text-xs font-mono text-[#101113] shadow-xs">
                <span className="text-[#6A6C71] mr-2">Body Font:</span>
                <span className="text-[#856A41] font-bold">Manrope</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E2DED6] text-xs font-mono text-[#101113] shadow-xs">
                <span className="text-[#6A6C71] mr-2">Primary Accent:</span>
                <span className="text-[#856A41] font-bold">#856A41 (Bronze)</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-8 mt-8 border-t border-[#E2DED6] font-mono text-xs">
            {[
              { id: 'all', label: 'All Brand Standards' },
              { id: 'typography', label: '01 Typography' },
              { id: 'colors', label: '02 Color Palette' },
              { id: 'logo', label: '03 Logo & Marks' },
              { id: 'components', label: '04 Motion & Radius' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0B0B0C] text-[#F4F2EE] shadow-md'
                    : 'bg-white text-[#5B5D62] border border-[#E2DED6] hover:text-[#101113]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">

        {/* ==========================================
            SECTION 01: TYPOGRAPHY SYSTEM
        ========================================== */}
        {(activeTab === 'all' || activeTab === 'typography') && (
          <section className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DED6]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#856A41]/10 border border-[#856A41]/20 text-[#856A41] font-mono font-bold flex items-center justify-center text-sm">
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#101113] tracking-tight font-display">Typography System</h2>
                  <p className="text-xs text-[#5B5D62]">Satoshi for contemporary display headings paired with Manrope for warm body text.</p>
                </div>
              </div>
            </div>

            {/* Interactive Live Font Tester */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2DED6] space-y-4 shadow-xs">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#856A41] uppercase tracking-[0.16em] font-bold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> Live Text Previewer
                </span>
                <span className="text-[11px] text-[#6A6C71] font-mono">Type custom text to preview</span>
              </div>
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF9F7] border border-[#E2DED6] text-sm text-[#101113] focus:border-[#856A41] focus:outline-none transition-colors"
                placeholder="Type sample text here..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Satoshi Display Font */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2DED6] space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2DED6]">
                  <div>
                    <div className="inline-block text-[10px] font-mono text-[#856A41] bg-[#856A41]/10 border border-[#856A41]/20 px-2.5 py-0.5 rounded-full font-bold mb-2">
                      DISPLAY & HEADINGS: SATOSHI
                    </div>
                    <h3 className="text-3xl font-black text-[#101113] font-display tracking-tight">
                      Satoshi
                    </h3>
                    <p className="text-xs text-[#5B5D62] mt-1">
                      Modern, geometric sans-serif used for page titles, hero headlines, and section headers.
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy("font-family: 'Satoshi', sans-serif;", 'satoshi-font')}
                    className="px-3.5 py-2 rounded-xl bg-[#FAF9F7] border border-[#E2DED6] hover:bg-[#F3F1ED] text-xs font-mono text-[#101113] flex items-center gap-2 self-start sm:self-auto cursor-pointer"
                  >
                    {copiedCode === 'satoshi-font' ? <Check className="w-3.5 h-3.5 text-[#856A41]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy CSS Rule</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[11px] font-mono text-[#6A6C71] uppercase mb-1">Fluid H1 (clamp 2.45rem - 4.9rem)</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#101113] font-display tracking-tight leading-tight">
                      {sampleText}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-[#6A6C71] uppercase mb-1">Satoshi Bold (700) — Section Headings</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#101113] font-display">
                      {sampleText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Manrope Body & Label Font */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2DED6] space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2DED6]">
                  <div>
                    <div className="inline-block text-[10px] font-mono text-[#856A41] bg-[#856A41]/10 border border-[#856A41]/20 px-2.5 py-0.5 rounded-full font-bold mb-2">
                      BODY & LABELS: MANROPE
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#101113] font-sans">
                      Manrope
                    </h3>
                    <p className="text-xs text-[#5B5D62] mt-1">
                      Warm humanist sans-serif used for body paragraphs, buttons, navigation, and small uppercase eyebrows.
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy("font-family: 'Manrope', sans-serif;", 'manrope-font')}
                    className="px-3.5 py-2 rounded-xl bg-[#FAF9F7] border border-[#E2DED6] hover:bg-[#F3F1ED] text-xs font-mono text-[#101113] flex items-center gap-2 self-start sm:self-auto cursor-pointer"
                  >
                    {copiedCode === 'manrope-font' ? <Check className="w-3.5 h-3.5 text-[#856A41]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy CSS Rule</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[11px] font-mono text-[#6A6C71] uppercase mb-1">Manrope Eyebrow / Label (11px, 0.16em tracking)</div>
                    <div className="text-xs font-bold text-[#856A41] uppercase tracking-[0.16em]">
                      {sampleText}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-[#6A6C71] uppercase mb-1">Manrope Body (17px, line-height 1.62)</div>
                    <div className="text-base text-[#5B5D62] leading-[1.62]">
                      {sampleText}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </section>
        )}

        {/* ==========================================
            SECTION 02: COLOR PALETTE
        ========================================== */}
        {(activeTab === 'all' || activeTab === 'colors') && (
          <section className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DED6]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#856A41]/10 border border-[#856A41]/20 text-[#856A41] font-mono font-bold flex items-center justify-center text-sm">
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#101113] tracking-tight font-display">Colour Palette Architecture</h2>
                  <p className="text-xs text-[#5B5D62]">Soft paper neutrals, deep charcoal ink, and grounded bronze accents.</p>
                </div>
              </div>
            </div>

            {/* Bronze Accent Swatches */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-[#856A41] font-bold">
                The Accent: Bronze (#856A41)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bronzeColors.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopy(c.hex, c.hex)}
                    className="p-5 rounded-2xl bg-white border border-[#E2DED6] hover:border-[#856A41] transition-all cursor-pointer group shadow-xs"
                  >
                    <div className={`w-full h-20 rounded-xl ${c.bg} border border-[#E2DED6] flex items-end justify-end p-3`}>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-white`}>
                        {c.hex}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs font-bold text-[#101113] flex items-center justify-between">
                        <span>{c.name}</span>
                        {copiedCode === c.hex ? <Check className="w-3.5 h-3.5 text-[#856A41]" /> : <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#6A6C71]" />}
                      </div>
                      <p className="text-[11px] text-[#5B5D62] mt-1 leading-normal">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Light Backgrounds Swatches */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-[#101113] font-bold">
                Light Backgrounds & Surfaces
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {lightColors.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopy(c.hex, c.hex)}
                    className="p-5 rounded-2xl bg-white border border-[#E2DED6] hover:border-[#856A41] transition-all cursor-pointer group shadow-xs"
                  >
                    <div className={`w-full h-16 rounded-xl ${c.bg} border ${c.border} flex items-end justify-end p-2.5`}>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 text-white">
                        {c.hex}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-bold text-[#101113] flex items-center justify-between">
                        <span>{c.name}</span>
                        {copiedCode === c.hex ? <Check className="w-3.5 h-3.5 text-[#856A41]" /> : <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#6A6C71]" />}
                      </div>
                      <p className="text-[11px] text-[#5B5D62] mt-1 leading-normal">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Backgrounds Swatches */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-[#101113] font-bold">
                Dark Backgrounds (Ink #0B0B0C)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {darkColors.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => handleCopy(c.hex, c.hex)}
                    className="p-5 rounded-2xl bg-[#0B0B0C] border border-white/10 hover:border-[#C7A472] transition-all cursor-pointer group shadow-xs text-white"
                  >
                    <div className={`w-full h-16 rounded-xl ${c.bg} border border-white/10 flex items-end justify-end p-2.5`}>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/20 text-white">
                        {c.hex}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-bold text-[#F4F2EE] flex items-center justify-between">
                        <span>{c.name}</span>
                        {copiedCode === c.hex ? <Check className="w-3.5 h-3.5 text-[#C7A472]" /> : <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#B8B5AD]" />}
                      </div>
                      <p className="text-[11px] text-[#B8B5AD] mt-1 leading-normal">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* ==========================================
            SECTION 03: LOGO & MARKS
        ========================================== */}
        {(activeTab === 'all' || activeTab === 'logo') && (
          <section className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DED6]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#856A41]/10 border border-[#856A41]/20 text-[#856A41] font-mono font-bold flex items-center justify-center text-sm">
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#101113] tracking-tight font-display">Logo & Identity Marks</h2>
                  <p className="text-xs text-[#5B5D62]">Minimalist typography logotype on paper and ink backgrounds.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Light Mode Main Logo */}
              <div className="p-8 rounded-3xl bg-white border border-[#E2DED6] space-y-4 shadow-xs">
                <div className="text-[10px] font-mono text-[#6A6C71] uppercase tracking-[0.16em]">Primary Paper Logotype</div>
                <div className="p-8 rounded-2xl bg-[#FAF9F7] border border-[#E2DED6] flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B0B0C] text-[#F4F2EE] font-bold text-lg flex items-center justify-center font-display">
                      B
                    </div>
                    <div>
                      <div className="text-lg font-bold tracking-tight text-[#101113] font-display flex items-center gap-1.5">
                        BECKON <span className="text-[#856A41] font-normal">PARTNERS</span>
                      </div>
                      <div className="text-[10px] tracking-[0.16em] text-[#5B5D62] font-mono uppercase">
                        BUSINESS ARCHITECTURE
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#5B5D62]">Primary brand mark used on paper canvas pages, documents, and navigation.</p>
              </div>

              {/* Dark Mode Main Logo */}
              <div className="p-8 rounded-3xl bg-[#0B0B0C] border border-white/10 space-y-4 shadow-xs text-white">
                <div className="text-[10px] font-mono text-[#B8B5AD] uppercase tracking-[0.16em]">Ink Hero Logotype</div>
                <div className="p-8 rounded-2xl bg-[#161719] border border-white/10 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C7A472] text-[#0B0B0C] font-bold text-lg flex items-center justify-center font-display">
                      B
                    </div>
                    <div>
                      <div className="text-lg font-bold tracking-tight text-[#F4F2EE] font-display flex items-center gap-1.5">
                        BECKON <span className="text-[#C7A472] font-normal">PARTNERS</span>
                      </div>
                      <div className="text-[10px] tracking-[0.16em] text-[#B8B5AD] font-mono uppercase">
                        BUSINESS ARCHITECTURE
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#B8B5AD]">Reversed mark used inside hero headers and dark footer containers.</p>
              </div>

            </div>
          </section>
        )}

        {/* ==========================================
            SECTION 04: MOTION & RADIUS
        ========================================== */}
        {(activeTab === 'all' || activeTab === 'components') && (
          <section className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DED6]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#856A41]/10 border border-[#856A41]/20 text-[#856A41] font-mono font-bold flex items-center justify-center text-sm">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#101113] tracking-tight font-display">Motion & Corner Radius Tokens</h2>
                  <p className="text-xs text-[#5B5D62]">Smooth 420ms cubic-bezier easing with 12px, 18px, and 26px corner radii.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-[12px] bg-white border border-[#E2DED6] space-y-2">
                <div className="text-xs font-mono font-bold text-[#856A41]">--radius: 12px</div>
                <div className="text-sm font-bold text-[#101113]">Standard Buttons & Cards</div>
                <p className="text-xs text-[#5B5D62]">Not too round, not too sharp — contemporary balance.</p>
              </div>

              <div className="p-6 rounded-[18px] bg-white border border-[#E2DED6] space-y-2">
                <div className="text-xs font-mono font-bold text-[#856A41]">--radius-lg: 18px</div>
                <div className="text-sm font-bold text-[#101113]">Larger Panels & Modals</div>
                <p className="text-xs text-[#5B5D62]">Used for elevated feature blocks and container cards.</p>
              </div>

              <div className="p-6 rounded-[26px] bg-white border border-[#E2DED6] space-y-2">
                <div className="text-xs font-mono font-bold text-[#856A41]">--radius-xl: 26px</div>
                <div className="text-sm font-bold text-[#101113]">Hero Banner Wrappers</div>
                <p className="text-xs text-[#5B5D62]">Soft framing for primary section callouts and hero wrappers.</p>
              </div>

            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <div className="p-10 rounded-[26px] bg-[#0B0B0C] border border-white/10 text-center space-y-4 shadow-xl text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#856A41]/20 border border-[#C7A472]/30 text-xs font-mono font-bold text-[#C7A472]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DESIGN SYSTEM IMPLEMENTED</span>
          </div>
          <h3 className="text-2xl font-bold text-[#F4F2EE] tracking-tight font-display">
            Need Architecture Briefing or Design Tokens?
          </h3>
          <p className="text-xs sm:text-sm text-[#B8B5AD] max-w-xl mx-auto leading-relaxed font-sans">
            Our systems architecture team maintains full token sync for production web apps, databases, and executive reporting interfaces.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 rounded-[12px] text-xs font-bold bg-[#856A41] text-white hover:bg-[#C7A472] hover:text-[#0B0B0C] transition-all font-mono cursor-pointer shadow-md"
            >
              Contact Advisory Team
            </button>
            <button
              onClick={() => onNavigate('/assessment')}
              className="px-6 py-3.5 rounded-[12px] text-xs font-bold border border-white/20 text-[#F4F2EE] hover:bg-white/10 transition-all font-mono cursor-pointer"
            >
              Start 5-Min Diagnostic
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
