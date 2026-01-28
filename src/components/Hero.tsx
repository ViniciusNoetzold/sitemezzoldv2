'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { MezzoldLogo3D } from './MezzoldLogo3D';

export function Hero() {
  const { scrollY } = useScroll();
  const sphereY = useTransform(scrollY, [0, 600], [0, 200]);
  const sphereRotate = useTransform(scrollY, [0, 600], [0, 35]);
  const sphereOpacity = useTransform(scrollY, [0, 500], [1, 0], { clamp: true });
  const headlineY = useTransform(scrollY, [0, 400], [0, 80]);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltY, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(tiltX, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (typeof window === 'undefined' || !('DeviceOrientationEvent' in window)) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      const normalizedX = Math.max(-1, Math.min(1, event.gamma / 30));
      const normalizedY = Math.max(-1, Math.min(1, event.beta / 30));
      tiltX.set(normalizedX * 6);
      tiltY.set(normalizedY * 6);
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [tiltX, tiltY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-transparent perspective-[1200px]">
      <motion.div
          style={{ y: sphereY, rotate: sphereRotate, opacity: sphereOpacity, rotateX, rotateY }}
          className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center transform-gpu"
        >
          <div className="absolute w-[900px] h-[900px] rounded-full bg-cyan-bright/10 blur-[120px]" />
          <div className="absolute w-[700px] h-[700px] rounded-full bg-emerald-green/10 blur-[140px]" />
          <MezzoldLogo3D />
        </motion.div>

        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.7) 45%, rgba(6,6,6,0) 75%)',
          }}
        />

      <motion.div style={{ y: headlineY }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
        >
          Mezzold Studio · Premium Software House
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white"
        >
          Transforming Ideas into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright via-white to-emerald-green">
            High-Performance
          </span>{' '}
          Digital Ecosystems.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 text-lg md:text-2xl text-white/60 max-w-3xl mx-auto"
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
