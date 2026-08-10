import React from 'react';
import { FileText, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Terms = () => {
  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      
      {/* Hero Banner */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200">
            <FileText className="h-3.5 w-3.5" />
            <span>TERMS & WORKSHOP POLICIES</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04]">
              TERMS OF SERVICE
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Standard repair intake terms, diagnostic warranties, and store policies for Freecom Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-left text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          
          <div className="bg-[#f1f5f9] p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">1. Diagnostic Inspection</h3>
            <p>
              Before carrying out any hardware repair, our engineers perform circuit and voltage diagnostics. You will receive a clear diagnostic estimate before any component replacement takes place.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">2. Replacement Parts Warranty</h3>
            <p>
              All original replacement screens, batteries, and charging flex units fitted at our workshops come with warranty coverage against manufacturer defects.
            </p>
          </div>

          <div className="bg-[#f1f5f9] p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">3. Device Collection & Intake</h3>
            <p>
              Devices may be dropped off or picked up at our Adura Road Main Store or Adura Bus Stop Branch Outlet upon presentation of your repair intake reference ticket.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Terms;
