"use client";

import { motion } from "framer-motion";
import { AnimatedCube } from "./ui/AnimatedCube";
import { AnimatedNetwork } from "./ui/AnimatedNetwork";
import { AnimatedGear } from "./ui/AnimatedGear";
import { GlowingEffect } from "./ui/glowing-effect";

const services = [
  {
    id: "01",
    title: "Micro-SaaS Architecture",
    subtitle: "AGILE_UNIT",
    description: "Sistemas de produto lean projetados para resolver problemas críticos com arquitetura de alta precisão e escalabilidade imediata.",
    color: "cyan",
    accentColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/30",
    specs: [
      { label: "ARCHITECTURE", value: "Edge / Serverless" },
      { label: "LATENCY", value: "< 50ms" },
      { label: "PROVISION", value: "Instant" },
      { label: "STATUS", value: "Production_Ready", isStatus: true },
    ],
    animation: <AnimatedCube />,
  },
  {
    id: "02",
    title: "Full SaaS Ecosystem",
    subtitle: "ENTERPRISE_CORE",
    description: "Plataformas robustas com arquitetura multi-tenant, infraestrutura distribuída e inteligência analítica em tempo real.",
    color: "blue",
    accentColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/30",
    specs: [
      { label: "ARCHITECTURE", value: "Multi-tenant / K8s" },
      { label: "THROUGHPUT", value: "10k+ Req/s" },
      { label: "DB_LAYER", value: "Geo-Distributed" },
      { label: "COMPLIANCE", value: "Enterprise_Grade", isLink: true },
    ],
    animation: <AnimatedNetwork />,
  },
  {
    id: "03",
    title: "Intelligent Automation",
    subtitle: "PIPELINE_FLOW",
    description: "Workflows autônomos de alta performance que operam em camadas de back-end, garantindo eficiência operacional absoluta.",
    color: "emerald",
    accentColor: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/30",
    specs: [
      { label: "ENGINE", value: "Event-Driven" },
      { label: "RELIABILITY", value: "99.999%" },
      { label: "INTEGRATION", value: "Full API Sync" },
      { label: "EXECUTION", value: "Autonomous", isGreen: true },
    ],
    animation: <AnimatedGear />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white/50"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-electric-red animate-pulse shadow-[0_0_8px_#ff0000]" />
            Capacidades Técnicas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tight"
          >
            SOLUÇÕES DE ELITE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/50 font-mono"
          >
            <span className="text-white/30">&lt;scope&gt;</span> Engenharia de precisão para o próximo nível. <span className="text-white/30">&lt;/scope&gt;</span>
          </motion.p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 border border-white/5 rounded-[2rem] overflow-hidden bg-[#050505]/60 backdrop-blur-2xl group transition-all duration-700 relative ${service.borderColor}`}
            >
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1.5}
              />

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <span className={`${service.accentColor} font-mono text-xs tracking-widest`}>[ {service.id} ]</span>
                      <div className="h-[1px] w-12 bg-white/10" />
                    </div>
                    <span className="text-white/20 font-mono text-[10px] tracking-[0.3em]">{service.subtitle}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter group-hover:tracking-normal transition-all duration-700">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-12">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-10 gap-x-12 border-t border-white/5 pt-12">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="group/spec">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-mono transition-colors group-hover/spec:text-white/50">{spec.label}</p>
                      <p className={`text-sm font-bold tracking-tight ${
                        spec.isStatus ? "text-cyan-400" : 
                        spec.isLink ? "text-blue-400" : 
                        spec.isGreen ? "text-emerald-400" :
                        "text-white"
                      }`}>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animation Side */}
              <div className="relative bg-black/40 overflow-hidden min-h-[450px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-110">
                  {service.animation}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
