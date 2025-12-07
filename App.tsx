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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  
  // Robust Hash based routing
  const getHashPath = () => {
    const hash = window.location.hash;
    // Normalize hash: remove #, ensure leading /
    const cleanHash = hash.replace(/^#/, '');
    const normalized = cleanHash.startsWith('/') ? cleanHash : '/' + cleanHash;
    // Default to / if empty
    return normalized === '/' || normalized === '' ? '/' : normalized;
  };
  
  const [currentPath, setCurrentPath] = useState(getHashPath());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleHashChange = () => {
      const path = getHashPath();
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (path: string) => {
    // Ensure path format
    const targetHash = path.startsWith('/') ? path : '/' + path;
    window.location.hash = targetHash;
    setCurrentPath(targetHash);
    window.scrollTo(0, 0);
  };

  // Routing Logic
  const isAligarh = currentPath.toLowerCase().includes('/aligarh');
  const isLegal = currentPath.toLowerCase().includes('/legal');

  return (
    <div className="min-h-screen bg-brand-black text-slate-200 overflow-x-hidden">
      <Navbar scrolled={scrolled} onNavigate={navigate} />
      
      <main>
        {isAligarh ? (
            <Aligarh />
        ) : isLegal ? (
            <Legal />
        ) : (
            <>
                <Hero />
                <About />
                <Services />
                <Results />
                <Industries />
                <CallToAction />
            </>
        )}
      </main>

      <Footer onNavigate={navigate} currentPath={currentPath} />
      <FloatingWhatsApp />
    </div>
  );
}