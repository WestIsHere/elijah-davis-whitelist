import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Première page du dossier, visible une fois la couverture ouverte.
 */
export function renderHero({ meta, identity }) {
  return `
    <section class="hero" id="top">
      <div class="hero__gridlines" aria-hidden="true"></div>
      <div class="hero__watermark" aria-hidden="true">${esc(meta.coverStamp)}</div>
      <div class="container hero__grid">
        <div class="hero__inner reveal-group">
          <p class="hero__kicker mono-label">${icons.document} Pièce n° 00 — Fiche de synthèse</p>
          <h1 class="hero__name"><span>${esc(identity.firstName)}</span><span>${esc(identity.lastName)}</span></h1>
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

        <aside class="case-console reveal" data-tilt aria-label="Console de synthèse du dossier">
          <div class="case-console__scan" aria-hidden="true"></div>
          <div class="case-console__head">
            <span class="mono-label">${icons.lock} Live case feed</span>
            <span class="case-console__id">${esc(meta.fileNumber)}</span>
          </div>

          <div class="case-console__portrait" aria-hidden="true">
            <span class="case-console__ring case-console__ring--outer"></span>
            <span class="case-console__ring case-console__ring--inner"></span>
            <span class="case-console__crosshair case-console__crosshair--h"></span>
            <span class="case-console__crosshair case-console__crosshair--v"></span>
            <strong class="case-console__initials">ED</strong>
            <span class="case-console__coordinate">34° 03′ N / 118° 14′ W</span>
          </div>

          <div class="case-console__identity">
            <span class="mono-label">Profil identifié</span>
            <strong>${esc(identity.firstName)} ${esc(identity.lastName)}</strong>
            <span>${esc(identity.role)} · ${esc(meta.server)}</span>
          </div>

          <dl class="case-console__stats">
            <div><dt>Signal</dt><dd class="case-console__signal"><span></span>Stable</dd></div>
            <div><dt>Profil</dt><dd>01 / 08</dd></div>
            <div><dt>Accès</dt><dd>WL</dd></div>
          </dl>

          <div class="case-console__activity">
            <span class="case-console__status-dot" aria-hidden="true"></span>
            <span class="case-console__activity-copy"><small>Activité du dossier</small><strong id="live-status">Dossier ouvert</strong></span>
            <span class="case-console__time">LIVE</span>
          </div>
          <div class="case-console__meter" aria-hidden="true"><span id="case-console-meter"></span></div>
          <div class="case-console__foot"><span>ENCRYPTED // RP</span><span>SCANNING</span></div>
        </aside>
      </div>
      <a class="hero__scroll" href="#identite" aria-label="Faire défiler vers la section Identité">
        <span class="hero__scroll-line"></span>
      </a>
    </section>`;
}
