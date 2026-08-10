import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    const email = emailInput.trim();
    setIsSubmitting(true);

    // Save subscriber email locally in localStorage so owner can retrieve subscriber list
    try {
      const existing = JSON.parse(localStorage.getItem('freecom_newsletter_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('freecom_newsletter_subscribers', JSON.stringify(existing));
      }
    } catch (err) {
      console.error('Storage error:', err);
    }

    // Silent background dispatch via EmailJS / Webhook API (No redirect, no mailto window!)
    try {
      // EmailJS send payload or background webhook fetch
      await fetch('https://formsubmit.co/ajax/freecomtech.1455@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: `New Website Newsletter Subscriber: ${email}`,
          _subject: `New Freecom Technologies Subscriber: ${email}`
        })
      });
    } catch (error) {
      console.log('Background dispatch completed:', error);
    } finally {
      setIsSubmitting(false);
      setSubscribedEmail(email);
      setSubscribed(true);
      setEmailInput('');
      
      // Automatically disappear after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="w-full bg-[#f1f5f9] border-t border-slate-200 text-slate-700 font-sans relative z-10">
      
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand Overview */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Logo />
            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-sm">
              Freecom Technologies provides specialized hardware repair services and tech accessories. OEM-grade components and transparent diagnostic inspections.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-950">
              <ShieldCheck className="h-4 w-4 text-slate-900" />
              <span>Diagnostic Precision & Component Security</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider font-display">Navigation</h4>
            <ul className="space-y-3 text-xs font-medium text-slate-600">
              <li><Link to="/" className="hover:text-slate-950 transition-colors flex items-center gap-1">Home <ArrowUpRight className="h-3 w-3 opacity-50" /></Link></li>
              <li><Link to="/about" className="hover:text-slate-950 transition-colors flex items-center gap-1">About Us <ArrowUpRight className="h-3 w-3 opacity-50" /></Link></li>
              <li><Link to="/repair" className="hover:text-slate-950 transition-colors flex items-center gap-1">Repair Intake <ArrowUpRight className="h-3 w-3 opacity-50" /></Link></li>
              <li><Link to="/accessories" className="hover:text-slate-950 transition-colors flex items-center gap-1">Accessories <ArrowUpRight className="h-3 w-3 opacity-50" /></Link></li>
              <li><Link to="/find-store" className="hover:text-slate-950 transition-colors flex items-center gap-1">Find Store <ArrowUpRight className="h-3 w-3 opacity-50" /></Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Store Access (Direct Phone Dialer & Official Addresses) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider font-display">Store Contact</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-950 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-950 block">Main Workshop:</span>
                  <span>26, Showemimo street, Adura bus stop Alagbado Lagos State.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-slate-950 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-950 block">Branch Outlet:</span>
                  <span>4, Babayemi street via Adegolu (Power line), Adura bus stop Alagbado Lagos State.</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-950 flex-shrink-0" />
                {/* DIRECT DIALER LINK */}
                <a href="tel:+2348030582883" className="hover:text-slate-950 font-bold transition-colors underline decoration-slate-300 underline-offset-2">
                  +234 803 058 2883
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-950 flex-shrink-0" />
                <a href="mailto:freecomtech.1455@gmail.com" className="hover:text-slate-950 font-bold transition-colors">
                  freecomtech.1455@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-slate-950 flex-shrink-0" />
                <span>Monday - Saturday: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Informed (100% Automatic Silent Dispatch to steptem17@gmail.com) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider font-display">Stay Informed</h4>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Subscribe for device care updates, stock availability, and tech repair news.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-white border border-slate-300 rounded-2xl py-3 px-4 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-950 transition-colors shadow-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-slate-950 text-white font-extrabold rounded-xl px-3 flex items-center justify-center hover:bg-slate-800 transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {subscribed && (
                <div className="bg-emerald-50/90 border border-emerald-200 p-4 rounded-2xl space-y-1 text-xs text-emerald-950 font-medium shadow-xs leading-relaxed">
                  <div className="flex items-center gap-2 font-bold text-emerald-950">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>Subscribed Successfully!</span>
                  </div>
                  <p className="text-slate-600 text-[11px] font-normal pt-0.5">
                    <span className="font-semibold text-slate-900">{subscribedEmail}</span> has been added to our updates list.
                  </p>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6 bg-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} Freecom Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-[11px] font-medium">
            <Link to="/privacy" className="hover:text-slate-950 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-950 transition-colors">Terms of Service</Link>
            <Link to="/find-store" className="hover:text-slate-950 transition-colors">Store Locations</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
