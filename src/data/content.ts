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
  imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP", "Java", "XML"],
      },
      {
        title: "Frameworks & Librairies",
        items: ["React", "Node.js", "GStreamer"],
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
            items: ["TCP/IP", "Routing & Switching", "VPN", "OSPF", "HSRP", "BGP", "MPLS", "VLAN", "STP", "ACLs"],
        },
        {
            title: "Équipements & Technologies",
            items: ["Configuration Cisco", "Wi-Fi", "Cisco IOS"],
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
            items: ["Analyse de vulnérabilités", "Pentesting", "Sécurisation des SI"],
        },
        {
            title: "Outils & Technologies",
            items: ["Firewalls", "Nmap", "SQLMap", "BurpSuite", "Metasploit", "Nessus"],
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
            items: ["Gestion de projet", "Veille technologique", "Anglais technique", "Travail d'équipe", "Rédaction professionnelle"],
        }
    ]
  },
];

export const projects = [
  {
    title: "Un site web sur l'e-sport",
    description: "Développement d'un site web responsive sur l'e-sport en HTML et CSS.",
    tags: {
      categories: ["Développement Frontend", "Informatique"],
      notions: ["HTML", "CSS", "Responsive Design"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1542751371-2278c85465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de notre première année de BUT en Réseaux et Télécommunications, nous avons dû développer un site internet sur une passion commune avec un camarade de classe (Cédric Tabary). Partageant un intérêt pour l’e-sport, nous avons choisi de créer un site dédié à cette discipline, présentant nos équipes et nos jeux e-sport préférés. Partant de quasiment zéro, nous avons dû apprendre par nous-mêmes les langages HTML et CSS afin de concevoir un site fonctionnel et esthétique. Étant passionnés par le sujet, nous avons priorisé l’apprentissage technique pour donner vie à notre projet. Nous avons également veillé à rendre le site responsive, afin qu'il soit adapté aussi bien aux ordinateurs qu'aux appareils mobiles."
  },
  {
    title: "Projet CheckList : Développement d'un site web dynamique",
    description: "Conception d'un site web dynamique de gestion des bonnes pratiques en PHP/SQL, hébergé sur un Raspberry Pi.",
    tags: {
      categories: ["Développement Backend", "Gestion de projet", "Informatique"],
      notions: ["PHP", "SQL", "Gestion de projet", "Administration Système"],
      logiciels: ["Raspberry Pi"]
    },
    images: ["https://images.unsplash.com/photo-1589923188900-85dae523342d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de notre première année de BUT Réseaux et Télécommunications, en groupe de quatre, nous avons dû concevoir un projet de A à Z, de l’idée à la réalisation. Ce projet consistait à développer un site web dynamique de gestion des bonnes pratiques. Ce projet m'a permis d'apprendre à travailler en équipe, à m'organiser efficacement en utilisant des outils professionnels tels que les matrices RACI, les diagrammes de Gantt et l'analyse des risques, et à développer un site web dynamique en PHP et SQL. Le site web devait être hébergé sur un Raspberry Pi, que nous avons dû configurer nous-mêmes afin d’en assurer le bon fonctionnement. Cette expérience m’a également appris à gérer un serveur web et à approfondir mes compétences en administration système et hébergement."
  },
  {
    title: "Développement d'une application android 'JugementDay'",
    description: "Création d'une application Android en Java/XML avec une API Web et une base de données pour noter des œuvres.",
    tags: {
      categories: ["Développement Mobile", "Développement Backend", "Informatique"],
      notions: ["Java", "XML", "Android Studio", "API REST", "Base de données"],
      logiciels: ["Android Studio"]
    },
    images: ["https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Le projet consistait à développer une application Android reliée à une API Web aussi créée par notre groupe. Nous avons également dû faire un programme Java sur le serveur permettant de gérer la base de données. Notre application, développée avec Android Studio en Java et XML, permet de juger des œuvres quelconques avec une note sur 5. On peut également voir les jugements d'autres personnes et consulter la moyenne des œuvres. L'application intègre un système de comptes et un système de recherche permettant de trouver des œuvres ou des utilisateurs. Les appels réseau sont gérés via des threads pour optimiser la fluidité. Le projet comprend plus de 2000 lignes de code et a été finalisé après deux semaines d’optimisation et de correction de bugs. De plus, nous avons mis en place des mesures de sécurité pour garantir la protection des données."
  },
  {
    title: "Réseau sécurisé",
    description: "Configuration d'un réseau d'entreprise complet avec VLANs, pare-feu, redondance et VPN IPSec.",
    tags: {
      categories: ["Réseaux", "Sécurité"],
      notions: ["VLAN", "Firewall", "VPN IPSec", "OSPF", "HSRP", "Redondance"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1580894732444-8ecded7948b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "En groupe de 4, nous avons dû configurer un réseau complet à partir d'une topologie vierge. Ce réseau devait pouvoir être relié à d'autres départements via un VPN IPSec sécurisé. Ce réseau comporte les éléments suivants : Plusieurs VLANs pour segmenter le trafic et améliorer la sécurité, un pare-feu (Firewall) assurant la protection et le filtrage du trafic, une couche distribution/cœur du réseau garantissant la redondance et une bonne répartition du trafic, un VPN IPSec pour interconnecter les départements de manière sécurisée, un protocole de routage dynamique (OSPF) pour optimiser le trafic et assurer la redondance, une haute disponibilité avec un mécanisme comme HSRP, et une gestion des accès et des règles de sécurité avancées sur le pare-feu. Ce projet m’a permis d’approfondir mes compétences en réseaux, notamment en configuration, sécurisation et optimisation des infrastructures. J’ai également dû effectuer des recherches par moi-même pour mieux comprendre certaines technologies et les implémenter efficacement."
  },
  {
    title: "CCNA 1 - Introduction aux réseaux",
    description: "Validation de la certification CCNA 1, couvrant les fondamentaux des réseaux, les modèles OSI/TCP-IP et la configuration de base.",
    tags: {
      categories: ["Réseaux", "Certification"],
      notions: ["OSI", "TCP/IP", "IPv4/IPv6", "Cisco IOS", "DHCP", "DNS"],
      logiciels: ["Cisco"]
    },
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Pendant ma deuxième année de BUT Réseaux et Télécommunications, j’ai validé la certification CCNA 1 de Cisco, qui m’a permis d’acquérir une solide compréhension des fondamentaux des réseaux informatiques. Ce module m’a appris les bases essentielles du fonctionnement des réseaux, depuis la communication entre équipements jusqu’à la configuration des premières infrastructures réseau. L’un des aspects clés de cette formation repose sur les modèles OSI et TCP/IP, qui permettent de comprendre comment les données circulent à travers un réseau, en passant par différentes couches. J’ai également étudié l’adressage IP, en approfondissant l’utilisation des adresses IPv4 et IPv6, le calcul de sous-réseaux et les méthodes d’attribution d’adresses dynamiques ou statiques via DHCP. J’ai appris à configurer des équipements réseau de base en utilisant le système d’exploitation Cisco IOS, en manipulant des commutateurs (switches) et routeurs pour établir des connexions entre différents segments de réseau. La formation aborde aussi les protocoles de communication comme ARP, ICMP, DNS et DHCP, qui permettent aux équipements de s’identifier et d’échanger des informations sur un réseau local (LAN) ou à travers Internet. Enfin, la sécurisation des équipements a été abordée avec la mise en place de protections basiques, telles que la configuration de mots de passe sur les terminaux d’administration ou la restriction des accès non autorisés."
  },
  {
    title: "CCNA 2 - Switching, Routing et Wireless",
    description: "Validation de la certification CCNA 2, approfondissant la commutation, le routage, les VLANs et les réseaux sans fil.",
    tags: {
      categories: ["Réseaux", "Certification"],
      notions: ["VLAN", "STP", "OSPF", "ACLs", "Port Security", "WLAN"],
      logiciels: ["Cisco"]
    },
    images: ["https://images.unsplash.com/photo-1614218279114-212b3a01b35f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Après l’acquisition des bases, j’ai poursuivi avec le CCNA 2, qui approfondit les notions de commutation (switching), routage (routing) et réseaux sans fil (wireless). Ce module m’a permis de configurer des infrastructures plus avancées, en travaillant sur la segmentation des réseaux, l’optimisation du trafic et la mise en place de mécanismes de sécurité renforcés. L’un des éléments clés abordés dans cette certification est la gestion des VLANs, qui permet de segmenter un réseau physique en plusieurs réseaux logiques pour améliorer la sécurité et la gestion du trafic. J’ai appris à configurer des liaisons Trunk, à manipuler le protocole Spanning Tree (STP) pour éviter les boucles réseau et à mettre en place des protocoles de routage statique et dynamique, comme OSPF en Single Area, afin de faciliter la communication entre différentes sous-réseaux. En parallèle, ce module introduit également des techniques pour sécuriser les équipements réseau, en mettant en place des mécanismes tels que Port Security, qui limite les périphériques pouvant se connecter à un switch, ou encore des listes de contrôle d’accès (ACLs) pour filtrer les connexions entrantes et sortantes. Enfin, le CCNA 2 m’a initié aux réseaux sans fil (Wi-Fi), en étudiant les principes du WLAN (Wireless Local Area Network) et les protocoles utilisés pour sécuriser les communications sans fil. J’ai ainsi appris à configurer une infrastructure Wi-Fi basique et à en assurer la protection contre les attaques courantes. Grâce à ces certifications, j’ai pu développer une approche plus technique et approfondie du réseau, en manipulant des équipements réels et en effectuant des configurations avancées qui me serviront dans mes futurs projets professionnels."
  },
  {
    title: "Découverte de mon réseau informatique",
    description: "Analyse approfondie du réseau domestique, incluant l'architecture, le trafic et la consommation énergétique des appareils.",
    tags: {
      categories: ["Réseaux", "Analyse"],
      notions: ["Diagnostic réseau", "Analyse de trafic", "Consommation énergétique"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Dans le cadre d’un projet en autonomie, j’ai réalisé une analyse approfondie de mon réseau domestique, en étudiant son architecture, son fonctionnement et l’impact de l’activité des appareils connectés. Ce travail m’a permis d’identifier les équipements présents sur mon réseau, d’observer le trafic échangé et d’évaluer la consommation énergétique de certains appareils en fonction de leur utilisation. J’ai notamment mené des tests de consommation sur mon téléphone, afin d’analyser l’influence de différentes applications et connexions réseau sur son autonomie. En complément, j’ai effectué des CPU stress tests pour mesurer la consommation énergétique de mon processeur en situation de charge intensive. Grâce à ce projet, j’ai renforcé mes compétences en diagnostic réseau, en mesure de performance et en optimisation des ressources, des éléments essentiels en administration et sécurité des infrastructures informatiques."
  },
  {
    title: "Routage Dynamique",
    description: "Configuration et manipulation des protocoles de routage dynamique RIP, OSPF et HSRP.",
    tags: {
      categories: ["Réseaux"],
      notions: ["RIP", "OSPF", "HSRP", "Routage dynamique", "Haute disponibilité"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Dans le cadre de mes travaux pratiques, j’ai appris à configurer et manipuler différents protocoles de routage dynamique, notamment RIP, OSPF et HSRP. Ces exercices m’ont permis de comprendre le fonctionnement de chaque protocole, leurs avantages et leurs cas d’utilisation. J’ai ainsi pu mettre en place des infrastructures réseau capables de s’adapter automatiquement aux changements de topologie, garantissant une redondance et une optimisation des routes. Grâce à ces travaux, j’ai renforcé mes compétences en configuration avancée de routeurs, en gestion de la haute disponibilité et en sécurisation du routage dans un réseau d’entreprise."
  },
  {
    title: "Border Gateway Protocol",
    description: "Configuration et manipulation du protocole BGP pour l'échange de routes entre systèmes autonomes.",
    tags: {
      categories: ["Réseaux"],
      notions: ["BGP", "Routage inter-domaine", "Politiques de routage"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de mes travaux pratiques, j’ai appris à configurer et manipuler le protocole BGP (Border Gateway Protocol), essentiel pour l’échange de routes entre autonomes systems (AS) dans un réseau d’entreprise. J’ai mis en place des scénarios simulant des environnements réels, configuré des peerings BGP, et appliqué des politiques de routage pour contrôler la diffusion des préfixes et optimiser le trafic réseau. Ce projet m’a permis de comprendre les enjeux du routage inter-domaine, d’améliorer mes compétences en gestion d’infrastructure réseau à grande échelle, et de renforcer mes connaissances sur les mécanismes de sécurité et de résilience du BGP."
  },
  {
    title: "MPLS",
    description: "Configuration du protocole MPLS pour optimiser le routage et créer des VPN sécurisés.",
    tags: {
      categories: ["Réseaux"],
      notions: ["MPLS", "VPN", "QoS", "Label switching"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1550751827-4138d04d475d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de mes travaux pratiques, j’ai appris à configurer et manipuler le protocole MPLS (Multiprotocol Label Switching), utilisé pour optimiser le routage du trafic au sein des réseaux d’entreprise. J’ai mis en place des infrastructures intégrant MPLS et VPN, permettant de créer des réseaux privés sécurisés sur une infrastructure partagée. Ces exercices m’ont permis de comprendre le fonctionnement du label switching, d’optimiser la gestion du trafic réseau et d’améliorer la qualité de service (QoS). Grâce à cette expérience, j’ai renforcé mes compétences en ingénierie réseau avancée, en gestion des flux de données et en mise en place de solutions sécurisées et performantes pour les entreprises."
  },
  {
    title: "Réalisation d'un pentest en autonomie",
    description: "Réalisation d'un projet complet de pentest en boîte grise, incluant l'identification de failles et la rédaction de rapports.",
    tags: {
      categories: ["Cybersécurité", "Pentesting"],
      notions: ["Pentest boîte grise", "Analyse de vulnérabilités", "Pivot", "Rapport de pentest"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1544890225-2f3faec4cd60?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Dans le cadre de ma deuxième année de BUT Réseaux et Télécommunications, j’ai réalisé un projet complet de pentest en boîte grise qui m’a permis de développer mes compétences en cybersécurité. Ce projet m’a offert une expérience pratique précieuse, notamment dans l’identification et l’exploitation de failles, ainsi que dans la mise en œuvre d’un pivot pour accéder à des machines cibles. Lors de ce projet, j’ai rédigé plusieurs livrables clés : un rapport de pentest en boîte grise, détaillant les vulnérabilités identifiées et les solutions proposées; une annexe explicative, fournissant des instructions claires pour reproduire les étapes techniques effectuées; les Conditions Générales de Service (CGS), définissant le cadre et les modalités de l’intervention; un devis, précisant les coûts associés à la prestation (imaginaire); et une lettre d’engagement, formalisant l’accord avec le client. Cette expérience m’a permis d’approfondir mes connaissances sur les méthodologies de pentest, d’améliorer ma rigueur dans la rédaction de documents professionnels et de renforcer mes compétences techniques en sécurité informatique."
  },
  {
    title: "Travaux pratiques de Pentest",
    description: "Acquisition de compétences en test d'intrusion via des TP utilisant des outils comme Nmap, SQLMap, BurpSuite, Metasploit et Nessus.",
    tags: {
      categories: ["Cybersécurité", "Pentesting"],
      notions: ["Injection SQL", "Pivot SSH", "Analyse de malware"],
      logiciels: ["Nmap", "SQLMap", "BurpSuite", "Metasploit", "Nessus"]
    },
    images: ["https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Au cours de ma formation, j’ai réalisé plusieurs travaux pratiques en cybersécurité, me permettant d'acquérir des compétences essentielles en sécurité informatique et en test d’intrusion. Ces TP m’ont appris à rédiger un rapport de pentest et une annexe explicative détaillant les étapes techniques effectuées; à utiliser des outils d’analyse et de test tels que Nmap, SQLMap, BurpSuite, Metasploit et Nessus; à mettre en place un pivot SSH pour accéder à des machines distantes; à rechercher et exploiter des failles sur différentes infrastructures; et à examiner un malware afin d’analyser son comportement et ses impacts. Ces expériences m’ont permis d’approfondir mes compétences techniques en cybersécurité, d’améliorer ma méthodologie d’audit et de développer une approche rigoureuse dans l’analyse des vulnérabilités et la rédaction de rapports professionnels."
  },
  {
    title: "Projet FluxMedia : Étude de fichier audio à l'aide de Gstreamer",
    description: "Développement d'une interface graphique en Python avec GStreamer pour la lecture de fichiers audio et l'affichage de métadonnées.",
    tags: {
      categories: ["Télécommunication", "Développement"],
      notions: ["Python", "Traitement audio", "Métadonnées"],
      logiciels: ["GStreamer"]
    },
    images: ["https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de ma deuxième année de BUT R&T, j’ai travaillé sur un projet en autonomie visant à développer une interface graphique de lecture audio. L’objectif était de concevoir une application capable de lire divers formats de fichiers audio (FLAC, MPEG, etc.), d’afficher leurs métadonnées, de proposer une visualisation du morceau en cours et d’afficher la pochette de l’album. Ce projet a été réalisé en Python, en utilisant GStreamer pour la gestion et la lecture des flux audio sous Linux. Il m’a permis d’approfondir mes compétences en programmation dynamique et optimisée, tout en découvrant l’exploitation des bibliothèques multimédias pour le traitement et l’affichage des contenus audio."
  },
  {
    title: "Interview d’un Professionnel en Cybersécurité",
    description: "Interview d'un pentester chez Amadeus pour comprendre les pratiques et défis de la cybersécurité.",
    tags: {
      categories: ["Communication", "Cybersécurité"],
      notions: ["Interview professionnelle", "Synthèse d'information", "Présentation orale"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de ma première année de BUT Réseaux & Télécommunications, j’ai eu l’opportunité, avec un camarade, d’interviewer un pentester travaillant chez Amadeus Sophia Antipolis. Ce métier nous attirant particulièrement, nous avons pu lui poser de nombreuses questions sur son quotidien, ses méthodes de travail et les défis liés à la sécurisation des infrastructures. Cette expérience nous a permis d’acquérir une meilleure compréhension des pratiques de cybersécurité, des outils utilisés et des méthodologies employées pour tester et renforcer la sécurité des systèmes. Une fois l’interview réalisée, nous avons préparé et présenté un compte rendu oral devant notre classe. Ce projet nous a également appris à mener une interview professionnelle, à structurer nos recherches et à synthétiser les informations recueillies pour les restituer de manière claire et pertinente."
  },
  {
    title: "Projet Voltaire",
    description: "Obtention de la certification Voltaire avec un score de 741, attestant d'un niveau 'Orthographe Affaires'.",
    tags: {
      categories: ["Communication", "Certification"],
      notions: ["Orthographe", "Rédaction professionnelle"],
      logiciels: ["Projet Voltaire"]
    },
    images: ["https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "J'ai obtenu la certification Voltaire avec un score de 741 points, correspondant au niveau 'Orthographe Affaires'. Ce niveau atteste de mes compétences à rédiger des textes ayant une portée stratégique ou légale, ainsi qu'à relire et corriger les écrits de collaborateurs. Il est particulièrement recommandé pour des postes tels que responsable grands comptes, assistant de direction, directeur de service, juriste, avocat ou notaire. Cette certification reflète ainsi ma maîtrise de l'orthographe et ma capacité à garantir une communication écrite professionnelle et irréprochable."
  },
  {
    title: "Guide de survie de l'étudiant",
    description: "Conception d'un guide pour les futurs étudiants en R&T, inspiré du format du Guide Michelin.",
    tags: {
      categories: ["Communication", "Gestion de projet"],
      notions: ["Rédaction", "Travail collaboratif", "Synthèse d'information"],
      logiciels: []
    },
    images: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    link: "#",
    detailedDescription: "Lors de ma première année de BUT R&T, j’ai participé à un projet de groupe visant à concevoir un guide de survie destiné aux futurs étudiants de première année en Réseaux & Télécommunications. L’objectif était de créer un document clair et accessible, répondant aux principales interrogations sur la vie étudiante à l’IUT : organisation des cours, matières enseignées, professeurs, services disponibles et conseils pratiques pour s’adapter rapidement à cet environnement. Travaillant en équipe de quatre, nous avons structuré notre contenu de manière concise et efficace, en nous inspirant du Guide Michelin pour son format synthétique et intuitif. Ce projet nous a permis de développer des compétences essentielles en rédaction, communication et travail collaboratif, tout en apprenant à transmettre des informations de façon claire et pertinente."
  }
];

export const education = [
    {
        date: "2021 - 2024",
        title: "BUT Réseaux et Télécommunications",
        institution: "IUT Nice Côte d'Azur - Sophia Antipolis",
        description: "Spécialisation en Cybersécurité et Développement.",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        date: "2021",
        title: "Baccalauréat Scientifique",
        institution: "Lycée Exemple, Ville",
        description: "Option Sciences de l'Ingénieur.",
        imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export const experience = [
    {
        date: "Été 2023",
        title: "Stage Technicien Réseau",
        company: "Entreprise Fictive, Sophia Antipolis",
        description: "Maintenance du parc informatique, support utilisateur, et participation à la mise en place d'un nouveau VLAN.",
        imageUrl: "https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export const passions = [
    {
        title: "Jeux Vidéo / Esport",
        description: "Fan de jeux vidéo depuis mon plus jeune âge. Les jeux vidéo sont pour moi un moyen de me sentir mieux. Également fan d'E-sport (sport électronique) où je supporte mes équipes favorites chaque jour sur différents types de jeux. J'ai également créé un site internet dédié à ma passion pour l'E-sport dans la catégorie Portfolio.  ",
        icon: Gamepad2,
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Informatique",
        description: "La pratique de la guitare m'apporte un équilibre. Elle demande de la rigueur, de la patience et de la discipline, des qualités que je transpose dans mes projets techniques. C'est aussi une source inépuisable de créativité.",
        icon: Music,
        imageUrl: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Randonnée",
        description: "Explorer les montagnes de l'arrière-pays niçois est ma façon de me ressourcer et de me déconnecter. La randonnée m'apprend la persévérance et l'importance de la préparation, tout en m'offrant des paysages magnifiques.",
        icon: Mountain,
        imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];