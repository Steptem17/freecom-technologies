import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, Check, MessageSquare, HelpCircle, PackageCheck
} from 'lucide-react';

// Alternating Bento Pattern: (2+1) -> (1+1+1) -> (2+1) -> (1+1+1) -> (2+1) -> (1+1+1)
const ALL_ACCESSORIES_CATALOG = [
  // BLOCK 1: Large (2-col) + Small (1-col)
  {
    id: 'acc-1',
    name: 'Chargers',
    price: 8500,
    span: 'lg:col-span-2 bg-white',
    image: '/acc_charger.png',
    desc: 'Wall chargers, desktop charging stations, multi-port USB chargers, and fast phone chargers.'
  },
  {
    id: 'acc-2',
    name: 'Fast Adapters',
    price: 6500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_fast_adapter.png',
    desc: 'Fast charging power adapters, dual-port USB adapters, and quick wall plugs.'
  },

  // BLOCK 2: Three Small Boxes (1-col + 1-col + 1-col)
  {
    id: 'acc-3',
    name: 'Charging Cables',
    price: 4500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_charging_cable.png',
    desc: 'Type-C to Type-C cables, iPhone cables, Type-B Android cables, and multi-charging cables.'
  },
  {
    id: 'acc-4',
    name: 'Car Chargers',
    price: 6500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_car_charger.png',
    desc: 'Dual USB car charger and fast car adapter.'
  },
  {
    id: 'acc-5',
    name: 'Power Banks',
    price: 18500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_power_bank.png',
    desc: 'Wireless power banks, high-capacity portable power banks, and digital LED battery packs.'
  },

  // BLOCK 3: Large Memory Card (2-col) + Small Flash Drive (1-col)
  {
    id: 'acc-6',
    name: 'Memory Cards',
    price: 5500,
    span: 'lg:col-span-2 bg-white',
    image: '/acc_memory_card.png',
    desc: 'High-speed MicroSD memory cards across various storage capacities.'
  },
  {
    id: 'acc-7',
    name: 'Flash Drives',
    price: 5000,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_flash_drive.png',
    desc: 'Dual OTG USB flash drives for phones, tablets, and computers.'
  },

  // BLOCK 4: Three Small Boxes (1-col + 1-col + 1-col)
  {
    id: 'acc-8',
    name: 'Memory Card Readers',
    price: 4000,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_card_reader.png',
    desc: 'High-speed USB card readers, OTG card readers, and multi-slot memory card readers.'
  },
  {
    id: 'acc-9',
    name: 'Screen Protectors & Tempered Glass',
    price: 3500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_screen_protector.png',
    desc: 'Tempered screen guard, privacy screen guard, and normal screen guard.'
  },
  {
    id: 'acc-10',
    name: 'Earbuds',
    price: 24500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_earbuds.png',
    desc: 'Wireless Bluetooth Earbuds, noise-cancelling Earbuds, and spatial audio Earbuds.'
  },

  // BLOCK 5: Large Wireless Bluetooth Earphones (2-col) + Small Wired Earphones (1-col)
  {
    id: 'acc-11',
    name: 'Wireless Bluetooth Earphones',
    price: 12500,
    span: 'lg:col-span-2 bg-white',
    image: '/acc_wireless_earphones.png',
    desc: 'Wireless neckband Bluetooth earphones, magnetic sport earbuds, and stereo Bluetooth headsets.'
  },
  {
    id: 'acc-12',
    name: 'Wired Earphones',
    price: 4500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_wired_earphones.png',
    desc: 'Type-C digital wired earphones and 3.5mm jack stereo wired earphones.'
  },

  // BLOCK 6: Three Small Boxes (1-col + 1-col + 1-col)
  {
    id: 'acc-13',
    name: 'Audio Sound Systems',
    price: 16500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_audio_system.png',
    desc: 'Portable wireless sound systems, heavy bass audio speakers, and mini sound bars.'
  },
  {
    id: 'acc-14',
    name: 'Smart-Watches',
    price: 19500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_smartwatch.png',
    desc: 'Fitness tracker smartwatches, Bluetooth call smartwatches, and smart wristbands.'
  },
  {
    id: 'acc-15',
    name: 'Hair Clippers',
    price: 14500,
    span: 'lg:col-span-1 bg-white',
    image: '/acc_hair_clipper.png',
    desc: 'Rechargeable cordless hair clippers, hair trimmers, and LED digital display clippers.'
  }
];

