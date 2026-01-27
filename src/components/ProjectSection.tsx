'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ProjectSectionProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  accentColor: string;
  reverse?: boolean;
}

export function ProjectSection({ title, description, image, stack, accentColor, reverse = false }: ProjectSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      <div className={`container px-6 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        {/* Text Content */}
        <motion.div 
          style={{ y, opacity }}
          className="flex-1 space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-6xl md:text-8xl font-black tracking-tighter text-white"
            >
              {title}
            </motion.h2>
            <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}` }} />
          </div>
          
          <p className="text-xl text-white/60 max-w-xl leading-relaxed">
            {description}
          </p>
  
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span 
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
  
        {/* Image / Mockup with 3D Tilt */}
        <motion.div 
          style={{ y: imageY, opacity }}
          className="flex-1 relative group perspective-1000"
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 blur-[120px] opacity-20 transition-all duration-700 group-hover:opacity-50"
            style={{ backgroundColor: accentColor }}
          />
          
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative glass rounded-2xl overflow-hidden border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] transform-style-3d cursor-pointer"
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Chromatic Glow Border */}
            <div 
              className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ boxShadow: `inset 0 0 40px ${accentColor}20` }}
            />
          </motion.div>
        </motion.div>
      </div>
  
      {/* Background Topography Accent */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 pointer-events-none"
        style={{ 
          backgroundColor: accentColor,
          left: reverse ? '75%' : '-15%'
        }}
      />
    </section>
  );
}

