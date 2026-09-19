import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Bande « Dilemme central » : pleine largeur, entre Ambitions et Objectifs.
 */
export function renderDilemma({ dilemma }) {
  return `
    <section class="dilemma" id="dilemme" aria-labelledby="dilemma-quote">
      <div class="dilemma__glow" aria-hidden="true"></div>
      <div class="container dilemma__inner reveal-group">
        <p class="dilemma__kicker mono-label">${icons.scales} ${esc(dilemma.kicker)}</p>
        <p class="quote dilemma__quote" id="dilemma-quote">${esc(dilemma.quote)}</p>
        <p class="dilemma__text">${esc(dilemma.text)}</p>
        <ul class="dilemma__poles" aria-label="Les trois pôles du dilemme">
          ${each(dilemma.poles, (pole) => `<li class="dilemma__pole">${esc(pole)}</li>`)}
        </ul>
        <p class="dilemma__outro">${esc(dilemma.outro)}</p>
      </div>
    </section>`;
}
