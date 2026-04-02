import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "../styles/sections/experience.css";

const ACCENT_RGB = "245,158,11";

const EXPERIENCES_WRAPPER_STYLE = { display: "flex", flexDirection: "column", gap: 20 };
const EXPERIENCE_CARD_STYLE = { paddingLeft: 24 };
const EXPERIENCE_ACCENT_STYLE = { "--card-accent-rgb": ACCENT_RGB };

const GSAP_SELECTORS = {
  titleChildren: ".exp__title > *",
  cards: ".exp__card",
};

const GSAP_ANIMATION = {
  title: {
    from: { y: 30, opacity: 0 },
    to: { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" },
  },
  cards: {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.9, delay: 0.25, ease: "power3.out" },
  },
};

const EXPERIENCES = [
  {
    role:        "Open Source Contributor",
    org:         "GitHub",
    period:      "2025 – Present",
    type:        "Contribution",
    status:      "Active",
    description: "Contributed to real-world repositories, successfully merged pull requests, collaborated with global developers, and improved code quality and features across multiple projects.",
    tags:        ["Pull Requests", "Code Review", "Collaboration", "Open Source"],
  },
];


export default function Experience() {
  useGSAP(() => {
    gsap.fromTo(
      GSAP_SELECTORS.titleChildren,
      GSAP_ANIMATION.title.from,
      GSAP_ANIMATION.title.to
    );
    gsap.fromTo(
      GSAP_SELECTORS.cards,
      GSAP_ANIMATION.cards.from,
      GSAP_ANIMATION.cards.to
    );
  }, []);

  return (
    <section id="experience" className="pf-section">
      <div className="pf-grid-bg" />
      <div className="pf-orb pf-orb--amber-tl" />
      <div className="pf-orb pf-orb--indigo-br" />

      <div className="pf-container">
        <div className="pf-divider" />

        <div className="exp__title">
          <span className="pf-title-sub">// experience</span>
          <h2 className="pf-title-heading">Experience &amp; Contributions</h2>
        </div>

        <div className="pf-divider" />

        <div style={EXPERIENCES_WRAPPER_STYLE}>
          {EXPERIENCES.map((exp, i) => (
            <article key={i} className="pf-card exp__card" style={EXPERIENCE_CARD_STYLE}>
             
              <div className="pf-card__accent-line" style={EXPERIENCE_ACCENT_STYLE} />
              <div className="pf-card__corner-tr" />
              <div className="pf-card__corner-bl" />

              <div className="exp__card-inner">
                {/* Icon */}
                <div className="exp__icon">⬡</div>

                {/* Header */}
                <div className="exp__header">
                  <div className="exp__title-row">
                    <h3 className="exp__role">{exp.role}</h3>

                    <div className="pf-badge pf-badge--green">
                      <div className="pf-badge__dot" />
                      {exp.status}
                    </div>

                    <span className="exp__type-chip">{exp.type}</span>
                  </div>

                  <p className="exp__meta">
                    <span className="exp__org">{exp.org}</span>
                    <span className="exp__meta-dot">·</span>
                    <span>{exp.period}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="exp__desc">{exp.description}</p>

                {/* Tags */}
                <div className="exp__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="pf-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer strip */}
        <div className="pf-more-strip">
          <div className="pf-more-strip__line pf-more-strip__line--left" />
          <span className="pf-more-strip__text">More experience coming soon</span>
          <div className="pf-more-strip__line pf-more-strip__line--right" />
        </div>
      </div>
    </section>
  );
}