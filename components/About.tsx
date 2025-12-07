import React from 'react';
import { BrainCircuit, PenTool, TrendingUp, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-brand-black relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-yellow-700 font-semibold text-sm mb-6">
               <Lightbulb className="w-4 h-4" /> About CoolCliQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Growth isn’t luck.<br />
              It’s a <span className="text-brand-yellow bg-black px-2 transform -skew-x-3 inline-block">strategy.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              We make brands unstoppable. Because growth is a journey — and you shouldn’t walk alone.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              We’re a full-scale digital partner built on the pillars of Strategy, Creativity & Performance. From branding and campaigns to websites and SEO, we turn great ideas into measurable results.
            </p>

            <div className="space-y-6">
                {[
                    { icon: BrainCircuit, title: 'Clarity', desc: 'A plan that knows where it’s going.' },
                    { icon: PenTool, title: 'Creativity', desc: 'Ideas that get noticed & remembered.' },
                    { icon: TrendingUp, title: 'Performance', desc: 'Marketing that pays for itself.' },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                        <div className="w-12 h-12 bg-brand-yellow/20 text-yellow-700 rounded-xl flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-zinc-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-brand-black rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden shadow-2xl">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 blur-[80px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />

                <div className="relative z-10 text-center">
                    <h3 className="text-6xl md:text-8xl font-black text-brand-yellow mb-2">100+</h3>
                    <p className="text-2xl font-bold mb-8">Happy Customers Across the World</p>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6 transform rotate-2 hover:rotate-0 transition-transform">
                        <p className="text-xl font-bold text-brand-yellow mb-1">YOUR BUSINESS</p>
                        <p className="text-3xl font-black">GROWTH</p>
                    </div>

                    <p className="text-zinc-400 italic">"Bold ideas + measurable results = CoolCliQ"</p>
                </div>
            </div>
            
            {/* Image collage effect behind/around */}
             <img 
                src="https://picsum.photos/300/200?random=1" 
                alt="Team working" 
                className="absolute -top-8 -right-8 w-32 md:w-48 h-24 md:h-32 object-cover rounded-2xl border-4 border-white shadow-lg hidden md:block transform rotate-6"
             />
             <img 
                src="https://picsum.photos/300/200?random=2" 
                alt="Strategy meeting" 
                className="absolute -bottom-8 -left-8 w-32 md:w-48 h-24 md:h-32 object-cover rounded-2xl border-4 border-white shadow-lg hidden md:block transform -rotate-6"
             />
          </div>

        </div>
      </div>
    </section>
  );
};