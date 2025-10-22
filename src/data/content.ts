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
    title: "Projet 1: Firewall Personnalisé",
    description: "Développement d'un firewall applicatif en Python pour filtrer le trafic réseau sur un serveur Linux.",
    tags: {
      categories: ["Développement Backend", "Cybersécurité"],
      notions: ["NetfilterQueue", "Filtrage de paquets"],
      logiciels: ["Python", "Linux"]
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    link: "https://github.com",
    detailedDescription: "Ce projet consistait à développer un firewall applicatif en Python utilisant la bibliothèque NetfilterQueue sur un système Linux. L'objectif était de créer des règles de filtrage personnalisées pour inspecter et bloquer le trafic malveillant au niveau de la couche application, offrant une sécurité plus fine qu'un firewall réseau standard."
  },
  {
    title: "Projet 2: Application Web de Monitoring",
    description: "Création d'un dashboard web avec React pour visualiser en temps réel l'état d'une infrastructure réseau.",
    tags: {
      categories: ["Développement Frontend", "Réseaux"],
      notions: ["SNMP", "Visualisation de données"],
      logiciels: ["React", "Node.js", "JavaScript"]
    },
    images: ["/placeholder.svg"],
    link: "https://github.com",
    detailedDescription: "Le but de ce projet était de concevoir un dashboard de monitoring réseau. Le backend, développé en Node.js, collecte des données via SNMP sur les équipements réseau. Le frontend, en React, affiche ces informations (charge CPU, utilisation de la bande passante, etc.) sous forme de graphiques dynamiques pour une supervision en temps réel."
  },
  {
    title: "Projet 3: Maquette d'Infrastructure d'Entreprise",
    description: "Conception et déploiement d'une infrastructure réseau et système complète pour une PME simulée.",
    tags: {
      categories: ["Infrastructure", "Systèmes & Réseaux"],
      notions: ["Active Directory", "DNS", "DHCP", "Virtualisation"],
      logiciels: ["Cisco IOS", "Windows Server", "VMware"]
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    link: "#",
    detailedDescription: "Ce projet académique consistait à simuler la création de l'infrastructure complète d'une PME. Cela incluait la configuration de routeurs et switchs Cisco, le déploiement de serveurs Windows (Active Directory, DNS, DHCP) sur un environnement virtualisé VMware, et la mise en place de politiques de sécurité réseau."
  },
];

export const education = [
    {
        date: "2021 - 2024",
        title: "BUT Réseaux et Télécommunications",
        institution: "IUT Nice Côte d'Azur - Sophia Antipolis",
        description: "Spécialisation en Cybersécurité et Développement.
        Actuellement en troisième année à l'IUT Nice Côte d'Azur à Sophia Antipolis en Réseaux et Télécommunications (R&T).

En première année, on apprend à manipuler des équipements réseaux, à configurer des routeurs, des switchs, des serveurs, etc. Tout en apprenant les bases de la programmation, nous avons également appris à utiliser efficacement Linux et à manipuler des machines virtuelles.

Pendant ma deuxième année j'ai pu renforcer mes connaissances apprises lors de ma première année dans les réseaux en y ajoutant de la sécurité, comme la configuration d'un Firewall (ASA). On a apprit le Java et la conception d'applications mobile (Android Studio Java). On a aussi apprit le Pentest à travers plusieurs TP d'intrusion dans des machines.

Durant cette deuxième année, j'ai pu obtenir la certification du CCNA1 et du CCNA2.

En troisième année, je me suis spécialisé en cybersécurité et j'ai effectué une alternance chez la "Régie Eau d'Azur" en tant que développeur informatique industriel.",
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