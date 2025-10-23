import { cn } from "@/lib/utils";
import React from "react";

// Composant pour un arrière-plan de style 'Hack' ou 'Code Dispersé'
export const MatrixBackground = () => {
  // Nombre de blocs de code dispersés
  const codeBlocks = Array.from({ length: 100 }, (_, i) => i);

  // Fonction pour générer une petite chaîne de caractères aléatoires
  const generateCodeSnippet = () => {
    const length = Math.floor(Math.random() * 10) + 5; // 5 à 15 caractères
    return Array.from({ length }, () => Math.random().toString(36)[2] || ' ').join('');
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
      <div className="absolute inset-0 bg-background/90 dark:bg-background/90 z-0"></div>
      <div className="absolute inset-0 z-10">
        {codeBlocks.map((i) => (
          <div
            key={i}
            className="absolute text-primary/70 text-xs font-mono"
            style={{
                // Positionnement aléatoire sur tout l'écran
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                // Animation de clignotement subtile
                animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {generateCodeSnippet()}
          </div>
        ))}
      </div>
    </div>
  );
};