"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./shared/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const educationData = [
  {
    level: "[PRIMARY]",
    degree: "B.E in Artificial Intelligence & Machine Learning",
    institution: "Prathyusha Engineering College",
    duration: "2023–2027",
    scoreType: "CGPA",
    score: 8.71
  },
  {
    level: "[SECONDARY]",
    degree: "Higher Secondary Education (12th)",
    institution: "Kovur Boys Government Hr. Sec. School",
    duration: "2022–2023",
    scoreType: "Percentage",
    score: 80
  },
  {
    level: "[FOUNDATION]",
    degree: "SSLC (10th Grade)",
    institution: "Kovur Boys Government Hr. Sec. School",
    duration: "2020–2021",
    scoreType: "Status",
    score: 100 // We'll just display "Completed"
  }
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card Flip Entrance
      gsap.fromTo(cardRefs.current.filter(Boolean),
        { rotateY: -40, opacity: 0, transformOrigin: "left center" },
        {
          rotateY: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      );

      // Score Counter Animation
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const scoreEl = card.querySelector(".score-counter");
        if (!scoreEl) return;

        const targetObj = { val: 0 };
        const data = educationData[i];

        if (data.scoreType === "CGPA" || data.scoreType === "Percentage") {
          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
              gsap.to(targetObj, {
                val: data.score,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  scoreEl.innerHTML = data.scoreType === "CGPA" 
                    ? targetObj.val.toFixed(2) 
                    : `${Math.round(targetObj.val)}%`;
                }
              });
            },
            once: true
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeading title="BOOT RECORDS" />

        <div className="flex flex-col lg:flex-row gap-8 mt-16 perspective-1000">
          {educationData.map((edu, i) => (
            <div 
              key={i} 
              ref={(el) => { cardRefs.current[i] = el; }}
              className="flex-1 glass-card p-8 flex flex-col justify-between"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[var(--cyan-dim)] text-xs tracking-widest">{edu.level}</span>
                  <div className="bg-transparent border border-[var(--pink-accent)] text-[var(--pink-accent)] text-[0.65rem] px-2 py-1 font-mono tracking-widest uppercase">
                    [ {edu.duration} ]
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                
                <p className="font-mono text-sm tracking-[0.05em] text-[var(--pink-accent)] mb-8">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-auto">
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-widest block mb-2">
                  {edu.scoreType}
                </span>
                
                {edu.scoreType === "Status" ? (
                  <div className="text-4xl font-mono text-[var(--cyan-primary)]" style={{ textShadow: "0 0 20px rgba(0,243,255,0.4)" }}>
                    Completed
                  </div>
                ) : (
                  <div 
                    className="text-5xl font-mono text-[var(--cyan-primary)] score-counter" 
                    style={{ textShadow: "0 0 20px rgba(0,243,255,0.4)" }}
                  >
                    0.00
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
