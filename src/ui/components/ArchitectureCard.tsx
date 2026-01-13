import { ArchitectureItem } from "@/domain/data/profile";
import { cn } from "@/lib/utils";

interface ArchitectureCardProps {
  item: ArchitectureItem;
  index: number;
  className?: string;
}

export function ArchitectureCard({ item, index, className }: ArchitectureCardProps) {
  return (
    <article 
      className={cn(
        "relative pl-8 pb-8 last:pb-0",
        className
      )}
      aria-labelledby={`arch-${item.id}`}
    >
      {/* Timeline connector */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-px bg-border"
        aria-hidden="true"
      />
      
      {/* Timeline dot */}
      <div 
        className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"
        aria-hidden="true"
      />

      <div className="card-professional">
        <div className="flex items-baseline gap-3 mb-2">
          <span 
            className="font-mono text-sm text-primary font-medium"
            aria-hidden="true"
          >
            0{index + 1}
          </span>
          <h3 
            id={`arch-${item.id}`}
            className="text-lg font-semibold text-foreground"
          >
            {item.title}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-8">
          {item.description}
        </p>
      </div>
    </article>
  );
}
