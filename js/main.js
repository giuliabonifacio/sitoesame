/*
 * main.js — logica della home page (index.html)
 */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderNav("home");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Rileva un device touch: niente hover, quindi il nome del posto
  // resta sempre visibile (gestito via CSS con la classe is-touch).
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouch) document.body.classList.add("is-touch");

  setupMobileMenu();
  buildGallery(reduceMotion, isTouch);
});

/* ---------- Menu mobile (hamburger + pannello animato GSAP) ---------- */
function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("menu-close");
  const panel = document.getElementById("mobile-panel");
  const overlay = document.getElementById("mobile-overlay");
  if (!toggle || !panel) return;

  // Stato iniziale gestito interamente da GSAP (evita conflitti con
  // eventuali transform impostati via CSS) e poi reso visibile.
  gsap.set(panel, { xPercent: 100 });
  panel.classList.add("js-ready");

  const tl = gsap.timeline({ paused: true });
  tl.set(overlay, { display: "block" })
    .to(overlay, { autoAlpha: 1, duration: 0.25 }, 0)
    .to(panel, { xPercent: 0, duration: 0.4, ease: "power3.out" }, 0)
    .fromTo(
      "#mobile-nav-links li",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
      0.15
    );

  const openMenu = () => {
    tl.play();
    toggle.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    tl.reverse();
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // Chiude il pannello quando si clicca un link del menu mobile
  document.getElementById("mobile-nav-links").addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });
}

/* ---------- Galleria casuale della home ---------- */
function buildGallery(reduceMotion, isTouch) {
  const grid = document.getElementById("gallery-grid");
  const images = shuffle(getHomeGalleryImages());
  const spanClasses = ["span-s", "span-m", "span-l", "span-tall", "span-wide"];

  images.forEach((img, i) => {
    const spanClass = spanClasses[Math.floor(Math.random() * spanClasses.length)];
    const rotation = (Math.random() * 6 - 3).toFixed(2); // tra -3 e 3 gradi

    const link = document.createElement("a");
    link.href = `trip.html?trip=${img.tripSlug}`;
    link.className = `gallery-item ${spanClass}`;
    link.style.setProperty("--rot", `${rotation}deg`);
    link.setAttribute("aria-label", `Vai al viaggio: ${img.tripName}`);

    link.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" ${i < 4 ? "" : 'loading="lazy"'} />
      <span class="gallery-overlay">${img.tripName}</span>
    `;

    // Hover desktop: leggero ingrandimento + overlay con transizione GSAP
    if (!isTouch && !reduceMotion) {
      const overlay = () => link.querySelector(".gallery-overlay");
      link.addEventListener("mouseenter", () => {
        gsap.to(overlay(), { opacity: 1, duration: 0.3, ease: "power1.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(overlay(), { opacity: 0, duration: 0.3, ease: "power1.out" });
      });
    }

    // Transizione in uscita prima di andare alla pagina del viaggio
    link.addEventListener("click", (e) => {
      if (reduceMotion) return; // niente animazione, naviga subito
      e.preventDefault();
      const href = link.href;
      gsap.to("main", {
        opacity: 0,
        duration: 0.35,
        ease: "power1.inOut",
        onComplete: () => (window.location.href = href),
      });
    });

    grid.appendChild(link);
  });

  animateGalleryEntrance(reduceMotion);
  setupParallax(reduceMotion);
}

// Animazione d'ingresso con stagger
function animateGalleryEntrance(reduceMotion) {
  const items = gsap.utils.toArray(".gallery-item");
  if (reduceMotion) {
    gsap.set(items, { opacity: 1, y: 0 });
    return;
  }
  gsap.from(items, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.05,
  });
}

// Parallax leggero allo scroll, velocità diversa per ogni immagine
function setupParallax(reduceMotion) {
  if (reduceMotion) return;
  gsap.utils.toArray(".gallery-item").forEach((item) => {
    const speed = 0.5 + Math.random() * 1; // tra 0.5 e 1.5
    gsap.to(item, {
      y: () => -40 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

// Fisher-Yates shuffle: ordine diverso a ogni caricamento
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
