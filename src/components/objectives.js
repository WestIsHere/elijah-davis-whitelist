import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 06 — Objectifs RP : trois phases + zones de friction.
 */
export function renderObjectives({ objectives }) {
  const { phases, conflicts } = objectives;

  return `
    <section class="section section--objectives" id="objectifs" data-section>
      <div class="container">
        ${sectionHead({ index: "06", kicker: "Objectifs RP", title: "Feuille de route", lead: objectives.lead, icon: "document" })}

        <div class="phases reveal-group">
          ${each(phases, (p, i) => `
            <article class="card phase" data-phase="${i + 1}">
              <header class="phase__head">
                <p class="phase__kicker mono-label">${esc(p.phase)}</p>
                <h3 class="phase__title">${esc(p.title)}</h3>
                <p class="phase__subtitle">${esc(p.subtitle)}</p>
              </header>
              <p class="phase__intro">${esc(p.intro)}</p>
              <ul class="checklist">
                ${each(p.items, (item) => `<li>${esc(item)}</li>`)}
              </ul>
              <p class="phase__note">${esc(p.note)}</p>
            </article>`)}
        </div>

        <article class="card card--accent conflicts reveal">
          <header class="conflicts__head">
            <p class="card__kicker mono-label">${icons.gavel} ${esc(conflicts.kicker)}</p>
            <h3 class="conflicts__title">${esc(conflicts.title)}</h3>
            <p class="conflicts__intro">${esc(conflicts.intro)}</p>
          </header>
          <ul class="conflicts__list">
            ${each(conflicts.items, (item) => `<li>${esc(item)}</li>`)}
          </ul>
          <p class="conflicts__note">${esc(conflicts.note)}</p>
        </article>
      </div>
    </section>`;
}
