import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  align: 'left' | 'right'; // 'left' means image is on the left, 'right' means image is on the right.
}

export const TimelineItem = ({ date, title, subtitle, description, imageUrl, align }: TimelineItemProps) => {
  const isImageLeft = align === 'left';

  return (
    <div className="relative py-8 group pl-8">
      {/* Timeline Dot and Line (Always on the left edge of the content area) */}
      <div className="absolute left-0 top-0 h-full w-px bg-border -translate-x-px group-last:h-[50%]"></div>
      <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-primary -translate-x-1/2 border-2 border-background"></div>

      {/* Content Block */}
      <div className={cn(
        "flex flex-col gap-4",
        "md:grid md:grid-cols-2 md:gap-8",
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        
        {/* Image Column (Alternating position) */}
        {imageUrl && (
          <div className={cn(
            "w-full",
            isImageLeft ? "order-1" : "order-2"
          )}>
            <img src={imageUrl} alt={title} className="rounded-lg w-full shadow-md object-cover aspect-[4/3]" />
          </div>
        )}

        {/* Text Column (Alternating position) */}
        <div className={cn(
          "flex flex-col",
          isImageLeft ? "order-2" : "order-1"
        )}>
            <div className="text-xl font-bold text-foreground mb-1">{title} ({subtitle})</div>
            <time className="text-sm text-primary font-medium mb-4">{date}</time>
            
            {/* Bloc de description standard */}
            <p className="text-muted-foreground whitespace-pre-line text-justify">
                {description}
            </p>
        </div>
      </div>
    </div>
  );
};