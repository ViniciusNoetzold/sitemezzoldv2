'use client';

import { motion } from 'framer-motion';

const dashboardPillars = [
  {
    title: 'Revenue Intelligence',
    detail: 'Track MRR, NRR, and cohort health with a single pane of glass.',
    tag: 'MRR · NRR · LTV',
  },
  {
    title: 'Growth Operations',
    detail: 'Activation, retention, and lifecycle views for rapid iteration.',
    tag: 'Activation · Retention',
  },
  {
    title: 'Customer Pulse',
    detail: 'Behavioral insights layered with narrative-ready reporting.',
    tag: 'Engagement · Insights',
  },
  {
    title: 'Executive Mode',
    detail: 'Board-ready snapshots that surface the signal instantly.',
    tag: 'Runway · Forecasts',
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
            Expert Dashboards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Glassmorphism Control Rooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-3xl"
          >
            SaaS-grade dashboard systems inspired by platforms like NutriFuel, blending cinematic depth with
            decision-ready clarity.
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
              <h3 className="text-3xl md:text-4xl font-black text-white">Executive-ready analytics with cinematic depth.</h3>
              <p className="text-white/55 text-lg leading-relaxed">
                We compose layered, glass-based layouts with real-time signals, multi-tenant filters, and immersive
                motion that keeps teams aligned.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Live Signal</p>
                <p className="mt-3 text-2xl font-bold text-white">98.6%</p>
                <p className="text-white/40 text-sm">Uptime</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Pipeline</p>
                <p className="mt-3 text-2xl font-bold text-white">$2.4M</p>
                <p className="text-white/40 text-sm">Forecast</p>
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
