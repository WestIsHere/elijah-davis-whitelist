/**
 * Point d'entrée : assemble les composants à partir des données du personnage,
 * puis branche les comportements (couverture, navigation, animations, chronologie).
 */
import { character } from "./data/elijah.js";
import { mount } from "./lib/dom.js";
import { initReveal } from "./lib/reveal.js";
import { initScrollspy } from "./lib/scrollspy.js";

import { renderCover, initCover } from "./components/cover.js";
import { renderNav, initNav } from "./components/nav.js";
import { renderHero } from "./components/hero.js";
import { renderIdentity } from "./components/identity.js";
import { renderStory } from "./components/story.js";
import { renderFamily } from "./components/family.js";
import { renderPersonality } from "./components/personality.js";
import { renderAmbitions } from "./components/ambitions.js";
import { renderDilemma } from "./components/dilemma.js";
import { renderObjectives } from "./components/objectives.js";
import { renderTimeline, initTimeline } from "./components/timeline.js";
import { renderProject } from "./components/project.js";
import { renderFooter } from "./components/footer.js";

const coverRoot = document.getElementById("cover-root");
const navRoot = document.getElementById("nav-root");
const app = document.getElementById("app");
const footerRoot = document.getElementById("footer-root");

/* ---- Rendu ---------------------------------------------------------- */
mount(navRoot, renderNav(character));
mount(
  app,
  [
    renderHero(character),
    renderIdentity(character),
    renderStory(character),
    renderFamily(character),
    renderPersonality(character),
    renderAmbitions(character),
    renderDilemma(character),
    renderObjectives(character),
    renderTimeline(character),
    renderProject(character),
  ].join("")
);
mount(footerRoot, renderFooter(character));

/* ---- Comportements -------------------------------------------------- */
initNav(navRoot);
initTimeline(app);

const sections = character.nav
  .map((item) => document.getElementById(item.id))
  .filter(Boolean);

const spy = initScrollspy({
  sections,
  links: Array.from(document.querySelectorAll("[data-nav]")),
  counter: document.getElementById("nav-counter"),
  progressBar: document.getElementById("nav-progress-bar"),
  nav: document.getElementById("nav"),
});

/**
 * Ouverture du dossier : déverrouille le scroll, affiche la navbar,
 * puis lance les animations d'apparition (elles ne doivent pas jouer
 * derrière la couverture, sinon on ne les verrait jamais).
 */
const openFile = () => {
  document.body.classList.remove("is-locked");
  document.body.classList.add("file-open");
  initReveal(document);
  spy.update();
};

/* Lien profond (#famille…) : on saute la couverture pour arriver directement à la section. */
const hashTarget = location.hash && document.getElementById(location.hash.slice(1));
if (hashTarget) {
  openFile();
  requestAnimationFrame(() => hashTarget.scrollIntoView({ block: "start" }));
} else {
  mount(coverRoot, renderCover(character));
  initCover(coverRoot, openFile);
}
