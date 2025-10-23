import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  speed?: number; // Vitesse en ms par caractère
  eraseSpeed?: number; // Vitesse en ms par caractère pour l'effacement
  pauseDuration?: number; // Pause avant effacement/réécriture
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 100, 
  eraseSpeed = 50, 
  pauseDuration = 4000, // Augmenté à 4000ms (4 secondes)
  className 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (index < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        }, speed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (index > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, index - 1));
          setIndex(index - 1);
        }, eraseSpeed);
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, eraseSpeed, pauseDuration]);

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