"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Clock, User, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "O Futuro do Design de Interfaces com IA Generativa",
    excerpt: "Como a inteligência artificial está revolucionando a forma como projetamos experiências digitais e o que isso significa para designers.",
    category: "Design & IA",
    readTime: "8 min",
    author: "Marcus Silva",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "purple",
    featured: true,
  },
  {
    id: 2,
    title: "Arquitetura de Micro-SaaS: Do Zero ao Scale",
    excerpt: "Um guia completo sobre como estruturar sua aplicação SaaS para crescimento exponencial desde o primeiro dia.",
    category: "Engenharia",
    readTime: "12 min",
    author: "Ana Costa",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Motion UI: Criando Interfaces que Respiram",
    excerpt: "Técnicas avançadas de animação para criar experiências digitais imersivas e memoráveis.",
    category: "Motion Design",
    readTime: "6 min",
    author: "Pedro Almeida",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
  },
  {
    id: 4,
    title: "Performance Web em 2026: O Guia Definitivo",
    excerpt: "Estratégias e ferramentas para garantir que sua aplicação carregue em milissegundos.",
    category: "Performance",
    readTime: "10 min",
    author: "Julia Santos",
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "orange",
  },
  {
    id: 5,
    title: "Design Systems na Prática",
    excerpt: "Como construir e manter um design system que escala com sua equipe e produto.",
    category: "Design",
    readTime: "9 min",
    author: "Lucas Mendes",
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "blue",
  },
  {
    id: 6,
    title: "Edge Computing: A Nova Fronteira",
    excerpt: "Por que processar dados mais perto do usuário é o futuro das aplicações web.",
    category: "Infraestrutura",
    readTime: "7 min",
    author: "Carla Ribeiro",
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
  },
];

const accentColors: Record<string, string> = {
  purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  orange: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  violet: "text-violet-400 border-violet-500/30 bg-violet-500/10",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full" />
      </div>

      <Header />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] text-purple-400">
              <Sparkles className="w-3 h-3" />
              Insights & Artigos
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              BLOG
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Insights sobre engenharia de software, design de produto e
              tendências tecnológicas que moldam o futuro digital.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative group cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} rounded-[2.5rem] opacity-50 group-hover:opacity-70 transition-opacity blur-xl`}
                />
                <div className="relative rounded-[2.5rem] border border-white/10 bg-[#080808]/80 backdrop-blur-xl overflow-hidden p-8 md:p-12 group-hover:border-white/20 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] uppercase tracking-wider text-purple-400">
                          Destaque
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-white/30">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-white leading-tight group-hover:text-purple-200 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/50 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-white/40">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 group/btn">
                        Ler Artigo
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                              <Sparkles className="w-8 h-8 text-purple-400" />
                            </div>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                              Ilustração em breve
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl border border-white/5 bg-[#080808]/60 backdrop-blur-xl overflow-hidden hover:border-white/15 transition-all duration-500">
                  {/* Image Placeholder */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                      <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full border text-[9px] uppercase tracking-wider ${accentColors[post.accent]}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white/90 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/30">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author.split(" ")[0]}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-900/20 via-[#080808] to-cyan-900/20 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)]" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Receba insights exclusivos
                  </h3>
                  <p className="text-white/40">
                    Newsletter mensal com as melhores tendências em tech e
                    design.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors w-full sm:w-64"
                  />
                  <button className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 whitespace-nowrap">
                    Inscrever-se
                  </button>
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
