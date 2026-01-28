'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/logomezzold3d.glb');
  const modelRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const timeRef = useRef(0);
  
  useFrame((_, delta) => {
    if (!modelRef.current) return;
    timeRef.current += delta;
    
    const breathe = Math.sin(timeRef.current * 0.8) * 0.025;
    modelRef.current.scale.setScalar(3 + breathe);
    
    const tiltX = Math.sin(timeRef.current * 0.5) * 0.025;
    const tiltZ = Math.cos(timeRef.current * 0.4) * 0.015;
    modelRef.current.rotation.x = tiltX;
    modelRef.current.rotation.z = tiltZ;

    if (materialRef.current) {
      const pulse = (Math.sin(timeRef.current * 2) + 1) * 0.5;
      materialRef.current.emissiveIntensity = 0.3 + pulse * 0.4;
    }
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#0d9488'),
          metalness: 0.9,
          roughness: 0.08,
          envMapIntensity: 3,
          emissive: new THREE.Color('#14b8a6'),
          emissiveIntensity: 0.4,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          reflectivity: 1,
          iridescence: 0.3,
          iridescenceIOR: 1.5,
        });
        child.material = material;
        materialRef.current = material;
      }
    });
  }, [scene]);

  return (
    <Float
      speed={2}
      rotationIntensity={0}
      floatIntensity={0.5}
      floatingRange={[-0.12, 0.12]}
    >
      <group ref={modelRef} scale={3} rotation={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={1} color="#14b8a6" />
      <pointLight position={[0, 4, 4]} intensity={2} color="#06b6d4" />
      <pointLight position={[-3, -2, 3]} intensity={0.8} color="#10b981" />
      <pointLight position={[3, -2, 3]} intensity={0.8} color="#14b8a6" />
      <spotLight 
        position={[0, 5, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={1.5} 
        color="#22d3ee" 
      />
    </>
  );
}

export function MezzoldLogo3D() {
  return (
    <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Model />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: 'radial-gradient(circle at center, rgba(20,184,166,0.15) 0%, transparent 50%)' }}
      />
    </div>
  );
}

useGLTF.preload('/logomezzold3d.glb');
