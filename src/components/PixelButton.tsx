import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    // Classes de base pour l'effet 8-bit
    const pixelClasses = "border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] active:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all duration-100";

    // Ajustement des couleurs pour les variantes
    let variantClasses = "";
    
    switch (variant) {
      case "default":
        // Utiliser primary pour le fond, foreground pour le texte
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
      case "secondary":
        // Utiliser secondary pour le fond, foreground pour le texte
        variantClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80";
        break;
      case "destructive":
        // Utiliser destructive pour le fond, foreground pour le texte
        variantClasses = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        // Fond transparent, bordure foreground
        variantClasses = "bg-transparent text-foreground hover:bg-accent";
        break;
      case "ghost":
        // Fond transparent, pas de bordure, juste l'effet de shadow au hover
        variantClasses = "bg-transparent text-foreground hover:bg-accent shadow-none active:shadow-none border-0";
        break;
      case "link":
        // Pas de style 8-bit appliqué, juste le lien
        variantClasses = "text-primary underline-offset-4 hover:underline shadow-none active:shadow-none border-0";
        break;
      default:
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
    }

    // Si la variante est ghost ou link, on retire les classes de pixel art
    const finalClasses = (variant === "ghost" || variant === "link") 
      ? cn(variantClasses, className) 
      : cn(pixelClasses, variantClasses, className);

    return (
      <Button
        className={finalClasses}
        variant={variant === "ghost" || variant === "link" ? variant : "default"} // On force default pour utiliser nos classes de couleur
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton };