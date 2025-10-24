import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { WindowsLayout } from "./components/windows/WindowsLayout"; // À créer

const queryClient = new QueryClient();

// Composant qui gère le rendu conditionnel
const AppContent = () => {
  const { mode } = useDisplayMode();

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
    // En mode Windows, toutes les pages sont gérées par WindowsLayout
    return <WindowsLayout>{routes}</WindowsLayout>;
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