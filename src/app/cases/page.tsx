"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CasesPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] uppercase tracking-[0.2em] text-emerald-400">
              Em breve
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              CASE STUDIES
            </h1>
            <p className="text-lg text-white/50 max-w-lg mx-auto">
              Análises detalhadas dos nossos projetos mais impactantes. Descubra como transformamos visões em realidade digital.
            </p>
          </motion.div>
          
          {/* Placeholder Cases */}
          <div className="space-y-8 mt-16">
            {["Nexus OS", "Aura Fintech", "Flux Engine"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-48 h-32 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                  <span className="text-white/20 font-mono text-xs">PREVIEW</span>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-black text-white">{name}</h3>
                  <div className="h-3 w-full rounded bg-white/5" />
                  <div className="h-3 w-4/5 rounded bg-white/5" />
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/30 uppercase tracking-wider">
                    Análise em preparação
                  </span>
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
