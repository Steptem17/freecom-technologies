import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShoppingBag, MessageSquare, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const SMARTPHONE_ITEMS = [
  {
    id: 'phone-1',
    name: 'Apple iPhone 15 Pro Max',
    condition: 'Brand New (Sealed Box)',
    price: 1450000,
    image: '/phone_hero.png',
    specs: '256GB Storage • Titanium Body • Official Warranty'
  },
  {
    id: 'phone-2',
    name: 'Apple iPhone 13 Pro',
    condition: 'Certified Pre-Owned',
    price: 620000,
    image: '/phone_hero.png',
    specs: '128GB Storage • 88%+ Battery Health • Tested & Certified'
  },
  {
    id: 'phone-3',
    name: 'Samsung Galaxy S24 Ultra',
    condition: 'Brand New (Sealed Box)',
    price: 1380000,
    image: '/phone_hero.png',
    specs: '512GB Storage • S-Pen Included • Official Warranty'
  },
  {
    id: 'phone-4',
    name: 'Samsung Galaxy S22 Ultra',
    condition: 'Certified Pre-Owned',
    price: 490000,
    image: '/phone_hero.png',
    specs: '256GB Storage • Phantom Black • 100% Hardware Tested'
  },
  {
    id: 'phone-5',
    name: 'Tecno Camon 30 Pro 5G',
    condition: 'Brand New (Sealed Box)',
    price: 310000,
    image: '/phone_hero.png',
    specs: '256GB + 12GB RAM • 50MP Sony OIS Camera'
  },
  {
    id: 'phone-6',
    name: 'Infinix Note 40 Pro',
    condition: 'Brand New (Sealed Box)',
    price: 285000,
    image: '/phone_hero.png',
    specs: '256GB Storage • 70W Fast Charging • Curved AMOLED'
  }
];

const Gadgets = () => {
  const [addedItem, setAddedItem] = useState(null);
  const { addToCart } = useCart();

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
      `Hello Freecom Technologies! I want to inquire about buying: ${item.name} (${item.condition}) priced at ₦${item.price.toLocaleString()}. Please let me know current stock availability at your Head Office.`
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
              BRAND NEW & CERTIFIED PRE-OWNED SMARTPHONES
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Browse our verified catalog of brand new and clean used smartphones available at our head office and branch outlet.
            </p>
          </div>

        </div>
      </section>

      {/* Catalog Grid with Bouncing Animated Smartphone Graphics */}
      <section className="relative z-10 w-full py-12 sm:py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SMARTPHONE_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  {/* Condition Tag & Price */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-950 border border-slate-200">
                      {item.condition}
                    </span>
                    <span className="font-display font-extrabold text-base text-slate-950">
                      ₦{item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Smartphone Image Container with Smooth Bouncing Animation */}
                  <div className="h-52 w-full bg-slate-50 rounded-2xl flex items-center justify-center p-4 overflow-hidden border border-slate-100 relative group">
                    <motion.img 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      src={item.image} 
                      alt={item.name} 
                      className="h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300 z-10"
                    />
                    {/* Shadow pulse */}
                    <motion.div
                      animate={{ scaleX: [1, 0.7, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-32 h-3 bg-slate-950/20 rounded-[100%] filter blur-sm absolute bottom-2 z-0"
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
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold transition-all shadow-xs"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Inquire</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-bold transition-all shadow-xs"
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
