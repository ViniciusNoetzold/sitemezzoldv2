'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ isHovered }: { isHovered: boolean }) {
  const { scene } = useGLTF('/logomezzold3d.glb');
  const modelRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (!modelRef.current) return;
    
    timeRef.current += delta;
    modelRef.current.rotation.y += delta * 0.15;
    
    const breathe = Math.sin(timeRef.current * 1.5) * 0.02;
    modelRef.current.scale.setScalar(2.2 + breathe);
    
    if (isHovered) {
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        Math.sin(state.clock.elapsedTime * 2) * 0.15,
        0.1
      );
      modelRef.current.rotation.z = THREE.MathUtils.lerp(
        modelRef.current.rotation.z,
        Math.cos(state.clock.elapsedTime * 2) * 0.1,
        0.1
      );
    } else {
      modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, 0, 0.05);
      modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, 0, 0.05);
    }
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#ffffff'),
          metalness: 0.9,
          roughness: 0.1,
          envMapIntensity: 1.5,
        });
      }
    });
  }, [scene]);

  return (
    <Float
      speed={isHovered ? 4 : 2}
      rotationIntensity={isHovered ? 0.8 : 0.3}
      floatIntensity={isHovered ? 1.2 : 0.5}
    >
      <group ref={modelRef} scale={2.2}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 5, 0]} intensity={1} color="#10b981" />
      <spotLight position={[5, 10, 7]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" castShadow />
    </>
  );
}

export function MezzoldLogo3D() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isOver = e.clientX >= rect.left && e.clientX <= rect.right &&
                     e.clientY >= rect.top && e.clientY <= rect.bottom;
      setIsHovered(isOver);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Model isHovered={isHovered} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
      />
    </div>
  );
}

useGLTF.preload('/logomezzold3d.glb');
