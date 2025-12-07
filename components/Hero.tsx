import React from 'react';
import { ArrowRight, Zap, TrendingUp, BarChart3, MousePointerClick } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-48 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-black">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Pill Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors">
            <Zap className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            <span className="text-sm font-medium text-zinc-300">
              Strategy × Creativity × Performance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-white">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-brand-yellow">
              Growth Engines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            You don’t need just marketing. You need a growth partner. We turn bold ideas into
            measurable results that scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
            >
              Start Growing 🚀
            </a>
            <a
              href="#results"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/10 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Our Work <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* New Dashboard Mockup Visual */}
          <div className="mt-24 relative w-full max-w-5xl mx-auto perspective-1000">
            {/* Main Dashboard Card */}
            <div className="relative rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500">
              {/* Header / Toolbar */}
              <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-zinc-500 flex-1 text-center flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  coolcliq_growth_engine_v2.0
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 md:gap-8 text-left">
                {/* Left Column: Active Channels */}
                <div className="col-span-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                      Active Channels
                    </span>
                    <MousePointerClick className="w-4 h-4 text-zinc-600" />
                  </div>

                  {/* Meta Ads Card */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/5 hover:bg-white/5 transition-colors group/card cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-blue-500/20">
                        f
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Meta / Instagram</div>
                        <div className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Scale
                          Phase
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 pl-11">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400">CTR</span>
                        <span className="text-white font-mono">2.4%</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400">ROAS</span>
                        <span className="text-green-400 font-mono font-bold">4.2x</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Ads Card */}
                  <div className="bg-black/40 rounded-xl p-4 border border-white/5 hover:bg-white/5 transition-colors group/card cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold shrink-0 shadow-lg">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
                          G
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Google Ads</div>
                        <div className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Optimized
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 pl-11">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400">Impression Share</span>
                        <span className="text-white font-mono">90%</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400">Conv. Rate</span>
                        <span className="text-white font-mono">12.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Main Chart & Metrics */}
                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <div className="flex flex-wrap justify-between items-end mb-6 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-zinc-400">Total Revenue Generated</span>
                        <span className="bg-brand-yellow/10 text-brand-yellow text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Live
                        </span>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
                        $142,850<span className="text-zinc-600">.00</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-bold inline-flex items-center gap-1 border border-green-500/20">
                        <TrendingUp className="w-4 h-4" /> +127% Growth
                      </div>
                    </div>
                  </div>

                  {/* The Graph Visual */}
                  <div className="flex-1 w-full bg-black/20 rounded-2xl border border-white/5 relative overflow-hidden h-[200px] md:h-auto min-h-[200px] group/graph">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-30">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="border-r border-b border-white/5"></div>
                      ))}
                    </div>

                    {/* SVG Graph */}
                    <svg
                      className="absolute inset-0 w-full h-full pt-8 px-0"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 50"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Line Path */}
                      <path
                        d="M0 45 C 10 40, 20 42, 30 35 S 50 30, 60 20 S 80 15, 100 5 L 100 50 L 0 50 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0 45 C 10 40, 20 42, 30 35 S 50 30, 60 20 S 80 15, 100 5"
                        fill="none"
                        stroke="#FFC107"
                        strokeWidth="0.5"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]"
                      />

                      {/* Data Points */}
                      <circle cx="30" cy="35" r="1.5" fill="#fff" opacity="0.5" />
                      <circle cx="60" cy="20" r="1.5" fill="#fff" opacity="0.5" />
                      <circle
                        cx="100"
                        cy="5"
                        r="2"
                        fill="#fff"
                        className="animate-ping opacity-75"
                      />
                      <circle cx="100" cy="5" r="2" fill="#fff" />
                    </svg>

                    {/* Floating Stats Badges */}
                    <div
                      className="absolute top-4 right-8 bg-zinc-900/90 border border-white/10 p-2 md:p-3 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce shadow-black/50"
                      style={{ animationDuration: '3s' }}
                    >
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
                        <BarChart3 className="w-4 h-4 text-brand-yellow" />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                          Conv. Rate
                        </div>
                        <div className="text-sm font-bold text-white">
                          4.8% <span className="text-green-500 text-xs">▲</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow under the image */}
            <div className="absolute -inset-4 bg-brand-yellow/10 blur-[60px] -z-10 rounded-[3rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};
