import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1.5 select-none">
      {/* Tighter typographic alignment for header & footer */}
      <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.15em] text-zinc-950 uppercase leading-none">
        FREECOM
      </span>
      <div className="h-3.5 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-0.5"></div>
      <span className="font-sans font-light text-[10px] sm:text-xs text-primary tracking-[0.1em] uppercase leading-none">
        TECHNOLOGY
      </span>
    </div>
  );
};

export default Logo;
