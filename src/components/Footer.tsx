import { personalInfo } from "@/data/content";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useDisplayMode } from "@/context/DisplayModeContext";

export const Footer = () => {
  const { mode } = useDisplayMode();

  if (mode === 'windows') {
    return null; // Ne pas afficher le footer en mode Windows
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedin = personalInfo.socials.find(s => s.name === 'LinkedIn');
  const github = personalInfo.socials.find(s => s.name === 'Github');

  return (
    <footer className="bg-footer-DEFAULT text-footer-foreground">
      <div className="container py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Contact Message */}
          <div className="text-2xl font-bold">
            Contactez moi à tout moment !
          </div>

          {/* Email */}
          <div>
            <p className="text-sm opacity-80">Adresse email universitaire</p>
            <a 
              href={`mailto:${personalInfo.universityEmail}`} 
              className="text-footer-accent hover:underline text-lg font-medium"
            >
              {personalInfo.universityEmail}
            </a>
          </div>

          {/* Socials */}
          <div>
            <p className="text-sm opacity-80 mb-2">Réseaux</p>
            <div className="flex gap-4">
              {linkedin && (
                <a href={linkedin.url} target="_blank" rel="noreferrer" className="text-footer-accent hover:text-white transition-colors">
                  <linkedin.icon size={24} />
                </a>
              )}
              {github && (
                <a href={github.url} target="_blank" rel="noreferrer" className="text-footer-accent hover:text-white transition-colors">
                  <github.icon size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <Button 
          onClick={scrollToTop} 
          size="icon" 
          className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-footer-accent hover:bg-footer-accent/80 rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};