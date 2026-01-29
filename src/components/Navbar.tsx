'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

export function Navbar() {
  return (
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl px-4 py-1.5 flex items-center gap-5 rounded-full glass border border-white/10 shadow-2xl"
      >
        <div className="text-lg font-black tracking-tighter">
        MEZZOLD<span className="text-electric-red">.</span>
      </div>
      
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#process" className="hover:text-white transition-colors">Processo</a>
          </div>

          <div className="h-4 w-px bg-white/10" />

            <a href="#contact">
              <MagneticButton className="scale-70 origin-right">
                Fale Conosco
              </MagneticButton>
            </a>
    </motion.nav>
  );
}

