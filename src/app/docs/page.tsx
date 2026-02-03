"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, BookOpen, Code2, Lightbulb } from "lucide-react";
import Link from "next/link";

const docCategories = [
  { icon: <FileText className="w-5 h-5" />, title: "Guias", description: "Passo a passo para começar", color: "text-blue-400" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Referência", description: "Documentação técnica completa", color: "text-purple-400" },
  { icon: <Code2 className="w-5 h-5" />, title: "APIs", description: "Integração e endpoints", color: "text-emerald-400" },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Tutoriais", description: "Aprenda com exemplos práticos", color: "text-orange-400" },
];

export default function DocsPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white">
      <Header />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-[10px] uppercase tracking-[0.2em] text-blue-400">
              Em breve
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              DOCUMENTAÇÃO
            </h1>
            <p className="text-lg text-white/50 max-w-lg mx-auto">
              Recursos e guias para desenvolvedores. Nossa base de conhecimento está sendo construída.
            </p>
          </motion.div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {docCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 flex items-start gap-4 group cursor-not-allowed opacity-60"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${cat.color}`}>
                  {cat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  <p className="text-sm text-white/40">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
