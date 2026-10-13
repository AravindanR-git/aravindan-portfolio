import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "About", target: "about" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Journey", target: "timeline" },
  { name: "Contact", target: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#hero" onClick={closeMenu} aria-label="Aravindan Y, home">AY<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`} onClick={closeMenu}>{item.name}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
