"use client";

import { useRef, useEffect, useCallback } from 'react';

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
}

function mod289(x: number): number {
  return x - Math.floor(x * (1.0 / 289.0)) * 289.0;
}

function permute(x: number): number {
  return mod289(((x * 34.0) + 1.0) * x);
}

function fade(t: number): number {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a);
}

function grad(hash: number, x: number, y: number): number {
  const h = hash & 3;
  const u = h < 2 ? x : y;
  const v = h < 2 ? y : x;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

const perm = new Array(512);
for (let i = 0; i < 256; i++) {
  perm[i] = perm[i + 256] = Math.floor(permute(i)) & 255;
}

function noise2D(x: number, y: number): number {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  
  x -= Math.floor(x);
  y -= Math.floor(y);
  
  const u = fade(x);
  const v = fade(y);
  
  const A = perm[X] + Y;
  const B = perm[X + 1] + Y;
  
  return lerp(
    lerp(grad(perm[A], x, y), grad(perm[B], x - 1, y), u),
    lerp(grad(perm[A + 1], x, y - 1), grad(perm[B + 1], x - 1, y - 1), u),
    v
  );
}

function fbm(x: number, y: number, octaves: number, frequency: number, amplitude: number): number {
  let value = 0;
  let amp = 1.0;
  let freq = frequency;
  
  for (let i = 0; i < octaves; i++) {
    value += amp * Math.abs(noise2D(x * freq, y * freq));
    freq *= 2.0;
    amp *= amplitude;
  }
  
  return value;
}

const bayerMatrix8x8 = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21
].map(v => v / 64);

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.7, 0.1, 1],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.6
}: DitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);
  const animationRef = useRef<number>(0);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const time = timeRef.current;
    const aspectRatio = width / height;

    for (let y = 0; y < height; y += pixelSize) {
      for (let x = 0; x < width; x += pixelSize) {
        let uvX = (x / width - 0.5) * aspectRatio;
        let uvY = y / height - 0.5;

        const offsetX = uvX - time * waveSpeed;
        const offsetY = uvY - time * waveSpeed * 0.5;
        
        const noise1 = fbm(offsetX, offsetY, 4, waveFrequency, waveAmplitude);
        let f = fbm(uvX + noise1 * 0.5, uvY + noise1 * 0.5, 4, waveFrequency, waveAmplitude);

        if (enableMouseInteraction) {
          const mouseX = (mouseRef.current.x - 0.5) * aspectRatio;
          const mouseY = mouseRef.current.y - 0.5;
          const dist = Math.sqrt((uvX - mouseX) ** 2 + (uvY - mouseY) ** 2);
          const effect = 1.0 - Math.min(1, dist / mouseRadius);
          f -= 0.5 * effect * effect;
        }

        f = Math.max(0, Math.min(1, f));

        let r = waveColor[0] * f;
        let g = waveColor[1] * f;
        let b = waveColor[2] * f;

        const bx = Math.floor(x / pixelSize) % 8;
        const by = Math.floor(y / pixelSize) % 8;
        const threshold = bayerMatrix8x8[by * 8 + bx] - 0.25;
        const step = 1.0 / (colorNum - 1);

        r = Math.floor((Math.max(0, Math.min(1, r + threshold * step - 0.2))) * (colorNum - 1) + 0.5) / (colorNum - 1);
        g = Math.floor((Math.max(0, Math.min(1, g + threshold * step - 0.2))) * (colorNum - 1) + 0.5) / (colorNum - 1);
        b = Math.floor((Math.max(0, Math.min(1, b + threshold * step - 0.2))) * (colorNum - 1) + 0.5) / (colorNum - 1);

        for (let py = 0; py < pixelSize && y + py < height; py++) {
          for (let px = 0; px < pixelSize && x + px < width; px++) {
            const idx = ((y + py) * width + (x + px)) * 4;
            data[idx] = r * 255;
            data[idx + 1] = g * 255;
            data[idx + 2] = b * 255;
            data[idx + 3] = 255;
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);

    if (!disableAnimation) {
      timeRef.current += 0.016;
    }
    
    animationRef.current = requestAnimationFrame(render);
  }, [waveSpeed, waveFrequency, waveAmplitude, waveColor, colorNum, pixelSize, disableAnimation, enableMouseInteraction, mouseRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = 0.25;
      canvas.width = Math.floor(rect.width * scale);
      canvas.height = Math.floor(rect.height * scale);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [render]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        imageRendering: 'pixelated',
        pointerEvents: 'none'
      }}
    />
  );
}
