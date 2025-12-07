import React from 'react';
import {
  Megaphone,
  Palette,
  MousePointerClick,
  Target,
  MessageCircle,
  Search,
  Smartphone,
  ShoppingBag,
} from 'lucide-react';

const services = [
  {
    title: 'Performance & Digital Marketing',
    desc: 'Stories that build connection and consistency.',
    icon: Megaphone,
    colSpan: 'md:col-span-2',
    bg: 'bg-orange-500',
    text: 'text-white',
  },
  {
    title: 'WhatsApp Business API',
    desc: 'Automated conversations — real-time results.',
    icon: MessageCircle,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'Website Development',
    desc: 'Digital experiences built for speed + sales.',
    icon: Smartphone,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'App Development',
    desc: 'Native and cross-platform solutions.',
    icon: Smartphone,
    colSpan: 'md:col-span-2',
    bg: 'bg-zinc-900',
    text: 'text-white',
  },
  {
    title: 'Lead Generation / PPC',
    desc: 'Predictable leads that convert into real revenue.',
    icon: Target,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'Google / Meta / LinkedIn Ads',
    desc: 'Put your business in front of the right people.',
    icon: MousePointerClick,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'Branding & Content',
    desc: 'A brand that looks sharp and speaks confidently.',
    icon: Palette,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'SEO & GMB Setup',
    desc: 'Be found first. Be chosen first.',
    icon: Search,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'Modern Reel Editing',
    desc: 'Capture attention in seconds.',
    icon: Palette,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'eCommerce Management',
    desc: 'Scale online with systems built to convert.',
    icon: ShoppingBag,
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Everything your business needs to grow — designed under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, idx) => (
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
  );
};
