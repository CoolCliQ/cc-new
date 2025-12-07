import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Industries', href: '#industries' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          flex items-center justify-between
          relative
          ${
            scrolled
              ? 'mt-2 md:mt-6 w-[95%] md:w-[90%] max-w-5xl rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl shadow-black/50'
              : 'w-full max-w-7xl bg-transparent px-6 py-8 border-transparent'
          }
        `}
      >
        {/* Custom Stacked Logo */}
        <a 
            href="#/"
            className="flex flex-col items-center leading-none group cursor-pointer select-none transition-transform duration-300 hover:scale-105" 
            onClick={handleLogoClick}
        >
            {/* Row 1: C [Toggle] L */}
            <div className={`flex items-center gap-[2px] transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                <span className="text-3xl font-black tracking-tighter text-white">C</span>
                {/* Toggle Switch */}
                <div className="mx-0.5 w-11 h-6 bg-black border-2 border-white rounded-full flex items-center relative">
                     <div className="absolute right-1 w-3.5 h-3.5 bg-brand-yellow rounded-full"></div>
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">L</span>
            </div>
            {/* Row 2: cliQ */}
            <span className={`text-2xl font-black tracking-tight text-white -mt-1.5 ml-0.5 transition-all duration-300 ${scrolled ? 'scale-90 origin-top' : 'scale-100 origin-top'}`}>
                cliQ
            </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 px-5 py-2.5 rounded-full hover:bg-white/10 hover:backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95 active:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`
                text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-200 ml-2
                ${scrolled ? 'bg-brand-yellow' : 'bg-white hover:bg-brand-yellow'}
            `}
          >
            Get Custom Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu - Drops down from the floating bar */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 rounded-3xl shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-300 py-3 border-b border-white/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-yellow text-black px-5 py-4 rounded-xl font-bold text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Custom Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};