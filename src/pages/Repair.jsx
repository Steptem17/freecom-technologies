import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Smartphone, Tablet, Headphones, Monitor, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { FAULT_LABELS } from '../context/BookingContext';

const Repair = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const typeParam = searchParams.get('type');

  // State
  const [deviceType, setDeviceType] = useState('');
  const [selectedFaults, setSelectedFaults] = useState([]);
  const [step, setStep] = useState(1);

  // Pre-fill device type from URL query
  useEffect(() => {
    if (typeParam && ['smartphone', 'tablet', 'headphones', 'software'].includes(typeParam)) {
      setDeviceType(typeParam);
      setStep(2);
    }
  }, [typeParam]);

  const deviceCategories = [
    { id: 'smartphone', name: 'Smartphones', desc: 'iPhone, Galaxy, Tecno, Infinix screen/battery repair', icon: <Smartphone className="h-10 w-10" /> },
    { id: 'tablet', name: 'iPads & Tablets', desc: 'Charging ports, touch digitizer swaps, battery swaps', icon: <Tablet className="h-10 w-10" /> },
    { id: 'headphones', name: 'Audio Systems', desc: 'Headphones battery replacement, connection debugging', icon: <Headphones className="h-10 w-10" /> },
    { id: 'software', name: 'Software Services', desc: 'Phone flashing, OS reinstall, software troubleshooting', icon: <Monitor className="h-10 w-10" /> }
  ];

  const handleDeviceSelect = (id) => {
    setDeviceType(id);
    setStep(2);
  };

  const handleFaultToggle = (key) => {
    setSelectedFaults((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  const handleProceed = () => {
    if (selectedFaults.length === 0) {
      alert('Please check at least one device fault.');
      return;
    }
    const faultsQuery = selectedFaults.join(',');
    navigate(`/book?deviceType=${deviceType}&faults=${faultsQuery}`);
  };

  const resetIntake = () => {
    setStep(1);
    setDeviceType('');
    setSelectedFaults([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-16 border-b border-zinc-150 pb-10">
        <ScrollReveal>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Diagnostic Portal</span>
          <h1 className="mt-2 text-3xl font-extrabold font-display tracking-tight text-gray-900 sm:text-4xl">
            Repair Diagnostics Intake
          </h1>
          <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">
            Select your hardware and check the faults you are experiencing. We will compile a diagnostics report to consult the technician for current parts pricing.
          </p>
        </ScrollReveal>
      </section>

      {/* Wizard Card Container */}
      <ScrollReveal className="bg-white border border-gray-150 rounded-2xl shadow-md overflow-hidden">
        {/* Banner header */}
        <div className="bg-gray-950 px-6 py-5 text-white flex justify-between items-center border-b border-gray-900">
          <div>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase">Intake System</h3>
            <p className="text-[10px] text-zinc-100 mt-0.5">Diagnose and prepare WhatsApp consult</p>
          </div>
          {step > 1 && (
            <button
              onClick={resetIntake}
              className="text-xs font-semibold text-gray-450 hover:text-white transition-colors"
            >
              Start Over
            </button>
          )}
        </div>

        {/* Dynamic Wizard Steps */}
        <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
          
          {/* STEP 1: Select hardware category */}
          {step === 1 && (
            <div className="space-y-6">
              <h4 className="font-display font-bold text-gray-800 text-sm flex items-center">
                <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mr-2 border border-primary/20">Step 1</span>
                Select your device type
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deviceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleDeviceSelect(cat.id)}
                    className="flex items-center gap-4 p-5 border border-gray-150 rounded-xl hover:border-primary/20 hover:bg-primary/5 text-left transition-all duration-300 group"
                  >
                    <div className="text-gray-400 group-hover:text-primary transition-colors flex-shrink-0">
                      {cat.icon}
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-xs sm:text-sm text-gray-800">{cat.name}</h5>
                      <p className="text-[10px] text-gray-500 mt-1 leading-normal font-light">{cat.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Check faults/symptoms */}
          {step === 2 && (
            <div className="space-y-6">
              <h4 className="font-display font-bold text-gray-800 text-sm flex items-center capitalize">
                <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mr-2 border border-primary/20">Step 2</span>
                Check faults affecting your {deviceType}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(FAULT_LABELS).map(([key, label]) => {
                  const isChecked = selectedFaults.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => handleFaultToggle(key)}
                      className={`flex items-center justify-between p-4 border rounded-xl text-left transition-all duration-300 ${
                        isChecked
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-gray-150 hover:border-gray-250 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs font-semibold text-gray-700">{label}</span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                      />
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-gray-100 pt-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                <p className="text-[10px] text-gray-500 max-w-sm font-light leading-relaxed flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>No prices are listed. The owner will provide a custom quote on WhatsApp.</span>
                </p>
                <button
                  onClick={handleProceed}
                  disabled={selectedFaults.length === 0}
                  className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-primary transition-all duration-350 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  Continue
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Repair;
