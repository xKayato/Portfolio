import { useState, useMemo } from "react";
import { personalInfo, about, skills, projects, education, experience, passions } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TimelineItem } from "@/components/TimelineItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { MadeWithDyad } from "@/components/made-with-dyad";

type Project = typeof projects[0];

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#passions", label: "Passions" },
];

const Index = () => {
  // State for Portfolio
  const [searchQueryProjects, setSearchQueryProjects] = useState("");
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
        p.title.toLowerCase().includes(searchQueryProjects.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQueryProjects.toLowerCase())
      );
  }, [searchQueryProjects, selectedTags]);

  // State for Skills
  const [searchQuerySkills, setSearchQuerySkills] = useState("");

  const filteredSkills = useMemo(() => {
    if (!searchQuerySkills) return skills;
    
    return skills.map(category => ({
      ...category,
      items: category.items.filter(item => item.toLowerCase().includes(searchQuerySkills.toLowerCase()))
    })).filter(category => category.items.length > 0);
  }, [searchQuerySkills]);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 py-12 lg:py-24">
        <header className="lg:sticky lg:top-24 lg:col-span-1 h-fit flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{personalInfo.name}</h1>
            <h2 className="mt-3 text-lg font-medium text-primary">{personalInfo.title}</h2>
            <p className="mt-4 text-muted-foreground">{about.introduction}</p>
          </div>
          <nav>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground font-medium transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {personalInfo.socials.map(social => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <MadeWithDyad />
        </header>

        <main className="lg:col-span-2 mt-12 lg:mt-0">
          <section id="about" className="scroll-m-24 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-primary">À Propos de moi</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img src={about.imageUrl} alt="Photo de présentation" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="md:w-2/3">
                <p className="text-muted-foreground text-lg">
                  Vous trouverez ici mon parcours plus en détail. N'hésitez pas à télécharger mon CV pour plus d'informations.
                </p>
                <div className="mt-6">
                  <a href={personalInfo.cvUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                      Télécharger mon CV <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="scroll-m-24 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-primary">Parcours & Formation</h2>
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={index} {...item} subtitle={item.company} />
              ))}
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} subtitle={item.institution} />
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-m-24 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-primary">Compétences</h2>
            <Input 
              placeholder="Rechercher une compétence..."
              value={searchQuerySkills}
              onChange={(e) => setSearchQuerySkills(e.target.value)}
              className="max-w-sm mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </section>

          <section id="portfolio" className="scroll-m-24 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-primary">Portfolio</h2>
            <Input 
              placeholder="Rechercher un projet..."
              value={searchQueryProjects}
              onChange={(e) => setSearchQueryProjects(e.target.value)}
              className="max-w-sm mb-4"
            />
            <div className="flex flex-wrap gap-2 mb-8">
              <Button variant={selectedTags.length === 0 ? "default" : "outline"} onClick={() => setSelectedTags([])}>Tous</Button>
              {allTags.map(tag => <Button key={tag} variant={selectedTags.includes(tag) ? "default" : "outline"} onClick={() => handleTagClick(tag)}>{tag}</Button>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} onOpenModal={setSelectedProject} />)}
            </div>
          </section>

          <section id="passions" className="scroll-m-24">
            <h2 className="text-2xl font-bold mb-8 text-primary">Passions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passions.map((passion) => (
                <Card key={passion.title}>
                  {passion.imageUrl && <img src={passion.imageUrl} alt={passion.title} className="object-cover rounded-t-lg w-full h-48" />}
                  <CardHeader><CardTitle className="flex items-center gap-3"><passion.icon className="h-6 w-6" />{passion.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{passion.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
      <ProjectModal 
        isOpen={!!selectedProject}
        onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default Index;