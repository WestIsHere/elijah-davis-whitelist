import { each, esc, pad } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 04 — Profil : qualités, défauts, contrôle de l'image.
 */
export function renderPersonality({ personality }) {
  const { qualities, flaws, image } = personality;

  const traits = (group, modifier) => `
    <article class="card traits traits--${modifier} reveal">
      <header class="traits__head">
        <p class="card__kicker mono-label">${esc(group.kicker)}</p>
        <h3 class="traits__title">${esc(group.title)} <span class="traits__count">${pad(group.items.length)}</span></h3>
      </header>
      <ul class="traits__list">
        ${each(group.items, (t) => `<li class="chip chip--${modifier}">${esc(t)}</li>`)}
      </ul>
    </article>`;

  return `
    <section class="section section--personality" id="personnalite" data-section>
      <div class="container">
        ${sectionHead({ index: "04", kicker: "Personnalité", title: "Profil", lead: personality.lead, icon: "scales" })}

        <div class="traits__grid">
          ${traits(qualities, "quality")}
          ${traits(flaws, "flaw")}
        </div>

        <div class="personality__footer reveal">
          <article class="card card--accent personality__image">
            <p class="card__kicker mono-label">${icons.eyeOff} ${esc(image.title)}</p>
            <p class="card__text">${esc(image.text)}</p>
          </article>
          <div class="personality__verdict" aria-label="Évaluation">
            <span class="stamp stamp--lg">${esc(personality.verdict)}</span>
          </div>
        </div>
      </div>
    </section>`;
}
