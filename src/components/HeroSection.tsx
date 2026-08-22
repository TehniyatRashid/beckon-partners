import React, { useEffect, useRef } from 'react';
import { RoutePath } from '../types';
import { BeckonLogo } from './BeckonLogo';
import { ArrowRight, ShieldCheck, RotateCcw, Zap, Check, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: RoutePath) => void;
}

/* ---------------------------------------------------------------------------
   SCENE GEOMETRY (authored in a 760 x 540 viewBox)
   The five systems sit on an ellipse around the Beckon core. Scattered tool
   fragments are drawn INTO the core, then the five systems emit outward from
   it — the movement states the thesis: connection happens through Beckon.
   --------------------------------------------------------------------------- */
const W = 760;
const H = 540;
const CX = 380;
const CY = 258;

const HUBS = [0, 1, 2, 3, 4].map((i) => {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return { x: CX + Math.cos(a) * 262, y: CY + Math.sin(a) * 136 };
});

const SYSTEMS = [
  { code: '01', title: 'Customer Growth', benefit: 'Attract, understand and retain more customers' },
  { code: '02', title: 'Revenue Growth', benefit: 'Recover opportunities and improve profitability' },
  { code: '03', title: 'Operational Excellence', benefit: 'Reduce waste, manual work and operational friction' },
  { code: '04', title: 'Team Productivity', benefit: 'Teams work faster with clearer processes' },
  { code: '05', title: 'Executive Intelligence', benefit: 'Clearer visibility and better decisions' }
];

const CHIPS = [
  { label: 'POS Terminal', sx: 92, sy: 74 },
  { label: 'Spreadsheets', sx: 262, sy: 46 },
  { label: 'Web Forms', sx: 470, sy: 58 },
  { label: 'WhatsApp', sx: 648, sy: 96 },
  { label: 'Missed Calls', sx: 700, sy: 250 },
  { label: 'Invoices', sx: 664, sy: 412 },
  { label: 'Supplier PDFs', sx: 494, sy: 484 },
  { label: 'Job Sheets', sx: 306, sy: 496 },
  { label: 'Rotas', sx: 128, sy: 440 },
  { label: 'Inbox', sx: 58, sy: 272 },
  { label: 'Stock Counts', sx: 196, sy: 178 },
  { label: 'Bookings', sx: 560, sy: 186 },
  { label: 'Payroll', sx: 236, sy: 352 },
  { label: 'Monthly PDF', sx: 552, sy: 338 }
];

const BROKEN: [number, number][] = [
  [0, 7], [1, 9], [2, 11], [3, 6], [4, 12], [5, 8], [10, 13], [0, 4]
];

const CAPTIONS: { text: string; from: number; to: number; tone: string }[] = [
  { text: "Your tools don't talk to each other", from: 0.15, to: 2.45, tone: '#8C8F98' },
  { text: 'Beckon connects the pieces', from: 2.45, to: 4.5, tone: '#C7A472' },
  { text: 'Five connected business systems', from: 4.5, to: 6.8, tone: '#C7A472' },
  { text: 'Measurable business outcomes', from: 6.8, to: 99, tone: '#7BC79A' }
];

