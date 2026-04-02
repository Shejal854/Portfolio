import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import "../styles/sections/hero.css";


const TYPE_ANIMATION_SEQUENCE = [
  "Coder", 1500,
  "Aspiring Software Engineer", 1500,
  "Full Stack Developer", 1500,
  "DSA Enthusiast", 1500,
];

const CODE_LINES = [
  { text: "const shejal = {",                      color: "#e2e8f0" },
  { text: '  role: "Full Stack Dev",',              color: "#94a3b8" },
  { text: '  passion: "Building things",',          color: "#94a3b8" },
  { text: '  stack: ["React", "Node", "MongoDB"],', color: "#94a3b8" },
  { text: '  status: "Open to Work 🟢",',           color: "#4ade80" },
  { text: "  dsa: true,",                           color: "#94a3b8" },
  { text: "};",                                     color: "#e2e8f0" },
  { text: "",                                       color: ""        },
  { text: "shejal.build();",                        color: "#f59e0b" },
];

const SKILL_CHIPS = [
  { label: "React",   x: "8%",  y: "18%", delay: "0s"   },
  { label: "Node.js", x: "72%", y: "12%", delay: "0.4s" },
  { label: "MongoDB", x: "80%", y: "72%", delay: "0.8s" },
  { label: "DSA",     x: "5%",  y: "75%", delay: "1.2s" },
  { label: "Express", x: "38%", y: "88%", delay: "0.6s" },
  { label: "Git",     x: "85%", y: "42%", delay: "1s"   },
];


const GSAP_SELECTORS = {
  textChildren: ".hero__text > *",
  rightPanel: ".hero__right",
};

const GSAP_ANIMATION = {
  text: {
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out" },
  },
  rightPanel: {
    from: { opacity: 0, scale: 0.96 },
    to: { opacity: 1, scale: 1, duration: 1.1, delay: 0.4, ease: "power3.out" },
  },
};


const TERMINAL_TIMING = {
  lineRevealMs: 220,
  cursorBlinkMs: 530,
};

function useTerminalTyping(totalLines) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  const isDone = visibleLines >= totalLines;

  useEffect(() => {
    if (isDone) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), TERMINAL_TIMING.lineRevealMs);
    return () => clearTimeout(t);
  }, [visibleLines, isDone]);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), TERMINAL_TIMING.cursorBlinkMs);
    return () => clearInterval(t);
  }, []);

  return { visibleLines, cursorOn, isDone };
}

function Terminal() {
  const { visibleLines, cursorOn, isDone } = useTerminalTyping(CODE_LINES.length);

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: "#ff5f57" }} />
        <span className="terminal__dot" style={{ background: "#ffbd2e" }} />
        <span className="terminal__dot" style={{ background: "#28c840" }} />
        <span className="terminal__filename">shejal.js</span>
      </div>

      <div className="terminal__body">
        <div className="terminal__numbers" aria-hidden="true">
          {CODE_LINES.map((_, i) => (
            <span key={i} style={{ opacity: i < visibleLines ? 0.3 : 0 }}>{i + 1}</span>
          ))}
        </div>

        <div className="terminal__code">
          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              className="terminal__line"
              style={{
                color:     line.color,
                opacity:   i < visibleLines ? 1 : 0,
                transform: i < visibleLines ? "translateY(0)" : "translateY(4px)",
              }}
            >
              {line.text || "\u00A0"}
              {i === visibleLines - 1 && !isDone && (
                <span className="terminal__cursor" style={{ opacity: cursorOn ? 1 : 0 }}>▋</span>
              )}
            </div>
          ))}

          {isDone && (
            <div className="terminal__line" style={{ color: "#4ade80", marginTop: 8 }}>
              <span style={{ color: "#64748b" }}>// </span>
              Ready to collaborate
              <span className="terminal__cursor" style={{ opacity: cursorOn ? 1 : 0 }}>▋</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Hero
export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      GSAP_SELECTORS.textChildren,
      GSAP_ANIMATION.text.from,
      GSAP_ANIMATION.text.to
    );
    gsap.fromTo(
      GSAP_SELECTORS.rightPanel,
      GSAP_ANIMATION.rightPanel.from,
      GSAP_ANIMATION.rightPanel.to
    );
  });

  return (
    <section id="hero" className="pf-section hero">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__layout">
        <header className="hero__left">
          <div className="hero__text">
            <div className="pf-badge pf-badge--green">
              <div className="pf-badge__dot" />
              Open to Work
            </div>

            <h1 className="hero__heading">
              Build.<br />
              <span className="hero__heading-accent">Learn.</span><br />
              Improve.
            </h1>

            <p className="hero__sub">
              Hi, I'm <span className="hero__sub-name">Shejal</span> —{" "}
              <span className="hero__type-text">
                <TypeAnimation
                  sequence={TYPE_ANIMATION_SEQUENCE}
                  speed={52}
                  repeat={Infinity}
                />
              </span>
            </p>

            <a href="https://drive.google.com/file/d/1WF-r7Akyu8XDSuqNIcPlocyvP0P3ChSi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hero__resume-btn">
              View Resume
              <span className="hero__resume-arrow">↗</span>
            </a>
          </div>
        </header>

       
        <figure className="hero__right" aria-hidden="true">
          <div className="hero__grid-bg" />
          <div className="hero__orb hero__orb--amber" />
          <div className="hero__orb hero__orb--indigo" />
          <div className="hero__orb hero__orb--green" />

          {SKILL_CHIPS.map((chip) => (
            <div
              key={chip.label}
              className="hero__chip"
              style={{ left: chip.x, top: chip.y, animationDelay: chip.delay }}
            >
              {chip.label}
            </div>
          ))}

          <Terminal />

          <div className="hero__corner hero__corner--tr" />
          <div className="hero__corner hero__corner--bl" />
        </figure>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}