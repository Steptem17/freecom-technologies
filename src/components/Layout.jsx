import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Grid is 64px. Glow elements sit at exact multiples of 64px.
  // Stagger duration + delay so they never all move together.
  const verticalGlows = [
    { left: 64,   duration: '13s', delay: '0s'    },
    { left: 256,  duration: '17s', delay: '4s'    },
    { left: 448,  duration: '11s', delay: '8.5s'  },
    { left: 640,  duration: '15s', delay: '2s'    },
    { left: 832,  duration: '19s', delay: '6s'    },
    { left: 1024, duration: '12s', delay: '10s'   },
    { left: 1216, duration: '16s', delay: '3.5s'  },
  ];

  const horizontalGlows = [
    { top: 192,  duration: '20s', delay: '0s'   },
    { top: 384,  duration: '16s', delay: '7s'   },
    { top: 576,  duration: '24s', delay: '3s'   },
    { top: 768,  duration: '18s', delay: '11s'  },
    { top: 960,  duration: '22s', delay: '5s'   },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-grid-pattern text-zinc-800">

      {/* Faded green glows — behind everything, z-0 */}
      {verticalGlows.map((g, i) => (
        <div
          key={`v-${i}`}
          className="grid-glow-v"
          style={{ left: `${g.left}px`, animationDuration: g.duration, animationDelay: g.delay }}
        />
      ))}
      {horizontalGlows.map((g, i) => (
        <div
          key={`h-${i}`}
          className="grid-glow-h"
          style={{ top: `${g.top}px`, animationDuration: g.duration, animationDelay: g.delay }}
        />
      ))}

      {/* Page content above the background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
