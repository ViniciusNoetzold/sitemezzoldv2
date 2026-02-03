"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tighter text-white">
            MEZZOLD<span className="text-purple-500 group-hover:text-electric-red transition-colors">.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a 
            href="#services" 
            className="hover:text-white transition-colors relative group"
          >
            Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-white transition-colors relative group"
          >
            Portfólio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a 
            href="#process" 
            className="hover:text-white transition-colors relative group"
          >
            Processo
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#contact"
          className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Fale Conosco
        </a>
      </div>
    </motion.header>
  );
}
