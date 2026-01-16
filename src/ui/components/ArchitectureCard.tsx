import { ArchitectureItem } from "@/domain/data/profile";
import { cn } from "@/lib/utils";
interface ArchitectureCardProps {
  item: ArchitectureItem;
  index: number;
  className?: string;
}
export function ArchitectureCard({
  item,
  index,
  className
}: ArchitectureCardProps) {
  return (
    <article className={cn("relative pl-6 sm:pl-8 pb-6 sm:pb-8 last:pb-0", className)} aria-labelledby={`arch-${item.id}`}>
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />

      <div className="card-professional my-2 sm:my-4 px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-baseline gap-2 sm:gap-3 mb-1.5 sm:mb-2">
          <span className="font-mono text-xs sm:text-sm text-primary font-medium" aria-hidden="true">
            0{index + 1}
          </span>
          <h3 id={`arch-${item.id}`} className="text-base sm:text-lg font-semibold text-foreground">
            {item.title}
          </h3>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-5 sm:pl-8">
          {item.description}
        </p>
      </div>
    </article>
  );
}