"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      degree: "B.E in Artificial Intelligence & Machine Learning",
      institution: "Prathyusha Engineering College",
      year: "2023 – 2027",
      score: "CGPA: 8.71"
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Kovur Boys Government Hr. Sec. School",
      year: "2022 – 2023",
      score: "80%"
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "Kovur Boys Government Hr. Sec. School",
      year: "2020 – 2021",
      score: "Completed"
    }
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-right md:text-left flex flex-col md:items-start items-end"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Education</h2>
          <div className="w-24 h-1 bg-white/20"></div>
        </motion.div>

        <div className="space-y-8">
          {educationList.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
              <div className="text-left md:text-right flex flex-row md:flex-col gap-4 md:gap-1 items-center md:items-end">
                <span className="font-mono text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">{edu.year}</span>
                <span className="font-bold text-[#EAEAEA]">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
