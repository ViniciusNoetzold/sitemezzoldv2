'use client';

import { motion } from 'framer-motion';

interface RotatingGeometryProps {
  type: 'sphere' | 'cube' | 'torus';
  color: string;
}

export function RotatingGeometry({ type, color }: RotatingGeometryProps) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <motion.div
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360]
        }}
        transition={{ 
          duration: 10 + Math.random() * 5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="relative w-full h-full preserve-3d"
      >
        {type === 'sphere' && (
          <>
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute inset-0 border border-current rounded-full opacity-40"
                style={{
                  color: color,
                  transform: `rotateX(${i * 45}deg)`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute inset-0 border border-current rounded-full opacity-40"
                style={{
                  color: color,
                  transform: `rotateY(${i * 45}deg)`,
                }}
              />
            ))}
          </>
        )}
        
        {type === 'cube' && (
          <div className="w-8 h-8 relative preserve-3d top-4 left-4">
            {[
              { rotate: 'rotateY(0deg)', translate: 'translateZ(16px)' },
              { rotate: 'rotateY(90deg)', translate: 'translateZ(16px)' },
              { rotate: 'rotateY(180deg)', translate: 'translateZ(16px)' },
              { rotate: 'rotateY(270deg)', translate: 'translateZ(16px)' },
              { rotate: 'rotateX(90deg)', translate: 'translateZ(16px)' },
              { rotate: 'rotateX(-90deg)', translate: 'translateZ(16px)' },
            ].map((side, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-current opacity-40 bg-current/5"
                style={{
                  color: color,
                  transform: `${side.rotate} ${side.translate}`,
                }}
              />
            ))}
          </div>
        )}

        {type === 'torus' && (
          <div className="relative w-full h-full">
             {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-8 h-8 border border-current rounded-full opacity-40"
                style={{
                  color: color,
                  transform: `translate(-50%, -50%) rotateY(${i * 45}deg) translateZ(12px)`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
      
      {/* Glow */}
      <div 
        className="absolute inset-0 blur-xl opacity-20 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
