"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C", "SQL", "Data Structures & Algorithms (DSA)", "Javascript", "HTML", "CSS", "Node.Js"]
    },
    {
      title: "Tools & Analytics",
      skills: ["Power BI", "Microsoft Excel", "Jupyter Notebook", "VS Code", "Firebase", "Github"]
    },
    {
      title: "Domains",
      skills: ["Fullstack Development", "Machine Learning", "Computer Vision", "Data Analytics", "IoT"]
    }
  ];

  return (
    <section className="relative z-20 min-h-screen flex items-center bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Abstract background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-white/20 mb-8"></div>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Equipped with a diverse set of programming languages, analytical tools, and domain expertise to build intelligent, end-to-end solutions.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            {skillCategories.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold mb-6 text-white/80 uppercase tracking-widest text-sm">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, j) => (
                    <span 
                      key={j}
                      className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
