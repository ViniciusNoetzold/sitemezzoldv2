'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/logomezzold3d.glb');
  const modelRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  
  useFrame((_, delta) => {
    if (!modelRef.current) return;
    timeRef.current += delta;
    const breathe = Math.sin(timeRef.current * 1.2) * 0.015;
    modelRef.current.scale.setScalar(4 + breathe);
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#10b981'),
          metalness: 0.7,
          roughness: 0.25,
          envMapIntensity: 1.8,
          emissive: new THREE.Color('#064e3b'),
          emissiveIntensity: 0.15,
        });
      }
    });
  }, [scene]);

  return (
    <Float
      speed={1.5}
      rotationIntensity={0}
      floatIntensity={0.4}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={modelRef} scale={4} rotation={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#10b981" />
      <pointLight position={[0, 3, 3]} intensity={1} color="#06b6d4" />
      <pointLight position={[0, -3, 2]} intensity={0.5} color="#10b981" />
    </>
  );
}

export function MezzoldLogo3D() {
  return (
    <div className="w-full h-[450px] md:h-[550px] lg:h-[600px] relative mx-auto max-w-5xl">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at center, rgba(16,185,129,0.25) 0%, transparent 55%)' }}
      />
    </div>
  );
}

useGLTF.preload('/logomezzold3d.glb');
