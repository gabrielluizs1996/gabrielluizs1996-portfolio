import { useTranslation } from "react-i18next";
import { profileData } from "@/domain/data/profile";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/ui/components/AnimatedSection";

export function FooterSection() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact"
      className="section-container border-t border-border"
      role="contentinfo"
    >
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          {/* Contact info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
              {t("footer.letsChat")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto sm:mx-0">
              {t("footer.openToDiscuss")}
            </p>
            <a 
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              {profileData.contact.email}
            </a>
          </div>

          {/* Social and back to top */}
          <div className="flex flex-row items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <nav aria-label={t("footer.socialLinks")} className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                asChild
                className="h-9 w-9 sm:h-10 sm:w-10"
              >
                <a 
                  href={`https://${profileData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.githubLabel")}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                asChild
                className="h-9 w-9 sm:h-10 sm:w-10"
              >
                <a 
                  href={`https://${profileData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.linkedinLabel")}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </nav>

            <Button 
              variant="secondary" 
              asChild
              className="gap-2 text-sm sm:text-base h-9 sm:h-10 px-3 sm:px-4"
            >
              <a href="#hero">
                {t("footer.backToTop")}
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Copyright */}
      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border text-center">
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          © {currentYear} {profileData.name} · {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}
