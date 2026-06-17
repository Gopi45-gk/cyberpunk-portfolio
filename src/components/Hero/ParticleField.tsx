"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const numParticles = 100;
    
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: 0.3 + Math.random() * 0.4,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const repulseRadius = 120;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        
        // Pseudo-random drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Repel from mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let drawX = p.x;
        let drawY = p.y;

        if (distance < repulseRadius) {
          const force = (repulseRadius - distance) / repulseRadius;
          drawX += (dx / distance) * force * 30; // Push amount
          drawY += (dy / distance) * force * 30;
        }

        ctx.fillStyle = `rgba(0, 243, 255, ${p.opacity})`;
        ctx.fillRect(drawX, drawY, 2, 2);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
