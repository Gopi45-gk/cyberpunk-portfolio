"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const trails = trailsRef.current;
      
      if (!cursor || trails.length === 0) return;

      // Ensure cursor visibility
      gsap.set([cursor, ...trails], { opacity: 1 });

      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        
        // Move main cursor instantly
        gsap.to(cursor, {
          x: clientX,
          y: clientY,
          duration: 0.1,
          ease: "power2.out"
        });

        // Move trails with lag
        trails.forEach((trail, i) => {
          gsap.to(trail, {
            x: clientX,
            y: clientY,
            duration: 0.4,
            delay: i * 0.04,
            ease: "power2.out"
          });
        });
      };

      const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest("a, button, input, textarea, select, .clickable");
        
        if (isClickable) {
          gsap.to(cursor, {
            scale: 2.33, // 12px -> 28px
            backgroundColor: "rgba(0, 243, 255, 0.15)",
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseover", onMouseOver);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseover", onMouseOver);
      };
    });

    return () => ctx.revert();
  }, []);

  // Use fixed positions and center transform to align accurately with mouse coordinates
  const circleBase = "fixed top-0 left-0 rounded-full pointer-events-none z-[9999] opacity-0 -translate-x-1/2 -translate-y-1/2";

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`${circleBase} w-3 h-3 border border-[var(--cyan-primary)]`}
        style={{ transformOrigin: "center center" }}
      />
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailsRef.current[i] = el; }}
          className={`${circleBase} bg-[var(--cyan-primary)]`}
          style={{
            width: `${6 - i}px`,
            height: `${6 - i}px`,
            opacity: 0.6 - (i * 0.1),
            transformOrigin: "center center"
          }}
        />
      ))}
    </>
  );
}
