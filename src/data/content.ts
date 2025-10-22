import { Github, Linkedin, Mail, Smartphone, Code, Network, Shield, Server, BrainCircuit, Gamepad2, Music, Mountain } from 'lucide-react';

export const personalInfo = {
  name: "Votre Nom",
  title: "Étudiant en BUT Réseaux et Télécommunications",
  location: "Sophia Antipolis, Nice",
  email: "votre.email@example.com",
  phone: "+33 6 12 34 56 78",
  socials: [
    { name: "Github", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  ],
  cvUrl: "/path/to/your/cv.pdf", // Mettez le chemin vers votre CV
};

export const about = {
  introduction: `Actuellement en troisième année de BUT Réseaux et Télécommunications à l'IUT de Nice Côte d'Azur (antenne de Sophia Antipolis), je suis passionné par les nouvelles technologies, la sécurité des systèmes d'information et le développement logiciel. Je suis à la recherche d'opportunités pour appliquer mes compétences et en développer de nouvelles.`,
};

export const skills = [
  {
    category: "Développement",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "SQL"],
  },
  {
    category: "Réseaux",
    icon: Network,
    items: ["Configuration Cisco", "TCP/IP", "Routing & Switching", "Wi-Fi", "VPN"],
  },
  {
    category: "Systèmes & Serveurs",
    icon: Server,
    items: ["Linux (Debian, CentOS)", "Windows Server", "Docker", "Virtualisation (VMware)"],
  },
  {
    category: "Cybersécurité",
    icon: Shield,
    items: ["Analyse de vulnérabilités", "Firewalls", "Pentesting (notions)", "Sécurisation des SI"],
  },
  {
    category: "Autres Compétences",
    icon: BrainCircuit,
    items: ["Gestion de projet", "Veille technologique", "Anglais technique", "Travail d'équipe"],
  },
];

export const projects = [
  {
    title: "Projet 1: Firewall Personnalisé",
    description: "Développement d'un firewall applicatif en Python pour filtrer le trafic réseau sur un serveur Linux.",
    tags: ["Python", "Cybersécurité", "Linux"],
    imageUrl: "/placeholder.svg",
    link: "https://github.com",
  },
  {
    title: "Projet 2: Application Web de Monitoring",
    description: "Création d'un dashboard web avec React pour visualiser en temps réel l'état d'une infrastructure réseau.",
    tags: ["React", "Node.js", "Réseaux"],
    imageUrl: "/placeholder.svg",
    link: "https://github.com",
  },
  {
    title: "Projet 3: Maquette d'Infrastructure d'Entreprise",
    description: "Conception et déploiement d'une infrastructure réseau et système complète pour une PME simulée.",
    tags: ["Cisco", "Windows Server", "VMware"],
    imageUrl: "/placeholder.svg",
    link: "#",
  },
];

export const education = [
    {
        date: "2021 - 2024",
        title: "BUT Réseaux et Télécommunications",
        institution: "IUT Nice Côte d'Azur - Sophia Antipolis",
        description: "Spécialisation en Cybersécurité et Développement."
    },
    {
        date: "2021",
        title: "Baccalauréat Scientifique",
        institution: "Lycée Exemple, Ville",
        description: "Option Sciences de l'Ingénieur."
    }
];

export const experience = [
    {
        date: "Été 2023",
        title: "Stage Technicien Réseau",
        company: "Entreprise Fictive, Sophia Antipolis",
        description: "Maintenance du parc informatique, support utilisateur, et participation à la mise en place d'un nouveau VLAN."
    }
];

export const passions = [
    {
        title: "Jeux Vidéo",
        description: "Stratégie et jeux en équipe, qui développent la communication et la résolution de problèmes.",
        icon: Gamepad2
    },
    {
        title: "Musique",
        description: "Pratique de la guitare, ce qui m'apporte rigueur et créativité.",
        icon: Music
    },
    {
        title: "Randonnée",
        description: "J'aime explorer les montagnes de l'arrière-pays niçois pour me ressourcer.",
        icon: Mountain
    }
];