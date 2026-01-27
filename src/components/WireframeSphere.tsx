'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function WireframeSphere() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ringCount = isMobile ? 8 : 12;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]"
        >
        {/* Horizontal Rings - Increased density and opacity for White Chrome look */}
        {[...Array(ringCount)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute inset-0 border border-white/30 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            style={{
              transform: `rotateX(${i * (180 / ringCount)}deg)`,
            }}
          />
        ))}
        {/* Vertical Rings - Increased density and opacity */}
        {[...Array(ringCount)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute inset-0 border border-white/30 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            style={{
              transform: `rotateY(${i * (180 / ringCount)}deg)`,
            }}
          />
        ))}

        
        {/* Core Glow - Pure White Chrome */}
        <div className="absolute inset-0 bg-radial-gradient from-white/20 via-white/5 to-transparent rounded-full blur-3xl opacity-60" />
        
        {/* Sharp Center Highlight */}
        <div className="absolute inset-[40%] bg-white/10 rounded-full blur-xl border border-white/20" />
      </motion.div>
    </div>
  );
}
