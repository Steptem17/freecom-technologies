import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gadgets', label: 'Phones & Gadgets' },
    { to: '/accessories', label: 'Accessories' },
    { to: '/contact', label: 'Find Store' }
  ];

  const activeStyle = ({ isActive }) =>
    `font-sans font-bold text-sm transition-colors duration-200 py-2 relative flex items-center ${
      isActive
        ? 'text-slate-950 font-extrabold'
        : 'text-slate-500 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all font-sans relative">
      <div className="mx-auto flex max-w-7xl h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation Links (Title Case) */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={activeStyle}>
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-950 rounded-full shadow-sm" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA & Bag Icon Only */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/cart"
            className="relative p-2.5 text-slate-700 hover:text-slate-950 transition-colors duration-200 flex items-center justify-center rounded-full hover:bg-slate-100"
            title="Inquiry Bag"
          >
            <ShoppingBag className="h-5 w-5 text-slate-950" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-950 text-[9px] font-black text-white shadow-md">
                {getCartCount()}
              </span>
            )}
          </Link>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 hover:bg-slate-800 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-slate-950/10 border border-slate-900 transition-all duration-200"
            >
              Book Repair Intake
            </Link>
          </motion.div>
        </div>

        {/* Mobile Trigger & Top Bag Icon Only */}
        <div className="flex items-center space-x-3 lg:hidden">
          <Link
            to="/cart"
            className="relative p-2 text-slate-700 hover:text-slate-950"
          >
            <ShoppingBag className="h-5.5 w-5.5 text-slate-950" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-950 text-[9px] font-black text-white shadow-sm">
                {getCartCount()}
              </span>
            )}
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="rounded-lg p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Smooth Mobile Drawer Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 lg:hidden border-b border-slate-200/90 bg-white/98 backdrop-blur-2xl px-6 py-5 shadow-2xl origin-top space-y-3 z-50"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-sm font-bold py-3.5 px-5 rounded-2xl transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-950 font-extrabold'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </NavLink>
              ))}

              <Link
                to="/book"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-full bg-slate-950 py-3.5 text-xs font-bold text-white mt-3 shadow-lg"
              >
                Book Repair Intake
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
