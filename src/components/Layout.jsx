import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#080b11] text-slate-200 font-sans antialiased selection:bg-slate-700 selection:text-white">
      
      {/* Animated Ambient Depth Motion Halos */}
      <div className="absolute top-0 inset-x-0 h-[1000px] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full opacity-20 filter blur-[130px] ambient-motion" 
          style={{ background: 'radial-gradient(circle, rgba(148, 163, 184, 0.3) 0%, rgba(8, 11, 17, 0) 70%)' }} 
        />
        <div 
          className="absolute top-[500px] -right-32 w-[600px] h-[500px] rounded-full opacity-15 filter blur-[150px] ambient-motion" 
          style={{ background: 'radial-gradient(circle, rgba(71, 85, 105, 0.35) 0%, rgba(8, 11, 17, 0) 70%)' }} 
        />
      </div>

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
