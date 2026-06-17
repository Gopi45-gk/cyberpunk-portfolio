"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import SectionHeading from "./shared/SectionHeading";
import ProjectModal from "./ProjectModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const projects = [
  {
    num: "01",
    title: "PRAHARI — AI Fatigue Detection",
    tech: ["COMPUTER VISION", "DEEP LEARNING", "CNN", "BiLSTM", "YOLOv8", "FASTAPI", "FIREBASE"],
    desc: "AI-powered Railway Safety Intelligence Platform with Crew Fatigue Detection, CCRS Risk Engine, Citizen Safety Integration, and Railway Command Center.",
    image: "https://www.image2url.com/r2/default/images/1781632931820-8f19fc1f-b22b-4496-8069-f1a70a3b3929.png"
  },
  {
    num: "02",
    title: "UzhavanAI — Agri-Tech Intelligence",
    tech: ["Machine Learning", "React"],
    desc: "AI-driven intelligent farming assistant.",
    image: "https://www.image2url.com/r2/default/images/1777112094688-dea72660-ec86-4e18-8a09-2d963a8b7748.png"
  },
  {
    num: "03",
    title: "Uzhavan Bazaar — E-Commerce",
    tech: ["MERN Stack"],
    desc: "Digital marketplace connecting farmers and consumers.",
    image: "https://www.image2url.com/r2/default/images/1777112150697-746a4c86-caf6-4e0b-a4e5-ce3b03ce8bc7.png"
  },
  {
    num: "04",
    title: "MOONIQ — Crypto Intelligence",
    tech: ["AI", "Sentiment Analysis"],
    desc: "AI-powered productivity and intelligent workspace platform.",
    image: "https://www.image2url.com/r2/default/images/1777112272586-24e548de-0551-4d5f-bac6-81769922a5cc.png"
  },
  {
    num: "05",
    title: "EchoLive — AI Communication",
    tech: ["NLP", "Speech Recognition"],
    desc: "Real-time multilingual AI communication platform.",
    image: "https://www.image2url.com/r2/default/images/1777112444624-afe9e95f-359b-4f06-a576-3f4b5541c9ca.png"
  },
  {
    num: "06",
    title: "SecureLand — Property Intelligence",
    tech: ["Blockchain", "AI"],
    desc: "Blockchain-enabled land registry and ownership verification system.",
    image: "https://www.image2url.com/r2/default/images/1777112530383-9b705a0b-3ef9-4f64-8ac0-64946c29aaf9.png"
  },
  {
    num: "07",
    title: "Bioxen — Biomedical Monitoring",
    tech: ["AI", "IoT"],
    desc: "Healthcare and biotechnology intelligence platform.",
    image: "https://www.image2url.com/r2/default/images/1777112217931-c11e0c56-886f-4b9a-b418-e9c2cdc522df.png"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const titleEl = card.querySelector(".proj-title");
        const numEl = card.querySelector(".proj-num");
        const descContainerEl = card.querySelector(".proj-desc-container");
        const borderEl = card.querySelector(".proj-border");

        // Set initial states
        gsap.set(numEl, { x: -30, opacity: 0 });
        gsap.set(descContainerEl, { y: 20, opacity: 0 });
        if (titleEl) gsap.set(titleEl, { text: "" });
        if (borderEl) gsap.set(borderEl, { strokeDashoffset: 2000 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            // 1. Flicker
            card.classList.add("crt-flicker-on");
            
            // 2. Border draw (fake DrawSVG)
            if (borderEl) {
              gsap.to(borderEl, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out", delay: 0.2 });
            }

            // 3. Number slam
            gsap.to(numEl, { x: 0, opacity: 1, duration: 0.3, ease: "back.out(1.7)", delay: 0.4 });

            // 4. Title type
            if (titleEl && projects[i]) {
              gsap.to(titleEl, {
                text: { value: projects[i].title },
                duration: projects[i].title.length * 0.025,
                delay: 0.6,
                ease: "none"
              });
            }

            // 6. Description and button fade up
            gsap.to(descContainerEl, { y: 0, opacity: 1, duration: 0.5, delay: 0.9, ease: "power2.out" });
          },
          once: true
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <SectionHeading title="DEPLOYED SYSTEMS" />

        <div className="flex flex-col gap-16 md:gap-32 mt-16">
          {projects.map((proj, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                whileHover={{ y: -6 }}
                className={`relative w-full max-w-4xl flex flex-col md:flex-row group opacity-0 ${
                  isEven ? "self-start md:flex-row" : "self-end md:flex-row-reverse"
                }`}
                style={{ opacity: 0 }} // Managed by CSS crt-flicker-on
              >
                {/* Visual Image / Graphic Side */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-[var(--bg-surface)] relative overflow-hidden border border-[var(--border-cyan)] transition-colors group-hover:border-[var(--cyan-primary)]">
                  {/* Project Image */}
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    loading="lazy" 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  
                  {/* Overlay Gradient to blend with background if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.8)] to-transparent pointer-events-none z-10" />

                  {/* SVG Border Trace (Fake DrawSVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                    <rect x="1" y="1" width="100%" height="100%" fill="none" stroke="var(--cyan-primary)" strokeWidth="2" strokeDasharray="2000" className="proj-border" style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }} />
                  </svg>
                  
                  {/* Scanline Hover Effect */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
                       style={{ animation: 'scanline-sweep 2s linear infinite' }} />

                  {/* Corner Brackets */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[var(--cyan-primary)] group-hover:w-3 group-hover:h-3 group-hover:border-[var(--red-hot)] group-hover:-top-1 group-hover:-left-1 transition-all duration-300" />
                  <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[var(--cyan-primary)] group-hover:w-3 group-hover:h-3 group-hover:border-[var(--red-hot)] group-hover:-top-1 group-hover:-right-1 transition-all duration-300" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[var(--cyan-primary)] group-hover:w-3 group-hover:h-3 group-hover:border-[var(--red-hot)] group-hover:-bottom-1 group-hover:-left-1 transition-all duration-300" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[var(--cyan-primary)] group-hover:w-3 group-hover:h-3 group-hover:border-[var(--red-hot)] group-hover:-bottom-1 group-hover:-right-1 transition-all duration-300" />

                  {/* Number */}
                  <div className="absolute bottom-4 right-4 text-6xl md:text-8xl font-display font-bold text-[rgba(0,243,255,0.05)] select-none proj-num">
                    {proj.num}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-[var(--bg-surface)] md:bg-transparent ${isEven ? "items-start text-left" : "items-end text-right"}`}>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--cyan-primary)] mb-4 proj-title min-h-[4rem] md:min-h-0">
                    {/* Populated by GSAP TextPlugin */}
                  </h3>
                  
                  <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? "justify-start" : "justify-end"}`}>
                    {proj.tech.map((t, idx) => (
                      <motion.span 
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.8 + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="px-2 py-1 text-[0.65rem] font-mono uppercase tracking-[0.12em] border border-[var(--border-cyan)] text-[var(--text-primary)]"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <div className="proj-desc-container mt-6 flex flex-col gap-6">
                    <p className="font-mono text-sm text-[var(--text-secondary)] max-w-sm">
                      {proj.desc}
                    </p>
                    <button 
                      onClick={() => setActiveProjectId(proj.num)}
                      className="group relative flex items-center justify-center gap-3 px-6 py-3 border border-[rgba(0,243,255,0.3)] bg-[rgba(0,243,255,0.05)] text-[var(--cyan-primary)] font-mono text-xs uppercase tracking-[0.2em] overflow-hidden w-max hover:bg-[rgba(0,243,255,0.15)] hover:border-[var(--cyan-primary)] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)]"
                    >
                      <span className="relative z-10">View Details</span>
                      <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Modal Injection */}
      <AnimatePresence>
        {activeProjectId && (
          <ProjectModal 
            projectId={activeProjectId} 
            onClose={() => setActiveProjectId(null)} 
          />
        )}
      </AnimatePresence>

      {/* Required style for the hover scanline in this component */}
      <style jsx>{`
        @keyframes scanline-sweep {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(256px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
