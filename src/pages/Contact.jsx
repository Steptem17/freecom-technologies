import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FAQ_DATA } from '../utils/mockData';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Search, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormSuccess(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setFormSuccess(false);
    }, 4000);
  };

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const toggleFaq = (idx) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 space-y-20 text-zinc-900">
      
      {/* Page Header */}
      <section className="text-left max-w-2xl border-b border-zinc-150 pb-10">
        <ScrollReveal className="space-y-2">
          <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded px-2.5 py-0.5 uppercase tracking-[0.25em] block w-fit">
            Locate & Connect
          </span>
          <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950 sm:text-4xl">
            Contact Us & FAQs
          </h1>
          <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
            Stop by our workshop in Alagbado, Lagos. Check our store hours, phone contacts, or read answers to frequently asked questions.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Store Info & Quick Contact form */}
        <ScrollReveal className="lg:col-span-6 space-y-8">
          {/* Store info card */}
          <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 text-left space-y-5 shadow-sm">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-950 border-l-2 border-primary pl-2.5">
              Freecom Workshop
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-800 font-light leading-normal">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg flex-shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-zinc-900">Oluwole Showemimo St, Adura Road, Alagbado, Lagos, Nigeria.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg flex-shrink-0">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <span className="font-medium text-zinc-900">Monday - Saturday: 9:00 AM - 9:00 PM <br /><span className="text-[10px] sm:text-xs text-zinc-500 font-light">(Sunday: Closed)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 text-teal-600 border border-teal-100 rounded-lg flex-shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <a href="https://wa.me/2348030582883" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-bold text-zinc-950">
                  +234 8030582883 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 text-amber-600 border border-amber-100 rounded-lg flex-shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <a href="mailto:support@freecomtech.ng" className="hover:text-primary transition-colors font-bold text-zinc-950">
                  support@freecomtech.ng
                </a>
              </div>
            </div>
          </div>

          {/* Quick email consult form */}
          <div className="bg-white border border-zinc-150 rounded-2xl p-6 text-left space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-950 border-l-2 border-primary pl-2.5">
              Send Email Message
            </h3>

            {formSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 flex items-center gap-3 text-xs">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Message sent successfully. We will follow up.</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[9px] font-bold text-zinc-500 uppercase mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full border border-zinc-200 rounded p-2.5 text-xs bg-white focus:outline-none focus:border-primary text-zinc-900"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold text-zinc-500 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full border border-zinc-200 rounded p-2.5 text-xs bg-white focus:outline-none focus:border-primary text-zinc-900"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold text-zinc-500 uppercase mb-2">Message</label>
                <textarea
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full border border-zinc-200 rounded p-2.5 text-xs bg-white focus:outline-none focus:border-primary text-zinc-900 placeholder-zinc-300"
                  placeholder="Detail your question..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded text-[10px] uppercase tracking-widest hover:bg-primary-dark transition-colors shadow-md shadow-primary/10 flex items-center justify-center gap-1.5"
              >
                <Send className="h-3.5 w-3.5" />
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* Right Side: FAQs */}
        <ScrollReveal className="lg:col-span-6 space-y-6" delay={150}>
          <div className="bg-white border border-zinc-150 rounded-2xl p-6 space-y-6 text-left shadow-sm">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-950 border-l-2 border-primary pl-2.5">
              Frequently Asked Questions
            </h3>

            {/* search */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-500" />
              </span>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="block w-full pl-9 pr-4 py-2 border border-zinc-200 rounded bg-white text-xs focus:outline-none focus:border-primary placeholder-zinc-400 text-zinc-900"
              />
            </div>

            {/* list */}
            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded overflow-hidden transition-all duration-350 border ${
                        isOpen ? 'border-primary/50 shadow-sm' : 'border-zinc-150'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className={`w-full py-3.5 px-4 text-left font-display font-bold text-xs flex justify-between items-center transition-colors ${
                          isOpen ? 'bg-primary/5 text-primary' : 'bg-white hover:bg-zinc-50'
                        }`}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="h-3.5 w-3.5 text-primary" /> : <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />}
                      </button>

                      <div
                        className={`transition-all duration-355 overflow-hidden ${
                          isOpen ? 'max-h-40 border-t border-zinc-100 bg-white' : 'max-h-0'
                        }`}
                      >
                        <p className="p-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-xs text-zinc-400 italic py-8">No matching questions found.</p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
