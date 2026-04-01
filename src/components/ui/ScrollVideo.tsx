'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollVideoProps {
  src: string;
  className?: string;
}

export function ScrollVideo({ src, className = '' }: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafId = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress [0, 1] to a normalized time value
  const videoTime = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const updateVideoTime = useCallback((progress: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    // Cancel any pending animation frame
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const targetTime = clampedProgress * video.duration;

      // Only update if difference is meaningful (avoids micro-jitter)
      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        video.currentTime = targetTime;
      }
    });
  }, []);

  useMotionValueEvent(videoTime, 'change', updateVideoTime);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload the video metadata so duration is available
    video.preload = 'auto';
    video.load();

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain pointer-events-none select-none"
        style={{ willChange: 'contents' }}
      />
    </div>
  );
}
