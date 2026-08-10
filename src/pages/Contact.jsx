import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, PhoneCall, Clock, MessageSquare, Navigation, ShieldCheck, 
  User, Mail, ArrowRight, CheckCircle2, Phone, Wrench, ShoppingBag
} from 'lucide-react';

const Contact = () => {
  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(false);

  // Live minute ticker for store status
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 10000); // Ticks every 10s
    return () => clearInterval(timer);
  }, []);

  // Real-Time Live Store Status Monitor (8:00 AM to 9:00 PM local time window)
  const isStoreOpenNow = () => {
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = 8 * 60;   // 8:00 AM (480 mins)
    const closeMinutes = 21 * 60; // 9:00 PM (1260 mins)

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  };

  const storeIsOpen = isStoreOpenNow();

  const [fieldErrors, setFieldErrors] = useState({
    fullName: false,
    phone: false,
    message: false
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const digitCount = phone.replace(/\D/g, '').length;

    const errors = {
      fullName: !fullName.trim(),
      phone: digitCount < 10 || digitCount > 14,
      message: !message.trim()
    };

    setFieldErrors(errors);

    if (errors.fullName || errors.phone || errors.message) {
      return;
    }

    // Exact requested format: No "Subject:" tag, no phone tag, no "Message:" tag
    const formattedMsg = `Hello Freecom Technologies, I am ${fullName.trim()}, and I am sending an inquiry from your website.\n\n${subject.trim() ? `${subject.trim()}\n\n` : ''}${message.trim()}`;

    const encodedMsg = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/2348030582883?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      
      {/* ── HERO BANNER: UNIFORM WITH HOME, ABOUT & ACCESSORIES PAGES ── */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-xs">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>WORKSHOP & ACCESSORY CENTER LOCATIONS</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
              LOCATE OUR WORKSHOP & ACCESSORY CENTER
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Visit our main repair workshop on Adura Road or our branch outlet at Adura Bus Stop. Speak directly with our phone engineers or send an inquiry online.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: DUAL STORE LOCATIONS WITH REAL-TIME OPEN/CLOSED MONITOR ── */}
      <section className="relative z-10 w-full py-10 sm:py-16 bg-white border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          {/* Dual Store Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: MAIN HEADQUARTERS WORKSHOP */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 p-6 sm:p-10 rounded-3xl border border-slate-300 bg-[#f1f5f9] shadow-sm flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-950 text-white flex items-center justify-center border border-slate-800 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">MAIN HEADQUARTERS</span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">Showemimo Street Workshop</h3>
                    </div>
                  </div>
                  
                  {/* Dynamic Time-Based Status Badge */}
                  {storeIsOpen ? (
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold bg-slate-950 text-emerald-400 border border-slate-800 shrink-0 flex items-center gap-1.5 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>OPEN NOW</span>
                    </span>
                  ) : (
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold bg-slate-900 text-slate-400 border border-slate-700 shrink-0 flex items-center gap-1.5 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-slate-500" />
                      <span>CLOSED NOW</span>
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <p className="font-semibold text-slate-950 text-sm">
                    26, Showemimo Street, Adura Bus Stop, Alagbado, Lagos State, Nigeria.
                  </p>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-slate-950" />
                    <span>Monday - Saturday: 8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Wrench className="h-3.5 w-3.5 text-slate-950" />
                    <span>Chief Engineer On-Site: Engr. Kehinde Adeosun</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShoppingBag className="h-3.5 w-3.5 text-slate-950" />
                    <span>Main Accessories Shop & Component Repair Bench</span>
                  </div>
                </div>

                {/* Google Map Card Embed */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md h-56 bg-slate-100">
                  <iframe
                    title="Freecom Main Workshop Google Map"
                    src="https://maps.google.com/maps?q=26%20Showemimo%20street,%20Adura%20bus%20stop%20Alagbado%20Lagos%20State,%20Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=26+Showemimo+Street+Adura+Bus+Stop+Alagbado+Lagos+State+Nigeria" 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:bg-slate-100 transition-all"
                  >
                    <Navigation className="h-3.5 w-3.5 text-slate-950" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:2348030582883"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href="https://wa.me/2348030582883?text=Hello%20Engr.%20Kehinde%20/%20Freecom%20Technologies!%20I'm%20inquiring%20about%20your%20Main%20Workshop%20at%2026%20Showemimo%20Street."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Store</span>
                </a>
              </div>
            </motion.div>

            {/* Right Card: ADURA BUS STOP BRANCH */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 p-6 sm:p-10 rounded-3xl border border-slate-300 bg-[#f1f5f9] shadow-sm flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white text-slate-950 flex items-center justify-center border border-slate-200 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">BRANCH OUTLET</span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">Adura Bus Stop Branch</h3>
                    </div>
                  </div>
                  
                  {/* Dynamic Time-Based Status Badge */}
                  {storeIsOpen ? (
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold bg-slate-950 text-emerald-400 border border-slate-800 shrink-0 flex items-center gap-1.5 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>OPEN NOW</span>
                    </span>
                  ) : (
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold bg-slate-900 text-slate-400 border border-slate-700 shrink-0 flex items-center gap-1.5 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-slate-500" />
                      <span>CLOSED NOW</span>
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <p className="font-semibold text-slate-950 text-sm">
                    4, Babayemi Street via Adegolu (Power Line), Adura Bus Stop, Alagbado, Lagos State, Nigeria.
                  </p>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-slate-950" />
                    <span>Monday - Saturday: 8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShieldCheck className="h-3.5 w-3.5 text-slate-950" />
                    <span>Full Service Branch Outlet & On-Site Repair Center</span>
                  </div>
                </div>

                {/* Google Map Card Embed */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-md h-56 bg-white">
                  <iframe
                    title="Freecom Branch Outlet Google Map"
                    src="https://maps.google.com/maps?q=4%20Babayemi%20street%20via%20Adegolu%20Power%20line,%20Adura%20bus%20stop%20Alagbado%20Lagos%20State,%20Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4+Babayemi+Street+via+Adegolu+Powerline+Adura+Bus+Stop+Alagbado+Lagos+State+Nigeria" 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:bg-slate-100 transition-all"
                  >
                    <Navigation className="h-3.5 w-3.5 text-slate-950" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:2348030582883"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call Branch</span>
                </a>
                <a
                  href="https://wa.me/2348030582883?text=Hello%20Engr.%20Kehinde%20/%20Freecom%20Technologies!%20I'm%20inquiring%20about%20your%20Adura%20Bus%20Stop%20Branch."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Branch</span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── SECTION 3: DIRECT WORKSHOP INQUIRY FORM ── */}
      <section className="relative z-10 w-full py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="bg-[#f1f5f9] p-8 sm:p-12 rounded-3xl sm:rounded-[2.5rem] border border-slate-300 space-y-8 shadow-xs">
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">DIRECT MESSAGE</span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-950 uppercase">
                SEND AN INQUIRY TO OUR WORKSHOP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Have a question about a phone repair diagnostic or accessory stock? Message our workshop engineer directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-5 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-950">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    maxLength={15}
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => {
                      setFieldErrors(prev => ({ ...prev, phone: false }));
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
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-950">Subject (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. iPhone Screen Replacement Price Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-950">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Type your phone repair or accessory question here..."
                  value={message}
                  onChange={(e) => {
                    setFieldErrors(prev => ({ ...prev, message: false }));
                    setMessage(e.target.value);
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-all ${
                    fieldErrors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-slate-950'
                  }`}
                />
                {fieldErrors.message && (
                  <p className="text-red-500 text-[11px] font-medium mt-1">Please fill in this field</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-xs"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Send Direct Message on WhatsApp</span>
              </button>
            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
