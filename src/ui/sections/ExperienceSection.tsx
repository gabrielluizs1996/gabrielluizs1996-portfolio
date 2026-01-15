import { useTranslation } from "react-i18next";
import { experiences } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { ExperienceCard } from "@/ui/components/ExperienceCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/ui/components/AnimatedSection";

export function ExperienceSection() {
  const { t } = useTranslation();

  const translatedExperiences = experiences.map((exp) => ({
    ...exp,
    company: t(`experienceList.${exp.id}.company`),
    role: t(`experienceList.${exp.id}.role`),
    highlights: t(`experienceList.${exp.id}.highlights`, { returnObjects: true }) as string[],
  }));

  return (
    <section 
      id="experience" 
      className="section-container"
      aria-labelledby="experience-heading"
    >
      <AnimatedSection>
        <SectionHeading
          label={t("experience.label")}
          title={t("experience.title")}
          description={t("experience.description")}
        />
      </AnimatedSection>

      <StaggerContainer className="space-y-8">
        {translatedExperiences.map((experience) => (
          <StaggerItem key={experience.id}>
            <ExperienceCard experience={experience} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
