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
    
    const breathe = Math.sin(timeRef.current * 0.8) * 0.04;
    modelRef.current.scale.setScalar(4.5 + breathe);
    
    const tiltX = Math.sin(timeRef.current * 0.5) * 0.03;
    const tiltZ = Math.cos(timeRef.current * 0.4) * 0.02;
    modelRef.current.rotation.x = tiltX;
    modelRef.current.rotation.z = tiltZ;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#ef4444'),
          metalness: 0.85,
          roughness: 0.15,
          envMapIntensity: 2.2,
          emissive: new THREE.Color('#7f1d1d'),
          emissiveIntensity: 0.25,
        });
      }
    });
  }, [scene]);

  return (
    <Float
      speed={2}
      rotationIntensity={0}
      floatIntensity={0.6}
      floatingRange={[-0.15, 0.15]}
    >
      <group ref={modelRef} scale={4.5} rotation={[0, 0, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} color="#ef4444" />
      <pointLight position={[0, 4, 4]} intensity={1.5} color="#ef4444" />
      <pointLight position={[-3, -2, 3]} intensity={0.6} color="#10b981" />
      <pointLight position={[3, -2, 3]} intensity={0.6} color="#06b6d4" />
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
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle at center, rgba(239,68,68,0.2) 0%, transparent 55%)' }}
      />
    </div>
  );
}

useGLTF.preload('/logomezzold3d.glb');
