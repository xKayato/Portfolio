import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center min-h-[calc(100vh-114px)] py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {personalInfo.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-primary sm:text-2xl">
          {personalInfo.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Bienvenue sur mon portfolio. Vous y trouverez mes projets, mes compétences et mon parcours.
          Basé à {personalInfo.location}, je suis passionné par la création de solutions technologiques robustes et sécurisées.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/portfolio">
            <Button>
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;