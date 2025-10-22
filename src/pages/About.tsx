import { about, education, experience, personalInfo } from "@/data/content";
import { TimelineItem } from "@/components/TimelineItem";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <section id="about" className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">À Propos de moi</h1>
            <p className="text-muted-foreground text-lg">
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
          <div className="md:w-1/3">
            <img src={about.imageUrl} alt="Photo de présentation" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      <section id="cursus" className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Mon Parcours Professionnel</h2>
        <div>
          {experience.map((item, index) => (
            <TimelineItem 
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.company}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
      
      <section id="education">
        <h2 className="text-2xl font-bold mb-8">Ma Formation</h2>
        <div>
          {education.map((item, index) => (
            <TimelineItem 
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.institution}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;