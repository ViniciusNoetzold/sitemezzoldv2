'use client';

import { Suspense, useState, useEffect, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { Logo3D } from './Logo3D';

interface Scene3DProps {
  progress?: any;
  children?: ReactNode;
}

export function Scene3D({ progress, children }: Scene3DProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" environmentIntensity={1.5} />
          
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1} 
            color="#ff1744"
          />
          <directionalLight 
            position={[-5, -5, 5]} 
            intensity={0.8} 
            color="#00e5ff"
          />
          <pointLight 
            position={[0, 0, 3]} 
            intensity={0.5} 
            color="#e040fb"
          />
          
          <Logo3D isMobile={isMobile} progress={progress} />
          
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
