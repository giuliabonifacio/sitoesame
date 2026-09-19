/*
 * trip.js — logica della pagina di dettaglio viaggio (trip.html)
 * Legge lo slug dalla query string (?trip=slug) e popola il template.
 */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("trip");
  const trip = slug ? getTripBySlug(slug) : null;

  setupMobileMenu();

  if (!trip) {
    renderNav(null);
    document.getElementById("not-found").classList.remove("hidden");
    document.getElementById("trip-content").classList.add("hidden");
    return;
  }

  renderNav(trip.slug);
  document.title = `${trip.name} — GIULIA.`;
  document.getElementById("trip-title").textContent = trip.name;
  document.getElementById("trip-description").textContent = trip.description;
  document.getElementById("trip-content").classList.remove("hidden");

  buildMasonry(trip, reduceMotion);
  setupLightbox();
  buildAdjacentLinks(trip);
});

/* ---------- Menu mobile (identico a main.js) ---------- */
function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("menu-close");
  const panel = document.getElementById("mobile-panel");
  const overlay = document.getElementById("mobile-overlay");
  if (!toggle || !panel) return;

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
  document.getElementById("mobile-nav-links").addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });
}

/* ---------- Galleria masonry ---------- */
function buildMasonry(trip, reduceMotion) {
  const container = document.getElementById("trip-gallery");
  const images = getTripImages(trip);

  images.forEach((img, i) => {
    const figure = document.createElement("figure");
    figure.className = "masonry-item";
    figure.innerHTML = `<img src="${img.src}" alt="${img.alt}" ${
      i < 2 ? "" : 'loading="lazy"'
    } />`;
    figure.addEventListener("click", () => openLightbox(img.src, img.alt));
    container.appendChild(figure);
  });

  if (reduceMotion) {
    gsap.set(".masonry-item", { opacity: 1 });
    return;
  }

  // Ogni immagine appare con fade + slide up quando entra nel viewport
  gsap.utils.toArray(".masonry-item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    );
  });
}

/* ---------- Lightbox ---------- */
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");

  closeBtn.addEventListener("click", closeLightbox);

  // Click fuori dall'immagine (sullo sfondo) chiude la lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Chiusura con tasto Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  img.alt = alt;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  document.body.style.overflow = "";
}

/* ---------- Link viaggio precedente / successivo ---------- */
function buildAdjacentLinks(trip) {
  const { prev, next } = getAdjacentTrips(trip.slug);

  const prevLink = document.getElementById("prev-trip");
  const nextLink = document.getElementById("next-trip");

  if (prev) {
    prevLink.href = `trip.html?trip=${prev.slug}`;
    document.getElementById("prev-trip-name").textContent = prev.name;
  } else {
    prevLink.classList.add("invisible");
  }

  if (next) {
    nextLink.href = `trip.html?trip=${next.slug}`;
    document.getElementById("next-trip-name").textContent = next.name;
  } else {
    nextLink.classList.add("invisible");
  }
}
