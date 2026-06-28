const offices = [
  {
    city: "PANAMA",
    icon: "panama",
    address: [
      "PROKOPOVIC Foundation",
      "Trump Ocean Club / JW Marriott",
      "Calle Punta Colón, Punta Pacifica,",
      "San Francisco District",
      "Panama City 0801",
      "Panama",
    ],
    email: "hq_pa@prokopovic.com",
  },
  {
    city: "ZURICH",
    icon: "zurich",
    address: [
      "PROKOPOVIC Foundation",
      "Bahnhofstrasse 45",
      "8001 Zurich",
      "Switzerland",
    ],
    email: "hq_ch@prokopovic.com",
  },
  {
    city: "MOSCOW",
    icon: "moscow",
    address: [
      "PROKOPOVIC Foundation",
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
    city: "DUBAI",
    icon: "dubai",
    address: [
      "PROKOPOVIC Foundation",
      "Emirates Financial Towers",
      "Dubai International",
      "Financial Centre (DIFC)",
      "Dubai, P.O. Box 507006",
      "United Arab Emirates",
    ],
    email: "hq_ae@prokopovic.com",
  },
  {
    city: "HONG KONG",
    icon: "hongkong",
    address: [
      "PROKOPOVIC Foundation",
      "Two International Finance Centre",
      "8 Finance Street",
      "Central",
      "Hong Kong",
    ],
    email: "hq_hk@prokopovic.com",
  },
];

function BuildingIcon({ name }) {
  const common = {
    width: 46,
    height: 74,
    viewBox: "0 0 46 74",
    fill: "none",
    stroke: "#e6eaee",
    strokeWidth: 1.1,
    strokeLinejoin: "round",
    strokeLinecap: "round",
  };

  switch (name) {
    // Tall slender sail-tower (Trump / Ocean Club)
    case "panama":
      return (
        <svg {...common}>
          <path d="M23 4 L23 72" />
          <path d="M17 16 C12 30 12 56 17 72" />
          <path d="M29 16 C34 30 34 56 29 72" />
          <path d="M17 16 L23 8 L29 16" />
          <path d="M17 28 H29 M17 40 H29 M17 52 H29 M17 64 H29" />
        </svg>
      );
    // Twin spired towers
    case "zurich":
      return (
        <svg {...common}>
          <path d="M13 72 L13 26 L18 26 L18 72" />
          <path d="M28 72 L28 26 L33 26 L33 72" />
          <path d="M13 26 L15.5 14 L18 26" />
          <path d="M28 26 L30.5 14 L33 26" />
          <path d="M15.5 14 L15.5 6 M30.5 14 L30.5 6" />
          <path d="M13 40 H18 M13 52 H18 M13 62 H18" />
          <path d="M28 40 H33 M28 52 H33 M28 62 H33" />
        </svg>
      );
    // Stepped Empire-State style tower
    case "moscow":
      return (
        <svg {...common}>
          <path d="M14 72 L14 34 L32 34 L32 72" />
          <path d="M18 34 L18 22 L28 22 L28 34" />
          <path d="M21 22 L21 12 L25 12 L25 22" />
          <path d="M23 12 L23 4" />
          <path d="M14 46 H32 M14 58 H32" />
          <path d="M18 28 H28" />
        </svg>
      );
    // Burj Al Arab sail
    case "dubai":
      return (
        <svg {...common}>
          <path d="M14 72 L14 22 C26 30 30 50 30 72" />
          <path d="M14 22 C14 22 22 10 23 4" />
          <path d="M23 4 L30 18" />
          <path d="M14 38 C20 40 24 50 25 56" />
          <path d="M14 54 C19 55 21 62 22 66" />
        </svg>
      );
    // Hong Kong IFC tower, notched stepped top
    case "hongkong":
    default:
      return (
        <svg {...common}>
          <path d="M16 72 L18 20 L28 20 L30 72" />
          <path d="M18 20 L18 14 L20 14 L20 20" />
          <path d="M22 20 L22 12 L24 12 L24 20" />
          <path d="M26 20 L26 14 L28 14 L28 20" />
          <path d="M22 12 L23 6 L24 12" />
          <path d="M17 34 H29 M17 46 H29 M17 58 H29" />
        </svg>
      );
  }
}

function Logo() {
  return (
    <div className="foot-brand">
      <img src="/logo.png" alt="PROKOPOVIC Foundation" className="foot-logo-img" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="offices">
      <div className="container">
        <div className="foot-grid">
          <Logo />

          {offices.map((o) => (
            <div className="foot-office" key={o.city}>
              <div className="foot-icon">
                <BuildingIcon name={o.icon} />
              </div>
              <h4 className="foot-city">{o.city}</h4>
              <div className="foot-address">
                {o.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <a className="foot-email" href={`mailto:${o.email}`}>
                {o.email}
              </a>
            </div>
          ))}
        </div>

        <div className="foot-copy">
          © 2027 PROKOPOVIC Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
