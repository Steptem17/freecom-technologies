import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ScrollReveal from '../components/ScrollReveal';
import { Trash2, ShoppingBag, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Contact State for message personalization
  const [clientName, setClientName] = useState('');

  const handleSendInquiry = () => {
    if (cartItems.length === 0) return;

    const ownerWhatsAppNumber = '2348030582883'; // Nigerian format
    const categoriesList = cartItems.map(item => `• ${item.name}`).join('\n');
    
    const messageText = `Hello Freecom Technology! ${clientName ? `My name is ${clientName}. ` : ''}I am interested in inquiring about the availability, specific models, and pricing for the following product categories:

${categoriesList}

Could you please send me photos, prices, and options for the items you currently have in stock at your shop? Thanks!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear inquiry bag locally
    clearCart();
  };

  // --- EMPTY BAG STATE ---
  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-left">
        <ScrollReveal className="bg-white border border-zinc-150 rounded-2xl p-8 text-center space-y-6">
          <div className="h-16 w-16 rounded-full border border-zinc-150 text-zinc-500 flex items-center justify-center mx-auto">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold font-display text-zinc-950">Inquiry Bag is Empty</h2>
            <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-xs mx-auto">
              You have not added any accessory categories to consult. Browse the catalog to select product categories.
            </p>
          </div>
          <Link
            to="/accessories"
            className="inline-flex items-center justify-center rounded border border-zinc-950 bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-zinc-950 transition-all duration-350"
          >
            Browse Catalog
          </Link>
        </ScrollReveal>
      </div>
    );
  }

  // --- ACTIVE INQUIRY LIST VIEW ---
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      
      {/* Header */}
      <section className="text-left max-w-2xl mb-12">
        <ScrollReveal className="space-y-2">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.25em] block">Consultation Basket</span>
          <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950 sm:text-4xl">
            Inquiry Bag
          </h1>
          <p className="text-xs text-zinc-550 font-light leading-relaxed">
            Review the categories in your inquiry list. Submit the form to generate the WhatsApp consult thread.
          </p>
        </ScrollReveal>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Items List */}
        <div className="lg:col-span-8 space-y-4">
          <ScrollReveal className="bg-white border border-zinc-150 rounded-2xl p-6 space-y-4 text-left shadow-sm">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 py-3 border-b border-zinc-50 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-zinc-50 border border-zinc-100 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-zinc-900">{item.name}</h3>
                    <span className="text-[9px] text-zinc-450 uppercase font-semibold tracking-wider">{item.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[10px] font-semibold text-zinc-400 hover:text-zinc-950 flex items-center gap-1 transition-colors"
                  title="Remove from list"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Remove
                </button>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Right Column: Checkout Form & Summary */}
        <ScrollReveal className="lg:col-span-4 space-y-6" delay={150}>
          <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 shadow-sm text-left space-y-5">
            <h3 className="font-display font-bold text-xs border-b border-zinc-100 pb-3 text-zinc-950 uppercase tracking-widest">
              Consultation Form
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Your Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter name to pre-fill WhatsApp message"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="block w-full border border-zinc-200 rounded p-2.5 text-xs bg-white focus:outline-none focus:border-zinc-950 placeholder-zinc-300"
                />
              </div>

              <div className="border-t border-zinc-100 pt-3 text-[10px] text-zinc-500 leading-relaxed font-light flex gap-2">
                <ShieldAlert className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                <p>No card payments are processed online. Inquiry list is compiled into a text message and sent to the owner on WhatsApp.</p>
              </div>
            </div>

            <button
              onClick={handleSendInquiry}
              className="w-full bg-zinc-950 text-white font-semibold py-3.5 rounded text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="h-4 w-4" />
              Inquire on WhatsApp
            </button>
          </div>

          <Link
            to="/accessories"
            className="flex w-full items-center justify-center border border-zinc-200 py-3 rounded text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:border-zinc-900 hover:text-zinc-950 transition-all"
          >
            Add More Categories
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Cart;
