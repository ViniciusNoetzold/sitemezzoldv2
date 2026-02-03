"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProcessBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#030305]" />;
  }

  return (
    <div className="absolute inset-0 bg-[#030305] overflow-hidden">
      {/* Blob 1 - Roxo Grande (Esquerda) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(88, 28, 135, 0.35) 0%, rgba(88, 28, 135, 0.1) 40%, transparent 70%)",
          left: "-15%",
          top: "10%",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Ciano (Direita) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.18) 0%, rgba(0, 212, 255, 0.05) 40%, transparent 70%)",
          right: "-10%",
          bottom: "5%",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blob 3 - Roxo Escuro Central */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(45, 27, 78, 0.5) 0%, rgba(45, 27, 78, 0.15) 40%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 4 - Ciano Superior */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 60%)",
          left: "20%",
          top: "-10%",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 50, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Blob 5 - Roxo Inferior Direito */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(139, 69, 199, 0.2) 0%, rgba(88, 28, 135, 0.08) 40%, transparent 70%)",
          right: "10%",
          top: "30%",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Blob 6 - Mini Accent Ciano */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 60%)",
          left: "60%",
          bottom: "20%",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #030305 0%, transparent 100%)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #030305 0%, transparent 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(3, 3, 5, 0.7) 100%)",
        }}
      />
    </div>
  );
}
