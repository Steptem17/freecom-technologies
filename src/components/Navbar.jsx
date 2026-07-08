import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/repair', label: 'Repair Intake' },
    { to: '/accessories', label: 'Accessories' },
    { to: '/contact', label: 'Find Us' }
  ];

  const activeStyle = ({ isActive }) =>
    `font-display font-medium text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative py-2 ${
      isActive
        ? 'text-primary font-bold'
        : 'text-zinc-500 hover:text-zinc-950'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-150 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo Link */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={activeStyle}>
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/cart"
            className="relative p-1.5 text-zinc-500 hover:text-zinc-950 transition-colors duration-300 flex items-center gap-1.5"
            title="Inquiry Bag"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            <span className="text-[10px] uppercase font-semibold tracking-wider">Bag</span>
            {getCartCount() > 0 && (
              /* Color count badge strategically in corporate teal with light shadow */
              <span className="absolute -top-1.5 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white shadow-sm shadow-primary/30">
                {getCartCount()}
              </span>
            )}
          </Link>

          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded border border-primary bg-primary px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-sm shadow-primary/10"
          >
            Book Intake
          </Link>
        </div>

        {/* Mobile & Tablet menu trigger */}
        <div className="flex items-center space-x-3 lg:hidden">
          <Link
            to="/cart"
            className="relative p-2 text-zinc-500 hover:text-zinc-950"
          >
            <ShoppingBag className="h-5 w-5" />
            {getCartCount() > 0 && (
              <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white shadow-sm shadow-primary/30">
                {getCartCount()}
              </span>
            )}
          </Link>

          <button
            onClick={toggleMenu}
            className="rounded p-1 text-zinc-500 hover:bg-zinc-50"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-zinc-150 bg-white px-4 pt-2 pb-4 shadow-sm transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-[11px] font-bold uppercase tracking-wider py-3 border-b border-zinc-50 ${
                    isActive ? 'text-primary' : 'text-zinc-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <Link
              to="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <span>Inquiry Bag ({getCartCount()})</span>
            </Link>

            <Link
              to="/book"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded border border-primary bg-primary py-3 text-[10px] font-bold uppercase tracking-widest text-white mt-2"
            >
              Book Repair Intake
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
