import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('pt') ? 'pt' : 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 font-mono text-sm text-muted-foreground hover:text-foreground"
      aria-label={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="w-4 h-4" aria-hidden="true" />
      <span className="flex items-center gap-1">
        <span className={cn(currentLang === 'pt' && 'text-foreground font-semibold')}>PT</span>
        <span className="text-muted-foreground/50">/</span>
        <span className={cn(currentLang === 'en' && 'text-foreground font-semibold')}>EN</span>
      </span>
    </Button>
  );
}
