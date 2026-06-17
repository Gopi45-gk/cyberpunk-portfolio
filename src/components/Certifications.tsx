"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import SectionHeading from "./shared/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const certifications = [
  { name: "NPTEL: Introduction to IoT", badge: "ELITE" },
  { name: "NPTEL: Joy of Computing", badge: "ELITE" },
  { name: "HackerRank: SQL (Intermediate)", badge: "CERTIFIED" },
  { name: "HackerRank: Software Engineer", badge: "CERTIFIED" },
  { name: "Typewriting: Junior Grade English", badge: "FIRST CLASS WITH DISTINCTION" }
];

const achievements = [
  "🥇 1st Prize — Project Expo, Vel Tech R&D Institute",
  "🥇 1st Prize — Project Expo, Agni College of Technology",
  "🥇 1st Prize — Paper Presentation, King's College of Engineering",
  "🥇 1st Prize — Paper Presentation, Sri Venkateshwara Engg & Technology",
  "🏆 PALS Innowah Finalist — Best Appreciation Award + Amazon Voucher",
  "🏆 Best Team Award — Hackathon-Codeathon, Prathyusha Engineering College",
  "🎖️ 13th Rank — NIDAR 2025 (National Level)",
  "🎖️ Finalist — India-Israel Hackathon, Sri Ramakrishna Engineering College"
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const achievementRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Achievements Sequential Typing Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".achievements-container",
          start: "top 80%",
        }
      });

      achievementRefs.current.forEach((el, i) => {
        if (!el) return;
        
        const text = achievements[i];
        gsap.set(el, { text: "" }); // Clear initial text
        
        tl.to(el, {
          duration: text.length * 0.018,
          text: { value: text },
          ease: "none"
        }, "+=0.2"); // 200ms pause between items
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeading title="CLEARANCE RECORDS" />

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          
          {/* Left Column: Certifications */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="mb-4 uppercase text-sm tracking-widest flex items-center">
              <span className="text-[var(--cyan-primary)] mr-2">{'>'}</span> 
              Global Certifications
            </h3>
            
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-5 border-l-4 border-l-[var(--green-ok)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <span className="font-mono text-[var(--text-primary)]">{cert.name}</span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="px-2 py-1 text-[0.6rem] font-mono tracking-widest bg-[rgba(80,250,123,0.12)] border border-[var(--green-ok)] text-[var(--green-ok)]"
                >
                  {cert.badge}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Achievements */}
          <div className="flex-1 achievements-container glass-card p-8">
            <h3 className="mb-8 uppercase text-sm tracking-widest flex items-center">
              <span className="text-[var(--cyan-primary)] mr-2">{'>'}</span> 
              Achievements & Honors
            </h3>
            
            <div className="flex flex-col gap-6">
              {achievements.map((_, i) => (
                <p 
                  key={i} 
                  ref={(el) => { achievementRefs.current[i] = el; }}
                  className="font-mono text-sm leading-relaxed text-[var(--text-secondary)] min-h-[1.25rem]"
                >
                  {/* Text injected via GSAP */}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
