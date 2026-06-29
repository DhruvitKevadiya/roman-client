"use client";

import { useState } from "react";

const locations = [
  {
    name: "Panama",
    top: "45%",
    left: "23.7%",
    role: "Office",
    address: [
      "Trump Ocean Club / JW Marriott",
      "Calle Punta Colón, Punta Pacifica,",
      "San Francisco District",
      "Panama City 0801",
      "Panama",
    ],
    email: "hq_pa@prokopovic.com",
  },
  {
    name: "Zurich",
    top: "23.7%",
    left: "49.2%",
    role: "Office",
    address: ["Bahnhofstrasse 45", "8001 Zurich", "Switzerland"],
    email: "hq_ch@prokopovic.com",
  },
  {
    name: "Moscow",
    top: "19%",
    left: "57.6%",
    role: "Office",
    address: [
      "Federation Tower East",
      "12 Presnenskaya Embankment",
      "Moscow International",
      "Business Center (Moscow City)",
      "Moscow 123112",
      "Russia",
    ],
    email: "hq_ru@prokopovic.com",
  },
  {
    name: "Dubai",
    top: "36%",
    left: "62.7%",
    role: "Headquarters",
    address: [
      "Emirates Financial Towers",
      "Dubai International",
      "Financial Centre (DIFC)",
      "Dubai, P.O. Box 507006",
      "United Arab Emirates",
    ],
    email: "hq_ae@prokopovic.com",
  },
  {
    name: "Hong Kong",
    top: "37.6%",
    left: "79.7%",
    role: "Office",
    address: [
      "Two International Finance Centre",
      "8 Finance Street",
      "Central",
      "Hong Kong",
    ],
    email: "hq_hk@prokopovic.com",
  },
];

export default function WorldMap() {
  // default to the headquarters
  const [active, setActive] = useState(
    locations.find((l) => l.role === "Headquarters") || locations[0]
  );

  return (
    <section className="world" id="world">
      <div className="container">
        <div className="world-map">
          {locations.map((loc) => (
            <button
              type="button"
              key={loc.name}
              className={`location ${active.name === loc.name ? "active" : ""}`}
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActive(loc)}
              onFocus={() => setActive(loc)}
              onClick={() => setActive(loc)}
              aria-label={`Show ${loc.name} office details`}
            >
              {loc.name}
            </button>
          ))}

          <div
            className={`popup map-popup side-${
              parseFloat(active.left) > 55 ? "left" : "right"
            }`}
            style={{ top: active.top, left: active.left }}
            key={active.name}
          >
            <h4>
              {active.name} — {active.role}
            </h4>
            {active.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <p>
              <a href={`mailto:${active.email}`}>{active.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
