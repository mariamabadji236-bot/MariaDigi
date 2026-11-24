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
  cvPath: '/assets/aistudio/CV_de_Mariama_BADJI_final_6788e281.pdf',
  cvPngPath: '/assets/CV_Mariama_Badji_MariaDigi.png',
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
    subtitle: 'Application mobile de capture, d’évaluation et de priorisation d’idées',
    nature: 'Concept UX/UI · Application mobile',
    category: 'UX/UI Design',
    year: '2026',
    featured: true,
    summary:
      'Conception d’une application mobile permettant de capturer ses idées, de les évaluer selon 3 critères (Utilité, Faisabilité, Potentiel), de les comparer et de sélectionner son projet prioritaire.',
    context:
      'Les porteurs de projets accumulent souvent de nombreuses idées sans méthode claire pour les structurer, évaluer leur viabilité ni décider sur laquelle concentrer leurs efforts en priorité.',
    userNeed:
      'Disposer d’un outil mobile clair et guidé pour centraliser ses idées par catégorie, les noter objectivement sur 15 points et comparer leurs scores avant de se lancer.',
    approach: [
      'Cadrage du concept produit : « Organisez aujourd’hui, réalisez demain » autour de 4 onglets (Accueil, Mes idées, Comparer, Profil).',
      'Structuration de la fiche idée : titre, description, problème identifié et catégorisation (Business, Technologies, Éducation, Autres).',
      'Création d’un système d’évaluation simple sur 3 critères notés de 1 à 5 (Utilité, Faisabilité, Potentiel) générant un score sur 15.',
      'Conception du comparateur de scores et de l’écran de confirmation pour valider l’idée prioritaire à développer.',
    ],
    personas: [
      {
        name: 'Amadou Fall',
        role: 'Jeune porteur de projet multi-idées',
        need: 'Comparer objectivement plusieurs idées (livraison locale, formation, services) pour choisir la plus pertinente.',
        frustration: 'Disperser son énergie sur trop d’idées à la fois faute de grille de lecture structurée.',
      },
      {
        name: 'Aminata, 24 ans',
        role: 'Étudiante & créatrice de projets',
        need: 'Capturer rapidement une idée dès qu’elle émerge et y associer le problème qu’elle résout.',
        frustration: 'Perdre le fil de ses notes brutes éparpillées sans vision claire de leur potentiel.',
      },
    ],
    userFlow: [
      'Connexion / Inscription (e-mail, Google ou Apple)',
      'Tableau de bord synthétique (nombre d’idées, évaluées et à évaluer)',
      'Création ou modification d’une fiche idée avec problème identifié et catégorie',
      'Évaluation multi-critères (Utilité, Faisabilité, Potentiel) et calcul du score final /15',
      'Comparaison des idées évaluées et validation de l’idée prioritaire',
    ],
    deliverables: [
      'Identité visuelle & Concept produit (« IdéaFlow »)',
      'Architecture des écrans & User Flow complet',
      '11 maquettes mobiles haute fidélité sur Figma',
    ],
    tools: ['Figma', 'Canva'],
    visualTheme: 'ideaflow',
    prototypeScreens: [
      {
        id: 'if-login',
        step: '01 · Accès',
        title: 'Connexion',
        description:
          'Écran d’accueil avec l’identité IdéaFlow (« Organisez aujourd’hui, réalisez demain »), connexion par e-mail ou via Google et Apple.',
        mediaType: 'image',
        src: '/assets/aistudio/iPhone_16_Plus_-_1_d129615b.png',
      },
      {
        id: 'if-signup',
        step: '02 · Accès',
        title: 'Inscription',
        description:
          'Création de compte fluide avec champs nom complet, e-mail, mot de passe masquable et options d’inscription rapide.',
        mediaType: 'image',
        src: '/assets/aistudio/Inscription_28e92075.png',
      },
      {
        id: 'if-dashboard',
        step: '03 · Accueil',
        title: 'Tableau de bord',
        description:
          'Vue centrale affichant le compteur d’idées (total, évaluées, à évaluer), l’accès rapide « Nouvelle idée » et les idées récentes.',
        mediaType: 'image',
        src: '/assets/aistudio/Tableau_de_bord_f00a8583.png',
      },
      {
        id: 'if-add',
        step: '04 · Capture',
        title: 'Nouvelle idée',
        description:
          'Formulaire structuré pour formuler le titre, la description, le problème identifié et choisir une catégorie (Business, Technologies, Éducation, Autres).',
        mediaType: 'image',
        src: '/assets/aistudio/Ajouter_une_id_e_0015d423.png',
      },
      {
        id: 'if-list',
        step: '05 · Bibliothèque',
        title: 'Mes idées',
        description:
          'Liste de toutes les idées enregistrées avec recherche, filtre, statut d’évaluation et accès direct à la modification ou notation.',
        mediaType: 'image',
        src: '/assets/aistudio/Mes_id_es_046e1f15.png',
      },
      {
        id: 'if-edit',
        step: '06 · Édition',
        title: 'Modifier une idée',
        description:
          'Écran de mise à jour des informations d’une idée existante avec compteur de caractères sur le problème identifié.',
        mediaType: 'image',
        src: '/assets/aistudio/modifier_une_id_e_1722cd4b.png',
      },
      {
        id: 'if-detail-pending',
        step: '07 · Fiche',
        title: 'Fiche de l’idée (À évaluer)',
        description:
          'Consultation détaillée d’une idée avant notation, avec son statut « À évaluer » et les boutons d’action vers l’évaluation ou l’édition.',
        mediaType: 'image',
        src: '/assets/aistudio/Fiche_id_e_f40adc63.png',
      },
      {
        id: 'if-evaluate',
        step: '08 · Notation',
        title: 'Évaluer mon idée',
        description:
          'Grille de notation de 1 à 5 sur trois critères guidés par des infobulles : Utilité, Faisabilité et Potentiel.',
        mediaType: 'image',
        src: '/assets/aistudio/Evaluation_0c744c7f.png',
      },
      {
        id: 'if-detail-scored',
        step: '09 · Synthèse',
        title: 'Fiche de l’idée (Évaluée)',
        description:
          'Affichage visuel des barres de score par critère, du Score Final sur 15 (12/15) et du bouton vers la comparaison.',
        mediaType: 'image',
        src: '/assets/aistudio/Fiche_idee_evaluer_18c83bf3.png',
      },
      {
        id: 'if-compare',
        step: '10 · Décision',
        title: 'Comparer mes idées',
        description:
          'Vue comparative mettant en avant l’idée obtenant le meilleur score (12/15 vs 10/15) pour aider à la prise de décision.',
        mediaType: 'image',
        src: '/assets/aistudio/Comparer_603ab043.png',
      },
      {
        id: 'if-confirm',
        step: '11 · Validation',
        title: 'Confirmation de priorité',
        description:
          'Écran final confirmant le choix de l’idée prioritaire avec récapitulatif complet des notes avant passage à l’action.',
        mediaType: 'image',
        src: '/assets/aistudio/Confirmation_9cc1de31.png',
      },
    ],
  },
  {
    id: 'mairie-connect',
    title: 'Mairie Connect',
    subtitle: 'Démarches d’urbanisme & permis de construire à Diamaguène / Sicap Mbao',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    summary:
      'Conception UX/UI de l’application mobile Mairie Connect (DSM Connect) simplifiant les démarches d’urbanisme et le dépôt du permis de construire avec audio explicatif, pré-vérification IA des pièces (Aira) et suivi des dossiers.',
    context:
      'Les demandes d’autorisation de construire à Diamaguène / Sicap Mbao nécessitent de réunir de nombreuses pièces administratives, domaniales et architecturales, avec un manque de visibilité fréquent sur l’avancement des dossiers.',
    userNeed:
      'Guider pas à pas les citoyens sur les documents obligatoires ou facultatifs (y compris par audio), détecter les pièces non conformes avant soumission et offrir un tableau de bord clair de suivi des demandes.',
    approach: [
      'Structuration de l’accueil communal autour de 4 rubriques (Urbanisme disponible en ligne, État Civil, Action Sociale et Citoyenne, Fiscalité Locale) avec recherche et lecteur audio.',
      'Conception de la fiche « Informations nécessaires » détaillant les conditions, la liste complète des pièces, le timbre fiscal, les délais (21 à 45 jours) et l’assistant conversationnel.',
      'Organisation du formulaire de dépôt du permis de construire en 3 blocs (pièces administratives, justificatifs Impôts et Domaines, pièces techniques et architecturales) avec double vérification IA (Aira) et gestion explicite des erreurs.',
      'Création du parcours d’authentification OTP, de la confirmation de dépôt et du tableau de bord DSM Connect (« Bonjour, Moussa ») ainsi que de la page de contact municipal.',
    ],
    personas: [
      {
        name: 'Moussa',
        role: 'Demandeur de permis de construire à Diamaguène / Sicap Mbao',
        need: 'Déposer son dossier complet en ligne et suivre facilement l’état de ses demandes (En attente, Validée, Refusée).',
        frustration: 'Allers-retours à la mairie à cause d’une pièce manquante ou non conforme (ex. CNI verso uniquement).',
      },
      {
        name: 'Binetou Badji',
        role: 'Habitante en recherche d’accompagnement administratif',
        need: 'Contacter rapidement les services de la mairie par formulaire, téléphone ou e-mail en cas de question.',
        frustration: 'Manque de repères clairs sur les horaires d’ouverture et les canaux de contact officiels.',
      },
    ],
    userFlow: [
      'Accueil Mairie Connect, sélection d’Urbanisme et consultation des informations et audio explicatif',
      'Connexion / Inscription par numéro de téléphone, récupération de mot de passe et vérification Code OTP',
      'Dépôt des pièces administratives, domaniales et techniques pour le permis de construire',
      'Double vérification automatique des documents par Aira et correction guidée en cas d’erreur',
      'Confirmation « Dépôt bien reçu ! », suivi en temps réel sur DSM Connect et contact municipal',
    ],
    deliverables: [
      'Architecture des rubriques communales & parcours Permis de construire',
      'Parcours OTP, dépôt documentaire & vérification IA (Aira)',
      '13 maquettes mobiles haute fidélité sur Figma',
    ],
    tools: ['Figma', 'Google Workspace'],
    visualTheme: 'mairie',
    prototypeScreens: [
      {
        id: 'mc-01',
        step: '01 · Accueil',
        title: 'Accueil Mairie Connect',
        description:
          'Page d’accueil présentant les horaires de la commune (8h à 17h), un lecteur audio d’introduction, la recherche et les 4 pôles (Urbanisme, État Civil, Action Sociale, Fiscalité).',
        mediaType: 'image',
        src: '/assets/mairie-connect/01-accueil.png',
      },
      {
        id: 'mc-02',
        step: '02 · Catégorie',
        title: 'Rubrique Urbanisme',
        description:
          'Liste des 3 démarches disponibles en ligne : Permis de construire, Certificat d’urbanisme et Autorisation d’occuper ou de lotir.',
        mediaType: 'image',
        src: '/assets/mairie-connect/02-urbanisme.png',
      },
      {
        id: 'mc-03',
        step: '03 · Information',
        title: 'Informations nécessaires',
        description:
          'Présentation détaillée (qui peut faire la demande, pièces à fournir, délais de 21 à 45 jours), lecteur audio et accès à l’assistant « Discutons Ensemble ! ».',
        mediaType: 'image',
        src: '/assets/mairie-connect/03-informations.png',
      },
      {
        id: 'mc-04',
        step: '04 · Accès',
        title: 'Connexion / Inscription',
        description:
          'Accès à l’espace citoyen par numéro de téléphone et mot de passe avec bascule Se connecter / S’inscrire.',
        mediaType: 'image',
        src: '/assets/mairie-connect/04-connexion.png',
      },
      {
        id: 'mc-05',
        step: '05 · Récupération',
        title: 'Mot de passe oublié',
        description:
          'Choix du canal de réinitialisation par e-mail ou téléphone pour recevoir un code OTP sécurisé.',
        mediaType: 'image',
        src: '/assets/mairie-connect/05-mdp-oublie.png',
      },
      {
        id: 'mc-06',
        step: '06 · Sécurité',
        title: 'Vérification Code OTP',
        description:
          'Saisie rapide du code à 4 chiffres reçu par message avant de poursuivre le dépôt de dossier.',
        mediaType: 'image',
        src: '/assets/mairie-connect/06-otp.png',
      },
      {
        id: 'mc-07',
        step: '07 · Dépôt',
        title: 'Documents demandés (Permis de Construire)',
        description:
          'Formulaire structuré en 3 catégories (pièces administratives, justificatifs Impôts et Domaines, pièces techniques) avec statut Obligatoire / Facultatif.',
        mediaType: 'image',
        src: '/assets/mairie-connect/07-documents.png',
      },
      {
        id: 'mc-08',
        step: '08 · Analyse IA',
        title: 'Aira — Première vérification',
        description:
          'Écran de transition rassurant informant l’usager que l’assistant Aira réalise la première vérification des documents joints.',
        mediaType: 'image',
        src: '/assets/mairie-connect/08-aira-1.png',
      },
      {
        id: 'mc-09',
        step: '09 · Analyse IA',
        title: 'Aira — Deuxième vérification',
        description:
          'Seconde passe de contrôle de conformité administrative avant validation définitive du dossier.',
        mediaType: 'image',
        src: '/assets/mairie-connect/09-aira-2.png',
      },
      {
        id: 'mc-10',
        step: '10 · Correction',
        title: 'Signalement d’erreur de pièces',
        description:
          'Retour précis expliquant les anomalies détectées (ex. CNI verso uniquement, demande Maire non conforme) avec bouton « Soumettre à nouveau ».',
        mediaType: 'image',
        src: '/assets/mairie-connect/10-erreur.png',
      },
      {
        id: 'mc-11',
        step: '11 · Validation',
        title: 'Confirmation « Dépôt bien reçu ! »',
        description:
          'Accusé de réception confirmant l’enregistrement du dossier et les notifications à chaque étape.',
        mediaType: 'image',
        src: '/assets/mairie-connect/11-confirmation.png',
      },
      {
        id: 'mc-12',
        step: '12 · Suivi',
        title: 'Tableau de bord DSM Connect',
        description:
          'Vue citoyenne (« Bonjour, Moussa ») affichant les compteurs de demandes (En attente, Validé, Refusé), l’historique et le bouton Nouvelle demande.',
        mediaType: 'image',
        src: '/assets/mairie-connect/12-dashboard.png',
      },
      {
        id: 'mc-13',
        step: '13 · Support',
        title: 'Nous contacter',
        description:
          'Formulaire de prise de contact avec les services municipaux et coordonnées directes de la mairie de Diamaguène Sicap Mbao.',
        mediaType: 'image',
        src: '/assets/mairie-connect/13-contact.png',
      },
    ],
  },
  {
    id: 'karaange-kids',
    title: 'PEL Challenge — Karaange Kids',
    subtitle: 'Application mobile ludique de protection des enfants de 7 à 12 ans en ligne',
    nature: 'Projet collaboratif PEL Challenge · UX Research & UI',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    role: 'UX Researcher · Groupe 3 (Car Rapide UX)',
    summary:
      'Conception d’une application mobile éducative aidant les enfants de 7 à 12 ans à reconnaître les risques numériques, adopter les bons réflexes et oser demander de l’aide à un adulte de confiance.',
    context:
      'Les enfants de 7 à 12 ans utilisent Internet au quotidien mais ne savent pas toujours identifier une situation à risque ni à qui s’adresser. De leur côté, parents et enseignants manquent souvent de temps et de repères pratiques pour les accompagner.',
    userNeed:
      'Proposer des mises en situation courtes (5 à 10 minutes), visuelles, accessibles en audio et en plusieurs langues, avec un bouton clair « J’en parle » pour faciliter le dialogue avec un parent ou un enseignant.',
    approach: [
      'Recherche : analyse des besoins et usages des enfants de 7 à 12 ans ainsi que des attentes des parents et enseignants.',
      'Conception : création de parcours ludiques autour des mots de passe, des données personnelles, des inconnus en ligne et des contenus choquants.',
      'Prototypage & Test : réalisation d’un prototype interactif sur Figma et tests utilisateurs pour valider la compréhension des consignes et le repérage du bouton « J’en parle ».',
      'Amélioration : ajustement du prototype vers des contenus courts, visuels, accompagnés d’audio et adaptés aux connexions limitées.',
    ],
    personas: [
      {
        name: 'El Hadj, 10 ans',
        role: 'Élève de CE2 qui hésite à demander de l’aide',
        need: 'Reconnaître une situation risquée, choisir une réaction adaptée et trouver les mots pour en parler.',
        frustration: 'Ne sait pas à qui s’adresser ni comment aborder le sujet lorsqu’il se sent inquiet en ligne.',
      },
      {
        name: 'Madame Ndao',
        role: 'Enseignante (classe de +70 élèves) et mère d’élève',
        need: 'Proposer une activité courte de 5 à 10 minutes avec contenus audio et savoir comment accueillir les questions des enfants.',
        frustration: 'Manque de temps, de matériel et de visibilité sur les usages numériques à la maison.',
      },
      {
        name: 'Mariama',
        role: 'Mère très occupée',
        need: 'Trouver des conseils simples et concrets pour ouvrir la discussion avec son enfant sans surveillance intrusive.',
        frustration: 'Ne sait pas toujours comment formuler les repères de sécurité numérique sans inquiéter.',
      },
    ],
    userFlow: [
      'Écran de bienvenue et sélection du profil (Enfant, Parent ou Enseignant)',
      'Personnalisation de l’avatar animal et connexion simplifiée par code à 4 chiffres',
      'Tableau de bord enfant (« Séance du soir ») et carte de progression « Les 7 aventures »',
      'Défis interactifs (Le coffre secret, Mon jardin privé, Messages suspects) et quiz guidés',
      'Bouton d’aide « J’en parle » et récompense par badge (« Super Détective »)',
    ],
    deliverables: [
      'Étude de la problématique & Personas (Enfant, Enseignant, Parent)',
      'Parcours utilisateur & Architecture des 7 aventures',
      'Maquettes mobiles haute fidélité & Prototype interactif Figma (P1 à P13)',
      'Dossier de présentation complet du projet (18 diapositives)',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Canva'],
    visualTheme: 'karaange',
    presentationPdfUrl:
      '/assets/aistudio/Pr_sentation_Projet_Application_Mobile_Moderne_Noir_Rouge_7b143c7f.pdf',
    prototypeScreens: [
      {
        id: 'kk-p1',
        step: 'P1',
        title: 'Écran d’accueil animé',
        description:
          'Introduction visuelle avec le logo Karaange Kids et le slogan « Les contes du baobab pour surfer en confiance ».',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_23_P1_6b81cd24.mp4',
      },
      {
        id: 'kk-p2',
        step: 'P2',
        title: 'Sélection du profil',
        description:
          'Orientation immédiate selon l’utilisateur (Enfant, Parent ou Enseignant) avec mentions Protection de l’enfance, Langues nationales et conformité RGPD / CDP Sénégal.',
        mediaType: 'image',
        src: '/assets/aistudio/Page_d_accueil_P2_85865425.png',
      },
      {
        id: 'kk-p3',
        step: 'P3',
        title: 'Galerie de choix d’avatar',
        description:
          'Grille d’avatars animaux rassurants permettant à l’enfant de s’identifier sans saisir de données personnelles sensibles.',
        mediaType: 'image',
        src: '/assets/aistudio/Avatar__P3_40483fc1.png',
      },
      {
        id: 'kk-p3b',
        step: 'P3 · Animé',
        title: 'Aperçu animé de la grille avatar',
        description:
          'Animation d’apparition des options d’avatars et bouton audio d’accessibilité pour les plus jeunes lecteurs.',
        mediaType: 'video',
        src: '/assets/aistudio/Avatar_c6998e5e.mp4',
      },
      {
        id: 'kk-p4',
        step: 'P4',
        title: 'Validation de l’avatar choisi',
        description:
          'Sélection interactive de l’avatar lion et confirmation avant la création du code personnel.',
        mediaType: 'video',
        src: '/assets/aistudio/Choix_Avatar_P4_fb28e611.mp4',
      },
      {
        id: 'kk-p5',
        step: 'P5',
        title: 'Code d’accès simplifié',
        description:
          'Connexion ludique par code à 4 chiffres sur clavier numérique large adapté aux enfants de 7 à 12 ans.',
        mediaType: 'video',
        src: '/assets/aistudio/Code_phone_P5_3d399d72.mp4',
      },
      {
        id: 'kk-p6',
        step: 'P6',
        title: 'Accueil enfant & Séance du soir',
        description:
          'Tableau de bord personnalisé (« Salut, Soleil ! ») proposant une séance guidée de 8 minutes (Chansons, Épreuves, Quiz) et 4 univers dont « Oser parler ».',
        mediaType: 'image',
        src: '/assets/aistudio/07___Accueil_enfant_P6_5b376b53.png',
      },
      {
        id: 'kk-p7',
        step: 'P7',
        title: 'Carte des 7 aventures',
        description:
          'Parcours progressif couvrant les mots de passe, la vie privée, les inconnus en ligne, les messages suspects et les contenus choquants.',
        mediaType: 'image',
        src: '/assets/aistudio/08___Les_7_aventures_P7_ee841d08.png',
      },
      {
        id: 'kk-p8',
        step: 'P8',
        title: 'Aventure 1 : Le coffre secret',
        description:
          'Écran d’ouverture de la première aventure dédiée à la protection du mot de passe (« Un secret bien gardé ! »).',
        mediaType: 'image',
        src: '/assets/aistudio/09___Le_mot_de_passe_secret_P8_15fbe764.png',
      },
      {
        id: 'kk-p9',
        step: 'P9',
        title: 'Épreuve « Le coffre secret »',
        description:
          'Mise en situation audio et choix binaire clair (« Je partage » / « Je garde ») pour ancrer le bon réflexe.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_16_P9_a1662e73.mp4',
      },
      {
        id: 'kk-p10',
        step: 'P10',
        title: 'Interaction & validation de l’épreuve',
        description:
          'Enchaînement interactif des choix et passage à l’épreuve suivante avec repères visuels et sonores.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_P10_315b9c5c.mp4',
      },
      {
        id: 'kk-p11',
        step: 'P11',
        title: 'Feedback d’erreur animé',
        description:
          'Animation de la carte « Oups, pas tout à fait ! » accompagnant l’enfant avec bienveillance vers une nouvelle tentative.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_P11_56c7f02c.mp4',
      },
      {
        id: 'kk-oups',
        step: 'Feedback',
        title: 'Carte d’encouragement « Oups »',
        description:
          'Composant visuel conçu pour dédramatiser l’erreur et expliquer pourquoi une information peut ou non être partagée.',
        mediaType: 'image',
        src: '/assets/aistudio/Carte-oups_2a85bd99.png',
      },
      {
        id: 'kk-p12',
        step: 'P12',
        title: 'Aventure 2 : Mon jardin privé',
        description:
          'Apprentissage du tri entre informations publiques (animal préféré) et données privées à garder derrière la barrière.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_14_P12_e15fa9cb.mp4',
      },
      {
        id: 'kk-p13',
        step: 'P13',
        title: 'Feedback de réussite « Bravo ! »',
        description:
          'Validation positive immédiate confirmant à l’enfant le bon comportement numérique.',
        mediaType: 'video',
        src: '/assets/aistudio/avanture_P13_aa19fc56.mp4',
      },
      {
        id: 'kk-transition',
        step: 'Transition',
        title: 'Animation de suivi d’aventure',
        description:
          'Séquence animée de progression entre les défis et mises en situation.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_18_62655270.mp4',
      },
      {
        id: 'kk-adv4',
        step: 'Aventure 4',
        title: 'Le drôle de message & « J’en parle »',
        description:
          'Présentation du mini-jeu « Détective des messages » avec accès direct au bouton d’alerte bienveillant « J’en parle ».',
        mediaType: 'image',
        src: '/assets/aistudio/39___Aventure___Messages_suspects_018e6b37.png',
      },
      {
        id: 'kk-quiz',
        step: 'Quiz',
        title: 'Mise en situation : demande d’adresse',
        description:
          'Question 3/5 face à un inconnu en ligne : choix simples illustrés et bouton « Indice » pour guider l’enfant.',
        mediaType: 'image',
        src: '/assets/aistudio/Frame_22_e85d7ef6.png',
      },
      {
        id: 'kk-badge',
        step: 'Final',
        title: 'Récompense « Super Détective »',
        description:
          'Écran final de célébration récompensant la réussite du quiz sur les dangers en ligne par un badge.',
        mediaType: 'video',
        src: '/assets/aistudio/Frame_48fec244.mp4',
      },
    ],
  },
  {
    id: 'sangalkam-mobilite',
    title: 'Mon quartier : un problème, une solution',
    subtitle: 'Sangal Go — Application de transport de proximité à Sangalkam',
    nature: 'Projet pratique · UX/UI Design',
    category: 'UX/UI Design',
    year: '2025 – 2026',
    featured: false,
    summary:
      'Étude des difficultés de déplacement à Sangalkam et conception de Sangal Go : une application mobile simple, lisible en plein soleil et utilisable à une main pour réserver sa navette de proximité et suivre son trajet.',
    context:
      'Les trajets quotidiens entre Sangalkam et Dakar Plateau, Rufisque ou Keur Massar manquent de visibilité sur les horaires de passage, les places disponibles et les points d’attente, avec des connexions mobiles parfois instables.',
    userNeed:
      'Permettre aux habitants de choisir un point de regroupement proche (Carrefour Mosquée, Arrêt du marché), réserver une place avant le départ avec paiement à bord ou par mobile money (Wave, Orange Money) et conserver les informations de trajet même en réseau faible.',
    approach: [
      'Définition de la direction artistique « Sangal Go » : lisible en plein soleil, utilisable à une main (boutons 54 px, texte 15 px minimum, pictogrammes accompagnés de mots).',
      'Structuration de l’accueil usager autour des trajets fréquents (Travail, École, Marché) et de la prochaine navette disponible.',
      'Conception du tunnel de réservation en 2 étapes : point de départ proche, destination, horaire, nombre de places et mode de paiement.',
      'Prise en compte du mode réseau faible sur l’écran de suivi de trajet avec conservation des informations et appel direct au conducteur.',
    ],
    personas: [
      {
        name: 'Awa Ndiaye',
        role: 'Habitante effectuant des trajets quotidiens Sangalkam → Dakar Plateau',
        need: 'Réserver rapidement une place au départ de Carrefour Mosquée, connaître le tarif (500 F) et suivre son arrivée en temps réel.',
        frustration: 'Temps d’attente imprévisibles, manque de visibilité sur les places restantes et coupures réseau pendant le trajet.',
      },
      {
        name: 'Moussa Diop',
        role: 'Conducteur de minibus de proximité',
        need: 'Regrouper les passagers réservés à un point précis (attente maximale de 3 minutes) pour fluidifier les départs.',
        frustration: 'Arrêts dispersés et appels répétitifs pour localiser les passagers avant le départ.',
      },
    ],
    userFlow: [
      'Écran de bienvenue et connexion par numéro de téléphone (+221) avec code SMS',
      'Accueil personnalisé (« Bonjour, Awa ») et sélection d’un point de regroupement proche (Étape 1/2)',
      'Choix de la destination (Étape 2/2 : Dakar Plateau, Rufisque, Keur Massar, UCAD) et de la navette',
      'Réservation, sélection du nombre de places et du paiement (à bord, Wave, Orange Money) avec code SG-4821',
      'Suivi du trajet en cours (mode réseau faible), évaluation à l’arrivée, historique et profil',
    ],
    deliverables: [
      'Direction artistique & Design System (Plus Jakarta Sans, Vert Sangal #0F7B4F, Ambre #F2B134)',
      '3 parcours complets : Accueil/départ, Recherche/réservation, Trajet/historique/profil',
      '15 écrans mobiles haute fidélité',
    ],
    tools: ['Figma', 'Google Workspace'],
    visualTheme: 'sangalkam',
    prototypeHtmlBundleUrl:
      '/assets/aistudio/Sangal_Go___Maquettes_haute_fid_lit__4846208a.html',
    prototypeScreens: [
      {
        id: 'sg-da',
        step: 'DA · Système',
        title: 'Direction artistique & Design System',
        description:
          'Charte visuelle de Sangal Go : palette Vert Sangal (#0F7B4F), Menthe (#E6F4EC) et Ambre (#F2B134), typographie Plus Jakarta Sans et règles d’ergonomie terrain (boutons 54 px, lisible en plein soleil).',
        mediaType: 'html',
        boardFormat: 'landscape',
        src: '/assets/sangal-go/direction-artistique.html',
      },
      {
        id: 'sg-01',
        step: '01 · Parcours 1',
        title: 'Écran d’accueil (Splash)',
        description:
          'Écran de lancement affirmant l’identité Sangal Go et la promesse « Votre navette, près de chez vous ».',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-01.html',
      },
      {
        id: 'sg-02',
        step: '02 · Parcours 1',
        title: 'Présentation du service',
        description:
          'Présentation en trois repères clairs : point proche de la maison, réservation avant départ et paiement à bord ou par mobile money.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-02.html',
      },
      {
        id: 'sg-03',
        step: '03 · Parcours 1',
        title: 'Inscription & Connexion SMS',
        description:
          'Authentification simplifiée par numéro de téléphone (+221) avec validation claire et envoi de code par SMS.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-03.html',
      },
      {
        id: 'sg-04',
        step: '04 · Parcours 1',
        title: 'Accueil usager (« Bonjour, Awa »)',
        description:
          'Tableau de bord avec recherche de destination, raccourcis rapides (Travail, École, Marché), prochaine navette (06:15) et trajets fréquents.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-04.html',
      },
      {
        id: 'sg-05',
        step: '05 · Parcours 1',
        title: 'Point de départ (Étape 1 sur 2)',
        description:
          'Carte locale repérant les points de regroupement proches (Carrefour Mosquée à 2 min à pied, Arrêt du marché à 6 min) pour confirmer le départ.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-05.html',
      },
      {
        id: 'sg-06',
        step: '06 · Parcours 2',
        title: 'Destination (Étape 2 sur 2)',
        description:
          'Recherche de destination avec suggestions fréquentes (Dakar Plateau, Rufisque, Keur Massar, UCAD) et destinations récentes.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-06.html',
      },
      {
        id: 'sg-07',
        step: '07 · Parcours 2',
        title: 'Navettes disponibles',
        description:
          'Liste filtrable par créneau (Matin, Midi, Soir) affichant tarif, véhicule, point de départ et places restantes en un coup d’œil.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-07.html',
      },
      {
        id: 'sg-08',
        step: '08 · Parcours 2',
        title: 'Détails du trajet & places',
        description:
          'Récapitulatif départ/arrivée, durée estimée (55 min), choix de l’horaire et sélecteur du nombre de places.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-08.html',
      },
      {
        id: 'sg-09',
        step: '09 · Parcours 2',
        title: 'Réservation & moyen de paiement',
        description:
          'Choix entre paiement à bord, Wave ou Orange Money avec affichage transparent du montant total (500 F).',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-09.html',
      },
      {
        id: 'sg-10',
        step: '10 · Parcours 2',
        title: 'Place réservée (Code SG-4821)',
        description:
          'Confirmation immédiate avec code de réservation SG-4821 envoyé par SMS et accès direct au point de départ.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-10.html',
      },
      {
        id: 'sg-11',
        step: '11 · Parcours 3',
        title: 'Votre départ & conducteur',
        description:
          'Rappel de l’heure d’arrivée au point de regroupement (06:10), fiche du conducteur (Moussa Diop) et bouton de suivi.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-11.html',
      },
      {
        id: 'sg-12',
        step: '12 · Parcours 3',
        title: 'Suivi du trajet & mode réseau faible',
        description:
          'Suivi de l’itinéraire vers Dakar Plateau (arrivée dans 32 min), bandeau d’alerte « Réseau faible : infos enregistrées » et appel conducteur.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-12.html',
      },
      {
        id: 'sg-13',
        step: '13 · Parcours 3',
        title: 'Arrivée & évaluation du trajet',
        description:
          'Confirmation d’arrivée à Dakar Plateau, notation rapide par étoiles, rappel du règlement à bord et option de réserver le retour.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-13.html',
      },
      {
        id: 'sg-14',
        step: '14 · Parcours 3',
        title: 'Mes réservations (À venir / Passées)',
        description:
          'Historique et trajets confirmés, terminés ou annulés avec dates, codes et montants.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-14.html',
      },
      {
        id: 'sg-15',
        step: '15 · Parcours 3',
        title: 'Profil usager (Awa Ndiaye)',
        description:
          'Gestion du compte, points favoris, langue, moyens de paiement enregistrés (Wave) et aide.',
        mediaType: 'html',
        boardFormat: 'mobile',
        src: '/assets/sangal-go/screen-15.html',
      },
    ],
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
      'Certification Google UX Design suivie sur Coursera. Consultez l’aperçu du certificat ci-dessus ou accédez à la page officielle du programme sur Coursera.',
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
      'Certification attestant de la maîtrise des stratégies digitales, du marketing de contenu, des réseaux sociaux, de l’email marketing et du SEO.',
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
