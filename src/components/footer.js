import { esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";

/**
 * Clôture du dossier.
 */
export function renderFooter({ meta, identity, footer }) {
  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__closing reveal">
          <span class="footer__icon" aria-hidden="true">${icons.folder}</span>
          <p class="footer__title">${esc(footer.closing)}</p>
          <p class="footer__sub">${esc(footer.sub)}</p>
        </div>
        <div class="footer__meta">
          <span class="mono-label">${esc(identity.firstName)} ${esc(identity.lastName)} — ${esc(meta.fileType)}</span>
          <span class="mono-label">Dossier ${esc(meta.fileNumber)} · ${esc(meta.server)}</span>
        </div>
        <a class="footer__top" href="#top">${esc(footer.backToTop)} ${icons.arrowDown}</a>
      </div>
    </footer>`;
}
