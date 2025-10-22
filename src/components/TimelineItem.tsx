interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

export const TimelineItem = ({ date, title, subtitle, description, imageUrl }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">{title}</div>
      <div className="flex flex-col sm:flex-row items-start mb-1">
        <div className="flex-shrink-0 sm:absolute left-0 sm:left-0 sm:w-32 sm:text-right pr-4">
          <time className="text-sm text-muted-foreground">{date}</time>
        </div>
        <div className="text-lg font-semibold">{subtitle}</div>
      </div>
      <div className="text-muted-foreground">{description}</div>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="mt-4 rounded-lg w-full max-w-sm shadow-md" />
      )}
      <div className="absolute top-5 left-0 h-full w-px bg-border -translate-x-px group-last:hidden"></div>
      <div className="absolute top-5 left-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
    </div>
  );
};