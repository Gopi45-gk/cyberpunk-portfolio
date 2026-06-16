import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] selection:bg-white selection:text-black">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Experience />
      
      {/* Footer */}
      <footer className="bg-[#121212] text-white/50 py-8 text-center border-t border-white/10 relative z-20">
        <p>© {new Date().getFullYear()} GOPIKRISHNA S. All rights reserved.</p>
        <p className="mt-2 text-sm">Chennai | 7904223010 | <a href="mailto:gopikaru0090@gmail.com" className="hover:text-white transition-colors">gopikaru0090@gmail.com</a></p>
      </footer>
    </main>
  );
}
