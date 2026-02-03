"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ProcessBackground() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 80);
      mouseY.set((e.clientY - centerY) / 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#040404]" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#040404]">
      {/* Grid com perspectiva */}
      <motion.div
        className="absolute inset-0"
        style={{ x: springX, y: springY }}
      >
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45, 27, 78, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45, 27, 78, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Grid com perspectiva 3D */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[20%] opacity-[0.12]"
          style={{ 
            x: springX,
            y: springY,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `
                linear-gradient(rgba(45, 27, 78, 1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(45, 27, 78, 1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'perspective(800px) rotateX(55deg)',
              transformOrigin: 'center top',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* Linhas horizontais pulsantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full"
            style={{ 
              top: `${15 + i * 14}%`,
              background: `linear-gradient(90deg, transparent 0%, rgba(45, 27, 78, 0.4) 20%, rgba(0, 212, 255, 0.15) 50%, rgba(45, 27, 78, 0.4) 80%, transparent 100%)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1.05, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Linhas verticais sutis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`vline-${i}`}
            className="absolute w-px h-full"
            style={{ 
              left: `${20 + i * 20}%`,
              background: `linear-gradient(180deg, transparent 0%, rgba(45, 27, 78, 0.3) 30%, rgba(45, 27, 78, 0.3) 70%, transparent 100%)`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Pontos de interseção com brilho ciano */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: 20, y: 25 },
          { x: 40, y: 45 },
          { x: 60, y: 30 },
          { x: 80, y: 55 },
          { x: 30, y: 70 },
          { x: 70, y: 75 },
          { x: 50, y: 20 },
          { x: 15, y: 50 },
          { x: 85, y: 40 },
          { x: 45, y: 85 },
        ].map((pos, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          >
            <motion.div
              className="relative"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
              <div 
                className="absolute inset-0 w-1.5 h-1.5 rounded-full blur-sm"
                style={{ background: i % 3 === 0 ? 'rgba(0, 212, 255, 0.5)' : 'rgba(168, 85, 247, 0.4)' }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Partículas flutuantes ascendentes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              bottom: '-5%',
              background: i % 2 === 0 ? 'rgba(0, 212, 255, 0.4)' : 'rgba(168, 85, 247, 0.3)',
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.6, 0],
              x: [0, (i % 2 === 0 ? 20 : -20)],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Glow central sutil */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(45, 27, 78, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Vinheta para escurecer bordas */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(4, 4, 4, 0.9) 100%)',
        }}
      />

      {/* Gradiente superior para transição suave */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #040404 0%, transparent 100%)',
        }}
      />

      {/* Gradiente inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #040404 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
