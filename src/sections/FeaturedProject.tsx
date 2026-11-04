import "../styles/featured-project.css";

import { featuredProject } from "../data/projects";

function FeaturedProject() {
  return (
    <section className="featured-project-section" id="work">

      {/* Section Heading */}

      <div className="section-eyebrow">
        <span>01</span>
        SELECTED PROJECT
      </div>

      <div className="featured-project-heading">

        <div>
          <h2>
            Selected Work<span>.</span>
          </h2>

          <p className="featured-project-intro">
            A closer look at a product built around
            artificial intelligence, interview preparation,
            and interactive user experiences.
          </p>
        </div>

        <span className="featured-project-count">
          01 / 01 PROJECT
        </span>

      </div>


      {/* Project Card */}

      <article className="featured-project-card">

        {/* Project Metadata */}

        <div className="featured-project-meta">
          <span>FEATURED PROJECT / 001</span>
          <span>{featuredProject.year}</span>
        </div>


        {/* Project Visual */}

        <div className="featured-project-visual">

          <div className="featured-visual-header">

            <div className="featured-visual-brand">
              <span className="featured-visual-dot" />
              IRES INTERVIEW WORKSPACE
            </div>

            <span className="featured-visual-status">
              AI POWERED EXPERIENCE
            </span>

          </div>


          <div className="featured-visual-main">

            <p className="featured-visual-eyebrow">
              {featuredProject.fullName.toUpperCase()}
            </p>

            <h3>
              {featuredProject.name}
              <span>.</span>
            </h3>

            <p className="featured-visual-subtitle">
              Prepare with purpose.
              Practice with intelligence.
            </p>


            <div className="featured-visual-divider" />


            <div className="featured-visual-metrics">

              <div>
                <span>01</span>
                <p>VOICE INTERACTION</p>
              </div>

              <div>
                <span>02</span>
                <p>ADAPTIVE QUESTIONS</p>
              </div>

              <div>
                <span>03</span>
                <p>RESPONSE EVALUATION</p>
              </div>

            </div>

          </div>

        </div>


        {/* Project Information */}

        <div className="featured-project-information">

          <div className="featured-project-title-block">

            <p className="featured-project-category">
              {featuredProject.category}
            </p>

            <h3>
              {featuredProject.fullName}
            </h3>

            <span className="featured-project-year">
              {featuredProject.year}
            </span>

          </div>


          <div className="featured-project-description">

            <h4>Project Overview</h4>

            <p>
              {featuredProject.overview}
            </p>

          </div>


          <div className="featured-project-description">

            <h4>My Contribution</h4>

            <p>
              {featuredProject.contribution}
            </p>

          </div>


          {/* Technologies */}

          <div className="featured-project-technologies">

            <h4>Technologies & Expertise</h4>

            <div className="featured-technology-list">

              {featuredProject.technologies.map((technology) => (
                <span key={technology.name}>
                  {technology.name}
                </span>
              ))}

            </div>

          </div>


          {/* Project Navigation */}

          <a
            href="#case-study"
            className="featured-project-link"
          >
            EXPLORE PROJECT CASE STUDY
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </article>


      {/* Core Capabilities */}

      <div className="featured-capabilities">

        <div className="featured-capabilities-heading">
          <h3>Core Product Capabilities</h3>

          <p>
            THE KEY FUNCTIONALITIES OF IRES
          </p>
        </div>


        <div className="featured-capabilities-grid">

          {featuredProject.features.map((feature, index) => (
            <article
              className="featured-capability-card"
              key={feature.id}
            >

              <span className="featured-capability-number">
                0{index + 1}
              </span>

              <h4>{feature.title}</h4>

              <p>{feature.description}</p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;
