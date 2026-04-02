import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import "../styles/sections/navbar.css";

export default function NavBar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,     setMenuOpen]     = useState(false);

 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const sections = navLinks.map(({ link }) =>
      document.querySelector(link)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">

         
          <a href="#hero" className="nav__logo" onClick={() => setMenuOpen(false)}>
            She<span className="nav__logo-accent">jal</span>
            <span className="nav__logo-dot" aria-hidden="true" />
          </a>

         
          <nav className="nav__desktop" aria-label="Primary navigation">
            <ul className="nav__links">
              {navLinks.map(({ link, name }) => {
                const sectionId = link.replace("#", "");
                const isActive  = activeSection === sectionId;
                return (
                  <li key={name}>
                    <a
                      href={link}
                      className={`nav__link ${isActive ? "nav__link--active" : ""}`}
                    >
                      {name}
                      <span className="nav__link-bar" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

         
          <div className="nav__actions">
            <a href="#contact" className="nav__cta">
              Contact me
              <span className="nav__cta-arrow">↗</span>
            </a>

            <button
              className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="nav__bar nav__bar--1" />
              <span className="nav__bar nav__bar--2" />
              <span className="nav__bar nav__bar--3" />
            </button>
          </div>
        </div>
      </header>

      
      <div
        className={`nav__drawer ${menuOpen ? "nav__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="nav__drawer-links">
            {navLinks.map(({ link, name }, i) => (
              <li
                key={name}
                className="nav__drawer-item"
                style={{ animationDelay: menuOpen ? `${i * 0.07}s` : "0s" }}
              >
                <a
                  href={link}
                  className="nav__drawer-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav__drawer-num">0{i + 1}</span>
                  {name}
                  <span className="nav__drawer-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__drawer-footer">
          <a href="#contact" className="nav__cta nav__cta--full" onClick={() => setMenuOpen(false)}>
            Contact me <span>↗</span>
          </a>
          <p className="nav__drawer-copy">© {new Date().getFullYear()} Shejal</p>
        </div>
      </div>

      
      {menuOpen && (
        <div
          className="nav__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}