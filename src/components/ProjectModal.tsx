import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageZoom } from "./ImageZoom";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface Project {
  title: string;
  detailedDescription: string;
  images: string[];
  link?: string;
  tags: {
    categories: string[];
    notions: string[];
    logiciels: string[];
  };
  deliverables?: {
    label: string;
    url: string;
  };
}

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
}

const TagSection = ({ title, tags }: { title: string; tags: string[] }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <ul className="space-y-1">
      {tags.map((tag) => (
        <li key={tag} className="text-muted-foreground text-base">
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectModal = ({ isOpen, onOpenChange, project }: ProjectModalProps) => {
  if (!project) return null;

  const { title, detailedDescription, images, link, tags, deliverables } = project;

  // Fonction pour arrêter la propagation des événements de clic
  const handleNavigationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-7xl max-h-[95vh] overflow-y-auto p-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
          
          {/* Left Column: Content (4/5 width) */}
          <div className="lg:col-span-4 p-6 md:p-8 lg:pr-12">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-4xl font-extrabold text-foreground">{title}</DialogTitle>
            </DialogHeader>

            {/* Carousel */}
            {images.length > 0 && (
              <Carousel className="w-full max-w-5xl mx-auto mb-6">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <ImageZoom 
                          src={image} 
                          alt={`${title} - image ${index + 1}`} 
                          className="w-full aspect-video object-cover rounded-lg max-h-[300px]" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Ajout de onClick pour stopper la propagation */}
                <CarouselPrevious className="left-4" onClick={handleNavigationClick} />
                <CarouselNext className="right-4" onClick={handleNavigationClick} />
              </Carousel>
            )}

            {/* Description */}
            <div className="mt-4 text-base text-muted-foreground whitespace-pre-line text-justify">
              {detailedDescription}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {link && link !== "#" && (
                <a href={link} target="_blank" rel="noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
              
              {deliverables && (
                <a href={deliverables.url} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                        {deliverables.label}
                    </Button>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Tags (1/5 width, Centered vertically) */}
          <div className="lg:col-span-1 bg-secondary p-6 md:p-8 border-l border-border flex flex-col justify-center">
            <div className="lg:max-h-[95vh] lg:overflow-y-auto">
                <TagSection title="Catégories" tags={tags.categories} />
                <TagSection title="Notions" tags={tags.notions} />
                <TagSection title="Logiciels" tags={tags.logiciels} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};