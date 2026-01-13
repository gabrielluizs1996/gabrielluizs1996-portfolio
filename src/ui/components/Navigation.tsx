import { useState, useEffect } from "react";
import { profileData } from "@/domain/data/profile";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "Sobre" },
  { href: "#competencies", label: "Competências" },
  { href: "#experience", label: "Experiência" },
  { href: "#architecture", label: "Arquitetura" },
  { href: "#contact", label: "Contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#hero" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-semibold text-foreground hover:text-primary transition-colors focus-ring rounded-md"
          >
            <span className="font-mono text-primary">{"<"}</span>
            {profileData.name.split(" ")[0]}
            <span className="font-mono text-primary">{"/>"}</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md focus-ring link-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav
          className="flex flex-col items-center justify-center min-h-screen gap-6 p-8"
          aria-label="Menu mobile"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-medium text-foreground hover:text-primary transition-all focus-ring rounded-md px-4 py-2",
                isMobileMenuOpen && "animate-fade-in"
              )}
              style={{
                animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : "0s",
              }}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
