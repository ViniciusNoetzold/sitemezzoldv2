import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AnimatedNetwork() {
  const nodes = [
    { x: 100, y: 100 },
    { x: 300, y: 80 },
    { x: 400, y: 200 },
    { x: 250, y: 350 },
    { x: 100, y: 300 },
    { x: 250, y: 200 }, // Center node
  ];

  const connections = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0]
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative bg-transparent">
       <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] text-blue-400/50 font-mono">
          NODES: ACTIVE
        </div>
    </div>
  );

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative bg-transparent">
      <svg width="100%" height="100%" viewBox="0 0 500 400" className="max-w-[400px]">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Connections */}
        {connections.map(([start, end], i) => (
          <g key={i}>
            <line
              x1={nodes[start].x}
              y1={nodes[start].y}
              x2={nodes[end].x}
              y2={nodes[end].y}
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
            />
              <motion.circle
                r="2"
                fill="#3b82f6"
                filter="url(#glow)"
                cx={nodes[start].x}
                cy={nodes[start].y}
                animate={{ 
                  cx: [nodes[start].x, nodes[end].x],
                  cy: [nodes[start].y, nodes[end].y],
                  opacity: [0, 1, 0]
                }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          </g>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g 
            key={i}
            animate={{ 
              x: [0, Math.sin(i) * 5, 0],
              y: [0, Math.cos(i) * 5, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
              <circle
                cx={node.x}
                cy={node.y}
                r={i === 5 ? 8 : 4}
                fill={i === 5 ? "#38bdf8" : "#0ea5e9"}
                filter="url(#glow)"
              />
              {i === 5 && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  fill="none"
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
          </motion.g>
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] text-blue-400/50 font-mono">
        NODES: ACTIVE
      </div>
    </div>
  );
}
