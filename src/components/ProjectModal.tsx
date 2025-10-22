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
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img src={image} alt={`${project.title} - image ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <DialogDescription className="mt-4 text-base text-muted-foreground">
            {project.detailedDescription}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};