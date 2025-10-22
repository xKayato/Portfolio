import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageZoom } from "./ImageZoom";

interface Project {
  title: string;
  detailedDescription: string;
  images: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
}

export const ProjectModal = ({ isOpen, onOpenChange, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Carousel className="w-full max-w-4xl mx-auto mb-6">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <ImageZoom 
                      src={image} 
                      alt={`${project.title} - image ${index + 1}`} 
                      className="w-full aspect-video object-cover rounded-lg max-h-[400px]" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogDescription className="mt-4 text-base text-muted-foreground whitespace-pre-line">
            {project.detailedDescription}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};