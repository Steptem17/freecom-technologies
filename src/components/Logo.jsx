import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Custom Geometric "F" + Emerald Tech Signal Monogram */}
      <div className="h-9.5 w-9.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-md shadow-slate-950/20 flex-shrink-0 relative overflow-hidden group">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="h-5 w-5 text-white"
        >
          {/* Geometric F Monogram */}
          <path 
            d="M5 4H18V8H9.5V11H16V15H9.5V20H5V4Z" 
            fill="currentColor" 
          />
          {/* Emerald Green Tech Connection Dot */}
          <circle cx="18.5" cy="13" r="1.8" fill="#34d399" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <span className="font-sans font-black text-base tracking-[0.18em] text-slate-950 uppercase">
          FREECOM
        </span>
        <span className="font-sans font-extrabold text-[9px] text-slate-500 tracking-[0.25em] uppercase mt-0.5">
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

export default Logo;
