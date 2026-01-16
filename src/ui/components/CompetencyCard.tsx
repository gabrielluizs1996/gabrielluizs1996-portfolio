import { Competency } from "@/domain/data/profile";
import { cn } from "@/lib/utils";
import { 
  Layers, 
  Accessibility, 
  Zap, 
  RefreshCw, 
  GitBranch,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Accessibility,
  Zap,
  RefreshCw,
  GitBranch,
};

interface CompetencyCardProps {
  competency: Competency;
  className?: string;
}

export function CompetencyCard({ competency, className }: CompetencyCardProps) {
  const Icon = iconMap[competency.icon] || Layers;

  return (
    <article 
      className={cn("card-professional group h-full", className)}
      aria-labelledby={`competency-${competency.id}`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div 
          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent flex items-center justify-center transition-colors group-hover:bg-primary/10"
          aria-hidden="true"
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 
            id={`competency-${competency.id}`}
            className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2"
          >
            {competency.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {competency.description}
          </p>
        </div>
      </div>
    </article>
  );
}
