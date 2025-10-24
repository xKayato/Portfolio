import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageZoom } from "../ImageZoom";
import { ArrowUpRight } from "lucide-react";
import { TechButton } from "../TechButton";
import { ProjectData } from './useWindowManager';

interface ProjectWindowProps {
  project: ProjectData;
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

export const ProjectWindow = ({ project }: ProjectWindowProps) => {
  const { title, detailedDescription, images, link, tags, deliverables } = project;

  // Fonction pour arrêter la propagation des événements de clic
  const handleNavigationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
      
      {/* Left Column: Content (4/5 width) */}
      <div className="lg:col-span-4 p-4 md:p-6 lg:pr-8 overflow-y-auto">
        <h1 className="text-3xl font-extrabold text-foreground mb-4">{title}</h1>

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
              <TechButton>
                Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
              </TechButton>
            </a>
          )}
          
          {deliverables && (
            <a href={deliverables.url} target="_blank" rel="noreferrer">
                <TechButton variant="outline">
                    {deliverables.label}
                </TechButton>
            </a>
          )}
        </div>
      </div>

      {/* Right Column: Tags (1/5 width, Centered vertically) */}
      <div className="lg:col-span-1 bg-secondary p-4 md:p-6 border-l border-border flex flex-col">
        <div className="flex-grow">
            <TagSection title="Catégories" tags={tags.categories} />
            <TagSection title="Notions" tags={tags.notions} />
            <TagSection title="Logiciels" tags={tags.logiciels} />
        </div>
      </div>
    </div>
  );
};