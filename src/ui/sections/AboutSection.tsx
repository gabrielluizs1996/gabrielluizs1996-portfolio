import { profileData } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { Code, Terminal } from "lucide-react";

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="section-container"
      aria-labelledby="about-heading"
    >
      <SectionHeading
        label="// sobre"
        title="Engenharia com propósito"
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            {profileData.about}
          </p>
          
          <div className="divider-gradient" aria-hidden="true" />

          {/* Code snippet aesthetic */}
          <div className="card-professional font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <Terminal className="w-4 h-4" aria-hidden="true" />
              <span>philosophy.ts</span>
            </div>
            <pre className="text-muted-foreground overflow-x-auto">
              <code>
{`const approach = {
  focus: ["arquitetura", "acessibilidade", "performance"],
  principle: "Código limpo é código que outras pessoas entendem",
  goal: "Impacto real em produto"
};`}
              </code>
            </pre>
          </div>
        </div>

        {/* Stats/highlights */}
        <aside className="lg:col-span-2 space-y-6" aria-label="Destaques">
          <div className="card-professional text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-4xl font-bold text-foreground">6+</span>
            </div>
            <p className="text-muted-foreground">Anos de experiência</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card-professional text-center py-4">
              <span className="block text-2xl font-bold text-foreground mb-1">React</span>
              <span className="text-sm text-muted-foreground">Principal</span>
            </div>
            <div className="card-professional text-center py-4">
              <span className="block text-2xl font-bold text-foreground mb-1">TS</span>
              <span className="text-sm text-muted-foreground">TypeScript</span>
            </div>
          </div>

          <div className="card-professional">
            <h3 className="font-semibold text-foreground mb-3">Também trabalho com</h3>
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
