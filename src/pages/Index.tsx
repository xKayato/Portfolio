import { Link } from "react-router-dom";
import { personalInfo } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { PixelButton } from "@/components/PixelButton";

const Index = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center min-h-[calc(100vh-114px)] py-12">
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {personalInfo.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-primary sm:text-2xl">
          {personalInfo.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Étudiant en deuxième année d'un BUT en Réseaux et Télécommunications, j'ai 20 ans, je suis fan d'e-sport et de matériel informatique gaming. Je vous invite à consulter mon site personnel pour en apprendre davantage sur mes passions, mes projets et mes compétences. J'ai effectué un stage chez Régie Eau d'Azur du 7 avril au 20 juin 2025. Cette entreprise assure la gestion de l'eau à la métropole de Nice. Durant cette expérience, je me suis familiarisé avec le déploiement d’équipements utilisant la technologie LoRaWAN pour la transmission de données issues de capteurs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/portfolio">
            <PixelButton>
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </PixelButton>
          </Link>
          <Link to="/about">
            <PixelButton variant="outline">
              En savoir plus
            </PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;