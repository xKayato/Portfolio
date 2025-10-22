import { useState, useMemo } from "react";
import { skills } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuery) return skills;
    
    return skills.map(category => ({
      ...category,
      items: category.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
    })).filter(category => category.items.length > 0);

  }, [searchQuery]);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Compétences</h1>
      <p className="text-muted-foreground mb-8">
        Voici les technologies et outils que je maîtrise, acquis au cours de ma formation et de mes projets personnels.
      </p>

      <div className="mb-8">
        <Input 
          placeholder="Rechercher une compétence..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <skillCategory.icon className="h-6 w-6 text-primary" />
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredSkills.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">Aucune compétence ne correspond à votre recherche.</p>
      )}
    </div>
  );
};

export default Skills;