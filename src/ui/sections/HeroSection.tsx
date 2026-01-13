import { profileData } from "@/domain/data/profile";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
      aria-labelledby="hero-title"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-muted-foreground font-mono">
              Disponível para novos desafios
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
            {profileData.title}
          </p>
          
          <p 
            className="text-lg text-muted-foreground font-mono mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {profileData.subtitle}
          </p>

          {/* Headline */}
          <p 
            className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {profileData.headline}
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
                Conhecer mais
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>

            <nav aria-label="Redes sociais" className="flex items-center gap-1">
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
                  aria-label="GitHub (abre em nova aba)"
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
                  aria-label="LinkedIn (abre em nova aba)"
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
                  aria-label="Enviar email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </div>

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
