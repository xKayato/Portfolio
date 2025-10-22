import { passions } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Passions = () => {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Passions</h1>
      <p className="text-muted-foreground mb-8">
        En dehors des réseaux et de l'informatique, voici ce qui m'anime.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passions.map((passion) => (
          <Card key={passion.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <passion.icon className="h-6 w-6 text-primary" />
                {passion.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{passion.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Passions;