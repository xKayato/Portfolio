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
    title: "Déploiement d'un site web CV",
    description: "Création d'un site web CV en utilisant React, Typescript et TailwindCSS pour présenter mon parcours et mes compétences.",
    tags: {
      categories: ["Développement Frontend"],
      notions: ["React", "TypeScript", "TailwindCSS"],
      logiciels: ["VS Code", "Git"]
    },
    images: ["/placeholder.svg"],
    link: "#",
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
  {
    title: "Mise en place d'un Active Directory",
    description: "Installation et configuration d'un environnement Active Directory sous Windows Server pour la gestion centralisée des utilisateurs et des ressources.",
    tags: {
      categories: ["Systèmes & Serveurs", "Infrastructure"],
      notions: ["Active Directory", "GPO", "DNS", "DHCP"],
      logiciels: ["Windows Server", "VMware"]
    },
    images: ["/placeholder.svg"],
    link: "#",
    detailedDescription: "Ce projet visait à mettre en place une infrastructure de gestion d'identités avec Active Directory. J'ai installé le rôle AD DS sur un Windows Server, créé une forêt et un domaine, et configuré des unités d'organisation (OU) pour structurer les utilisateurs et les ordinateurs. J'ai également mis en place des stratégies de groupe (GPO) pour appliquer des paramètres de sécurité et de configuration de manière centralisée."
  },
  {
    title: "Analyse de trames réseau avec Wireshark",
    description: "Capture et analyse de trames réseau pour diagnostiquer des problèmes de communication et comprendre le fonctionnement des protocoles.",
    tags: {
      categories: ["Réseaux", "Cybersécurité"],
      notions: ["TCP/IP", "HTTP", "DNS", "Analyse de paquets"],
      logiciels: ["Wireshark"]
    },
    images: ["/placeholder.svg"],
    link: "#",
    detailedDescription: "Dans ce projet, j'ai utilisé Wireshark pour capturer le trafic réseau sur une interface locale. J'ai analysé les différentes couches du modèle OSI/TCP-IP, identifié les échanges entre un client et un serveur web (HTTP), et résolu des problèmes de connectivité en examinant les paquets échangés. Cette analyse m'a permis de mieux comprendre le fonctionnement interne des protocoles réseau."
  },
  {
    title: "Scripting Python pour l'automatisation",
    description: "Développement de scripts Python pour automatiser des tâches d'administration système et de traitement de données.",
    tags: {
      categories: ["Développement", "Automatisation"],
      notions: ["Python", "Manipulation de fichiers", "API REST"],
      logiciels: ["VS Code", "Git", "Python"]
    },
    images: ["/placeholder.svg"],
    link: "#",
    detailedDescription: "Ce projet consistait à créer une série de scripts Python pour automatiser des tâches répétitives. J'ai développé un script pour sauvegarder automatiquement des fichiers de configuration, un autre pour interroger une API REST et extraire des données, et un troisième pour parser des fichiers logs et générer des rapports. Cela m'a permis de gagner en efficacité et de réduire les risques d'erreurs manuelles."
  }
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