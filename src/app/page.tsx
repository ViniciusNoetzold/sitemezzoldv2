"use client";

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { LogoShowcase } from "@/components/LogoShowcase";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { useEffect, useState } from "react";
import Lenis from "lenis";

const Dither = dynamic(() => import("@/components/ui/dither"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const darkeningOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  useEffect(() => {
    setMounted(true);

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(introTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-[#020202] flex items-center justify-center"
          >
            <GooeyText
              texts={["MEZZOLD", "DESIGN", "CODE", "MOTION", "MEZZOLD"]}
              morphTime={0.8}
              cooldownTime={0.4}
              className="h-[200px]"
              textClassName="font-black text-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative min-h-screen bg-[#020202] selection:bg-electric-red selection:text-white overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-electric-red z-[100] origin-left"
          style={{ scaleX }}
        />

      {/* Unified Background System */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{ width: '100%', height: '100%' }}
        >
          <Dither
            waveColor={[0.7, 0.1, 1]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.6}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>

        {/* Top-to-Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#020202] pointer-events-none" />
        
        {/* Smooth Darkening Overlay on Scroll */}
        <motion.div 
          style={{ opacity: darkeningOpacity }}
          className="absolute inset-0 bg-[#020202] pointer-events-none"
        />
      </div>

      <Navbar />

      <div className="flex flex-col gap-0 relative z-10">
        <Hero />

        <div className="relative">
          <div className="relative z-10">
            <section id="who-we-are" className="py-24 px-6 relative z-10 bg-transparent">
              <div className="max-w-5xl mx-auto text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
                >
                  Quem Somos
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-black text-white"
                >
                  Um estúdio compacto para equipes SaaS ambiciosas.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-base md:text-lg text-white/55 max-w-3xl mx-auto"
                >
                  Unimos estratégia de produto, engenharia de alta velocidade e motion UI cinematográfico para criar plataformas que parecem inevitáveis.
                </motion.p>
              </div>
            </section>

            <div>
              <Services />
              <Portfolio />
            </div>

            <section id="about" className="py-32 px-6 relative z-10 bg-transparent">
              <div className="max-w-5xl mx-auto">
                <div className="glass rounded-[3rem] border border-white/10 p-12 md:p-20 text-center">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-8 text-white"
                  >
                    Pronto para Construir o <span className="text-emerald-green">Próximo</span> Grande Passo?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/60 mb-12 max-w-3xl mx-auto"
                  >
                    Parceria com Mezzold Studio para engenharia de classe mundial, motion UI fluido e estratégia de produto de elite.
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 rounded-full bg-white text-black font-black text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all"
                  >
                    Agendar uma Conversa
                  </motion.button>
                </div>
              </div>
            </section>

            <div>
              <LogoShowcase />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
