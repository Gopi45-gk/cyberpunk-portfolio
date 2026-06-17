"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Building Intelligent Systems",
  "Crafting Cinematic Experiences",
  "Engineering AI at Scale",
  "Turning Data into Decisions"
];

export default function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 overflow-hidden relative w-full text-center mt-2">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[var(--cyan-dim)] font-mono text-sm tracking-widest uppercase absolute w-full"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
