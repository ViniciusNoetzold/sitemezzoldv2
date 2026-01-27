## Project Summary
Mezzold Studio is a premium landing page for a high-performance software house specializing in SaaS and digital dashboards. The site features an ultra-modern aesthetic with glassmorphism, dynamic accents (Electric Red and Emerald Green), and smooth animations.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Architecture
- `src/components/`: Modular UI components (Navbar, Hero, Portfolio, Services, Footer)
- `src/app/globals.css`: Visual identity and design tokens (Electric Red, Emerald Green, Glassmorphism utilities)
- `src/app/page.tsx`: Main landing page assembly with scroll progress and layout

## User Preferences
- Sleek Dark Mode foundation
- Glassmorphism cards
- Electric Red and Emerald Green/Cyan accents
- High-animation (GSAP-style reveal, hover micro-interactions, 3D tilt)
- Smooth-scroll feel

## Project Guidelines
- Keep components as modular as possible
- Use Framer Motion for all interactive animations
- Maintain a premium, Awwwards-style aesthetic
- Minimize 'use client' by isolating interactive logic

## Common Patterns
- Reveal animations on scroll for all major sections
- Hover states with scale and glow effects
- Bento Grid layout for portfolio showcasing
