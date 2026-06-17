"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  ambientFloat?: boolean;
}

export default function GlassCard({ children, className = "", ambientFloat = false }: GlassCardProps) {
  if (ambientFloat) {
    return (
      <motion.div
        className={`glass-card rounded-2xl p-6 relative overflow-hidden ${className}`}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`glass-card rounded-2xl p-6 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
