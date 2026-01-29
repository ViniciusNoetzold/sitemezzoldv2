"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshBasicMaterial transparent opacity={0} />
      <Edges scale={1} threshold={15} color="#00ffff" />
      <meshBasicMaterial color="#00ffff" wireframe opacity={0.1} transparent />
    </mesh>
  );
}

export function AnimatedCube() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Cube />
      </Canvas>
      <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] text-cyan-400/50 font-mono">
        CUBE_PRIMITIVE_RENDER
      </div>
      <div className="absolute top-4 left-4 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
