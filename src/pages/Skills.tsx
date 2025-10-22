import { useState, useMemo } from "react";
import { skills } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Skills = () => {
  const [searchQuerySkills, setSearchQuerySkills] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuerySkills) return skills;
    
    return skills.map(category => ({
      ...category,
      items: category.items.filter(item => item.toLowerCase().includes(searchQuerySkills.toLowerCase()))
    })).filter(category => category.items.length > 0);
  }, [searchQuerySkills]);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Compétences</h1>
      <p className="text-muted-foreground mb-8">Voici les technologies et les domaines que je maîtrise.</p>
      <Input 
        placeholder="Rechercher une compétence..."
        value={searchQuerySkills}
        onChange={(e) => setSearchQuerySkills(e.target.value)}
        className="max-w-sm mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader><CardTitle className="flex items-center gap-3"><skillCategory.icon className="h-6 w-6" />{skillCategory.category}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">{skillCategory.description}</p>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;