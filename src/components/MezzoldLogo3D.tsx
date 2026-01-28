'use client';

import { Suspense, useState, useEffect, ReactNode, Component } from 'react';
import dynamic from 'next/dynamic';

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

function LogoFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl bg-transparent">
        <LogoFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative mx-auto max-w-4xl bg-transparent overflow-hidden">
      <ErrorBoundary fallback={<LogoFallback />}>
        <Suspense fallback={<LogoFallback />}>
          <ThreeCanvas />
        </Suspense>
      </ErrorBoundary>
      
        {/* Decorative gradient glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(204,251,241,0.2) 0%, transparent 60%)' 
          }}
        />
    </div>
  );
}
