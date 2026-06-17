import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-[#050505] text-white">
      <Hero />
      <div className="relative z-10 h-[400vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      

    </main>
  );
}
