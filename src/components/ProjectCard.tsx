import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/PixelCard";
import { ArrowUpRight, Eye } from "lucide-react";
import { PixelButton } from "./PixelButton";
import { PixelCard } from "./PixelCard";
import { PixelBadge } from "./PixelBadge";

interface Project {
  title: string;
  description: string;
  tags: {
    categories: string[];
    notions: string[];
    logiciels: string[];
  };
  images: string[];
  link?: string;
  detailedDescription: string;
}

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const { title, description, tags, images, link } = project;

  return (
    <PixelCard className="flex flex-col h-full">
      <CardHeader>
        <div className="aspect-video relative mb-4 border-2 border-foreground">
            <img src={images[0]} alt={title} className="object-cover w-full h-full" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {Object.values(tags).flat().map((tag) => (
            <PixelBadge key={tag} variant="secondary">{tag}</PixelBadge>
          ))}
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-2 mt-2">
          {link && link !== "#" && (
            <a href={link} target="_blank" rel="noreferrer" className="w-full">
              <PixelButton variant="outline" className="w-full">
                Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
              </PixelButton>
            </a>
          )}
          <PixelButton onClick={() => onOpenModal(project)} className="w-full">
            Voir les détails <Eye className="ml-2 h-4 w-4" />
          </PixelButton>
        </div>
      </CardFooter>
    </PixelCard>
  );
};