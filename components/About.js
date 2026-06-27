const stats = [
  { value: "$12B+", label: "Assets Managed" },
  { value: "18", label: "Global Offices" },
  { value: "40+", label: "Countries" },
  { value: "200+", label: "Partners" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <p>
          ROMAN is a global investment and advisory group operating at the
          intersection of capital, technology and infrastructure. For over two
          decades we have backed founders, governments and institutions with the
          conviction and reach to turn ambition into lasting impact.
        </p>
        <p>
          Our integrated platform spans private equity, real estate, venture and
          strategic advisory — delivered by local teams in the world&apos;s most
          dynamic markets. We move with the discipline of an institution and the
          agility of an entrepreneur.
        </p>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
