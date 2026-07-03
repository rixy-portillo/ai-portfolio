import { About } from "@/components/sections/About";
import { AIGuide } from "@/components/sections/AIGuide";
import { Contact } from "@/components/sections/Contact";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AIGuide />
      <About />
      <Projects />
      <EngineeringPhilosophy />
      <Contact />
    </main>
  );
}
