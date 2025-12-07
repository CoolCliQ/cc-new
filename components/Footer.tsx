import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPath }) => {
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  // Check if we are on the Aligarh page
  const isAligarh = currentPath.toLowerCase().includes('/aligarh');

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <a 
              href="#/"
              onClick={(e) => handleNavClick(e, '/')}
              className="inline-block mb-6 cursor-pointer group" 
            >
                {/* Custom Stacked Logo */}
                <div className="flex flex-col items-start leading-none select-none">
                    <div className="flex items-center gap-[2px]">
                        <span className="text-3xl font-black tracking-tighter text-white">C</span>
                        <div className="mx-0.5 w-11 h-6 bg-zinc-900 border-2 border-white rounded-full flex items-center relative">
                            <div className="absolute right-1 w-3.5 h-3.5 bg-brand-yellow rounded-full"></div>
                        </div>
                        <span className="text-3xl font-black tracking-tighter text-white">L</span>
                    </div>
                    <span className="text-2xl font-black tracking-tight text-white -mt-1.5 ml-0.5">
                        cliQ
                    </span>
                </div>
            </a>
            <p className="text-zinc-500 max-w-md mb-6">
              A full-scale digital partner built on the pillars of Strategy, Creativity & Performance. We help businesses turn great ideas into measurable results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-yellow hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-yellow hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-yellow hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#/" onClick={(e) => handleNavClick(e, '/')} className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#/#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#/#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#/#results" className="hover:text-brand-yellow transition-colors">Success Stories</a></li>
              <li><a href="#/legal" onClick={(e) => handleNavClick(e, '/legal')} className="hover:text-brand-yellow transition-colors">Legal Information</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a 
                  href="#/aligarh" 
                  onClick={(e) => handleNavClick(e, '/aligarh')}
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Aligarh
                </a>
              </li>
              <li><span className="opacity-50 cursor-not-allowed">Delhi NCR (Coming Soon)</span></li>
              <li><span className="opacity-50 cursor-not-allowed">Lucknow (Coming Soon)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-500">
              {/* Only show address if on Aligarh page */}
              {isAligarh && (
                <li>Kalyanpuram, Agra Road, Aligarh, 202001</li>
              )}
              <li>grow@coolcliq.in</li>
              <li>+91 8126962266</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
                © {new Date().getFullYear()} CoolCliQ Pvt Ltd. All rights reserved.
            </p>
            <p className="text-brand-yellow font-medium text-sm flex items-center gap-2">
               ⚡ Built on Strategy. Driven by Creativity. Proven by Performance.
            </p>
        </div>
      </div>
    </footer>
  );
};