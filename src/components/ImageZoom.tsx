import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageZoom = ({ src, alt, className }: ImageZoomProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group">
          <img src={src} alt={alt} className={className} />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <Button variant="secondary" size="icon">
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogTrigger>
      {/* Ajout d'un z-index très élevé pour s'assurer qu'il est au-dessus de toutes les fenêtres (max z-index 1000) */}
      <DialogContent className="sm:max-w-4xl p-0 border-none bg-transparent shadow-none z-[10000]">
        <img src={src} alt={alt} className="w-full h-full object-contain max-h-[90vh] rounded-lg" />
      </DialogContent>
    </Dialog>
  );
};