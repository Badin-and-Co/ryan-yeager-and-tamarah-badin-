const guestQuery = window.location.search || "";
const backLinks = [
  document.getElementById("backToInvitation"),
  document.getElementById("bottomBackToInvitation")
];

backLinks.forEach((link) => {
  if (link) link.href = "index.html" + guestQuery;
});

const cityGuide = [
  {
    city: "Conroe",
    subtitle: "Closest to Iron Manor",
    background: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    hotels: [
      {
        name: "Holiday Inn Express & Suites Conroe I-45 North by IHG",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+%26+Suites+Conroe+I-45+North"
      },
      {
        name: "Hyatt Regency Conroe",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Conroe+1001+Grand+Central+Parkway"
      }
    ],
    experiences: [
      { name: "Lake Conroe", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Lake+Conroe+Texas" },
      { name: "Historic Downtown Conroe", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Historic+Downtown+Conroe" },
      { name: "7 Acre Wood", image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=7+Acre+Wood+Conroe+TX" },
      { name: "Heritage Museum of Montgomery County", image: "heritage.png", map: "https://www.google.com/maps/search/?api=1&query=Heritage+Museum+of+Montgomery+County" },
      { name: "B-52 Brewing Co.", image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=B-52+Brewing+Conroe+TX" }
    ],
    restaurants: [
      { name: "Amore Fine Dining & Spirits", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Amore+Fine+Dining+%26+Spirits+Montgomery+TX" },
      { name: "Walden Yacht Club", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Walden+Yacht+Club+Montgomery+TX" },
      { name: "Red Brick Tavern", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Red+Brick+Tavern+Conroe+TX" },
      { name: "Pacific Yard House", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Pacific+Yard+House+Conroe+TX" }
    ]
  },
  {
    city: "Spring / The Woodlands",
    subtitle: "Beautiful middle point",
    background: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    hotels: [
      {
        name: "The Woodlands Waterway Marriott Hotel & Convention Center",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Waterway+Marriott+Hotel+%26+Convention+Center"
      },
      {
        name: "Hampton Inn & Suites by Hilton Shenandoah The Woodlands",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+%26+Suites+by+Hilton+Shenandoah+The+Woodlands"
      }
    ],
    experiences: [
      { name: "The Woodlands Waterway", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Waterway" },
      { name: "Market Street The Woodlands", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Market+Street+The+Woodlands" },
      { name: "The Woodlands Mall", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Mall" },
      { name: "Cynthia Woods Mitchell Pavilion", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Cynthia+Woods+Mitchell+Pavilion" },
      { name: "Old Town Spring", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Old+Town+Spring+Texas" }
    ],
    restaurants: [
      { name: "TRIS", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=TRIS+The+Woodlands+TX" },
      { name: "Truluck's Ocean's Finest Seafood & Crab", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Truluck%27s+The+Woodlands+TX" },
      { name: "Perry's Steakhouse & Grille", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Perry%27s+Steakhouse+The+Woodlands+TX" },
      { name: "Fielding's Local Kitchen + Bar", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Fielding%27s+Local+Kitchen+%2B+Bar+The+Woodlands+TX" }
    ]
  },
  {
    city: "Houston",
    subtitle: "City restaurants & events",
    background: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&w=1400&q=80",
    hotels: [
      {
        name: "Hyatt Regency Houston Downtown",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Houston+Downtown+1200+Louisiana+Street"
      },
      {
        name: "Holiday Inn Houston Downtown",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
        map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Houston+Downtown+1616+Main+Street"
      }
    ],
    experiences: [
      { name: "Houston Museum District", image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Houston+Museum+District" },
      { name: "Discovery Green", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Discovery+Green+Houston" },
      { name: "POST Houston", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=POST+Houston" },
      { name: "Theater District Houston", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Houston+Theater+District" },
      { name: "Houston Zoo / Hermann Park", image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Houston+Zoo+Hermann+Park" }
    ],
    restaurants: [
      { name: "MARCH", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=MARCH+Restaurant+Houston+TX" },
      { name: "BCN Taste & Tradition", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=BCN+Taste+%26+Tradition+Houston+TX" },
      { name: "Le Jardinier", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Le+Jardinier+Houston+TX" },
      { name: "Brenner's on the Bayou", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80", map: "https://www.google.com/maps/search/?api=1&query=Brenner%27s+on+the+Bayou+Houston+TX" }
    ]
  }
];

function compactRow(item) {
  return `
    <article class="compact-place-row">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <a class="mini-button" href="${item.map}" target="_blank">Directions</a>
      </div>
    </article>
  `;
}

function renderCityExplorer() {
  const container = document.getElementById("cityExplorer");
  if (!container) return;

  container.innerHTML = cityGuide.map((city, index) => `
    <article class="city-choice ${index === 2 ? "houston-choice" : ""}" style="--city-bg:url('${city.background}')">
      <button type="button" class="city-cover" aria-expanded="false">
        <span>${city.subtitle}</span>
        <h3>${city.city}</h3>
        <small>Tap to view guide</small>
      </button>

      <div class="city-panel hidden">
        <div class="guide-tabs" role="tablist" aria-label="${city.city} guide categories">
          <button type="button" class="guide-tab active" data-tab="hotels">Hotels</button>
          <button type="button" class="guide-tab" data-tab="experiences">Experiences</button>
          <button type="button" class="guide-tab" data-tab="restaurants">Restaurants</button>
        </div>

        <div class="guide-content active" data-content="hotels">
          ${city.hotels.map(compactRow).join("")}
        </div>
        <div class="guide-content" data-content="experiences">
          ${city.experiences.map(compactRow).join("")}
        </div>
        <div class="guide-content" data-content="restaurants">
          ${city.restaurants.map(compactRow).join("")}
        </div>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".city-cover").forEach((cover) => {
    cover.addEventListener("click", () => {
      const card = cover.closest(".city-choice");
      const panel = card.querySelector(".city-panel");
      const expanded = !panel.classList.contains("hidden");
      panel.classList.toggle("hidden", expanded);
      cover.setAttribute("aria-expanded", String(!expanded));
    });
  });

  container.querySelectorAll(".guide-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const panel = tab.closest(".city-panel");
      const target = tab.dataset.tab;

      panel.querySelectorAll(".guide-tab").forEach((btn) => btn.classList.remove("active"));
      panel.querySelectorAll(".guide-content").forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      panel.querySelector(`[data-content="${target}"]`).classList.add("active");
    });
  });
}

renderCityExplorer();

const mapPoints = [
  { name: "Iron Manor", type: "Wedding Venue", lat: 30.388, lng: -95.676, map: "https://www.google.com/maps/search/?api=1&query=Iron+Manor+13570+Forest+Ln+Montgomery+TX" },
  { name: "IAH Airport", type: "Airport", lat: 29.9902, lng: -95.3368, map: "https://www.google.com/maps/search/?api=1&query=George+Bush+Intercontinental+Airport" },
  { name: "Hobby Airport", type: "Airport", lat: 29.6454, lng: -95.2789, map: "https://www.google.com/maps/search/?api=1&query=William+P+Hobby+Airport" },

  { name: "Holiday Inn Express & Suites Conroe I-45 North", type: "Hotel", lat: 30.341, lng: -95.484, map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Express+%26+Suites+Conroe+I-45+North" },
  { name: "Hyatt Regency Conroe", type: "Hotel", lat: 30.281, lng: -95.468, map: "https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Conroe+1001+Grand+Central+Parkway" },
  { name: "The Woodlands Waterway Marriott", type: "Hotel", lat: 30.160, lng: -95.461, map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Waterway+Marriott" },
  { name: "Hampton Inn & Suites Shenandoah The Woodlands", type: "Hotel", lat: 30.185, lng: -95.455, map: "https://www.google.com/maps/search/?api=1&query=Hampton+Inn+%26+Suites+Shenandoah+The+Woodlands" },
  { name: "Hyatt Regency Houston Downtown", type: "Hotel", lat: 29.756, lng: -95.369, map: "https://www.google.com/maps/search/?api=1&query=Hyatt+Regency+Houston+Downtown" },
  { name: "Holiday Inn Houston Downtown", type: "Hotel", lat: 29.750, lng: -95.370, map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Houston+Downtown" },

  { name: "Lake Conroe", type: "Things To Do", lat: 30.423, lng: -95.616, map: "https://www.google.com/maps/search/?api=1&query=Lake+Conroe+Texas" },
  { name: "Historic Downtown Conroe", type: "Things To Do", lat: 30.311, lng: -95.456, map: "https://www.google.com/maps/search/?api=1&query=Historic+Downtown+Conroe" },
  { name: "7 Acre Wood", type: "Things To Do", lat: 30.362, lng: -95.489, map: "https://www.google.com/maps/search/?api=1&query=7+Acre+Wood+Conroe+TX" },
  { name: "Heritage Museum of Montgomery County", type: "Things To Do", lat: 30.326, lng: -95.463, map: "https://www.google.com/maps/search/?api=1&query=Heritage+Museum+of+Montgomery+County" },
  { name: "B-52 Brewing Co.", type: "Things To Do", lat: 30.351, lng: -95.455, map: "https://www.google.com/maps/search/?api=1&query=B-52+Brewing+Conroe+TX" },
  { name: "The Woodlands Waterway", type: "Things To Do", lat: 30.160, lng: -95.461, map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Waterway" },
  { name: "Market Street The Woodlands", type: "Things To Do", lat: 30.164, lng: -95.463, map: "https://www.google.com/maps/search/?api=1&query=Market+Street+The+Woodlands" },
  { name: "The Woodlands Mall", type: "Things To Do", lat: 30.164, lng: -95.455, map: "https://www.google.com/maps/search/?api=1&query=The+Woodlands+Mall" },
  { name: "Cynthia Woods Mitchell Pavilion", type: "Things To Do", lat: 30.161, lng: -95.465, map: "https://www.google.com/maps/search/?api=1&query=Cynthia+Woods+Mitchell+Pavilion" },
  { name: "Old Town Spring", type: "Things To Do", lat: 30.079, lng: -95.418, map: "https://www.google.com/maps/search/?api=1&query=Old+Town+Spring+Texas" },
  { name: "Houston Museum District", type: "Things To Do", lat: 29.725, lng: -95.390, map: "https://www.google.com/maps/search/?api=1&query=Houston+Museum+District" },
  { name: "Discovery Green", type: "Things To Do", lat: 29.754, lng: -95.359, map: "https://www.google.com/maps/search/?api=1&query=Discovery+Green+Houston" },
  { name: "POST Houston", type: "Things To Do", lat: 29.767, lng: -95.365, map: "https://www.google.com/maps/search/?api=1&query=POST+Houston" },
  { name: "Theater District Houston", type: "Things To Do", lat: 29.762, lng: -95.366, map: "https://www.google.com/maps/search/?api=1&query=Houston+Theater+District" },
  { name: "Houston Zoo / Hermann Park", type: "Things To Do", lat: 29.715, lng: -95.390, map: "https://www.google.com/maps/search/?api=1&query=Houston+Zoo+Hermann+Park" },

  { name: "Amore Fine Dining & Spirits", type: "Restaurant", lat: 30.388, lng: -95.696, map: "https://www.google.com/maps/search/?api=1&query=Amore+Fine+Dining+%26+Spirits+Montgomery+TX" },
  { name: "Walden Yacht Club", type: "Restaurant", lat: 30.392, lng: -95.613, map: "https://www.google.com/maps/search/?api=1&query=Walden+Yacht+Club+Montgomery+TX" },
  { name: "Red Brick Tavern", type: "Restaurant", lat: 30.310, lng: -95.456, map: "https://www.google.com/maps/search/?api=1&query=Red+Brick+Tavern+Conroe+TX" },
  { name: "Pacific Yard House", type: "Restaurant", lat: 30.311, lng: -95.457, map: "https://www.google.com/maps/search/?api=1&query=Pacific+Yard+House+Conroe+TX" },
  { name: "TRIS", type: "Restaurant", lat: 30.166, lng: -95.463, map: "https://www.google.com/maps/search/?api=1&query=TRIS+The+Woodlands+TX" },
  { name: "Truluck's The Woodlands", type: "Restaurant", lat: 30.169, lng: -95.470, map: "https://www.google.com/maps/search/?api=1&query=Truluck%27s+The+Woodlands+TX" },
  { name: "Perry's Steakhouse The Woodlands", type: "Restaurant", lat: 30.163, lng: -95.462, map: "https://www.google.com/maps/search/?api=1&query=Perry%27s+Steakhouse+The+Woodlands+TX" },
  { name: "Fielding's Local Kitchen + Bar", type: "Restaurant", lat: 30.181, lng: -95.539, map: "https://www.google.com/maps/search/?api=1&query=Fielding%27s+Local+Kitchen+%2B+Bar+The+Woodlands+TX" },
  { name: "MARCH", type: "Restaurant", lat: 29.738, lng: -95.389, map: "https://www.google.com/maps/search/?api=1&query=MARCH+Restaurant+Houston+TX" },
  { name: "BCN Taste & Tradition", type: "Restaurant", lat: 29.741, lng: -95.391, map: "https://www.google.com/maps/search/?api=1&query=BCN+Taste+%26+Tradition+Houston+TX" },
  { name: "Le Jardinier Houston", type: "Restaurant", lat: 29.725, lng: -95.390, map: "https://www.google.com/maps/search/?api=1&query=Le+Jardinier+Houston+TX" },
  { name: "Brenner's on the Bayou", type: "Restaurant", lat: 29.762, lng: -95.421, map: "https://www.google.com/maps/search/?api=1&query=Brenner%27s+on+the+Bayou+Houston+TX" },

  { name: "Houston Rodeo BBQ Contest at NRG Park", type: "Weekend Event", lat: 29.6847, lng: -95.4107, map: "https://www.google.com/maps/search/?api=1&query=NRG+Park+Houston+TX" },
  { name: "The Woodlands Marathon at Town Green Park", type: "Weekend Event", lat: 30.1617, lng: -95.4647, map: "https://www.google.com/maps/search/?api=1&query=Town+Green+Park+The+Woodlands+TX" }
];

const markerColors = {
  "Wedding Venue": "#b64036",
  "Hotel": "#5f7f4f",
  "Things To Do": "#4f7897",
  "Airport": "#8a5f3d",
  "Weekend Event": "#c27a32",
  "Restaurant": "#7b5a88"
};

function markerIcon(type) {
  const color = markerColors[type] || "#4b4438";

  return L.divIcon({
    className: "custom-map-marker",
    html: `<span style="background:${color}"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -13]
  });
}

function addTileLayer(map) {
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap"
  }).addTo(map);
}

function addPointsToMap(map, points, fitPadding = 0.18) {
  const group = L.featureGroup();

  points.forEach((point) => {
    const marker = L.marker([point.lat, point.lng], { icon: markerIcon(point.type) }).addTo(map);
    marker.bindPopup(`
      <strong>${point.name}</strong><br>
      ${point.type}<br>
      <a href="${point.map}" target="_blank">Open directions</a>
    `);
    group.addLayer(marker);
  });

  if (points.length > 1) {
    map.fitBounds(group.getBounds().pad(fitPadding));
  }
}

if (window.L) {
  const ironOnlyContainer = document.getElementById("ironOnlyMap");
  const travelMapContainer = document.getElementById("travelMap");
  const ironManorPoint = mapPoints.find((point) => point.name === "Iron Manor");

  if (ironOnlyContainer && ironManorPoint) {
    const ironMap = L.map("ironOnlyMap", { scrollWheelZoom: false }).setView([ironManorPoint.lat, ironManorPoint.lng], 12);
    addTileLayer(ironMap);
    addPointsToMap(ironMap, [ironManorPoint]);
  }

  if (travelMapContainer) {
    const travelMap = L.map("travelMap", { scrollWheelZoom: false }).setView([30.05, -95.47], 9);
    addTileLayer(travelMap);
    addPointsToMap(travelMap, mapPoints);
  }
}

const backToInvitation = document.getElementById("backToInvitation");

if (backToInvitation) {
  backToInvitation.addEventListener("click", function (e) {
    e.preventDefault();

    const currentQuery = window.location.search;

    window.location.href = "index.html" + currentQuery + "#accommodations";
  });
}
