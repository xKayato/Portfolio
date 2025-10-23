import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import StarBackground from "./StarBackground";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Star Background (visible en mode sombre, positionné en arrière-plan) */}
      <div className="absolute inset-0 dark:block hidden -z-10">
        <StarBackground />
      </div>
      
      <Header />
      <main className="flex-grow relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};