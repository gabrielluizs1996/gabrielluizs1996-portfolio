import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ 
  label, 
  title, 
  description, 
  className,
  align = "left" 
}: SectionHeadingProps) {
  return (
    <header 
      className={cn(
        "mb-8 sm:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="section-heading" aria-hidden="true">
        {label}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
