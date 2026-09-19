# Elijah Davis — Character File

Site de présentation d'un personnage pour une candidature whitelist FiveM Serious RP.
Le site prend la forme d'un dossier confidentiel interactif : couverture à ouvrir,
fiche d'identification, pièces du dossier, chronologie et intentions de jeu.

**Aucune étape de build.** HTML, CSS et JavaScript natifs (modules ES) : le dépôt se
déploie tel quel sur GitHub Pages ou n'importe quel hébergeur statique.

## Lancer en local

Les modules ES doivent être servis par HTTP (un double-clic sur `index.html` ne suffit pas).
Avec Python :

```bash
python -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.

Toute autre solution fonctionne (`npx serve`, extension *Live Server* de VS Code, etc.).

## Déployer sur GitHub Pages

1. Pousser le dépôt sur GitHub.
2. *Settings → Pages → Build and deployment* : source **Deploy from a branch**,
   branche `main`, dossier `/ (root)`.
3. Le site est disponible à `https://<utilisateur>.github.io/<dépôt>/`.

Tous les chemins sont relatifs : aucun réglage de base URL n'est nécessaire.

## Modifier le contenu du personnage

**Tout le texte du site vit dans un seul fichier : [`src/data/elijah.js`](src/data/elijah.js).**

| Clé            | Contenu                                                              |
|----------------|----------------------------------------------------------------------|
| `meta`         | numéro de dossier, statut, classification, serveur, libellé du bouton |
| `nav`          | sections de la navigation (id + libellé)                              |
| `identity`     | fiche d'identification, tagline, note liminaire, résumé du hero       |
| `story`        | origines, décision familiale, contraste avec le jumeau                |
| `family`       | famille Davis, fratrie, escalade des frères, fracture, attachement    |
| `personality`  | qualités, défauts, contrôle de l'image                                |
| `ambitions`    | naissance de la vocation, questions, prise de conscience              |
| `dilemma`      | citation et pôles du dilemme central                                  |
| `objectives`   | phases court / moyen / long terme, zones de friction                  |
| `timeline`     | jalons de la chronologie (`secret`, `current`, `unknown`)             |
| `project`      | intentions RP, dépendances, avertissement « ce qu'il n'est pas »      |
| `footer`       | textes de clôture                                                     |

Les composants ne contiennent aucun texte de fond : ils lisent ces données.

## Structure

```
index.html              page unique (polices, feuilles de style, points de montage)
styles/
  tokens.css            palette, typographies, mesures (identité graphique)
  base.css              reset, fond, typographie, utilitaires
  components.css        boutons, cartes, papier d'archive, tampon, chips, listes…
  sections.css          couverture, navbar, hero, chaque pièce du dossier, responsive
  animations.css        apparitions au scroll, ouverture, reduced-motion
src/
  main.js               assemble les composants et branche les comportements
  data/elijah.js        DONNÉES DU PERSONNAGE (seule source de vérité)
  lib/
    dom.js              helpers (échappement HTML, listes, paragraphes)
    icons.js            icônes SVG inline (balance, dossier, document, marteau…)
    reveal.js           animations d'apparition (IntersectionObserver)
    scrollspy.js        lien actif, compteur « 03 / 08 », barre de progression
    motion.js           halo de pointeur, tilt de la console et statut vivant
  components/
    cover.js            couverture + animation d'ouverture
    nav.js              navbar + menu mobile
    hero.js             première page du dossier
    sectionHead.js      en-tête commun des pièces
    identity.js         01 — Identité
    story.js            02 — Histoire
    family.js           03 — Famille
    personality.js      04 — Personnalité
    ambitions.js        05 — Ambitions
    dilemma.js          bande « Dilemme central »
    objectives.js       06 — Objectifs RP
    timeline.js         07 — Chronologie interactive
    project.js          08 — Projet RP
    footer.js           clôture
```

## Ajouter une section

1. Ajouter ses données dans `src/data/elijah.js` et une entrée dans `nav`.
2. Créer `src/components/maSection.js` qui exporte `renderMaSection(character)`
   et renvoie une `<section class="section" id="…" data-section>`.
3. L'ajouter à la liste de rendu dans `src/main.js`.
4. Styler dans `styles/sections.css`.

## Accessibilité et performance

- Navigation clavier complète (couverture, menu, jalons de la chronologie).
- `prefers-reduced-motion` respecté : toutes les animations sont désactivées.
- Aucune dépendance JavaScript ; les polices sont chargées depuis Google Fonts avec
  repli sur les polices système.
- Un lien profond (`…/#famille`) ouvre directement la section demandée sans passer
  par la couverture.
