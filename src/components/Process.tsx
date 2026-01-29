"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "DESCOBERTA",
    description: "Analisamos seu ecossistema, identificamos gargalos e definimos a arquitetura de valor.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "DESIGN",
    description: "Criamos interfaces cinematográficas com foco em usabilidade de alta precisão e motion UI.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "DESENVOLVIMENTO",
    description: "Engenharia de alta velocidade com código limpo, escalável e performance extrema.",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "LANÇAMENTO",
    description: "Deploy otimizado, monitoramento contínuo e refinamento baseado em dados reais.",
    color: "from-orange-500 to-red-500"
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4"
          >
            Workflow de Elite
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            COMO CONSTRUÍMOS O FUTURO
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 group"
            >
              <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 bg-black/40 backdrop-blur-xl h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <div className="w-full h-full rounded-[15px] bg-black flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-white/20 tracking-widest">[ 0{index + 1} ]</span>
                  <h3 className="text-xl font-black text-white tracking-tight">{step.title}</h3>
                </div>
                
                <p className="text-white/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
