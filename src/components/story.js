import { each, esc, paragraphs } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 02 — Histoire : origines, abandon, contraste avec le jumeau.
 */
export function renderStory({ story }) {
  const { decision, contrast, knowledge } = story;

  const column = (side, modifier) => `
    <div class="contrast__col contrast__col--${modifier}">
      <p class="contrast__label mono-label">${esc(side.label)}</p>
      <ul class="contrast__list">
        ${each(side.items, (item) => `<li>${esc(item)}</li>`)}
      </ul>
    </div>`;

  return `
    <section class="section section--story" id="histoire" data-section>
      <div class="container">
        ${sectionHead({ index: "02", kicker: "Histoire", title: "Origines et abandon", lead: story.lead, icon: "folder" })}

        <div class="story__grid">
          <div class="story__text prose reveal">
            ${paragraphs(story.paragraphs)}
          </div>

          <aside class="story__decision reveal">
            <article class="paper paper--excerpt">
              <p class="paper__kicker mono-label">${esc(decision.kicker)}</p>
              <p class="story__decision-quote">${esc(decision.text)}</p>
              <ul class="story__outcomes">
                ${each(decision.outcomes, (o) => `
                  <li>
                    <span class="story__outcome-who">${esc(o.who)}</span>
                    <span class="story__outcome-arrow" aria-hidden="true">${icons.arrowRight}</span>
                    <span class="story__outcome-result">${esc(o.result)}</span>
                  </li>`)}
              </ul>
            </article>
          </aside>
        </div>

        <div class="story__aftermath prose reveal">
          ${paragraphs(story.aftermath)}
        </div>

        <div class="contrast reveal">
          <header class="contrast__head">
            <p class="mono-label">${esc(contrast.kicker)}</p>
            <h3 class="contrast__title">${esc(contrast.title)}</h3>
            <p class="contrast__intro">${esc(contrast.intro)}</p>
          </header>
          <div class="contrast__body">
            ${column(contrast.brother, "brother")}
            <div class="contrast__divider" aria-hidden="true">
              <span class="contrast__divider-line"></span>
              <span class="contrast__divider-label">${esc(contrast.divider)}</span>
              <span class="contrast__divider-line"></span>
            </div>
            ${column(contrast.elijah, "elijah")}
          </div>
        </div>

        <div class="notice reveal">
          <span class="notice__icon">${icons.eyeOff}</span>
          <div>
            <p class="notice__title">${esc(knowledge.title)}</p>
            <p class="notice__text">${esc(knowledge.text)}</p>
          </div>
        </div>
      </div>
    </section>`;
}
