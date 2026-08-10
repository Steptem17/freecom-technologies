import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="w-full text-slate-900 bg-white min-h-screen relative font-sans overflow-x-hidden pt-24 pb-24 sm:pt-32 sm:pb-32">
      
      {/* Hero Banner */}
      <section className="relative z-10 w-full pb-12 sm:pb-16 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-slate-100 border border-slate-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>LEGAL & DATA PROTECTION</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight text-slate-950 uppercase leading-[1.04]">
              PRIVACY POLICY
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              How Freecom Technologies collects, protects, and safeguards your customer data and personal files.
            </p>
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-left text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          
          <div className="bg-[#f1f5f9] p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">1. Data Confidentiality Guarantee</h3>
            <p>
              Freecom Technologies guarantees 100% confidentiality for all hardware left at our workshop for repair. We do not access, copy, browse, or store your personal photos, files, messages, or device storage unless explicitly authorized for diagnostic verification.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">2. Information We Collect</h3>
            <p>
              We collect your name, phone number, device model, and fault descriptions provided voluntarily during repair intake or accessory inquiries to process your service request.
            </p>
          </div>

          <div className="bg-[#f1f5f9] p-8 sm:p-10 rounded-3xl border border-slate-300 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">3. Third-Party Sharing</h3>
            <p>
              We do not sell, trade, or share your personal contact details with third-party advertising companies. WhatsApp communications are routed directly to Engr. Kehinde Adeosun for workshop consultation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Privacy;
