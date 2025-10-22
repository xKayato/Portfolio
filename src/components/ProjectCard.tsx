import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export const ProjectCard = ({ title, description, tags, imageUrl, link }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="aspect-video relative mb-4">
            <img src={imageUrl} alt={title} className="object-cover rounded-md w-full h-full" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        {link && link !== "#" && (
          <a href={link} target="_blank" rel="noreferrer" className="w-full">
            <Button variant="outline" className="w-full">
              Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};