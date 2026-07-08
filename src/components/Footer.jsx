import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-150 text-zinc-500 text-xs font-light">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-zinc-150">
          
          {/* Brand Info */}
          <div className="text-left flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-zinc-400 leading-relaxed font-light text-[11px] max-w-sm">
              Freecom Technology specializes in professional hardware repairs and wholesale gadgets. Serving customers locally in Lagos, Nigeria, with high-quality components and reliable accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-display font-semibold text-[10px] uppercase tracking-wider text-zinc-700">Services</h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>
                  <Link to="/repair" className="hover:text-zinc-950 transition-colors">
                    Device Intake
                  </Link>
                </li>
                <li>
                  <Link to="/accessories" className="hover:text-zinc-950 transition-colors">
                    Accessory Catalog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] uppercase tracking-wider text-zinc-700">Company</h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>
                  <Link to="/about" className="hover:text-zinc-950 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-zinc-950 transition-colors">
                    Find Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-semibold text-[10px] uppercase tracking-wider text-zinc-700">Office Location</h4>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="h-4.5 w-4.5 text-zinc-450 flex-shrink-0 mt-0.5" />
                <span>Oluwole Showemimo St, Adura Road, Alagbado, Lagos, Nigeria.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-450 flex-shrink-0" />
                <a href="https://wa.me/2348030582883" target="_blank" rel="noreferrer" className="hover:text-zinc-950 transition-colors font-semibold text-primary">
                  +234 8030582883 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-450 flex-shrink-0" />
                <a href="mailto:support@freecomtech.ng" className="hover:text-zinc-950 transition-colors">
                  support@freecomtech.ng
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-400">
          <p>© {currentYear} Freecom Technology. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-zinc-950 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-950 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
