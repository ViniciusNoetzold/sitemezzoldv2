'use client';

import { Suspense, useRef, useEffect, useState, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function FallbackMesh() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial wireframe color="#ff1744" />
    </mesh>
  );
}

function AnimatedLogo({ progress, isMobile }: { progress: number; isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/hitem3d.glb');

  const multiplier = isMobile ? 0.6 : 1;
  const baseScale = 2.2 * multiplier;
  const peakScale = 3.5 * multiplier;
  const endScale = 2.8 * multiplier;

  const scaleRef = useRef(baseScale);
  const rotYRef = useRef(0);
  const rotXRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const t1 = Math.min(progress / 0.5, 1);
    const t2 = Math.max(0, (progress - 0.5) / 0.5);

    const targetScale = progress <= 0.5
      ? baseScale + t1 * (peakScale - baseScale)
      : peakScale - t2 * (peakScale - endScale);

    const targetRotY = progress <= 0.5
      ? t1 * Math.PI * 2
      : Math.PI * 2 + t2 * Math.PI * 0.25;

    const targetRotX = progress > 0.5 ? t2 * Math.PI * 0.1 : 0;

    const damp = 5 * delta;
    scaleRef.current += (targetScale - scaleRef.current) * damp;
    rotYRef.current += (targetRotY - rotYRef.current) * damp;
    rotXRef.current += (targetRotX - rotXRef.current) * damp;

    groupRef.current.scale.setScalar(scaleRef.current);
    groupRef.current.rotation.y = rotYRef.current;
    groupRef.current.rotation.x = rotXRef.current;
  });

  const clonedScene = scene.clone();

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
}

function SceneContent({ progress, isMobile }: { progress: number; isMobile: boolean }) {
  return (
    <>
      <Environment preset="studio" environmentIntensity={1.5} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ff1744" />
      <directionalLight position={[-5, -5, 5]} intensity={0.8} color="#00e5ff" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#e040fb" />
      <AnimatedLogo progress={progress} isMobile={isMobile} />
    </>
  );
}

function calcProgress(container: HTMLDivElement): number {
  const rect = container.getBoundingClientRect();
  const scrollable = container.offsetHeight - window.innerHeight;
  const scrolled = -rect.top;
  return Math.max(0, Math.min(1, scrolled / scrollable));
}

export function LogoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReady(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const onScroll = () => {
      if (containerRef.current) {
        setProgress(calcProgress(containerRef.current));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ready]);

  if (!ready) return null;

  return (
    <div
      ref={containerRef}
      className="relative z-10 block overflow-hidden"
      style={{ height: '200vh', marginBottom: '-100vh', paddingBottom: 0 }}
    >
      <div className="sticky top-0 w-full h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <ErrorBoundary fallback={<div className="w-full h-full bg-black" />}>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              dpr={[1, 2]}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: false,
              }}
              onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
              }}
            >
              <Suspense fallback={<FallbackMesh />}>
                <SceneContent progress={progress} isMobile={isMobile} />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload('/hitem3d.glb');
