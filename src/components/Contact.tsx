"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import SectionHeading from "./shared/SectionHeading";
import React from "react";

// Inline SVG components for social icons
const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const promptRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (promptRef.current) {
        gsap.to(promptRef.current, {
          text: { value: "Available for opportunities.", preserveSpaces: true },
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: promptRef.current,
            start: "top 85%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <SectionHeading title="INITIATE CONTACT" />

        <div className="glass-card p-8 md:p-16 flex flex-col items-center text-center mt-8">
          
          {/* Animated Terminal Prompt */}
          <div className="font-mono text-lg md:text-2xl text-[var(--cyan-primary)] mb-12 h-8">
            <span className="mr-2">&gt;_</span>
            <span ref={promptRef}></span>
            <span className="animate-pulse">_</span>
          </div>

          {/* Contact Details Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 text-left w-full max-w-2xl mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest mb-1">Name</p>
              <p className="font-mono text-lg">Gopikrishna S</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest mb-1">Role</p>
              <p className="font-mono text-lg">ML Engineer · Full Stack</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="font-mono text-lg">Tamil Nadu, India</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <p className="text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest mb-1">Status</p>
              <p className="font-mono text-lg text-[var(--green-ok)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--green-ok)] animate-pulse shadow-[0_0_8px_var(--green-ok)]" />
                Online
              </p>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-3xl justify-center"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SocialLink href="mailto:your.email@example.com" label="Email" icon={MailIcon} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SocialLink href="https://www.linkedin.com/in/gopikrishna-s-022856302/" label="LinkedIn" icon={LinkedinIcon} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SocialLink href="https://github.com/Gopi45-gk" label="GitHub" icon={GithubIcon} />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <SocialLink href="https://www.instagram.com/_.gopi.krishna._?igsh=azN6YjRqaTN4eGtj" label="Instagram" icon={InstagramIcon} />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-center mt-24">
        <p className="font-mono text-[0.75rem] text-[var(--text-secondary)] tracking-widest uppercase">
          // GOPIKRISHNA © 2025 — SYSTEMS OPERATIONAL
        </p>
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon: Icon }: { href: string, label: string, icon: React.ElementType }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      className="relative w-full h-full glass-card py-4 px-6 flex items-center justify-center gap-3 cursor-none overflow-hidden group border-[var(--border-cyan)] transition-colors hover:border-[var(--cyan-primary)] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]"
    >
      <motion.span 
        variants={{
          initial: { x: -10, opacity: 0, scale: 0.5 },
          hover: { x: 0, opacity: 1, scale: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-[var(--cyan-primary)] absolute left-4"
      >
        →
      </motion.span>
      
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-[var(--cyan-primary)] transition-colors duration-300" />
      
      <span className="font-mono text-sm tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </motion.a>
  );
}
