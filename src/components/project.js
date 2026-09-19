import { each, esc, pad } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 08 — Projet RP : intentions, dépendances, avertissement.
 */
export function renderProject({ project }) {
  const { dependsOn, rpWith, notList } = project;

  return `
    <section class="section section--project" id="projet" data-section>
      <div class="container">
        ${sectionHead({ index: "08", kicker: "Projet RP", title: "Intentions de jeu", lead: project.lead, icon: "courthouse" })}

        <p class="project__intro reveal">${esc(project.intro)}</p>

        <div class="project__block reveal">
          <p class="mono-label">${esc(dependsOn.kicker)}</p>
          <ul class="depends reveal-group">
            ${each(dependsOn.items, (item, i) => `
              <li class="depends__item">
                <span class="depends__num">${pad(i + 1)}</span>
                <span>${esc(item)}</span>
              </li>`)}
          </ul>
        </div>

        <div class="project__grid">
          <article class="card project__rpwith reveal">
            <p class="card__kicker mono-label">${icons.scales} ${esc(rpWith.kicker)}</p>
            <p class="card__text">${esc(rpWith.text)}</p>
            <ul class="chips">
              ${each(rpWith.categories, (c) => `<li class="chip chip--gold">${esc(c)}</li>`)}
            </ul>
          </article>

          <article class="paper paper--warning reveal">
            <p class="paper__kicker mono-label">${icons.alert} ${esc(notList.kicker)}</p>
            <h3 class="warning__title">${esc(notList.title)}</h3>
            <ul class="warning__list">
              ${each(notList.items, (item) => `<li><span class="warning__x" aria-hidden="true">${icons.close}</span>${esc(item)}</li>`)}
            </ul>
            <p class="warning__reminder">${esc(notList.reminder)}</p>
            <p class="warning__conclusion">${esc(notList.conclusion)}</p>
          </article>
        </div>
      </div>
    </section>`;
}
