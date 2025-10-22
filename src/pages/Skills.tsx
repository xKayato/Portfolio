import { useState, useMemo } from "react";
import { skills } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    
    return skillsToFilter
      .map(category => {
        const filteredSubcategories = category.subcategories
          .map(subcategory => ({
            ...subcategory,
            items: subcategory.items.filter(item =>
              item.toLowerCase().includes(searchQuerySkills.toLowerCase())
            ),
          }))
          .filter(subcategory => subcategory.items.length > 0);

        return {
          ...category,
          subcategories: filteredSubcategories,
        };
      })
      .filter(category => category.subcategories.length > 0);
  }, [searchQuerySkills, selectedMainCategory]);

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Compétences</h1>
      <p className="text-muted-foreground mb-8">Voici les technologies et les domaines que je maîtrise.</p>
      
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
              <div className="space-y-4">
                {skillCategory.subcategories.map((subcategory) => (
                  <div key={subcategory.title}>
                    <h4 className="font-semibold mb-2 text-sm">{subcategory.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {subcategory.items.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                    </div>
                  </div>
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