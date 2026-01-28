'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
  isMobile: boolean;
  progress?: any;
}

export function Logo3D({ isMobile, progress }: Logo3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/hitem3d.glb');
  const { viewport } = useThree();
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Use external progress if provided, otherwise default to 0
    const scrollOffset = progress ? progress.get() : 0;
    
    const baseScale = isMobile ? 1.8 : 2.5;
    const minScale = isMobile ? 0.4 : 0.5;
    
    const heroEndX = isMobile ? 0 : viewport.width * 0.25;
    const heroEndY = isMobile ? viewport.height * 0.1 : 0;
    
    const navX = isMobile ? -viewport.width * 0.35 : -viewport.width * 0.42;
    const navY = viewport.height * 0.38;
    const navZ = -3;
    
    let targetX: number, targetY: number, targetZ: number, targetScale: number;
    let scrollRotationY = 0;
    
    if (scrollOffset < 0.5) {
      const t = scrollOffset / 0.5;
      const easeT = 1 - Math.pow(1 - t, 3);
      
      targetX = THREE.MathUtils.lerp(0, heroEndX, easeT);
      targetY = THREE.MathUtils.lerp(0, heroEndY, easeT);
      targetZ = THREE.MathUtils.lerp(0, -1, easeT);
      targetScale = THREE.MathUtils.lerp(baseScale, baseScale * 0.7, easeT);
      
      scrollRotationY = easeT * Math.PI * 0.5;
    } else {
      const t = (scrollOffset - 0.5) / 0.5;
      const easeT = 1 - Math.pow(1 - t, 3);
      
      targetX = THREE.MathUtils.lerp(heroEndX, navX, easeT);
      targetY = THREE.MathUtils.lerp(heroEndY, navY, easeT);
      targetZ = THREE.MathUtils.lerp(-1, navZ, easeT);
      targetScale = THREE.MathUtils.lerp(baseScale * 0.7, minScale, easeT);
      
      scrollRotationY = Math.PI * 0.5 + easeT * Math.PI * 0.5;
    }
    
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      delta * 3
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      delta * 3
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      delta * 3
    );
    
    const currentScale = groupRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 3);
    groupRef.current.scale.setScalar(newScale);
    
    const time = state.clock.elapsedTime;
    const floatY = Math.sin(time * 0.8) * 0.05;
    groupRef.current.position.y += floatY;
    
    const constantRotation = time * 0.3;
    
    targetRotation.current.x = mousePos.y * 0.15;
    targetRotation.current.y = mousePos.x * 0.15;
    
    currentRotation.current.x = THREE.MathUtils.lerp(
      currentRotation.current.x,
      targetRotation.current.x,
      delta * 2
    );
    currentRotation.current.y = THREE.MathUtils.lerp(
      currentRotation.current.y,
      targetRotation.current.y,
      delta * 2
    );
    
    groupRef.current.rotation.x = currentRotation.current.x;
    groupRef.current.rotation.y = constantRotation + scrollRotationY + currentRotation.current.y;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.3}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

if (typeof window !== 'undefined') {
  useGLTF.preload('/hitem3d.glb');
}
