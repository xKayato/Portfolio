import * as React from "react";
import { Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ZoomDialog, ZoomDialogContent, ZoomDialogTrigger } from "./ZoomDialog";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageZoom = ({ src, alt, className }: ImageZoomProps) => {
  return (
    <ZoomDialog>
      <ZoomDialogTrigger asChild>
        <div className="relative cursor-pointer group">
          <img src={src} alt={alt} className={className} />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <Button variant="secondary" size="icon">
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </ZoomDialogTrigger>
      {/* Le z-index est maintenant géré dans ZoomDialogContent et Overlay */}
      <ZoomDialogContent className="sm:max-w-4xl p-0 border-none bg-transparent shadow-none">
        <img src={src} alt={alt} className="w-full h-full object-contain max-h-[90vh] rounded-lg" />
      </ZoomDialogContent>
    </ZoomDialog>
  );
};