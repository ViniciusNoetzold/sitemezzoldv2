'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const ecosystems = [
  {
    title: 'Micro-SaaS',
    focus: 'Agility & Focus',
    description:
      'Lean product ecosystems built to solve a single, high-value problem with relentless clarity and speed.',
    highlights: ['Rapid iteration', 'Precision UX', 'Focused value loops'],
  },
  {
    title: 'Full SaaS',
    focus: 'Scale & Intelligence',
    description:
      'Comprehensive platforms with multi-tenant architecture, analytics layers, and executive-grade dashboards.',
    highlights: ['Enterprise dashboards', 'Operational command', 'Global scale'],
  },
  {
    title: 'Automations',
    focus: 'Invisible Performance',
    description:
      'High-performance automation pipelines that run quietly in the background, delivering measurable impact.',
    highlights: ['Workflow orchestration', 'System resilience', 'Zero-friction ops'],
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
              Product Showcase
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Micro-SaaS, Full SaaS, Automations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/50 max-w-3xl"
            >
              Three product lanes, one cinematic build philosophy—focus, scale, and invisible performance.
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
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">{item.focus}</p>
                <h3 className="text-3xl md:text-5xl font-black text-white">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 rounded-full border border-white/15 text-xs uppercase tracking-widest text-white/60 bg-white/5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="glass rounded-[2.5rem] border border-white/10 p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Glassmorphism Render</p>
                    <h4 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                      Product Visualization Placeholder
                    </h4>
                  </div>
                  <div className="mt-10 h-24 rounded-2xl border border-white/10 bg-white/[0.03]" />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-cyan-bright/15 blur-[60px]" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-emerald-green/15 blur-[80px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
