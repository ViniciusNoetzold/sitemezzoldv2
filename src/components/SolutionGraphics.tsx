"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export function RotatingCube() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center perspective-1000">
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-24 h-24 preserve-3d"
      >
        {[
          { rotate: "rotateY(0deg)", translate: "translateZ(48px)" },
          { rotate: "rotateY(90deg)", translate: "translateZ(48px)" },
          { rotate: "rotateY(180deg)", translate: "translateZ(48px)" },
          { rotate: "rotateY(270deg)", translate: "translateZ(48px)" },
          { rotate: "rotateX(90deg)", translate: "translateZ(48px)" },
          { rotate: "rotateX(-90deg)", translate: "translateZ(48px)" },
        ].map((side, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-cyan-400/40 bg-cyan-400/5 backdrop-blur-sm"
            style={{
              transform: `${side.rotate} ${side.translate}`,
            }}
          />
        ))}
        {/* Inner wireframe */}
        {[
          { rotate: "rotateY(0deg)", translate: "translateZ(24px)" },
          { rotate: "rotateY(90deg)", translate: "translateZ(24px)" },
          { rotate: "rotateY(180deg)", translate: "translateZ(24px)" },
          { rotate: "rotateY(270deg)", translate: "translateZ(24px)" },
          { rotate: "rotateX(90deg)", translate: "translateZ(24px)" },
          { rotate: "rotateX(-90deg)", translate: "translateZ(24px)" },
        ].map((side, i) => (
          <div
            key={`inner-${i}`}
            className="absolute inset-4 border border-cyan-400/20"
            style={{
              transform: `${side.rotate} ${side.translate}`,
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
      <span className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest">
        Cube_Primitive_Render
      </span>
    </div>
  );
}

export function NetworkConstellation() {
  const nodes = [
    { x: 50, y: 50 },
    { x: 20, y: 30 },
    { x: 80, y: 30 },
    { x: 20, y: 70 },
    { x: 80, y: 70 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden min-h-[250px]">
      <svg className="w-full h-full max-w-[300px] max-h-[300px]" viewBox="0 0 100 100">
        {/* Connection lines */}
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-500/30"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
        
          {/* Pulse travel effect */}
          {nodes.map((node, i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="1"
              fill="#3b82f6"
              initial={{ cx: 50, cy: 50, opacity: 0 }}
              animate={{
                cx: [50, node.x],
                cy: [50, node.y],
                opacity: [0, 1, 0],
              }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              className="fill-blue-500/20 stroke-blue-500"
              strokeWidth="0.5"
              animate={{
                r: [2, 2.5, 2],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              className="fill-blue-500/5 stroke-blue-500/20"
              strokeWidth="0.2"
            />
          </motion.g>
        ))}

        {/* Center node */}
        <motion.g>
          <motion.circle
            cx="50"
            cy="50"
            r="4"
            className="fill-blue-500/40 stroke-blue-400"
            strokeWidth="1"
            animate={{
              scale: [1, 1.2, 1],
              fillOpacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <circle
            cx="50"
            cy="50"
            r="8"
            className="fill-blue-500/10 stroke-blue-500/20"
            strokeWidth="0.5"
          />
        </motion.g>
      </svg>
      <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
      <span className="absolute bottom-4 left-4 text-[10px] font-mono text-blue-400/50 uppercase tracking-widest">
        Nodes: Active
      </span>
    </div>
  );
}

export function SpinningGear() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="relative flex items-center justify-center"
      >
        <Settings className="w-32 h-32 text-emerald-500 stroke-[1]" />
        
        {/* Outer tech circles */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-emerald-500/20 rounded-full"
            style={{
              width: `${100 + i * 30}%`,
              height: `${100 + i * 30}%`,
              borderStyle: i % 2 === 0 ? "solid" : "dashed",
            }}
            animate={{ rotate: i % 2 === 0 ? -360 : 360 }}
            transition={{ duration: 20 / i, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Light trails/pulses */}
        <motion.div
          className="absolute inset-0 border-t-2 border-emerald-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />
      <span className="absolute top-4 left-4 text-[10px] font-mono text-emerald-400/50 uppercase tracking-widest">
        RPM: 6000
      </span>
    </div>
  );
}
