"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";

export default function Certifications() {
  const certifications = [
    { title: "NPTEL: Introduction to IoT (Elite)", icon: <Award className="w-6 h-6" /> },
    { title: "NPTEL: Joy of Computing (Elite)", icon: <Award className="w-6 h-6" /> },
    { title: "HackerRank: SQL (Intermediate) Certification", icon: <Award className="w-6 h-6" /> },
    { title: "HackerRank: Software Engineer Certification", icon: <Award className="w-6 h-6" /> },
    { title: "Typewriting: Junior Grade English (First Class with Distinction)", icon: <Medal className="w-6 h-6" /> }
  ];

  const achievements = [
    "1st Prize: Project Expo at Vel Tech R&D Institute and Agni College of Technology.",
    "1st Prize: Paper Presentation at King’s College of Engineering and Sri Venkateshwara Engineering and Technology.",
    "PALS Innowah Finalist, awarded Best Appreciation Award and Amazon Voucher for outstanding project innovation.",
    "Hackathons: Best Team Award in Hackathon–Codeathon (Prathyusha Engineering College); 13th Rank in NIDAR 2025 (National-level); Finalist in India–Israel Hackathon (Sri Ramakrishna Engineering College)."
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Honors & Certifications</h2>
          <div className="w-24 h-1 bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications Side */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-white/50" />
              Global Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 bg-white/10 rounded-lg text-white">
                    {cert.icon}
                  </div>
                  <p className="font-medium">{cert.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Side */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="text-white/50" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white before:rounded-full"
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
