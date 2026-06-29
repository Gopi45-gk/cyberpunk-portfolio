"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

/* ════════════════════════════════════════════════════════════════
   UTILITIES
   ════════════════════════════════════════════════════════════════ */
const DI = (icon: string, variant: string = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-${variant}.svg`;

const SI = (icon: string) => `https://cdn.simpleicons.org/${icon}/00f3ff`;

const PlanetIcon = ({ item }: { item: TechItem }) => {
  const [error, setError] = useState(false);
  if (!item.icon || error) {
    return (
      <div className="w-full h-full flex items-center justify-center font-bold text-[var(--cyan-primary)] opacity-60 font-mono text-sm sm:text-base">
        {item.name.substring(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <Image
      src={item.icon}
      alt={item.name}
      width={40}
      height={40}
      className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
      onError={() => setError(true)}
      unoptimized
    />
  );
};

/* ════════════════════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════════════════════ */
interface TechItem {
  name: string;
  icon: string | null;
}

interface CategoryConfig {
  category: string;
  items: TechItem[];
}

const categories: CategoryConfig[] = [
  {
    category: "PROGRAMMING",
    items: [
      { name: "Python", icon: DI("python") },
      { name: "C", icon: DI("c") },
      { name: "C++", icon: DI("cplusplus") },
      { name: "Java", icon: DI("java") },
      { name: "JavaScript", icon: DI("javascript") },
      { name: "TypeScript", icon: DI("typescript") },
      { name: "SQL", icon: DI("azuresqldatabase") },
      { name: "Bash", icon: DI("bash") },
    ],
  },
  {
    category: "FRONTEND",
    items: [
      { name: "HTML5", icon: DI("html5") },
      { name: "CSS3", icon: DI("css3") },
      { name: "Tailwind CSS", icon: DI("tailwindcss") },
      { name: "Bootstrap", icon: DI("bootstrap") },
      { name: "React", icon: DI("react") },
      { name: "Next.js", icon: DI("nextjs") },
      { name: "Vite", icon: DI("vitejs") },
      { name: "GSAP", icon: SI("greensock") },
      { name: "Framer Motion", icon: SI("framer") },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", icon: DI("nodejs") },
      { name: "Express.js", icon: DI("express") },
      { name: "FastAPI", icon: DI("fastapi") },
      { name: "Flask", icon: DI("flask") },
      { name: "Django", icon: DI("django", "plain") },
      { name: "REST API", icon: SI("openapiinitiative") },
      { name: "GraphQL", icon: DI("graphql", "plain") },
    ],
  },
  {
    category: "AI / MACHINE LEARNING",
    items: [
      { name: "TensorFlow", icon: DI("tensorflow") },
      { name: "PyTorch", icon: DI("pytorch") },
      { name: "Scikit-learn", icon: DI("scikitlearn") },
      { name: "OpenCV", icon: DI("opencv") },
      { name: "MediaPipe", icon: SI("google") },
      { name: "NumPy", icon: DI("numpy") },
      { name: "Pandas", icon: DI("pandas") },
      { name: "Matplotlib", icon: DI("matplotlib") },
      { name: "Streamlit", icon: DI("streamlit") },
      { name: "Gradio", icon: SI("gradio") },
      { name: "Whisper", icon: SI("openai") },
      { name: "LangChain", icon: SI("langchain") },
      { name: "Hugging Face", icon: SI("huggingface") },
      { name: "ChatGPT", icon: SI("openai") },
      { name: "Claude", icon: SI("anthropic") },
      { name: "Gemini", icon: SI("googlegemini") },
      { name: "Llama", icon: SI("meta") },
      { name: "RAG", icon: SI("databricks") },
      { name: "Ollama", icon: SI("ollama") },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MongoDB", icon: DI("mongodb") },
      { name: "MySQL", icon: DI("mysql") },
      { name: "PostgreSQL", icon: DI("postgresql") },
      { name: "Firebase", icon: DI("firebase", "plain") },
      { name: "Redis", icon: DI("redis") },
      { name: "SQLite", icon: DI("sqlite") },
    ],
  },
  {
    category: "CLOUD & DEPLOYMENT",
    items: [
      { name: "AWS", icon: DI("amazonwebservices", "original-wordmark") },
      { name: "Azure", icon: DI("azure") },
      { name: "Google Cloud", icon: DI("googlecloud") },
      { name: "Vercel", icon: DI("vercel") },
      { name: "Netlify", icon: SI("netlify") },
      { name: "GoDaddy", icon: SI("godaddy") },
    ],
  },
  {
    category: "DEVOPS & TOOLS",
    items: [
      { name: "Docker", icon: DI("docker") },
      { name: "Linux", icon: DI("linux") },
      { name: "Git", icon: DI("git") },
      { name: "GitHub", icon: DI("github") },
      { name: "GitLab", icon: DI("gitlab") },
      { name: "VS Code", icon: DI("vscode") },
      { name: "Jupyter", icon: DI("jupyter") },
      { name: "Postman", icon: DI("postman") },
      { name: "Nginx", icon: DI("nginx") },
    ],
  },
  {
    category: "DESIGN & CREATIVE",
    items: [
      { name: "Figma", icon: DI("figma") },
      { name: "Canva", icon: DI("canva") },
      { name: "Photoshop", icon: DI("photoshop") },
      { name: "Illustrator", icon: DI("illustrator", "plain") },
      { name: "Premiere Pro", icon: DI("premierepro") },
      { name: "After Effects", icon: DI("aftereffects") },
      { name: "CapCut", icon: SI("bytedance") },
      { name: "LottieFiles", icon: SI("lottiefiles") },
    ],
  },
  {
    category: "IoT & EMERGING TECH",
    items: [
      { name: "Arduino", icon: DI("arduino") },
      { name: "ESP32", icon: SI("espressif") },
      { name: "Raspberry Pi", icon: DI("raspberrypi") },
      { name: "Drone Technology", icon: SI("dji") },
      { name: "IoT", icon: SI("adafruit") },
      { name: "ROS", icon: SI("ros") },
      { name: "Antigravity IDE", icon: SI("google") },
    ],
  },
  {
    category: "PLATFORMS",
    items: [
      { name: "Google Colab", icon: SI("googlecolab") },
      { name: "Kaggle", icon: DI("kaggle") },
      { name: "Replit", icon: SI("replit") },
      { name: "Antigravity IDE", icon: SI("google") },
    ],
  },
  {
    category: "MOBILE DEVELOPMENT",
    items: [
      { name: "React Native", icon: DI("react") },
      { name: "Flutter", icon: DI("flutter") },
      { name: "Android", icon: DI("android") },
      { name: "Kotlin", icon: DI("kotlin") },
      { name: "Swift", icon: DI("swift") },
    ],
  },
  {
    category: "BLOCKCHAIN",
    items: [
      { name: "Solidity", icon: DI("solidity") },
      { name: "Ethereum", icon: SI("ethereum") },
      { name: "Binance Smart Chain", icon: SI("binance") },
      { name: "Polygon", icon: DI("polygon") },
      { name: "Web3.js", icon: SI("web3dotjs") },
      { name: "Ethers.js", icon: SI("ethereum") },
    ],
  },
  {
    category: "CYBER SECURITY",
    items: [
      { name: "JWT", icon: SI("jsonwebtokens") },
      { name: "OAuth", icon: DI("oauth") },
      { name: "Firebase Auth", icon: DI("firebase", "plain") },
      { name: "SSL", icon: SI("letsencrypt") },
      { name: "Burp Suite", icon: SI("portswigger") },
      { name: "Wireshark", icon: SI("wireshark") },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════
   NEURAL BACKGROUND CANVAS (Lines + Particles)
   ════════════════════════════════════════════════════════════════ */
function NeuralBackground({ nodeRefs }: { nodeRefs: React.MutableRefObject<(HTMLDivElement | null)[]> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let w = (c.width = window.innerWidth);
    let h = (c.height = c.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = c.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Floating background particles
    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
    }));

    // Pulses traveling along lines
    const pulses: { startX: number; startY: number; endX: number; endY: number; progress: number; speed: number }[] = [];

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw background particles
      ctx.fillStyle = "rgba(0, 243, 255, 0.4)";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Get valid nodes from the DOM
      const nodes = nodeRefs.current
        .filter((el) => el)
        .map((el) => {
          const rect = el!.getBoundingClientRect();
          // We need coordinates relative to the canvas (which is absolute in the section)
          const sectionRect = c.parentElement!.getBoundingClientRect();
          return {
            x: rect.left - sectionRect.left + rect.width / 2,
            y: rect.top - sectionRect.top + rect.height / 2,
          };
        });

      // Draw neural lines between nearby nodes
      ctx.lineWidth = 1;
      const connectionDist = window.innerWidth < 768 ? 120 : 180;
      
      // We only loop through a subset to avoid O(N^2) lag on 120 nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < Math.min(i + 15, nodes.length); j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = 1 - dist / connectionDist;
            ctx.strokeStyle = `rgba(0, 243, 255, ${alpha * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Randomly spawn pulses on valid lines
            if (Math.random() < 0.001) {
              pulses.push({
                startX: nodes[i].x,
                startY: nodes[i].y,
                endX: nodes[j].x,
                endY: nodes[j].y,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const currX = p.startX + (p.endX - p.startX) * p.progress;
        const currY = p.startY + (p.endY - p.startY) * p.progress;

        ctx.fillStyle = "rgba(0, 243, 255, 0.9)";
        ctx.shadowColor = "#00f3ff";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [nodeRefs]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60"
    />
  );
}

/* ════════════════════════════════════════════════════════════════
   TECH NODE (Glassmorphism Hologram Card)
   ════════════════════════════════════════════════════════════════ */
function TechNode({
  item,
  category,
  index,
  nodeRef,
}: {
  item: TechItem;
  category: string;
  index: number;
  nodeRef: (el: HTMLDivElement | null) => void;
}) {
  const [showTip, setShowTip] = useState(false);

  // Organic random offsets to break the grid feel
  const offsetX = useMemo(() => (Math.random() - 0.5) * 30, []);
  const offsetY = useMemo(() => (Math.random() - 0.5) * 30, []);
  const dur = useMemo(() => 4 + Math.random() * 2, []);
  const del = useMemo(() => Math.random() * 2, []);
  
  // Opacity breathing
  const breatheDur = useMemo(() => 3 + Math.random() * 2, []);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 10) * 0.05 }}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        zIndex: showTip ? 50 : 10,
      }}
      className="relative z-10"
    >
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{
          y: { duration: dur, delay: del, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: breatheDur, delay: del, repeat: Infinity, ease: "easeInOut" }
        }}
        onHoverStart={() => setShowTip(true)}
        onHoverEnd={() => setShowTip(false)}
        onClick={() => setShowTip(!showTip)}
        className="group relative cursor-pointer"
      >
        <motion.div
          className="flex flex-col items-center justify-center rounded-[18px] bg-[rgba(8,12,20,0.65)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] transition-colors"
          style={{
            boxShadow: showTip 
              ? "0 0 25px rgba(0,243,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" 
              : "0 0 10px rgba(0,243,255,0.05), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
          whileHover={{
            scale: 1.1,
            rotate: 2,
            borderColor: "rgba(0, 243, 255, 0.6)",
          }}
        >
          {/* Top glow accent */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,243,255,0.4)] to-transparent" />
          
          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-1 sm:mb-2 transition-transform group-hover:scale-110">
            <PlanetIcon item={item} />
          </div>
          <span className="text-[8px] sm:text-[9.5px] font-mono text-[var(--text-secondary)] group-hover:text-white tracking-wider uppercase text-center leading-tight px-1 break-words w-full transition-colors">
            {item.name}
          </span>
        </motion.div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute -top-[50px] left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            >
              <div className="px-4 py-2 rounded-lg bg-[rgba(5,10,20,0.95)] backdrop-blur-xl border border-[rgba(0,243,255,0.4)] whitespace-nowrap shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                <div className="text-[11px] font-mono text-white font-semibold text-center tracking-wide">{item.name}</div>
                <div className="text-[8px] font-mono text-[var(--cyan-primary)] uppercase mt-1 opacity-80 text-center tracking-[0.2em]">{category}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN SKILLS COMPONENT (Constellation Ecosystem)
   ════════════════════════════════════════════════════════════════ */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  
  // We collect refs of all tech cards to pass to the canvas for line drawing
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset refs on re-render
  nodeRefs.current = [];
  const addNodeRef = useCallback((el: HTMLDivElement | null) => {
    if (el && !nodeRefs.current.includes(el)) {
      nodeRefs.current.push(el);
    }
  }, []);

  // Title GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        );
      }
      if (subRef.current) {
        gsap.set(subRef.current, { text: "" });
        gsap.to(subRef.current, {
          text: { value: "INITIALIZING TECHNOLOGY ECOSYSTEM...", preserveSpaces: true },
          duration: 2,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#05070d] py-32 overflow-hidden flex flex-col items-center font-mono selection:bg-[#00f3ff] selection:text-black"
    >
      {/* Background Layer */}
      <NeuralBackground nodeRefs={nodeRefs} />
      
      {/* Subtle radial glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.03)_0%,transparent_70%)] pointer-events-none rounded-full blur-[100px]" />

      {/* HEADER */}
      <div className="relative z-20 flex flex-col items-center text-center mb-24 px-4">
        <div className="flex items-center gap-4 mb-6 opacity-70">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[var(--cyan-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_10px_#00f3ff]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_10px_#00f3ff]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_10px_#00f3ff]" />
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[var(--cyan-primary)]" />
        </div>

        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[rgba(255,255,255,0.5)] mb-6 drop-shadow-[0_0_30px_rgba(0,243,255,0.3)] uppercase tracking-tight"
        >
          Tech Stack
        </h2>
        
        <div className="flex items-center gap-2">
          <span
            ref={subRef}
            className="text-sm md:text-base text-[var(--cyan-dim)] font-mono tracking-[0.25em]"
          ></span>
          <span className="w-2 h-4 bg-[var(--cyan-primary)] animate-pulse shadow-[0_0_8px_#00f3ff]" />
        </div>
      </div>

      {/* CONSTELLATION ECOSYSTEM */}
      <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-12 mx-auto flex flex-col gap-24 sm:gap-32 pb-32">
        {categories.map((cat, catIndex) => (
          <div key={cat.category} className="flex flex-col items-center w-full">
            
            {/* Category Cluster Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-12 sm:mb-16"
            >
              <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-[rgba(0,243,255,0.3)]" />
              <div className="relative flex items-center justify-center">
                <div className="absolute w-6 h-6 bg-[rgba(0,243,255,0.1)] rounded-full animate-ping" />
                <div className="w-2 h-2 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_12px_#00f3ff]" />
              </div>
              <h3 className="font-mono text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-[var(--cyan-primary)] drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
                {cat.category}
              </h3>
              <div className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-[rgba(0,243,255,0.3)]" />
            </motion.div>

            {/* Scattered Flex Wrap Cluster */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 w-full max-w-[1200px]">
              {cat.items.map((item, i) => (
                <TechNode
                  key={`${item.name}-${i}`}
                  item={item}
                  category={cat.category}
                  index={i}
                  nodeRef={addNodeRef}
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
