"use client";

import { useState } from "react";

const locations = [
  {
    name: "New York",
    top: "31%",
    left: "27%",
    role: "Office",
    address: ["1 Park Avenue", "New York, United States"],
    phone: "+1 212 000 0000",
    email: "newyork@prokopovic.com",
  },
  {
    name: "London",
    top: "23%",
    left: "46%",
    role: "Office",
    address: ["Mayfair, W1K", "London, United Kingdom"],
    phone: "+44 20 0000 0000",
    email: "london@prokopovic.com",
  },
  {
    name: "Dubai",
    top: "43%",
    left: "63%",
    role: "Headquarters",
    address: ["One Central, World Trade Centre", "Dubai, United Arab Emirates"],
    phone: "+971 4 000 0000",
    email: "dubai@prokopovic.com",
  },
  {
    name: "Singapore",
    top: "60%",
    left: "77%",
    role: "Office",
    address: ["Marina Bay", "Singapore"],
    phone: "+65 6000 0000",
    email: "singapore@prokopovic.com",
  },
  {
    name: "Hong Kong",
    top: "44%",
    left: "80%",
    role: "Office",
    address: ["Central District", "Hong Kong"],
    phone: "+852 0000 0000",
    email: "hongkong@prokopovic.com",
  },
  {
    name: "São Paulo",
    top: "74%",
    left: "35%",
    role: "Office",
    address: ["Av. Faria Lima", "São Paulo, Brazil"],
    phone: "+55 11 0000 0000",
    email: "saopaulo@prokopovic.com",
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
            <p>{active.phone}</p>
            <p>
              <a href={`mailto:${active.email}`}>{active.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
