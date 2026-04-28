import { ExternalLink, Github } from "lucide-react";
import { TerminalCard } from "./TerminalCard";

const projects = [
  {
    id: "01",
    title: "SISTEMA_VENDAS_01",
    tech: ["React", "Django", "PostgreSQL"],
    desc: "Interface de alta performance para controle de estoque e vendas com dashboard em tempo real.",
    variant: "green" as const,
  },
  {
    id: "02",
    title: "NEURAL_DASHBOARD",
    tech: ["TypeScript", "Tailwind", "Vite"],
    desc: "Monitoramento de métricas em tempo real com estética CRT e visualizações interativas.",
    variant: "pink" as const,
  },
  {
    id: "03",
    title: "BOT_AUTOMATION_X",
    tech: ["Python", "Node.js", "Docker"],
    desc: "Automação de processos via terminal remoto com pipeline assíncrono escalável.",
    variant: "cyan" as const,
  },
  {
    id: "04",
    title: "CRYPTO_TRACKER",
    tech: ["Next.js", "WebSocket", "Redis"],
    desc: "Tracking de criptoativos em tempo real com alertas configuráveis e análise técnica.",
    variant: "green" as const,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 relative">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-neon-cyan text-sm mb-3">
            <span className="text-muted-foreground">{">"}</span> ls ./projects --all
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-pink text-glow-pink">{"//"}</span>{" "}
            <span className="text-foreground">PROJETOS_SELECIONADOS</span>
          </h2>
          <p className="text-muted-foreground">
            Casos reais de produção. Código limpo, performance e arquitetura escalável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <TerminalCard key={p.id} title={`PROJECT_${p.id}`} variant={p.variant}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold tracking-tight glitch-hover">
                    {p.title}
                  </h3>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="hover:text-neon-green transition-colors" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" className="hover:text-neon-cyan transition-colors" aria-label="Live demo">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs border border-border bg-background/60 text-neon-green"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalCard>
          ))}
        </div>
      </div>
    </section>
  );
};
