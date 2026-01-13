import { Navigation } from "@/ui/components/Navigation";
import { HeroSection } from "@/ui/sections/HeroSection";
import { AboutSection } from "@/ui/sections/AboutSection";
import { CompetenciesSection } from "@/ui/sections/CompetenciesSection";
import { ExperienceSection } from "@/ui/sections/ExperienceSection";
import { ArchitectureSection } from "@/ui/sections/ArchitectureSection";
import { FooterSection } from "@/ui/sections/FooterSection";

/**
 * Portfolio - Gabriel Luiz
 * 
 * Architecture: DDD applied to frontend
 * - domain/ - Business data and types
 * - ui/components - Reusable UI components
 * - ui/sections - Page sections
 * 
 * Accessibility: WCAG 2.1 AA compliant
 * - Semantic HTML
 * - Keyboard navigation
 * - ARIA labels where needed
 * - High contrast colors
 */
const Index = () => {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <ExperienceSection />
        <ArchitectureSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;
