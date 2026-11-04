
import {
  skillCategories,
  developmentFocus,
  coreKnowledge,
} from "../data/skills";

import "../styles/skills.css";

function Skills() {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-heading"
    >

      {/* SECTION HEADER */}

      <div className="section-eyebrow">
        <span>03</span>
        TECHNICAL CAPABILITIES
      </div>

      <div className="skills-heading">

        <h2 id="skills-heading">
          Tools, technologies
          <span> & capabilities.</span>
        </h2>

        <p>
          A combination of frontend engineering,
          AI development, and product-oriented thinking.
        </p>

      </div>


      {/* MAIN SKILL CATEGORIES */}

      <div className="skills-category-grid">

        {skillCategories.map((category) => (
          <article
            className="skills-category-card"
            key={category.id}
          >

            <div className="skills-category-header">

              <span className="skills-category-number">
                {category.id === "frontend" ? "01" :
                 category.id === "ai-engineering" ? "02" :
                 category.id === "development-tools" ? "03" : "04"}
              </span>

              <span className="skills-category-indicator">
                CAPABILITY
              </span>

            </div>


            <h3>{category.title}</h3>

            <p className="skills-category-description">
              {category.description}
            </p>


            <div className="skills-tag-list">

              {category.skills.map((skill) => (
                <span
                  className="skills-tag"
                  key={skill.name}
                >
                  {skill.name}
                </span>
              ))}

            </div>

          </article>
        ))}

      </div>


      {/* CURRENT DEVELOPMENT FOCUS */}

      <div className="skills-development-section">

        <div className="skills-development-heading">

          <div>
            <span className="skills-small-label">
              CONTINUOUS DEVELOPMENT
            </span>

            <h3>
              Currently strengthening.
            </h3>
          </div>

          <span className="skills-development-index">
            LEARNING / PRACTICE
          </span>

        </div>


        <p className="skills-development-description">
          Expanding my frontend engineering and product
          design capabilities through hands-on development
          and continuous experimentation.
        </p>


        <div className="skills-development-list">

          {developmentFocus.map((skill) => (
            <span
              className="skills-development-tag"
              key={skill.name}
            >
              <span className="skills-development-dot" />
              {skill.name}
            </span>
          ))}

        </div>

      </div>


      {/* COMPUTER SCIENCE FUNDAMENTALS */}

      <div className="skills-foundation-section">

        <span className="skills-small-label">
          ENGINEERING FOUNDATIONS
        </span>

        <h3>
          Core computer science knowledge.
        </h3>


        <div className="skills-foundation-list">

          {coreKnowledge.map((skill, index) => (
            <div
              className="skills-foundation-item"
              key={skill.name}
            >

              <span>
                0{index + 1}
              </span>

              <p>{skill.name}</p>

              <span className="skills-foundation-arrow">
                ↗
              </span>

            </div>
          ))}

        </div>

      </div>


      {/* SECTION FOOTER */}

      <div className="skills-section-footer">

        <p>
          Technology is a tool. Understanding the problem
          and creating the right experience is the objective.
        </p>

        <span>
          DESIGN THINKING × ENGINEERING
        </span>

      </div>

    </section>
  );
}

export default Skills;
