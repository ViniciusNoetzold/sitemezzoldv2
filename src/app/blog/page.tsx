"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Clock, User, ArrowUpRight, Sparkles, TrendingUp, Eye, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", label: "Todos", count: 6 },
  { id: "design", label: "Design", count: 2 },
  { id: "engineering", label: "Engenharia", count: 2 },
  { id: "performance", label: "Performance", count: 1 },
  { id: "infra", label: "Infraestrutura", count: 1 },
];

const blogPosts = [
  {
    id: 1,
    title: "O Futuro do Design de Interfaces com IA Generativa",
    excerpt: "Como a inteligência artificial está revolucionando a forma como projetamos experiências digitais e o que isso significa para designers.",
    category: "Design & IA",
    categoryId: "design",
    readTime: "8 min",
    author: "Marcus Silva",
    date: "28 Jan 2026",
    views: "2.4K",
    comments: 47,
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "purple",
    featured: true,
    tags: ["IA", "UI/UX", "Tendências"],
  },
  {
    id: 2,
    title: "Arquitetura de Micro-SaaS: Do Zero ao Scale",
    excerpt: "Um guia completo sobre como estruturar sua aplicação SaaS para crescimento exponencial desde o primeiro dia.",
    category: "Engenharia",
    categoryId: "engineering",
    readTime: "12 min",
    author: "Ana Costa",
    date: "25 Jan 2026",
    views: "1.8K",
    comments: 32,
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan",
    tags: ["SaaS", "Arquitetura", "Scale"],
  },
  {
    id: 3,
    title: "Motion UI: Criando Interfaces que Respiram",
    excerpt: "Técnicas avançadas de animação para criar experiências digitais imersivas e memoráveis.",
    category: "Motion Design",
    categoryId: "design",
    readTime: "6 min",
    author: "Pedro Almeida",
    date: "22 Jan 2026",
    views: "3.1K",
    comments: 58,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
    tags: ["Motion", "Animação", "Framer"],
  },
  {
    id: 4,
    title: "Performance Web em 2026: O Guia Definitivo",
    excerpt: "Estratégias e ferramentas para garantir que sua aplicação carregue em milissegundos.",
    category: "Performance",
    categoryId: "performance",
    readTime: "10 min",
    author: "Julia Santos",
    date: "18 Jan 2026",
    views: "4.2K",
    comments: 89,
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "orange",
    tags: ["Web Vitals", "Otimização", "Speed"],
  },
  {
    id: 5,
    title: "Design Systems na Prática",
    excerpt: "Como construir e manter um design system que escala com sua equipe e produto.",
    category: "Design",
    categoryId: "design",
    readTime: "9 min",
    author: "Lucas Mendes",
    date: "15 Jan 2026",
    views: "2.9K",
    comments: 41,
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "blue",
    tags: ["Design System", "Tokens", "Componentes"],
  },
  {
    id: 6,
    title: "Edge Computing: A Nova Fronteira",
    excerpt: "Por que processar dados mais perto do usuário é o futuro das aplicações web.",
    category: "Infraestrutura",
    categoryId: "infra",
    readTime: "7 min",
    author: "Carla Ribeiro",
    date: "10 Jan 2026",
    views: "1.5K",
    comments: 23,
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
    tags: ["Edge", "CDN", "Cloudflare"],
  },
];

const accentColors: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10", glow: "shadow-purple-500/20" },
  cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10", glow: "shadow-cyan-500/20" },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", glow: "shadow-emerald-500/20" },
  orange: { text: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", glow: "shadow-orange-500/20" },
  blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", glow: "shadow-blue-500/20" },
  violet: { text: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/10", glow: "shadow-violet-500/20" },
};

function FloatingOrb({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts = blogPosts.filter((p) => !p.featured && (activeCategory === "all" || p.categoryId === activeCategory));

  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-purple-500 selection:text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingOrb className="top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10" />
        <FloatingOrb className="bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/8" />
        <FloatingOrb className="top-1/2 right-0 w-[400px] h-[400px] bg-pink-500/5" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
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
            className="text-center space-y-6 mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] text-purple-400"
            >
              <Sparkles className="w-3 h-3" />
              Insights & Artigos
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-200">
                BLOG
              </span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Insights sobre engenharia de software, design de produto e
              tendências tecnológicas que moldam o futuro digital.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70 border border-white/5"
                }`}
              >
                {cat.label}
                <span className={`ml-2 ${activeCategory === cat.id ? "text-black/50" : "text-white/30"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && activeCategory === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative group cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} rounded-[2.5rem] opacity-40 group-hover:opacity-60 transition-all duration-500 blur-2xl`}
                />
                <div className="relative rounded-[2.5rem] border border-white/10 bg-[#080808]/90 backdrop-blur-xl overflow-hidden group-hover:border-white/20 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Content Side */}
                    <div className="p-8 md:p-12 space-y-6">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] uppercase tracking-wider text-purple-400 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Destaque
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-white/30 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {featuredPost.date}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white leading-tight group-hover:text-purple-100 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/50 text-base leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags?.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-white/40 font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-white/40 pt-4 border-t border-white/5">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views}
                        </span>
                        <span className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          {featuredPost.comments}
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 group/btn shadow-lg hover:shadow-purple-500/20">
                        Ler Artigo Completo
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                    
                    {/* Visual Side */}
                    <div className={`relative bg-gradient-to-br ${featuredPost.gradient} min-h-[350px] lg:min-h-0`}>
                      <div className="absolute inset-0 bg-black/10" />
                      
                      {/* Animated Pattern */}
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          style={{
                            backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                          }}
                        />
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="text-center space-y-4"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="w-24 h-24 mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                            <Sparkles className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                            {featuredPost.category}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => {
              const colors = accentColors[post.accent];
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full rounded-2xl border border-white/5 bg-[#080808]/80 backdrop-blur-xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:shadow-xl hover:${colors.glow}">
                    {/* Image Placeholder */}
                    <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      
                      {/* Animated Grid */}
                      <motion.div
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                          backgroundImage: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                          backgroundSize: "200% 200%",
                        }}
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
                        <div className="w-14 h-14 rounded-xl border border-white/30 flex items-center justify-center backdrop-blur-sm">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full border text-[9px] uppercase tracking-wider backdrop-blur-sm ${colors.text} ${colors.border} ${colors.bg}`}>
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-[9px] font-mono text-white/50 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                          {post.date}
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
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[9px] text-white/30 font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-4 text-xs text-white/30">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author.split(" ")[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-white/20">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && activeCategory !== "all" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/40">Nenhum artigo encontrado nesta categoria.</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-purple-400 hover:text-purple-300 text-sm"
              >
                Ver todos os artigos
              </button>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-900/20 via-[#080808] to-cyan-900/20 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Receba insights exclusivos
                  </h3>
                  <p className="text-white/40">
                    Newsletter mensal com as melhores tendências em tech e design.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-all w-full sm:w-64 backdrop-blur-sm"
                  />
                  <button className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-purple-500/20">
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
