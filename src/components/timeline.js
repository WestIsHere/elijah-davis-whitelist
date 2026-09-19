import { each, esc } from "../lib/dom.js";
import { icons } from "../lib/icons.js";
import { sectionHead } from "./sectionHead.js";

/**
 * Pièce n° 07 — Chronologie interactive.
 * La ligne se remplit au scroll, chaque jalon s'allume lorsqu'il est dépassé,
 * et un clic (ou Entrée) met un jalon en avant.
 */
export function renderTimeline({ timeline }) {
  return `
    <section class="section section--timeline" id="chronologie" data-section>
      <div class="container">
        ${sectionHead({ index: "07", kicker: "Chronologie", title: "Ligne de vie", lead: timeline.lead, icon: "folder" })}

        <ol class="timeline" id="timeline">
          <span class="timeline__line" aria-hidden="true"><span class="timeline__fill" id="timeline-fill"></span></span>
          ${each(timeline.events, (ev) => `
            <li class="tl-item reveal ${ev.unknown ? "tl-item--unknown" : ""} ${ev.current ? "tl-item--current" : ""}">
              <div class="tl-item__node" aria-hidden="true"><span>${esc(ev.index)}</span></div>
              <article class="tl-item__card" tabindex="0" role="button" aria-pressed="false" aria-label="${esc(ev.title)}">
                <p class="tl-item__phase mono-label">${esc(ev.phase)}</p>
                <h3 class="tl-item__title">${esc(ev.title)}${ev.unknown ? `<span class="caret" aria-hidden="true"></span>` : ""}</h3>
                <p class="tl-item__text">${esc(ev.text)}</p>
                ${ev.secret ? `<p class="tl-item__secret">${icons.lock} ${esc(ev.secret)}</p>` : ""}
                ${ev.current ? `<p class="tl-item__flag mono-label">${icons.arrowRight} Point de départ du RP</p>` : ""}
                ${ev.unknown ? `
                  <p class="tl-item__detail">${esc(ev.detail)}</p>
                  <span class="stamp stamp--sm tl-item__stamp">À écrire en jeu</span>` : ""}
              </article>
            </li>`)}
        </ol>
      </div>
    </section>`;
}

export function initTimeline(root) {
  const timeline = root.querySelector("#timeline");
  const fill = root.querySelector("#timeline-fill");
  if (!timeline || !fill) return;

  const items = Array.from(timeline.querySelectorAll(".tl-item"));
  const cards = Array.from(timeline.querySelectorAll(".tl-item__card"));

  /* Mise en avant au clic / clavier (un seul jalon actif à la fois) */
  const activate = (card) => {
    const isActive = card.getAttribute("aria-pressed") === "true";
    cards.forEach((c) => {
      c.setAttribute("aria-pressed", "false");
      c.closest(".tl-item").classList.remove("is-active");
    });
    if (!isActive) {
      card.setAttribute("aria-pressed", "true");
      card.closest(".tl-item").classList.add("is-active");
    }
  };
  cards.forEach((card) => {
    card.addEventListener("click", () => activate(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(card); }
    });
  });

  /* Remplissage de la ligne et allumage des jalons au scroll */
  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = timeline.getBoundingClientRect();
    const marker = window.innerHeight * 0.55;
    const ratio = Math.min(1, Math.max(0, (marker - rect.top) / rect.height));
    fill.style.transform = `scaleY(${ratio})`;
    items.forEach((item) => {
      const node = item.querySelector(".tl-item__node");
      item.classList.toggle("is-passed", node.getBoundingClientRect().top < marker);
    });
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}
