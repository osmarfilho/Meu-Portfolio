import { Code2, Database, Cpu, Layout, Cloud, Wrench } from "lucide-react";

const skills = [
  { icon: Layout, label: "FRONTEND", items: "React / Next.js / Vue / Tailwind", color: "text-neon-green" },
  { icon: Code2, label: "BACKEND", items: "Node.js / Python / Django / FastAPI", color: "text-neon-pink" },
  { icon: Database, label: "DATABASE", items: "PostgreSQL / MongoDB / Redis", color: "text-neon-cyan" },
  { icon: Cloud, label: "DEVOPS", items: "Docker / AWS / CI-CD / Linux", color: "text-neon-yellow" },
  { icon: Cpu, label: "AI / ML", items: "OpenAI / LangChain / Embeddings", color: "text-neon-purple" },
  { icon: Wrench, label: "TOOLS", items: "Git / Vite / Webpack / Figma", color: "text-neon-green" },
];

export const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-terminal-surface/40 border-y border-border">
      <div className="container mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-neon-cyan text-sm mb-3">
            <span className="text-muted-foreground">{">"}</span> cat ./skills.json
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-neon-pink text-glow-pink">{"//"}</span>{" "}
            <span className="text-foreground">STACK_TÉCNICO</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-background p-8 group hover:bg-terminal-surface transition-colors duration-300"
              >
                <Icon className={`h-8 w-8 mb-4 ${s.color} group-hover:animate-pulse`} />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {`> ${s.label}`}
                </div>
                <div className="text-foreground text-sm">{s.items}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
