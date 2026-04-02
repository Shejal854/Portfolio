import "../styles/sections/techstack.css";

const SKILLS = [
  { name: "React",        img: "/images/logos/react.svg"    },
  { name: "Node.js",      img: "/images/logos/node.svg"     },
  { name: "Tailwind CSS", img: "/images/logos/tailwind.svg" },
  { name: "Docker",       img: "/images/logos/docker.svg"   },
  { name: "GitHub",       img: "/images/logos/github.png"   },
  { name: "MongoDB",      img: "/images/logos/mongodb.svg"  },
  { name: "Postman",      img: "/images/logos/postman.svg"  },
  { name: "C++",          img: "/images/logos/c++.svg"      },
  { name: "C",            img: "/images/logos/c.svg"        },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="pf-divider" />
        <div className="skills-title">
          <span className="pf-title-sub">// skills &amp; tools</span>
          <h2 className="pf-title-heading">Tech Stack</h2>
        </div>

        <div className="pf-divider" />

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-item">
              <img
                src={skill.img}
                alt={skill.name}
                className="skill-img"
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;