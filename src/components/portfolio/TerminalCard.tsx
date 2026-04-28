import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "green" | "pink" | "cyan";
}

const variantMap = {
  green: "border-neon-green/40 hover:border-neon-green hover:shadow-glow-green",
  pink: "border-neon-pink/40 hover:border-neon-pink hover:shadow-glow-pink",
  cyan: "border-neon-cyan/40 hover:border-neon-cyan hover:shadow-glow-cyan",
};

const dotMap = {
  green: "bg-neon-green",
  pink: "bg-neon-pink",
  cyan: "bg-neon-cyan",
};

export const TerminalCard = ({ title, children, className, variant = "green" }: TerminalCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-terminal-surface border transition-all duration-300 group",
        variantMap[variant],
        className
      )}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/40">
          <div className="flex items-center gap-2">
            <span className={cn("w-2 h-2 rounded-full", dotMap[variant])} />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {title}
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-pink/60" />
            <span className="w-2 h-2 rounded-full bg-neon-yellow/60" />
            <span className="w-2 h-2 rounded-full bg-neon-green/60" />
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};
