import { about, education, experience, personalInfo } from "@/data/content";
import { TimelineItem } from "@/components/TimelineItem";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  // Combine experience and education for alternating alignment
  const timelineItems = [
    ...experience.map((item, index) => ({ ...item, type: 'experience', key: `exp-${index}`, subtitle: item.company })),
    ...education.map((item, index) => ({ ...item, type: 'education', key: `edu-${index}`, subtitle: item.institution })),
  ];

  // Sort items by date (simple string comparison for now, assuming YYYY - YYYY format)
  // We will keep the order as defined in content.ts for simplicity and manual control.

  return (
    <div className="container py-12 md:py-20">
      <section id="about" className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/4">
            <h1 className="text-3xl font-bold mb-4">À Propos de moi</h1>
            <p className="text-muted-foreground text-lg text-justify">
              {about.introduction}
            </p>
            <div className="mt-6">
              <a href={personalInfo.cvUrl} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  Télécharger mon CV <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/4">
            <img src={about.imageUrl} alt="Photo de présentation" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Parcours & Formation</h2>
        <div className="relative">
          {/* Combined timeline items */}
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={item.key} 
              {...item} 
              align={index % 2 === 0 ? 'right' : 'left'} // Alternating alignment for content/image
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;