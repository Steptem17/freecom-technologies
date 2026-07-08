import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ShieldCheck, Award, Heart } from 'lucide-react';

const About = () => {
  // Strategic color configuration for company values to introduce visual depth
  const values = [
    { 
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, 
      title: 'Full Transparency', 
      desc: 'No hidden repair costs. We list all faults, verify the parts needed, and consult you directly on WhatsApp for pricing approval.',
      colorClass: 'bg-emerald-50 border-emerald-100'
    },
    { 
      icon: <Award className="h-5 w-5 text-amber-600" />, 
      title: 'Original-Grade Components', 
      desc: 'Every display swap, charging board, or battery cell matches strict OEM specifications for power stability and performance.',
      colorClass: 'bg-amber-50 border-amber-100'
    },
    { 
      icon: <Heart className="h-5 w-5 text-rose-600" />, 
      title: 'Device Sustainability', 
      desc: 'Extend gadget lifespans and reduce electronic waste. We focus on restorative repairs over unnecessary new hardware sales.',
      colorClass: 'bg-rose-50 border-rose-100'
    }
  ];

  return (
    <div className="py-12 sm:py-16 text-zinc-900">
      
      {/* Intro Header */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 mb-20 text-left border-b border-zinc-150 pb-16">
        <ScrollReveal className="space-y-4">
          <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded px-2.5 py-0.5 uppercase tracking-[0.25em] block w-fit">
            Our Principles
          </span>
          <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950 sm:text-4xl">
            About Freecom Technology
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-650 font-light leading-relaxed">
            We are a growing hardware repair and accessory retail center located in Alagbado, Lagos. We focus on providing high-quality repair diagnostics, certified replacement components, and direct WhatsApp consultations.
          </p>
        </ScrollReveal>
      </section>

      {/* Content Sections (Divided by spacious margins, NO divider border lines) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 space-y-24">
        
        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <ScrollReveal className="md:col-span-7 space-y-4 text-left">
            <h2 className="text-sm font-bold font-display uppercase tracking-wider text-zinc-950 border-l-2 border-primary pl-3">
              Who We Are
            </h2>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light">
              Freecom Technology is committed to delivering premium, direct gadget repair solutions and verified tech accessories. We service smartphones, tablets, and audio devices, and also handle software issues like phone flashing and OS reinstalls, at our workshop on Oluwole Showemimo St, Adura Road, Alagbado, Lagos.
            </p>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light">
              We prioritize data security and absolute transparency. By providing structured diagnostic details, we ensure that every client knows precisely what faults affect their hardware before starting repairs.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-5 relative" delay={100}>
            <div className="overflow-hidden rounded-xl border border-zinc-150 shadow-sm h-64 bg-zinc-50/50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80"
                alt="Tech workbench view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Block 2 (Reverse layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <ScrollReveal className="md:col-span-5 order-last md:order-first relative">
            <div className="overflow-hidden rounded-xl border border-zinc-150 shadow-sm h-64 bg-zinc-50/50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                alt="Circuits inspection"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-7 space-y-4 md:pl-4 text-left">
            <h2 className="text-sm font-bold font-display uppercase tracking-wider text-zinc-950 border-l-2 border-primary pl-3">
              Proven Expertise
            </h2>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light">
              Our technician team is skilled in handling hardware repairs ranging from basic shattered screens and swelling batteries to advanced charging port micro-soldering.
            </p>
            <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light">
              We focus on restoring devices using premium, durable parts. This prevents early component decay, ensures touch grid accuracy, and maintains healthy power cycles for batteries.
            </p>
          </ScrollReveal>
        </div>

      </section>

      {/* Core Values Section */}
      <section className="bg-white/60 py-16 mt-24 border-t border-zinc-150">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal className="text-left max-w-xl mb-12">
            <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">Operational Ethics</span>
            <h2 className="text-2xl font-bold font-display text-zinc-950 mt-1">Our Core Values</h2>
            <p className="text-xs text-zinc-600 font-light mt-1.5 leading-relaxed">
              These guidelines define how we repair customer gadgets and source our technical accessories catalog.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="bg-white border border-zinc-150 rounded-xl p-6 shadow-sm text-left">
                {/* Colored icon containers */}
                <div className={`h-10 w-10 rounded border flex items-center justify-center mb-5 ${val.colorClass}`}>
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-sm text-zinc-950 mb-2">{val.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{val.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
