import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  speed?: number; // Vitesse en ms par caractère
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Fin de la frappe, on commence l'effet de clignotement du curseur
      setIsTyping(false);
      
      // Simuler l'effacement après un délai (pour l'effet de "disparition")
      const eraseTimeout = setTimeout(() => {
        setDisplayedText('');
        setIsTyping(true); // Recommencer la frappe
      }, 3000); // Attendre 3 secondes avant d'effacer

      return () => clearTimeout(eraseTimeout);
    }
  }, [displayedText, text, speed, isTyping]);

  // Curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const cursor = (
    <span 
      className={cn(
        "inline-block w-1 h-full bg-primary ml-1 align-middle",
        "transition-opacity duration-500",
        cursorVisible ? "opacity-100" : "opacity-0",
        "border-r-2 border-primary animate-[blink-caret_0.75s_step-end_infinite]"
      )}
      style={{ height: '1em', width: '0.1em' }} // Ajustement pour la hauteur du texte
    >
    </span>
  );

  return (
    <span className={cn("font-mono whitespace-pre", className)}>
      {displayedText}
      {cursor}
    </span>
  );
};