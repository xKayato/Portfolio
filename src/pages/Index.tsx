import { Link } from "react-router-dom";
import { personalInfo } from "@/data/content";
import { ArrowRight, Monitor } from "lucide-react";
import { TechButton } from "@/components/TechButton";
import { TypingEffect } from "@/components/TypingEffect";
import { useDisplayMode } from "@/context/DisplayModeContext";
import { useIsWindowsMode } from "@/hooks/use-windows-mode";
import { useWindowsActions } from "@/hooks/use-windows-actions";
import { cn } from "@/lib/utils";

const Index = () => {
  const { setMode } = useDisplayMode();
  const { isWindowsMode, openWindow, resetWindowPosition } = useWindowsActions();
  const fullName = personalInfo.name;
  const typingText = fullName;

  // En mode Windows, nous voulons un contenu plus compact et centré
  const containerClasses = isWindowsMode 
    ? "flex flex-col items-center justify-center text-center h-full py-4 p-4 md:p-6" // Ajout du padding ici
    : "container relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-114px)] py-12";

  const handleViewProjects = () => {
    if (isWindowsMode) {
      openWindow('portfolio');
    }
  };
  
  const handleViewAbout = () => {
    if (isWindowsMode) {
      // Forcer la réinitialisation de la position avant d'ouvrir
      resetWindowPosition('about');
      openWindow('about');
    }
  };

  return (
    <div className={containerClasses}>
      
      <div className="max-w-5xl relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-foreground">
            <TypingEffect text={typingText} speed={150} />
          </span>
        </h1>
        <h2 className="mt-3 text-xl font-medium text-primary sm:text-2xl">
          {personalInfo.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Étudiant en deuxième année d'un BUT en Réseaux et Télécommunications, j'ai 20 ans, je suis fan d'e-sport et de matériel informatique gaming. Je vous invite à consulter mon site personnel pour en apprendre davantage sur mes passions, mes projets et mes compétences. J'ai effectué un stage chez Régie Eau d'Azur du 7 avril au 20 juin 2025. Cette entreprise assure la gestion de l'eau à la métropole de Nice. Durant cette expérience, je me suis familiarisé avec le déploiement d’équipements utilisant la technologie LoRaWAN pour la transmission de données issues de capteurs.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
          {/* Le Link est conservé pour le mode classique, mais on ajoute un onClick pour le mode Windows */}
          <Link 
            to="/portfolio" 
            onClick={isWindowsMode ? (e) => { e.preventDefault(); handleViewProjects(); } : undefined}
          >
            <TechButton>
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </TechButton>
          </Link>
          
          {!isWindowsMode && (
            <TechButton variant="secondary" onClick={() => setMode('windows')}>
              Mode Windows <Monitor className="ml-2 h-4 w-4" />
            </TechButton>
          )}
          
          {isWindowsMode && (
            <TechButton variant="secondary" onClick={() => setMode('classic')}>
              Quitter le mode Windows <Monitor className="ml-2 h-4 w-4" />
            </TechButton>
          )}
        </div>
        
        <div className="mt-4">
          <Link 
            to="/about"
            onClick={isWindowsMode ? (e) => { e.preventDefault(); handleViewAbout(); } : undefined}
          >
            <TechButton variant="outline">
              En savoir plus
            </TechButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;