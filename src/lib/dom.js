/**
 * Petits utilitaires DOM partagés par tous les composants.
 * Les composants produisent des chaînes HTML à partir des données ;
 * `esc` protège systématiquement les valeurs interpolées.
 */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

/** Concatène le rendu d'une liste d'éléments. */
export const each = (items, render) => items.map(render).join("");

/** Insère du HTML à la fin d'un conteneur. */
export const mount = (target, html) => target.insertAdjacentHTML("beforeend", html);

/** Rendu de paragraphes à partir d'un tableau de chaînes (ou d'une chaîne). */
export const paragraphs = (text, className = "") =>
  (Array.isArray(text) ? text : [text])
    .map((p) => `<p${className ? ` class="${className}"` : ""}>${esc(p)}</p>`)
    .join("");

/** Numéro sur deux chiffres : 1 → "01". */
export const pad = (n) => String(n).padStart(2, "0");
