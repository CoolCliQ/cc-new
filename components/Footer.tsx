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

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Success Stories', href: '#results' },
    { name: 'Industries', href: '#industries' },
  ];

  const pageLinks = [
    { name: 'Legal Information', href: '/legal' },
    // future pages later
  ];

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

  const scrollToHash = (hash: string) => {
    if (typeof window === 'undefined') return;

    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) {
      window.location.hash = hash;
      return;
    }

    const headerOffset = 96; // tweak if needed
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    // only intercept internal links
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) return;

    e.preventDefault();

    if (href.startsWith('#')) {
      if (!onHome) {
        onNavigate(`/${href}`); // "/#about"
        return;
      }
      scrollToHash(href);
      return;
    }

    onNavigate(href);
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand / Description / Email+Phone / Social */}
          <div className="md:col-span-2">
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
              A full-scale digital partner built on the pillars of Strategy, Creativity &
              Performance. We help businesses turn great ideas into measurable results.
            </p>

            <div className="space-y-2 text-zinc-400 mb-6">
              <p className="hover:text-brand-yellow transition-colors">
                <a href="mailto:grow@coolcliq.in">grow@coolcliq.in</a>
              </p>
              <p className="hover:text-brand-yellow transition-colors">
                <a href="tel:+918126962266">+91 8126962266</a>
              </p>
            </div>

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

          {/* Company */}
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

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <a
                  href="/aligarh"
                  onClick={(e) => handleLinkClick(e, '/aligarh')}
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  Aligarh
                </a>
              </li>

              {isAligarh && (
                <li className="text-zinc-600 text-sm">Kalyanpuram, Agra Road, Aligarh, 202001</li>
              )}

              <li>
                <span className="opacity-50 cursor-not-allowed">Delhi NCR (Coming Soon)</span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">Lucknow (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-lg mb-6">Pages</h4>
            <ul className="space-y-4 text-zinc-500">
              {pageLinks.map((link) => (
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
