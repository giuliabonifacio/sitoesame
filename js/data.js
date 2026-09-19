/*
 * data.js
 * Unico punto da modificare per aggiungere/rimuovere viaggi o foto.
 * Non serve toccare nessun file HTML.
 */

// Dati generali del sito
const SITE = {
  name: "GIULIA.",
};

// Elenco dei viaggi. "name" è il nome mostrato sul sito (senza l'anno).
// "folder" è il nome esatto della cartella su disco in /images (usato per
// costruire i percorsi delle immagini, quello sì con l'anno), "slug" è la
// versione usata negli URL (?trip=slug). Per aggiungere un nuovo viaggio:
// crea la cartella in /images, aggiungi un oggetto qui con lo stesso
// "folder" e l'elenco dei nomi dei file (già convertiti in .webp) dentro
// "images".
// Ordinati per data (dal viaggio più vecchio al più recente). Avendo a
// disposizione solo l'anno (preso dal nome della cartella), i viaggi dello
// stesso anno sono semplicemente in sequenza.
const TRIPS = [
  {
    slug: "parigi-2024",
    name: "Parigi",
    folder: "Parigi 2024",
    description:
      "Musei, ponti sulla Senna e caffè agli angoli delle strade. La Ville Lumière tra grandi viali e piccoli dettagli quotidiani.",
    images: [
      "IMG_5504.webp",
      "IMG_5510.webp",
      "IMG_5531.webp",
      "IMG_5535.webp",
      "IMG_5559.webp",
      "IMG_5584.webp",
      "IMG_5675.webp",
      "IMG_5683.webp",
      "IMG_5745.webp",
      "IMG_5806.webp",
      "IMG_5821.webp",
      "IMG_5857.webp",
      "IMG_5859.webp",
      "IMG_5886.webp",
      "IMG_5992.webp",
      "IMG_6001.webp",
      "IMG_6085.webp",
      "IMG_6097.webp",
    ],
  },
  {
    slug: "tenerife-2024",
    name: "Tenerife",
    folder: "Tenerife 2024",
    description:
      "Vulcani neri, coste selvagge e foreste di laurisilva. Le Canarie tra spiagge di sabbia scura e il Teide che domina l'isola.",
    images: [
      "D9902E3D-2AF5-4616-A029-1021468C1E3E.webp",
      "IMG_1697.webp",
      "IMG_1709.webp",
      "IMG_1761.webp",
      "IMG_1774.webp",
      "IMG_1776.webp",
      "IMG_1875.webp",
      "IMG_1878.webp",
      "IMG_1885.webp",
      "IMG_1907.webp",
      "IMG_1942.webp",
      "IMG_2017.webp",
      "IMG_2054.webp",
      "IMG_2281.webp",
      "IMG_2442.webp",
      "IMG_2445.webp",
    ],
  },
  {
    slug: "budapest-2025",
    name: "Budapest",
    folder: "Budapest 2025",
    description:
      "Terme fumanti, palazzi liberty sul Danubio e le luci del Parlamento la sera. Un weekend tra bagni termali e rovine trasformate in bar.",
    images: [
      "1F4AA862-1C3C-43BE-886A-9410244EBC89.webp",
      "D59EEE95-42EA-4E32-AB79-CE1B0D508776.webp",
      "FullSizeRender.webp",
      "IMG_6154.webp",
      "IMG_6301.webp",
      "IMG_7680.webp",
      "IMG_7712.webp",
      "IMG_7755.webp",
      "IMG_7767.webp",
      "IMG_7781.webp",
      "IMG_7852.webp",
      "IMG_7982.webp",
      "IMG_7999.webp",
      "IMG_8012.webp",
      "IMG_8118.webp",
      "IMG_8145.webp",
      "IMG_8185.webp",
      "IMG_8187.webp",
      "IMG_8285.webp",
    ],
  },
  {
    slug: "lago-aviolo-2025",
    name: "Lago Aviolo",
    folder: "Lago aviolo 2025",
    description:
      "Un lago alpino a quota 1900 metri, circondato da vette e silenzio. Escursione in Val Camonica tra acqua cristallina e aria sottile.",
    images: [
      "IMG_8392.webp",
      "IMG_8401.webp",
      "IMG_8443.webp",
      "IMG_8447.webp",
      "IMG_8457.webp",
      "IMG_8578.webp",
      "IMG_8669.webp",
      "IMG_8695.webp",
      "IMG_8758.webp",
      "IMG_8867.webp",
      "IMG_8914.webp",
    ],
  },
  {
    slug: "lefkada-2025",
    name: "Lefkada",
    folder: "Lefkada 2025",
    description:
      "Acque color smeraldo, spiagge incastonate tra le scogliere e villaggi bianchi sospesi sul mare Ionio. Un'isola greca fuori dal tempo.",
    images: [
      "IMG_3698.webp",
      "IMG_3762.webp",
      "IMG_4676.webp",
      "IMG_4750.webp",
      "IMG_5200.webp",
      "IMG_5218.webp",
      "IMG_5428.webp",
      "IMG_5615.webp",
      "IMG_5743.webp",
      "IMG_5810.webp",
      "IMG_5876.webp",
      "IMG_6701.webp",
    ],
  },
  {
    slug: "noli-2025",
    name: "Noli",
    folder: "Noli 2025",
    description:
      "Un borgo marinaro della Liguria, tra case colorate, il castello sulla scogliera e giornate lente sulla spiaggia.",
    images: [
      "IMG_2084.webp",
      "IMG_2087.webp",
      "IMG_2134.webp",
      "IMG_2188.webp",
      "IMG_2214.webp",
      "IMG_2399.webp",
      "IMG_2424.webp",
      "IMG_2472.webp",
      "IMG_2489.webp",
      "IMG_2513.webp",
      "IMG_2557.webp",
      "IMG_2589.webp",
      "IMG_2677.webp",
    ],
  },
  {
    slug: "fuerteventura-2026",
    name: "Fuerteventura",
    folder: "Fuerteventura 2026",
    description:
      "Dune infinite, vento atlantico e mare turchese. Un'isola quasi lunare, tra spiagge deserte e tramonti a picco sull'oceano.",
    images: [
      "IMG_0024.webp",
      "IMG_0041.webp",
      "IMG_0091.webp",
      "IMG_0100.webp",
      "IMG_0155.webp",
      "IMG_0355.webp",
      "IMG_0371.webp",
      "IMG_0734.webp",
      "IMG_0864.webp",
      "IMG_0931.webp",
      "IMG_0968.webp",
      "IMG_1016.webp",
      "IMG_1030.webp",
      "IMG_9450.webp",
      "IMG_9469.webp",
      "IMG_9892.webp",
      "IMG_9951.webp",
    ],
  },
  {
    slug: "roma-2026",
    name: "Roma",
    folder: "Roma 2026",
    description:
      "Rovine millenarie, fontane barocche e vicoli di Trastevere. La Città Eterna tra storia, luce dorata e vita di strada.",
    images: [
      "6F538282-110D-4950-9826-BAA03462DEC3.webp",
      "IMG_5466.webp",
      "IMG_5495.webp",
      "IMG_5557.webp",
      "IMG_5563.webp",
      "IMG_5627.webp",
      "IMG_5713.webp",
      "IMG_5738.webp",
      "IMG_5747.webp",
      "IMG_5789.webp",
      "IMG_5800.webp",
      "IMG_5834.webp",
      "IMG_5844.webp",
      "IMG_5863.webp",
      "IMG_5898.webp",
      "IMG_5953.webp",
      "IMG_6030.webp",
      "IMG_6080.webp",
    ],
  },
];

