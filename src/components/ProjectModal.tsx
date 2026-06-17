"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projectDetailsData } from "@/data/projectDetails";

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const data = projectDetailsData[projectId];

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      {/* Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl cursor-pointer"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--bg-surface)] border border-[var(--cyan-primary)] rounded-xl shadow-[0_0_50px_rgba(0,243,255,0.15)] flex flex-col pointer-events-auto">
        
        {/* Close Button - Now outside the scrolling area */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-md border border-[var(--cyan-primary)] text-[var(--cyan-primary)] hover:bg-[var(--cyan-primary)] hover:text-black transition-colors z-50"
        >
          ✕
        </button>

        <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 md:p-14 flex flex-col gap-12 md:gap-24 rounded-xl">
          
          {/* 1. Project Hero */}
          <section className="flex flex-col gap-6 mt-8 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] break-words">
              {data.hero.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-[var(--cyan-primary)]">
              {data.hero.subtitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
              <div><span className="text-gray-500 font-mono text-sm uppercase">Status:</span><br/><span className="text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--cyan-primary)] animate-pulse" />{data.hero.status}</span></div>
              <div><span className="text-gray-500 font-mono text-sm uppercase">Category:</span><br/><span className="text-white">{data.hero.category}</span></div>
              <div><span className="text-gray-500 font-mono text-sm uppercase">Duration:</span><br/><span className="text-white">{data.hero.duration}</span></div>
              <div><span className="text-gray-500 font-mono text-sm uppercase">Role:</span><br/><span className="text-white">{data.hero.role}</span></div>
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section className="p-8 bg-[rgba(0,243,255,0.03)] border-l-4 border-[var(--cyan-primary)] rounded-r-lg">
            <h3 className="text-2xl font-display text-white mb-6 uppercase tracking-widest">Problem Statement</h3>
            <p className="text-gray-300 font-mono mb-4 leading-relaxed">{data.problem.intro}</p>
            <ul className="list-none space-y-2 mb-6">
              {data.problem.bullets.map((b, i) => (
                <li key={i} className="text-gray-400 font-mono flex items-start gap-3">
                  <span className="text-red-500 mt-1">●</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-[var(--cyan-primary)] font-mono leading-relaxed">{data.problem.conclusion}</p>
          </section>

          {/* 3. Architecture Visualization */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest text-center">Architecture Visualization</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {data.architecture.nodes.map((node, i) => (
                <div key={i} className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,243,255,0.4)" }}
                    className="px-6 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(0,243,255,0.3)] rounded-lg text-sm font-mono text-[var(--cyan-primary)] cursor-default transition-colors hover:bg-[rgba(0,243,255,0.1)]"
                  >
                    {node}
                  </motion.div>
                  {i < data.architecture.nodes.length - 1 && (
                    <span className="text-gray-600">→</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 4. Core Features */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[rgba(255,255,255,0.02)] rounded border border-[rgba(255,255,255,0.05)] hover:border-[rgba(0,243,255,0.3)] transition-colors">
                  <span className="text-[var(--cyan-primary)]">✓</span>
                  <span className="text-gray-300 font-mono text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Technology Stack */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Technology Stack</h3>
            <div className="flex flex-col gap-8">
              {data.techStack.map((stack, i) => (
                <div key={i}>
                  <h4 className="text-sm text-gray-500 font-mono uppercase mb-4">{stack.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {stack.techs.map((t, j) => (
                      <span key={j} className="px-4 py-2 bg-[rgba(0,243,255,0.05)] border border-[rgba(0,243,255,0.2)] text-[var(--cyan-primary)] rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[rgba(0,243,255,0.1)] transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Project Workflow */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Project Workflow</h3>
            <div className="flex flex-col gap-6">
              {data.workflow.map((w, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 md:w-24 shrink-0 text-right font-mono text-xs md:text-sm text-[var(--cyan-primary)]">{w.stage}</div>
                  <div className="w-4 h-4 shrink-0 rounded-full bg-[rgba(255,255,255,0.1)] border border-[var(--cyan-primary)] group-hover:bg-[var(--cyan-primary)] transition-colors relative">
                    {i < data.workflow.length - 1 && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[rgba(255,255,255,0.1)]" />}
                  </div>
                  <div className="text-gray-300 font-mono text-xs md:text-sm uppercase tracking-wider">{w.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Key Innovations */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Key Innovations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.innovations.map((inn, i) => (
                <div key={i} className="p-6 bg-[rgba(255,255,255,0.02)] border-t-2 border-[var(--cyan-primary)] rounded shadow-lg hover:-translate-y-1 transition-transform">
                  <span className="text-gray-200 font-mono leading-relaxed">• {inn}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Impact Metrics */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Impact Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.metrics.map((m, i) => (
                <MetricCounter key={i} value={m.value} label={m.label} />
              ))}
            </div>
          </section>

          {/* 9. Project Gallery */}
          {data.gallery.length > 0 && (
            <section>
              <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Project Gallery</h3>
              <div className="w-full flex overflow-x-auto gap-6 pb-4 custom-scrollbar snap-x">
                {data.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`${data.hero.name} gallery ${i}`} className="h-64 object-cover border border-[rgba(255,255,255,0.1)] rounded snap-center hover:border-[var(--cyan-primary)] transition-colors" />
                ))}
              </div>
            </section>
          )}

          {/* 10. Future Scope */}
          <section>
            <h3 className="text-2xl font-display text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">Future Scope (Roadmap)</h3>
            <div className="flex flex-wrap gap-4">
              {data.roadmap.map((r, i) => (
                <div key={i} className="flex-1 min-w-[200px] p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded">
                  <div className="text-[var(--cyan-primary)] font-mono text-xs mb-2">{r.phase}</div>
                  <div className="text-gray-300 font-mono text-sm">{r.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Links */}
          <section className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-wrap gap-6 justify-center">
            <a href={data.links.source} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-black font-mono font-bold uppercase tracking-widest rounded hover:scale-105 transition-transform">
              View Source
            </a>
            <a href={data.links.demo} target="_blank" rel="noreferrer" className="px-8 py-3 bg-transparent border border-[var(--cyan-primary)] text-[var(--cyan-primary)] font-mono font-bold uppercase tracking-widest rounded hover:bg-[rgba(0,243,255,0.1)] hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              Live Demo
            </a>
            <a href={data.links.docs} target="_blank" rel="noreferrer" className="px-8 py-3 bg-[rgba(255,255,255,0.05)] text-gray-300 border border-[rgba(255,255,255,0.1)] font-mono font-bold uppercase tracking-widest rounded hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 transition-all">
              Documentation
            </a>
          </section>

        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 243, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 243, 255, 0.6);
        }
      `}</style>
    </motion.div>
  );
}

function MetricCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-[rgba(0,243,255,0.02)] border border-[rgba(0,243,255,0.1)] rounded-lg">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
      >
        {value}
      </motion.div>
      <div className="text-[var(--cyan-primary)] font-mono text-xs uppercase tracking-widest text-center">{label}</div>
    </div>
  );
}
