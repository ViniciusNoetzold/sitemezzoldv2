"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { LogoShowcase } from "@/components/LogoShowcase";
import { TopographyBackground } from "@/components/TopographyBackground";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

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
    };
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-transparent selection:bg-electric-red selection:text-white overflow-hidden">
      <TopographyBackground />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-red z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />

        <section id="who-we-are" className="py-24 px-6 relative z-10 bg-transparent">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
            >
              Who we are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white"
            >
              A compact studio for ambitious SaaS teams.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-white/55 max-w-3xl mx-auto"
            >
              We blend product strategy, high-velocity engineering, and cinematic UI motion to ship platforms that feel
              inevitable.
            </motion.p>
          </div>
        </section>

        <Services />
        <Portfolio />

        <section id="about" className="py-32 px-6 relative z-10 bg-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-[3rem] border border-white/10 p-12 md:p-20 text-center">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-8 text-white"
              >
                Ready to Build the <span className="text-emerald-green">Next</span> Breakthrough?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 mb-12 max-w-3xl mx-auto"
              >
                Partner with Mezzold Studio for world-class engineering, fluid UI motion, and elite product strategy.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 rounded-full bg-white text-black font-black text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all"
              >
                Book a Discovery Call
              </motion.button>
            </div>
          </div>
        </section>

        <LogoShowcase />
        <Footer />
      </div>
    </main>
  );
}
