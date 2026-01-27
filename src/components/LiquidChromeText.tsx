'use client';

import { motion } from 'framer-motion';

interface LiquidChromeTextProps {
  text: string;
  className?: string;
  size?: string;
}

export function LiquidChromeText({ text, className = "", size = "text-[12vw]" }: LiquidChromeTextProps) {
  return (
    <div className={`relative ${className}`}>
      {/* SVG Filter for Liquid Chrome Effect */}
      <svg width="0" height="0" className="absolute">
        <filter id="chrome-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
            result="chrome" 
          />
          <feComposite in="SourceGraphic" in2="chrome" operator="atop" />
        </filter>
      </svg>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`liquid-chrome ${size} font-black leading-none tracking-tighter`}
      >
        {text}
      </motion.h1>
      
      {/* Reflection / Glow layers */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent blur-md pointer-events-none mix-blend-overlay"
      />
    </div>
  );
}
