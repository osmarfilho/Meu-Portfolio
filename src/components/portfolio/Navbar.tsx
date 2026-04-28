import { Terminal } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="h-5 w-5 text-neon-green group-hover:rotate-12 transition-transform" />
          <span className="font-bold tracking-tight text-sm md:text-base">
            <span className="text-foreground">OSMAR_NODE</span>
            <span className="text-neon-pink"> // </span>
            <span className="text-neon-cyan">PORTFOLIO</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {[
            { href: "#projects", label: "projects" },
            { href: "#skills", label: "skills" },
            { href: "#contact", label: "contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-neon-green transition-colors glitch-hover"
            >
              <span className="text-neon-green">./</span>{link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-neon-green">
          <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
          <span className="hidden sm:inline">ONLINE</span>
        </div>
      </div>
    </nav>
  );
};
