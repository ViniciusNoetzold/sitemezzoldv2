"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

interface DuneLayer {
  id: number;
  color: string;
  opacity: number;
  speed: number;
  amplitude: number;
  yOffset: number;
}

const duneLayers: DuneLayer[] = [
  {
    id: 1,
    color: "#2d1b4e", // Roxo profundo
    opacity: 0.9,
    speed: 8,
    amplitude: 30,
    yOffset: 0,
  },
  {
    id: 2,
    color: "#1a0b2e", // Roxo mais escuro
    opacity: 0.7,
    speed: 12,
    amplitude: 20,
    yOffset: 50,
  },
  {
    id: 3,
    color: "#0f0518", // Quase preto
    opacity: 0.8,
    speed: 16,
    amplitude: 40,
    yOffset: 100,
  },
];

// Partículas geradas deterministicamente para evitar hydration mismatch
const generateParticles = () => [
  { id: 0, x: 15, y: 20, size: 2.5, duration: 15, delay: 1 },
  { id: 1, x: 35, y: 45, size: 1.8, duration: 18, delay: 2.5 },
  { id: 2, x: 55, y: 30, size: 3.2, duration: 12, delay: 0.5 },
  { id: 3, x: 75, y: 60, size: 2.0, duration: 20, delay: 3 },
  { id: 4, x: 90, y: 25, size: 1.5, duration: 16, delay: 1.5 },
  { id: 5, x: 10, y: 70, size: 2.8, duration: 14, delay: 4 },
  { id: 6, x: 45, y: 15, size: 1.2, duration: 19, delay: 2 },
  { id: 7, x: 65, y: 80, size: 3.5, duration: 11, delay: 0 },
  { id: 8, x: 25, y: 55, size: 2.2, duration: 17, delay: 3.5 },
  { id: 9, x: 80, y: 40, size: 1.9, duration: 13, delay: 1.2 },
  { id: 10, x: 5, y: 35, size: 2.6, duration: 15, delay: 2.8 },
  { id: 11, x: 50, y: 75, size: 1.6, duration: 18, delay: 4.5 },
  { id: 12, x: 70, y: 10, size: 3.0, duration: 12, delay: 0.8 },
  { id: 13, x: 30, y: 85, size: 2.3, duration: 20, delay: 3.2 },
  { id: 14, x: 95, y: 50, size: 1.4, duration: 16, delay: 1.8 },
  { id: 15, x: 20, y: 5, size: 2.9, duration: 14, delay: 2.2 },
  { id: 16, x: 60, y: 65, size: 1.7, duration: 19, delay: 4.2 },
  { id: 17, x: 40, y: 90, size: 3.3, duration: 11, delay: 0.3 },
  { id: 18, x: 85, y: 15, size: 2.1, duration: 17, delay: 3.8 },
  { id: 19, x: 12, y: 48, size: 1.3, duration: 13, delay: 1.6 },
];

// Componente de partículas de areia digital
function DigitalSandParticles() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const particles = useMemo(() => generateParticles(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/30 blur-[1px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, -100, 0],
            x: [0, 15, -10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedDunesProps {
  className?: string;
}

export default function AnimatedDunes({ className = "" }: AnimatedDunesProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax suave baseado no scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const parallaxValues = [y1, y2, y3];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    >
      {/* Gradient overlay para transição do roxo do hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a0b2e] to-transparent z-10" />

      {duneLayers.map((layer, index) => (
        <motion.div
          key={layer.id}
          className="absolute w-[200%] -left-[50%]"
          style={{
            y: prefersReducedMotion ? 0 : parallaxValues[index],
            bottom: `${layer.yOffset}px`,
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto dune-layer"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={`duneGradient-${layer.id}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor={layer.color}
                  stopOpacity={layer.opacity}
                />
                <stop
                  offset="100%"
                  stopColor={layer.color}
                  stopOpacity={layer.opacity * 0.5}
                />
              </linearGradient>
              {/* Filtro de brilho sutil */}
              <filter id={`duneGlow-${layer.id}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {prefersReducedMotion ? (
              <path
                fill={`url(#duneGradient-${layer.id})`}
                filter={`url(#duneGlow-${layer.id})`}
                d="M0,160 C320,300,420,100,720,160 C1020,220,1120,60,1440,160 L1440,320 L0,320 Z"
              />
            ) : (
              <motion.path
                fill={`url(#duneGradient-${layer.id})`}
                filter={`url(#duneGlow-${layer.id})`}
                d="M0,160 C320,300,420,100,720,160 C1020,220,1120,60,1440,160 L1440,320 L0,320 Z"
                animate={{
                  d: [
                    "M0,160 C320,300,420,100,720,160 C1020,220,1120,60,1440,160 L1440,320 L0,320 Z",
                    "M0,180 C320,80,420,280,720,140 C1020,60,1120,200,1440,140 L1440,320 L0,320 Z",
                    "M0,140 C320,240,420,120,720,180 C1020,140,1120,100,1440,180 L1440,320 L0,320 Z",
                    "M0,160 C320,300,420,100,720,160 C1020,220,1120,60,1440,160 L1440,320 L0,320 Z",
                  ],
                }}
                transition={{
                  duration: layer.speed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </svg>
        </motion.div>
      ))}

      {/* Accent ciano sutil nas bordas */}
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Partículas de "areia digital" flutuando */}
      <DigitalSandParticles />

      {/* Fade out para a logo 3D */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
    </div>
  );
}
