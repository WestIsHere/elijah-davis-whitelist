/**
 * Animations d'apparition au scroll.
 * Chaque élément `.reveal` reçoit `.is-visible` lorsqu'il entre dans le viewport.
 * Les enfants d'un `.reveal-group` reçoivent un délai progressif via `--i`.
 * Sans IntersectionObserver ou avec `prefers-reduced-motion`, tout est affiché d'emblée.
 */

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initReveal(root = document) {
  root.querySelectorAll(".reveal-group").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.classList.add("reveal");
      child.style.setProperty("--i", i);
    });
  });

  const targets = root.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window) || reduceMotion()) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}
