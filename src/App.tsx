import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Passions from "./pages/Passions";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import { CursorFollower } from "./components/CursorFollower";
import ScrollToTop from "./components/ScrollToTop";
import { DisplayModeProvider, useDisplayMode } from "./context/DisplayModeContext";
import { WindowsLayout } from "./components/windows/WindowsLayout";
import { WindowManagerProvider } from "./components/windows/useWindowManager";
import { LoadingScreen } from "./components/LoadingScreen"; // Importation

const queryClient = new QueryClient();

// Composant qui gère le rendu conditionnel
const AppContent = () => {
  const { mode } = useDisplayMode();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Déclenche le chargement uniquement au premier rendu si nous sommes en mode windows
  useEffect(() => {
    if (mode === 'windows') {
      // Si le mode est 'windows' (défaut), nous attendons le chargement
      // Le composant LoadingScreen gère le délai et appelle setIsLoaded(true)
    } else {
      // Si le mode est 'classic', on charge immédiatement
      setIsLoaded(true);
    }
  }, [mode]);

  // Les routes sont définies une seule fois, mais le Layout change
  const routes = (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/passions" element={<Passions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  if (mode === 'windows') {
    if (!isLoaded) {
      return <LoadingScreen onLoaded={() => setIsLoaded(true)} delay={3000} />;
    }
    
    // En mode Windows, toutes les pages sont gérées par WindowsLayout
    return (
      <WindowManagerProvider>
        <WindowsLayout>{routes}</WindowsLayout>
      </WindowManagerProvider>
    );
  }

  // Mode Classique
  return (
    <Layout>
      <ScrollToTop />
      {routes}
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" attribute="class">
      <CursorFollower />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <DisplayModeProvider>
            <AppContent />
          </DisplayModeProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;