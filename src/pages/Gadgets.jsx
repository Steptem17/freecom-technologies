import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Zap, ShoppingBag, MessageSquare, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const GADGET_ITEMS = [
  {
    id: 'g-1',
    name: 'Apple iPhone 15 Pro Max',
    condition: 'Brand New (Sealed Box)',
    category: 'NEW PHONES',
    price: 1450000,
    image: '/phone_hero.png',
    specs: '256GB Storage • Titanium Body • 1 Year Warranty'
  },
  {
    id: 'g-2',
    name: 'Apple iPhone 13 Pro',
    condition: 'Pre-Owned (Clean Used)',
    category: 'USED PHONES',
    price: 620000,
    image: '/phone_hero.png',
    specs: '128GB Storage • 88%+ Battery Health • Tested & Certified'
  },
  {
    id: 'g-3',
    name: 'Samsung Galaxy S24 Ultra',
    condition: 'Brand New (Sealed Box)',
    category: 'NEW PHONES',
    price: 1380000,
    image: '/phone_hero.png',
    specs: '512GB Storage • S-Pen Included • Official Warranty'
  },
  {
    id: 'g-4',
    name: 'Samsung Galaxy S22 Ultra',
    condition: 'Pre-Owned (Clean Used)',
    category: 'USED PHONES',
    price: 490000,
    image: '/phone_hero.png',
    specs: '256GB Storage • Phantom Black • 100% Hardware Tested'
  },
  {
    id: 'g-5',
    name: 'Tecno Camon 30 Pro 5G',
    condition: 'Brand New',
    category: 'NEW PHONES',
    price: 310000,
    image: '/phone_hero.png',
    specs: '256GB + 12GB RAM • 50MP Sony OIS Camera'
  },
  {
    id: 'g-6',
    name: 'Infinix Note 40 Pro',
    condition: 'Brand New',
    category: 'NEW PHONES',
    price: 285000,
    image: '/phone_hero.png',
    specs: '256GB Storage • 70W Fast Charging • Curved AMOLED'
  },
  {
    id: 'g-7',
    name: 'Apple iPad Air (5th Gen)',
    condition: 'Brand New / Clean Pre-Owned',
    category: 'TABLETS',
    price: 580000,
    image: '/phone_hero.png',
    specs: '64GB Wi-Fi • Apple M1 Chip • Retina Display'
  },
  {
    id: 'g-8',
    name: 'Heavy-Duty 30,000mAh Power Bank',
    condition: 'Brand New (Authentic)',
    category: 'POWERBANKS & CHARGERS',
    price: 24500,
    image: '/acc_powerbank.png',
    specs: '22.5W Fast Charge • Dual Output • LED Digital Display'
  },
  {
    id: 'g-9',
    name: 'Original 65W Fast Charger & Cable Kit',
    condition: 'Brand New (Authentic)',
    category: 'POWERBANKS & CHARGERS',
    price: 14500,
    image: '/acc_fast_charger.png',
    specs: 'GaN Tech • Dual Type-C • Surge Protection'
  }
];

const Gadgets = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [addedItem, setAddedItem] = useState(null);
  const { addToCart } = useCart();

  const categories = ['ALL', 'NEW PHONES', 'USED PHONES', 'TABLETS', 'POWERBANKS & CHARGERS'];

  const filteredItems = GADGET_ITEMS.filter((item) => {
    if (activeTab === 'ALL') return true;
    return item.category === activeTab;
  });

  const handleAdd = (item) => {
    addToCart({
      id: item.id,
      name: `${item.name} (${item.condition})`,
      price: item.price,
      image: item.image
    });

    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleWhatsAppInquiry = (item) => {
    const text = encodeURIComponent(
      `Hello Freecom Technologies! I want to inquire about buying: ${item.name} (${item.condition}) priced at ₦${item.price.toLocaleString()}. Please let me know current availability at your Head Office.`
    );
    window.open(`https://wa.me/2348030582883?text=${text}`, '_blank');
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Hero Banner */}
      <section className="relative z-10 w-full pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-sm">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>AUTHENTIC SMARTPHONES & TECH GADGETS</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
              SMARTPHONES & TECH GADGETS
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Browse our verified catalog of brand new and clean used smartphones, iPads, power banks, fast chargers, and tech accessories available at our Head Office and branch outlet.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Catalog Grid */}
      <section className="relative z-10 w-full py-12 sm:py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  {/* Condition Tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-950 border border-slate-200">
                      {item.condition}
                    </span>
                    <span className="font-display font-extrabold text-base text-slate-950">
                      ₦{item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="h-48 w-full bg-slate-50 rounded-2xl flex items-center justify-center p-4 overflow-hidden border border-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Name & Specs */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-slate-950 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {item.specs}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Inquire</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-bold transition-all"
                  >
                    {addedItem === item.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Gadgets;
