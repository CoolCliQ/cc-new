import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
          Every brand can grow.<br />
          <span className="text-zinc-500">How fast do you want to go?</span>
        </h2>
        
        <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
          Let’s plan your strategy. Let’s create your story. Let’s perform your growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/" // Replace with actual link
            className="w-full sm:w-auto px-10 py-5 bg-brand-yellow text-black text-lg font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-brand-yellow/20"
          >
            Book Free Consultation
          </a>
          <button className="w-full sm:w-auto px-10 py-5 bg-zinc-800 text-white text-lg font-bold rounded-full hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 border border-white/5">
            Send Me the Portfolio <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-2">Request Portfolio</h3>
                <p className="text-zinc-400 mb-6">See how we transform brands into growth machines. Detailed case studies inside.</p>
                <div className="flex items-center gap-2 text-brand-yellow font-bold cursor-pointer group">
                    Download PDF <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-md">
                 <h3 className="text-2xl font-bold text-white mb-2">Join the CliQ</h3>
                <p className="text-zinc-400 mb-6">Get weekly growth insights, no spam. Just pure strategy delivered to your inbox.</p>
                <div className="flex bg-black rounded-full p-1 border border-white/10">
                    <input type="email" placeholder="Your email" className="bg-transparent text-white px-4 py-2 outline-none w-full placeholder-zinc-600" />
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-zinc-200">Join</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};