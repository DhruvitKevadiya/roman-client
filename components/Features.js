const features = [
  { icon: "ai", label: ["Artificial", "Intelligence"] },
  { icon: "leaf", label: ["Environmental", "Research"] },
  { icon: "globe", label: ["Land", "Exploration"] },
  { icon: "data", label: ["Data-Driven", "Innovation"] },
  { icon: "handshake", label: ["Global", "Partnerships"] },
];

function FeatureIcon({ name }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "#3fc6f0",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    // Brain / AI
    case "ai":
      return (
        <svg {...common}>
          <path d="M20 9 V31" />
          <path d="M20 11 C20 8 17.5 6 15 6 C12.5 6 11 8 11 10 C8.5 10 7 12 7.5 14.5 C5.5 15.5 5.5 18.5 7.5 19.5 C6.5 22 8 24.5 10.5 24.5 C10.5 27.5 13 29.5 15.5 28.5 C16.5 30.5 19 31 20 29" />
          <path d="M20 11 C20 8 22.5 6 25 6 C27.5 6 29 8 29 10 C31.5 10 33 12 32.5 14.5 C34.5 15.5 34.5 18.5 32.5 19.5 C33.5 22 32 24.5 29.5 24.5 C29.5 27.5 27 29.5 24.5 28.5 C23.5 30.5 21 31 20 29" />
          <path d="M13 15 H10 M27 15 H30 M14 21 H11 M26 21 H29" />
        </svg>
      );
    // Leaf
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 29 C9 19 16 9 31 9 C31 24 21 31 12 28" />
          <path d="M12 28 C16 22 22 17 28 14" />
        </svg>
      );
    // Globe
    case "globe":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="13" />
          <ellipse cx="20" cy="20" rx="5.5" ry="13" />
          <path d="M7.5 16 H32.5 M7.5 24 H32.5" />
        </svg>
      );
    // Bar chart with trend arrow
    case "data":
      return (
        <svg {...common}>
          <path d="M8 8 V31 H33" />
          <path d="M13 31 V24 M19 31 V20 M25 31 V26 M31 31 V17" />
          <path d="M14 20 L20 14 L24 17 L31 9" />
          <path d="M26 9 H31 V14" />
        </svg>
      );
    // Handshake
    case "handshake":
    default:
      return (
        <svg {...common}>
          <path d="M4 17 L12 15 L20 19" />
          <path d="M12 15 L12 26 L16 28" />
          <path d="M36 17 L28 15 L20 18" />
          <path d="M28 15 L28 26 L24 28 L18 25" />
          <path d="M20 19 L24 22 M18.5 21 L22.5 24" />
        </svg>
      );
  }
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-bar">
          {features.map((f, i) => (
            <div className="feature" key={f.icon}>
              <div className="feature-icon">
                <FeatureIcon name={f.icon} />
              </div>
              <div className="feature-label">
                {f.label.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
