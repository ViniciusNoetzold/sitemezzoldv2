"use client";

import { motion } from "framer-motion";

export function AnimatedGear() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative bg-transparent scale-110">
      <div className="relative w-56 h-56">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Outer Tech Ring (Dashed) */}
        <motion.div
          className="absolute inset-0 border border-emerald-500/10 rounded-full border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Medium Ring with notches */}
        <motion.div
          className="absolute inset-4 border-[1px] border-emerald-500/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-emerald-500/40"
              style={{ transform: `rotate(${deg}deg) translateY(-2px)`, transformOrigin: 'center 100px' }}
            />
          ))}
        </motion.div>
        
        {/* Main Gear */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)] opacity-80"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          >
          <path
            fill="currentColor"
            d="M91.3 43.6l-8.3-1.4c-.4-1.4-.9-2.8-1.6-4.1l5.3-6.6c.6-.7.5-1.8-.2-2.5l-5.7-5.7c-.7-.7-1.8-.8-2.5-.2l-6.6 5.3c-1.3-.7-2.7-1.2-4.1-1.6l-1.4-8.3c-.1-.9-.9-1.6-1.9-1.6h-8c-.9 0-1.7.7-1.9 1.6l-1.4 8.3c-1.4.4-2.8.9-4.1 1.6l-6.6-5.3c-.7-.6-1.8-.5-2.5.2l-5.7 5.7c-.7.7-.8 1.8-.2 2.5l5.3 6.6c-.7 1.3-1.2 2.7-1.6 4.1l-8.3 1.4c-.9.1-1.6.9-1.6 1.9v8c0 .9.7 1.7 1.6 1.9l8.3 1.4c.4 1.4.9 2.8 1.6 4.1l-5.3 6.6c-.6.7-.5 1.8.2 2.5l5.7 5.7c.7.7 1.8.8 2.5.2l6.6-5.3c1.3.7 2.7 1.2 4.1 1.6l1.4 8.3c.1.9.9 1.6 1.9 1.6h8c.9 0 1.7-.7 1.9-1.6l1.4-8.3c1.4-.4 2.8-.9 4.1-1.6l6.6 5.3c.7.6 1.8.5 2.5-.2l5.7-5.7c.7-.7.8-1.8.2-2.5l-5.3-6.6c.7-1.3 1.2-2.7 1.6-4.1l8.3-1.4c.9-.1 1.6-.9 1.6-1.9v-8c.1-1-.6-1.8-1.5-1.9zM50 62c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
          />
        </motion.svg>

        {/* Center Crosshair & Pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-emerald-500/40" />
            <div className="absolute h-full w-[1px] bg-emerald-500/40" />
            <motion.div
              className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Scanning Light Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full skew-x-12"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute top-6 left-6 text-[10px] tracking-[0.2em] text-emerald-400/50 font-mono">
        RPM: 6000
      </div>
      <div className="absolute top-6 right-6">
        <div className="w-3 h-3 rounded-full border border-emerald-500/50 flex items-center justify-center">
          <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
