"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./shared/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "ML Intern",
    company: "ReTech Solutions Pvt. Ltd.",
    duration: "6 Weeks",
    desc: "ML model implementation and data analysis for actionable insights."
  },
  {
    role: "Fullstack Intern",
    company: "Femtosoft Technology",
    duration: "1 Month",
    desc: "End-to-end full-stack development using Python."
  },
  {
    role: "Database Intern",
    company: "NIELIT",
    duration: "1 Month",
    desc: "MySQL, schema design, relational data optimization."
  },
  {
    role: "Industry Training",
    company: "Career Solutions",
    duration: "1 Month",
    desc: "Professional software standards and corporate workflow."
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Center Line Draw
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, 
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              end: "bottom 80%",
              scrub: 1
            }
          }
        );
      }

      // 2. Nodes pulsing and flashing
      nodeRefs.current.forEach((node, i) => {
        if (!node) return;

        // Heartbeat pulse
        gsap.to(node, {
          scale: 1.6,
          opacity: 0.3,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });

        // Flash on enter
        ScrollTrigger.create({
          trigger: node,
          start: "top 70%",
          onEnter: () => {
            gsap.fromTo(node, 
              { backgroundColor: "#ffffff", boxShadow: "0 0 20px #ffffff" },
              { backgroundColor: "var(--cyan-primary)", boxShadow: "0 0 0px transparent", duration: 0.5 }
            );
          },
          once: true
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <SectionHeading title="OPERATIONAL HISTORY" />

        <div className="relative mt-20 pb-20">
          {/* Continuous Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[var(--bg-elevated)] z-0">
            <div ref={lineRef} className="w-full h-full bg-[var(--border-cyan)]" />
          </div>

          <div className="flex flex-col gap-24">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
                    <div 
                      ref={(el) => { nodeRefs.current[i] = el; }}
                      className="w-3 h-3 rounded-full bg-[var(--cyan-primary)]" 
                    />
                  </div>

                  {/* Left Side (Empty on Odd for MD) */}
                  <div className={`hidden md:block w-1/2 pr-16 text-right ${!isEven ? "invisible" : ""}`}>
                    {isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 inline-block text-left w-full relative"
                      >
                        <Badge duration={exp.duration} />
                        <h3 className="text-xl font-bold text-[var(--cyan-primary)] mb-1 font-mono">{exp.role}</h3>
                        <p className="text-[var(--text-secondary)] font-mono text-sm mb-4">@ {exp.company}</p>
                        <p className="font-mono text-sm">{exp.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side (Empty on Even for MD) */}
                  <div className={`w-full pl-16 md:w-1/2 md:pl-16 ${isEven ? "md:invisible" : ""}`}>
                    {(!isEven || true) && ( // On mobile, show everything here
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? -60 : 60 }} // On mobile, everything slides from left (-60), wait, mobile will all be left.
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`glass-card p-6 w-full relative ${isEven ? "md:hidden" : ""}`}
                      >
                        <Badge duration={exp.duration} />
                        <h3 className="text-xl font-bold text-[var(--cyan-primary)] mb-1 font-mono">{exp.role}</h3>
                        <p className="text-[var(--text-secondary)] font-mono text-sm mb-4">@ {exp.company}</p>
                        <p className="font-mono text-sm">{exp.desc}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ duration }: { duration: string }) {
  return (
    <div className="absolute top-4 right-4 bg-transparent border border-[var(--pink-accent)] text-[var(--pink-accent)] text-[0.65rem] px-2 py-1 font-mono tracking-widest uppercase">
      [ {duration} ]
    </div>
  );
}
