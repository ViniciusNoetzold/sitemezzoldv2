"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Cpu,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: "nexus-os",
    title: "Nexus OS",
    subtitle: "Dashboard Estratégico",
    description:
      "Uma interface de comando para logística orientada por IA, apresentando visualização de dados em tempo real e orquestração de frota global.",
    fullDescription:
      "Desenvolvemos uma plataforma completa de gestão logística que processa milhões de pontos de dados em tempo real, permitindo tomadas de decisão instantâneas para operações de frota em 47 países.",
    client: "Fortune 500 Logistics",
    industry: "Logística & Supply Chain",
    duration: "8 meses",
    year: "2025",
    gradient: "from-cyan-500/20 via-blue-500/10 to-purple-500/20",
    accent: "cyan",
    accentClass: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    icon: <Layers className="w-6 h-6" />,
    stats: [
      { label: "Redução de Custos", value: "34%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Uptime", value: "99.99%", icon: <Zap className="w-4 h-4" /> },
      { label: "Países", value: "47", icon: <Globe className="w-4 h-4" /> },
    ],
    tags: ["Three.js Canvas", "Real-time Data", "High Precision UI", "WebSocket", "D3.js"],
  },
  {
    id: "aura-fintech",
    title: "Aura Fintech",
    subtitle: "Plataforma Bancária",
    description:
      "Reinventando a experiência bancária com motion UI cinematográfico, segurança criptográfica de ponta e fluxos transacionais sem fricção.",
    fullDescription:
      "Criamos uma experiência bancária digital premium que combina segurança de nível institucional com uma interface tão intuitiva que reduziu o tempo médio de transação em 67%.",
    client: "Stealth Fintech Startup",
    industry: "Fintech & Banking",
    duration: "12 meses",
    year: "2025",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    accent: "purple",
    accentClass: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    icon: <Shield className="w-6 h-6" />,
    stats: [
      { label: "Transações/dia", value: "2.4M", icon: <BarChart3 className="w-4 h-4" /> },
      { label: "Tempo de TX", value: "-67%", icon: <Zap className="w-4 h-4" /> },
      { label: "Usuários Ativos", value: "890K", icon: <Users className="w-4 h-4" /> },
    ],
    tags: ["Biometric Auth", "Glassmorphism", "Ultra Smooth", "End-to-End Encryption"],
  },
  {
    id: "flux-engine",
    title: "Flux Engine",
    subtitle: "Automação Backend",
    description:
      "Visualização técnica de pipelines de automação complexos, permitindo que desenvolvedores monitorem trilhões de eventos em uma única tela.",
    fullDescription:
      "Engenheiramos um sistema de visualização que transforma dados complexos de pipelines em interfaces intuitivas, processando mais de 1 trilhão de eventos mensais com latência sub-milissegundo.",
    client: "Enterprise Tech Company",
    industry: "DevOps & Automation",
    duration: "6 meses",
    year: "2024",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accent: "emerald",
    accentClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    icon: <Cpu className="w-6 h-6" />,
    stats: [
      { label: "Eventos/mês", value: "1T+", icon: <BarChart3 className="w-4 h-4" /> },
      { label: "Latência", value: "<1ms", icon: <Zap className="w-4 h-4" /> },
      { label: "Pipelines", value: "12K", icon: <Layers className="w-4 h-4" /> },
    ],
    tags: ["Event-Driven", "Nodes System", "Low Latency", "Kafka", "WebGL"],
  },
];

export default function CasesPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-emerald-500/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full" />
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
            className="text-center space-y-6 mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] uppercase tracking-[0.2em] text-emerald-400">
              <Layers className="w-3 h-3" />
              Trabalhos Selecionados
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              CASE STUDIES
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Análises detalhadas dos nossos projetos mais impactantes. Descubra como
              transformamos visões em realidade digital.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} rounded-[2.5rem] opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-2xl`}
                  />

                  {/* Card */}
                  <div className="relative rounded-[2.5rem] border border-white/10 bg-[#080808]/80 backdrop-blur-xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-0">
                      {/* Content Side */}
                      <div className="p-8 md:p-12 space-y-8">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <span
                                className={`px-3 py-1 rounded-full border text-[10px] uppercase tracking-wider ${caseStudy.accentClass}`}
                              >
                                {caseStudy.subtitle}
                              </span>
                              <span className="text-[10px] font-mono text-white/30">
                                {caseStudy.year}
                              </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:tracking-normal transition-all duration-500">
                              {caseStudy.title}
                            </h2>
                          </div>
                          <div
                            className={`w-14 h-14 rounded-2xl border ${caseStudy.accentClass} flex items-center justify-center shrink-0`}
                          >
                            {caseStudy.icon}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/50 text-lg leading-relaxed">
                          {caseStudy.fullDescription}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-sm">
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">
                              Cliente
                            </p>
                            <p className="text-white/70">{caseStudy.client}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">
                              Indústria
                            </p>
                            <p className="text-white/70">{caseStudy.industry}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1">
                              Duração
                            </p>
                            <p className="text-white/70">{caseStudy.duration}</p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-wider text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-emerald-400 hover:text-white transition-all duration-300 group/btn">
                          Ver Estudo Completo
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                      </div>

                      {/* Visual Side */}
                      <div
                        className={`relative bg-gradient-to-br ${caseStudy.gradient} min-h-[400px] lg:min-h-0`}
                      >
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Stats Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                          {/* Top Label */}
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                              {caseStudy.id.toUpperCase()}_METRICS
                            </span>
                          </div>

                          {/* Stats Grid */}
                          <div className="space-y-4">
                            {caseStudy.stats.map((stat, i) => (
                              <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center justify-between p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="text-white/40">{stat.icon}</div>
                                  <span className="text-sm text-white/50">{stat.label}</span>
                                </div>
                                <span className="text-2xl font-black text-white">{stat.value}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Decorative Grid */}
                          <div
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                              backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                              backgroundSize: "40px 40px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col items-center gap-6 p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
              <p className="text-white/40">
                Quer ver seu projeto aqui?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-emerald-400 hover:text-white transition-all duration-300 group"
              >
                Iniciar Conversa
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
