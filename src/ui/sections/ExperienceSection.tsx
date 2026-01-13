import { experiences } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { ExperienceCard } from "@/ui/components/ExperienceCard";

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="section-container"
      aria-labelledby="experience-heading"
    >
      <SectionHeading
        label="// experiência"
        title="Trajetória profissional"
        description="Histórico de contribuições técnicas em produtos de alta complexidade."
      />

      <div className="space-y-8 stagger-children">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
