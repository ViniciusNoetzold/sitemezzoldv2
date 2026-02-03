"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  FileText,
  BookOpen,
  Code2,
  Lightbulb,
  Search,
  ArrowRight,
  Terminal,
  Palette,
  Database,
  Rocket,
  ChevronRight,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const docCategories = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Início Rápido",
    description: "Configure seu ambiente e comece a desenvolver em minutos",
    color: "blue",
    accentClass: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    gradient: "from-blue-500/20 to-cyan-500/10",
    articles: 5,
    readTime: "15 min",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "API Reference",
    description: "Documentação completa de endpoints e integrações",
    color: "emerald",
    accentClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    gradient: "from-emerald-500/20 to-teal-500/10",
    articles: 24,
    readTime: "45 min",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design System",
    description: "Componentes, tokens e guidelines visuais",
    color: "purple",
    accentClass: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    gradient: "from-purple-500/20 to-pink-500/10",
    articles: 18,
    readTime: "30 min",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Arquitetura",
    description: "Padrões, estruturas e decisões técnicas",
    color: "orange",
    accentClass: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    gradient: "from-orange-500/20 to-red-500/10",
    articles: 12,
    readTime: "25 min",
  },
];

const quickLinks = [
  { title: "Configurando Next.js 15", category: "Início Rápido", icon: <FileText className="w-4 h-4" /> },
  { title: "Autenticação com OAuth", category: "API Reference", icon: <Code2 className="w-4 h-4" /> },
  { title: "Tokens de Cor", category: "Design System", icon: <Palette className="w-4 h-4" /> },
  { title: "Database Schema", category: "Arquitetura", icon: <Database className="w-4 h-4" /> },
  { title: "Deploy em Produção", category: "Início Rápido", icon: <Rocket className="w-4 h-4" /> },
  { title: "Webhooks", category: "API Reference", icon: <Terminal className="w-4 h-4" /> },
];

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-[10px] uppercase tracking-[0.2em] text-blue-400">
              <BookOpen className="w-3 h-3" />
              Base de Conhecimento
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              DOCUMENTAÇÃO
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Tudo que você precisa para construir com as tecnologias Mezzold. Guias,
              referências e exemplos práticos.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center">
                <Search className="absolute left-5 w-5 h-5 text-white/30" />
                <input
                  type="text"
                  placeholder="Buscar na documentação..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-all"
                />
                <div className="absolute right-4 flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/30">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {docCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Card */}
                  <div className="relative h-full rounded-2xl border border-white/5 bg-[#080808]/60 backdrop-blur-xl p-6 hover:border-white/15 transition-all duration-500 overflow-hidden">
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl border ${cat.accentClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cat.icon}
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5 text-xs text-white/30">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {cat.articles} artigos
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {cat.readTime} leitura
                      </span>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${cat.gradient} opacity-20 rounded-full blur-2xl`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Links Rápidos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
                    <div className="text-white/30 group-hover:text-white/50 transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                        {link.title}
                      </p>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">
                        {link.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-[#080808] to-purple-900/20 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Terminal className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Documentação Completa em Breve
                    </h3>
                    <p className="text-white/40 text-sm">
                      Estamos finalizando guias interativos e exemplos de código.
                    </p>
                  </div>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-blue-400 hover:text-white transition-all duration-300 group whitespace-nowrap"
                >
                  Notifique-me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
