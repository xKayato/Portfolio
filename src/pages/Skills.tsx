import { useState, useMemo } from "react";
import { skills } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Code, Network, Shield, Server, Zap, MessageSquare } from "lucide-react";

// Mapping des catégories principales aux icônes pour les cartes individuelles
const categoryIcons: { [key: string]: React.ElementType } = {
  Informatique: Code,
  Réseaux: Network,
  Cybersécurité: Shield,
  Télécommunication: Zap,
  Communication: MessageSquare,
};

const Skills = () => {
  const [searchQuerySkills, setSearchQuerySkills] = useState("");
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);

  const mainCategories = useMemo(() => {
    const categories = new Set(skills.map(s => s.mainCategory));
    return ["Tous", ...Array.from(categories)];
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category === "Tous") {
      setSelectedMainCategory(null);
    } else {
      setSelectedMainCategory(category);
    }
  };

  const filteredSkills = useMemo(() => {
    let skillsToFilter = skills;

    if (selectedMainCategory) {
      skillsToFilter = skills.filter(skill => skill.mainCategory === selectedMainCategory);
    }

    if (!searchQuerySkills) {
      return skillsToFilter;
    }
    
    const query = searchQuerySkills.toLowerCase();

    return skillsToFilter
      .filter(skill => 
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.items.some(item => item.toLowerCase().includes(query))
      );
  }, [searchQuerySkills, selectedMainCategory]);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Compétences</h1>
      <p className="text-muted-foreground mb-8 text-justify">  Bienvenue sur la page Compétences, un espace dédié à la présentation de mes savoir-faire et domaines d'expertise. Vous y découvrirez mes compétences en Informatique, Réseaux, Cybersécurité et bien plus encore. Parcourez cette section pour en apprendre davantage sur mes atouts professionnels et mes domaines de maîtrise.</p>
      
      <Input 
        placeholder="Rechercher une compétence..."
        value={searchQuerySkills}
        onChange={(e) => setSearchQuerySkills(e.target.value)}
        className="max-w-sm mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {mainCategories.map(category => (
          <Button 
            key={category}
            variant={(!selectedMainCategory && category === 'Tous') || selectedMainCategory === category ? 'default' : 'outline'}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          const IconComponent = categoryIcons[skill.mainCategory] || Code;
          
          return (
            <Card key={skill.category} className="flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                    {skill.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 text-sm text-justify">{skill.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skill.items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {filteredSkills.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">Aucune compétence ne correspond à votre recherche.</p>
      )}
    </div>
  );
};

export default Skills;