const OUTCOMES = [
  { label: 'Faster Response', Icon: Zap, at: 6.8 },
  { label: 'Less Manual Work', Icon: Check, at: 7.0 },
  { label: 'Better Margins', Icon: TrendingUp, at: 7.2 }
];

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const seg = (t: number, s: number, d: number) => clamp((t - s) / d, 0, 1);
const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);
const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const easeBack = (p: number) => {
  const c = 1.7;
  return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2);
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<number>(-1);
  const startRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const handleNav = (route: RoutePath) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const root = stageRef.current;
    if (!root) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const q = (sel: string) =>
      Array.from(root.querySelectorAll(sel)) as unknown as (HTMLElement & SVGElement)[];
    startRef.current = performance.now() - (reduced ? 10000 : 0);

    let running = true;
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(([e]) => { running = e.isIntersecting; }, { threshold: 0.05 })
        : null;
    if (io) io.observe(root);

    const chipEls = q('[data-chip]');
    const brokenEls = q('[data-brk]');
    const hubEls = q('[data-hub]');
    const spokeEls = q('[data-spoke]');
    const ringEls = q('[data-ringpath]');
    const pulseEls = q('[data-pulse]');
    const labEls = q('[data-lab]');
    const capEls = q('[data-cap]');
    const outEls = q('[data-out]');

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!running) return;

      const t = ((now - startRef.current) / 1000) * 1.5;
      const clk = now / 1000;
      const hover = hoverRef.current;

      /* --- fragments drawn into the core --- */
      const pos: [number, number][] = [];
      let absorbed = 0;
      chipEls.forEach((el, i) => {
        const c = CHIPS[i];
        const p = easeInOut(seg(t, 2.35 + i * 0.055, 1.45));
        if (p > 0.98) absorbed++;
        const dx = Math.sin(clk * 0.62 + i * 1.7) * 9 * (1 - p);
        const dy = Math.cos(clk * 0.51 + i * 2.3) * 7 * (1 - p);
        const arc = Math.sin(p * Math.PI) * ((i % 2 ? 1 : -1) * 52);
        const nx = CX - c.sx;
        const ny = CY - c.sy;
        const len = Math.hypot(nx, ny) || 1;
        const x = c.sx + nx * p + dx + (-ny / len) * arc;
        const y = c.sy + ny * p + dy + (nx / len) * arc;
        pos.push([x, y]);
        const app = easeOut(seg(t, 0.1 + i * 0.045, 0.5));
        el.style.left = `${(x / W) * 100}%`;
        el.style.top = `${(y / H) * 100}%`;
        el.style.transform = `translate(-50%,-50%) scale(${(1 - 0.72 * p) * (0.8 + 0.2 * app)})`;
        el.style.opacity = (app * (1 - Math.pow(p, 1.8))).toFixed(3);
      });

      /* --- failing links between the disconnected pieces --- */
      const chaos = 1 - seg(t, 1.9, 0.7);
      brokenEls.forEach((l, k) => {
        const [a, b] = BROKEN[k];
        const A = pos[a];
        const B = pos[b];
        if (!A || !B) return;
        l.setAttribute('x1', String(A[0]));
        l.setAttribute('y1', String(A[1]));
        l.setAttribute('x2', String(B[0]));
        l.setAttribute('y2', String(B[1]));
        const flick = 0.32 + 0.3 * Math.sin(clk * 5.2 + a * 2.1) * Math.sin(clk * 2.7 + b);
        l.setAttribute('opacity', (Math.max(0, flick) * chaos).toFixed(3));
        l.setAttribute('stroke-dashoffset', ((clk * 14) % 8).toFixed(2));
      });

      /* --- the Beckon core --- */
      const coreIn = clamp(easeBack(seg(t, 2.1, 0.7)), 0, 1);
      const core = root.querySelector('[data-core]') as HTMLElement | null;
      if (core) {
        const breathe = 1 + 0.035 * Math.sin(clk * 1.9);
        core.style.opacity = coreIn.toFixed(3);
        core.style.transform = `translate(-50%,-50%) scale(${(0.6 + 0.4 * coreIn) * breathe})`;
      }
      const glow = root.querySelector('[data-coreglow]');
      if (glow) {
        const fill = absorbed / CHIPS.length;
        glow.setAttribute(
          'opacity',
          (seg(t, 2.4, 1) * (0.45 + 0.4 * fill) * (0.78 + 0.22 * Math.sin(clk * 1.9))).toFixed(3)
        );
        glow.setAttribute('r', (78 + 22 * fill).toFixed(1));
      }

      const rot = root.querySelector('[data-rot]');
      if (rot) rot.setAttribute('transform', `rotate(${Math.sin(clk * 0.18) * 1.6} ${CX} ${CY})`);

      /* --- the five systems emit outward --- */
      hubEls.forEach((el, i) => {
        const p = clamp(easeBack(seg(t, 3.5 + i * 0.16, 0.65)), 0, 1.2);
        const act = hover === i;
        const dim = hover >= 0 && !act;
        const breathe = 1 + 0.05 * Math.sin(clk * 1.6 + i);
        el.setAttribute('cx', String(HUBS[i].x));
        el.setAttribute('cy', String(HUBS[i].y));
        el.setAttribute('r', (19 * p * breathe * (act ? 1.18 : 1)).toFixed(2));
        el.setAttribute('opacity', (clamp(p, 0, 1) * (dim ? 0.32 : 1)).toFixed(3));
        el.setAttribute('stroke-width', act ? '2.6' : '1.6');
      });

      spokeEls.forEach((el, i) => {
        const p = easeOut(seg(t, 4.05 + i * 0.13, 0.7));
        const h = HUBS[i];
        const L = Math.hypot(h.x - CX, h.y - CY);
        const act = hover === i;
        const dim = hover >= 0 && !act;
        el.setAttribute('x1', String(CX));
        el.setAttribute('y1', String(CY));
        el.setAttribute('x2', String(h.x));
        el.setAttribute('y2', String(h.y));
        el.setAttribute('stroke-dasharray', String(L));
        el.setAttribute('stroke-dashoffset', (L * (1 - p)).toFixed(1));
        el.setAttribute('opacity', (dim ? 0.18 : act ? 1 : 0.6).toFixed(2));
        el.setAttribute('stroke-width', act ? '2.4' : '1.4');
      });

      ringEls.forEach((el, i) => {
        const a = HUBS[i];
        const b = HUBS[(i + 1) % 5];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const qx = CX + (mx - CX) * 1.16;
        const qy = CY + (my - CY) * 1.16;
        el.setAttribute('d', `M${a.x} ${a.y} Q${qx} ${qy} ${b.x} ${b.y}`);
        const path = el as unknown as SVGPathElement;
        const L = path.getTotalLength ? path.getTotalLength() : 300;
        const p = easeOut(seg(t, 5.3 + i * 0.14, 0.75));
        el.setAttribute('stroke-dasharray', String(L));
        el.setAttribute('stroke-dashoffset', (L * (1 - p)).toFixed(1));
        el.setAttribute('opacity', (hover >= 0 ? 0.14 : 1).toFixed(2));
      });

      /* --- data flowing core -> system, continuously --- */
      const flowOn = seg(t, 4.6, 0.6);
      pulseEls.forEach((el, i) => {
        const h = HUBS[i];
        const p = (clk * 0.42 + i * 0.2) % 1;
        const e = p < 0.85 ? p / 0.85 : 1;
        el.setAttribute('cx', String(CX + (h.x - CX) * e));
        el.setAttribute('cy', String(CY + (h.y - CY) * e));
        const dim = hover >= 0 && hover !== i;
        el.setAttribute(
          'opacity',
          (flowOn * Math.sin(Math.min(p / 0.85, 1) * Math.PI) * (dim ? 0.2 : 1)).toFixed(3)
        );
        el.setAttribute('r', hover === i ? '3.6' : '2.6');
      });

      labEls.forEach((el, i) => {
        const p = easeOut(seg(t, 5.7 + i * 0.2, 0.6));
        const h = HUBS[i];
        const above = h.y < CY - 40;
        const ly = above ? h.y - 108 : h.y + 30;
        const dim = hover >= 0 && hover !== i;
        el.style.left = `${(h.x / W) * 100}%`;
        el.style.top = `${(ly / H) * 100}%`;
        el.style.transform = `translate(-50%,${(1 - p) * 10}px)`;
        el.style.opacity = (p * (dim ? 0.3 : 1)).toFixed(3);
      });

      capEls.forEach((el, i) => {
        const c = CAPTIONS[i];
        const on = seg(t, c.from, 0.45) * (1 - seg(t, c.to, 0.4));
        el.style.opacity = on.toFixed(3);
        el.style.transform = `translateY(${(1 - on) * 5}px)`;
      });

      const outWrap = root.querySelector('[data-outcomes]') as HTMLElement | null;
      if (outWrap) {
        const p = easeOut(seg(t, 6.6, 0.6));
        outWrap.style.opacity = p.toFixed(3);
        outWrap.style.transform = `translateY(${(1 - p) * 8}px)`;
      }
      outEls.forEach((el, i) => {
        const p = easeOut(seg(t, OUTCOMES[i].at, 0.55));
        el.style.opacity = p.toFixed(3);
        el.style.transform = `translateY(${(1 - p) * 7}px)`;
      });
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (io) io.disconnect();
    };
  }, []);

  const replay = () => { startRef.current = performance.now(); };

  return (
    <section
      id="hero"
      className="relative bg-[#FAF8F5] text-[#0F1115] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-b border-[#E8E4DC]"
      aria-label="Beckon Partners Business Systems Advisory"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,17,21,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,21,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%)'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#C7A472]/12 blur-[160px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: positioning */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 sm:space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D6D0C4]">
              <span className="w-2 h-2 rounded-full bg-[#856A41] animate-pulse" />
              <span
                className="font-mono font-bold tracking-[0.14em] text-[#856A41] uppercase whitespace-nowrap"
                style={{ fontSize: 'clamp(9.5px, 0.78vw, 11px)' }}
              >
                Business Systems Advisory &amp; Architecture
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-inter font-bold tracking-tight text-[#0F1115] leading-[1.12]">
              Your Business Has Systems. <br />
              <span className="text-[#856A41]">We Make Them Work Together.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#52555C] max-w-xl leading-relaxed font-manrope">
              We eliminate disconnected tools, manual data entry, and reporting blindspots—connecting your people,
              workflows, and data into five unified business systems built for scale.
            </p>

            <div className="pt-2 flex items-center">
              <button
                onClick={() => handleNav('/assessment')}
                className="px-10 py-4 rounded-full bg-[#0F1115] text-[#FAF8F5] text-base font-semibold tracking-tight hover:bg-[#1E2028] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-3 group cursor-pointer border border-[#856A41]/40 whitespace-nowrap"
              >
                <span>Start Business Assessment</span>
                <ArrowRight className="w-[18px] h-[18px] text-[#C7A472] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6A6D76] font-manrope pt-1">
              <ShieldCheck className="w-4 h-4 text-[#856A41] shrink-0" />
              <span>Zero workflow disruption · Built alongside your existing software</span>
            </div>
          </div>

          {/* RIGHT: the animation stage */}
          <div className="lg:col-span-7 w-full">
            <div ref={stageRef} className="relative bg-[#0B0C0E] text-white p-5 sm:p-[22px] rounded-[28px] border border-[#856A41]/30 shadow-[0_24px_60px_rgba(15,17,21,0.35)] overflow-hidden">
              <div className="absolute -top-20 -right-16 w-[340px] h-[340px] rounded-full bg-[#C7A472]/15 blur-[70px] pointer-events-none" />

              {/* caption track — reserves room so the replay pill can never be reached */}
              {/* NOTE: intentionally NOT position:relative — the replay pill below must
                  anchor to the panel, not to this 22px row. */}
              <div className="block min-h-[22px]" style={{ zIndex: 20 }}>
                <div className="relative h-5 w-full overflow-hidden" style={{ paddingRight: 112, boxSizing: 'border-box' }}>
                  {CAPTIONS.map((c) => (
                    <span
                      key={c.text}
                      data-cap
                      className="absolute left-0 top-0 font-mono font-bold uppercase whitespace-nowrap opacity-0"
                      style={{ fontSize: 10.5, letterSpacing: '0.1em', color: c.tone }}
                    >
                      {c.text}
                    </span>
                  ))}
                </div>

                <button
                  onClick={replay}
                  title="Replay the story"
                  className="absolute right-[22px] bottom-6 z-40 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 text-[#8C8F98] hover:text-[#C7A472] hover:border-[#C7A472]/50 transition-colors font-mono uppercase cursor-pointer"
                  style={{ fontSize: 10, letterSpacing: '0.1em', background: 'rgba(11,12,14,0.6)', backdropFilter: 'blur(4px)' }}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Replay</span>
                </button>
              </div>

              {/* SCENE */}
              <div
                className="relative w-full mt-1.5"
                style={{ aspectRatio: '760 / 540', containerType: 'inline-size' } as React.CSSProperties}
              >
                <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <defs>
                    <radialGradient id="beckonCoreGlow">
                      <stop offset="0" stopColor="#C7A472" stopOpacity="0.55" />
                      <stop offset="1" stopColor="#C7A472" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <g stroke="#5A4A57" strokeWidth={1} strokeDasharray="3 5">
                    {BROKEN.map((_, i) => (
                      <line key={i} data-brk="" />
                    ))}
                  </g>

                  <g data-rot="">
                    <g stroke="rgba(199,164,114,0.34)" strokeWidth={1.1} fill="none">
                      {HUBS.map((_, i) => (
                        <path key={i} data-ringpath="" />
                      ))}
                    </g>
                    <g stroke="#C7A472" strokeWidth={1.4} fill="none" strokeLinecap="round">
                      {HUBS.map((_, i) => (
                        <line key={i} data-spoke="" />
                      ))}
                    </g>
                    <g fill="#F0DCB8">
                      {HUBS.map((_, i) => (
                        <circle key={i} data-pulse="" r={2.6} />
                      ))}
                    </g>
                    <circle data-coreglow="" cx={CX} cy={CY} r={86} fill="url(#beckonCoreGlow)" opacity={0} />
                    <g>
                      {HUBS.map((_, i) => (
                        <circle key={i} data-hub="" r={19} fill="#12141A" stroke="#C7A472" strokeWidth={1.6} />
                      ))}
                    </g>
                  </g>
                </svg>

                {/* Beckon core — the real BP mark */}
                <div
                  data-core=""
                  className="absolute grid place-items-center rounded-[20px] bg-[#0B0C0E] border-[1.5px] border-[#C7A472] opacity-0 overflow-hidden p-2.5"
                  style={{
                    left: '50%',
                    top: '47.8%',
                    width: 78,
                    height: 78,
                    transform: 'translate(-50%,-50%) scale(0.6)',
                    boxShadow: '0 0 40px rgba(199,164,114,0.4)'
                  }}
                >
                  <BeckonLogo iconOnly theme="light" size="lg" />
                </div>

                {/* scattered tool fragments */}
                {CHIPS.map((c) => (
                  <div
                    key={c.label}
                    data-chip=""
                    className="absolute font-mono whitespace-nowrap pointer-events-none rounded-[7px] border border-white/10 text-[#9CA0A9]"
                    style={{
                      left: 0,
                      top: 0,
                      transform: 'translate(-50%,-50%)',
                      padding: '5px 9px',
                      background: 'rgba(255,255,255,0.045)',
                      fontSize: 9.5,
                      letterSpacing: '0.05em'
                    }}
                  >
                    {c.label}
                  </div>
                ))}

                {/* the five systems */}
                {SYSTEMS.map((s, i) => (
                  <div
                    key={s.code}
                    data-lab=""
                    onMouseEnter={() => { hoverRef.current = i; }}
                    onMouseLeave={() => { hoverRef.current = -1; }}
                    onClick={() => handleNav('/systems')}
                    className="absolute text-center opacity-0 cursor-pointer"
                    style={{ left: 0, top: 0, width: '28.7%', transform: 'translate(-50%,0)' }}
                  >
                    <div
                      className="font-mono font-bold text-[#A2854F]"
                      style={{ fontSize: 'clamp(8.5px, 1.61cqw, 9.5px)', letterSpacing: '0.2em' }}
                    >
                      {s.code}
                    </div>
                    <div
                      className="font-inter font-bold text-[#F7F5F1] mt-[3px]"
                      style={{ fontSize: 'clamp(12.5px, 2.62cqw, 15.5px)', lineHeight: 1.2, letterSpacing: '-0.012em' }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="font-manrope text-[#A8ACB6] mt-1"
                      style={{ fontSize: 'clamp(11px, 2.12cqw, 12.5px)', lineHeight: 1.4, textWrap: 'pretty' } as React.CSSProperties}
                    >
                      {s.benefit}
                    </div>
                  </div>
                ))}
              </div>

              {/* qualitative outcomes — no invented statistics */}
              <div
                data-outcomes=""
                className="relative z-10 mt-1 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center pr-24 sm:pr-28 opacity-0"
                style={{ gap: '12px 20px', minWidth: 0 }}
              >
                {OUTCOMES.map(({ label, Icon }, idx) => (
                  <React.Fragment key={label}>
                    <span
                      data-out=""
                      className="inline-flex items-center gap-2.5 font-inter font-semibold text-[#F7F5F1] whitespace-nowrap"
                      style={{ fontSize: 'clamp(12.5px, 1.05vw, 15px)', letterSpacing: '-0.005em' }}
                    >
                      <Icon className="w-[15px] h-[15px] text-[#C7A472] shrink-0" />
                      {label}
                    </span>
                    {idx < OUTCOMES.length - 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A472]/50 flex-none" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
