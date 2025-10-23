import { useState, useMemo } from "react";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Project = typeof projects[0];

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const mainCategories = useMemo(() => ["Informatique", "Réseaux", "Cybersécurité", "Télécommunication", "Communication"], []);

  const groupedTags = useMemo(() => {
    const groups: Record<string, Set<string>> = {};
    mainCategories.forEach(cat => {
      groups[cat] = new Set();
    });

    projects.forEach(project => {
      const allProjectTags = Object.values(project.tags).flat();
      const projectMainCategories = project.tags.categories.filter(cat => mainCategories.includes(cat));

      projectMainCategories.forEach(mainCat => {
        allProjectTags.forEach(tag => {
          if (!mainCategories.includes(tag)) {
            groups[mainCat].add(tag);
          }
        });
      });
    });

    Object.keys(groups).forEach(key => {
      if (groups[key].size === 0) {
        delete groups[key];
      }
    });

    return groups;
  }, [projects, mainCategories]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return projects
      .filter(p =>
        selectedTags.length === 0 || Object.values(p.tags).flat().some(t => selectedTags.includes(t))
      )
      .filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery, selectedTags]);

  return (
    <>
      <div className="container py-12 md:py-20">
        <h1 className="text-3xl font-bold mb-2">Mes Projets</h1>
        <p className="text-muted-foreground mb-8 text-justify">Bienvenue sur mon portfolio, un espace où vous pourrez découvrir mes compétences et réalisations dans multiple catégories tel qu'Informatique, Réseaux, Cybersécurité et plus encore. Explorez chaque section pour en apprendre davantage sur mes projets et mon expertise dans ces domaines.</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input 
            placeholder="Rechercher un projet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button 
            variant={selectedTags.length === 0 ? "default" : "outline"}
            onClick={() => setSelectedTags([])}
          >
            Tous
          </Button>
          {Object.entries(groupedTags).map(([category, tags]) => (
            <DropdownMenu key={category}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  {category}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {Array.from(tags).sort().map(tag => (
                  <DropdownMenuCheckboxItem
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => handleTagClick(tag)}
                  >
                    {tag}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpenModal={setSelectedProject} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">Aucun projet ne correspond à votre recherche.</p>
        )}
      </div>
      <ProjectModal 
        isOpen={!!selectedProject}
        onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default Portfolio;