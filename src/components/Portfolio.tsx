'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Globe, MessageCircle, BarChart3, Smartphone, Zap, Search, Bot, Clock, Wifi, LineChart, Cloud, Settings } from 'lucide-react';
import { ScrollVideo } from './ui/ScrollVideo';

const ecosystems = [
  {
    title: 'Vanguard Web',
    focus: 'LANDING PAGE DE ALTA CONVERSÃO',
    description:
      'Interfaces rápidas e otimizadas para SEO, focadas na jornada do usuário e captura de leads. Páginas feitas para transformar visitantes em clientes.',
    highlights: ['Ultra Responsive', 'SEO Optimized', 'Conversion Focused'],
    visualLabel: 'VANGUARD_LANDING_v3',
    visualTitle: 'Landing Page Pro',
    accentColor: 'cyan',
    icons: [Smartphone, Search, Zap],
    hasVideo: true,
    videoSrc: '/iphone-girando.mp4',
    videoClassName: 'max-w-[500px] w-full mix-blend-screen opacity-50',
  },
  {
    title: 'Nexus Chat',
    focus: 'AUTOMAÇÃO DE ATENDIMENTO & CHATBOTS',
    description:
      'Automação inteligente de atendimento que qualifica leads e responde dúvidas frequentes sem intervenção humana. Seu funcionário digital 24h.',
    highlights: ['WhatsApp API', 'AI-Powered', '24/7 Availability'],
    visualLabel: 'NEXUS_CHAT_ENGINE',
    visualTitle: 'Smart Flow AI',
    accentColor: 'emerald',
    icons: [MessageCircle, Bot, Clock],
    hasVideo: true,
    videoSrc: '/esfera-girante.mp4',
    videoClassName: 'max-w-[900px] w-[130%] -ml-[15%] md:-ml-[5%] scale-110 object-cover mix-blend-screen opacity-50',
  },
  {
    title: 'Pulse Dashboard',
    focus: 'DASHBOARDS DE GESTÃO / MICRO SAAS',
    description:
      'Sistemas personalizados para controle de estoque, financeiro ou CRM, feitos sob medida para a operação da empresa. Adeus planilhas bagunçadas.',
    highlights: ['Data Insights', 'Cloud Native', 'Process Automation'],
    visualLabel: 'PULSE_CORE_v2.1',
    visualTitle: 'Controle Total',
    accentColor: 'blue',
    icons: [LineChart, Cloud, Settings],
  },
];

const accentMap: Record<string, { text: string; bg: string; glow: string; border: string }> = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'bg-blue-500/10', border: 'border-blue-500/20' },
};

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
            O Que Entregamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            SOLUÇÕES QUE GERAM RESULTADO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-3xl"
          >
            Tecnologia aplicada com foco em conversão, automação e controle. Cada projeto é uma máquina de resultados.
          </motion.p>
        </div>

        <motion.div style={{ y }} className="space-y-16">
          {ecosystems.map((item, index) => {
            const accent = accentMap[item.accentColor];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className={`grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-8 items-center ${index % 2 === 1 ? 'lg:grid-cols-[1.4fr_1.1fr]' : ''
                  }`}
              >
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <p className={`text-[10px] font-mono uppercase tracking-[0.4em] ${accent.text}`}>{item.focus}</p>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`px-4 py-2 rounded-full border text-[10px] font-mono uppercase tracking-widest text-white/60 bg-white/5 ${accent.border}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/cases"
                    className={`inline-flex items-center gap-2 mt-4 text-sm font-semibold text-white/60 hover:${accent.text} transition-colors duration-300 group/link`}
                  >
                    Ver Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {item.hasVideo && item.videoSrc ? (
                    /* Scroll-driven Video */
                    <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden">
                      {/* Video — behind text, dimmed, blended */}
                      <ScrollVideo
                        src={item.videoSrc}
                        className={`w-full mx-auto ${item.videoClassName || 'max-w-[420px]'}`}
                      />
                      {/* Vignette: edges fade into background */}
                      <div className="absolute inset-0 pointer-events-none" style={{
                        background: 'radial-gradient(ellipse at center, transparent 30%, #050505 85%)'
                      }} />
                    </div>
                  ) : (
                    /* Default Glass Card for other ecosystems */
                    <div className="glass rounded-[2.5rem] border border-white/10 p-8 md:p-12 min-h-[320px] flex flex-col justify-between group overflow-hidden relative">
                      {/* Background Decorative Grid */}
                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2 h-2 rounded-full ${accent.text.replace('text-', 'bg-')} animate-pulse`} />
                          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">{item.visualLabel}</p>
                        </div>
                        <h4 className={`text-2xl md:text-3xl font-bold text-white group-hover:${accent.text} transition-colors duration-500`}>
                          {item.visualTitle}
                        </h4>
                      </div>

                      {/* Feature Icons */}
                      <div className="mt-8 flex gap-4">
                        {item.icons.map((Icon, i) => (
                          <div
                            key={i}
                            className={`h-14 w-14 rounded-2xl border border-white/10 ${accent.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                          >
                            <Icon className={`w-6 h-6 ${accent.text}`} />
                          </div>
                        ))}
                        <div className="h-14 flex-1 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center px-4">
                          <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                        </div>
                      </div>

                      {/* Gradient Glows */}
                      <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${accent.glow} blur-[80px]`} />
                      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
