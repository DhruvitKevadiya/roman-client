"use client";

import { useState } from "react";

const locations = [
  {
    name: "Panama",
    top: "54%",
    left: "24%",
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
    top: "26%",
    left: "49%",
    role: "Office",
    address: ["Bahnhofstrasse 45", "8001 Zurich", "Switzerland"],
    email: "hq_ch@prokopovic.com",
  },
  {
    name: "Moscow",
    top: "20%",
    left: "57%",
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
    top: "43%",
    left: "63%",
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
    top: "44%",
    left: "80%",
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
        <h2 className="section-title">Our Global Presence</h2>

        <div className="world-map">
          {locations.map((loc) => (
            <button
              type="button"
              key={loc.name}
              className={`location ${active.name === loc.name ? "active" : ""}`}
              style={{ top: loc.top, left: loc.left }}
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
