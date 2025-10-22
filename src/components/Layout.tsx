import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { personalInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, Smartphone } from "lucide-react";
import { MadeWithDyad } from "./made-with-dyad";

const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/a-propos", label: "À Propos" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/competences", label: "Compétences" },
  { path: "/passions", label: "Passions" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{personalInfo.name}</span>
          </NavLink>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium mt-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="hidden sm:inline-block">
            <Button>Me Contacter</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground"><Mail size={20} /></a>
            <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-foreground"><Smartphone size={20} /></a>
            {personalInfo.socials.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <social.icon size={20} />
                </a>
            ))}
        </div>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};