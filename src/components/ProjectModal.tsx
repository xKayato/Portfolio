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
}

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
}

const TagSection = ({ title, tags }: { title: string; tags: string[] }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
    <ul className="space-y-1">
      {tags.map((tag) => (
        <li key={tag} className="text-muted-foreground text-lg">
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectModal = ({ isOpen, onOpenChange, project }: ProjectModalProps) => {
  if (!project) return null;

  const { title, detailedDescription, images, tags, link } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-6xl max-h-[95vh] overflow-y-auto p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          
          {/* Left Column: Content (Title, Description, Carousel) */}
          <div className="lg:col-span-2 p-6 md:p-8 lg:pr-0">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-4xl font-extrabold text-foreground">{title}</DialogTitle>
            </DialogHeader>

            {/* Carousel */}
            {images.length > 0 && (
              <Carousel className="w-full max-w-4xl mx-auto mb-6">
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
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}

            {/* Description */}
            <div className="mt-4 text-base text-muted-foreground whitespace-pre-line text-justify">
              {detailedDescription}
            </div>

            {/* Livrables/Link Button (if applicable) */}
            {link && link !== "#" && (
              <div className="mt-8">
                <a href={link} target="_blank" rel="noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Voir le projet
                  </Button>
                </a>
              </div>
            )}
            {/* Placeholder for Livrables button if needed, based on the screenshot */}
            {title.includes("pentest") && (
                <div className="mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Livrables
                    </Button>
                </div>
            )}
          </div>

          {/* Right Column: Tags (Sidebar style) */}
          <div className="lg:col-span-1 bg-secondary p-6 md:p-8 border-l border-border lg:max-h-[95vh] lg:overflow-y-auto">
            <TagSection title="Catégories" tags={tags.categories} />
            <TagSection title="Notions" tags={tags.notions} />
            <TagSection title="Logiciels" tags={tags.logiciels} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};