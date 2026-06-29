"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

/* ════════════════════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════════════════════ */
interface TechItem {
  name: string;
  icon: string | null;
}

interface RingConfig {
  category: string;
  items: TechItem[];
  radius: number;
  duration: number;
  direction: "cw" | "ccw";
}

/* ════════════════════════════════════════════════════════════════
   ICON HELPER
   ════════════════════════════════════════════════════════════════ */
const DI = (n: string, v = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}/${n}-${v}.svg`;

/* ════════════════════════════════════════════════════════════════
   TECHNOLOGY DATA — 13 ORBITAL RINGS
   ════════════════════════════════════════════════════════════════ */
const rings: RingConfig[] = [
  {
    category: "PROGRAMMING",
    radius: 115,
    duration: 35,
    direction: "cw",
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
    radius: 160,
    duration: 45,
    direction: "ccw",
    items: [
      { name: "HTML5", icon: DI("html5") },
      { name: "CSS3", icon: DI("css3") },
      { name: "Tailwind", icon: DI("tailwindcss") },
      { name: "Bootstrap", icon: DI("bootstrap") },
      { name: "React", icon: DI("react") },
      { name: "Next.js", icon: DI("nextjs") },
      { name: "Vite", icon: DI("vitejs") },
      { name: "GSAP", icon: null },
      { name: "Framer", icon: null },
    ],
  },
  {
    category: "BACKEND",
    radius: 205,
    duration: 55,
    direction: "cw",
    items: [
      { name: "Node.js", icon: DI("nodejs") },
      { name: "Express", icon: DI("express") },
      { name: "FastAPI", icon: DI("fastapi") },
      { name: "Flask", icon: DI("flask") },
      { name: "Django", icon: DI("django", "plain") },
      { name: "REST API", icon: null },
      { name: "GraphQL", icon: DI("graphql", "plain") },
    ],
  },
  {
    category: "AI / ML",
    radius: 260,
    duration: 70,
    direction: "ccw",
    items: [
      { name: "TensorFlow", icon: DI("tensorflow") },
      { name: "PyTorch", icon: DI("pytorch") },
      { name: "Scikit", icon: DI("scikitlearn") },
      { name: "OpenCV", icon: DI("opencv") },
      { name: "MediaPipe", icon: null },
      { name: "NumPy", icon: DI("numpy") },
      { name: "Pandas", icon: DI("pandas") },
      { name: "Matplotlib", icon: DI("matplotlib") },
      { name: "Streamlit", icon: DI("streamlit") },
      { name: "Gradio", icon: null },
      { name: "Whisper", icon: null },
      { name: "LangChain", icon: null },
      { name: "HuggingFace", icon: null },
      { name: "ChatGPT", icon: null },
      { name: "Claude", icon: null },
      { name: "Gemini", icon: null },
      { name: "Llama", icon: null },
      { name: "RAG", icon: null },
      { name: "Ollama", icon: null },
    ],
  },
  {
    category: "DATABASE",
    radius: 310,
    duration: 80,
    direction: "cw",
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
    category: "CLOUD",
    radius: 355,
    duration: 90,
    direction: "ccw",
    items: [
      { name: "AWS", icon: DI("amazonwebservices", "original-wordmark") },
      { name: "Azure", icon: DI("azure") },
      { name: "GCP", icon: DI("googlecloud") },
      { name: "Vercel", icon: DI("vercel") },
      { name: "Netlify", icon: null },
      { name: "GoDaddy", icon: null },
    ],
  },
  {
    category: "DEVOPS",
    radius: 400,
    duration: 100,
    direction: "cw",
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
    category: "DESIGN",
    radius: 445,
    duration: 110,
    direction: "ccw",
    items: [
      { name: "Figma", icon: DI("figma") },
      { name: "Canva", icon: DI("canva") },
      { name: "Photoshop", icon: DI("photoshop") },
      { name: "Illustrator", icon: DI("illustrator", "plain") },
      { name: "Premiere", icon: DI("premierepro") },
      { name: "After Effects", icon: DI("aftereffects") },
      { name: "CapCut", icon: null },
      { name: "LottieFiles", icon: null },
    ],
  },
  {
    category: "DATA ANALYTICS",
    radius: 485,
    duration: 115,
    direction: "cw",
    items: [
      { name: "Power BI", icon: null },
      { name: "Tableau", icon: null },
      { name: "Excel", icon: null },
      { name: "Spark", icon: DI("apachespark") },
      { name: "Kafka", icon: DI("apachekafka") },
    ],
  },
  {
    category: "MOBILE",
    radius: 520,
    duration: 125,
    direction: "ccw",
    items: [
      { name: "React Native", icon: DI("react") },
      { name: "Flutter", icon: DI("flutter") },
      { name: "Android", icon: DI("android") },
      { name: "Kotlin", icon: DI("kotlin") },
    ],
  },
  {
    category: "SECURITY",
    radius: 555,
    duration: 135,
    direction: "cw",
    items: [
      { name: "JWT", icon: null },
      { name: "OAuth", icon: DI("oauth") },
      { name: "Firebase Auth", icon: DI("firebase", "plain") },
      { name: "SSL/TLS", icon: null },
    ],
  },
  {
    category: "IoT & EMERGING",
    radius: 590,
    duration: 120,
    direction: "ccw",
    items: [
      { name: "Arduino", icon: DI("arduino") },
      { name: "ESP32", icon: null },
      { name: "Raspberry Pi", icon: DI("raspberrypi") },
      { name: "Drone Tech", icon: null },
      { name: "IoT", icon: null },
      { name: "ROS", icon: null },
    ],
  },
  {
    category: "PLATFORMS",
    radius: 625,
    duration: 140,
    direction: "cw",
    items: [
      { name: "Colab", icon: null },
      { name: "Kaggle", icon: DI("kaggle") },
      { name: "Replit", icon: null },
      { name: "Antigravity", icon: null },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════
   STARFIELD PARTICLES (Canvas)
   ════════════════════════════════════════════════════════════════ */
function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let raf: number;
    interface Star { x: number; y: number; r: number; o: number; vx: number; vy: number; }
    let stars: Star[] = [];

    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const N = Math.min(120, Math.floor((c.width * c.height) / 12000));
    for (let i = 0; i < N; i++) {
      stars.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: Math.random() * 1.8 + 0.3,
        o: Math.random() * 0.5 + 0.05,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);

      // Connection lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,243,255,${0.04 * (1 - d / 120)})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Stars
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,243,255,${s.o})`;
        ctx.fill();

        // Glow
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
        g.addColorStop(0, `rgba(0,243,255,${s.o * 0.25})`);
        g.addColorStop(1, `rgba(0,243,255,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > c.width) s.vx *= -1;
        if (s.y < 0 || s.y > c.height) s.vy *= -1;
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.5 }} />;
}

/* ════════════════════════════════════════════════════════════════
   CENTER CORE — "GOPIKRISHNA S"
   ════════════════════════════════════════════════════════════════ */
const roles = ["AI Engineer", "Full Stack Developer", "ML Engineer", "Innovation Builder"];

function CenterCore() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none select-none">
      {/* Pulsing rings */}
      <div className="absolute w-[100px] h-[100px] rounded-full border border-[rgba(0,243,255,0.3)]" style={{ animation: "corePulse 4s ease-in-out infinite" }} />
      <div className="absolute w-[130px] h-[130px] rounded-full border border-[rgba(0,243,255,0.15)]" style={{ animation: "corePulse 4s ease-in-out 0.5s infinite" }} />
      <div className="absolute w-[160px] h-[160px] rounded-full border border-[rgba(0,243,255,0.08)]" style={{ animation: "corePulse 4s ease-in-out 1s infinite" }} />

      {/* Core glow */}
      <div className="absolute w-[80px] h-[80px] rounded-full bg-[rgba(0,243,255,0.15)] blur-[30px]" style={{ animation: "corePulse 4s ease-in-out infinite" }} />

      {/* Inner core */}
      <div
        className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 border-[rgba(0,243,255,0.6)] bg-[rgba(5,10,20,0.9)] backdrop-blur-xl"
        style={{
          boxShadow: "0 0 30px rgba(0,243,255,0.4), 0 0 60px rgba(0,243,255,0.15), inset 0 0 20px rgba(0,243,255,0.1)",
          animation: "corePulse 4s ease-in-out infinite",
        }}
      >
        <span
          className="text-xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--cyan-primary)]"
          style={{ textShadow: "0 0 15px rgba(0,243,255,0.8)" }}
        >
          GS
        </span>
      </div>

      {/* Name */}
      <span
        className="mt-3 font-mono text-[0.55rem] sm:text-[0.65rem] tracking-[0.3em] uppercase text-white/90 whitespace-nowrap"
        style={{ textShadow: "0 0 10px rgba(0,243,255,0.6)" }}
      >
        Gopikrishna S
      </span>

      {/* Cycling role */}
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIdx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}
          className="mt-1 font-mono text-[0.45rem] sm:text-[0.5rem] tracking-[0.2em] uppercase text-[var(--cyan-primary)] whitespace-nowrap"
        >
          {roles[roleIdx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   PLANET ICON — with fallback on error
   ════════════════════════════════════════════════════════════════ */
function PlanetIcon({ item }: { item: TechItem }) {
  const [err, setErr] = useState(false);

  if (!item.icon || err) {
    return (
      <div className="w-full h-full rounded-lg border border-[rgba(0,243,255,0.35)] bg-[rgba(0,243,255,0.06)] flex items-center justify-center text-[var(--cyan-primary)] font-mono font-bold text-[10px] sm:text-xs shadow-[0_0_8px_rgba(0,243,255,0.25)]">
        {item.name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={item.icon}
      alt={item.name}
      loading="lazy"
      onError={() => setErr(true)}
      className="max-w-full max-h-full object-contain drop-shadow-[0_0_4px_rgba(0,243,255,0.3)]"
    />
  );
}

/* ════════════════════════════════════════════════════════════════
   TECH PLANET — a single orbiting technology
   ════════════════════════════════════════════════════════════════ */
function TechPlanet({
  item,
  angle,
  radius,
  orbitDuration,
  direction,
  category,
  isPaused,
  onHover,
  onLeave,
}: {
  item: TechItem;
  angle: number;
  radius: number;
  orbitDuration: number;
  direction: "cw" | "ccw";
  category: string;
  isPaused: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [showTip, setShowTip] = useState(false);

  // Counter-rotation: reverse of orbit direction to keep planet upright
  const counterAnim = direction === "cw"
    ? `orbitSpin ${orbitDuration}s linear infinite reverse`
    : `orbitSpin ${orbitDuration}s linear infinite`;

  return (
    <div
      className="absolute"
      style={{
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
      }}
    >
      {/* Counter-rotating wrapper */}
      <div
        style={{
          animation: counterAnim,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center rounded-xl bg-[rgba(8,12,20,0.75)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] overflow-hidden group"
          style={{
            width: 52,
            height: 52,
            marginLeft: -26,
            marginTop: -26,
            boxShadow: "0 0 12px rgba(0,243,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 35px rgba(0,243,255,0.5), 0 0 70px rgba(0,243,255,0.15), inset 0 0 20px rgba(0,243,255,0.1)",
            borderColor: "rgba(0,243,255,0.8)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          onMouseEnter={() => { setShowTip(true); onHover(); }}
          onMouseLeave={() => { setShowTip(false); onLeave(); }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,243,255,0.3)] to-transparent group-hover:via-[rgba(0,243,255,0.8)] transition-all duration-300" />

          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[rgba(0,243,255,0.03)] group-hover:bg-[rgba(0,243,255,0.08)] transition-all duration-300 rounded-xl" />

          {/* Icon */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
            <PlanetIcon item={item} />
          </div>

          {/* Name */}
          <span className="text-[5px] sm:text-[6px] font-mono text-[var(--text-secondary)] text-center tracking-wider uppercase z-10 group-hover:text-[var(--cyan-primary)] transition-colors duration-300 mt-0.5 leading-tight px-0.5 truncate max-w-full">
            {item.name}
          </span>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTip && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 top-[60px] z-50 pointer-events-none"
            >
              <div
                className="px-3 py-2 rounded-lg bg-[rgba(5,10,20,0.95)] backdrop-blur-xl border border-[rgba(0,243,255,0.3)] whitespace-nowrap"
                style={{ boxShadow: "0 0 20px rgba(0,243,255,0.2)" }}
              >
                <div className="text-[10px] font-mono text-white font-semibold tracking-wide">{item.name}</div>
                <div className="text-[8px] font-mono text-[var(--cyan-primary)] tracking-wider uppercase mt-0.5 opacity-70">{category}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   ORBITAL RING — one rotating ring with its planets
   ════════════════════════════════════════════════════════════════ */
function OrbitalRing({ ring, index, revealed }: { ring: RingConfig; index: number; revealed: boolean }) {
  const [paused, setPaused] = useState(false);

  const orbitAnim = ring.direction === "cw"
    ? `orbitSpin ${ring.duration}s linear infinite`
    : `orbitSpin ${ring.duration}s linear infinite reverse`;


  return (
    <>
      {/* Rotating container for planets */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          animation: orbitAnim,
          animationPlayState: paused ? "paused" : "running",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.8s ease",
          transitionDelay: `${0.3 + index * 0.15}s`,
        }}
      >
        {ring.items.map((item, j) => {
          const angle = (360 / ring.items.length) * j;
          return (
            <TechPlanet
              key={item.name}
              item={item}
              angle={angle}
              radius={ring.radius}
              orbitDuration={ring.duration}
              direction={ring.direction}
              category={ring.category}
              isPaused={paused}
              onHover={() => setPaused(true)}
              onLeave={() => setPaused(false)}
            />
          );
        })}
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   SOLAR SYSTEM — Desktop view (>= 1024px)
   ════════════════════════════════════════════════════════════════ */
function SolarSystem({ revealed }: { revealed: boolean }) {
  const maxR = rings[rings.length - 1].radius;
  const size = (maxR + 40) * 2; // Container size in px

  return (
    <div className="relative mx-auto" style={{ width: size, height: size, maxWidth: "100%" }}>
      {/* Scale container to fit viewport */}
      <div
        className="absolute inset-0 origin-center"
        style={{
          width: size,
          height: size,
          transform: `scale(var(--solar-scale, 1))`,
        }}
      >
        {/* SVG layer for orbital path rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${size} ${size}`}
          style={{ opacity: revealed ? 1 : 0, transition: "opacity 1s ease 0.5s" }}
        >
          <g transform={`translate(${size / 2}, ${size / 2})`}>
            {rings.map((ring, i) => (
              <circle
                key={ring.category}
                cx="0"
                cy="0"
                r={ring.radius}
                fill="none"
                stroke={`rgba(0,243,255,${Math.max(0.06, 0.2 - i * 0.01)})`}
                strokeWidth="1"
                strokeDasharray="3 8"
                style={{ animation: `energyFlow ${ring.duration * 0.4}s linear infinite` }}
              />
            ))}
          </g>
        </svg>

        {/* Center core */}
        <CenterCore />

        {/* Orbital rings with planets */}
        {rings.map((ring, i) => (
          <OrbitalRing key={ring.category} ring={ring} index={i} revealed={revealed} />
        ))}

        {/* Ring category labels */}
        {rings.map((ring, i) => {
          const labelAngle = -45; // Position label at -45 degrees
          const rad = (labelAngle * Math.PI) / 180;
          const lx = Math.cos(rad) * ring.radius;
          const ly = Math.sin(rad) * ring.radius;
          return (
            <div
              key={`label-${ring.category}`}
              className="absolute pointer-events-none z-20"
              style={{
                top: `calc(50% + ${ly}px)`,
                left: `calc(50% + ${lx}px)`,
                opacity: revealed ? 0.35 : 0,
                transition: `opacity 1s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <span className="font-mono text-[5px] sm:text-[6px] tracking-[0.2em] uppercase text-[var(--cyan-primary)] whitespace-nowrap">
                {ring.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MOBILE MARQUEE ROW — horizontal auto-scrolling strip
   ════════════════════════════════════════════════════════════════ */
function MobileMarquee({ ring, index, revealed }: { ring: RingConfig; index: number; revealed: boolean }) {
  const dir = ring.direction === "cw" ? "normal" : "reverse";
  const dur = ring.duration * 0.6; // Faster on mobile

  return (
    <motion.div
      initial={{ opacity: 0, x: ring.direction === "cw" ? -40 : 40 }}
      animate={revealed ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      className="w-full overflow-hidden"
    >
      {/* Category label */}
      <div className="flex items-center gap-2 mb-2 px-1">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_6px_rgba(0,243,255,0.6)]" />
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--text-secondary)]">
          {ring.category}
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[rgba(0,243,255,0.12)] to-transparent" />
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{
            animation: `marqueeScroll ${dur}s linear infinite ${dir}`,
          }}
        >
          {/* Content + duplicate for seamless loop */}
          {[...ring.items, ...ring.items].map((item, j) => (
            <div
              key={`${item.name}-${j}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-[68px] h-[68px] rounded-xl bg-[rgba(8,12,20,0.7)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] overflow-hidden"
              style={{ boxShadow: "0 0 10px rgba(0,243,255,0.05)" }}
            >
              <div className="w-7 h-7 flex items-center justify-center mb-1">
                <PlanetIcon item={item} />
              </div>
              <span className="text-[5.5px] font-mono text-[var(--text-secondary)] tracking-wider uppercase text-center leading-tight px-0.5">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN SKILLS COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Responsive check
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Dynamic solar system scaling
  useEffect(() => {
    const updateScale = () => {
      if (!systemRef.current) return;
      const maxR = rings[rings.length - 1].radius;
      const idealSize = (maxR + 40) * 2;
      const containerW = systemRef.current.parentElement?.offsetWidth || idealSize;
      const scale = Math.min(1, containerW / idealSize);
      systemRef.current.style.setProperty("--solar-scale", String(scale));
      // Update container height to match scaled size
      systemRef.current.style.height = `${idealSize * scale}px`;
    };
    if (isDesktop) {
      updateScale();
      window.addEventListener("resize", updateScale);
      return () => window.removeEventListener("resize", updateScale);
    }
  }, [isDesktop]);

  // Mouse parallax
  const handleMouse = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  }, []);

  useEffect(() => {
    const s = sectionRef.current;
    if (!s) return;
    s.addEventListener("mousemove", handleMouse);
    return () => s.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  // Apply parallax
  useEffect(() => {
    if (!systemRef.current || !isDesktop) return;
    gsap.to(systemRef.current, {
      rotateX: -mousePos.y * 4,
      rotateY: mousePos.x * 4,
      duration: 1.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [mousePos, isDesktop]);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1.5,
            ease: "elastic.out(1,0.75)",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      }

      // Typing subtitle
      if (subRef.current) {
        gsap.set(subRef.current, { text: "" });
        gsap.to(subRef.current, {
          text: { value: "INITIALIZING TECHNOLOGY ECOSYSTEM...", preserveSpaces: true },
          duration: 2.5, ease: "none", delay: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      }

      // Reveal flag
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => setRevealed(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-[var(--bg-void)] text-[var(--text-primary)] py-16 sm:py-20 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Starfield background */}
      <Starfield />

      {/* Ambient glow orbs */}
      <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-[rgba(0,243,255,0.03)] blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-[rgba(0,100,255,0.04)] blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(0,243,255,0.02)] blur-[120px] pointer-events-none z-0" />

      {/* Content container with parallax */}
      <div
        ref={systemRef}
        className="relative z-10 mx-auto px-4 sm:px-6"
        style={{ transformStyle: "preserve-3d", maxWidth: "1400px" }}
      >
        {/* ─── HEADER ─── */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Top decoration */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[rgba(0,243,255,0.5)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[rgba(0,243,255,0.5)]" />
          </div>

          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-b from-white via-[rgba(200,240,255,0.95)] to-[rgba(100,180,220,0.6)] mb-4 sm:mb-5 will-change-transform"
            style={{
              textShadow: "0 0 30px rgba(0,243,255,0.8), 0 0 60px rgba(0,243,255,0.4), 0 0 100px rgba(0,243,255,0.2)",
            }}
          >
            TECH STACK
          </h2>

          {/* Subtitle typing */}
          <div className="font-mono text-[10px] sm:text-xs md:text-sm text-[var(--cyan-primary)] tracking-[0.2em] sm:tracking-[0.3em] uppercase h-5 sm:h-7 flex justify-center items-center">
            <span className="inline-flex items-center gap-0.5">
              <span ref={subRef}></span>
              <span className="animate-pulse text-[var(--cyan-primary)]">_</span>
            </span>
          </div>

          {/* Bottom decoration */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent to-[rgba(0,243,255,0.3)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(0,243,255,0.5)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-primary)] shadow-[0_0_8px_rgba(0,243,255,0.6)]" />
            <div className="w-1 h-1 rounded-full bg-[rgba(0,243,255,0.5)]" />
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent to-[rgba(0,243,255,0.3)]" />
          </div>
        </div>

        {/* ─── SOLAR SYSTEM (Desktop) / MARQUEE ROWS (Mobile) ─── */}
        {isDesktop ? (
          <SolarSystem revealed={revealed} />
        ) : (
          <div className="flex flex-col gap-5 px-1">
            {rings.map((ring, i) => (
              <MobileMarquee key={ring.category} ring={ring} index={i} revealed={revealed} />
            ))}
          </div>
        )}

        {/* ─── FOOTER DECORATION ─── */}
        <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 opacity-40">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[rgba(0,243,255,0.4)]" />
          <span className="font-mono text-[7px] sm:text-[8px] tracking-[0.4em] text-[rgba(0,243,255,0.5)] uppercase">
            {rings.reduce((a, r) => a + r.items.length, 0)} technologies loaded
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[rgba(0,243,255,0.4)]" />
        </div>
      </div>

      {/* ─── INJECTED KEYFRAMES ─── */}
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes corePulse {
          0%, 100% { transform: scale(1);   opacity: 0.7; }
          50%      { transform: scale(1.08); opacity: 1;   }
        }

        @keyframes energyFlow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -80; }
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
