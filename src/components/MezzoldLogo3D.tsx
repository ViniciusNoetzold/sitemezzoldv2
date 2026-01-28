'use client';

import { Suspense, useRef, useEffect, useState, Component, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
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

function LogoFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center animate-pulse">
          <span className="text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">M</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-xl animate-pulse" />
      </div>
    </div>
  );
}

const ThreeCanvas = dynamic(
  () => import('./MezzoldLogo3DCanvas').then(mod => ({ default: mod.MezzoldLogo3DCanvas })),
  {
    ssr: false,
    loading: () => <LogoFallback />,
  }
);

export function MezzoldLogo3D() {
  const [mounted, setMounted] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl">
        <LogoFallback />
      </div>
    );
  }

  if (!webGLSupported) {
    return (
      <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl">
        <LogoFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl">
      <ErrorBoundary fallback={<LogoFallback />}>
        <ThreeCanvas />
      </ErrorBoundary>
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: 'radial-gradient(circle at center, rgba(20,184,166,0.15) 0%, transparent 50%)' }}
      />
    </div>
  );
}
