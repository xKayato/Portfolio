import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PixelCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode;
}

const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, children, ...props }, ref) => {
    const pixelClasses = "border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-shadow duration-100";

    return (
      <Card
        ref={ref}
        className={cn(pixelClasses, className)}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
PixelCard.displayName = "PixelCard";

// Export des sous-composants pour la compatibilité
export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
export { PixelCard };