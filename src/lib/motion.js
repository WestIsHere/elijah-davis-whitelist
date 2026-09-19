/**
 * Micro-interactions de l'interface : halo de pointeur, légère inclinaison
 * de la console, statut vivant et compteur de progression du hero.
 * Tout est désactivé pour les appareils tactiles et les préférences
 * `prefers-reduced-motion`.
 */

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initMotion(root = document) {
  const reduced = prefersReducedMotion();
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!reduced && pointer) {
    let ticking = false;
    let lastEvent;

    const paintPointer = () => {
      ticking = false;
      if (!lastEvent) return;

      const x = (lastEvent.clientX / Math.max(window.innerWidth, 1)) * 100;
      const y = (lastEvent.clientY / Math.max(window.innerHeight, 1)) * 100;
      document.documentElement.style.setProperty("--pointer-x", `${x.toFixed(2)}%`);
      document.documentElement.style.setProperty("--pointer-y", `${y.toFixed(2)}%`);

      const dilemma = root.querySelector(".dilemma");
      if (dilemma) {
        const rect = dilemma.getBoundingClientRect();
        dilemma.style.setProperty("--dilemma-x", `${lastEvent.clientX - rect.left}px`);
        dilemma.style.setProperty("--dilemma-y", `${lastEvent.clientY - rect.top}px`);
      }
    };

    window.addEventListener("pointermove", (event) => {
      lastEvent = event;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paintPointer);
    }, { passive: true });

    root.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x-local", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y-local", `${event.clientY - rect.top}px`);
      }, { passive: true });
    });

    root.querySelectorAll("[data-tilt]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty("--tilt-x", `${(-y * 4.5).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
      }, { passive: true });
      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  const meter = root.querySelector("#case-console-meter");
  if (meter) {
    const updateMeter = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      meter.style.width = `${Math.max(16, Math.round(ratio * 84 + 16))}%`;
    };
    updateMeter();
    window.addEventListener("scroll", updateMeter, { passive: true });
    window.addEventListener("resize", updateMeter, { passive: true });
  }

  const status = root.querySelector("#live-status");
  if (status && !reduced) {
    const messages = ["Dossier ouvert", "Profil vérifié", "Intrigue en cours", "À écrire en jeu"];
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % messages.length;
      status.classList.remove("status-in");
      void status.offsetWidth;
      status.textContent = messages[index];
      status.classList.add("status-in");
    }, 2800);
  }
}
