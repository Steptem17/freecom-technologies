import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MessageSquare, Search, ShieldCheck, HelpCircle } from 'lucide-react';

const SMARTPHONE_BRANDS = [
  // BLOCK 1: Large (2-col) + Small (1-col)
  {
    id: 'b-1',
    brand: 'Apple iPhone Series',
    tag: 'Brand New & Clean Pre-Owned',
    image: '/brand_iphone.png',
    span: 'lg:col-span-2'
  },
  {
    id: 'b-2',
    brand: 'Samsung Galaxy Series',
    tag: 'Brand New & Clean Pre-Owned',
    image: '/brand_samsung.png',
    span: 'lg:col-span-1'
  },

  // BLOCK 2: Three Small Boxes (1-col + 1-col + 1-col)
  {
    id: 'b-3',
    brand: 'Tecno Mobile Series',
    tag: 'Brand New & Pre-Owned',
    image: '/brand_tecno.png',
    span: 'lg:col-span-1'
  },
  {
    id: 'b-4',
    brand: 'Infinix Mobile Series',
    tag: 'Brand New & Pre-Owned',
    image: '/brand_infinix.png',
    span: 'lg:col-span-1'
  },
  {
    id: 'b-5',
    brand: 'Redmi / Xiaomi Series',
    tag: 'Brand New & Pre-Owned',
    image: '/brand_redmi.png',
    span: 'lg:col-span-1'
  },

  // BLOCK 3: Large (2-col) + Small (1-col)
  {
    id: 'b-6',
    brand: 'Oppo & Vivo Series',
    tag: 'Brand New & Pre-Owned',
    image: '/brand_oppo_vivo.png',
    span: 'lg:col-span-2'
  },
  {
    id: 'b-7',
    brand: 'Itel Mobile Series',
    tag: 'Brand New & Budget Friendly',
    image: '/brand_itel.png',
    span: 'lg:col-span-1'
  }
];

const Gadgets = () => {
  const [customModel, setCustomModel] = useState('');
  const [customCondition, setCustomCondition] = useState('Either Brand New or Pre-Owned');

  const handleBrandInquiry = (brandItem) => {
    const text = encodeURIComponent(
      `Hello Engr. Kehinde / Freecom Technologies!\n\nI am inquiring about buying a ${brandItem.brand} smartphone. Please, do you have this phone brand available in stock at your Head Office? I can specify the exact model, storage size, and preferred condition.`
    );
    window.open(`https://wa.me/2348030582883?text=${text}`, '_blank');
  };

  const handleCustomPhoneRequest = (e) => {
    e.preventDefault();
    if (!customModel.trim()) return;

    const text = encodeURIComponent(
      `Hello Engr. Kehinde / Freecom Technologies!\n\nI am looking for a specific smartphone:\n• Phone Model / Brand: ${customModel.trim()}\n• Preferred Condition: ${customCondition}\n\nPlease, do you have this phone available in stock at your Head Office?`
    );
    window.open(`https://wa.me/2348030582883?text=${text}`, '_blank');
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Hero Banner */}
      <section className="relative z-10 w-full pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-sm">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>AUTHENTIC SMARTPHONES & TECH GADGETS</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
              BRAND NEW & CERTIFIED PRE-OWNED SMARTPHONES
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Browse our verified catalog of brand new and clean used smartphones available at our head office and branch outlet.
            </p>
          </div>

        </div>
      </section>

      {/* Pure Clean White Catalog Section (Mirroring Shop.jsx Accessories Page) */}
      <section className="relative z-10 w-full py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Alternating Bento Grid matching Shop.jsx: (2+1) -> (1+1+1) -> (2+1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SMARTPHONE_BRANDS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`${item.span} bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left`}
              >
                <div className="space-y-4">
                  {/* Condition Tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-950 border border-slate-200">
                      {item.tag}
                    </span>
                    <Smartphone className="h-5 w-5 text-slate-950" />
                  </div>

                  {/* Standalone Bouncing Smartphone Image Container (Custom Transparent PNG) */}
                  <div className="h-56 w-full flex flex-col items-center justify-center relative py-2 overflow-hidden">
                    <motion.img 
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      src={item.image} 
                      alt={item.brand} 
                      className="h-48 object-contain filter drop-shadow-xl z-10"
                    />
                    {/* Pulsing Shadow Effect */}
                    <motion.div
                      animate={{ scaleX: [1, 0.6, 1], opacity: [0.4, 0.15, 0.4] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-36 h-3 bg-slate-950/20 rounded-[100%] filter blur-sm absolute bottom-1 z-0"
                    />
                  </div>

                  {/* Brand Title */}
                  <div className="pt-2">
                    <h3 className="font-display font-black text-xl text-slate-950 leading-tight">
                      {item.brand}
                    </h3>
                  </div>
                </div>

                {/* Single Clean Inquire Button */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleBrandInquiry(item)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-extrabold transition-all shadow-xs"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Check Brand Stock Availability</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CLEAN CUSTOM PHONE AVAILABILITY INQUIRY BOX ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-sm text-left space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-950 border border-slate-200">
                  <HelpCircle className="h-3.5 w-3.5 text-slate-950" />
                  <span>CUSTOM PHONE AVAILABILITY SEARCH</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight">
                  CAN'T FIND THE EXACT PHONE BRAND YOU'RE LOOKING FOR?
                </h3>
              </div>
              <ShieldCheck className="h-10 w-10 text-slate-900 hidden sm:block shrink-0" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-3xl">
              If a specific phone model or brand name is not listed above, type the phone name below and inquire directly with Engr. Kehinde and our team to verify instant stock availability at our Head Office.
            </p>

            <form onSubmit={handleCustomPhoneRequest} className="space-y-6 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 space-y-1.5">
                  <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5 text-slate-700" />
                    Phone Model or Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tecno Camon 30, Infinix Note 40, Oppo Reno 11, Vivo V30..."
                    value={customModel}
                    onChange={(e) => setCustomModel(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-slate-50 focus:bg-white transition-all"
                  />
                </div>

                <div className="sm:col-span-4 space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">
                    Preferred Condition
                  </label>
                  <select
                    value={customCondition}
                    onChange={(e) => setCustomCondition(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-slate-50 focus:bg-white transition-all"
                  >
                    <option value="Either Brand New or Pre-Owned">Either New or Used</option>
                    <option value="Brand New (Sealed)">Brand New (Sealed)</option>
                    <option value="Certified Pre-Owned (Used)">Clean Pre-Owned (Used)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-extrabold transition-all shadow-md uppercase tracking-wider"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Check Phone Availability on WhatsApp</span>
              </button>
            </form>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Gadgets;
