import { useTranslation } from "react-i18next";
import { experiences } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { ExperienceCard } from "@/ui/components/ExperienceCard";

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
      <SectionHeading
        label={t("experience.label")}
        title={t("experience.title")}
        description={t("experience.description")}
      />

      <div className="space-y-8 stagger-children">
        {translatedExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
