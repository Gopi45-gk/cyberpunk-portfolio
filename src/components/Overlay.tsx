"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Center (0% - 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: Left (20% - 50%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: Right (50% - 80%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sweep effect for Frame 2
      gsap.fromTo(".sweep-line", 
        { x: "-100%" }, 
        { x: "200%", duration: 1.5, repeat: -1, ease: "linear" }
      );

      // Data stream effect for Frame 3
      gsap.to(".data-stream", {
        y: "-50%",
        duration: 3,
        repeat: -1,
        ease: "linear"
      });
      
      // Fake DrawSVG for Frame 1
      gsap.fromTo(".border-draw",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2, ease: "power2.out", repeat: -1, yoyo: true }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Generate random hex stream
  const [hexStream, setHexStream] = useState("");
  useEffect(() => {
    setHexStream(Array.from({ length: 40 })
      .map(() => `0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}`)
      .join("\\n"));
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 text-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="glass-card relative overflow-hidden px-12 py-8">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <rect x="2" y="2" width="100%" height="100%" fill="none" stroke="var(--cyan-primary)" strokeWidth="2" strokeDasharray="1000" className="border-draw" style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }} />
            </svg>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center uppercase">
              AIML ENGINEER
            </h1>
            <p className="text-[var(--cyan-primary)] font-mono mt-4 text-center">Specialized in intelligent systems &amp; deep learning.</p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 max-w-4xl pointer-events-auto"
        >
          <div className="glass-card w-full h-64 relative overflow-hidden flex flex-col items-start justify-center">
            {/* Sweep Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan-primary)] to-transparent sweep-line z-10" />
            
            <h2 className="mb-4 uppercase">FULL STACK DEVELOPER</h2>
            <p className="text-[var(--text-secondary)]">Building end-to-end products from model to UI.<br/>Crafting experiences that scale.</p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-24 pointer-events-auto"
        >
          <div className="glass-card w-80 h-96 relative overflow-hidden flex">
            <div className="flex-1 flex flex-col justify-center pr-4">
              <h3 className="mb-2 uppercase">GEN AI ENTHUSIAST</h3>
              <p className="text-sm text-[var(--text-secondary)]">Exploring frontier models, LLMs &amp; AI-native systems.</p>
            </div>
            
            {/* Vertical Data Stream */}
            <div className="w-16 h-full border-l border-[var(--border-cyan)] bg-[var(--bg-elevated)] overflow-hidden relative">
              <div className="absolute top-0 w-full font-mono text-[10px] text-[var(--cyan-dim)] whitespace-pre data-stream text-center opacity-70">
                {hexStream}
                {"\\n"}
                {hexStream}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
