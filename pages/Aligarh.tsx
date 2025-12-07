import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Users,
  Megaphone,
  Palette,
  Smartphone,
  Search,
  BarChart3,
  Star,
  Building2,
  GraduationCap,
  Factory,
  ShoppingBag,
  Home,
  MessageCircle,
  Target,
  Play,
} from 'lucide-react';
import { LocalTrustBadges } from '../components/LocalTrustBadges';

const aligarhServices = [
  {
    title: 'Social Media Growth',
    desc: 'Stories that build connection in Aligarh.',
    icon: Users,
    colSpan: 'md:col-span-2',
    bg: 'bg-orange-500',
    text: 'text-white',
  },
  {
    title: 'Google + Meta Ads',
    desc: 'Proven ROI for local businesses.',
    icon: BarChart3,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'Branding & Content',
    desc: 'A brand that looks sharp.',
    icon: Palette,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'Lead Generation',
    desc: 'Campaigns that convert.',
    icon: Target,
    colSpan: 'md:col-span-2',
    bg: 'bg-zinc-900',
    text: 'text-white',
  },
  {
    title: 'SEO & GMB Ranking',
    desc: 'Be found first in Aligarh.',
    icon: Search,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'WhatsApp Business API',
    desc: 'Automations & real-time results.',
    icon: MessageCircle,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
];

const testimonials = [
  {
    type: 'text',
    name: 'Rahul Gupta',
    role: 'Owner, Gupta Sweets',
    handle: '@guptasweets_aligarh',
    title: 'Sales doubled in 2 months!',
    text: "CoolCliQ's strategy for our festival campaign was genius. We literally ran out of stock. The best decision for our business.",
    rating: 5,
    date: 'Jan 12, 2024',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    type: 'video',
    videoUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    name: 'Priya Sharma',
    role: 'Founder, Glow Salon',
    title: 'My Instagram looks amazing',
    duration: '0:45',
    aspect: 'aspect-[9/16]',
  },
  {
    type: 'text',
    name: 'Dr. Anjali Verma',
    role: 'Verma Dental Clinic',
    handle: '@dr.anjali.verma',
    title: 'Best agency in Aligarh',
    text: 'I was skeptical about digital marketing, but they filled my appointment book in just 3 weeks. Highly professional team.',
    rating: 5,
    date: 'Feb 04, 2024',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    type: 'video',
    videoUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    name: 'Fatima Khan',
    role: 'Boutique Owner',
    title: 'Creative designs that sell',
    duration: '0:30',
    aspect: 'aspect-[3/4]',
  },
  {
    type: 'video',
    videoUrl:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    name: 'Amit Varshney',
    role: 'Real Estate Developer',
    title: 'High quality leads',
    duration: '1:12',
    aspect: 'aspect-[4/5]',
  },
  {
    type: 'text',
    name: 'Mohd. Ariz',
    role: 'Director, Aligarh Public School',
    handle: '@aps_aligarh',
    title: 'Admissions increased by 40%',
    text: "Their targeted parent outreach campaign worked wonders for this year's admission cycle. The creative work is outstanding.",
    rating: 5,
    date: 'Mar 15, 2024',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    type: 'text',
    name: 'Sandeep Maheshwari',
    role: 'Retail Store Owner',
    handle: '@sandeep_retail',
    title: 'Finally, ROI focused!',
    text: 'I spent money on ads before with no results. CoolCliQ tracks every rupee and shows profit. Genuine results.',
    rating: 5,
    date: 'Nov 11, 2023',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    type: 'video',
    videoUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    name: 'Vikram Singh',
    role: 'Manufacturing CEO',
    title: 'B2B leads generated',
    duration: '0:58',
    aspect: 'aspect-[9/16]',
  },
  {
    type: 'text',
    name: 'Neha Gupta',
    role: 'Makeup Artist',
    handle: '@neha_mua',
    title: 'Best social media management',
    text: 'They handle everything from shooting to posting. I just focus on my clients. My engagement has tripled.',
    rating: 5,
    date: 'Dec 05, 2023',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const clientLogos = [
  'https://placehold.co/200x100/ffffff/000000?text=Logo+1',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+2',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+3',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+4',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+5',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+6',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+7',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+8',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+9',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+10',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+11',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+12',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+13',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+14',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+15',
  'https://placehold.co/200x100/ffffff/000000?text=Logo+16',
];

export const Aligarh: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-36 pb-20 overflow-hidden bg-brand-black">
        {/* Background Ambience - Yellow & Green Shades */}
        <div className="absolute inset-0 bg-brand-black overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors">
            <MapPin className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            <span className="text-sm font-medium text-zinc-300">
              Aligarh’s Trusted Digital Growth Partner
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-white drop-shadow-2xl">
            You Grow Aligarh. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-brand-yellow">
              We Grow You. ⚡
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            Aligarh’s businesses deserve more than ordinary marketing. They deserve Strategy that
            thinks, Creativity that attracts, and Performance that sells.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,193,7,0.4)] relative z-20"
            >
              Grow My Business 🚀
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-black/40 text-white backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2 relative z-20"
            >
              See Our Local Work <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Hero Video Section */}
          <div className="relative w-full max-w-4xl mx-auto perspective-1000 group">
            {/* Splash Impact Effect at top of video */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-10 bg-brand-yellow/50 blur-[40px] z-30 rounded-full animate-pulse"></div>

            <div className="relative rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden aspect-video transform-gpu z-10">
              {/* Video Placeholder */}
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                alt="CoolCliQ Aligarh Intro"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group-hover:bg-brand-yellow group-hover:border-brand-yellow shadow-xl">
                  <Play className="w-8 h-8 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  MUST WATCH
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent text-left">
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-1">
                  Welcome to CoolCliQ
                </p>
                <h3 className="text-2xl font-bold text-white">How We Scale Aligarh Brands</h3>
              </div>
            </div>

            {/* Glow behind video */}
            <div className="absolute -inset-4 bg-brand-yellow/20 blur-[60px] -z-10 rounded-[3rem] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <LocalTrustBadges />

      {/* 3. AMBITION SECTION (Redesigned) */}
      <section id="about" className="py-24 bg-white text-brand-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 relative z-10">
            <div className="inline-block bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Our Mission
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              ALIGARH <br />
              IS FULL OF <br />
              <span className="relative inline-block text-white">
                <span className="absolute inset-0 bg-black transform -skew-x-6"></span>
                <span className="relative px-2">AMBITION.</span>
              </span>
            </h2>
            <p className="text-lg text-zinc-600 mb-8 font-medium leading-relaxed">
              We’re here to turn that ambition into measurable success. CoolCliQ is the bridge
              between local potential and global-standard growth.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-1 bg-brand-yellow rounded-full"></div>
              <div>
                <p className="font-bold text-xl">100+ Businesses</p>
                <p className="text-zinc-500">Trust us to scale locally.</p>
              </div>
            </div>
          </div>

          {/* Right Creative Collage */}
          <div className="lg:col-span-3 relative h-[500px] w-full hidden md:block">
            {/* Main Image */}
            <div className="absolute top-10 right-0 w-[80%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl z-0 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Creative Strategy"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Floating Card 1: Strategy */}
            <div
              className="absolute top-0 left-10 bg-white p-5 rounded-2xl shadow-xl z-10 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Strategic</p>
                  <p className="text-xs text-zinc-500">Thinking</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Performance */}
            <div className="absolute bottom-20 right-10 bg-brand-yellow p-5 rounded-2xl shadow-xl z-20 transform rotate-3">
              <div className="flex items-center gap-3">
                <div className="bg-black/10 p-2 rounded-lg text-black">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Performance</p>
                  <p className="text-xs text-black/60">Marketing</p>
                </div>
              </div>
            </div>

            {/* Floating Card 3: Creative */}
            <div className="absolute bottom-0 left-20 bg-black text-white p-5 rounded-2xl shadow-xl z-20 -rotate-2">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Creative</p>
                  <p className="text-xs text-zinc-400">Storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (Bento Grid) */}
      <section id="services" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4">
              Services for Aligarh
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Everything your business needs to grow — tailored for local demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {aligarhServices.map((service, idx) => (
              <div
                key={idx}
                className={`
                    ${service.colSpan} 
                    ${service.bg} 
                    ${service.text}
                    relative group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between border border-black/5
                  `}
              >
                <div className="relative z-10">
                  <div
                    className={`
                        w-12 h-12 rounded-full flex items-center justify-center mb-4
                        ${service.text === 'text-white' ? 'bg-white/20' : 'bg-black/10'}
                    `}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-2">{service.title}</h3>
                  <p
                    className={`text-sm opacity-80 ${
                      service.text === 'text-white' ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Decorative Number */}
                <div
                  className={`
                    absolute bottom-4 right-6 text-6xl font-black opacity-10 select-none
                    ${service.text === 'text-white' ? 'text-white' : 'text-black'}
                  `}
                >
                  {idx + 1}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES (Yellow Theme) */}
      <section id="industries" className="py-24 bg-brand-yellow text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Made in Aligarh. <br />
            <span className="bg-white px-2">Growing Beyond.</span>
          </h2>
          <p className="text-lg font-medium opacity-80 mb-12 max-w-2xl mx-auto">
            We’ve delivered exceptional results for Aligarh’s key industries.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Home, label: 'Hotels & Resorts' },
              { icon: GraduationCap, label: 'Schools & Colleges' },
              { icon: Factory, label: 'Local Manufacturers' },
              { icon: ShoppingBag, label: 'Retail & eCommerce' },
              { icon: Palette, label: 'Beauty & Salon' },
              { icon: Building2, label: 'Builders & Property' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 aspect-square text-center"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-black" />
                <span className="font-bold text-sm md:text-base leading-tight">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#results"
              className="inline-flex items-center gap-2 font-bold bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
            >
              View Success Stories <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CLIENT LOGOS (New Section) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-zinc-400 uppercase tracking-widest">
              Trusted By 30+ Aligarh Brands
            </h3>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 opacity-70">
            {clientLogos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center group">
                {/* 
                           Displaying placeholders. 
                           IMPORTANT: Replace `clientLogos` array with actual image URLs 
                           to see the real logos provided in your screenshots. 
                        */}
                <img
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="max-h-16 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 mix-blend-multiply opacity-60 group-hover:opacity-100 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWS (Flighty Style Masonry) */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              From Local Startups to Industry Leaders, <br />
              <span className="text-brand-yellow">Aligarh Trusts CoolCliQ.</span>
            </h2>
            <p className="text-xl text-zinc-500">
              Real growth stories from the business owners building our city.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item, i) => (
              <div key={i} className="break-inside-avoid">
                {item.type === 'video' ? (
                  // Video Card - Using transform-gpu and overflow-hidden to fix sharp edges on hover
                  <div
                    className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu backface-hidden hover:-translate-y-1 ${
                      item.aspect || 'aspect-[9/16]'
                    }`}
                  >
                    <img
                      src={item.videoUrl}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden">
                          <img
                            src={`https://ui-avatars.com/api/?name=${item.name}&background=random`}
                            alt={item.name}
                          />
                        </div>
                        <div className="text-white">
                          <p className="font-bold leading-none mb-1">{item.name}</p>
                          <p className="text-xs text-white/80">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Text Card
                  <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            item.avatar ||
                            `https://ui-avatars.com/api/?name=${item.name}&background=f0f0f0&color=000`
                          }
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-sm text-zinc-900">{item.name}</h4>
                          <p className="text-xs text-zinc-500">{item.handle}</p>
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400 font-medium">{item.date}</span>
                    </div>

                    <div className="flex gap-0.5 mb-3">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>

                    <h3 className="font-bold text-lg mb-2 leading-tight">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section id="contact" className="py-24 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Let’s Build Aligarh’s Next <br />
            <span className="text-brand-yellow">Success Story.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Strategy unlocks growth. Creativity sparks attention. Performance drives revenue. If
            your brand deserves to win, we’re ready to lead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-yellow text-black rounded-full font-bold text-lg hover:scale-105 transition-transform w-full sm:w-auto shadow-lg shadow-brand-yellow/20"
            >
              Start Now 🚀
            </a>
            <a
              href="https://wa.me/918126962266"
              className="px-8 py-4 bg-zinc-800 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-zinc-700 transition-transform w-full sm:w-auto"
            >
              Let’s Talk on WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-500 font-bold">
            CoolCliQ = Strategy × Creativity × Performance ⚡
          </p>
        </div>
      </section>
    </>
  );
};
