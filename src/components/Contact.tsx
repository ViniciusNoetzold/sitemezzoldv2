"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, Globe, Zap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] border border-white/10 p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/60"
              >
                <Zap className="w-3 h-3 text-emerald-400" />
                Disponível para Novos Projetos
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter"
              >
                VAMOS DAR VIDA À SUA <span className="text-emerald-400">VISÃO.</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/50 max-w-md leading-relaxed"
              >
                Seja um Micro-SaaS ou uma plataforma enterprise global, estamos prontos para projetar e codificar sua próxima vantagem competitiva.
              </motion.p>

              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                    <Mail className="w-5 h-5 text-white/40 group-hover:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Email</p>
                    <p className="text-white font-medium">hello@mezzold.studio</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                    <Globe className="w-5 h-5 text-white/40 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Localização</p>
                    <p className="text-white font-medium">Global / Remote First</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-4">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-4">Email Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 ml-4">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos sobre o seu projeto..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  />
                </div>

                <button className="w-full group relative overflow-hidden rounded-2xl bg-white p-[1px] font-bold text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <div className="relative flex items-center justify-center gap-2 rounded-[15px] bg-white px-8 py-5 transition-all group-hover:bg-white/90">
                    Enviar Proposta
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
