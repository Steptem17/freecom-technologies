import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, Cpu, Wrench, CheckCircle2, Grid, Compass, MessageSquare, 
  BatteryCharging, MapPin, Award, Activity, Quote, UserCheck, Clock, Navigation, Monitor, ShieldCheck
} from 'lucide-react';

const About = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const stats = [
    { label: 'Gadgets Repaired', value: '5,000+', icon: <Smartphone className="h-5 w-5 text-slate-950" /> },
    { label: 'Same-Day Repair Rate', value: '99.4%', icon: <Clock className="h-5 w-5 text-slate-950" /> },
    { label: 'Original Phone Parts', value: '100%', icon: <Award className="h-5 w-5 text-slate-950" /> },
    { label: 'Repair Experience', value: '15+ Yrs', icon: <Cpu className="h-5 w-5 text-slate-950" /> }
  ];

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden">
      
      {/* ── SMOOTH BOUNCING PHONE UI GRAPHICS ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25 sm:opacity-35">
        <div className="absolute top-20 right-2 sm:right-10 lg:right-16 w-24 sm:w-36 h-40 sm:h-64 border-2 border-slate-400/70 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white/60 backdrop-blur-xs flex flex-col justify-between p-2.5 sm:p-3 animate-smooth-bounce-1 shadow-md">
          <div className="flex justify-between items-center px-1">
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-700">9:41</span>
            <BatteryCharging className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-600" />
          </div>
          <div className="grid grid-cols-3 gap-1 my-auto px-0.5">
            <div className="h-5 sm:h-6 bg-slate-200/90 rounded flex items-center justify-center"><Grid className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-slate-700" /></div>
            <div className="h-5 sm:h-6 bg-indigo-100/90 rounded flex items-center justify-center"><Compass className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-600" /></div>
            <div className="h-5 sm:h-6 bg-slate-200/90 rounded flex items-center justify-center"><MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-slate-700" /></div>
          </div>
          <div className="w-8 sm:w-12 h-1 bg-slate-400 rounded-full mx-auto" />
        </div>
      </div>

      {/* ── HERO BANNER: BRAND ORIGIN & FOUNDER CARD (BOUNCING CARD RE-MOVED DOWN SO IT NEVER TOUCHES TOP LINE) ── */}
      <section className="relative z-10 w-full pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-8 sm:space-y-12">
          
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-sm">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-slate-950 animate-bounce" />
              <span>ABOUT FREECOM TECHNOLOGIES</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Headline & Brand Story */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.06] drop-shadow-md">
                  CRAFTING RELIABLE GADGET REPAIRS SINCE DAY ONE
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Freecom Technologies is a trusted phone repair center and mobile accessory shop serving Lagos. We handle both hardware engineering and software flashing from our main workshop and branch outlet.
                </p>

                {/* Main Store & Branch Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-900 uppercase tracking-widest block">MAIN WORKSHOP LOCATION</span>
                    <p className="text-xs font-semibold text-slate-700">26, Showemimo street, Adura bus stop Alagbado Lagos State, Nigeria</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-900 uppercase tracking-widest block">BRANCH OUTLET</span>
                    <p className="text-xs font-semibold text-slate-700">4, Babayemi street via Adegolu (Power line), Adura bus stop Alagbado Lagos State, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Right: FOUNDER CARD (POSITIONED SAFELY DOWN WITH CONTROLLED BOUNCE RANGE) */}
              <div className="lg:col-span-5 pt-4 lg:pt-8">
                <motion.div 
                  animate={{ y: [14, -8, 14] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-slate-100 text-slate-950 p-6 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-slate-300 space-y-4 sm:space-y-6 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Founder Avatar */}
                    <div className="relative shrink-0">
                      <img 
                        src="/engineer.jpg" 
                        alt="Engr. Kehinde Adeosun Founder & Phone Engineer" 
                        className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-slate-400 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 border-2 border-white">
                        <UserCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-base sm:text-xl text-slate-950">Engr. Kehinde Adeosun</h3>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider block">Founder & Phone Engineer</span>
                    </div>
                  </div>

                  {/* Concise Engineer Quote */}
                  <div className="relative pt-1 sm:pt-2">
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed italic relative">
                      <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 inline-block align-top mr-1 -mt-0.5 rotate-180" />
                      At Freecom Technologies, we fix every device down to the silicon level—restoring hardware and software with real parts and total data confidentiality.
                      <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 inline-block align-bottom ml-1" />
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: CROSS ROWS (CLEAN PADDING & GAP FOR TABLET AND MOBILE VIEWS) ── */}
      <section className="relative z-10 w-full">
        
        {/* THIN 1PX CENTER CROSS LINE WITH LASER PULSE (DESKTOP/TABLET ONLY) */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-slate-300 z-20 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '1000%'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-48 bg-gradient-to-b from-transparent via-slate-900 to-transparent"
          />
        </div>

        {/* ── CROSS ROW 1: SCREENS (WHITE) & MOTHERBOARDS ── */}
        <div className="w-full border-b border-slate-300 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              
              {/* Left Cell: Screen & Battery */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 sm:py-14 px-6 sm:px-8 text-left bg-white flex flex-col justify-between items-start"
              >
                <div className="max-w-md w-full space-y-4 sm:space-y-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                    <Smartphone className="h-6 w-6 sm:h-7 sm:w-7 text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-slate-950">Cracked Screen & Battery Replacement</h3>
                  <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                    Fast same-day repairs for broken glass displays, unresponsive touch screens, and draining batteries for iPhone, Samsung, Tecno, and Infinix phones.
                  </p>
                </div>
              </motion.div>

              {/* Right Cell: Motherboard & Charging Port */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 text-left bg-[#f1f5f9] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-slate-200/80 shadow-xs flex flex-col justify-between items-start"
              >
                <div className="max-w-md w-full space-y-4 sm:space-y-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                    <Wrench className="h-6 w-6 sm:h-7 sm:w-7 text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-slate-950">Motherboard & Charging Port Repairs</h3>
                  <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                    Expert repairs for phones that won't charge, power button failures, water-damaged motherboards, and broken charging sockets.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── CROSS ROW 2: SOFTWARE FLASHING & PHONE REPAIR PICTURE ── */}
        <div className="w-full border-b border-slate-300 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              
              {/* Left Cell: Software Flashing & OS Recovery */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 text-left bg-[#f1f5f9] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-slate-200/80 shadow-xs flex flex-col justify-between items-start"
              >
                <div className="max-w-md w-full space-y-4 sm:space-y-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                    <Monitor className="h-6 w-6 sm:h-7 sm:w-7 text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-slate-950">Software Flashing & OS Recovery</h3>
                  <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                    Phone flashing, OS reinstalls, bootloop recovery, network unlock configuration, and system partition troubleshooting for Android & iOS.
                  </p>
                </div>
              </motion.div>

              {/* Right Cell: AUTHENTIC USER WORKSHOP REPAIR BENCH PICTURE */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-2 sm:p-4 bg-white flex items-center justify-center h-full w-full"
              >
                <div className="relative overflow-hidden w-full max-w-md sm:max-w-lg h-64 sm:h-80 lg:h-[400px] shadow-xl rounded-2xl sm:rounded-3xl border border-slate-300 group">
                  <img
                    src="/mobile_repair_bench.jpg"
                    alt="Authentic Freecom Technologies Mobile Repair Bench"
                    className="w-full h-full object-cover filter brightness-100 contrast-105 saturate-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-sm w-fit">
                    <span className="font-normal text-slate-800 text-[10px] sm:text-xs tracking-normal">
                      Mobile Repair Bench
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── CROSS ROW 3: ENGINEERING DIAGNOSTIC STANDARDS & AUTHENTIC PARTS ── */}
        <div className="w-full border-b border-slate-300 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              
              {/* Left Cell: Diagnostic Standards */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 sm:py-14 px-6 sm:px-8 text-left bg-white flex flex-col justify-between items-start"
              >
                <div className="max-w-md w-full space-y-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                    <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-slate-950">Accurate Repair Testing</h3>
                  <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                    Before fixing your device, our engineer tests the phone circuits to find the exact fault so you only pay for what needs to be repaired.
                  </p>
                </div>
              </motion.div>

              {/* Right Cell: Authentic Parts Guarantee */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 text-left bg-[#f1f5f9] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-slate-200/80 shadow-xs flex flex-col justify-between items-start"
              >
                <div className="max-w-md w-full space-y-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                    <Wrench className="h-6 w-6 sm:h-7 sm:w-7 text-slate-950" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl text-slate-950">Original Parts & Data Safety</h3>
                  <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                    We use authentic screens, original batteries, and genuine charging flex ports to fix your device, with 100% data privacy for all your photos and personal files.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </section>

      {/* ── UN-CROSSED OPEN BOTTOM SECTION (STATS & CTA INTAKE) ── */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-16 text-center">
          
          {/* Key Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((st, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-200/80 shadow-md space-y-2 text-left"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-slate-100 flex items-center justify-center shadow-xs">
                  {st.icon}
                </div>
                <div className="font-display font-black text-xl sm:text-3xl lg:text-4xl text-slate-950">{st.value}</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{st.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Intake */}
          <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto pt-2 sm:pt-4">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-950 uppercase drop-shadow-sm">
                Start Your Hardware Repair
              </h2>
              <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed">
                Book your repair intake online or speak directly with our workshop engineers.
              </p>
            </div>

            <div className="flex justify-center pt-2">
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
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 hover:bg-slate-800 px-6 py-3.5 sm:px-7 sm:py-4 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-slate-950/20 transition-all duration-700 group"
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
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
