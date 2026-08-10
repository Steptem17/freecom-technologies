import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-slate-950 select-none overflow-hidden pointer-events-none"
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="text-center space-y-2 pt-2">
          <h2 className="font-display font-black text-xl sm:text-2xl tracking-[0.2em] text-slate-950 uppercase">
            FREECOM TECHNOLOGIES
          </h2>
          <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest block">
            PHONE REPAIRS • PHONE ACCESSORIES • GADGETS SALES & SERVICES
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
