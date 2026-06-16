"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "UzhavanAI",
      category: "Agri-Tech Solution",
      description: "Engineered an AI-based application for farmers to provide smart agricultural support and decision-making assistance.",
    },
    {
      title: "Uzhavan Bazaar",
      category: "E-Commerce Platform",
      description: "Architected an online platform enabling farmers to sell agricultural products directly to customers, reducing intermediaries.",
    },
    {
      title: "PRAHARI",
      category: "AI-Powered Fatigue Detection System",
      description: "Developed a real-time AI system to detect loco pilot fatigue and microsleep using Computer Vision and Deep Learning (CNN, BiLSTM).",
    },
    {
      title: "MOONIQ",
      category: "AI Crypto Intelligence Platform",
      description: "Built an AI-powered crypto analytics platform for sentiment analysis, rumor detection, and market trend prediction.",
    },
    {
      title: "EchoLive",
      category: "AI Communication Platform",
      description: "Developed a real-time multilingual communication system with speech recognition, translation, live captioning, and AI dubbing.",
    },
    {
      title: "SecureLand",
      category: "Property Intelligence Platform",
      description: "Created an AI-powered land protection system for fraud detection, ownership verification, and boundary monitoring using blockchain.",
    },
    {
      title: "Bioxen",
      category: "Biomedical Monitoring System",
      description: "Developed an AI-based cleanroom monitoring platform for pharmaceutical environments with anomaly detection.",
    }
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Key Projects</h2>
          <div className="w-24 h-1 bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-500 flex flex-col cursor-pointer"
            >
              <div className="mb-12">
                <p className="text-sm font-mono text-gray-400 mb-4">{project.category}</p>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-sm tracking-widest uppercase">View details</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
