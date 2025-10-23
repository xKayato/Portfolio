import { cn } from "@/lib/utils";
import React from "react";

// Composant simple pour simuler des lignes de code en arrière-plan
export const MatrixBackground = () => {
  // Génère un tableau de 50 lignes pour l'effet visuel
  const lines = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
      <div className="absolute inset-0 bg-background/90 dark:bg-background/90 z-0"></div>
      <div className="absolute inset-0 z-10">
        {lines.map((i) => (
          <div
            key={i}
            className={cn(
              "absolute w-full h-1 bg-primary/10",
              "animate-pulse duration-[5000ms] ease-linear",
              // Positionnement aléatoire simulé via des classes Tailwind
              `top-[${Math.floor(Math.random() * 100)}%]`,
              `left-[${Math.floor(Math.random() * 100)}%]`,
              `delay-${i * 100}ms` // Tentative de décalage (limité par Tailwind)
            )}
            style={{
                top: `${Math.floor(Math.random() * 100)}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                transform: `translateY(${Math.random() * 100}vh) rotate(${Math.random() * 360}deg)`,
            }}
          >
            {/* Caractères simples pour l'effet de code */}
            <span className="text-primary/50 text-xs font-mono absolute whitespace-nowrap">
                {Array.from({ length: 20 }, () => Math.random().toString(36)[2]).join('')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};