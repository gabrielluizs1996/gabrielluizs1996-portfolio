import { useTranslation } from "react-i18next";
import { profileData } from "@/domain/data/profile";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact"
      className="section-container border-t border-border"
      role="contentinfo"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Contact info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            {t("footer.letsChat")}
          </h2>
          <p className="text-muted-foreground max-w-md">
            {t("footer.openToDiscuss")}
          </p>
          <a 
            href={`mailto:${profileData.contact.email}`}
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            {profileData.contact.email}
          </a>
        </div>

        {/* Social and back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <nav aria-label={t("footer.socialLinks")} className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              asChild
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
              variant="outline" 
              size="icon" 
              asChild
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
          </nav>

          <Button 
            variant="secondary" 
            asChild
            className="gap-2"
          >
            <a href="#hero">
              {t("footer.backToTop")}
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-mono">
          © {currentYear} {profileData.name} · {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}
