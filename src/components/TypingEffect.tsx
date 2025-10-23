import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  speed?: number; // Vitesse en ms par caractère
  className?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 100, 
  className 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Logique de frappe unique
  useEffect(() => {
    if (isFinished) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
    }
  }, [displayedText, text, speed, isFinished]);

  // Curseur clignotant (s'arrête après la frappe)
  useEffect(() => {
    if (!isFinished) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [isFinished]);

  const cursor = (
    <span 
      className={cn(
        "inline-block w-1 h-full ml-1 align-middle",
        "border-r-2 border-primary animate-[blink-caret_0.75s_step-end_infinite]",
        // Le curseur est visible uniquement pendant la frappe ou après la fin
        isFinished && cursorVisible ? "opacity-100" : "opacity-0",
        !isFinished && "opacity-100" // Toujours visible pendant la frappe
      )}
      style={{ height: '1em', width: '0.1em' }}
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