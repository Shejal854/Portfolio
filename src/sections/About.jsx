import "../styles/sections/about.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const FACTS = [
  { label: "Location", value: "Gwalior, MP" },
  { label: "Degree", value: "B.Tech EEE" },
  { label: "Focus", value: "Software Engineer" },
  { label: "Status", value: "Open to Work" },
];
export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".about__title > *, .about__bio p, .about__fact-row",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.75, ease: "power3.out" },
    );
  }, []);

  return (
    <section id="about" className="pf-section about-section">
      <div className="pf-grid-bg" />

      <div className="pf-container">
        <div className="pf-divider" />

        <div className="about__title">
          <span className="pf-title-sub">// about me</span>
          <h2 className="pf-title-heading">About Me.</h2>
        </div>

        <div className="pf-divider" />

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm <span className="about__highlight">Shejal Yadav</span>,a
              3rd-year Electrical and Electronics Engineering (EEE) student,
              focused on building a career in the software domain and actively
              seeking internship opportunities. I have strong skills in{" "}
              <span className="about__highlight">
                Data Structures &amp; Algorithms
              </span>{" "}
              and <span className="about__highlight">MERN stack</span>, with a
              focus on building scalable and user-friendly applications. I’m
              passionate about problem-solving, writing clean code, and
              continuously improving through real-world projects.
            </p>
          </div>

          <div className="about__facts">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="about__fact-row">
                <span className="about__fact-label">{label}</span>
                <span className="about__fact-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
