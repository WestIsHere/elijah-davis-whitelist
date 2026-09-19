/**
 * Icônes SVG inline (trait fin, 24×24) — vocabulaire volontairement restreint
 * au champ lexical du droit : balance, dossier, document, marteau, tribunal.
 */

const svg = (paths, extra = "") =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${paths}</svg>`;

export const icons = {
  scales: svg(
    `<path d="M12 3v18M5 21h14M12 6l6 1M12 6L6 7"/><path d="M3.5 14 6 7l2.5 7a2.5 2.5 0 0 1-5 0Z"/><path d="M15.5 14 18 7l2.5 7a2.5 2.5 0 0 1-5 0Z"/>`
  ),
  folder: svg(
    `<path d="M3 7.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.5a2 2 0 0 0-2-2h-7l-2-2.5H5a2 2 0 0 0-2 2.5Z"/><path d="M3 11h18"/>`
  ),
  document: svg(
    `<path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M9 13h6M9 17h6M9 9h2"/>`
  ),
  gavel: svg(
    `<path d="m14 4 6 6M4 20l7-7M9 9l6 6M12.5 5.5 18.5 11.5"/><path d="M15 3.5l5.5 5.5"/><path d="M3 21h8"/>`
  ),
  courthouse: svg(
    `<path d="M3 21h18M4 10h16M12 3 3 8h18L12 3Z"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16"/>`
  ),
  arrowDown: svg(`<path d="M12 5v14M5 12l7 7 7-7"/>`),
  arrowRight: svg(`<path d="M5 12h14M12 5l7 7-7 7"/>`),
  lock: svg(
    `<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>`
  ),
  eyeOff: svg(
    `<path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.1A10.5 10.5 0 0 1 12 5c5 0 8.5 4 9.5 7-.4 1.1-1.2 2.4-2.3 3.5M6.6 6.6C4.4 8 3 10.2 2.5 12c1 3 4.5 7 9.5 7 1.6 0 3-.4 4.3-1"/>`
  ),
  alert: svg(
    `<path d="M12 3 2.5 19.5h19L12 3Z"/><path d="M12 10v4M12 17.5h.01"/>`
  ),
  quote: svg(
    `<path d="M7 7h4v6H7a3 3 0 0 0-3 3v1h3v-2M17 7h4v6h-4a3 3 0 0 0-3 3v1h3v-2"/>`
  ),
  check: svg(`<path d="m5 12 4.5 4.5L19 7"/>`),
  close: svg(`<path d="M6 6l12 12M18 6 6 18"/>`),
  menu: svg(`<path d="M4 7h16M4 12h16M4 17h16"/>`),
};
