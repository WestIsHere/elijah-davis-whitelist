import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Première page du dossier, visible une fois la couverture ouverte.
 */
export function renderHero({ meta, identity }) {
  return `
    <section class="hero" id="top">
      <div class="hero__watermark" aria-hidden="true">${esc(meta.coverStamp)}</div>
      <div class="container hero__inner reveal-group">
        <p class="hero__kicker mono-label">${icons.document} Pièce n° 00 — Fiche de synthèse</p>
        <h1 class="hero__name">${esc(identity.firstName)} ${esc(identity.lastName)}</h1>
        <p class="hero__type">${esc(meta.fileType)}</p>
        <p class="hero__tagline">${esc(identity.tagline)}</p>

        <dl class="hero__meta">
          ${each(identity.summary, (item) => `
            <div class="hero__meta-item">
              <dt>${esc(item.label)}</dt>
              <dd>${esc(item.value)}</dd>
            </div>`)}
        </dl>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#identite">Consulter le dossier ${icons.arrowDown}</a>
          <a class="btn btn--ghost" href="#chronologie">Voir la chronologie</a>
        </div>
      </div>
      <a class="hero__scroll" href="#identite" aria-label="Faire défiler vers la section Identité">
        <span class="hero__scroll-line"></span>
      </a>
    </section>`;
}
