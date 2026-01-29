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
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg group-hover:border-purple-500/50 transition-colors">
                <span className="text-xl font-black text-white/40 group-hover:text-purple-400 transition-colors">M</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                MEZZOLD<span className="text-purple-500/80">STUDIO</span>
              </span>
            </Link>
            <p className="text-white/40 max-w-sm mb-10 text-base leading-relaxed">
              Engenharia de soluções digitais de alta performance para a próxima geração de plataformas SaaS e enterprise.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="p-3 rounded-md border border-white/5 bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Estúdio</h4>
              <ul className="space-y-4 text-white/40 text-sm font-medium">
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Serviços</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Processo</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Carreiras</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Contato</h4>
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
