import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Headphones, Monitor, Star, StarHalf, Clock, ShieldCheck, MapPin, Cpu, PhoneCall, Grid, Compass, MessageSquare, BatteryCharging, BatteryLow } from 'lucide-react';
import { REVIEWS_DATA } from '../utils/mockData';

const Home = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(100);

  // Live dynamic battery drain & charge animation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setBatteryLevel((prev) => {
        if (prev <= 15) return 100;
        return prev - 5;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'smartphone',
      title: 'Smartphone Repairs',
      desc: 'Screen replacement, battery swapping, camera repair, and charging port fixes for iPhone, Samsung, Tecno, and Infinix.',
      icon: <Smartphone className="h-7 w-7 text-slate-950" />,
      colSpan: 'md:col-span-8',
      padding: 'p-8 sm:p-10'
    },
    {
      id: 'tablet',
      title: 'iPad & Tablet Services',
      desc: 'Screen Replacement, power button repairs, and Charging Port Microsoldering.',
      icon: <Tablet className="h-7 w-7 text-slate-950" />,
      colSpan: 'md:col-span-4',
      padding: 'p-8 sm:p-10'
    },
    {
      id: 'gadgets_sales',
      title: 'Gadgets Sales & Services',
      desc: 'Sales of brand new & pre-owned smartphones, iPads, tablets, chargers, power banks, and tech gadgets.',
      icon: <ShoppingBag className="h-7 w-7 text-slate-950" />,
      colSpan: 'md:col-span-4',
      padding: 'p-8 sm:p-10'
    },
    {
      id: 'software',
      title: 'Software & Firmware',
      desc: 'Phone Flashing, iPhone Software Upgrades, OS reinstalls, and system unlocks.',
      icon: <Monitor className="h-7 w-7 text-slate-950" />,
      colSpan: 'md:col-span-8',
      padding: 'p-6 sm:p-8 md:p-10'
    }
  ];

  return (
    <div className="w-full text-slate-900 bg-[#f8fafc] min-h-screen relative font-sans overflow-hidden">
      
      {/* ── SMOOTH BOUNCING PHONE UI GRAPHICS (Single Phone strictly on Right-Hand Side for Mobile & Desktop) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        
        {/* Single Hero Background Phone: Positioned strictly on the Right-Hand Side out of headline text's way */}
        <div className="absolute top-12 right-2 sm:right-10 lg:right-16 w-24 sm:w-36 h-40 sm:h-64 border-2 border-slate-400/70 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white/60 backdrop-blur-xs flex flex-col justify-between p-2.5 sm:p-3 animate-smooth-bounce-1 shadow-md">
          <div className="flex justify-between items-center px-1">
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-700">9:41</span>
            <div className="flex items-center gap-0.5 text-[8px] sm:text-[9px] font-extrabold text-slate-800">
              {batteryLevel <= 20 ? (
                <BatteryLow className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-500 animate-pulse" />
              ) : (
                <BatteryCharging className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-600" />
              )}
              <span className={batteryLevel <= 20 ? 'text-red-600' : 'text-slate-800'}>{batteryLevel}%</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 my-auto px-0.5">
            <div className="h-5 sm:h-6 bg-blue-100/90 rounded flex items-center justify-center"><Grid className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600" /></div>
            <div className="h-5 sm:h-6 bg-indigo-100/90 rounded flex items-center justify-center"><Compass className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-600" /></div>
            <div className="h-5 sm:h-6 bg-slate-200/90 rounded flex items-center justify-center"><MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-slate-700" /></div>
          </div>
          <div className="w-8 sm:w-12 h-1 bg-slate-400 rounded-full mx-auto" />
        </div>

        {/* Phone UI 2: Hardware Services Segment */}
        <div className="absolute top-[850px] right-6 sm:right-12 w-28 sm:w-36 h-48 sm:h-60 border-2 border-slate-400/70 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white/60 backdrop-blur-xs flex flex-col justify-between p-3 animate-smooth-bounce-2 shadow-md">
          <div className="w-8 h-1 bg-slate-400 rounded-full mx-auto" />
          <Smartphone className="h-7 w-7 text-slate-700 mx-auto" />
          <div className="w-10 h-1 bg-slate-400 rounded-full mx-auto" />
        </div>

        {/* Phone UI 3: See How We Repair Video Segment */}
        <div className="absolute top-[1450px] left-6 sm:left-12 w-28 sm:w-36 h-48 sm:h-60 border-2 border-slate-400/70 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white/60 backdrop-blur-xs flex flex-col justify-between p-3 animate-smooth-bounce-1 shadow-md">
          <div className="w-8 h-1 bg-slate-400 rounded-full mx-auto" />
          <Cpu className="h-7 w-7 text-slate-700 mx-auto" />
          <div className="w-10 h-1 bg-slate-400 rounded-full mx-auto" />
        </div>

        {/* Phone UI 4: Client Feedback Segment */}
        <div className="absolute top-[2050px] right-6 sm:right-12 w-28 sm:w-36 h-48 sm:h-60 border-2 border-slate-400/70 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white/60 backdrop-blur-xs flex flex-col justify-between p-3 animate-smooth-bounce-2 shadow-md">
          <div className="w-8 h-1 bg-slate-400 rounded-full mx-auto" />
          <Tablet className="h-7 w-7 text-slate-700 mx-auto" />
          <div className="w-10 h-1 bg-slate-400 rounded-full mx-auto" />
        </div>

      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Left Content + Mobile In-Between Bouncing Phone */}
            <div className="lg:col-span-7 text-left space-y-8 flex flex-col justify-between">
              
              {/* Headline & Subtitle Block */}
              <div className="space-y-8">
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-950 animate-bounce" />
                  <span>Professional Hardware Diagnostics</span>
                </div>

                {/* ALL CAPS Headline */}
                <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight text-slate-950 leading-[1.04] uppercase drop-shadow-md">
                  PRECISION PHONE & GADGET REPAIR
                </h1>

                {/* Subtitle Description */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                  Specialized hardware repair center. Quality components and transparent diagnostic inspections.
                </p>
              </div>

              {/* MOBILE ONLY: Bouncing Phone Hero Graphic (Positioned in the Middle, 380px height) */}
              <div className="lg:hidden flex flex-col items-center justify-center my-6 w-full">
                <div className="relative w-full max-w-[92vw] sm:max-w-xl h-[380px] xs:h-[420px] flex flex-col items-center justify-center p-1">
                  
                  <motion.img
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: [0, -16, 0] 
                    }}
                    transition={{ 
                      opacity: { duration: 0.6 },
                      scale: { duration: 0.6 },
                      y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    src="/phone_hero.png"
                    alt="Galaxy S24 Ultra & Stylus Precision Hardware Repair"
                    className="w-full h-full object-contain filter drop-shadow-2xl z-10"
                  />

                  <motion.div
                    animate={{ 
                      scaleX: [1, 0.65, 1],
                      scaleY: [1, 0.65, 1],
                      opacity: [0.7, 0.35, 0.7]
                    }}
                    transition={{ 
                      duration: 3.2, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                    className="w-48 xs:w-56 h-4 bg-slate-950/60 rounded-[100%] filter blur-md -mt-4 z-0"
                  />

                </div>
              </div>

              {/* CTAs (Sits below Phone on Mobile, and below Subtitle on Desktop) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full">
                
                {/* Button 1: Start Repair Intake */}
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  onHoverStart={() => setIsBtnHovered(true)}
                  onHoverEnd={() => setIsBtnHovered(false)}
                  className="w-full sm:w-[280px]"
                >
                  <Link
                    to="/repair"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 hover:bg-slate-800 px-7 py-4 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-slate-950/20 transition-all duration-700 group"
                  >
                    <span>Start Repair Intake</span>
                    
                    <div className="relative flex items-center justify-center w-3.5 h-3">
                      <svg className="w-3.5 h-3 overflow-visible" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <motion.line 
                          x1="1" y1="7" x2="13" y2="7"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: isBtnHovered ? 1 : 0, 
                            opacity: isBtnHovered ? 1 : 0 
                          }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <motion.path 
                          d="M9 2l5 5-5 5"
                          animate={{ x: isBtnHovered ? 2 : 0 }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </svg>
                    </div>
                  </Link>
                </motion.div>

                {/* Button 2: Browse Accessories Catalog */}
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full sm:w-[280px]"
                >
                  <Link
                    to="/accessories"
                    className="w-full inline-flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-300 hover:border-slate-400 px-7 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-700 shadow-sm"
                  >
                    Browse Accessories Catalog
                  </Link>
                </motion.div>

              </div>
            </div>

            {/* DESKTOP ONLY: Extracted Phone Hero PNG (Right 40% Column on Desktop) */}
            <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative w-full mt-6 lg:mt-0">
              <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-[560px] md:h-[640px] lg:h-[700px] xl:h-[760px] flex flex-col items-center justify-center p-1 sm:p-2">
                
                {/* STRAIGHT PHONE IMAGE FACING FORWARD */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -16, 0] 
                  }}
                  transition={{ 
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                    y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  src="/phone_hero.png"
                  alt="Galaxy S24 Ultra & Stylus Precision Hardware Repair"
                  className="w-full h-full object-contain filter drop-shadow-2xl z-10"
                />

                {/* VISIBLE DYNAMIC SYNCHRONIZED GROUND SHADOW */}
                <motion.div
                  animate={{ 
                    scaleX: [1, 0.65, 1],
                    scaleY: [1, 0.65, 1],
                    opacity: [0.7, 0.35, 0.7]
                  }}
                  transition={{ 
                    duration: 3.2, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  className="w-72 md:w-80 h-7 md:h-9 bg-slate-950/60 rounded-[100%] filter blur-md -mt-6 md:-mt-8 z-0"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION: Hardware Repair Services ── */}
      <section className="min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center py-24 sm:py-32 lg:py-40 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 gap-6 text-left"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 uppercase drop-shadow-sm">
              Hardware Repair Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
              Professional repairs carried out by experienced technicians using OEM-grade components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {services.map((serv, idx) => (
              <motion.div 
                key={serv.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`${serv.colSpan} ${serv.padding} bg-white rounded-[2.5rem] text-left shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-all duration-300 space-y-5 border border-slate-100/90`}
              >
                <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center shadow-sm">
                  {serv.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">{serv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {serv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION: See How We Repair (Dimmed Video, Endless Continuous Auto-Looping) ── */}
      <section className="min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-y border-slate-200/80 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl text-center space-y-10 w-full"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 uppercase tracking-tight drop-shadow-sm">
            See How We Repair
          </h2>

          {/* High-Definition Edge-to-Edge Curved Video Canvas */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-3xl lg:max-w-4xl h-[380px] sm:h-[460px] lg:h-[520px] mx-auto border border-slate-200/80">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/flagship_phone_teardown.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION: CLIENT FEEDBACK ── */}
      <section className="w-full py-16 sm:py-24 overflow-hidden relative z-10 border-b border-slate-200/80">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-10 w-full"
        >
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 uppercase drop-shadow-sm">
            Client Feedback
          </h2>

          <div className="relative min-h-[160px] py-2 max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReviewIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-6 flex flex-col items-center"
              >
                {/* Real Star Rating Display */}
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(REVIEWS_DATA[activeReviewIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-5.5 w-5.5 fill-current" />
                  ))}
                  {REVIEWS_DATA[activeReviewIndex].halfStar && (
                    <StarHalf className="h-5.5 w-5.5 fill-current text-amber-500" />
                  )}
                </div>

                {/* Large Quote Text */}
                <blockquote className="text-xl sm:text-3xl font-normal leading-relaxed text-slate-900 italic max-w-2xl drop-shadow-sm">
                  "{REVIEWS_DATA[activeReviewIndex].text}"
                </blockquote>

                {/* Author & Location */}
                <cite className="not-italic block pt-1">
                  <span className="font-display font-bold text-base sm:text-lg text-slate-950 block">
                    {REVIEWS_DATA[activeReviewIndex].author}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 mt-0.5 block font-medium">
                    {REVIEWS_DATA[activeReviewIndex].location}
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 pt-1">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReviewIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeReviewIndex ? 'w-10 bg-slate-950' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </motion.div>
      </section>

      {/* ── SECTION: Visit Freecom Technologies (With Restored Map Card) ── */}
      <section className="w-full py-16 sm:py-24 relative z-10 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 text-center sm:text-left max-w-3xl"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 uppercase drop-shadow-sm">
              Visit Freecom Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our engineering repair workshop and accessory display store is open for physical consultation and device drop-offs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6-col: Location & Phone Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 border border-slate-200/80 space-y-6 shadow-sm">
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-normal">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-slate-950 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-950 block text-sm">Head Office Repair Workshop:</span>
                      <span>26, Showemimo Street, Adura Bus Stop, Alagbado, Lagos State, Nigeria.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <MapPin className="h-5 w-5 text-slate-950 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-950 block text-sm">Branch Outlet:</span>
                      <span>4, Babayemi Street via Adegolu (Power Line), Adura Bus Stop, Alagbado, Lagos State, Nigeria.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <Clock className="h-5 w-5 text-slate-950 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-950 block text-sm">Workshop Hours:</span>
                      <span>Monday - Saturday: 8:00 AM - 9:00 PM <span className="text-slate-500 text-xs block">(Sunday: Closed)</span></span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <PhoneCall className="h-5 w-5 text-slate-950 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-950 block text-sm">Direct Phone Line:</span>
                      <a href="tel:+2348030582883" className="text-slate-950 font-bold hover:underline">+234 803 058 2883</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 6-col: Live Interactive Map Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="bg-white rounded-[2rem] p-1 relative overflow-hidden flex flex-col justify-between h-[340px] text-left shadow-sm border border-slate-300">
                <iframe
                  title="Freecom Head Office Workshop Location Map"
                  src="https://maps.google.com/maps?q=26%20Showemimo%20street,%20Adura%20bus%20stop%20Alagbado%20Lagos%20State,%20Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.7rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=26+Showemimo+Street+Adura+Bus+Stop+Alagbado+Lagos+State+Nigeria"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center justify-center rounded-xl bg-slate-950 text-white px-4 py-2 text-[11px] font-bold hover:bg-slate-800 transition-all shadow-md"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
