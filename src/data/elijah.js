/**
 * DONNÉES DU PERSONNAGE — ELIJAH DAVIS
 * ------------------------------------------------------------
 * Ce fichier est la seule source de vérité du site.
 * Chaque section de la page lit ses informations ici :
 * modifier un texte, une liste ou un titre se fait uniquement
 * dans ce fichier, jamais dans les composants.
 */

export const character = {
  /* Métadonnées affichées sur la couverture, la navbar et le pied de page */
  meta: {
    fileNumber: "WL-DAVIS-0001",
    fileType: "Character file — Whitelist application",
    classification: "Confidentiel",
    status: "En attente d'examen",
    server: "FiveM Serious RP",
    coverStamp: "Confidential",
    openButton: "Ouvrir le dossier",
  },

  /* Sections accessibles depuis la navigation (dans l'ordre d'affichage) */
  nav: [
    { id: "identite", label: "Identité" },
    { id: "histoire", label: "Histoire" },
    { id: "famille", label: "Famille" },
    { id: "personnalite", label: "Personnalité" },
    { id: "ambitions", label: "Ambitions" },
    { id: "objectifs", label: "Objectifs RP" },
    { id: "chronologie", label: "Chronologie" },
    { id: "projet", label: "Projet RP" },
  ],

  /* ---------------------------------------------------------- */
  identity: {
    firstName: "Elijah",
    lastName: "Davis",
    role: "Aspirant avocat",
    tagline: "Aspirant avocat — En quête de justice, d'indépendance et de vérité.",
    lead:
      "Fiche d'identification établie au moment de l'arrivée en ville. Certaines informations sont volontairement inconnues du personnage lui-même.",
    fields: [
      { label: "Nom actuel", value: "Elijah Davis" },
      { label: "Nom biologique", value: "Inconnu", redacted: true },
      { label: "Sexe", value: "Homme" },
      { label: "Origine", value: "Américaine" },
      { label: "Apparence", value: "Homme blanc" },
      { label: "Situation financière", value: "Modeste (début du RP)" },
      { label: "Milieu familial adoptif", value: "Famille pauvre / modeste" },
      { label: "Famille biologique", value: "Identité non établie", redacted: true },
      { label: "Ambition professionnelle", value: "Devenir avocat" },
    ],
    note: {
      title: "Note liminaire",
      text:
        "Le nom Davis n'est pas son nom biologique. Elijah le porte parce qu'il a été adopté très jeune par la famille Davis. Son nom de naissance et l'identité exacte de sa famille biologique restent inconnus au début de son histoire.",
    },
    summary: [
      { label: "Statut", value: "Candidature en cours d'examen" },
      { label: "Classification", value: "Confidentiel" },
      { label: "Ambition", value: "Avocat" },
      { label: "Point de départ", value: "Arrivée en ville — départ de zéro" },
    ],
  },

  /* ---------------------------------------------------------- */
  story: {
    lead:
      "Ce qu'Elijah ignore encore : l'histoire de sa naissance n'a rien à voir avec celle de la famille qui l'a élevé.",
    paragraphs: [
      "Elijah n'est pas né dans la famille Davis. Biologiquement, il est issu d'une famille américaine particulièrement riche et aisée. Cette famille possède un patrimoine important et évolue dans un environnement complètement différent de celui dans lequel Elijah grandira plus tard.",
      "Lors de sa grossesse, sa mère biologique apprend qu'elle attend des jumeaux. Elijah possède donc un frère jumeau biologique.",
      "Cependant, la grossesse puis la naissance sont accompagnées de complications. Elijah nécessite notamment une surveillance médicale importante après sa naissance.",
      "La situation provoque une crise importante au sein de sa famille biologique. Pour différentes raisons — familiales, financières, sociales et personnelles — ses parents prennent finalement une décision extrêmement difficile et moralement discutable.",
    ],
    decision: {
      kicker: "Extrait — décision familiale",
      text: "Ils ne garderont qu'un seul des deux enfants.",
      outcomes: [
        { who: "Le frère jumeau", result: "Reste avec la famille biologique." },
        { who: "Elijah", result: "Est confié à l'adoption." },
      ],
    },
    aftermath: [
      "Sa famille biologique tente ensuite progressivement d'effacer cet épisode de son histoire. Elijah grandira donc sans connaître l'existence de son frère jumeau.",
      "Pendant ce temps, son frère biologique connaîtra une enfance totalement différente : argent, confort, bonnes écoles, relations et opportunités.",
    ],
    contrast: {
      kicker: "Pièce comparative",
      title: "Deux vies pour un même sang",
      intro:
        "Ils possèdent les mêmes parents biologiques. Pourtant, ils auront connu deux vies complètement différentes.",
      brother: {
        label: "Son frère jumeau",
        items: [
          "Famille biologique riche",
          "Confort financier",
          "Bonnes écoles",
          "Réseau familial",
          "Nombreuses opportunités",
        ],
      },
      elijah: {
        label: "Elijah",
        items: [
          "Famille adoptive pauvre",
          "Difficultés financières",
          "Frères impliqués dans des activités douteuses",
          "Nécessité de construire lui-même son avenir",
        ],
      },
      divider: "Même sang",
    },
    knowledge: {
      title: "Information non connue du personnage",
      text:
        "Elijah ne connaît pas nécessairement cette vérité au début du RP. L'existence de son jumeau doit rester une intrigue exploitable beaucoup plus tard.",
    },
  },

  /* ---------------------------------------------------------- */
  family: {
    lead:
      "Ceux qui l'ont accueilli, élevé et nommé. Une famille modeste, cinq enfants, et des chemins qui finissent par se séparer.",
    adoption:
      "Elijah est adopté très jeune par la famille Davis. C'est à ce moment qu'il reçoit le nom d'Elijah Davis.",
    davis: [
      "Les Davis sont complètement différents de sa famille biologique. Ils ne sont pas bourgeois. Ils ne sont pas riches.",
      "La famille vit avec relativement peu de moyens. Les dépenses doivent régulièrement être calculées, et les enfants apprennent très tôt qu'ils ne peuvent pas obtenir tout ce qu'ils souhaitent.",
    ],
    facts: [
      { label: "Fratrie", value: "5 enfants" },
      { label: "Lien biologique", value: "Aucun" },
      { label: "Moyens", value: "Modestes" },
      { label: "Nom reçu", value: "Davis" },
    ],
    siblings: {
      title: "Une fratrie de cinq",
      text: [
        "Elijah grandit dans une fratrie adoptive composée de cinq enfants au total. Elijah est un homme blanc tandis que ses frères adoptifs sont des hommes noirs. Il n'existe évidemment aucun lien biologique entre eux. Ils ont cependant grandi ensemble, et Elijah les considère comme ses frères.",
        "Leur différence physique peut parfois faire comprendre rapidement aux personnes extérieures qu'Elijah a probablement été adopté. Cette différence n'est pas le centre de l'histoire : le cœur de leur relation repose sur leurs personnalités et surtout sur les chemins totalement différents qu'ils vont emprunter.",
      ],
    },
    brothers: {
      kicker: "Rapport — trajectoire des frères Davis",
      title: "Ses frères",
      intro:
        "En grandissant, plusieurs des frères Davis commencent à prendre un mauvais chemin. Ils fréquentent progressivement des personnes impliquées dans différentes activités illégales. Cela commence par de petites combines.",
      escalation: [
        "Petites combines",
        "Petits vols",
        "Argent douteux",
        "Fréquentations criminelles",
        "Trafics",
        "Problèmes avec les forces de l'ordre",
        "Activités de rue",
      ],
      positions: [
        {
          who: "La position de ses frères",
          text:
            "Ils justifient parfois leurs actes par leur situation financière. Pour eux, lorsque les opportunités légales ne permettent pas de gagner suffisamment, il faut trouver d'autres solutions.",
        },
        {
          who: "La position d'Elijah",
          text:
            "Il refuse complètement cette philosophie. Il a grandi dans exactement la même pauvreté qu'eux, mais considère que cela ne justifie pas de devenir criminel.",
        },
      ],
    },
    fracture: {
      title: "La fracture",
      intro: "Cette différence provoque progressivement une fracture entre Elijah et ses frères.",
      views: [
        { who: "Ses frères, à propos d'Elijah", quote: "Il se croit meilleur que les autres." },
        { who: "Elijah, à propos de ses frères", quote: "Ils gâchent volontairement leur avenir." },
      ],
      outro:
        "Malgré cela, il reste attaché à eux. Ils restent ses frères. C'est précisément cette contradiction qui compte dans le personnage.",
    },
    bond: {
      kicker: "Rapport à la famille Davis",
      title: "Davis, un nom choisi",
      text: [
        "Même si Elijah est souvent en conflit avec ses frères, il reste profondément attaché à la famille Davis. Pour lui, Davis est son véritable nom. Pas biologiquement — sentimentalement.",
        "Les Davis sont ceux qui l'ont accueilli et élevé lorsque sa famille biologique a décidé de l'abandonner. La découverte éventuelle de ses véritables origines ne lui donnera pas automatiquement envie d'abandonner ce nom.",
      ],
      highlight: "Au contraire : Elijah pourrait volontairement décider de rester Elijah Davis.",
    },
  },

  /* ---------------------------------------------------------- */
  personality: {
    lead:
      "Un personnage nuancé. Ni héros, ni modèle : des forces réelles, des failles réelles, et une image qu'il contrôle en permanence.",
    qualities: {
      title: "Qualités",
      kicker: "Forces observées",
      items: [
        "Calme",
        "Observateur",
        "Réfléchi",
        "Ambitieux",
        "Persévérant",
        "Sérieux",
        "Plutôt éloquent",
        "Curieux",
        "Capable de défendre ses idées",
      ],
    },
    flaws: {
      title: "Défauts",
      kicker: "Failles observées",
      items: [
        "Orgueilleux",
        "Rancunier",
        "Froid lorsqu'il est contrarié",
        "Parfois trop sûr de lui",
        "Obstiné",
        "Parfois condescendant sans s'en rendre compte",
        "Particulièrement mauvais pour reconnaître qu'il a tort",
      ],
    },
    image: {
      title: "Le contrôle de l'image",
      text:
        "Il cherche énormément à contrôler l'image qu'il renvoie. Cette attitude vient notamment de sa volonté de ne jamais ressembler à ses frères lorsqu'ils tombent dans la criminalité.",
    },
    verdict: "Personnage non parfait",
  },

  /* ---------------------------------------------------------- */
  ambitions: {
    lead: "Pourquoi Elijah veut devenir avocat — et ce que cette vocation doit à ses frères.",
    intro:
      "Paradoxalement, les problèmes de ses frères participent énormément à la naissance de sa vocation. En voyant certains d'entre eux confrontés à la police et au système judiciaire, Elijah commence à essayer de comprendre comment fonctionne réellement la justice.",
    questions: {
      kicker: "Les premières questions",
      items: [
        "Pourquoi une personne peut-elle être arrêtée ?",
        "Quels sont ses droits ?",
        "Comment fonctionne une procédure ?",
        "Que peut faire un avocat ?",
        "Que se passe-t-il lorsqu'une personne est accusée ?",
      ],
    },
    growth:
      "Au départ, il cherche simplement à comprendre. Petit à petit, Elijah commence à lire et à se renseigner. La curiosité devient une véritable passion.",
    realization: {
      kicker: "Ce qu'il finit par comprendre",
      quote: "Défendre quelqu'un ne signifie pas approuver ses actes.",
      text: "Même une personne accusée ou coupable possède des droits.",
    },
    conclusion:
      "Elijah souhaite donc devenir avocat afin de participer à ce système et de construire sa propre carrière.",
  },

  /* ---------------------------------------------------------- */
  dilemma: {
    kicker: "Dilemme central",
    quote: "Je peux condamner leurs choix sans oublier qu'ils restent mes frères.",
    text:
      "Elijah veut consacrer sa vie à la justice. Ses frères vivent progressivement en marge de cette même justice. Un jour, Elijah pourrait donc devoir choisir entre :",
    poles: ["Sa famille", "Sa carrière", "Ses principes"],
    outro: "Cette contradiction est au cœur du personnage.",
  },

  /* ---------------------------------------------------------- */
  objectives: {
    lead:
      "Une feuille de route, pas un scénario. Chaque étape doit être méritée en jeu et peut échouer.",
    phases: [
      {
        phase: "Phase I",
        title: "Court terme",
        subtitle: "Partir de zéro",
        intro: "À son arrivée en ville, Elijah part pratiquement de zéro.",
        items: [
          "Trouver un logement",
          "Trouver un travail légal",
          "Obtenir une situation financière stable",
          "Découvrir la ville",
          "Comprendre le fonctionnement de la justice locale",
          "Rencontrer des personnes travaillant dans le domaine juridique",
          "Créer ses premiers contacts",
          "Commencer à se rapprocher du métier d'avocat",
        ],
        note:
          "Il souhaite rester éloigné des activités illégales de ses frères. Leurs problèmes pourraient cependant progressivement venir jusqu'à lui.",
      },
      {
        phase: "Phase II",
        title: "Moyen terme",
        subtitle: "Entrer dans le milieu juridique",
        intro:
          "Une fois correctement installé, Elijah souhaite réellement entrer dans le milieu juridique et apprendre le métier progressivement.",
        items: [
          "Trouver une opportunité auprès d'un avocat, d'un cabinet ou d'une institution liée à la justice",
          "Apprendre le métier et participer à ses premières affaires",
          "Développer son réseau : citoyens, avocats, forces de l'ordre, procureurs, institutions judiciaires",
          "Affronter des situations qui mettent ses convictions à l'épreuve",
          "Défendre, éventuellement, des personnes dont il désapprouve les actes",
          "Commencer à chercher des informations sur son adoption et ses origines",
        ],
        note:
          "C'est à cette période que ses principes commencent réellement à être testés.",
      },
      {
        phase: "Phase III",
        title: "Long terme",
        subtitle: "Un nom dans le milieu",
        intro:
          "À long terme, Elijah souhaite devenir un avocat reconnu et construire une réputation grâce aux affaires qu'il défendra et aux relations qu'il développera.",
        items: [
          "Devenir un avocat reconnu",
          "Ouvrir son propre cabinet d'avocat",
          "Construire une réputation importante dans le milieu judiciaire",
        ],
        note:
          "Rien de tout cela n'est garanti. Sa réussite dépendra uniquement de ce qu'il accomplira en jeu.",
      },
    ],
    conflicts: {
      kicker: "Zones de friction prévisibles",
      title: "Quand la carrière rattrape la vie personnelle",
      intro:
        "Sa carrière professionnelle devra progressivement entrer en conflit avec sa vie personnelle. Il pourrait notamment :",
      items: [
        "Devoir défendre l'un de ses frères Davis",
        "Être impliqué indirectement dans leurs problèmes",
        "Devoir défendre un criminel qu'il connaît personnellement",
        "Découvrir des informations compromettantes",
        "Être confronté au secret professionnel",
        "Découvrir l'identité de sa famille biologique",
        "Découvrir pourquoi il a réellement été abandonné",
        "Apprendre qu'il possède un frère jumeau",
        "Rencontrer son jumeau sans immédiatement connaître son identité",
      ],
      note:
        "L'objectif n'est pas de prévoir exactement comment l'histoire se terminera. Ces éléments doivent simplement créer des opportunités RP.",
    },
  },

  /* ---------------------------------------------------------- */
  timeline: {
    lead: "Les faits établis, dans l'ordre. Le dernier chapitre n'a pas encore été écrit.",
    events: [
      {
        index: "01",
        title: "Naissance",
        text: "Naissance d'Elijah et de son frère jumeau.",
        phase: "Origines",
        secret: "Le personnage ignore l'existence de son jumeau.",
      },
      {
        index: "02",
        title: "Abandon",
        text: "Elijah est confié à l'adoption tandis que son frère reste auprès de la famille biologique.",
        phase: "Origines",
        secret: "Les raisons exactes de l'abandon lui sont inconnues.",
      },
      {
        index: "03",
        title: "Adoption",
        text: "Elijah rejoint la famille Davis et prend leur nom.",
        phase: "Famille Davis",
      },
      {
        index: "04",
        title: "Enfance",
        text: "Il grandit dans une famille modeste avec ses frères adoptifs.",
        phase: "Famille Davis",
      },
      {
        index: "05",
        title: "Adolescence",
        text: "Ses frères commencent progressivement à fréquenter le milieu criminel.",
        phase: "Fracture",
      },
      {
        index: "06",
        title: "Découverte du droit",
        text: "Les problèmes judiciaires de ses frères poussent Elijah à s'intéresser à la justice.",
        phase: "Vocation",
      },
      {
        index: "07",
        title: "Naissance d'une ambition",
        text: "Elijah décide qu'il souhaite devenir avocat.",
        phase: "Vocation",
      },
      {
        index: "08",
        title: "Arrivée en ville",
        text: "Début du RP.",
        phase: "Roleplay",
        current: true,
      },
      {
        index: "??",
        title: "???",
        text: "La suite doit volontairement rester inconnue.",
        phase: "À écrire en jeu",
        unknown: true,
        detail:
          "Ce chapitre n'existe pas encore. Il sera écrit directement en RP — par les rencontres, les décisions et leurs conséquences.",
      },
    ],
  },

  /* ---------------------------------------------------------- */
  project: {
    lead: "Les intentions derrière le personnage, et ce qu'il ne doit surtout pas être.",
    intro:
      "L'objectif avec Elijah n'est pas d'avoir un personnage qui arrive déjà accompli. Son histoire doit se construire directement avec les joueurs du serveur.",
    dependsOn: {
      kicker: "Son évolution dépendra de",
      items: [
        "Ses rencontres",
        "Ses opportunités",
        "Ses réussites",
        "Ses erreurs",
        "Ses relations",
        "Des conséquences de ses décisions",
      ],
    },
    rpWith: {
      kicker: "Du RP avec toutes les catégories de joueurs",
      text:
        "Le métier d'avocat permet de créer du RP avec énormément de catégories de joueurs. Sa famille permet parallèlement de développer un RP plus personnel.",
      categories: ["Citoyens", "Policiers", "Criminels", "Avocats", "Institutions judiciaires"],
    },
    notList: {
      kicker: "Avertissement",
      title: "Ce qu'Elijah n'est pas",
      items: [
        "Un avocat déjà expérimenté",
        "Quelqu'un de riche au début du RP",
        "Quelqu'un connaissant déjà tout le monde",
        "Un personnage parfait",
        "Quelqu'un possédant toutes les compétences",
        "Quelqu'un destiné obligatoirement à réussir",
      ],
      reminder:
        "Sa famille biologique est riche. Elijah, lui, a grandi chez les Davis dans un environnement modeste.",
      conclusion: "Il doit mériter sa progression directement en RP.",
    },
  },

  footer: {
    closing: "Fin du dossier.",
    sub: "La suite s'écrit en jeu.",
    backToTop: "Retour au début du dossier",
  },
};
