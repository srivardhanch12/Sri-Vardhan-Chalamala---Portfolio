import "../styles/hero.css";

import { personalInfo } from "../data/personal";
import { featuredProject } from "../data/projects";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Hero Introduction */}

      <div className="hero-content">

       

        {/* Main Heading */}

        <h1 className="hero-title">
          Designing digital experiences.
          <span>
            Engineering intuitive interfaces.
          </span>
        </h1>


        {/* Introduction */}

       


        {/* Action Buttons */}

        <div className="hero-actions">

          <a
            href="#work"
            className="hero-primary-button"
          >
            Explore My Work
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={personalInfo.resumePath}
            className="hero-secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
            <span aria-hidden="true">↗</span>
          </a>

        </div>


        {/* Professional Focus */}

        <div className="hero-focus">

          <span>MY FOCUS</span>

          <div className="hero-focus-items">
            <span>Frontend Engineering</span>
            <span>Product Thinking</span>
            <span>UI / UX Design</span>
          </div>

        </div>

      </div>


      {/* Featured Project Preview */}

      <div className="hero-project-preview">

        <div className="hero-preview-top">
          <span>FEATURED PROJECT</span>
          <span>001 / 2026</span>
        </div>


        <div className="hero-preview-card">

          <div className="hero-preview-brand">
            <span className="hero-preview-indicator" />
            INTERVIEW WORKSPACE
            <span className="hero-preview-status">
              AI POWERED
            </span>
          </div>


          <div className="hero-preview-content">

            <p className="hero-preview-eyebrow">
              INTERVIEW RESPONSE & EVALUATION SYSTEM
            </p>

            <h2>
              {featuredProject.name}
              <span>.</span>
            </h2>

            <p className="hero-preview-description">
              {featuredProject.displayTitle}
            </p>

            <div className="hero-preview-divider" />


            <div className="hero-preview-features">

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
                <p>AI EVALUATION</p>
              </div>

            </div>

          </div>

        </div>


        <a
          href="#work"
          className="hero-preview-link"
        >
          DISCOVER THE PROJECT
          <span aria-hidden="true">↗</span>
        </a>

      </div>


      {/* Scroll Indicator */}

      <a
        href="#work"
        className="hero-scroll-indicator"
      >
        <span className="hero-scroll-line" />
        SCROLL TO EXPLORE
      </a>

    </section>
  );
}

export default Hero;
