import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS_DATA } from '../utils/mockData';
import ScrollReveal from '../components/ScrollReveal';
import { Search, ShoppingBag, Check, Layers } from 'lucide-react';

const Shop = () => {
  const { addToCart, cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Power', 'Audio', 'Gaming', 'Cables', 'Wearables', 'Devices', 'Peripherals', 'Storage', 'Grooming', 'Protection'];

  const handleAddToInquiry = (product) => {
    addToCart(product);
  };

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCat === 'All' || product.category === selectedCat;
    return matchesSearch && matchesCategory;
  });

  // Dynamic colors for product category tags
  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Power':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Audio':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Cables':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Wearables':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Gaming':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Devices':
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
      case 'Peripherals':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Storage':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Grooming':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Protection':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      default:
        return 'bg-zinc-50 text-zinc-650 border-zinc-150';
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      
      {/* Page Header */}
      <section className="text-left max-w-2xl mb-12 border-b border-zinc-150 pb-10">
        <ScrollReveal className="space-y-2">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] block">Store Catalog</span>
          <h1 className="text-3xl font-extrabold font-display tracking-tight text-zinc-950 sm:text-4xl">
            Accessories & Products
          </h1>
          <p className="text-xs text-zinc-550 font-light leading-relaxed">
            Browse the product categories we stock. Add the types you need to your Inquiry Bag and message us on WhatsApp to verify current model sizes, photos, and prices.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter toolbar */}
      <section className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 mb-10 text-left">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-450" />
            </span>
            <input
              type="text"
              placeholder="Search accessory categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 pr-4 py-2 border border-zinc-200 rounded bg-white text-xs focus:outline-none focus:border-primary placeholder-zinc-400"
            />
          </div>

          <div className="text-[10px] text-zinc-450 font-light uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-zinc-400" />
            <span>Select product types to consult</span>
          </div>
        </div>

        {/* Categories slider */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pt-5 border-t border-zinc-100 mt-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all ${
                selectedCat === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border border-zinc-200 text-zinc-550 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => {
            const isAdded = cartItems.some((item) => item.id === product.id);
            return (
              <ScrollReveal key={product.id} delay={idx % 3 * 100}>
                <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between text-left group h-full">
                  {/* Image */}
                  <div className="bg-zinc-50 h-48 border-b border-zinc-100 relative overflow-hidden">
                    {/* Strategic Color Badge */}
                    <span className={`absolute top-3 left-3 rounded-full border px-2.5 py-0.5 text-[9px] font-semibold z-10 ${getCategoryBadgeClass(product.category)}`}>
                      {product.category}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-sm text-zinc-900 leading-tight group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-zinc-500 leading-relaxed font-light mt-2">
                        {product.description}
                      </p>
                      
                      {/* Tech specs points */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {product.specs.map((spec, sIdx) => (
                          <span key={sIdx} className="bg-zinc-50 text-[9px] text-zinc-450 px-2 py-0.5 border border-zinc-100 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToInquiry(product)}
                      className={`w-full py-2.5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 ${
                        isAdded
                          ? 'bg-zinc-100 text-zinc-400 border border-zinc-200'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/5'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          In bag
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Add to bag
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })
        ) : (
          <div className="col-span-full py-16 text-center text-zinc-400 font-light text-xs italic">
            No accessories categories found matching your query.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
