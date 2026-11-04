
import { personalInfo } from "../data/personal";
import "../styles/about.css";

const focusAreas = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces and structured web experiences using modern frontend technologies.",
  },
  {
    number: "02",
    title: "Product & UX Thinking",
    description:
      "Focusing on usability, visual hierarchy, interaction design, and consistent digital experiences.",
  },
  {
    number: "03",
    title: "AI-Assisted Development",
    description:
      "Using AI tools to accelerate product exploration, development workflows, debugging, and iteration.",
  },
];

function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >

      {/* SECTION LABEL */}

      <div className="section-eyebrow">
        <span>04</span>
        ABOUT ME
      </div>


      {/* PROFESSIONAL INTRODUCTION */}

      <div className="about-header">

        <h2 id="about-heading">
          Building digital products.
          <span>Thinking beyond the interface.</span>
        </h2>

        <p className="about-introduction">
          {personalInfo.about}
        </p>

        <p className="about-summary">
          {personalInfo.professionalSummary}
        </p>

      </div>


      {/* PROFESSIONAL FOCUS AREAS */}

      <div className="about-focus-section">

        <div className="about-focus-heading">

          <span className="about-label">
            WHAT I FOCUS ON
          </span>

          <h3>
            Where technology meets experience.
          </h3>

        </div>


        <div className="about-focus-grid">

          {focusAreas.map((area) => (

            <article
              className="about-focus-card"
              key={area.number}
            >

              <span className="about-focus-number">
                {area.number}
              </span>

              <h4>{area.title}</h4>

              <p>{area.description}</p>

            </article>

          ))}

        </div>

      </div>


      {/* CLOSING STATEMENT */}

      <div className="about-closing">

        <p>
          Good products are not just built.
          They are thoughtfully designed,
          carefully engineered, and continuously improved.
        </p>

        <span>
          FRONTEND ENGINEERING × PRODUCT THINKING × UX
        </span>

      </div>

    </section>
  );
}

export default About;
