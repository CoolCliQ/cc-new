import React from 'react';
import { Award, Newspaper, Radio, Users, ShieldCheck, Trophy } from 'lucide-react';

export const LocalTrustBadges: React.FC = () => {
  const badges = [
    { icon: Award, text: "Aligarh Business Excellence", sub: "2024 Nominee" },
    { icon: Newspaper, text: "The City Times", sub: "Featured Agency" },
    { icon: Users, text: "UP Startups Forum", sub: "Growth Partner" },
    { icon: Trophy, text: "Local Choice Award", sub: "Best Marketing" },
    { icon: Radio, text: "City FM 90.4", sub: "Brand Talk Guest" },
    { icon: ShieldCheck, text: "Certified Partner", sub: "Aligarh Industrial Hub" },
  ];

  return (
    <section className="bg-brand-black border-y border-white/10 py-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center md:text-left">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Trusted & Featured In Aligarh</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-black to-transparent z-10"></div>

        {/* Marquee Content (Duplicated for seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 px-6">
          {[...badges, ...badges].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <badge.icon className="w-5 h-5 text-brand-yellow" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-zinc-300 font-bold text-sm leading-none mb-1">{badge.text}</span>
                <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-wider">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};