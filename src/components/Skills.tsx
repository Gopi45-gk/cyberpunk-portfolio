"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Data Matrix
const techMatrix = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
    ]
  },
  {
    category: "AI / ML",
    items: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
      { name: "Gradio", icon: null },
      { name: "Whisper", icon: null },
      { name: "Claude", icon: null },
      { name: "ChatGPT", icon: null },
      { name: "RAG", icon: null },
      { name: "Llama", icon: null },
      { name: "MediaPipe", icon: null }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "GoDaddy", icon: null }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" }
    ]
  },
  {
    category: "Design & Creative",
    items: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
      { name: "CapCut", icon: null },
      { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: "LottieFiles", icon: null }
    ]
  },
  {
    category: "IoT & Emerging Tech",
    items: [
      { name: "IoT", icon: null },
      { name: "Drone Technology", icon: null }
    ]
  },
  {
    category: "Platforms",
    items: [
      { name: "Antigravity", icon: null }
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typing Subheader
      gsap.to(subRef.current, {
        text: { value: "INITIALIZING TECHNOLOGY ECOSYSTEM...", preserveSpaces: true },
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Ambient Cyberpunk Network Graph Background
      if (networkRef.current) {
        const circles = networkRef.current.querySelectorAll("circle");
        const lines = networkRef.current.querySelectorAll("line");

        circles.forEach((circle) => {
          gsap.to(circle, {
            cx: `+=${(Math.random() - 0.5) * 60}`,
            cy: `+=${(Math.random() - 0.5) * 60}`,
            duration: 3 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });

        gsap.to(lines, {
          opacity: 0.15,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { amount: 3, from: "random" }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] py-24 px-6 md:px-12 lg:px-24 overflow-hidden perspective-1000">
      
      {/* Background Neural Network / Cyber Grid */}
      <svg 
        ref={networkRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
        style={{ opacity: 0.3 }}
      >
        <g stroke="rgba(0,243,255,0.08)" strokeWidth="1.5">
          {/* Complex ambient lines */}
          <line x1="5%" y1="10%" x2="25%" y2="40%" />
          <line x1="25%" y1="40%" x2="70%" y2="20%" />
          <line x1="70%" y1="20%" x2="95%" y2="60%" />
          <line x1="25%" y1="40%" x2="40%" y2="80%" />
          <line x1="40%" y1="80%" x2="80%" y2="90%" />
          <line x1="80%" y1="90%" x2="95%" y2="60%" />
        </g>
        <g fill="rgba(0,243,255,0.15)">
          <circle cx="5%" cy="10%" r="3" />
          <circle cx="25%" cy="40%" r="5" />
          <circle cx="70%" cy="20%" r="4" />
          <circle cx="95%" cy="60%" r="6" />
          <circle cx="40%" cy="80%" r="3" />
          <circle cx="80%" cy="90%" r="5" />
        </g>
        
        {/* Scan lines & Particles */}
        <rect width="100%" height="100%" fill="url(#scanlines)" opacity="0.1" />
        <defs>
          <pattern id="scanlines" patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="0" y1="0" x2="4" y2="0" stroke="rgba(0,243,255,0.2)" strokeWidth="1" />
          </pattern>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Massive Cyberpunk Title */}
        <div className="text-center mb-24">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 drop-shadow-[0_0_25px_rgba(0,243,255,0.6)]"
            style={{ textShadow: "0 0 20px rgba(0,243,255,0.8), 0 0 40px rgba(0,243,255,0.4)" }}
          >
            TECH STACK
          </h2>
          <div className="font-mono text-sm md:text-lg text-[var(--cyan-primary)] tracking-[0.3em] uppercase h-8 flex justify-center items-center">
            <span className="mr-2"></span>
            <span ref={subRef}></span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="flex flex-col gap-16">
          {techMatrix.map((category, i) => (
            <CategoryRow key={category.category} category={category} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CategoryRow({ category, index }: { category: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[var(--text-secondary)] font-mono text-sm uppercase tracking-[0.2em] mb-6 border-b border-[rgba(0,243,255,0.1)] pb-2 inline-block pr-8"
      >
        <span className="text-[var(--cyan-primary)] mr-2">//</span> {category.category}
      </motion.h3>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
          }
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 auto-rows-max"
      >
        {category.items.map((item: any) => (
          <TechCard key={item.name} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function TechCard({ item }: { item: any }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 }
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.05, 
        boxShadow: "0 0 30px rgba(0,243,255,0.4), inset 0 0 20px rgba(0,243,255,0.1)",
        borderColor: "rgba(0,243,255,0.8)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center justify-center w-full aspect-square bg-[rgba(10,10,10,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-2xl p-4 cursor-none overflow-hidden group"
    >
      {/* Holographic sweep effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(0,243,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" />
      
      {/* Official Logo or Fallback */}
      <div className="w-12 h-12 mb-3 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
        {item.icon ? (
          <img src={item.icon} alt={item.name} className="max-w-full max-h-full object-contain filter group-hover:brightness-125" />
        ) : (
          <div className="w-full h-full rounded-full border border-[var(--cyan-primary)] flex items-center justify-center text-[var(--cyan-primary)] font-mono font-bold text-lg shadow-[0_0_10px_rgba(0,243,255,0.5)]">
            {item.name.charAt(0)}
          </div>
        )}
      </div>

      <span className="text-[0.65rem] sm:text-xs font-mono text-[var(--text-secondary)] text-center tracking-wider uppercase z-10 group-hover:text-white transition-colors">
        {item.name}
      </span>
    </motion.div>
  );
}
