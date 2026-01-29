"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-24 px-6 relative z-10 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="flex-1">
              <Link href="/" className="flex items-center gap-4 mb-8 group">
                <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center rounded-xl group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500">
                  <span className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter text-white leading-none">
                    MEZZOLD<span className="text-purple-500">STUDIO</span>
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.4em] text-white/20 mt-1">EST. 2026</span>
                </div>
              </Link>
              <p className="text-white/40 max-w-sm mb-10 text-base leading-relaxed">
                Engenharia de soluções digitais de alta performance para a próxima geração de plataformas SaaS e enterprise.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className="p-3 rounded-xl border border-white/5 bg-[#0a0a0a] text-white/30 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 md:gap-24">
              <div>
                <h4 className="font-bold text-white mb-8 uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-500 rounded-full" />
                  ESTÚDIO
                </h4>
                <ul className="space-y-4 text-white/40 text-sm font-medium">
                  <li><Link href="#portfolio" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-0 h-[1px] bg-white/40 group-hover:w-2 transition-all" />Portfólio</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-0 h-[1px] bg-white/40 group-hover:w-2 transition-all" />Serviços</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-0 h-[1px] bg-white/40 group-hover:w-2 transition-all" />Processo</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-0 h-[1px] bg-white/40 group-hover:w-2 transition-all" />Carreiras</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-8 uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                  CONTATO
                </h4>
                <ul className="space-y-4 text-white/40 text-sm font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">hello@mezzold.studio</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Agendar uma Ligação</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Suporte</Link></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] font-mono tracking-widest text-white/20">
          <p>© 2026 MEZZOLD STUDIO. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-10 mt-6 md:mt-0 uppercase">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
