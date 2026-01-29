'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const ecosystems = [
  {
    title: 'Nexus OS',
    focus: 'DASHBOARD ESTRATÉGICO',
    description:
      'Uma interface de comando para logística orientada por IA, apresentando visualização de dados em tempo real e orquestração de frota global.',
    highlights: ['Three.js Canvas', 'Real-time Data', 'High Precision UI'],
    visualLabel: 'NEXUS_v2.0_INTERFACE'
  },
  {
    title: 'Aura Fintech',
    focus: 'PLATAFORMA BANCÁRIA',
    description:
      'Reinventando a experiência bancária com motion UI cinematográfico, segurança criptográfica de ponta e fluxos transacionais sem fricção.',
    highlights: ['Biometric Auth', 'Glassmorphism', 'Ultra Smooth'],
    visualLabel: 'AURA_CORE_RENDER'
  },
  {
    title: 'Flux Engine',
    focus: 'AUTOMAÇÃO BACKEND',
    description:
      'Visualização técnica de pipelines de automação complexos, permitindo que desenvolvedores monitorem trilhões de eventos em uma única tela.',
    highlights: ['Event-Driven', 'Nodes System', 'Low Latency'],
    visualLabel: 'FLUX_PIPELINE_VIEW'
  },
];

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
              >
                Trabalhos Selecionados
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white"
              >
                PROJETOS QUE DEFINEM O PADRÃO
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/50 max-w-3xl"
              >
                Explorando a intersecção entre estética radical e engenharia rigorosa.
              </motion.p>
          </div>

        <motion.div style={{ y }} className="space-y-16">
          {ecosystems.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className={`grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-[1.4fr_1.1fr]' : ''
              }`}
            >
              <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-400">{item.focus}</p>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 rounded-full border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white/60 bg-white/5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="glass rounded-[2.5rem] border border-white/10 p-8 md:p-12 min-h-[320px] flex flex-col justify-between group overflow-hidden relative">
                    {/* Background Decorative Grid */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">{item.visualLabel}</p>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
                        Visualização de Alta Fidelidade
                      </h4>
                    </div>
                    
                    {/* Decorative UI elements */}
                    <div className="mt-10 flex gap-4">
                      <div className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] flex items-center px-4">
                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-12 w-24 rounded-xl border border-white/10 bg-emerald-500/10" />
                    </div>

                    {/* Gradient Glows */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-[80px]" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
