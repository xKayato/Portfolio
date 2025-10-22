import { NavLink } from "react-router-dom";
import { personalInfo } from "@/data/content";
import { MadeWithDyad } from "./made-with-dyad";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { to: "/about", label: "À Propos" },
  { to: "/skills", label: "Compétences" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/passions", label: "Passions" },
];

export const Header = () => {
  return (
    <header className="bg-card border-b border-border p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-primary">
          {personalInfo.name}
        </NavLink>
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
        <div className="flex items-center gap-4">
            {personalInfo.socials.map(social => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <social.icon size={20} />
              </a>
            ))}
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
};