import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";

const Portfolio = () => {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-2">Mes Projets</h1>
      <p className="text-muted-foreground mb-8">Voici une sélection de projets sur lesquels j'ai travaillé.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;