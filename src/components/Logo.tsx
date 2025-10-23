import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <img 
            src="/Deloup.png" 
            alt="Logo TD" 
            className={`h-8 w-auto ${className}`} 
        />
    );
};