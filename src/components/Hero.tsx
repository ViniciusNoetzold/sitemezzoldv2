'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { AnimatedHeroText } from './ui/animated-hero';

const MezzoldLogo3D = dynamic(() => import('./MezzoldLogo3D').then(mod => ({ default: mod.MezzoldLogo3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 animate-pulse flex items-center justify-center">
        <span className="text-4xl font-black text-teal-400">M</span>
      </div>
    </div>
  ),
});

export function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-transparent">
      <motion.div style={{ y: headlineY }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-8"
        >
          Mezzold Studio · Premium Software House
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <MezzoldLogo3D />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6"
        >
          <AnimatedHeroText 
            prefix="Criamos"
            titles={["inovação", "performance", "design", "precisão", "resultados"]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-white/60 max-w-3xl mx-auto"
        >
          We build ultra-fast, design-forward platforms that feel alive—crafted for ambitious SaaS and digital-first brands.
        </motion.p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
          >
            Start a Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full border border-white/20 text-white font-bold tracking-wide bg-white/5 backdrop-blur-xl hover:border-cyan-bright/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all"
          >
            View Portfolio
          </motion.button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {[
            {
              title: 'Fluid Experiences',
              text: 'Parallax-rich interfaces and buttery smooth transitions powered by motion design.',
            },
            {
              title: 'Neon Precision',
              text: 'Electric blue and emerald accents with glassmorphism for futuristic depth.',
            },
            {
              title: 'Elite Performance',
              text: 'Optimized for speed, scale, and long-term technical excellence.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
