"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Focus", href: "#features" },
  { label: "Presence", href: "#world" },
  { label: "Offices", href: "#offices" },
  { label: "Contact", href: "#offices" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <img src="/logo.png" alt="PROKOPOVIC Foundation" className="logo-img" />
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
