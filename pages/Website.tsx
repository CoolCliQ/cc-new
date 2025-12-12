import React, { useState } from 'react';
import {
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Layout,
  MessageCircle,
  Play,
  Mail,
} from 'lucide-react';

const portfolioItems = [
  {
    category: 'eCommerce Websites',
    clients: [
      {
        name: 'ProteinHigh',
        url: 'proteinhigh.in',
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      },
      {
        name: 'Milkbar',
        url: 'milkbar.in',
        img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1965&auto=format&fit=crop',
      },
      {
        name: 'Shripali',
        url: 'shripali.com',
        img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
      },
      {
        name: 'Artisanal Echo',
        url: 'artisanalecho.com',
        img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1974&auto=format&fit=crop',
      },
      {
        name: 'SleeveUp',
        url: 'sleeveup.shop',
        img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    category: 'Informative Websites',
    clients: [
      {
        name: 'Tour4You',
        url: 'tour4you.in',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
      },
      {
        name: 'EmployeeGuide',
        url: 'employeeguide.in',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      },
      {
        name: 'Orvara Capital',
        url: 'orvaracapital.com',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
      },
    ],
  },
];

export const WordPress: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('eCommerce Websites');
  // Initialize with the first image of the default category
  const [activeImage, setActiveImage] = useState(portfolioItems[0].clients[0].img);

  const handleTabChange = (category: string) => {
    setActiveCategory(category);
    // Find the first client in the new category to update the preview image immediately
    const categoryData = portfolioItems.find((item) => item.category === category);
    if (categoryData && categoryData.clients.length > 0) {
      setActiveImage(categoryData.clients[0].img);
    }
  };

  return (
    <>
      {/* 1. HERO SECTION (LIGHT THEME) */}
      <section className="relative min-h-[80vh] flex items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-white text-brand-black">
        {/* Background Gradient & Texture */}
        <div className="absolute inset-0 bg-white overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {/* Animated Blobs */}
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 hover:bg-blue-100 transition-colors">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-900">WordPress Website Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-brand-black">
            Websites Built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Perform.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Your website should be the strongest salesperson in your business — working 24/7,
            converting visitors into customers. Not just look good.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="https://wa.me/918126962266?text=I%20am%20interested%20in%20WordPress%20Website%20Development"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <MessageCircle className="w-5 h-5 fill-white" /> Get Pricing on WhatsApp
            </a>
          </div>

          {/* Hero Video Section (Dark Card on Light Background) */}
          <div className="mt-16 relative w-full max-w-4xl mx-auto perspective-1000 group">
            {/* Splash Impact Effect at top of video */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-10 bg-blue-500/30 blur-[40px] z-30 rounded-full animate-pulse"></div>

            <div className="relative rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-blue-900/20 overflow-hidden aspect-video transform-gpu z-10">
              {/* Video Placeholder */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="WordPress Development Process"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 shadow-xl">
                  <Play className="w-8 h-8 text-white fill-white group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  SEE OUR PROCESS
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent text-left">
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-1">
                  Development Strategy
                </p>
                <h3 className="text-2xl font-bold text-white">From Wireframe to Revenue Engine</h3>
              </div>
            </div>

            {/* Glow behind video */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-[60px] -z-10 rounded-[3rem] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED PORTFOLIO SHOWCASE (DARK THEME) - MOVED UP */}
      <section className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Websites That Speak For Us</h2>
            <p className="text-zinc-400">
              Every click. Every scroll. Every page — designed to perform.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Tabbed List */}
            <div className="lg:col-span-4">
              {/* Tabs */}
              <div className="flex gap-6 mb-8 border-b border-white/10">
                {portfolioItems.map((item) => (
                  <button
                    key={item.category}
                    onClick={() => handleTabChange(item.category)}
                    className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 relative ${
                      activeCategory === item.category
                        ? 'text-brand-yellow border-brand-yellow'
                        : 'text-zinc-500 border-transparent hover:text-white'
                    }`}
                  >
                    {item.category}
                  </button>
                ))}
              </div>

              {/* Filtered List */}
              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500">
                {portfolioItems
                  .find((item) => item.category === activeCategory)
                  ?.clients.map((client, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveImage(client.img)}
                      className={`
                                        p-4 rounded-xl cursor-pointer transition-all duration-300 group border
                                        ${
                                          activeImage === client.img
                                            ? 'bg-white/10 border-brand-yellow/50 shadow-lg shadow-brand-yellow/10'
                                            : 'border-transparent hover:bg-white/5 hover:border-white/5'
                                        }
                                    `}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xl font-bold transition-colors ${
                            activeImage === client.img
                              ? 'text-white'
                              : 'text-zinc-400 group-hover:text-white'
                          }`}
                        >
                          {client.name}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-all text-brand-yellow ${
                            activeImage === client.img
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs font-mono transition-colors ${
                          activeImage === client.img
                            ? 'text-zinc-400'
                            : 'text-zinc-600 group-hover:text-zinc-400'
                        }`}
                      >
                        {client.url}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/918126962266"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1"
                >
                  View More Projects on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Sticky Mockup Display */}
            <div className="lg:col-span-8 sticky top-32">
              <div className="relative rounded-2xl bg-zinc-800 p-2 shadow-2xl border border-zinc-700">
                {/* Browser Toolbar */}
                <div className="h-8 bg-zinc-900 rounded-t-xl flex items-center px-4 gap-2 border-b border-zinc-700">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-zinc-800 h-5 rounded-md mx-4 flex items-center px-2 text-[10px] text-zinc-500 font-mono">
                    <Lock className="w-2.5 h-2.5 mr-1" /> coolcliq-secure-server.com/portfolio-view
                  </div>
                </div>

                {/* Screen Content */}
                <div className="aspect-[16/10] bg-black rounded-b-xl overflow-hidden relative group">
                  {/* Background Image Transition */}
                  <img
                    key={activeImage}
                    src={activeImage}
                    alt="Website Preview"
                    className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-white">Live Preview</span>
                  </div>
                </div>
              </div>

              {/* Reflection/Glow */}
              <div className="absolute -inset-4 bg-brand-yellow/5 blur-[80px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PACKAGES SECTION (LIGHT THEME) - MOVED DOWN */}
      <section className="py-24 bg-zinc-50 text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Choose Your Growth Engine</h2>
            <p className="text-zinc-500">
              Tailored solutions for service providers and eCommerce brands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Package 1: Informative */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 bg-zinc-100 px-4 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-wider text-zinc-500">
                Most Popular for Services
              </div>

              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Layout className="w-7 h-7" />
              </div>

              <h3 className="text-3xl font-black mb-2">Informative Business</h3>
              <p className="text-zinc-500 mb-8">
                For brands who want a professional identity and lead generation system.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Up to 10–15 Pages Design',
                  'SEO Optimized + Mobile Responsive',
                  'WhatsApp & Social Integration',
                  'Google Maps & Booking Functionality',
                  'Strong CTA Buttons to Convert Leads',
                  'Basic Blog Section',
                  'SSL Security & Fast Load Speed',
                  'Analytics & Tracking Setup',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                <p className="font-bold text-blue-800 text-sm mb-2 uppercase tracking-wide">
                  🎁 Complimentary Benefits
                </p>
                <div className="flex flex-col gap-2 text-blue-900/80 text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Domain + Hosting (1 Year)
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> 1 Business Email (1 Year)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/918126962266?text=Price%20for%20Informative%20Website"
                  className="w-full py-4 bg-black text-white rounded-xl font-bold text-center hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  Get Pricing on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-zinc-400 font-medium">
                  Delivery: 15–25 Days
                </p>
              </div>
            </div>

            {/* Package 2: eCommerce */}
            <div className="bg-brand-yellow rounded-[2.5rem] p-8 md:p-12 border border-yellow-400 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-white/20 px-4 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-wider text-black mix-blend-overlay">
                For Selling Online
              </div>

              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 text-white">
                <ShoppingCart className="w-7 h-7" />
              </div>

              <h3 className="text-3xl font-black mb-2">eCommerce Store</h3>
              <p className="text-black/70 mb-8 font-medium">
                For businesses ready to sell online & scale profitably.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Up to 50 Products Upload',
                  'WooCommerce Store Setup',
                  'Secure Payment Gateway Integration',
                  'Inventory, Cart & Wishlist System',
                  'Order Tracking Dashboard',
                  'Customer Login/Signup & Reviews',
                  'Automated Email Notifications',
                  'Speed & Performance Optimized',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-brand-yellow" />
                    </div>
                    <span className="text-black font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/20 p-6 rounded-2xl mb-8 border border-black/5">
                <p className="font-bold text-black text-sm mb-2 uppercase tracking-wide">
                  🎁 Complimentary Benefits
                </p>
                <div className="flex flex-col gap-2 text-black text-sm font-bold">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Domain + Hosting (1 Year)
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> 1 Business Email (1 Year)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/918126962266?text=Price%20for%20eCommerce%20Website"
                  className="w-full py-4 bg-white text-black rounded-xl font-bold text-center hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Pricing on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-black/60 font-bold">Delivery: 25–40 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY US & RESULTS */}
      <section className="py-24 bg-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Why Websites from CoolCliQ Perform Better
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                A website shouldn’t just exist — it should grow your business.
              </p>

              <div className="space-y-4">
                {[
                  'Strategy-backed designs built for ROI',
                  'Seamless user experience & premium layouts',
                  'Industry-level security & speed',
                  'High conversion placements & CTAs',
                  'Transparent post-launch support',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-black text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">The Numbers Don't Lie</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-black text-brand-yellow mb-1">+200%</div>
                    <div className="text-zinc-400 text-sm">Online Sales</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-blue-400 mb-1">60 Days</div>
                    <div className="text-zinc-400 text-sm">To Double Revenue</div>
                  </div>
                </div>
                <blockquote className="mt-8 border-l-4 border-brand-yellow pl-4 italic text-zinc-300">
                  "CoolCliQ gave our business a stunning website that actually brings us customers."
                </blockquote>
                <div className="mt-4 font-bold text-sm">— Local Brand Owner</div>
              </div>

              {/* Background Decor */}
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-brand-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 via-brand-black to-brand-black"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Your brand deserves a website that wins.
          </h2>
          <p className="text-xl text-zinc-400 mb-10">Let’s build something that performs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918126962266"
              className="px-8 py-4 bg-brand-yellow text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Get Pricing on WhatsApp
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
