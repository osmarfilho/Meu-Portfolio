import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scanlines crt-flicker">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        <span className="text-neon-green">{">"}</span> © 2026 OSMAR_NODE //{" "}
        <span className="text-neon-pink">END_OF_TRANSMISSION</span>
        <span className="text-neon-green animate-blink">_</span>
      </footer>
    </div>
  );
};

export default Index;
