"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ParticleField from "./ParticleField";
import RoleCycler from "./RoleCycler";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const bootRef = useRef<HTMLPreElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  const lottieRef = useRef<HTMLDivElement>(null);

  // Parallax effect for Lottie
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!lottieRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(lottieRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Boot Sequence
      const bootText = `> initializing kernel...           ██████████ 100%
> loading neural modules...        ██████████ 100%
> mounting AI subsystems...        ██████████ 100%
> establishing secure connection...
> SYSTEM ONLINE.`;

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(bootRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            delay: 0.4,
            onComplete: () => {
              setBootComplete(true);
              triggerHeadline();
            }
          });
        }
      });

      if (bootRef.current) {
        tl.to(bootRef.current, {
          duration: bootText.length * 0.04,
          text: {
            value: bootText,
            preserveSpaces: true
          },
          ease: "none"
        });
      }

      function triggerHeadline() {
        const chars = charRefs.current.filter(Boolean);
        
        gsap.fromTo(chars, 
          { opacity: 0, y: 60, rotateX: -90, transformOrigin: "0% 50% -50px" },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0, 
            duration: 0.6, 
            stagger: 0.04, 
            ease: "back.out(1.7)",
            onComplete: () => {
              // Persistent text-shadow pulse
              gsap.to(headlineRef.current, {
                textShadow: "0 0 60px rgba(0,243,255,0.3), 0 0 10px rgba(0,243,255,0.8)",
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
              });
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const headline = "GOPIKRISHNA S";

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-20">
      <ParticleField />

      {/* Custom Logo */}
      <motion.img 
        src="https://www.image2url.com/r2/default/images/1781629448445-2acbcbfa-301f-4019-8516-5c66a95bb13e.png"
        alt="GK Logo"
        className="absolute top-6 left-6 md:top-10 md:left-10 w-28 h-28 md:w-40 md:h-40 object-contain z-50 cursor-pointer"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ filter: "drop-shadow(0px 0px 15px rgba(0,243,255,0.8))", scale: 1.05 }}
      />

      {/* Boot Sequence */}
      <pre 
        ref={bootRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--cyan-dim)] font-mono text-sm md:text-base whitespace-pre-wrap text-left z-10 w-[350px] md:w-[500px]"
      >
        {/* GSAP TextPlugin writes here */}
      </pre>

      {/* Main Content (Hidden until boot completes) */}
      <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 ${bootComplete ? 'opacity-100' : 'opacity-0'}`}>
        
        <h1 
          ref={headlineRef}
          className="text-center mb-4 uppercase tracking-tighter"
          style={{ textShadow: "0 0 20px rgba(0,243,255,0.9), 0 0 50px rgba(0,243,255,0.4)", perspective: "1000px", fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          {headline.split('').map((char, i) => (
            <span 
              key={i} 
              ref={el => { charRefs.current[i] = el; }}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={bootComplete ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl font-mono text-[var(--text-secondary)] mb-6 text-center"
        >
          <span className="text-[var(--cyan-primary)]">ML Engineer</span>  ·  
          <span className="text-[var(--cyan-primary)]"> Full Stack Developer</span>  ·  
          <span className="text-[var(--cyan-primary)]"> AI Systems Builder</span>
        </motion.p>

        <RoleCycler />


      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 font-mono text-xs text-[var(--cyan-primary)] tracking-[0.2em] opacity-50 z-10"
      >
        ↓ SCROLL TO EXPLORE
      </motion.div>

      {/* Floating Lottie Character (Bottom Right) */}
      <motion.div 
        ref={lottieRef}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] md:bottom-[-5%] md:right-[-2%] w-[350px] md:w-[450px] aspect-square z-30 pointer-events-none drop-shadow-[0_0_50px_rgba(0,243,255,0.25)]"
      >
        <DotLottieReact
          src="https://lottie.host/41f493d7-aa9a-4b59-a270-820c594f14db/fI1yPaDi3r.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </section>
  );
}
