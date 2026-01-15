import { useTranslation } from "react-i18next";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { Code, Terminal } from "lucide-react";
import profileImage from "@/assets/gabriel-profile.jpg";

export function AboutSection() {
  const { t } = useTranslation();

  const focusValues = t("code.focusValues", { returnObjects: true }) as string[];

  return (
    <section 
      id="about" 
      className="section-container"
      aria-labelledby="about-heading"
    >
      <SectionHeading
        label={t("about.label")}
        title={t("about.title")}
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile photo and intro */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-border shadow-card">
                <img 
                  src={profileImage} 
                  alt="Gabriel Luiz - Frontend Software Engineer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-2 border-background" aria-hidden="true" />
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              {t("profile.about")}
            </p>
          </div>
          
          <div className="divider-gradient" aria-hidden="true" />

          {/* Code snippet aesthetic */}
          <div className="card-professional font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Terminal className="w-4 h-4" aria-hidden="true" />
              <span>{t("code.philosophy")}</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const approach = {
  ${t("code.focus")}: ${JSON.stringify(focusValues)},
  ${t("code.principle")}: "${t("code.principleValue")}",
  ${t("code.goal")}: "${t("code.goalValue")}"
};`}
              </code>
            </pre>
          </div>
        </div>

        {/* Stats/highlights */}
        <aside className="lg:col-span-2 space-y-6" aria-label={t("about.highlights")}>
          <div className="card-professional text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-4xl font-bold text-foreground">6+</span>
            </div>
            <p className="text-muted-foreground">{t("about.yearsExperience")}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-professional text-center py-4">
              <span className="block text-2xl font-bold text-foreground mb-1">React</span>
              <span className="text-sm text-muted-foreground">{t("about.main")}</span>
            </div>
            <div className="card-professional text-center py-4">
              <span className="block text-2xl font-bold text-foreground mb-1">TS</span>
              <span className="text-sm text-muted-foreground">TypeScript</span>
            </div>
          </div>

          <div className="card-professional">
            <h3 className="font-semibold text-foreground mb-3">{t("about.alsoWorkWith")}</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Angular", "Single-SPA", "Monorepos", "Design Systems", "Node.js"].map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-muted rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
