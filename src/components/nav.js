import { each, esc, pad } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Barre de navigation fixe + menu plein écran sur mobile.
 * Contient l'indicateur de progression (compteur + barre de lecture).
 */
export function renderNav({ meta, identity, nav }) {
  const links = (className) =>
    each(
      nav,
      (item, i) => `
        <a class="${className}" href="#${esc(item.id)}" data-nav="${esc(item.id)}">
          <span class="nav__num">${pad(i + 1)}</span>
          <span class="nav__label">${esc(item.label)}</span>
        </a>`
    );

  return `
    <header class="nav" id="nav">
      <div class="nav__inner container">
        <a class="nav__brand" href="#top" aria-label="Retour en haut du dossier">
          <span class="nav__brand-icon">${icons.scales}</span>
          <span class="nav__brand-text">
            <span class="nav__brand-name">${esc(identity.firstName[0])}. ${esc(identity.lastName)}</span>
            <span class="nav__brand-file">Dossier ${esc(meta.fileNumber)}</span>
          </span>
        </a>

        <nav class="nav__links" aria-label="Sections du dossier">
          ${links("nav__link")}
        </nav>

        <div class="nav__tools">
          <span class="nav__counter" aria-live="polite" aria-label="Progression dans le dossier">
            <span id="nav-counter">00</span><span class="nav__counter-sep">/</span>${pad(nav.length)}
          </span>
          <button class="nav__burger" id="nav-burger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Ouvrir le menu">
            <span class="nav__burger-open">${icons.menu}</span>
            <span class="nav__burger-close">${icons.close}</span>
          </button>
        </div>
      </div>
      <div class="nav__progress" aria-hidden="true"><span id="nav-progress-bar"></span></div>
    </header>

    <div class="menu" id="mobile-menu" hidden>
      <div class="menu__inner">
        <p class="menu__kicker mono-label">Sommaire du dossier</p>
        <nav class="menu__links" aria-label="Sections du dossier (mobile)">
          ${links("menu__link")}
        </nav>
        <p class="menu__foot mono-label">${esc(meta.fileType)}</p>
      </div>
    </div>`;
}

export function initNav(root) {
  const burger = root.querySelector("#nav-burger");
  const menu = root.querySelector("#mobile-menu");
  if (!burger || !menu) return;

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("menu-open", open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add("is-open"));
    } else {
      menu.classList.remove("is-open");
      menu.addEventListener("transitionend", () => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, { once: true });
    }
  };

  burger.addEventListener("click", () => setOpen(burger.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") setOpen(false);
  });
  // Ferme le menu si l'on repasse en affichage bureau.
  window.matchMedia("(min-width: 1081px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
}
