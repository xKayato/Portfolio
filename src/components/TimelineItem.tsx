import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  align: 'left' | 'right'; // 'left' means content is on the left of the line, 'right' means content is on the right.
}

export const TimelineItem = ({ date, title, subtitle, description, imageUrl, align }: TimelineItemProps) => {
  // For this new design, the line and date are always on the left side of the content block.
  // The content block itself (title, description, image) will alternate its internal layout.
  const isImageLeft = align === 'left';

  return (
    <div className="relative py-6 group pl-8 sm:pl-32">
      {/* Timeline Dot and Line (Always on the left edge of the content area) */}
      <div className="absolute left-0 top-5 h-full w-px bg-border -translate-x-px group-last:hidden"></div>
      <div className="absolute left-0 top-5 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>

      {/* Date (Always fixed to the left of the content area) */}
      <div className="flex-shrink-0 sm:absolute left-0 sm:w-32 sm:text-right pr-4 mb-2 sm:mb-0">
        <time className="text-sm text-muted-foreground">{date}</time>
      </div>
      
      {/* Content Block */}
      <div className={cn(
        "flex flex-col gap-4",
        "sm:grid sm:grid-cols-2 sm:gap-8",
        isImageLeft ? "sm:flex-row-reverse" : "sm:flex-row"
      )}>
        
        {/* Image Column (Alternating position) */}
        {imageUrl && (
          <div className={cn(
            "w-full",
            isImageLeft ? "order-1" : "order-2"
          )}>
            <img src={imageUrl} alt={title} className="rounded-lg w-full shadow-md object-cover aspect-video" />
          </div>
        )}

        {/* Text Column (Alternating position) */}
        <div className={cn(
          "flex flex-col",
          isImageLeft ? "order-2" : "order-1"
        )}>
            <div className="font-caveat font-medium text-2xl text-primary mb-1">{title}</div>
            <div className="text-lg font-semibold mb-2">{subtitle}</div>
            <div className="text-muted-foreground text-justify whitespace-pre-line">{description}</div>
        </div>
      </div>
    </div>
  );
};