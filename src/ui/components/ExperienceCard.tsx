import { Experience } from "@/domain/data/profile";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/utils";
import { Briefcase, CheckCircle } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <article 
      className={cn("card-professional", className)}
      aria-labelledby={`experience-${experience.id}`}
    >
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center"
            aria-hidden="true"
          >
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 
              id={`experience-${experience.id}`}
              className="text-xl font-semibold text-foreground"
            >
              {experience.role}
            </h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
        </div>
        <time 
          className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full self-start"
          dateTime={experience.period}
        >
          {experience.period}
        </time>
      </header>

      <ul className="space-y-3 mb-6" aria-label="Principais realizações">
        {experience.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle 
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" 
              aria-hidden="true"
            />
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>

      <footer className="pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </footer>
    </article>
  );
}
