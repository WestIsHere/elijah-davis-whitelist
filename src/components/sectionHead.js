import { esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * En-tête commun à toutes les pièces du dossier :
 * grand numéro en contour, kicker « Pièce n° », titre serif, chapeau.
 */
export function sectionHead({ index, kicker, title, lead, icon }) {
  return `
    <header class="section-head reveal">
      <span class="section-head__index" aria-hidden="true">${esc(index)}</span>
      <div class="section-head__text">
        <p class="section-head__kicker mono-label">
          ${icon ? `<span class="section-head__icon">${icons[icon] || ""}</span>` : ""}
          Pièce n° ${esc(index)}${kicker ? ` — ${esc(kicker)}` : ""}
        </p>
        <h2 class="section-head__title">${esc(title)}</h2>
      </div>
      ${lead ? `<p class="section-head__lead">${esc(lead)}</p>` : ""}
    </header>`;
}
