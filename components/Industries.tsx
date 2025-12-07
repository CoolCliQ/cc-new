import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  UtensilsCrossed, 
  Factory, 
  ShoppingCart, 
  Home, 
  Plane, 
  Flower2, 
  Hammer, 
  PartyPopper 
} from 'lucide-react';

const industries = [
  { name: 'Banking & Finance', icon: Building2 },
  { name: 'Medical & Healthcare', icon: Stethoscope },
  { name: 'Education', icon: GraduationCap },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Manufacturing', icon: Factory },
  { name: 'eCommerce', icon: ShoppingCart },
  { name: 'Real Estate', icon: Home },
  { name: 'Transportation', icon: Plane },
  { name: 'Beauty & Cosmetics', icon: Flower2 },
  { name: 'Construction', icon: Hammer },
  { name: 'Events & Services', icon: PartyPopper },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-brand-yellow text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Industries We Have <br />
            <span className="bg-white px-2">Served</span>
          </h2>
          <p className="text-lg font-medium opacity-80">
            Growth has no boundaries — and neither do we.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 aspect-square text-center"
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-black" />
              <span className="font-bold text-sm md:text-base leading-tight">{item.name}</span>
            </div>
          ))}
          
          {/* Last Card CTA */}
           <div className="bg-black text-white p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 aspect-square text-center">
              <span className="font-bold text-lg md:text-xl leading-tight">Your Industry Not Listed?</span>
              <span className="text-xs text-brand-yellow">Let's talk →</span>
            </div>
        </div>
      </div>
    </section>
  );
};