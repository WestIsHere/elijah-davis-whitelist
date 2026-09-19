import { each, esc, paragraphs } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 03 — Famille Davis, frères, fracture, attachement.
 */
export function renderFamily({ family }) {
  const { brothers, fracture, bond, siblings } = family;
  const steps = brothers.escalation.length;

  return `
    <section class="section section--family" id="famille" data-section>
      <div class="container">
        ${sectionHead({ index: "03", kicker: "Famille", title: "La famille Davis", lead: family.lead, icon: "courthouse" })}

        <div class="family__intro">
          <div class="prose reveal">
            <p class="family__adoption">${esc(family.adoption)}</p>
            ${paragraphs(family.davis)}
          </div>
          <dl class="facts reveal-group">
            ${each(family.facts, (f) => `
              <div class="facts__item">
                <dt>${esc(f.label)}</dt>
                <dd>${esc(f.value)}</dd>
              </div>`)}
          </dl>
        </div>

        <article class="card family__siblings reveal">
          <p class="card__kicker mono-label">${icons.document} ${esc(siblings.title)}</p>
          <div class="prose prose--wide">${paragraphs(siblings.text)}</div>
        </article>

        <div class="family__brothers reveal">
          <header class="family__brothers-head">
            <p class="mono-label">${esc(brothers.kicker)}</p>
            <h3 class="family__subtitle">${esc(brothers.title)}</h3>
            <p class="family__brothers-intro">${esc(brothers.intro)}</p>
          </header>

          <ol class="ladder" aria-label="Escalade progressive">
            ${each(brothers.escalation, (step, i) => `
              <li class="ladder__step" style="--t:${(i / (steps - 1)).toFixed(3)}">
                <span class="ladder__num">${String(i + 1).padStart(2, "0")}</span>
                <span class="ladder__label">${esc(step)}</span>
              </li>`)}
          </ol>

          <div class="positions reveal-group">
            ${each(brothers.positions, (p, i) => `
              <article class="card positions__item ${i === 1 ? "card--accent" : ""}">
                <p class="card__kicker mono-label">${esc(p.who)}</p>
                <p class="card__text">${esc(p.text)}</p>
              </article>`)}
          </div>
        </div>

        <div class="fracture reveal">
          <header class="fracture__head">
            <h3 class="family__subtitle">${esc(fracture.title)}</h3>
            <p class="fracture__intro">${esc(fracture.intro)}</p>
          </header>
          <div class="fracture__views">
            ${each(fracture.views, (v) => `
              <blockquote class="fracture__view">
                <span class="fracture__mark" aria-hidden="true">${icons.quote}</span>
                <p class="fracture__quote">${esc(v.quote)}</p>
                <footer class="fracture__who mono-label">${esc(v.who)}</footer>
              </blockquote>`)}
          </div>
          <p class="fracture__outro">${esc(fracture.outro)}</p>
        </div>

        <article class="bond reveal">
          <div class="bond__body">
            <p class="mono-label">${esc(bond.kicker)}</p>
            <h3 class="bond__title">${esc(bond.title)}</h3>
            <div class="prose">${paragraphs(bond.text)}</div>
            <p class="bond__highlight">${esc(bond.highlight)}</p>
          </div>
          <div class="bond__seal" aria-hidden="true">
            ${icons.scales}
            <span>Davis</span>
          </div>
        </article>
      </div>
    </section>`;
}
