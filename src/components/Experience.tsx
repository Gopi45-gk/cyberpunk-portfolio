"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "ReTech Solutions Private Limited",
      duration: "6 Weeks",
      description: "Gained hands-on experience in implementing machine learning models and conducting thorough data analysis to derive actionable insights."
    },
    {
      role: "Fullstack Development Intern",
      company: "Femtosoft Technology",
      duration: "1 Month",
      description: "Completed intensive training in full-stack development using Python, building functional end-to-end components."
    },
    {
      role: "Database Internship",
      company: "NIELIT",
      duration: "1 Month",
      description: "Specialized in MySQL and database management, focusing on schema design and relational data optimization."
    },
    {
      role: "Industry Training",
      company: "Career Solutions",
      duration: "1 Month",
      description: "Selected for a competitive industry-readiness training program focusing on professional software standards and corporate workflow."
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
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Experience</h2>
          <div className="w-24 h-1 bg-white/20"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#121212] text-white/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <span className="text-sm text-gray-400 font-mono mt-1 md:mt-0">{exp.duration}</span>
                </div>
                <h4 className="text-white/70 mb-4">{exp.company}</h4>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
