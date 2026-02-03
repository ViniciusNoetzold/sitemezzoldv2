"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SmartLink } from "./SmartLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Expertise", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#process" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo - volta ao topo */}
          <SmartLink href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tighter text-white">
              MEZZOLD<span className="text-purple-500 group-hover:text-electric-red transition-colors">.</span>
            </span>
          </SmartLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            {navItems.map((item) => (
              <SmartLink
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
              </SmartLink>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <SmartLink
            href="#contact"
            className="hidden md:block bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Fale Conosco
          </SmartLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SmartLink
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {item.label}
                  </SmartLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <SmartLink
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300"
                >
                  Fale Conosco
                </SmartLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
