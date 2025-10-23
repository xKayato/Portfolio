import { passions } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Passions = () => {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Passions</h1>
      <p className="text-muted-foreground mb-12 text-justify">En dehors de la technologie, voici ce qui m'anime.</p>
      
      <div className="space-y-16">
        {passions.map((passion, index) => {
          const isImageLeft = index % 2 === 0;
          
          return (
            <div 
              key={passion.title} 
              className={cn(
                "flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center",
                isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Image Column */}
              <div className={cn(
                "w-full mb-6 md:mb-0",
                isImageLeft ? "order-1" : "order-2"
              )}>
                {passion.imageUrl && (
                  <img 
                    src={passion.imageUrl} 
                    alt={passion.title} 
                    className="object-cover rounded-lg w-full shadow-xl aspect-video" 
                  />
                )}
              </div>
              
              {/* Text Column */}
              <div className={cn(
                "w-full",
                isImageLeft ? "order-2" : "order-1"
              )}>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <passion.icon className="h-7 w-7 text-primary" />
                  {passion.title}
                </h2>
                <p className="text-muted-foreground text-lg text-justify">
                  {passion.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Passions;