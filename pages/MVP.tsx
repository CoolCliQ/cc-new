import React from 'react';
import {
  Rocket,
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
  XCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const techServices = [
  {
    title: 'MVP & Full Product Dev',
    desc: 'Next.js + React. Fast, scalable systems built to upgrade.',
    icon: Code2,
    colSpan: 'md:col-span-2',
    bg: 'bg-blue-600',
    text: 'text-white',
  },
  {
    title: 'Mobile App Dev',
    desc: 'React Native (iOS + Android). Native-like performance.',
    icon: Smartphone,
    colSpan: 'md:col-span-1',
    bg: 'bg-zinc-900',
    text: 'text-white',
  },
  {
    title: 'AI & Automation',
    desc: 'Chatbots, OpenAI integrations & workflow automations.',
    icon: Cpu,
    colSpan: 'md:col-span-1',
    bg: 'bg-white',
    text: 'text-black',
  },
  {
    title: 'Web App Platforms',
    desc: 'SaaS, Marketplaces, CRMs, LMS, ERPs.',
    icon: Layers,
    colSpan: 'md:col-span-2',
    bg: 'bg-brand-black',
    text: 'text-white border border-white/10',
  },
  {
    title: 'UI/UX Strategy',
    desc: 'Design sprints & interactive prototypes.',
    icon: Layers, // Using Layers as placeholder for design
    colSpan: 'md:col-span-1',
    bg: 'bg-brand-yellow',
    text: 'text-black',
  },
  {
    title: 'Support & Maintenance',
    desc: 'Bug fixing, feature upgrades & scaling.',
    icon: Wrench,
    colSpan: 'md:col-span-1',
    bg: 'bg-zinc-900',
    text: 'text-white',
  },
];

const faqs = [
  {
    q: 'How long does MVP development take?',
    a: 'Typically 45-60 days depending on feature scope. We work in agile sprints to ensure rapid delivery.',
  },
  {
    q: 'Can you help after launch?',
    a: 'Yes. We offer 30-day success assistance and ongoing optimization, scaling, and marketing packages.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Absolutely. Your IP (Intellectual Property) stays 100% yours. We sign an NDA before we even start discussing your specific idea.',
  },
  {
    q: 'What is the price?',
    a: "Pricing depends entirely on scope. We don't do cookie-cutter pricing because no two startups are the same. Chat with us on WhatsApp for a custom estimate.",
  },
];

const portfolio = [
  {
    name: 'EduPortal',
    desc: 'School ERP SaaS',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
  },
  {
    name: 'HomeFix',
    desc: 'Local services booking app',
    img: 'https://images.unsplash.com/photo-1581578731117-104f8a3d46a8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'RetailX',
    desc: 'POS + Inventory Platform',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'FitPlan',
    desc: 'Fitness Subscription App',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  },
];

export const MVP: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-black text-white">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 hover:bg-blue-500/20 transition-colors">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">
              CoolCliQ MVP Partner
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            Your MVP. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              Live in 60 Days.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            We turn bold ideas into fully working digital products. Built with Strategy × Creativity
            × Performance. <br />
            <span className="text-white">Build Fast. Launch Smart. Scale Confidently.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              Start Your MVP 🚀
            </a>
            <a
              href="https://wa.me/918126962266?text=I%20want%20to%20discuss%20an%20MVP%20Project"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-zinc-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Get Pricing on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM / SOLUTION */}
      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white mb-6">
              Most MVPs <span className="text-red-500">Fail</span> Before They Launch.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Not because the idea is wrong… But because execution is slow, expensive, and
              disorganized. Founders lose momentum, and competitors take the lead.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" /> Slow, never-ending development
                cycles
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" /> Developer dependency &
                spaghetti code
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" /> Zero focus on market strategy
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket className="w-32 h-32 text-blue-500" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              We Give You <span className="text-blue-400">Speed & Clarity</span>
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Speed</h4>
                  <p className="text-zinc-400 text-sm">
                    Launch in 6-8 weeks via sprint-driven builds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Clarity</h4>
                  <p className="text-zinc-400 text-sm">
                    We work as product partners: scope, strategy, weekly demos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Performance</h4>
                  <p className="text-zinc-400 text-sm">
                    Tech designed to scale. If we delay, you pay less.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON: OLD WAY VS COOLCLIQ */}
      <section className="py-24 bg-brand-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Why CoolCliQ is Different</h2>
            <p className="text-zinc-400">We build like a startup — not like a slow agency.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-red-500/10">
              <h3 className="text-xl font-bold text-zinc-500 mb-6 uppercase tracking-wider">
                The Old Way
              </h3>
              <ul className="space-y-4">
                {[
                  'Freelancers disappear mid-project',
                  'Agencies overcharge for simple features',
                  'Development takes months (or years)',
                  'Zero strategy, just code',
                  'No post-launch support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400">
                    <XCircle className="w-5 h-5 text-red-500/50 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CoolCliQ Way */}
            <div className="bg-zinc-900 rounded-3xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> The
                CoolCliQ Way
              </h3>
              <ul className="space-y-4">
                {[
                  '100% transparent communication',
                  'Cost-efficient team with guarantees',
                  'Delivery in 6-8 weeks (Sprint based)',
                  'Strategy-driven product build',
                  '30-day success assistance included',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH SERVICES BENTO */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Our Tech Stack & Services</h2>
            <p className="text-zinc-400">You focus on business. We handle the entire tech stack.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {techServices.map((service, idx) => (
              <div
                key={idx}
                className={`
                    ${service.colSpan} 
                    ${service.bg} 
                    ${service.text}
                    relative group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between
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

                {/* Decorative Icon */}
                <service.icon
                  className={`
                    absolute -bottom-6 -right-6 w-32 h-32 opacity-5 rotate-12
                    ${service.text === 'text-white' ? 'text-white' : 'text-black'}
                  `}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/918126962266"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1"
            >
              Get Tech Scope + Price on WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER JOURNEY */}
      <section className="py-24 bg-white text-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-full">
              Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Your Founder Journey</h2>
            <p className="text-zinc-600">Simplified. Transparent. Fast.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-200 -z-10"></div>

            {[
              {
                step: '1',
                title: 'Vision Alignment',
                desc: 'We define your goals, users & market advantage.',
              },
              {
                step: '2',
                title: 'Blueprint',
                desc: 'Clear scope, design prototype, milestone timeline.',
              },
              {
                step: '3',
                title: 'Fast Build',
                desc: 'Agile sprints. Your product evolves every week.',
              },
              {
                step: '4',
                title: 'Launch & Scale',
                desc: 'Go live + user insights + optimization plan.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-zinc-100 hover:border-brand-yellow hover:shadow-xl transition-all group text-center md:text-left"
              >
                <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-black text-xl mb-6 mx-auto md:mx-0 group-hover:bg-brand-yellow group-hover:text-black transition-colors relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-brand-black text-white rounded-full font-bold hover:bg-zinc-800 transition-colors inline-block"
            >
              Start Product Planning
            </a>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-brand-black mb-4">
              Products Built by CoolCliQ
            </h2>
            <p className="text-zinc-500">Real users. Real launches. Real traction.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-zinc-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-brand-black text-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Answering Founder Doubts</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section
        id="contact"
        className="py-32 bg-brand-black relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-brand-black to-brand-black pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The biggest risk isn’t building.
            <br />
            <span className="text-blue-500">It’s not building fast enough.</span>
          </h2>

          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Your idea deserves more than notes on paper. It deserves users. Revenue. Scale. Let’s
            build your MVP — the right way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/918126962266?text=I%20am%20ready%20to%20build%20my%20MVP"
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"
            >
              Start My Founder Journey
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-800 text-white text-lg font-bold rounded-full hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 border border-white/5"
            >
              Get Pricing on WhatsApp <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
