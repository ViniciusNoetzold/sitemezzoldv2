'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from './ui/liquid-glass-button';
import { GlowingEffect } from './ui/glowing-effect';
import { Typewriter } from './ui/typewriter';
import { useScrollTo } from '@/hooks/useScrollTo';

export function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, 80]);
  const scrollTo = useScrollTo();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-transparent">
      <motion.div style={{ y: headlineY }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-8"
        >
          Mezzold Studio · Software House Premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter font-[var(--font-bebas)]"
        >
          MEZZOLD
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6"
        >
          <p className="text-2xl md:text-4xl font-medium text-white/90">
            <span>Criamos </span>
            <Typewriter
              text={["inovação", "performance", "design", "precisão", "resultados"]}
              speed={70}
              className="text-emerald-green font-bold"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
              cursorClassName="text-emerald-green ml-1"
            />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-white/60 max-w-3xl mx-auto"
        >
          Construímos plataformas ultra-rápidas e com design inovador que parecem vivas—feitas para marcas SaaS e digital-first ambiciosas.
        </motion.p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <LiquidButton className="text-white border border-white/10 rounded-full" size={'xl'} onClick={() => scrollTo('contact')}>
              Iniciar Projeto
            </LiquidButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button onClick={() => scrollTo('portfolio')} className="relative group h-12 px-8 rounded-full text-sm font-medium text-white/80 hover:text-white transition-all duration-500 cursor-pointer overflow-hidden border border-white/10 hover:border-emerald-green/40 backdrop-blur-md hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-green/10 to-cyan-bright/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 tracking-wide">Ver Portfólio</span>
            </button>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {[
            {
              title: 'Experiências Fluidas',
              text: 'Interfaces ricas em parallax e transições suaves impulsionadas por motion design.',
            },
            {
              title: 'Precisão Neon',
              text: 'Acentos em azul elétrico e esmeralda com glassmorphism para profundidade futurista.',
            },
            {
              title: 'Performance de Elite',
              text: 'Otimizado para velocidade, escala e excelência técnica a longo prazo.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="relative glass rounded-3xl p-6 border border-white/10 backdrop-blur-xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
