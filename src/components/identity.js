import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 01 — Identité.
 * Fiche d'identification « papier » + notes en marge.
 */
export function renderIdentity({ meta, identity }) {
  const initials = `${identity.firstName[0]}.${identity.lastName[0]}.`;

  const field = (f) => `
    <dt>${esc(f.label)}</dt>
    <dd>${
      f.redacted
        ? `<span class="redacted" aria-label="Information classifiée"><span class="redacted__bar" aria-hidden="true"></span></span><span class="redacted__note">${esc(f.value)}</span>`
        : esc(f.value)
    }</dd>`;

  return `
    <section class="section section--identity" id="identite" data-section>
      <div class="container">
        ${sectionHead({ index: "01", kicker: "Identité", title: "Fiche d'identification", lead: identity.lead, icon: "document" })}

        <div class="identity__grid">
          <article class="paper identity__sheet reveal">
            <header class="paper__head">
              <span>Fiche d'identification</span>
              <span>N° ${esc(meta.fileNumber)}</span>
            </header>

            <div class="identity__top">
              <div class="identity__seal" aria-hidden="true"><span>${esc(initials)}</span></div>
              <div class="identity__title">
                <h3 class="identity__name">${esc(identity.firstName)} ${esc(identity.lastName)}</h3>
                <p class="identity__role">${esc(identity.role)}</p>
              </div>
            </div>

            <dl class="kv">
              ${each(identity.fields, field)}
            </dl>

            <footer class="paper__foot">
              <span class="stamp stamp--sm">Reçu</span>
              <span class="paper__foot-text">Dossier ${esc(meta.status.toLowerCase())} — ${esc(meta.server)}</span>
            </footer>
          </article>

          <div class="identity__aside reveal-group">
            <article class="card">
              <p class="card__kicker mono-label">${icons.folder} ${esc(identity.note.title)}</p>
              <p class="card__text">${esc(identity.note.text)}</p>
            </article>

            <article class="card card--accent">
              <p class="card__kicker mono-label">${icons.lock} Éléments classifiés</p>
              <ul class="plain-list">
                <li><span class="redacted redacted--inline"><span class="redacted__bar"></span></span> Nom de naissance</li>
                <li><span class="redacted redacted--inline"><span class="redacted__bar"></span></span> Identité de la famille biologique</li>
                <li><span class="redacted redacted--inline"><span class="redacted__bar"></span></span> Raisons exactes de l'abandon</li>
              </ul>
              <p class="card__text card__text--muted">Ces informations sont inconnues du personnage au début du RP. Elles pourront être découvertes en jeu.</p>
            </article>
          </div>
        </div>
      </div>
    </section>`;
}
