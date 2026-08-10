import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center select-none py-1">
      <img 
        src="/official_logo.png" 
        alt="Freecom Technologies Logo" 
        className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-sm" 
      />
    </div>
  );
};

export default Logo;
