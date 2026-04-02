import { useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "../styles/sections/project.css";


const SCROLL_OFFSET_PX = 380;

const PROJECTS = [
  {
    title:       "IP Dropper",
    desc:        "Real-time P2P file sharing using WebRTC with Socket.io-based signaling and device discovery.",
    tech:        ["React", "Node.js", "Express", "Socket.io", "WebRTC"],
    github:      "https://github.com/Shejal854/IP-dropper",
    number:      "01",
    accentColor: "#f59e0b",
    accentRgb:   "245,158,11",
    img:         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80",
    gradient:    "linear-gradient(135deg, #1a1200 0%, #2d1f00 50%, #0d0d0d 100%)",
    gradientOrb: "rgba(245,158,11,0.18)",
  },
  {
    title:       "SBI Backend System",
    desc:        "Banking backend API handling authentication, transactions, and full account management.",
    tech:        ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    github:      "https://github.com/Shejal854/bank-transaction-api",
    number:      "02",
    accentColor: "#6366f1",
    accentRgb:   "99,102,241",
    img:         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=640&q=80",
    gradient:    "linear-gradient(135deg, #080818 0%, #10102e 50%, #0d0d0d 100%)",
    gradientOrb: "rgba(99,102,241,0.18)",
  },
  {
    title:       "URL Shortener",
    desc:        "REST API for generating short links with redirection and basic click tracking.",
    tech:        ["Node.js", "Express.js", "MongoDB", "NanoID"],
    github:      "https://github.com/Shejal854/url-shortener-backend",
    number:      "03",
    accentColor: "#10b981",
    accentRgb:   "16,185,129",
    img:         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80",
    gradient:    "linear-gradient(135deg, #001510 0%, #002618 50%, #0d0d0d 100%)",
    gradientOrb: "rgba(16,185,129,0.18)",
  },
];

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ProjectCard({ p }) {
  return (
    <article
      className="proj__card"
      style={{ "--card-accent-rgb": p.accentRgb, "--card-accent-color": p.accentColor }}
    >
      <div className="proj__img-wrap">
        {p.img ? (
          <img src={p.img} alt={p.title} className="proj__img" />
        ) : (
          <div className="proj__placeholder" style={{ background: p.gradient }}>
            <div className="proj__placeholder-orb" style={{ background: p.gradientOrb }} />
            <div className="proj__placeholder-grid" aria-hidden="true" />
          </div>
        )}

        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj__arrow-link"
          aria-label={`Open ${p.title} on GitHub`}
        >
          <ArrowIcon />
        </a>

        <div className="proj__img-fade" />
      </div>

   
      <div className="proj__body">
        <div className="proj__title-row">
          <span className="proj__number">{p.number}</span>
          <h3 className="proj__title-text">{p.title}</h3>
        </div>

        <p className="proj__desc">{p.desc}</p>

        <div className="proj__tags">
          {p.tech.map((t) => <span key={t} className="pf-tag">{t}</span>)}
        </div>

        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj__source-link"
        >
          <GithubIcon />
          Source Code
        </a>
      </div>

      <div className="proj__bottom-line" />
    </article>
  );
}

export default function Project() {
  const scrollRef = useRef(null);

  const scrollLeft  = useCallback(() => scrollRef.current?.scrollBy({ left: -SCROLL_OFFSET_PX, behavior: "smooth" }), []);
  const scrollRight = useCallback(() => scrollRef.current?.scrollBy({ left:  SCROLL_OFFSET_PX, behavior: "smooth" }), []);

  useGSAP(() => {
    gsap.fromTo(
      ".proj__title > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      ".proj__card",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="projects" className="pf-section">
      <div className="pf-grid-bg" />
      <div className="pf-orb pf-orb--indigo-br" />
      <div className="pf-orb pf-orb--amber-tl" />

      <div className="pf-container">
        <div className="pf-divider" />

        <div className="proj__header-row">
          <div className="proj__title">
            <span className="pf-title-sub">// selected work</span>
            <h2 className="pf-title-heading">My Projects</h2>
          </div>
          <div className="proj__scroll-controls">
            <button className="pf-btn pf-btn--icon" onClick={scrollLeft}  aria-label="Scroll left">←</button>
            <button className="pf-btn pf-btn--icon" onClick={scrollRight} aria-label="Scroll right">→</button>
          </div>
        </div>

        <div className="pf-divider" />

        <div ref={scrollRef} className="pf-scroll-row proj__scroll-row">
          {PROJECTS.map((p) => <ProjectCard key={p.number} p={p} />)}
        </div>

        <div className="pf-more-strip">
          <div className="pf-more-strip__line pf-more-strip__line--left" />
          <span className="pf-more-strip__text">More projects coming soon</span>
          <div className="pf-more-strip__line pf-more-strip__line--right" />
        </div>
      </div>
    </section>
  );
}