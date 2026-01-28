'use client';

import { motion } from 'framer-motion';

const dashboardPillars = [
  {
    title: 'Inteligência de Receita',
    detail: 'Acompanhe MRR, NRR e saúde de cohort em uma única visão.',
    tag: 'MRR · NRR · LTV',
  },
  {
    title: 'Operações de Crescimento',
    detail: 'Visões de ativação, retenção e ciclo de vida para iteração rápida.',
    tag: 'Ativação · Retenção',
  },
  {
    title: 'Pulso do Cliente',
    detail: 'Insights comportamentais com relatórios prontos para narrativa.',
    tag: 'Engajamento · Insights',
  },
  {
    title: 'Modo Executivo',
    detail: 'Snapshots prontos para o board que revelam o sinal instantaneamente.',
    tag: 'Runway · Previsões',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50"
            >
              Dashboards Especializados
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Salas de Controle em Glassmorphism
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/50 max-w-3xl"
            >
              Sistemas de dashboard SaaS-grade inspirados em plataformas como NutriFuel, combinando profundidade cinematográfica com clareza para tomada de decisão.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.25fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] border border-white/10 p-10 md:p-12 flex flex-col justify-between"
          >
            <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Dashboard Core</p>
                <h3 className="text-3xl md:text-4xl font-black text-white">Analytics prontos para executivos com profundidade cinematográfica.</h3>
                <p className="text-white/55 text-lg leading-relaxed">
                  Criamos layouts em camadas baseados em glass com sinais em tempo real, filtros multi-tenant e motion imersivo que mantém equipes alinhadas.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Sinal ao Vivo</p>
                  <p className="mt-3 text-2xl font-bold text-white">98.6%</p>
                  <p className="text-white/40 text-sm">Uptime</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Pipeline</p>
                  <p className="mt-3 text-2xl font-bold text-white">R$2.4M</p>
                  <p className="text-white/40 text-sm">Previsão</p>
                </div>
              </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dashboardPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-3xl border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                  <p className="mt-3 text-white/55 leading-relaxed text-sm">{pillar.detail}</p>
                </div>
                <span className="mt-6 inline-flex w-fit px-3 py-2 rounded-full border border-white/15 text-[10px] uppercase tracking-[0.3em] text-white/50 bg-white/5">
                  {pillar.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
