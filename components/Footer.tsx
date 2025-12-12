import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPath }) => {
  const normalizedPath = (currentPath || '').toLowerCase();
  const isAligarh = normalizedPath.includes('/aligarh');
  const onHome = normalizedPath === '/' || normalizedPath === '';

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/coolcliq.in/',
      Icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/coolcliq/',
      Icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/coolcliq.in/',
      Icon: Facebook,
    },
  ];

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Success Stories', href: '#results' },
    { name: 'Industries', href: '#industries' },
    { name: 'Legal Information', href: '/legal' },
  ];

  const serviceLinks = [
    {
      name: 'MVP & Product Dev',
      href: '/mvp',
      isHighlight: true,
    },
    {
      name: 'Website Development',
      href: '/wordpress',
      isHighlight: true,
    },
    {
      name: 'Performance Marketing',
      href: '#services',
      isHighlight: false,
    },
    {
      name: 'Branding & Identity',
      href: '#services',
      isHighlight: false,
    },
  ];

  const scrollToHash = (hash: string) => {
    if (typeof window === 'undefined') return;

    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) {
      // just update the hash if element not found
      window.location.hash = hash;
      return;
    }

    const headerOffset = 96; // adjust if header height changes
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    // External links → allow normal behaviour
    if (/^https?:\/\//i.test(href)) return;

    e.preventDefault();

    // Section hashes (#about, #services, etc.)
    if (href.startsWith('#')) {
      if (!onHome) {
        // Go to home first, then scroll to the section
        onNavigate('/');

        // Wait for React to render home sections before scrolling
        setTimeout(() => {
          scrollToHash(href);
        }, 0);
      } else {
        scrollToHash(href);
      }
      return;
    }

    // Normal internal routes: "/", "/mvp", "/wordpress", "/aligarh", "/legal"
    onNavigate(href);
    // IMPORTANT: no window.location.hash here — keeps URLs like "/mvp" clean
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Brand Column - spans 2 on large */}
          <div className="md:col-span-2 lg:col-span-2">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block mb-6 cursor-pointer group"
            >
              {/* Custom Stacked Logo */}
              <div className="flex flex-col items-start leading-none select-none">
                <div className="flex items-center gap-[2px]">
                  <span className="text-3xl font-black tracking-tighter text-white">C</span>
                  <div className="mx-0.5 w-11 h-6 bg-zinc-900 border-2 border-white rounded-full flex items-center relative">
                    <div className="absolute right-1 w-3.5 h-3.5 bg-brand-yellow rounded-full" />
                  </div>
                  <span className="text-3xl font-black tracking-tighter text-white">L</span>
                </div>
                <span className="text-2xl font-black tracking-tight text-white -mt-1.5 ml-0.5">
                  cliQ
                </span>
              </div>
            </a>

            <p className="text-zinc-500 max-w-md mb-6">
              A full-scale digital partner built on the pillars of Strategy, Creativity &amp;
              Performance. We help businesses turn great ideas into measurable results.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand-yellow hover:text-black transition-all"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-500">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-500">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`hover:text-brand-yellow transition-colors flex items-center gap-2 ${
                      link.isHighlight ? 'font-medium' : ''
                    }`}
                  >
                    {link.isHighlight && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a
                  href="/aligarh"
                  onClick={(e) => handleLinkClick(e, '/aligarh')}
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  Aligarh
                </a>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">Delhi NCR (Soon)</span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">Lucknow (Soon)</span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-500">
              {isAligarh && <li>Kalyanpuram, Agra Road, Aligarh, 202001</li>}
              <li>
                <a
                  href="mailto:grow@coolcliq.in"
                  className="hover:text-brand-yellow transition-colors"
                >
                  grow@coolcliq.in
                </a>
              </li>
              <li>
                <a href="tel:+918126962266" className="hover:text-brand-yellow transition-colors">
                  +91 8126962266
                </a>
              </li>
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
