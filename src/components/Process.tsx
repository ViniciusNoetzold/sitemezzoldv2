"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "ANÁLISE DE ECOSSISTEMA",
    subtitle: "PHASE_01",
    description: "Mapeamento profundo de arquitetura e identificação de vetores de crescimento para escala global.",
    color: "from-blue-500/20 to-cyan-400/20",
    accent: "text-blue-400",
    glowColor: "rgba(56, 189, 248, 0.1)"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "INTERFACES CINEMATOGRÁFICAS",
    subtitle: "PHASE_02",
    description: "Sistemas de design de alta fidelidade com motion UI imersivo e foco em experiência de elite.",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.1)"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "ENGENHARIA DE PRECISÃO",
    subtitle: "PHASE_03",
    description: "Codificação de alta performance utilizando stacks modernas e arquitetura resiliente de baixo acoplamento.",
    color: "from-emerald-500/20 to-teal-400/20",
    accent: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.1)"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "DEPLOY & OTIMIZAÇÃO",
    subtitle: "PHASE_04",
    description: "Orquestração de lançamento com monitoramento em tempo real e iteração baseada em inteligência de dados.",
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
    glowColor: "rgba(249, 115, 22, 0.1)"
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.6em] text-white/30 font-mono"
          >
            [ EXECUTION_PIPELINE ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            COMO CONSTRUÍMOS O FUTURO
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className="relative h-full p-8 rounded-[2.5rem] border border-white/5 bg-[#080808]/40 backdrop-blur-3xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-white/10 group-hover:bg-[#0a0a0a]/60">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1.2}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform duration-500 group-hover:text-white`}>
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-mono text-white/10 tracking-[0.3em]">{step.subtitle}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className={`${step.accent} font-mono text-[10px] tracking-widest`}>0{index + 1}</span>
                      <div className="h-[1px] flex-1 bg-white/5" />
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight tracking-tight min-h-[3rem]">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Bottom Glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(to top, ${step.glowColor}, transparent)` 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-md flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-neutral-800" />
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/40">
              PRONTO PARA ESCALAR? <span className="text-white ml-2 underline cursor-pointer hover:text-electric-red transition-colors">INICIAR PROJETO</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