// Numero di immagini di ciascun viaggio mostrate nella galleria della home
const HOME_COVER_COUNT = 3;

/*
 * Genera l'elenco immagini di un viaggio a partire dai file reali in
 * /images/[folder]/. encodeURI gestisce gli spazi nei nomi delle cartelle.
 */
function getTripImages(trip) {
  return trip.images.map((filename, i) => ({
    src: encodeURI(`images/${trip.folder}/${filename}`),
    alt: `${trip.name} - foto ${i + 1}`,
  }));
}

// Restituisce un pool di immagini (poche per viaggio) da usare nella
// galleria mista della home, ognuna con riferimento al viaggio di
// appartenenza.
function getHomeGalleryImages() {
  const pool = [];
  TRIPS.forEach((trip) => {
    const images = getTripImages(trip).slice(0, HOME_COVER_COUNT);
    images.forEach((img) => {
      pool.push({
        ...img,
        tripSlug: trip.slug,
        tripName: trip.name,
      });
    });
  });
  return pool;
}

function getTripBySlug(slug) {
  return TRIPS.find((t) => t.slug === slug) || null;
}

// Viaggio precedente/successivo nell'elenco, con wrap-around circolare
// così ci sono sempre entrambi i link anche ai bordi dell'elenco.
function getAdjacentTrips(slug) {
  const index = TRIPS.findIndex((t) => t.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = TRIPS[(index - 1 + TRIPS.length) % TRIPS.length];
  const next = TRIPS[(index + 1) % TRIPS.length];
  return { prev, next };
}

/*
 * Costruisce i tre menu del sito e li inserisce nelle pagine:
 * - #nav-links: lista verticale dei soli luoghi, nella sidebar desktop
 *   sotto al nome del sito.
 * - #mobile-nav-links: "Gallery" + elenco luoghi, dentro il pannello
 *   mobile aperto dall'hamburger.
 * - #gallery-link: il singolo link "Gallery" fisso in alto a destra
 *   (desktop), evidenziato quando si è in home.
 * activeId è "home" per index.html, oppure lo slug del viaggio corrente
 * (null se lo slug non esiste).
 */
function renderNav(activeId) {
  const placesLinks = TRIPS.map((t) => {
    const isActive = t.slug === activeId;
    return `<li><a href="trip.html?trip=${t.slug}" class="nav-place${
      isActive ? " nav-place-active" : ""
    }"${isActive ? ' aria-current="page"' : ""}>${t.name}</a></li>`;
  }).join("");

  const isHome = activeId === "home";
  const mobileLinks =
    `<li><a href="index.html" class="nav-place${
      isHome ? " nav-place-active" : ""
    }"${isHome ? ' aria-current="page"' : ""}>Gallery</a></li>` + placesLinks;

  const nameLinks = document.querySelectorAll(".site-name-link");
  nameLinks.forEach((el) => {
    el.textContent = SITE.name;
  });

  const desktopNav = document.getElementById("nav-links");
  if (desktopNav) desktopNav.innerHTML = placesLinks;

  const mobileNav = document.getElementById("mobile-nav-links");
  if (mobileNav) mobileNav.innerHTML = mobileLinks;

  const galleryLink = document.getElementById("gallery-link");
  if (galleryLink) galleryLink.classList.toggle("nav-place-active", isHome);
}
