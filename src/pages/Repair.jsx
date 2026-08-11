import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Headphones, Monitor, ArrowRight, ShieldCheck, 
  Wrench, BatteryCharging, Zap, MapPin, Clock, Lock, Cpu, PhoneCall, 
  MessageSquare, RotateCcw, Check, User, Mail
} from 'lucide-react';

const Repair = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  // Wizard State
  const [step, setStep] = useState(1);
  const [deviceType, setDeviceType] = useState('smartphone');
  const [deviceBrand, setDeviceBrand] = useState('iPhone');
  const [deviceModel, setDeviceModel] = useState('');
  const [selectedFaults, setSelectedFaults] = useState([]);
  const [preferredLocation, setPreferredLocation] = useState('main');

  // Contact Information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
const [otherFaultDetail, setOtherFaultDetail] = useState('');
const [otherFaultError, setOtherFaultError] = useState(false);
  const [email, setEmail] = useState('');

  // Inline Validation Errors
  const [modelError, setModelError] = useState(false);
  const [faultError, setFaultError] = useState(false);
  const [contactError, setContactError] = useState(false);

  // Pre-fill from query params
  useEffect(() => {
    if (typeParam && ['smartphone', 'tablet', 'software'].includes(typeParam)) {
      setDeviceType(typeParam);
    }
  }, [typeParam]);

  const deviceCategories = [
    { id: 'smartphone', name: 'Smartphone', desc: 'iPhone, Samsung, Tecno, Infinix', icon: <Smartphone className="h-6 w-6 text-slate-950" /> },
    { id: 'tablet', name: 'iPad & Tablet', desc: 'Apple iPad, Android Tablets', icon: <Tablet className="h-6 w-6 text-slate-950" /> },
    { id: 'software', name: 'Software Flashing', desc: 'OS Reinstalls, Bootloops, Unlocks', icon: <Monitor className="h-6 w-6 text-slate-950" /> }
  ];

  // Brand Options per category with "Others"
  const brandOptions = {
    smartphone: ['iPhone', 'Samsung', 'Tecno', 'Infinix', 'Google Pixel', 'Xiaomi / Redmi', 'Others'],
    tablet: ['Apple iPad', 'Samsung Galaxy Tab', 'Lenovo Tab', 'Others'],
    software: ['Android OS', 'Apple iOS / iPadOS', 'Others']
  };

  // Specific single-symptom hardware options
  const faultOptions = [
    { id: 'screen-touch', label: 'Screen Touch Problem', icon: <Smartphone className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'battery-drain', label: 'Battery Draining', icon: <BatteryCharging className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'charging-port', label: 'Charging Port Problem', icon: <Zap className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'motherboard', label: 'Motherboard Repair', icon: <Wrench className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'water-damage', label: 'Water Damage', icon: <Wrench className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'software-flashing', label: 'Software Flashing', icon: <Monitor className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'camera-problem', label: 'Camera Problem', icon: <Cpu className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'speaker-mic', label: 'Speaker / Microphone Fault', icon: <Headphones className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'others', label: 'Others', icon: <Wrench className="h-4.5 w-4.5 text-slate-950" /> }
  ];

  // Software-specific symptom options for the "Software Flashing" category
  const softwareFaultOptions = [
    { id: 'os-reinstall', label: 'OS Reinstall', icon: <Monitor className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'bootloop-fix', label: 'Bootloop Fix', icon: <Zap className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'phone-unlock', label: 'Phone Unlock', icon: <Lock className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'sim-unlock', label: 'SIM Unlock', icon: <PhoneCall className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'flash-ios', label: 'Flash iPhone / iPad', icon: <Cpu className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'remove-icloud', label: 'Remove iCloud Activation Lock', icon: <ShieldCheck className="h-4.5 w-4.5 text-slate-950" /> },
    { id: 'others', label: 'Others', icon: <Wrench className="h-4.5 w-4.5 text-slate-950" /> }
  ];


  const toggleFault = (label) => {
    setFaultError(false);
    // Clear other fault error when toggling 'Others'
    if (label === 'Others') {
      setOtherFaultError(false);
    }
    setSelectedFaults((prev) => 
      prev.includes(label) ? prev.filter(f => f !== label) : [...prev, label]
    );
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!deviceModel.trim()) {
        setModelError(true);
        return;
      }
      setModelError(false);
    }
    if (step === 2) {
      if (selectedFaults.length === 0) {
        setFaultError(true);
        return;
      }
      // If 'Others' is selected, ensure a description is provided
      if (selectedFaults.includes('Others') && !otherFaultDetail.trim()) {
        setOtherFaultError(true);
        setFaultError(true);
        return;
      }
      setFaultError(false);
      setOtherFaultError(false);
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Direct WhatsApp Price Inquiry Dispatch
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false
  });

  const handleWhatsAppDispatch = (e) => {
    e.preventDefault();

    const digitCount = phone.replace(/\D/g, '').length;
    const errors = {
      firstName: !firstName.trim(),
      lastName: !lastName.trim(),
      phone: digitCount < 10 || digitCount > 14
    };

    setFieldErrors(errors);

    if (errors.firstName || errors.lastName || errors.phone) {
      return;
    }

    const locationName = preferredLocation === 'main' 
      ? 'Adura Road Main Workshop & Accessory Center' 
      : 'Adura Bus Stop Branch Outlet';

    const selectedSymptomsText = selectedFaults.map(f => f === 'Others' ? otherFaultDetail : f).join(', ');

    // Conversational, professional human message
    const message = (() => {
      const deviceInfo = `${deviceBrand === 'Others' ? '' : deviceBrand} ${deviceModel} (${deviceType.toUpperCase()})`;
      if (deviceType === 'software') {
        // Software flashing specific template
          return `Hello Freecom, my name is ${firstName} ${lastName} and I'm reaching out to book a repair intake and ask for the price of my device.

For my device ${deviceInfo}, repair symptoms: ${selectedSymptomsText}.

Could you kindly share price estimates and turnaround time for this repair? Thank you!`;
      }
      // Default template for other device types
      return `Hello Freecom Technologies,

My name is ${firstName} ${lastName}, and I am reaching out to book a repair intake and ask for price estimates for my device:

• Device: ${deviceInfo}
• Repair Symptoms: ${selectedSymptomsText}
• Preferred Workshop Location: ${locationName}

Could you kindly share price estimates and turnaround time for this repair? Thank you!`;
    })();

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/2348030582883?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      
      {/* ── HERO BANNER: UNIFORM WITH HOME & ABOUT PAGES ── */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200 shadow-xs">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-950 animate-bounce" />
            <span>BOOK REPAIR INTAKE</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04] drop-shadow-md">
            BOOK REPAIR INTAKE
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Select your device category, choose your exact model, specify your symptoms, and inquire for repair pricing directly on WhatsApp.
          </p>

        </div>
      </section>

      {/* ── SECTION 2: 3-STEP INQUIRY WIZARD & WORKSHOP COMMITMENTS ── */}
      <section className="relative z-10 w-full py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Interactive Wizard Box */}
            <div className="lg:col-span-8 bg-[#f1f5f9] border border-slate-300 rounded-3xl sm:rounded-[2.5rem] shadow-xs overflow-hidden">
              
              {/* Wizard Step Navigation Bar */}
              <div className="bg-slate-200/80 px-6 py-4.5 border-b border-slate-300 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    key={step}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-8 w-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black text-xs"
                  >
                    {step}/3
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wider uppercase text-slate-950">
                      {step === 1 && 'Step 1: Select Device, Brand & Model'}
                      {step === 2 && 'Step 2: Check Symptoms & Store Location'}
                      {step === 3 && 'Step 3: Contact Info & WhatsApp Price Inquiry'}
                    </h3>
                    <p className="text-[11px] text-slate-600 font-normal">Genuine phone parts & data confidentiality</p>
                  </div>
                </div>

                {step > 1 && (
                  <motion.button 
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setModelError(false);
                      setFaultError(false);
                      setContactError(false);
                      setStep(1);
                    }}
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-300 shadow-xs"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Start Over</span>
                  </motion.button>
                )}
              </div>

              {/* Wizard Content Pages with Smooth Transitions */}
              <div className="p-6 sm:p-10 min-h-[440px] flex flex-col justify-between bg-[#f1f5f9]">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: DEVICE CATEGORY, BRAND/TYPE & SPECIFIC MODEL (COMPULSORY WITH SOFT PASTEL RED VALIDATION) */}
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-8"
                    >
                      <div className="space-y-3">
                        <h4 className="font-display font-bold text-base sm:text-lg text-slate-950">1. Select Device Category</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {deviceCategories.map((cat) => {
                            const isSelected = deviceType === cat.id;
                            return (
                              <motion.button
                                key={cat.id}
                                type="button"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => {
                                  setDeviceType(cat.id);
                                  setDeviceBrand(brandOptions[cat.id][0]);
                                }}
                                className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                                  isSelected 
                                    ? 'border-slate-950 bg-white text-slate-950 shadow-xs' 
                                    : 'border-slate-300/80 bg-white/70 hover:bg-white text-slate-700'
                                }`}
                              >
                                <div className="p-3 rounded-xl bg-slate-100 text-slate-950">
                                  {cat.icon}
                                </div>
                                <div className="space-y-1">
                                  <h5 className="font-display font-bold text-base text-slate-950">{cat.name}</h5>
                                  <p className="text-xs text-slate-500 font-normal">{cat.desc}</p>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-3">
                          <h4 className="font-display font-bold text-sm text-slate-950">
                            2. {deviceType === 'audio' ? 'Select Type' : 'Select Brand'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {brandOptions[deviceType]?.map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => setDeviceBrand(b)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                                  deviceBrand === b 
                                    ? 'bg-slate-950 text-white border-slate-950 shadow-xs' 
                                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-display font-bold text-sm text-slate-950">
                            3. Specific Model
                          </h4>
                          <input
                            type="text"
                            placeholder="e.g. iPhone 13 Pro Max, Galaxy S22, iPad Air 5..."
                            value={deviceModel}
                            onChange={(e) => {
                              setModelError(false);
                              setDeviceModel(e.target.value);
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-colors ${
                              modelError 
                                ? 'border-rose-300 bg-rose-50/40 text-slate-950 placeholder-rose-400' 
                                : 'border-slate-300 focus:border-slate-950'
                            }`}
                          />
                          {modelError ? (
                            <span className="text-[11px] text-rose-500 font-medium block">Please fill out this field before continuing.</span>
                          ) : (
                            <p className="text-[11px] text-slate-500 font-normal">
                              Enter the exact model name so our engineer knows what you want to fix.
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: CONCISE HARDWARE SYMPTOMS & STORE LOCATION */}
                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <h4 className="font-display font-bold text-base sm:text-lg text-slate-950">Check Specific Symptoms & Issues</h4>

                        <p className="text-xs text-slate-600 font-normal">Select the main symptoms your {deviceBrand === 'Others' ? '' : deviceBrand} {deviceModel} is experiencing:</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {(deviceType === 'software' ? softwareFaultOptions : faultOptions).map((f) => {
                          const isChecked = selectedFaults.includes(f.label);
                          const isOther = f.id === 'others';
                          if (isOther) {
                            return (
                              <React.Fragment key={f.id}>
                                {/* Others button */}
                                <button
                                  type="button"
                                  onClick={() => toggleFault(f.label)}
                                  className={`p-3.5 rounded-2xl border text-left transition-all w-full flex items-center justify-between ${
                                    isChecked
                                      ? 'border-slate-950 bg-white text-slate-950 shadow-xs'
                                      : 'border-slate-300/80 bg-white/70 hover:bg-white text-slate-700'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-slate-100 text-slate-950">{f.icon}</div>
                                    <h5 className="font-display font-bold text-xs sm:text-sm text-slate-950">{f.label}</h5>
                                  </div>
                                  <div
                                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                                      isChecked ? 'bg-slate-950 border-slate-950 text-white' : 'border-slate-300 bg-white'
                                    }`}
                                  >
                                    {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                                  </div>
                                </button>
                                {/* Input appears beside when checked */}
                                {isChecked && (
                                  <div className="w-full">
                                    <div className="p-3.5 rounded-2xl border border-slate-300 bg-white text-slate-950 shadow-xs flex items-center justify-between w-full focus-within:border-slate-950 transition-colors">
                                      <input
                                        type="text"
                                        placeholder="Specify other issue"
                                        value={otherFaultDetail}
                                        onChange={(e) => {
                                          setOtherFaultError(false);
                                          setOtherFaultDetail(e.target.value);
                                        }}
                                        className="w-full px-3 py-2 rounded-xl text-xs placeholder:text-[0.65rem] focus:outline-none"
                                      />
                                    </div>
                                    {otherFaultError && (
                                      <span className="text-[11px] text-rose-500 font-medium block mt-1">Please describe the issue.</span>
                                    )}
                                  </div>
                                )}
                              </React.Fragment>
                            );
                          }
                          // regular fault options
                          return (
                            <div className="flex flex-col w-full space-y-2" key={f.id}>
                              <button
                                type="button"
                                onClick={() => toggleFault(f.label)}
                                className={`p-3.5 rounded-2xl border text-left transition-all w-full flex items-center justify-between ${
                                  isChecked
                                    ? 'border-slate-950 bg-white text-slate-950 shadow-xs'
                                    : 'border-slate-300/80 bg-white/70 hover:bg-white text-slate-700'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="p-2 rounded-xl bg-slate-100 text-slate-950">{f.icon}</div>
                                  <h5 className="font-display font-bold text-xs sm:text-sm text-slate-950">{f.label}</h5>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center ${
                                    isChecked ? 'bg-slate-950 border-slate-950 text-white' : 'border-slate-300 bg-white'
                                  }`}
                                >
                                  {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                       </div>

                      <div className="space-y-3 pt-2">
                        <h4 className="font-display font-bold text-sm text-slate-950">Select Workshop Drop-Off Store Location</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setPreferredLocation('main')}
                            className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all ${
                              preferredLocation === 'main' 
                                ? 'border-slate-950 bg-white text-slate-950 shadow-xs' 
                                : 'border-slate-300 bg-white/70 hover:bg-white text-slate-700'
                            }`}
                          >
                            <div className="space-y-1">
                              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-950">Head Office</h5>
                              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                                26, Showemimo street, Adura bus stop Alagbado Lagos State.
                              </p>
                            </div>
                            {preferredLocation === 'main' && <Check className="h-4 w-4 text-slate-950 shrink-0 mt-0.5" />}
                          </button>

                          <button
                            type="button"
                            onClick={() => setPreferredLocation('branch')}
                            className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all ${
                              preferredLocation === 'branch' 
                                ? 'border-slate-950 bg-white text-slate-950 shadow-xs' 
                                : 'border-slate-300 bg-white/70 hover:bg-white text-slate-700'
                            }`}
                          >
                            <div className="space-y-1">
                              <h5 className="font-display font-bold text-xs sm:text-sm text-slate-950">Branch Outlet Store</h5>
                              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                                4, Babayemi street via Adegolu (Power line), Adura bus stop Alagbado Lagos State.
                              </p>
                            </div>
                            {preferredLocation === 'branch' && <Check className="h-4 w-4 text-slate-950 shrink-0 mt-0.5" />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT INFORMATION & WHATSAPP PRICE INQUIRY */}
                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <h4 className="font-display font-bold text-base sm:text-lg text-slate-950">Contact Information</h4>
                        <p className="text-xs text-slate-600 font-normal">Enter your details to inquire for price directly on WhatsApp:</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-slate-700" />
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Samuel"
                            value={firstName}
                            onChange={(e) => {
                              setFieldErrors(prev => ({ ...prev, firstName: false }));
                              setFirstName(e.target.value);
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-all ${
                              fieldErrors.firstName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-slate-950'
                            }`}
                          />
                          {fieldErrors.firstName && (
                            <p className="text-red-500 text-[11px] font-medium mt-1">Please fill in this field</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-slate-700" />
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Adebayo"
                            value={lastName}
                            onChange={(e) => {
                              setFieldErrors(prev => ({ ...prev, lastName: false }));
                              setLastName(e.target.value);
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold focus:outline-none bg-white transition-all ${
                              fieldErrors.lastName ? 'border-red-400 focus:border-red-500' : 'border-slate-300 focus:border-slate-950'
                            }`}
                          />
                          {fieldErrors.lastName && (
                            <p className="text-red-500 text-[11px] font-medium mt-1">Please fill in this field</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                            <PhoneCall className="h-3.5 w-3.5 text-slate-700" />
                            WhatsApp/Phone Number
                          </label>
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

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                            <Mail className="h-3.5 w-3.5 text-slate-700" />
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. samuel@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-slate-950 bg-white"
                          />
                        </div>
                      </div>

                      {/* Summary Ticket */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-300 space-y-2.5 text-xs shadow-xs">
                        <div className="font-bold text-slate-950 uppercase text-[10px] tracking-widest block border-b border-slate-200 pb-2">
                          INQUIRY SUMMARY TICKET
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span>Device Category:</span>
                          <span className="font-bold text-slate-950">{deviceBrand === 'Others' ? '' : deviceBrand} {deviceModel} ({deviceType.toUpperCase()})</span>
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span>Drop-off Store:</span>
                          <span className="font-bold text-slate-950">
                            {preferredLocation === 'main' ? 'Adura Road Main Store' : 'Adura Bus Stop Branch'}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span>Selected Symptoms:</span>
                          <span className="font-bold text-slate-950 text-right max-w-[220px]">
                            {selectedFaults.join(', ')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Wizard Controls */}
                <div className="pt-8 border-t border-slate-300 flex justify-between items-center gap-4 mt-6">
                  {step > 1 ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handlePrevStep}
                      className="px-6 py-3 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
                    >
                      Back
                    </motion.button>
                  ) : <div />}

                  {step < 3 ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-xs"
                    >
                      <span>Continue to Step {step + 1}</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleWhatsAppDispatch}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-xs"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send Inquiry on WhatsApp</span>
                    </motion.button>
                  )}
                </div>

              </div>

            </div>

            {/* Right Side Info & Workshop Commitments Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Workshop Commitments Card */}
              <div className="bg-[#f1f5f9] text-slate-950 p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] shadow-xs space-y-6 border border-slate-200/80">
                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl text-slate-950">Repair standards & workshop commitments</h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-xl bg-white border border-slate-300 shrink-0">
                      <ShieldCheck className="h-4 w-4 text-slate-950" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-950 text-xs">Original Replacement Parts</h5>
                      <p className="text-[11px] text-slate-500 font-normal leading-normal">Professional repair carried out by experienced technicians using original grade components.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-xl bg-white border border-slate-300 shrink-0">
                      <Lock className="h-4 w-4 text-slate-950" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-950 text-xs">Total Data Confidentiality</h5>
                      <p className="text-[11px] text-slate-500 font-normal leading-normal">Your personal photos, files, and messages remain 100% private.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-xl bg-white border border-slate-300 shrink-0">
                      <Clock className="h-4 w-4 text-slate-950" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-950 text-xs">Same-Day Turnaround</h5>
                      <p className="text-[11px] text-slate-500 font-normal leading-normal">Fast screen swaps, battery replacements, and software flashing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone Contact Card (ENGINEER: ENGR. KEHINDE ADEOSUN) */}
              <div className="bg-white p-6 rounded-3xl border border-slate-300 space-y-4 text-left shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-950 flex items-center justify-center border border-slate-200">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-950">Speak Directly with the Phone Engineer</h4>
                    <span className="text-[11px] text-slate-500 block font-medium">Speak with Engr. Kehinde Adeosun</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-normal">
                  Speak directly with our phone engineer over the phone for immediate repair guidance.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:08030582883"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call Office Line</span>
                </motion.a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Repair;
