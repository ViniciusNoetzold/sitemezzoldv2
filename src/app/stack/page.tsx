"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const techStack = [
  { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Infrastructure", items: ["Vercel", "AWS", "Docker", "Kubernetes", "Cloudflare"] },
  { category: "Design", items: ["Figma", "Three.js", "GSAP", "Lottie", "Spline"] },
];

export default function StackPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              Tecnologias
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              STACK TECH
            </h1>
            <p className="text-lg text-white/50 max-w-lg mx-auto">
              As tecnologias de ponta que utilizamos para criar experiências digitais excepcionais.
            </p>
          </motion.div>
          
          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {techStack.map((stack, i) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4"
              >
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-white/40 text-sm mb-6">
              Interessado em como aplicamos essas tecnologias?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
