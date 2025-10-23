import { cn } from "@/lib/utils";
import React from "react";

// Composant simple pour simuler des lignes de code en arrière-plan
export const MatrixBackground = () => {
  // Génère un tableau de 50 colonnes pour l'effet visuel
  const columns = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
      <div className="absolute inset-0 bg-background/90 dark:bg-background/90 z-0"></div>
      <div className="absolute inset-0 z-10 flex justify-around">
        {columns.map((i) => (
          <div
            key={i}
            className="absolute w-1 text-primary/50 text-xs font-mono whitespace-pre-wrap break-all"
            style={{
                left: `${i * 2}%`, // Espacement des colonnes
                top: 0,
                height: '100%',
                animationName: 'matrix-fall',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDuration: `${10 + Math.random() * 10}s`, // Durée aléatoire
                animationDelay: `${Math.random() * 10}s`, // Délai aléatoire
            }}
          >
            {/* Génère une longue chaîne de caractères aléatoires */}
            {Array.from({ length: 100 }, () => Math.random().toString(36)[2] || ' ').join('\n')}
          </div>
        ))}
      </div>
    </div>
  );
};