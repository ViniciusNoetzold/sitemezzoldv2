"use client";

import { motion } from "framer-motion";
import { AnimatedCube } from "./ui/AnimatedCube";
import { AnimatedNetwork } from "./ui/AnimatedNetwork";
import { AnimatedGear } from "./ui/AnimatedGear";

const services = [
  {
    id: "01",
    title: "Micro-SaaS",
    subtitle: "SYS.AGILITY",
    description: "Ecossistemas de produto lean construídos para resolver um único problema de alto valor com clareza e velocidade implacáveis.",
    specs: [
      { label: "ARCHITECTURE", value: "Serverless / Edge" },
      { label: "FOCUS", value: "Single Utility" },
      { label: "DEPLOY TIME", value: "< 200ms" },
      { label: "STATUS", value: "Ready_", isStatus: true },
    ],
    animation: <AnimatedCube />,
  },
  {
    id: "02",
    title: "Full SaaS",
    subtitle: "SYS.SCALE",
    description: "Plataformas completas com arquitetura multi-tenant, camadas de analytics e dashboards de nível executivo.",
    specs: [
      { label: "ARCHITECTURE", value: "Multi-tenant / Microservices" },
      { label: "SCALE", value: "Global / Enterprise" },
      { label: "DATA LAYER", value: "Distributed SQL" },
      { label: "SECURITY", value: "SOC2_Compliant", isLink: true },
    ],
    animation: <AnimatedNetwork />,
  },
  {
    id: "03",
    title: "Automações",
    subtitle: "SYS.AUTO",
    description: "Pipelines de automação de alta performance que rodam silenciosamente em segundo plano, entregando impacto mensurável.",
    specs: [
      { label: "ARCHITECTURE", value: "Event-Driven" },
      { label: "VISIBILITY", value: "Background / Invisible" },
      { label: "THROUGHPUT", value: "High Volume" },
      { label: "UPTIME", value: "99.99%", isGreen: true },
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
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] uppercase tracking-[0.2em] text-emerald-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            System Online
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tight"
          >
            SOLUÇÕES IMERSIVAS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/50 font-mono"
          >
            <span className="text-white/30">&lt;init&gt;</span> Foco, escala e performance invisível. <span className="text-white/30">&lt;/init&gt;</span>
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
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 border border-white/5 rounded-[2rem] overflow-hidden bg-white/[0.02] backdrop-blur-3xl group hover:border-white/10 transition-colors"
            >
              {/* Content Side */}
              <div className="p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest">[ {service.id} ]</span>
                    <span className="text-white/20 font-mono text-[10px] tracking-[0.3em]">{service.subtitle}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter group-hover:text-emerald-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-white/5 pt-12">
                  {service.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-mono">{spec.label}</p>
                      <p className={`text-sm font-bold tracking-tight ${
                        spec.isStatus ? "text-emerald-400" : 
                        spec.isLink ? "text-blue-400 underline underline-offset-4" : 
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
              <div className="relative bg-black/40 overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
                {service.animation}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
