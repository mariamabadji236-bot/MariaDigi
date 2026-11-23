import { CertificationItem, EducationItem, ProjectItem, SkillCategory } from '../types';

export const PROFILE = {
  brandName: 'MariaDigi',
  fullName: 'Mariama Badji',
  heroTitle: 'Je conçois des expériences digitales qui ont du sens.',
  heroSubtitle: 'UX/UI Designer & Digital Marketing Specialist.',
  heroIntro:
    'Jeune professionnelle du digital basée à Dakar, certifiée en UX Design et en Marketing Digital. J’associe la compréhension des besoins utilisateurs à la stratégie de communication pour concevoir des produits numériques clairs, utiles et engageants.',
  location: 'Dakar, Sénégal',
  email: 'mariamabadji236@gmail.com',
  phoneDisplay: '+221 77 674 16 32',
  whatsappUrl: 'https://wa.me/221776741632',
  linkedinUrl: 'https://www.linkedin.com/in/mariama-badji',
  cvPath: '/assets/aistudio/CV_de_Mariama_BADJI_731eee76.pdf',
  portraitPath: '/assets/mariama-portrait.png',
  heroPortraitPath: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_19.46.11_6b83fc15.jpeg',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'galsenfrika',
    title: 'Galsenfrika',
    subtitle: 'Distribution & valorisation de produits textiles locaux',
    nature: 'Projet de parcours · Marketing Digital',
    category: 'Marketing Digital',
    year: '2025 – 2026',
    featured: true,
    summary:
      'Stratégie marketing digital complète, positionnement de marque, plan de communication multicanal et vision de l’expérience e-commerce pour la commercialisation de textiles locaux.',
    context:
      'Galsenfrika vise à promouvoir et commercialiser des produits textiles locaux auprès d’une clientèle urbaine et connectée, sensible au savoir-faire artisanal et à la qualité des matières.',
    userNeed:
      'Les acheteurs recherchent une boutique fiable permettant de découvrir l’origine des tissus, visualiser les coupes avec clarté et commander simplement en ligne sans friction.',
    approach: [
      'Contribution à l’étude de marché et analyse du positionnement face aux acteurs textiles locaux et digitaux.',
      'Définition de la ligne éditoriale et création de contenus visuels pour les réseaux sociaux.',
      'Structuration des tunnels d’acquisition, d’email marketing et de fidélisation client.',
      'Définition des indicateurs de performance (KPI) à suivre lors du lancement commercial.',
      'Conception de l’architecture e-commerce envisagée : fiche produit narrative, réassurance et parcours de commande simplifié.',
    ],
    personas: [
      {
        name: 'Awa, 28 ans',
        role: 'Jeune active à Dakar',
        need: 'Trouver des pièces textiles authentiques et contemporaines livrées rapidement.',
        frustration: 'Manque de transparence sur les matières, les tailles et les délais sur les pages sociales classiques.',
      },
      {
        name: 'Moussa, 34 ans',
        role: 'Client diaspora / cadeau',
        need: 'Commander à distance avec un parcours e-commerce rassurant et des visuels fidèles.',
        frustration: 'Absence de catalogue structuré et d’informations claires sur la commande.',
      },
    ],
    userFlow: [
      'Découverte via contenu social media / campagne d’acquisition',
      'Arrivée sur la page collection textile',
      'Consultation fiche produit (histoire du tissu, guide des tailles)',
      'Ajout au panier & validation simplifiée',
      'Inscription newsletter & séquence email de fidélisation',
    ],
    deliverables: [
      'Étude de marché & positionnement',
      'Stratégie Social Media & Création de contenu',
      'Architecture Email Marketing & Fidélisation',
      'Concept d’expérience e-commerce & KPI de suivi',
    ],
    tools: ['Canva', 'Adobe Illustrator', 'Google AI Studio', 'Google Workspace', 'CapCut'],
    visualTheme: 'galsenfrika',
  },
  {
    id: 'ker-facile',
    title: 'Kër Facile',
    subtitle: 'Service numérique de nettoyage à domicile',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: true,
    summary:
      'Conception UX/UI d’un service numérique facilitant la recherche, la réservation et le suivi de prestations de nettoyage à domicile, côté clients comme côté prestataires.',
    context:
      'La mise en relation entre particuliers et prestataires de nettoyage à domicile repose souvent sur le bouche-à-oreille informel, générant des incertitudes sur la disponibilité, les tarifs et la confiance.',
    userNeed:
      'Offrir aux particuliers un moyen rapide et rassurant de réserver une intervention adaptée à leur logement, tout en donnant aux prestataires un outil clair pour gérer leurs demandes.',
    approach: [
      'Recherche utilisateur exploratoire autour des attentes de confiance, de tarification et de ponctualité.',
      'Modélisation de deux personas complémentaires (client demandeur et prestataire de service).',
      'Cartographie des parcours utilisateurs (User Journey) pour identifier les points de friction avant et pendant la réservation.',
      'Élaboration des User Flows de demande de prestation et de confirmation.',
      'Réalisation des wireframes et maquettes d’interfaces orientées lisibilité et simplicité sur mobile.',
    ],
    personas: [
      {
        name: 'Fatou, 31 ans',
        role: 'Cadre avec emploi du temps chargé',
        need: 'Réserver un nettoyage ponctuel ou récurrent en moins de 3 minutes avec tarif transparent.',
        frustration: 'Devoir appeler plusieurs contacts sans garantie de disponibilité ni de prix fixe.',
      },
      {
        name: 'Ibrahima, 27 ans',
        role: 'Prestataire qualifié',
        need: 'Recevoir des missions claires (quartier, surface, horaire) et organiser son planning.',
        frustration: 'Annulations de dernière minute et manque de précision sur les tâches attendues.',
      },
    ],
    userFlow: [
      'Sélection du type de nettoyage & fréquence',
      'Saisie de la zone géographique et des créneaux souhaités',
      'Visualisation de l’estimation et choix du prestataire',
      'Confirmation de la réservation',
      'Suivi du statut de l’intervention',
    ],
    deliverables: [
      'Synthèse de recherche utilisateur',
      'Personas Clients & Prestataires',
      'User Journey & User Flows',
      'Wireframes & Maquettes UI Mobile',
    ],
    tools: ['Figma', 'Google Workspace'],
    visualTheme: 'kerfacile',
  },
  {
    id: 'ideaflow',
    title: 'IdeaFlow',
    subtitle: 'Espace de structuration et d’organisation d’idées',
    nature: 'Concept UX/UI · Conception produit',
    category: 'UX/UI Design',
    year: '2026',
    featured: true,
    summary:
      'Conception d’une interface digitale pensée pour aider les créatifs, étudiants et porteurs de projets à capturer, trier et transformer leurs idées brutes en plans d’action structurés.',
    context:
      'Les notes éparpillées entre messageries, carnets et captures d’écran rendent difficile le passage de l’inspiration initiale à un projet structuré et actionnable.',
    userNeed:
      'Disposer d’un espace calme, visuellement hiérarchisé et sans surcharge cognitive pour centraliser ses idées par thématique et suivre leur progression.',
    approach: [
      'Définition du concept produit et cadrage des besoins utilisateurs autour de la prise de notes créative.',
      'Architecture de l’information orientée clarté : capture rapide, catégorisation par projet et vue synthèse.',
      'Conception des parcours principaux (ajout d’idée, regroupement, passage en mode structuration).',
      'Design d’interfaces épurées mettant l’accent sur la lisibilité typographique et le confort visuel.',
    ],
    personas: [
      {
        name: 'Aminata, 24 ans',
        role: 'Étudiante en design & créatrice de contenu',
        need: 'Retrouver rapidement ses idées de projets et les organiser par étapes claires.',
        frustration: 'Les outils trop complexes ralentissent la prise de note spontanée.',
      },
    ],
    userFlow: [
      'Capture rapide d’une nouvelle idée en un clic',
      'Attribution à un espace ou thème de projet',
      'Structuration en objectifs et sous-tâches',
      'Passage en vue synthèse pour suivi de réalisation',
    ],
    deliverables: [
      'Note de concept & proposition de valeur',
      'Architecture des fonctionnalités clés',
      'User Flow & Wireframes',
      'Interfaces UI haute fidélité',
    ],
    tools: ['Figma', 'Canva'],
    visualTheme: 'ideaflow',
  },
  {
    id: 'mairie-connect',
    title: 'Mairie Connect',
    subtitle: 'Parcours d’autorisation de construire à Diamaguène / Sicap Mbao',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    summary:
      'Réflexion UX/UI sur l’amélioration du parcours de demande d’autorisation de construire et sur la transparence du suivi des dossiers pour les demandeurs et agents municipaux.',
    context:
      'Les démarches administratives locales souffrent souvent d’un manque de visibilité sur les pièces requises et sur l’état d’avancement des dossiers déposés.',
    userNeed:
      'Clarifier chaque étape de dépôt pour le citoyen tout en facilitant le traitement et le suivi interne pour les agents de la mairie.',
    approach: [
      'Recherche utilisateur sur les blocages rencontrés lors des dépôts de dossiers.',
      'Création des personas demandeurs et agents municipaux.',
      'Cartographie des parcours utilisateurs et proposition d’un suivi de dossier lisible.',
    ],
    personas: [
      {
        name: 'Cheikh, 42 ans',
        role: 'Demandeur d’autorisation',
        need: 'Connaître la liste exacte des pièces et l’avancement réel de son dossier.',
        frustration: 'Déplacements répétés à la mairie faute de visibilité à distance.',
      },
    ],
    userFlow: [
      'Vérification de la liste des pièces requises',
      'Dépôt guidé de la demande',
      'Réception d’un numéro de suivi',
      'Consultation des étapes de validation par l’agent',
    ],
    deliverables: [
      'Recherche utilisateur & Personas',
      'Parcours demandeurs et agents',
      'Concept de suivi de dossier',
    ],
    tools: ['Figma', 'Google Workspace'],
    visualTheme: 'mairie',
  },
  {
    id: 'karaange-kids',
    title: 'PEL Challenge — Karaange Kids',
    subtitle: 'Application mobile de sensibilisation des enfants aux risques en ligne',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    summary:
      'Conception d’une application mobile éducative aidant les enfants à identifier les risques numériques et à comprendre comment demander de l’aide en toute sécurité.',
    context:
      'Face à l’exposition croissante des plus jeunes aux écrans, il devient essentiel de proposer des repères pédagogiques accessibles et rassurants.',
    userNeed:
      'Proposer un environnement ludique et non anxiogène qui explique les bons réflexes numériques et facilite le dialogue avec un adulte de confiance.',
    approach: [
      'Analyse de la problématique de sécurité en ligne adaptée au jeune public.',
      'Définition des personas (enfant utilisateur et parent accompagnant).',
      'Conception d’une maquette mobile haute fidélité claire et bienveillante.',
    ],
    personas: [
      {
        name: 'Marième, 11 ans',
        role: 'Élève utilisant une tablette familiale',
        need: 'Comprendre simplement quoi faire face à un message inconnu ou gênant.',
        frustration: 'Les avertissements techniques habituels sont difficiles à comprendre.',
      },
    ],
    userFlow: [
      'Accueil adapté & choix du module de sensibilisation',
      'Découverte d’un scénario interactif',
      'Identification du bon réflexe',
      'Bouton d’alerte / dialogue guidé vers un parent',
    ],
    deliverables: [
      'Cadrage de la problématique',
      'Personas',
      'Maquette mobile haute fidélité',
    ],
    tools: ['Figma', 'Adobe Illustrator'],
    visualTheme: 'karaange',
  },
  {
    id: 'sangalkam-mobilite',
    title: 'Mon quartier : un problème, une solution',
    subtitle: 'Solution de transport de proximité à Sangalkam',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    summary:
      'Étude des difficultés de déplacement rencontrées par les habitants de Sangalkam et conception d’une solution numérique de transport de proximité adaptée aux usages locaux.',
    context:
      'Les trajets quotidiens dans les zones périurbaines manquent parfois de régularité et d’information claire sur les points de prise en charge.',
    userNeed:
      'Aider les habitants à repérer les trajets disponibles à proximité et à planifier leurs déplacements quotidiens plus sereinement.',
    approach: [
      'Étude de terrain et formulation de la problématique de mobilité locale.',
      'Recherche utilisateur auprès des habitants et usagers réguliers.',
      'Modélisation du parcours utilisateur et présentation de la solution digitale.',
    ],
    personas: [
      {
        name: 'Ousmane, 29 ans',
        role: 'Habitant effectuant des trajets quotidiens',
        need: 'Trouver rapidement un transport de proximité fiable aux heures de pointe.',
        frustration: 'Temps d’attente imprévisibles et manque de visibilité sur les passages.',
      },
    ],
    userFlow: [
      'Localisation du point de départ à Sangalkam',
      'Consultation des liaisons de proximité',
      'Confirmation de la prise en charge',
    ],
    deliverables: [
      'Étude de problématique',
      'Recherche & Parcours utilisateur',
      'Présentation de la solution UX/UI',
    ],
    tools: ['Figma', 'Google Workspace'],
    visualTheme: 'sangalkam',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ux-ui',
    title: 'UX/UI Design',
    description:
      'Méthodologie centrée sur l’humain, de l’écoute des besoins sur le terrain jusqu’aux interfaces haute fidélité et systèmes visuels.',
    items: [
      'UX Research',
      'User Persona',
      'User Journey',
      'User Flow',
      'Wireframing',
      'Prototypage',
      'UI Design',
      'Design System',
      'Tests utilisateurs',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description:
      'Structuration de la visibilité en ligne, création de messages cohérents et activation des leviers d’engagement et d’acquisition.',
    items: [
      'Stratégie digitale',
      'Inbound Marketing',
      'Email Marketing',
      'Social Media Marketing',
      'SEO',
      'Création de contenu',
      'Marketing de contenu',
    ],
  },
  {
    id: 'outils',
    title: 'Outils & Environnement',
    description:
      'Maîtrise des environnements de conception d’interfaces, de création visuelle, de montage et de déploiement web.',
    items: [
      'Figma',
      'Google AI Studio',
      'Canva',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'CapCut',
      'Google Workspace',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'google-ux',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google · Coursera',
    status: 'Certifiée',
    summary:
      'Parcours complet couvrant les fondements de l’expérience utilisateur, la recherche utilisateur, la création de personas, le wireframing, le prototypage sur Figma et la conduite de tests d’utilisabilité.',
    competencies: [
      'Empathie & Recherche utilisateur',
      'Architecture de l’information & User Flows',
      'Wireframes basse et haute fidélité',
      'Prototypage interactif & Tests utilisateurs',
    ],
    verificationNote:
      'Emplacement prévu pour le lien officiel de vérification Coursera et l’aperçu numérique du certificat lors de la mise en ligne WordPress.',
    verificationUrl: 'https://www.coursera.org/professional-certificates/google-ux-design',
  },
  {
    id: 'marketing-digital',
    title: 'Certification Marketing Digital',
    issuer: 'Parcours Marketing Digital',
    status: 'Certifiée',
    summary:
      'Formation dédiée à l’élaboration de stratégies digitales, au marketing de contenu, à la gestion des réseaux sociaux, à l’email marketing, au référencement naturel et au suivi des indicateurs de performance.',
    competencies: [
      'Étude de marché & Positionnement',
      'Stratégie Social Media & Inbound',
      'Email Marketing & Fidélisation',
      'SEO & Analyse des KPI',
    ],
    verificationNote:
      'Emplacement prévu pour le visuel officiel du certificat et son lien de vérification authentifié.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Simplon Sénégal',
    program: 'UI/UX Design',
    period: '2026',
    focus: 'Conception centrée utilisateur, recherche terrain, design d’interfaces et prototypage.',
  },
  {
    institution: 'Xarala Academy',
    program: 'Marketing Digital',
    period: '2025 – 2026',
    focus: 'Stratégie de communication digitale, réseaux sociaux, email marketing, contenu et KPI.',
  },
  {
    institution: 'IMTECH Nelson Mandela',
    program: 'Transport Logistique',
    period: '2024 – 2025',
    focus: 'Compréhension des flux, organisation opérationnelle et rigueur de coordination.',
  },
  {
    institution: 'Baccalauréat',
    program: 'Série L2',
    period: '2023 – 2024',
    focus: 'Expression écrite, esprit d’analyse et culture générale littéraire.',
  },
];
