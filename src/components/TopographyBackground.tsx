'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

// Compact Simplex Noise-like function for performance
const createNoise = () => {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  const perm = new Uint8Array(512);
  perm.set(p);
  perm.set(p, 256);

  const grad2 = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  return (x: number, y: number) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = x * x * x * (x * (x * 6 - 15) + 10);
    const v = y * y * y * (y * (y * 6 - 15) + 10);
    const a = perm[X] + Y, b = perm[X + 1] + Y;

    const lerp = (t: number, a: number, b: number) => a + t * (b - a);
    const dot = (g: number[], x: number, y: number) => g[0] * x + g[1] * y;

    return lerp(v, 
      lerp(u, dot(grad2[perm[a] % 8], x, y), dot(grad2[perm[b] % 8], x - 1, y)),
      lerp(u, dot(grad2[perm[a + 1] % 8], x, y - 1), dot(grad2[perm[b + 1] % 8], x - 1, y - 1))
    );
  };
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function TopographyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const interactionRef = useRef({ x: -1000, y: -1000 });
  const orientationRef = useRef({ x: 0, y: 0 });
  const ripplesRef = useRef<Array<{ x: number; y: number; start: number }>>([]);
  const isTouchRef = useRef(false);
  const isMobileRef = useRef(false);
  const { scrollY } = useScroll();
  const [noise] = useState(() => createNoise());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let time = 0;

    isTouchRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(ratio, ratio);
      isMobileRef.current = width < 768;
    };

    const handleMouseMove = (e: MouseEvent) => {
      interactionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta == null || event.gamma == null) return;
      const normalizedX = clamp(event.gamma / 30, -1, 1);
      const normalizedY = clamp(event.beta / 30, -1, 1);
      orientationRef.current = { x: normalizedX, y: normalizedY };
    };

    const handleTouch = (event: TouchEvent) => {
      const now = performance.now();
      Array.from(event.touches).forEach((touch) => {
        ripplesRef.current.push({ x: touch.clientX, y: touch.clientY, start: now });
      });
      if (ripplesRef.current.length > 20) {
        ripplesRef.current = ripplesRef.current.slice(-20);
      }
    };

    window.addEventListener('resize', handleResize);
    if (!isTouchRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    handleResize();

    // Data for layers
    const particleCount = isMobileRef.current ? 40 : 80;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 1,
    }));

    const shardCount = isMobileRef.current ? 12 : 25;
    const shards = Array.from({ length: shardCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01,
      type: Math.floor(Math.random() * 3), // 0: triangle, 1: square, 2: crosshair
    }));

      const draw = () => {
        time += 0.005;
        const scrollVal = scrollY.get();
        const isTouch = isTouchRef.current;
        const tilt = orientationRef.current;
        const interactionX = isTouch ? width / 2 + tilt.x * width * 0.18 : interactionRef.current.x;
        const interactionY = isTouch ? height / 2 + tilt.y * height * 0.18 : interactionRef.current.y;
        const tiltOffsetX = isTouch ? tilt.x * 18 : 0;
        const tiltOffsetY = isTouch ? tilt.y * 18 : 0;
        
        // Clear background
        ctx.fillStyle = '#0a0a0a'; 
        ctx.fillRect(0, 0, width, height);

      // Pulse effect colors
      const pulse = (Math.sin(time * 2) + 1) / 2;
      const redColor = `rgba(255, 20, 20, ${0.1 + pulse * 0.1})`;
      const cyanColor = `rgba(20, 255, 255, ${0.1 + (1 - pulse) * 0.1})`;
      
      const mouse = { x: interactionX, y: interactionY };

      // --- Layer 2: Hex Grid & Shards (Medium) ---
      const hexSize = 50;
      const hexW = hexSize * Math.sqrt(3);
      const hexH = hexSize * 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 0.5;
      
      const gridXOffset = (scrollVal * 0.2) % hexW;
      const gridYOffset = (scrollVal * 0.2) % hexH;
      
      ctx.beginPath();
      for (let y = -hexH * 2; y < height + hexH * 2; y += hexH) {
        for (let x = -hexW * 2; x < width + hexW * 2; x += hexW) {
          const xPos = x + (Math.floor(y / hexH) % 2 === 0 ? hexW / 2 : 0) + gridXOffset + tiltOffsetX;
          const yPos = y + gridYOffset + tiltOffsetY;

          ctx.moveTo(xPos - 5, yPos);
          ctx.lineTo(xPos + 5, yPos);
          ctx.moveTo(xPos, yPos - 5);
          ctx.lineTo(xPos, yPos + 5);
        }
      }
      ctx.stroke();

      // Data Shards
      shards.forEach(shard => {
        shard.rotation += shard.vr;
        const shardParallax = scrollVal * 0.2;
        const currentY = (shard.y - shardParallax + height * 10) % height;
        
        const dx = shard.x + tiltOffsetX - mouse.x;
        const dy = currentY + tiltOffsetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.save();
        ctx.translate(shard.x + tiltOffsetX, currentY + tiltOffsetY);
        ctx.rotate(shard.rotation);
        
        const inSpotlight = dist < 300;
        const opacity = inSpotlight ? 0.15 : 0.04;
        ctx.strokeStyle = inSpotlight ? (pulse > 0.5 ? redColor : cyanColor) : `rgba(255, 255, 255, ${opacity})`;
        
        ctx.beginPath();
        if (shard.type === 0) { // Triangle
          ctx.moveTo(0, -shard.size / 2);
          ctx.lineTo(shard.size / 2, shard.size / 2);
          ctx.lineTo(-shard.size / 2, shard.size / 2);
          ctx.closePath();
        } else if (shard.type === 1) { // Square
          ctx.rect(-shard.size / 3, -shard.size / 3, shard.size * 0.6, shard.size * 0.6);
        } else { // Crosshair
          ctx.moveTo(-shard.size / 2, 0); ctx.lineTo(shard.size / 2, 0);
          ctx.moveTo(0, -shard.size / 2); ctx.lineTo(0, shard.size / 2);
        }
        ctx.stroke();
        ctx.restore();
      });

      // --- Layer 3: Particles & Connections (Fast) ---
      ctx.lineWidth = 1;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const particleY = (p.y - scrollVal * 0.4 + height * 10) % height;
        const dx = p.x + tiltOffsetX - mouse.x;
        const dy = particleY + tiltOffsetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const inSpotlight = dist < 300;
        
        if (inSpotlight) {
          ctx.strokeStyle = (pulse > 0.5 ? redColor : cyanColor).replace(/[^,]+(?=\))/, (0.2 * (1 - dist / 300)).toString());
          ctx.beginPath();
          ctx.moveTo(p.x + tiltOffsetX, particleY + tiltOffsetY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = inSpotlight ? (pulse > 0.5 ? redColor : cyanColor) : `rgba(255, 255, 255, 0.15)`;
        ctx.beginPath();
        ctx.arc(p.x + tiltOffsetX, particleY + tiltOffsetY, p.size * (inSpotlight ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fill();
      });

      // Global Spotlight Effect
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
      grad.addColorStop(0, pulse > 0.5 ? 'rgba(255, 20, 20, 0.05)' : 'rgba(20, 255, 255, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Touch Ripples
      const now = performance.now();
      const rippleDuration = 1200;
      const rippleMaxRadius = 140;
      ripplesRef.current = ripplesRef.current.filter((ripple) => now - ripple.start < rippleDuration);
      ripplesRef.current.forEach((ripple) => {
        const age = (now - ripple.start) / rippleDuration;
        const radius = rippleMaxRadius * age;
        const alpha = (1 - age) * 0.35;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      });


      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isTouchRef.current) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(animationFrameId);
    };
  }, [noise, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none"
    />
  );
}
