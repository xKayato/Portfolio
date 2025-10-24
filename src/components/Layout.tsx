import { Header } from "./Header";
import { Footer } from "./Footer";
import StarField from "./windows/StarField"; // Importation de StarField
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Star Field (visible en mode sombre, positionné en arrière-plan) */}
      <div className="absolute inset-0 dark:block hidden -z-10">
        <StarField />
      </div>
      
      <Header />
      <main className="flex-grow relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};