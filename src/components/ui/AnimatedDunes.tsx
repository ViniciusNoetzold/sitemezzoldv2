"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

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
            y: [0, -80, 0],
            x: [0, 10, -10, 0],
            opacity: [0, 0.5, 0],
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

export default function AnimatedDunes() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0 }}
    >
      {/* Gradiente de transição do hero roxo */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1a0b2e] to-transparent" />
      
      {/* Container das dunas */}
      <div className="absolute inset-0">
        {/* Camada 1 - Fundo (mais escura, mais lenta) */}
        <motion.div
          className="absolute bottom-0 w-[200%] -left-[50%]"
          animate={prefersReducedMotion ? {} : {
            x: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 1440 400" className="w-full h-96" preserveAspectRatio="none">
            <defs>
              <linearGradient id="duneGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0f0518" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0f0518" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 C240,350 480,100 720,200 C960,300 1200,150 1440,200 L1440,400 L0,400 Z"
              fill="url(#duneGrad1)"
            />
          </svg>
        </motion.div>

        {/* Camada 2 - Meio */}
        <motion.div
          className="absolute bottom-0 w-[200%] -left-[50%]"
          animate={prefersReducedMotion ? {} : {
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 1440 350" className="w-full h-80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a0b2e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1a0b2e" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,150 C360,280 540,80 720,180 C900,280 1080,120 1440,180 L1440,350 L0,350 Z"
              fill="url(#duneGrad2)"
            />
          </svg>
        </motion.div>

        {/* Camada 3 - Frente (mais visível, mais rápida) */}
        <motion.div
          className="absolute bottom-0 w-[200%] -left-[50%]"
          animate={prefersReducedMotion ? {} : {
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 1440 300" className="w-full h-64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="duneGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d1b4e" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2d1b4e" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 C180,220 360,60 540,140 C720,220 900,80 1080,160 C1260,240 1350,120 1440,160 L1440,300 L0,300 Z"
              fill="url(#duneGrad3)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Partículas de areia digital */}
      <DigitalSandParticles />

      {/* Fade para preto no final (antes da logo 3D) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
