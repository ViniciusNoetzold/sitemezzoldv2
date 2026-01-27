'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull distance
    const distance = 40;
    x.set((clientX - centerX) / distance * 10);
    y.set((clientY - centerY) / distance * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-block ${className}`}
    >
      <button 
        onClick={onClick}
        className="relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden group transition-transform duration-300 active:scale-95"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
        <div className="absolute inset-0 bg-electric-red translate-y-full transition-transform duration-500 ease-expo group-hover:translate-y-0" />
      </button>
      
      {/* Glitch Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-electric-red to-emerald-green rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
