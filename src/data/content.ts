import { Github, Linkedin, Mail, Smartphone, Code, Network, Shield, Server, BrainCircuit, Gamepad2, Music, Mountain, GraduationCap } from 'lucide-react';

export const personalInfo = {
  name: "Thomas Deloup",
  title: "Étudiant en BUT Réseaux et Télécommunications",
  location: "Sophia Antipolis, Nice",
  email: "votre.email@example.com",
  universityEmail: "votre.email.etu@univ-cotedazur.fr",
  phone: "+33 6 12 34 56 78",
  socials: [
    { name: "Github", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Email Universitaire", url: "mailto:votre.email.etu@univ-cotedazur.fr", icon: GraduationCap },
  ],
  cvUrl: "/path/to/your/cv.pdf",
};

export const about = {
  introduction: `Bienvenue sur la page À propos de moi, où vous pourrez en apprendre davantage sur mon parcours et mon évolution académique. Vous y trouverez mon cursus scolaire ainsi que mon CV, illustrant mon expérience et les compétences que j’ai développées au fil des années. Cette section vous permettra de mieux comprendre mon profil et mon ambition professionnelle.`,
  imageUrl: "/placeholder.svg",
};

export const skills = [
  {
    category: "Développement",
    mainCategory: "Informatique",
    icon: Code,
    description: "Création d'applications web et de scripts pour l'automatisation des tâches.",
    subcategories: [
      {
        title: "Langages",
        items: ["Python", "JavaScript", "TypeScript", "SQL"],
      },
      {
        title: "Frameworks & Librairies",
        items: ["React", "Node.js"],
      },
    ],
  },
  {
    category: "Réseaux",
    mainCategory: "Réseau",
    icon: Network,
    description: "Conception, déploiement et maintenance d'infrastructures réseau sécurisées et performantes.",
    subcategories: [
        {
            title: "Protocoles & Concepts",
            items: ["TCP/IP", "Routing & Switching", "VPN"],
        },
        {
            title: "Équipements & Technologies",
            items: ["Configuration Cisco", "Wi-Fi"],
        }
    ]
  },
  {
    category: "Systèmes & Serveurs",
    mainCategory: "Informatique",
    icon: Server,
    description: "Administration de serveurs Linux et Windows, et gestion d'environnements virtualisés.",
    subcategories: [
        {
            title: "Systèmes d'exploitation",
            items: ["Linux (Debian, CentOS)", "Windows Server"],
        },
        {
            title: "Virtualisation & Conteneurisation",
            items: ["Docker", "Virtualisation (VMware)"],
        }
    ]
  },
  {
    category: "Cybersécurité",
    mainCategory: "Cybersécurité",
    icon: Shield,
    description: "Protection des systèmes d'information contre les menaces et analyse des vulnérabilités.",
    subcategories: [
        {
            title: "Domaines",
            items: ["Analyse de vulnérabilités", "Pentesting (notions)", "Sécurisation des SI"],
        },
        {
            title: "Outils & Technologies",
            items: ["Firewalls"],
        }
    ]
  },
  {
    category: "Autres Compétences",
    mainCategory: "Communication",
    icon: BrainCircuit,
    description: "Compétences transversales essentielles pour mener à bien des projets techniques.",
    subcategories: [
        {
            title: "Professionnelles",
            items: ["Gestion de projet", "Veille technologique", "Anglais technique", "Travail d'équipe"],
        }
    ]
  },
];

export const projects = [
  {
    title: "Création d'un site web CV",
    description: "Création d'un site web CV en utilisant React, Typescript et TailwindCSS pour présenter mon parcours et mes compétences.",
    tags: {
      categories: ["Développement Frontend"],
      notions: ["React", "TypeScript", "TailwindCSS"],
      logiciels: ["VS Code", "Git"]
    },
    images: ["/placeholder.svg"],
    link: "https://github.com",
    detailedDescription: "Ce projet a été réalisé dans le but de créer un CV en ligne interactif et moderne. J'ai utilisé React pour la structure des composants, TypeScript pour assurer la robustesse du code et TailwindCSS pour un design rapide et responsive. Le site présente mon parcours, mes compétences et mes projets de manière organisée et visuellement agréable."
  },
  {
    title: "Configuration d'un réseau d'entreprise",
    description: "Configuration d'un réseau d'entreprise avec des VLANs, du routage inter-VLAN et des règles de sécurité.",
    tags: {
      categories: ["Infrastructure", "Réseaux"],
      notions: ["VLAN", "Routage", "ACL", "DHCP"],
      logiciels: ["Cisco Packet Tracer", "GNS3"]
    },
    images: ["/placeholder.svg"],
    link: "#",
    detailedDescription: "Ce projet académique consistait à concevoir et simuler un réseau d'entreprise sécurisé et segmenté. J'ai configuré plusieurs VLANs pour séparer les départements, mis en place le routage inter-VLAN sur un routeur Cisco, et appliqué des listes de contrôle d'accès (ACL) pour filtrer le trafic entre les différents segments."
  },
  {
    title: "Déploiement d'un serveur web sécurisé",
    description: "Installation et configuration d'un serveur web Apache sur Linux avec un certificat SSL/TLS.",
    tags: {
      categories: ["Systèmes & Serveurs", "Cybersécurité"],
      notions: ["Apache", "SSL/TLS", "DNS", "Firewall"],
      logiciels: ["Linux (Debian)", "OpenSSL", "UFW"]
    },
    images: ["/placeholder.svg"],
    link: "#",
    detailedDescription: "L'objectif de ce projet était de déployer un serveur web sécurisé de A à Z. J'ai installé et configuré le serveur Apache sur une machine virtuelle Debian, généré et configuré un certificat SSL/TLS avec OpenSSL pour activer le HTTPS, et mis en place des règles de pare-feu avec UFW pour n'autoriser que le trafic web essentiel."
  },
];

export const education = [
    {
        date: "2021 - 2024",
        title: "BUT Réseaux et Télécommunications",
        institution: "IUT Nice Côte d'Azur - Sophia Antipolis",
        description: "Spécialisation en Cybersécurité et Développement.",
        imageUrl: "/placeholder.svg"
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
        description: "Maintenance du parc informatique, support utilisateur, et participation à la mise en place d'un nouveau VLAN.",
        imageUrl: "/placeholder.svg"
    }
];

export const passions = [
    {
        title: "Jeux Vidéo",
        description: "Passionné par les jeux de stratégie et les jeux en équipe, je trouve que c'est un excellent moyen de développer des compétences en communication, en prise de décision rapide et en résolution de problèmes complexes sous pression. C'est aussi un formidable univers d'innovations technologiques.",
        icon: Gamepad2,
        imageUrl: "/placeholder.svg"
    },
    {
        title: "Musique",
        description: "La pratique de la guitare m'apporte un équilibre. Elle demande de la rigueur, de la patience et de la discipline, des qualités que je transpose dans mes projets techniques. C'est aussi une source inépuisable de créativité.",
        icon: Music,
        imageUrl: "/placeholder.svg"
    },
    {
        title: "Randonnée",
        description: "Explorer les montagnes de l'arrière-pays niçois est ma façon de me ressourcer et de me déconnecter. La randonnée m'apprend la persévérance et l'importance de la préparation, tout en m'offrant des paysages magnifiques.",
        icon: Mountain,
        imageUrl: "/placeholder.svg"
    }
];