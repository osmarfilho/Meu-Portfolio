import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-neon-cyan text-sm mb-3">
          <span className="text-muted-foreground">{">"}</span> ./connect.sh
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">VAMOS</span>{" "}
          <span className="text-neon-pink text-glow-pink">CONSTRUIR</span>
          <br />
          <span className="text-neon-green text-glow-green">ALGO_ÉPICO</span>
          <span className="text-neon-green animate-blink">_</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Envie uma transmissão. Respondo em até 24h Earth-time.
        </p>

        <div className="bg-terminal-surface border border-neon-green/40 p-8 text-left mb-8 shadow-terminal">
          <div className="space-y-2 font-mono text-sm">
            <div><span className="text-neon-cyan">user@matrix:~$</span> <span className="text-neon-green">cat contact.txt</span></div>
            <div className="pl-4 text-muted-foreground">┌─ Email: <span className="text-foreground">osmar@dev.io</span></div>
            <div className="pl-4 text-muted-foreground">├─ Location: <span className="text-foreground">REMOTE / BRAZIL</span></div>
            <div className="pl-4 text-muted-foreground">└─ Status: <span className="text-neon-green">● AVAILABLE</span></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="cyber" size="lg" asChild>
            <a href="mailto:osmar@dev.io">
              <Mail className="mr-2 h-4 w-4" />
              SEND_EMAIL
            </a>
          </Button>
          <Button variant="cyberOutline" size="lg" asChild>
            <a href="#">
              <Github className="mr-2 h-4 w-4" />
              GITHUB
            </a>
          </Button>
          <Button variant="cyberOutline" size="lg" asChild>
            <a href="#">
              <Linkedin className="mr-2 h-4 w-4" />
              LINKEDIN
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
