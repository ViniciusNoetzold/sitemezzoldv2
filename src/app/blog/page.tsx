"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] text-purple-400">
              Em breve
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              BLOG
            </h1>
            <p className="text-lg text-white/50 max-w-lg mx-auto">
              Insights sobre engenharia de software, design de produto e tendências tecnológicas. Estamos preparando conteúdo incrível para você.
            </p>
          </motion.div>
          
          {/* Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4"
              >
                <div className="h-40 rounded-xl bg-white/5 animate-pulse" />
                <div className="h-4 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/5" />
                <div className="h-3 w-4/5 rounded bg-white/5" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
