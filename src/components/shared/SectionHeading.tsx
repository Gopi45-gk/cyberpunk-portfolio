"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-20 overflow-hidden py-2">
      <h2 
        ref={headingRef}
        className="text-3xl md:text-5xl font-mono font-semibold tracking-[0.08em] text-white"
      >
        <span className="text-[var(--cyan-primary)] mr-4">//</span>
        {title}
      </h2>
    </div>
  );
}
