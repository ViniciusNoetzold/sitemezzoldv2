"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Componente de Dunas Animadas para o Footer - Posicionado no final
function FooterDunes() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-64 bg-gradient-to-t from-[#0f0518] to-transparent" />;

  return (
    <div className="relative h-64 overflow-hidden">
      {/* Camada 1 - Fundo (mais escura, mais lenta) */}
      <motion.div
        className="absolute bottom-0 w-[200%] -left-[50%]"
        animate={prefersReducedMotion ? {} : { x: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 2880 300" className="w-full h-64" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerDuneGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0312" stopOpacity="0" />
              <stop offset="40%" stopColor="#0f0518" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0f0518" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 C320,220 640,100 960,160 C1280,220 1600,80 1920,140 C2240,200 2560,100 2880,160 L2880,300 L0,300 Z"
            fill="url(#footerDuneGrad1)"
          />
        </svg>
      </motion.div>

      {/* Camada 2 - Meio */}
      <motion.div
        className="absolute bottom-0 w-[200%] -left-[50%]"
        animate={prefersReducedMotion ? {} : { x: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 2880 240" className="w-full h-52" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerDuneGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a0b2e" stopOpacity="0" />
              <stop offset="30%" stopColor="#1a0b2e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1a0b2e" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C480,180 720,60 1080,130 C1440,200 1800,80 2160,140 C2520,200 2700,100 2880,150 L2880,240 L0,240 Z"
            fill="url(#footerDuneGrad2)"
          />
        </svg>
      </motion.div>

      {/* Camada 3 - Frente (mais visível, mais rápida) */}
      <motion.div
        className="absolute bottom-0 w-[200%] -left-[50%]"
        animate={prefersReducedMotion ? {} : { x: [0, -70, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 2880 180" className="w-full h-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerDuneGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d1b4e" stopOpacity="0" />
              <stop offset="25%" stopColor="#2d1b4e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2d1b4e" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 C240,140 480,50 720,100 C960,150 1200,60 1440,110 C1680,160 1920,70 2160,120 C2400,170 2640,80 2880,130 L2880,180 L0,180 Z"
            fill="url(#footerDuneGrad3)"
          />
        </svg>
      </motion.div>

      {/* Partículas flutuantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-500/30"
          style={{
            left: `${10 + i * 12}%`,
            bottom: `${20 + (i % 3) * 15}%`,
          }}
          animate={prefersReducedMotion ? {} : {
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 overflow-hidden bg-black">
      {/* Conteúdo Principal do Footer */}
      <div className="relative bg-[#030303] pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            {/* Coluna Esquerda - Branding */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Link href="/" className="inline-flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/20 flex items-center justify-center rounded-2xl group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">
                    <span className="text-3xl font-black bg-gradient-to-br from-white to-purple-300 bg-clip-text text-transparent">M</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-white leading-none">
                      MEZZOLD<span className="text-purple-400">STUDIO</span>
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.5em] text-white/30 mt-1.5">DIGITAL ENGINEERING</span>
                  </div>
                </Link>

                <p className="text-white/50 max-w-md text-base leading-relaxed">
                  Engenharia de soluções digitais de alta performance. Transformamos visões ambiciosas em plataformas SaaS que definem o futuro.
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  {[
                    { Icon: Twitter, label: "Twitter" },
                    { Icon: Github, label: "Github" },
                    { Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ Icon, label }, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="group relative p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-white/40 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={18} />
                      <div className="absolute inset-0 rounded-xl bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Coluna Direita - Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {/* Estúdio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-bold text-white mb-6 uppercase tracking-[0.25em] text-[10px] flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                    Estúdio
                  </h4>
                  <ul className="space-y-4">
                    {["Portfólio", "Serviços", "Processo", "Carreiras"].map((item, i) => (
                      <li key={i}>
                        <Link 
                          href={`#${item.toLowerCase()}`}
                          className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all duration-300"
                        >
                          <span className="w-0 h-px bg-purple-500 group-hover:w-4 transition-all duration-300" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Recursos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <h4 className="font-bold text-white mb-6 uppercase tracking-[0.25em] text-[10px] flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Recursos
                  </h4>
                  <ul className="space-y-4">
                    {["Blog", "Case Studies", "Documentação", "Stack Tech"].map((item, i) => (
                      <li key={i}>
                        <Link 
                          href="#"
                          className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all duration-300"
                        >
                          <span className="w-0 h-px bg-emerald-500 group-hover:w-4 transition-all duration-300" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contato */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-bold text-white mb-6 uppercase tracking-[0.25em] text-[10px] flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                    Contato
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="mailto:hello@mezzold.studio"
                        className="text-white/40 hover:text-white text-sm transition-colors"
                      >
                        hello@mezzold.studio
                      </a>
                    </li>
                    <li>
                      <Link 
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                      >
                        Agendar Reunião
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li className="pt-2">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                        Global / Remote First
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative py-12 px-8 rounded-2xl bg-gradient-to-r from-purple-900/10 via-purple-800/5 to-transparent border border-purple-500/10 mb-16"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Pronto para transformar sua visão?</h3>
                <p className="text-sm text-white/40">Vamos conversar sobre o futuro do seu produto.</p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Iniciar Projeto
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/[0.03] text-[10px] font-mono tracking-wider text-white/25">
            <p>© {currentYear} MEZZOLD STUDIO. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex gap-8 mt-4 md:mt-0 uppercase">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacidade</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Termos</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>

        {/* Dunas Animadas no Final do Footer */}
        <FooterDunes />
      </div>
    </footer>
  );
}
