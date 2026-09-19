/**
 * Navigation dynamique :
 *  - lien actif selon la section visible ;
 *  - compteur « 03 / 08 » (indicateur de progression dans le dossier) ;
 *  - barre de progression de lecture ;
 *  - état « scrolled » de la navbar.
 * Un seul listener scroll, throttlé par requestAnimationFrame.
 */

export function initScrollspy({ sections, links, counter, progressBar, nav }) {
  const total = sections.length;
  let ticking = false;

  const setActive = (id) => {
    // Les liens existent en double (navbar + menu mobile) : l'index vient des sections.
    const index = sections.findIndex((section) => section.id === id) + 1;
    links.forEach((link) => {
      const active = link.dataset.nav === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    if (counter) counter.textContent = String(index).padStart(2, "0");
  };

  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 24);

    // Section active : la dernière dont le haut est passé au-dessus du tiers supérieur.
    const marker = window.scrollY + window.innerHeight * 0.34;
    let current = "";
    for (const section of sections) {
      if (section.offsetTop <= marker) current = section.id;
    }
    // Tout en bas de page : forcer la dernière section (utile si elle est courte).
    if (ratio >= 0.995 && total) current = sections[total - 1].id;
    setActive(current);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();

  return { update };
}
