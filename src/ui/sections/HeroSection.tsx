import { useTranslation } from "react-i18next";
import { profileData } from "@/domain/data/profile";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms - subtle movement for depth
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.03, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
      aria-labelledby="hero-title"
    >
      {/* Subtle grid pattern with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{
          y: prefersReducedMotion ? 0 : gridY,
          opacity: prefersReducedMotion ? 0.03 : gridOpacity,
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <motion.div 
        className="section-container relative z-10"
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          opacity: prefersReducedMotion ? 1 : contentOpacity,
        }}
      >
        <div className="max-w-3xl">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-muted-foreground font-mono">
              {t("hero.availableStatus")}
            </span>
          </div>

          {/* Name and title */}
          <h1 
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {profileData.name}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-primary font-medium mb-2 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {t("profile.title")}
          </p>
          
          <p 
            className="text-lg text-muted-foreground font-mono mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {t("profile.subtitle")}
          </p>

          {/* Headline */}
          <p 
            className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {t("profile.headline")}
          </p>

          {/* CTA and social links */}
          <div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="gap-2 font-medium"
            >
              <a href="#about">
                {t("hero.learnMore")}
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>

            <nav aria-label={t("hero.socialLabel")} className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <a 
                  href={`https://${profileData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.githubLabel")}
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <a 
                  href={`https://${profileData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.linkedinLabel")}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <a 
                  href={`mailto:${profileData.contact.email}`}
                  aria-label={t("hero.emailLabel")}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
