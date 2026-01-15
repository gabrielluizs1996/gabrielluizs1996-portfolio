import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { CompetencyCard } from "@/ui/components/CompetencyCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/ui/components/AnimatedSection";

const competencyIds = ["architecture", "accessibility", "performance", "legacy", "integration"] as const;

const iconMap: Record<string, string> = {
  architecture: "Layers",
  accessibility: "Accessibility",
  performance: "Zap",
  legacy: "RefreshCw",
  integration: "GitBranch",
};

export function CompetenciesSection() {
  const { t } = useTranslation();

  const competencies = competencyIds.map((id) => ({
    id,
    title: t(`competencyList.${id}.title`),
    description: t(`competencyList.${id}.description`),
    icon: iconMap[id],
  }));

  return (
    <section 
      id="competencies" 
      className="section-container bg-muted/30"
      aria-labelledby="competencies-heading"
    >
      <AnimatedSection>
        <SectionHeading
          label={t("competencies.label")}
          title={t("competencies.title")}
          description={t("competencies.description")}
        />
      </AnimatedSection>

      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {competencies.map((competency) => (
          <StaggerItem key={competency.id}>
            <CompetencyCard competency={competency} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
