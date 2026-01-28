'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ isHovered, scrollProgress }: { isHovered: boolean; scrollProgress: number }) {
  const { scene } = useGLTF('/logomezzold3d.glb');
  const modelRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    if (!modelRef.current) return;
    
    timeRef.current += delta;
    
    modelRef.current.rotation.y += delta * 0.2;
    
    const breathe = Math.sin(timeRef.current * 1.5) * 0.03;
    const baseScale = 2.5;
    modelRef.current.scale.setScalar(baseScale + breathe);
    
    const scrollRotation = scrollProgress * Math.PI * 2;
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      scrollRotation * 0.3 + (isHovered ? Math.sin(state.clock.elapsedTime * 2) * 0.2 : 0),
      0.08
    );
    modelRef.current.rotation.z = THREE.MathUtils.lerp(
      modelRef.current.rotation.z,
      scrollRotation * 0.2 + (isHovered ? Math.cos(state.clock.elapsedTime * 2) * 0.15 : 0),
      0.08
    );
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#ffffff'),
          metalness: 0.95,
          roughness: 0.05,
          envMapIntensity: 2,
        });
      }
    });
  }, [scene]);

  return (
    <Float
      speed={isHovered ? 5 : 2.5}
      rotationIntensity={isHovered ? 1 : 0.4}
      floatIntensity={isHovered ? 1.5 : 0.6}
    >
      <group ref={modelRef} scale={2.5}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 5, 0]} intensity={1.5} color="#10b981" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#06b6d4" />
      <spotLight position={[5, 10, 7]} angle={0.3} penumbra={1} intensity={2.5} color="#ffffff" castShadow />
    </>
  );
}

export function MezzoldLogo3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const progress = Math.max(0, Math.min(1, 1 - (elementCenter / windowHeight)));
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isOver = e.clientX >= rect.left && e.clientX <= rect.right &&
                     e.clientY >= rect.top && e.clientY <= rect.bottom;
      setIsHovered(isOver);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[350px] md:h-[400px] lg:h-[450px] relative mx-auto max-w-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Model isHovered={isHovered} scrollProgress={scrollProgress} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
        style={{ background: 'radial-gradient(circle at center, rgba(6,182,212,0.2) 0%, transparent 60%)' }}
      />
    </div>
  );
}

useGLTF.preload('/logomezzold3d.glb');
