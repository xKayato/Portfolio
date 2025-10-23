import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TechButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const TechButton = React.forwardRef<HTMLButtonElement, TechButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    // Classes de base pour l'effet technique/moderne
    // Utilisation d'une bordure simple et d'une légère ombre pour un effet 'UI'
    const techClasses = "border-2 border-primary transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]";

    // Ajustement des couleurs pour les variantes
    let variantClasses = "";
    
    switch (variant) {
      case "default":
        // Fond primary (bleu), texte blanc
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
      case "secondary":
        // Fond secondary (gris), texte sombre/clair
        variantClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-border";
        break;
      case "destructive":
        // Fond destructive (rouge), texte blanc
        variantClasses = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        // Fond transparent, bordure primary, texte primary
        variantClasses = "bg-transparent text-primary hover:bg-primary/10";
        break;
      case "ghost":
        // Fond transparent, pas de bordure, juste l'effet de hover
        variantClasses = "bg-transparent text-foreground hover:bg-accent border-0 hover:scale-100 active:scale-100";
        break;
      case "link":
        // Pas de style technique appliqué, juste le lien
        variantClasses = "text-primary underline-offset-4 hover:underline border-0 hover:scale-100 active:scale-100";
        break;
      default:
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
    }

    // Si la variante est ghost ou link, on retire les classes de base techClasses
    const finalClasses = (variant === "ghost" || variant === "link") 
      ? cn(variantClasses, className) 
      : cn(techClasses, variantClasses, className);

    return (
      <Button
        className={finalClasses}
        variant={variant === "ghost" || variant === "link" ? variant : "default"}
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
TechButton.displayName = "TechButton";

export { TechButton };