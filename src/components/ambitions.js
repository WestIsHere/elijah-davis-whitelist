import { each, esc, pad } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 05 — Ambitions : la naissance de la vocation.
 */
export function renderAmbitions({ ambitions }) {
  const { questions, realization } = ambitions;

  return `
    <section class="section section--ambitions" id="ambitions" data-section>
      <div class="container">
        ${sectionHead({ index: "05", kicker: "Ambitions", title: "Pourquoi devenir avocat", lead: ambitions.lead, icon: "gavel" })}

        <div class="ambitions__grid">
          <div class="ambitions__text prose reveal">
            <p>${esc(ambitions.intro)}</p>
            <p>${esc(ambitions.growth)}</p>
          </div>

          <article class="paper paper--questions reveal">
            <p class="paper__kicker mono-label">${icons.document} ${esc(questions.kicker)}</p>
            <ol class="questions">
              ${each(questions.items, (q, i) => `
                <li class="questions__item">
                  <span class="questions__num">Q.${pad(i + 1)}</span>
                  <span class="questions__text">${esc(q)}</span>
                </li>`)}
            </ol>
          </article>
        </div>

        <div class="realization reveal">
          <p class="mono-label">${esc(realization.kicker)}</p>
          <p class="quote realization__quote">${esc(realization.quote)}</p>
          <p class="realization__text">${esc(realization.text)}</p>
        </div>

        <p class="ambitions__conclusion reveal">${esc(ambitions.conclusion)}</p>
      </div>
    </section>`;
}
