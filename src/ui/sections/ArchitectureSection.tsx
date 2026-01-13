import { architectureItems } from "@/domain/data/profile";
import { SectionHeading } from "@/ui/components/SectionHeading";
import { ArchitectureCard } from "@/ui/components/ArchitectureCard";
import { FolderTree, FileCode } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section 
      id="architecture" 
      className="section-container bg-muted/30"
      aria-labelledby="architecture-heading"
    >
      <SectionHeading
        label="// arquitetura"
        title="Como este projeto foi construído"
        description="Este portfólio é um exemplo prático dos princípios que defendo."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Architecture explanation */}
        <div className="space-y-6">
          <div className="card-professional">
            <div className="flex items-center gap-3 mb-4">
              <FolderTree className="w-5 h-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">Estrutura do Projeto</h3>
            </div>
            <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`src/
├── domain/          # Dados e regras de negócio
│   └── data/        # Tipos e constantes
├── ui/              # Camada de apresentação
│   ├── components/  # Componentes reutilizáveis
│   └── sections/    # Seções da página
├── infra/           # Serviços externos
└── lib/             # Utilitários`}
            </pre>
          </div>

          <div className="card-professional">
            <div className="flex items-center gap-3 mb-4">
              <FileCode className="w-5 h-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">Stack Tecnológica</h3>
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
                Arquitetura DDD no Frontend
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                WCAG 2.1 AA Compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Principles timeline */}
        <div className="stagger-children">
          {architectureItems.map((item, index) => (
            <ArchitectureCard 
              key={item.id} 
              item={item} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
