import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, Trash2, MessageSquare, ArrowRight, MapPin, CheckCircle2, 
  HelpCircle, Wrench, ShieldCheck, Plus, PackageCheck
} from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Custom Notes/Specs state per item: { [itemId]: string }
  const [itemSpecs, setItemSpecs] = useState({});

  // Client Details & Store Selection
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredStore, setPreferredStore] = useState('main'); // 'main' or 'branch'
  const [fieldErrors, setFieldErrors] = useState({
    fullName: false,
    phone: false
  });

  const handleSpecChange = (id, value) => {
    setItemSpecs(prev => ({ ...prev, [id]: value }));
  };

  const handleSendInquiryWhatsApp = (e) => {
    e.preventDefault();
    const digitCount = phone.replace(/\D/g, '').length;

    const errors = {
      fullName: !fullName.trim(),
      phone: digitCount < 10 || digitCount > 14
    };

    setFieldErrors(errors);

    if (errors.fullName || errors.phone) {
      return;
    }

    const locationName = preferredStore === 'main'
      ? 'Main Store at 26 Showemimo Street, Adura Bus Stop'
      : 'Branch Outlet at 4 Babayemi Street, Adura Bus Stop';

    // Track if user entered any specific detail for any item
    let hasAnySpecificDetail = false;

    // Itemized formatting
    const itemsFormatted = cartItems.map((item) => {
      const spec = itemSpecs[item.id] ? itemSpecs[item.id].trim() : '';
      if (spec) {
        hasAnySpecificDetail = true;
        return `• ${item.name} (Specified Model: ${spec})`;
      }
      return `• ${item.name}`;
    }).join('\n');

    // Dynamic closing request based on whether user specified exact details
    const closingRequest = hasAnySpecificDetail
      ? "If you don't have these exact specified models, could you please send me photos and options of what you currently have in stock? Thank you!"
      : "Could you please send me available options, photos, and prices for what you have in stock? Thank you!";

    const messageText = `Hello Freecom Technologies! My name is ${fullName}.

I am reaching out to inquire about stock availability and pricing for the following accessories at your ${locationName}:

${itemsFormatted}

${closingRequest}`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/2348030582883?text=${encodedMessage}`, '_blank');
  };

  // ── EMPTY BAG STATE ──
  if (cartItems.length === 0) {
    return (
      <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
        <section className="relative z-10 w-full pb-12 border-b border-slate-300 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200">
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>YOUR INQUIRY BAG</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase">
              INQUIRY BAG IS EMPTY
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-md px-4 text-center space-y-6">
            <div className="h-20 w-20 rounded-full border border-slate-300 bg-slate-100 text-slate-500 flex items-center justify-center mx-auto shadow-xs">
              <ShoppingBag className="h-8 w-8 text-slate-950" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-slate-950">No Accessories Selected Yet</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                You haven't added any accessories to your inquiry bag. Browse our mobile accessories catalog to select items for stock inquiry.
              </p>
            </div>
            <Link
              to="/accessories"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Browse Accessories Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ── ACTIVE INQUIRY LIST VIEW ──
  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      
      {/* ── HERO BANNER: UNIFORM WITH ALL PAGES ── */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-xs">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>INQUIRY BAG CONSULTATION ({cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'})</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
              YOUR INQUIRY BAG
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Review your selected accessory items (e.g. Power Bank, Chargers, Memory Cards) below, specify exact details (such as Power Bank mAh capacity or phone model screen guard), choose your preferred workshop center, and consult directly on WhatsApp.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: ASYMMETRICAL STAGGERED INQUIRY CARDS & FORM ── */}
      <section className="relative z-10 w-full py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Selected Items List */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h3 className="font-display font-bold text-lg text-slate-950">
                  Selected Accessory Categories
                </h3>
                <button
                  onClick={clearCart}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Clear Bag</span>
                </button>
              </div>

              {/* Items Cards */}
              <div className="space-y-6">
                <AnimatePresence>
                  {cartItems.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl border border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all shadow-xs bg-white"
                      >
                        {/* Top Row: Preview Image + Info + Remove Button */}
                        <div className="flex items-center justify-between gap-4 w-full">
                          
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex items-center justify-center p-1">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain filter drop-shadow-md"
                              />
                            </div>

                            <div>
                              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">CATEGORY EXAMPLE</span>
                              <h4 className="font-display font-bold text-base sm:text-lg text-slate-950">{item.name}</h4>
                              <p className="text-xs text-slate-600 font-normal line-clamp-1">{item.desc}</p>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="h-9 w-9 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950 border border-slate-200 flex items-center justify-center shrink-0 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>

                        </div>

                        {/* Custom Spec Input Area */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-200">
                          <label className="text-[11px] font-bold text-slate-950 flex items-center gap-1">
                            <Plus className="h-3 w-3 text-slate-950" />
                            <span>Specify Exact Details (Optional):</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Type-C to Type-C cable, 20,000mAh Power Bank, iPhone 13 Guard..."
                            value={itemSpecs[item.id] || ''}
                            onChange={(e) => handleSpecChange(item.id, e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-white"
                          />
                        </div>

                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Add More Items Button */}
              <div className="pt-2">
                <Link
                  to="/accessories"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold transition-all shadow-xs"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add More Accessory Categories</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Customer Details & WhatsApp Inquiry Form */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              
              <div className="bg-[#f1f5f9] p-6 sm:p-8 rounded-3xl border border-slate-300 space-y-6 shadow-xs">
                
                <div className="space-y-2 border-b border-slate-300 pb-4">
                  <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">DIRECT CONSULTATION</span>
                  <h3 className="font-display font-bold text-xl text-slate-950">Send Inquiry to WhatsApp</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    Fill out your name and phone number to send your inquiry list to our workshop engineer.
                  </p>
                </div>

                <form onSubmit={handleSendInquiryWhatsApp} className="space-y-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-950">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Samuel Adebayo"
                      value={fullName}
                      onChange={(e) => {
                        setFieldErrors(prev => ({ ...prev, fullName: false }));
                        setFullName(e.target.value);
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-all ${
                        fieldErrors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-slate-950'
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-red-500 text-[11px] font-medium mt-1">Please fill in this field</p>
                    )}
                  </div>

                  {/* WhatsApp/Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-950">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      maxLength={15}
                      placeholder="e.g. 08012345678"
                      value={phone}
                      onChange={(e) => {
                        setFieldErrors(prev => ({ ...prev, phone: false }));
                        // Allow digits 0-9 and at most one plus sign (+)
                        let cleaned = e.target.value.replace(/[^0-9+]/g, '');
                        const firstPlus = cleaned.indexOf('+');
                        if (firstPlus !== -1) {
                          cleaned = cleaned.slice(0, firstPlus + 1) + cleaned.slice(firstPlus + 1).replace(/\+/g, '');
                        }
                        setPhone(cleaned.slice(0, 15));
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-all ${
                        fieldErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-slate-950'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-red-500 text-[11px] font-medium mt-1">Please enter a valid phone number (10 to 14 digits)</p>
                    )}
                  </div>

                  {/* Preferred Workshop Center */}
                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-bold text-slate-950 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-950" />
                      <span>Preferred Store Location</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPreferredStore('main')}
                        className={`p-3.5 rounded-xl text-left border transition-all text-xs space-y-0.5 ${
                          preferredStore === 'main'
                            ? 'bg-slate-950 text-white border-slate-950 font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300 font-semibold hover:bg-slate-100'
                        }`}
                      >
                        <span className="block font-bold">Main Store</span>
                        <span className="text-[10px] opacity-80 block font-normal leading-tight">26, Showemimo street, Adura bus stop Alagbado</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreferredStore('branch')}
                        className={`p-3.5 rounded-xl text-left border transition-all text-xs space-y-0.5 ${
                          preferredStore === 'branch'
                            ? 'bg-slate-950 text-white border-slate-950 font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-300 font-semibold hover:bg-slate-100'
                        }`}
                      >
                        <span className="block font-bold">Branch Outlet</span>
                        <span className="text-[10px] opacity-80 block font-normal leading-tight">4, Babayemi street via Adegolu (Power line), Adura bus stop</span>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md mt-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>

                </form>

                <div className="pt-3 border-t border-slate-300 text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                  <PackageCheck className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>Direct response from Engr. Kehinde Adeosun on stock & availability.</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Cart;
