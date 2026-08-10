import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 1.6 seconds on initial entry
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-slate-950 select-none overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center space-y-8">
            
            {/* Uiverse 4-Circle Animated Spinner */}
            <div className="loader">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>

            {/* Brand Title Centered Under Loader */}
            <div className="text-center space-y-1.5 pt-2">
              <h2 className="font-display font-black text-xl sm:text-2xl tracking-[0.2em] text-slate-950 uppercase">
                FREECOM TECHNOLOGIES
              </h2>
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                SPECIALIZED GADGET REPAIRS & ACCESSORIES
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
