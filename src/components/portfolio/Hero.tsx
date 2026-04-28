import { Terminal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-20 overflow-hidden">
      {/* Animated scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-scan pointer-events-none" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/40 bg-neon-green/5 text-neon-green text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
            SYSTEM_ONLINE // STATUS: ACTIVE
          </div>

          <div className="space-y-4">
            <p className="text-neon-cyan text-sm md:text-base">
              <span className="text-muted-foreground">{">"}</span> whoami
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
              <span className="block text-foreground glitch-hover">OSMAR_NODE</span>
              <span className="block text-neon-pink text-glow-pink mt-2">
                {"// DEV"}
                <span className="text-neon-green animate-blink">_</span>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              <span className="text-neon-green">{"$"}</span> Construindo interfaces de alta performance,
              sistemas distribuídos e automações com estética{" "}
              <span className="text-neon-cyan text-glow-cyan">cyberpunk</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="cyber" size="lg" asChild>
              <a href="#projects">
                <Terminal className="mr-2 h-4 w-4" />
                ./view_projects
              </a>
            </Button>
            <Button variant="cyberOutline" size="lg" asChild>
              <a href="#contact">
                <ChevronRight className="mr-2 h-4 w-4" />
                init_contact
              </a>
            </Button>
          </div>

          <div className="flex gap-6 pt-4 text-xs uppercase tracking-widest text-muted-foreground border-t border-border pt-6">
            <div>
              <div className="text-neon-green text-2xl font-bold">04+</div>
              <div className="mt-1">YEARS_EXP</div>
            </div>
            <div>
              <div className="text-neon-pink text-2xl font-bold">32</div>
              <div className="mt-1">PROJECTS</div>
            </div>
            <div>
              <div className="text-neon-cyan text-2xl font-bold">∞</div>
              <div className="mt-1">COFFEE</div>
            </div>
          </div>
        </div>

        {/* Terminal window */}
        <div className="relative animate-fade-in">
          <div className="absolute -inset-1 bg-gradient-glitch opacity-30 blur-xl" />
          <div className="relative bg-terminal-surface border border-neon-green/40 shadow-terminal">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/60">
              <span className="w-3 h-3 rounded-full bg-neon-pink/80" />
              <span className="w-3 h-3 rounded-full bg-neon-yellow/80" />
              <span className="w-3 h-3 rounded-full bg-neon-green/80" />
              <span className="ml-3 text-xs text-muted-foreground">~ /osmar/portfolio.sh</span>
            </div>
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
{`> ${''}`}<span className="text-neon-green">init</span>{` --user osmar
[OK] loading neural_modules...
[OK] mounting /dev/creativity
[OK] auth: `}<span className="text-neon-cyan">developer@matrix</span>{`

> stack `}<span className="text-muted-foreground">--list</span>{`
  ├─ `}<span className="text-neon-pink">react</span>{`     // frontend
  ├─ `}<span className="text-neon-pink">typescript</span>{`// type-safe
  ├─ `}<span className="text-neon-pink">node.js</span>{`   // backend
  ├─ `}<span className="text-neon-pink">python</span>{`    // automation
  └─ `}<span className="text-neon-pink">postgres</span>{`  // database

> status
`}<span className="text-neon-green">●</span>{` AVAILABLE_FOR_HIRE`}<span className="text-neon-green animate-blink">_</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
