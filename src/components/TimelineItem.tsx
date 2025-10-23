import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  align: 'left' | 'right';
}

export const TimelineItem = ({ date, title, subtitle, description, imageUrl, align }: TimelineItemProps) => {
  const isRight = align === 'right';

  return (
    <div className={cn(
      "relative py-6 group",
      isRight ? "pl-8 sm:pl-32" : "pr-8 sm:pr-32"
    )}>
      {/* Timeline Dot and Line */}
      <div className={cn(
        "absolute top-5 h-full w-px bg-border -translate-x-px group-last:hidden",
        isRight ? "left-0" : "right-0"
      )}></div>
      <div className={cn(
        "absolute top-5 w-2 h-2 rounded-full bg-primary -translate-x-1/2",
        isRight ? "left-0" : "right-0 translate-x-1/2"
      )}></div>

      <div className={cn(
        "flex flex-col sm:flex-row items-start mb-1",
        !isRight && "sm:flex-row-reverse sm:justify-end"
      )}>
        {/* Date (always on the side of the line) */}
        <div className={cn(
          "flex-shrink-0 sm:absolute pr-4",
          isRight ? "left-0 sm:w-32 sm:text-right" : "right-0 sm:w-32 sm:text-left sm:pl-4"
        )}>
          <time className="text-sm text-muted-foreground">{date}</time>
        </div>
        
        {/* Title and Subtitle */}
        <div className={cn(
            "flex flex-col",
            isRight ? "sm:ml-0" : "sm:mr-0 sm:text-right"
        )}>
            <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">{title}</div>
            <div className="text-lg font-semibold">{subtitle}</div>
        </div>
      </div>
      
      {/* Description and Image */}
      <div className={cn(
        "flex flex-col",
        !isRight && "sm:text-right"
      )}>
        <div className="text-muted-foreground">{description}</div>
        {imageUrl && (
          <div className={cn(
            "mt-4 w-full max-w-sm",
            !isRight && "sm:ml-auto"
          )}>
            <img src={imageUrl} alt={title} className="rounded-lg w-full shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};