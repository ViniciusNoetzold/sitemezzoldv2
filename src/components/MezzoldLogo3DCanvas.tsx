'use client';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/logomezzold3d.glb');
  const modelRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const timeRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotation = useRef(new THREE.Euler(0, 0, 0));
  const targetScale = useRef(3);
  
  const { viewport } = useThree();
  
  useFrame((state, delta) => {
    if (!modelRef.current) return;
    timeRef.current += delta;
    
    // Animação constante (Idle)
    const breathe = Math.sin(timeRef.current * 0.4) * 0.05;
    const idleTiltX = Math.sin(timeRef.current * 0.3) * 0.1;
    const idleTiltY = Math.cos(timeRef.current * 0.4) * 0.1;
    const idleTiltZ = Math.cos(timeRef.current * 0.2) * 0.05;

    if (isDragging) {
      // Interatividade: Seguir o mouse
      targetRotation.current.x = -mouseRef.current.y * 1.5;
      targetRotation.current.y = mouseRef.current.x * 1.5;
      targetScale.current = 3.5; // Aumenta ao segurar
    } else {
      // Retornar ao original com o idle
      targetRotation.current.x = idleTiltX;
      targetRotation.current.y = idleTiltY;
      targetRotation.current.z = idleTiltZ;
      targetScale.current = 3 + breathe;
    }

    // Suavização (Lerp)
    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetRotation.current.x, delta * 5);
    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotation.current.y, delta * 5);
    modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, targetRotation.current.z, delta * 5);
    
    const currentScale = modelRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale.current, delta * 5);
    modelRef.current.scale.setScalar(newScale);

    if (materialRef.current) {
      const pulse = (Math.sin(timeRef.current * 1.2) + 1) * 0.5;
      materialRef.current.emissiveIntensity = 0.3 + pulse * 0.4 + (isDragging ? 0.5 : 0);
    }
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  const handlePointerMove = (e: any) => {
    if (isDragging) {
      // Normalizar coordenadas do mouse (-1 a 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current = { x, y };
    }
  };

  useEffect(() => {
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#ffffff'),
            metalness: 0.8,
            roughness: 0.12,
            envMapIntensity: 4,
            emissive: new THREE.Color('#e2e8f0'),
            emissiveIntensity: 0.2,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
            reflectivity: 1,
          });
          child.material = material;
          materialRef.current = material;
        }
      });
    }, [scene]);

    return (
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.8}
        floatingRange={[-0.15, 0.15]}
      >
        <group 
          ref={modelRef} 
          scale={3} 
          rotation={[0, 0, 0]}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <primitive object={scene} />
        </group>
      </Float>
    );
  }

  function Lights() {
    return (
      <>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-5, 3, -5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 4, 4]} intensity={3} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={1.5} color="#ccfbf1" />
        <pointLight position={[3, -2, 3]} intensity={1.5} color="#ccfbf1" />
        <spotLight 
          position={[0, 5, 0]} 
          angle={0.5} 
          penumbra={1} 
          intensity={2} 
          color="#ffffff" 
        />
      </>
    );
  }

export function MezzoldLogo3DCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: true
      }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Model />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/logomezzold3d.glb');
