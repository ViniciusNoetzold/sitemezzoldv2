"use client";

import { motion } from "framer-motion";

export function AnimatedGear() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative bg-transparent">
      <div className="relative w-48 h-48">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border border-emerald-500/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Gear */}
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
          />
          <path
            fill="currentColor"
            d="M91.3 43.6l-8.3-1.4c-.4-1.4-.9-2.8-1.6-4.1l5.3-6.6c.6-.7.5-1.8-.2-2.5l-5.7-5.7c-.7-.7-1.8-.8-2.5-.2l-6.6 5.3c-1.3-.7-2.7-1.2-4.1-1.6l-1.4-8.3c-.1-.9-.9-1.6-1.9-1.6h-8c-.9 0-1.7.7-1.9 1.6l-1.4 8.3c-1.4.4-2.8.9-4.1 1.6l-6.6-5.3c-.7-.6-1.8-.5-2.5.2l-5.7 5.7c-.7.7-.8 1.8-.2 2.5l5.3 6.6c-.7 1.3-1.2 2.7-1.6 4.1l-8.3 1.4c-.9.1-1.6.9-1.6 1.9v8c0 .9.7 1.7 1.6 1.9l8.3 1.4c.4 1.4.9 2.8 1.6 4.1l-5.3 6.6c-.6.7-.5 1.8.2 2.5l5.7 5.7c.7.7 1.8.8 2.5.2l6.6-5.3c1.3.7 2.7 1.2 4.1 1.6l1.4 8.3c.1.9.9 1.6 1.9 1.6h8c.9 0 1.7-.7 1.9-1.6l1.4-8.3c1.4-.4 2.8-.9 4.1-1.6l6.6 5.3c.7.6 1.8.5 2.5-.2l5.7-5.7c.7-.7.8-1.8.2-2.5l-5.3-6.6c.7-1.3 1.2-2.7 1.6-4.1l8.3-1.4c.9-.1 1.6-.9 1.6-1.9v-8c.1-1-.6-1.8-1.5-1.9zM50 68c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z"
          />
        </motion.svg>

        {/* Inner Pulses */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
      
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-emerald-400/50 font-mono">
        RPM: 6000
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-2 h-2 rounded-full border border-emerald-500/50" />
      </div>
    </div>
  );
}
