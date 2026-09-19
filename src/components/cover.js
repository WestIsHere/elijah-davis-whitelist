import { esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Couverture du dossier : première chose visible.
 * Un clic sur « Ouvrir le dossier » lance l'animation d'ouverture
 * puis retire la couverture du DOM.
 */
export function renderCover({ meta, identity }) {
  return `
    <div class="cover" id="cover" role="dialog" aria-modal="true" aria-labelledby="cover-name">
      <div class="cover__bg" aria-hidden="true"></div>
      <div class="cover__folder">
        <span class="cover__tab mono-label">Dossier n° ${esc(meta.fileNumber)}</span>
        <span class="cover__stamp stamp">${esc(meta.coverStamp)}</span>

        <div class="cover__body">
          <p class="cover__kicker mono-label">${icons.folder} Los Santos / Character file</p>
          <h1 class="cover__name" id="cover-name">
            <span>${esc(identity.firstName)}</span>
            <span>${esc(identity.lastName)}</span>
          </h1>
          <p class="cover__type">${esc(meta.fileType)}</p>
          <p class="cover__tagline">${esc(identity.tagline)}</p>

          <dl class="cover__meta">
            <div><dt>Classification</dt><dd>${esc(meta.classification)}</dd></div>
            <div><dt>Statut</dt><dd>${esc(meta.status)}</dd></div>
            <div><dt>Serveur</dt><dd>${esc(meta.server)}</dd></div>
          </dl>

          <button class="btn btn--primary cover__open" id="open-file" type="button">
            ${esc(meta.openButton)} ${icons.arrowRight}
          </button>
        </div>

        <div class="cover__footer" aria-hidden="true">
          <span class="barcode"></span>
          <span>Private file · Whitelist application</span>
        </div>
      </div>
    </div>`;
}

/**
 * Branche l'ouverture du dossier. `onOpen` est appelé une fois la couverture retirée.
 */
export function initCover(root, onOpen) {
  const cover = root.querySelector("#cover");
  const button = root.querySelector("#open-file");
  if (!cover || !button) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let opened = false;

  const finish = () => {
    if (opened) return;
    opened = true;
    cover.remove();
    onOpen();
  };

  button.addEventListener("click", () => {
    if (cover.classList.contains("is-opening")) return;
    cover.classList.add("is-opening");
    button.disabled = true;
    // La durée correspond à la transition CSS de `.cover__folder` (+ marge de sécurité).
    setTimeout(finish, reduceMotion ? 200 : 1000);
  });

  // Focus initial sur le bouton pour une ouverture au clavier immédiate.
  requestAnimationFrame(() => button.focus({ preventScroll: true }));
}
