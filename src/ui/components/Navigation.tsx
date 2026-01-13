import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { profileData } from "@/domain/data/profile";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

const navKeys = ["about", "competencies", "experience", "architecture", "contact"] as const;

export function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = navKeys.map((key) => ({
    href: `#${key}`,
    label: t(`nav.${key}`),
  }));

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
        {t("nav.skipToContent")}
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
          aria-label={t("nav.mainNav")}
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
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1" role="list">
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
            <div className="ml-2 pl-2 border-l border-border">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
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
          aria-label={t("nav.mobileNav")}
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
