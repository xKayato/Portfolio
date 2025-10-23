import * as React from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PixelBadgeProps extends BadgeProps {
  children: React.ReactNode;
}

const PixelBadge = React.forwardRef<HTMLDivElement, PixelBadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    // Classes de base pour l'effet 8-bit
    const pixelClasses = "border-2 border-foreground shadow-[2px_2px_0_0_hsl(var(--foreground))]";

    // Ajustement des couleurs pour les variantes
    let variantClasses = "";
    
    switch (variant) {
      case "default":
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
      case "secondary":
        variantClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80";
        break;
      case "destructive":
        variantClasses = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
        break;
      case "outline":
        variantClasses = "bg-transparent text-foreground hover:bg-accent";
        break;
      default:
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
        break;
    }

    return (
      <Badge
        ref={ref}
        className={cn(pixelClasses, variantClasses, className)}
        variant="default" // On force default pour utiliser nos classes de couleur
        {...props}
      >
        {children}
      </Badge>
    );
  }
);
PixelBadge.displayName = "PixelBadge";

export { PixelBadge };