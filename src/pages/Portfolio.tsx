import { useState, useMemo } from "react";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Project = typeof projects[0];

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => {
      Object.values(p.tags).flat().forEach(t => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

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
        <p className="text-muted-foreground mb-8">Voici une sélection de projets sur lesquels j'ai travaillé.</p>
        
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
          {allTags.map(tag => (
            <Button 
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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