import { NavLink } from "react-router-dom";
import { personalInfo } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const navLinks = [
  { to: "/about", label: "À Propos" },
  { to: "/passions", label: "Passions" },
  { to: "/skills", label: "Compétences" },
  { to: "/portfolio", label: "Portfolio" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const emailSocial = personalInfo.socials.find(s => s.name === 'Email Universitaire');

  return (
    <header className="bg-card border-b border-border p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-primary">
          {personalInfo.name}
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Socials & Theme Toggle */}
        <div className="flex items-center gap-4">
            {/* Desktop Socials */}
            {personalInfo.socials.filter(s => s.name !== 'Email Universitaire').map(social => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hidden sm:block">
                <social.icon size={20} />
              </a>
            ))}
            {emailSocial && (
                <a href={emailSocial.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hidden sm:block">
                    <Mail size={20} />
                </a>
            )}
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{personalInfo.name}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map(link => (
                    <NavLink 
                      key={link.to} 
                      to={link.to} 
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-lg font-medium transition-colors py-2 border-b ${isActive ? 'text-primary border-primary' : 'text-muted-foreground hover:text-foreground border-border'}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-8 flex gap-4 justify-center">
                  {personalInfo.socials.map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};