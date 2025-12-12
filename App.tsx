import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Industries } from './components/Industries';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Aligarh } from './pages/Aligarh';
import { Legal } from './pages/Legal';
import { MVP } from './pages/MVP'; // make sure these exist
import { WordPress } from './pages/Website'; // or remove if not needed

function getCurrentPath() {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname || '/';
  return path === '' ? '/' : path;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(getCurrentPath());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handlePopState = () => {
      // When user clicks Back/Forward
      const path = getCurrentPath();
      setCurrentPath(path);

      // If there is no section hash, scroll to top
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    // Initial state sync (in case path changed before mount)
    handlePopState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (typeof window === 'undefined') return;

    // Ensure we have a leading /
    const target = path.startsWith('/') ? path : '/' + path;

    // Update URL without reloading page
    window.history.pushState({}, '', target);

    // After pushState, pathname + hash are updated
    const pathname = window.location.pathname || '/';
    const hash = window.location.hash;

    setCurrentPath(pathname);

    // Only scroll to top for full pages, not section hashes
    if (!hash) {
      window.scrollTo(0, 0);
    }
  };

  // ROUTING using pathname only
  const normalizedPath = (currentPath || '').toLowerCase();

  const isHome = normalizedPath === '/';
  const isAligarh = normalizedPath === '/aligarh';
  const isLegal = normalizedPath === '/legal';
  const isMvp = normalizedPath === '/mvp';
  const isWordpress = normalizedPath === '/wordpress';

  let page: React.ReactNode;

  if (isAligarh) {
    page = <Aligarh />;
  } else if (isLegal) {
    page = <Legal />;
  } else if (isMvp) {
    page = <MVP />;
  } else if (isWordpress) {
    page = <WordPress />;
  } else if (isHome) {
    page = (
      <>
        <Hero />
        <About />
        <Services />
        <Results />
        <Industries />
        <CallToAction />
      </>
    );
  } else {
    // Fallback: unknown route → Home
    page = (
      <>
        <Hero />
        <About />
        <Services />
        <Results />
        <Industries />
        <CallToAction />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-slate-200 overflow-x-hidden">
      <Navbar scrolled={scrolled} onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} currentPath={currentPath} />
      <FloatingWhatsApp />
    </div>
  );
}
