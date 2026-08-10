import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll and force scroll top while loading
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="uiverse-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-slate-950 select-none overflow-hidden touch-none"
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
            <div className="text-center space-y-2 pt-2">
              <h2 className="font-display font-black text-xl sm:text-2xl tracking-[0.2em] text-slate-950 uppercase">
                FREECOM TECHNOLOGIES
              </h2>
              <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest block">
                SPECIALIZED GADGET REPAIRS & ACCESSORIES
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
