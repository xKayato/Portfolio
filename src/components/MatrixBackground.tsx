import { cn } from "@/lib/utils";
import React from "react";

// Composant simple pour simuler des lignes de code en arrière-plan
export const MatrixBackground = () => {
  // Augmente le nombre de colonnes pour mieux couvrir l'écran (70 colonnes)
  const columns = Array.from({ length: 70 }, (_, i) => i);

  // Fonction pour générer une chaîne de caractères aléatoires moins dense
  const generateCode = () => {
    // Génère une chaîne de 50 caractères, avec des sauts de ligne pour la dispersion
    return Array.from({ length: 50 }, () => {
        // 50% de chance d'être un caractère, 50% de chance d'être un saut de ligne ou un espace
        if (Math.random() < 0.5) {
            return Math.random().toString(36)[2] || ' ';
        }
        return '\n';
    }).join('');
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
      <div className="absolute inset-0 bg-background/90 dark:bg-background/90 z-0"></div>
      <div className="absolute inset-0 z-10 flex justify-around">
        {columns.map((i) => (
          <div
            key={i}
            className="absolute w-1 text-primary/50 text-xs font-mono whitespace-pre-wrap break-all"
            style={{
                // Positionnement des colonnes pour couvrir de 0% à 100% de la largeur
                left: `${(i / columns.length) * 100}%`, 
                top: 0,
                height: '100%',
                animationName: 'matrix-fall',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                // Durée plus longue pour un mouvement plus lent et dispersé
                animationDuration: `${15 + Math.random() * 15}s`, 
                animationDelay: `${Math.random() * 15}s`, // Délai plus long
            }}
          >
            {generateCode()}
          </div>
        ))}
      </div>
    </div>
  );
};