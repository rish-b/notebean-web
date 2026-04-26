import React, { useEffect } from 'react';
import {
  FilePen,
  ListChecks,
  PenSquare,
  LockKeyhole,
  Sun,
  Moon,
  Smartphone,
  Laptop,
  Tablet,
  RefreshCw,
  Smile
} from 'lucide-react';
import bgImage from '../../assets/images/bg_image.svg';
import heroMockupReady from '../../assets/images/hero_mockup_ready1.svg';

const noteItems = [
  { Icon: FilePen, label: 'New Note', accent: true },
  { Icon: ListChecks, label: 'Task List', accent: false },
  { Icon: PenSquare, label: 'Drawing Canvas', accent: false },
  { Icon: Smile, label: 'Custom Emojis', accent: false },
];

const deviceItems = [
  { Icon: Smartphone, label: 'Phone' },
  { Icon: Laptop, label: 'Laptop' },
  { Icon: Tablet, label: 'Tablet' },
];

const Hero = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'hero-float-keyframes';
    style.innerHTML = `
      @keyframes floatA {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-10px); }
      }
      @keyframes floatB {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-14px); }
      }
    `;
    if (!document.getElementById('hero-float-keyframes')) {
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById('hero-float-keyframes');
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="relative min-h-screen h-auto lg:h-screen overflow-hidden">
      {/* Background */}
      <img
        src={bgImage}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="flex-1 max-w-2xl text-text-primary z-30">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Brain, Optimized.
          </h1>
          <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-md text-text-primary/80">
            Ditch the clutter. Capture ideas, secure secrets, and visualize
            your thoughts in a beautiful, unified workspace.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {/* iOS Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 shadow-md"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[11px] opacity-80 font-normal">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </a>

            {/* Android Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border-2 border-primary text-black font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.18.96.04l12.45-7.17-2.68-2.68-10.73 9.81zM.54 1.52C.2 1.86 0 2.4 0 3.09v17.82c0 .69.2 1.23.54 1.57l.08.08 9.98-9.98v-.23L.62 1.44l-.08.08zM21.46 10.5l-2.67-1.54-3.01 3.01 3.01 3.01 2.68-1.55c.77-.44.77-1.49-.01-1.93zM3.18.24L15.91 7.6 13.23 10.27 2.5.46C2.18.29 1.84.3 1.52.46L.54 1.52 3.18.24z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[11px] opacity-70 font-normal">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right Content — Mockup + Floating Cards */}
      <div className="relative lg:absolute lg:right-40 lg:bottom-0 lg:h-full w-full max-w-[1440px] pointer-events-none flex items-end justify-center lg:justify-end z-20 mt-8 lg:mt-0">
        <div className="relative h-[60vw] sm:h-[70vw] md:h-[55vw] lg:h-[85vh] w-auto lg:translate-x-[22%]">

          {/* Phone mockup */}
          <img
            src={heroMockupReady}
            alt="Hero Mockup"
            className="h-full w-auto object-contain transition-transform duration-700 hover:scale-[1.05] pointer-events-auto"
          />

          {/* ── Card 1: Quick Create — left of phone ── */}
          <div
            className="pointer-events-auto absolute"
            style={{
              top: '65%',
              right: '70%',
              animation: 'floatA 5s ease-in-out infinite',
              animationDelay: '0s',
            }}
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-3 shadow-2xl shadow-black/15 flex flex-col gap-1.5 w-44">
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700 mb-0.5">
                Quick Create
              </p>
              {noteItems.map(({ Icon, label, accent }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-default transition-colors ${
                    accent
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-black/5 text-text-primary/80'
                  }`}
                >
                  <Icon size={13} strokeWidth={2} className={`shrink-0 ${accent ? 'text-white' : 'text-purple-700'}`} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Card 2: Appearance — upper right of phone ── */}
          <div
            className="pointer-events-auto absolute"
            style={{
              top: '14%',
              left: '70%',
              animation: 'floatB 6s ease-in-out infinite',
              animationDelay: '0.6s',
            }}
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-3 shadow-2xl shadow-black/15 flex flex-col gap-2.5 w-40">
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700 mb-0.5">
                Appearance
              </p>
              <div className="flex rounded-lg overflow-hidden border border-black/10">
                <div className="flex-1 flex flex-col items-center gap-1 py-2 bg-white/80 text-gray-800 text-[11px] font-semibold">
                  <Sun size={13} strokeWidth={2} className="shrink-0 text-yellow-700"/>
                  Light
                </div>
                <div className="flex-1 flex flex-col items-center gap-1 py-2 bg-gray-900/80 text-white text-[11px] font-semibold">
                  <Moon size={13} strokeWidth={2} className="shrink-0 text-blue-500"/>
                  Dark
                </div>
              </div>
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[11px] text-text-primary/60">Auto-switch</span>
                <div className="w-8 h-4 bg-primary rounded-full relative shadow-inner shrink-0">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 3: Sync Status — lower right of phone ── */}
          <div
            className="pointer-events-auto absolute"
            style={{
              bottom: '20%',
              left: '70%',
              animation: 'floatA 7s ease-in-out infinite',
              animationDelay: '1.2s',
            }}
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-3 shadow-2xl shadow-black/15 flex flex-col gap-2 w-44">
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700 mb-0.5">
                Sync Status
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-text-primary">All devices synced</span>
              </div>
              <p className="text-[10px] text-text-primary/50 pl-4 -mt-0.5">
                Just now · 3 devices
              </p>
              <div className="flex flex-col gap-1.5 mt-0.5">
                {deviceItems.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Icon size={11} strokeWidth={2} className="text-text-primary/50 shrink-0" />
                      <span className="text-[11px] text-text-primary/70">{label}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RefreshCw size={9} strokeWidth={2.5} className="text-green-500" />
                      <span className="text-[9px] text-green-600 font-semibold">Synced</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

