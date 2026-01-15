/**
 * Domain layer - Profile data and types
 * Following DDD principles: data is separated from UI
 */

export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface ArchitectureItem {
  id: string;
  title: string;
  description: string;
}

export const profileData = {
  name: "Gabriel Luiz",
  title: "Engenheiro de Software Frontend",
  subtitle: "Arquitetura • Acessibilidade • Performance • Escalabilidade",
  headline: "Construo interfaces robustas, acessíveis e escaláveis para produtos digitais de alta complexidade.",
  
  about: `Engenheiro de Software Frontend com forte atuação em arquitetura de aplicações, 
acessibilidade (WCAG/ARIA), performance e modernização de sistemas legados. 
Experiência com React, Angular, AngularJS, TypeScript, microfrontends (Single-SPA), 
monorepos, design systems e DDD aplicado ao frontend. Atuação em produtos corporativos 
de larga escala, com foco em qualidade de código, integração frontend–backend e 
evolução sustentável de software.`,

  contact: {
    email: "gabrielluizs1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabrielluizs1996/",
    github: "https://github.com/gabrielluizs1996",
  }
};

export const competencies: Competency[] = [
  {
    id: "architecture",
    title: "Arquitetura Frontend",
    description: "Microfrontends, Monorepos, DDD aplicado ao frontend, estruturação de módulos por domínio",
    icon: "Layers",
  },
  {
    id: "accessibility",
    title: "Acessibilidade Web",
    description: "WCAG 2.1, ARIA, inclusão digital, navegação por teclado, suporte a leitores de tela",
    icon: "Accessibility",
  },
  {
    id: "performance",
    title: "Performance e Otimização",
    description: "Lazy loading, code splitting, memoização, análise de bundle, Core Web Vitals",
    icon: "Zap",
  },
  {
    id: "legacy",
    title: "Modernização de Legados",
    description: "Migração gradual de AngularJS, refatoração incremental, estratégias de strangler fig",
    icon: "RefreshCw",
  },
  {
    id: "integration",
    title: "Integração Frontend–Backend",
    description: "Gestão de estado, APIs REST/GraphQL, microsserviços, contratos de API",
    icon: "GitBranch",
  },
];

export const experiences: Experience[] = [
  {
    id: "senior-sistemas",
    company: "Senior Sistemas",
    role: "Engenheiro de Software Frontend",
    period: "2021 – Presente",
    highlights: [
      "Arquitetura de aplicações frontend em larga escala com React, AngularJS e TypeScript",
      "Implementação de DDD no frontend, estruturando módulos por domínio",
      "Referência técnica em acessibilidade e performance para toda a equipe",
      "Refatoração de sistemas legados com migração gradual para tecnologias modernas",
      "Integração com microsserviços e APIs .NET/ASP.NET Core",
    ],
    technologies: ["React", "TypeScript", "AngularJS", "Single-SPA", "WCAG", "ARIA"],
  },
  {
    id: "previous-roles",
    company: "Experiências Anteriores",
    role: "Desenvolvedor Frontend",
    period: "2018 – 2021",
    highlights: [
      "Criação de bibliotecas internas e pacotes NPM reutilizáveis",
      "Desenvolvimento de design systems com Figma e Storybook",
      "Implementação de POCs para validação de novas tecnologias",
      "Suporte técnico e mentoria para desenvolvedores júnior",
      "Elevação contínua do padrão de engenharia em projetos",
    ],
    technologies: ["Angular", "React", "SCSS", "Jest", "Cypress", "Figma"],
  },
];

export const architectureItems: ArchitectureItem[] = [
  {
    id: "ddd",
    title: "Domain-Driven Design",
    description: "Estrutura organizada por domínios, separando regras de negócio da camada de apresentação",
  },
  {
    id: "layers",
    title: "Separação de Camadas",
    description: "UI, domínio e infraestrutura isolados, facilitando testes e manutenção",
  },
  {
    id: "components",
    title: "Componentes Reutilizáveis",
    description: "Design system próprio com tokens de design e variantes configuráveis",
  },
  {
    id: "a11y",
    title: "Acessibilidade Nativa",
    description: "HTML semântico, ARIA quando necessário, navegação completa por teclado",
  },
  {
    id: "performance",
    title: "Performance First",
    description: "Lazy loading de seções, memoização, otimização de re-renderizações",
  },
];
