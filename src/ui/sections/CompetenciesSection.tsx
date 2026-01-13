import { competencies } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { CompetencyCard } from "@/ui/components/CompetencyCard";

export function CompetenciesSection() {
  return (
    <section 
      id="competencies" 
      className="section-container bg-muted/30"
      aria-labelledby="competencies-heading"
    >
      <SectionHeading
        label="// competências"
        title="Áreas de especialização"
        description="Foco em construir software frontend que escala, performa e inclui todos os usuários."
      />

      <div className="grid md:grid-cols-2 gap-6 stagger-children">
        {competencies.map((competency) => (
          <CompetencyCard key={competency.id} competency={competency} />
        ))}
      </div>
    </section>
  );
}
