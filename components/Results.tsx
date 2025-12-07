import React from 'react';
import { ArrowUpRight, Trophy, Users, BarChart3, PieChart, Play } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Results We've <span className="text-brand-yellow">Delivered</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Performance isn’t a promise — it’s proof. Every number here is a story of strategy
              well executed.
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-brand-black"
                    src={`https://picsum.photos/50/50?random=${i + 10}`}
                    alt="Client"
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white">Trust is earned.</span>
                <span className="text-sm text-zinc-500">Join our success stories.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stat Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                  <ArrowUpRight />
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Revenue
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1">+240%</h3>
              <p className="text-sm text-zinc-400">Avg. Client Growth</p>
              <div className="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[75%]" />
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500">
                  <Users />
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Leads
                </span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1">15k+</h3>
              <p className="text-sm text-zinc-400">Generated Monthly</p>
              <div className="mt-4 flex gap-1">
                <div className="h-8 w-2 bg-blue-900 rounded-sm" />
                <div className="h-8 w-2 bg-blue-800 rounded-sm" />
                <div className="h-8 w-2 bg-blue-700 rounded-sm" />
                <div className="h-8 w-2 bg-blue-500 rounded-sm" />
                <div className="h-8 w-2 bg-blue-400 rounded-sm" />
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="col-span-2 bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm hover:bg-zinc-800/50 transition-colors flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="text-brand-yellow w-5 h-5" />
                  <span className="text-brand-yellow font-bold">Client Success</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Consistent ROI</h3>
                <p className="text-zinc-400 text-sm">Across 12 different industries.</p>
              </div>
              <div className="w-24 h-24 relative flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-zinc-800"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="25"
                    className="text-brand-yellow"
                  />
                </svg>
                <span className="absolute font-bold text-sm">90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Testimonials Placeholder - Styled as a media gallery */}
        <div className="rounded-[2rem] bg-zinc-900 border border-zinc-800 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 z-10 pointer-events-none" />
          <div className="p-8 md:p-12 text-center relative z-20">
            <h3 className="text-2xl font-bold mb-8">Real Clients. Real Stories.</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-[9/16] bg-zinc-800 rounded-2xl relative group cursor-pointer overflow-hidden border border-white/5"
                >
                  <img
                    src={`https://picsum.photos/400/700?random=${item + 20}`}
                    alt="Testimonial thumbnail"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="fill-white text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="font-bold text-white">Client Name</p>
                    <p className="text-xs text-zinc-300">CEO, Tech Company</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
