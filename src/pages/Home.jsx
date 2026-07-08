import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Tablet, Headphones, Monitor, ChevronRight, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { REVIEWS_DATA } from '../utils/mockData';

const Home = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Colored icon mapping to represent tech divisions strategically
  const categories = [
    { 
      icon: <Smartphone className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform duration-300" />, 
      name: 'Smartphones', 
      path: '/repair?type=smartphone', 
      desc: 'Screen, battery, and charging port restorations',
      accentColor: 'hover:border-amber-400/40 hover:bg-amber-50/5',
      textAccent: 'group-hover:text-amber-600'
    },
    { 
      icon: <Tablet className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />, 
      name: 'Tablets', 
      path: '/repair?type=tablet', 
      desc: 'iPad glass and digitizer replacements',
      accentColor: 'hover:border-emerald-400/40 hover:bg-emerald-50/5',
      textAccent: 'group-hover:text-emerald-600'
    },
    { 
      icon: <Headphones className="h-6 w-6 text-purple-500 group-hover:scale-110 transition-transform duration-300" />, 
      name: 'Audio Systems', 
      path: '/repair?type=headphones', 
      desc: 'Headset repairs, port fixes',
      accentColor: 'hover:border-purple-400/40 hover:bg-purple-50/5',
      textAccent: 'group-hover:text-purple-600'
    },
    { 
      icon: <Monitor className="h-6 w-6 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />, 
      name: 'Software Services', 
      path: '/repair?type=software', 
      desc: 'Phone flashing, OS reinstalls, software troubleshooting',
      accentColor: 'hover:border-indigo-400/40 hover:bg-indigo-50/5',
      textAccent: 'group-hover:text-indigo-600'
    }
  ];

  return (
    <div className="relative w-full text-zinc-900">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 border-b border-zinc-150">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline (Spans 7 columns) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 uppercase tracking-[0.15em] w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              Hardware Engineering & Retail
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-zinc-950 leading-[1.12]">
              Professional gadget repairs and premium tech accessories.
            </h1>
            <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed max-w-xl">
              Serving customers in Lagos, Nigeria. We inspect circuits, replace broken displays, restore battery power cycles, and keep a verified inventory of wholesale accessories.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                to="/repair"
                className="inline-flex items-center justify-center rounded border border-primary bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-primary transition-all duration-350 shadow-md shadow-primary/10"
              >
                Start Repair Intake
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </Link>
              <Link
                to="/accessories"
                className="inline-flex items-center justify-center rounded border border-zinc-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-zinc-700 hover:border-zinc-950 hover:text-zinc-950 transition-all duration-350"
              >
                Browse Accessories
              </Link>
            </div>
          </div>

          {/* Right Column: Tech Image (Spans 5 columns, clean rounded card, no border) */}
          <div className="lg:col-span-5">
            <ScrollReveal className="overflow-hidden rounded-2xl w-full h-[300px] sm:h-[320px] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=80"
                alt="Tech repair workbench"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white/60 border-b border-zinc-150">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal className="text-left max-w-xl mb-12">
            <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">Intake Specialties</span>
            <h2 className="text-2xl font-bold font-display text-zinc-950 mt-1">What We Service</h2>
            <p className="text-xs text-zinc-600 font-light mt-2 leading-relaxed">
              We diagnose and repair consumer electronics of all major makes and models. Check off your symptoms and launch our intake thread to consult our team.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`bg-white border border-zinc-200 rounded-xl p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between group h-full ${cat.accentColor}`}>
                  <div className="space-y-4">
                    <div className="p-2.5 bg-zinc-50 rounded-lg w-fit group-hover:bg-white transition-colors duration-300">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-sm text-zinc-900 transition-colors duration-300 ${cat.textAccent}`}>{cat.name}</h3>
                      <p className="text-[11px] text-zinc-600 font-light leading-relaxed mt-1.5">{cat.desc}</p>
                    </div>
                  </div>
                  <Link
                    to={cat.path}
                    className={`mt-6 text-[10px] font-bold uppercase tracking-wider text-zinc-500 transition-colors flex items-center gap-1 ${cat.textAccent}`}
                  >
                    Intake form ➔
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Location Info Grid */}
      <section className="py-20 bg-zinc-50/70 border-b border-zinc-150">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6 text-left">
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">Store Locator</span>
              <h2 className="text-2xl font-bold font-display text-zinc-950 mt-1">Visit Freecom Technology</h2>
              <p className="text-xs sm:text-sm text-zinc-655 font-light leading-relaxed">
                Our engineering repair workshop and accessory display store is located on the main road in Alagbado. Come in for direct physical consultation or pick up your reserved products.
              </p>

              <div className="space-y-3.5 text-xs text-zinc-800 font-light">
                <div className="flex gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Oluwole Showemimo St, Adura Road, Alagbado, Lagos, Nigeria.</span>
                </div>
                <div className="flex gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Monday - Saturday: 9:00 AM - 9:00 PM <br /><span className="text-[10px] text-zinc-500 font-light">(Sunday: Closed)</span></span>
                </div>
                <div className="flex gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Professional Diagnostic Inspections and Verified Accessories.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Static Map representation card */}
            <ScrollReveal className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-64 text-left shadow-sm">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="relative space-y-2">
                <h4 className="font-display font-bold text-zinc-900 text-xs uppercase tracking-wide">Oluwole Showemimo St</h4>
                <p className="text-[10px] text-zinc-600 max-w-xs font-light leading-normal">Adura Road, Alagbado, Lagos. Get directions to our workshop from wherever you are.</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Oluwole+Showemimo+St,+Adura+Road,+Alagbado,+Lagos"
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center justify-center rounded bg-primary px-4 py-2.5 text-[9px] font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-colors w-fit shadow-md shadow-primary/10"
              >
                Open Google Maps
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <section className="py-20 bg-white/60 text-zinc-700 overflow-hidden relative border-b border-zinc-150">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-left mb-10">
            <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">Client Feedback</span>
            <h2 className="text-2xl font-bold font-display text-zinc-950 mt-1">Verified Local Reviews</h2>
          </div>

          <div className="relative min-h-[160px] max-w-2xl">
            {REVIEWS_DATA.map((review, idx) => (
              <div
                key={review.id}
                className={`transition-all duration-700 absolute inset-0 flex flex-col items-start text-left ${
                  idx === activeReviewIndex
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="flex gap-0.5 mb-3 text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm font-light italic leading-relaxed text-zinc-600 max-w-xl">
                  "{review.text}"
                </blockquote>
                <cite className="not-italic mt-4 flex flex-col">
                  <span className="font-display font-semibold text-xs text-zinc-950">{review.author}</span>
                  <span className="text-[10px] text-zinc-500 font-light mt-0.5">{review.location}</span>
                </cite>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-start gap-1.5 mt-8">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReviewIndex(idx)}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  idx === activeReviewIndex ? 'bg-primary' : 'bg-zinc-200'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