const Shop = () => {
  const { addToCart, cartItems } = useCart();
  const [customInquiryItem, setCustomInquiryItem] = useState('');
  const [recentlyAddedMap, setRecentlyAddedMap] = useState({});
  const [toastMessage, setToastMessage] = useState(null);

  const isInCart = (id) => cartItems.some(i => i.id === id);

  const handleItemClick = (item) => {
    const alreadyInBag = isInCart(item.id);

    if (alreadyInBag) {
      // Show subtle toast notification for items already added previously
      setToastMessage(`${item.name} is already in your inquiry bag!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3500);
    } else {
      // Add new item to bag & show 5-second green "Added" checkmark state
      addToCart(item);
      setRecentlyAddedMap(prev => ({ ...prev, [item.id]: true }));
      setTimeout(() => {
        setRecentlyAddedMap(prev => ({ ...prev, [item.id]: false }));
      }, 5000);
    }
  };

  // Send WhatsApp message to check item availability
  const handleCheckAvailabilityWhatsApp = (e) => {
    e.preventDefault();
    if (!customInquiryItem.trim()) {
      alert('Please type the accessory name you are looking for.');
      return;
    }

    const message = `Hello Freecom Technologies! I'm looking for an accessory not listed on the website: ${customInquiryItem}. Do you have this available in stock at your store? Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/2348030582883?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      
      {/* ── HERO BANNER: UNIFORM WITH HOME & ABOUT PAGES ── */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-xs">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>MOBILE ACCESSORIES SHOP</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
              AUTHENTIC PHONE ACCESSORIES
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              View our range of chargers, fast adapters, cables, power banks, screen protectors, memory cards, flash drives, AirPods, earphones, audio systems, hair clippers, and smartwatches available at our stores.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: BENTO CATALOG WITH SMOOTH ROTATING IMAGES (NO CARD BOUNCING) ── */}
      <section className="relative z-10 w-full py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          {/* Main Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {ALL_ACCESSORIES_CATALOG.map((item, idx) => {
              const isRecentlyAdded = !!recentlyAddedMap[item.id];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl border border-slate-300 shadow-sm p-5 sm:p-7 flex flex-col justify-between overflow-hidden transition-all hover:shadow-md ${item.span}`}
                >
                  {/* Card Content Layout: Separated Image Container + Details Box */}
                  <div className="flex flex-col xl:flex-row items-center xl:items-start gap-5 w-full">
                    
                    {/* SEPARATED FLOATING BOUNCING ACCESSORY PNG + DYNAMIC GROUND SHADOW */}
                    <div className="relative shrink-0 flex flex-col items-center justify-center my-1 w-24 sm:w-28 xl:w-32 h-24 sm:h-28 xl:h-32">
                      <motion.img
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain filter drop-shadow-lg z-10"
                      />
                      <motion.div
                        animate={{ 
                          scaleX: [1, 0.65, 1],
                          scaleY: [1, 0.65, 1],
                          opacity: [0.6, 0.25, 0.6]
                        }}
                        transition={{ 
                          duration: 3.2, 
                          repeat: Infinity, 
                          ease: 'easeInOut' 
                        }}
                        className="w-16 sm:w-20 xl:w-24 h-3 bg-slate-950/40 rounded-[100%] filter blur-xs -mt-2 z-0"
                      />
                    </div>

                    {/* SEPARATED DETAILS BOX */}
                    <div className="space-y-2 flex-1 text-center xl:text-left">
                      <h3 className="font-display font-bold text-base sm:text-lg xl:text-xl text-slate-950 leading-tight break-words">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                  {/* Add to Inquiry Bag Action Bar */}
                  <div className="pt-5 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 w-full">
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <PackageCheck className="h-3.5 w-3.5" />
                      In Stock
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleItemClick(item)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                        isRecentlyAdded 
                          ? 'bg-emerald-700 text-white' 
                          : 'bg-slate-950 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {isRecentlyAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* ── BOTTOM SECTION: CAN'T FIND YOUR ACCESSORY? CHECK AVAILABILITY BOX ── */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#f1f5f9] p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-slate-300 space-y-4 max-w-3xl mx-auto text-center shadow-xs mt-12"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-950 shadow-xs">
              <HelpCircle className="h-4 w-4 text-slate-950 shrink-0" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest">CAN'T FIND YOUR ACCESSORY?</span>
            </div>
            
            <h3 className="font-display font-black text-xl sm:text-2xl text-slate-950 uppercase">
              Looking for something else not listed above?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              If you are looking for an accessory not listed in our catalog, type what you are looking for below to check if it's available in our store.
            </p>
            
            <form onSubmit={handleCheckAvailabilityWhatsApp} className="space-y-3 pt-2 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Type the accessory you are looking for..."
                value={customInquiryItem}
                onChange={(e) => setCustomInquiryItem(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-white"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Check Availability on WhatsApp</span>
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Floating Toast Alert when clicking an item already in the inquiry bag */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-3.5 rounded-2xl border border-slate-800 shadow-2xl flex items-center gap-3 text-xs font-bold"
          >
            <Check className="h-4 w-4 text-emerald-400 shrink-0 stroke-[3]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Shop;
