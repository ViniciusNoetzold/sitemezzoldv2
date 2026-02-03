"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  Server,
  Cloud,
  Palette,
  Zap,
  Shield,
  Globe,
  Layers,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const techStack = [
  {
    category: "Frontend",
    description: "Interfaces modernas, performáticas e responsivas",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-cyan-500/20 to-blue-500/10",
    accentClass: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    items: [
      { name: "Next.js 15", desc: "Framework React", highlight: true },
      { name: "React 19", desc: "UI Library" },
      { name: "TypeScript", desc: "Type Safety" },
      { name: "Tailwind CSS", desc: "Styling" },
      { name: "Framer Motion", desc: "Animations" },
      { name: "Zustand", desc: "State Management" },
    ],
  },
  {
    category: "Backend",
    description: "APIs escaláveis e arquitetura robusta",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-emerald-500/20 to-teal-500/10",
    accentClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    items: [
      { name: "Node.js", desc: "Runtime", highlight: true },
      { name: "Prisma", desc: "ORM" },
      { name: "PostgreSQL", desc: "Database" },
      { name: "Redis", desc: "Caching" },
      { name: "GraphQL", desc: "API Layer" },
      { name: "tRPC", desc: "Type-safe APIs" },
    ],
  },
  {
    category: "Infrastructure",
    description: "Deploy global com alta disponibilidade",
    icon: <Cloud className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-pink-500/10",
    accentClass: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    items: [
      { name: "Vercel", desc: "Hosting", highlight: true },
      { name: "AWS", desc: "Cloud Services" },
      { name: "Docker", desc: "Containers" },
      { name: "Kubernetes", desc: "Orchestration" },
      { name: "Cloudflare", desc: "CDN & Security" },
      { name: "Terraform", desc: "IaC" },
    ],
  },
  {
    category: "Design & Motion",
    description: "Experiências visuais imersivas",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-orange-500/20 to-red-500/10",
    accentClass: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    items: [
      { name: "Figma", desc: "Design Tool", highlight: true },
      { name: "Three.js", desc: "3D Graphics" },
      { name: "GSAP", desc: "Advanced Animations" },
      { name: "Lottie", desc: "Motion Graphics" },
      { name: "Spline", desc: "3D Design" },
      { name: "Rive", desc: "Interactive Design" },
    ],
  },
];

const highlights = [
  { icon: <Zap className="w-5 h-5" />, label: "Performance First", value: "< 100ms TTFB" },
  { icon: <Shield className="w-5 h-5" />, label: "Security Grade", value: "A+" },
  { icon: <Globe className="w-5 h-5" />, label: "Global Edge", value: "200+ PoPs" },
  { icon: <Cpu className="w-5 h-5" />, label: "Core Web Vitals", value: "100/100" },
];

export default function StackPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-cyan-500/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      <Header />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Início
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              <Cpu className="w-3 h-3" />
              Tecnologias de Ponta
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              STACK TECH
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              As ferramentas e tecnologias que utilizamos para criar experiências digitais
              excepcionais e escaláveis.
            </p>
          </motion.div>

          {/* Performance Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center hover:border-white/10 transition-all">
                  <div className="flex justify-center mb-3 text-white/40 group-hover:text-cyan-400 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack, stackIndex) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + stackIndex * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} rounded-[2rem] opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl`}
                  />

                  {/* Card */}
                  <div className="relative h-full rounded-[2rem] border border-white/5 bg-[#080808]/60 backdrop-blur-xl p-8 hover:border-white/15 transition-all duration-500 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-3">
                        <div
                          className={`w-12 h-12 rounded-xl border ${stack.accentClass} flex items-center justify-center`}
                        >
                          {stack.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{stack.category}</h3>
                          <p className="text-sm text-white/40 mt-1">{stack.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Items */}
                    <div className="grid grid-cols-2 gap-3">
                      {stack.items.map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + stackIndex * 0.1 + i * 0.03 }}
                          className="group/item"
                        >
                          <div
                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                              item.highlight
                                ? `${stack.accentClass} border-opacity-50`
                                : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm font-medium truncate ${
                                  item.highlight ? "" : "text-white/80"
                                }`}
                              >
                                {item.name}
                              </p>
                              <p className="text-[10px] text-white/30 uppercase tracking-wider">
                                {item.desc}
                              </p>
                            </div>
                            <ExternalLink className="w-3 h-3 text-white/10 group-hover/item:text-white/30 transition-colors shrink-0" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative */}
                    <div
                      className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br ${stack.gradient} opacity-20 rounded-full blur-3xl`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-900/20 via-[#080808] to-purple-900/20 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Por que essas escolhas?
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    Cada tecnologia em nosso stack foi escolhida com base em três critérios:
                    performance excepcional, developer experience de elite, e escalabilidade
                    comprovada em produção.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Type-safety end-to-end para menos bugs",
                      "Edge computing para latência mínima global",
                      "Modern tooling para velocity máxima",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <p className="text-sm text-white/60">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-6">
                  <p className="text-white/30 text-sm text-center lg:text-right">
                    Interessado em como aplicamos essas tecnologias no seu projeto?
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-cyan-400 hover:text-white transition-all duration-300 group"
                  >
                    Vamos Conversar
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
