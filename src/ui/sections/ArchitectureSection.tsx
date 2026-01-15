import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { ArchitectureCard } from "@/ui/components/ArchitectureCard";
import { FolderTree, FileCode } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/ui/components/AnimatedSection";

const architectureIds = ["ddd", "layers", "components", "a11y", "performance"] as const;

export function ArchitectureSection() {
  const { t } = useTranslation();

  const architectureItems = architectureIds.map((id) => ({
    id,
    title: t(`architectureList.${id}.title`),
    description: t(`architectureList.${id}.description`),
  }));

  return (
    <section 
      id="architecture" 
      className="section-container bg-muted/30"
      aria-labelledby="architecture-heading"
    >
      <AnimatedSection>
        <SectionHeading
          label={t("architecture.label")}
          title={t("architecture.title")}
          description={t("architecture.description")}
        />
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Architecture explanation */}
        <StaggerContainer className="space-y-6">
          <StaggerItem>
            <div className="card-professional">
              <div className="flex items-center gap-3 mb-4">
                <FolderTree className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{t("architecture.projectStructure")}</h3>
              </div>
              <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`src/
├── domain/          # Data & business rules
│   └── data/        # Types & constants
├── ui/              # Presentation layer
│   ├── components/  # Reusable components
│   └── sections/    # Page sections
├── infra/           # External services
└── lib/             # Utilities`}
              </pre>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card-professional">
              <div className="flex items-center gap-3 mb-4">
                <FileCode className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">{t("architecture.techStack")}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  React 18 + TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  Tailwind CSS + Design Tokens
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  DDD Frontend Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  WCAG 2.1 AA Compliance
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Principles timeline */}
        <StaggerContainer staggerDelay={0.15}>
          {architectureItems.map((item, index) => (
            <StaggerItem key={item.id}>
              <ArchitectureCard 
                item={item} 
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
