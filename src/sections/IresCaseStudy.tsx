
import { featuredProject } from "../data/projects";
import ProjectImageGallery from "../components/ProjectImageGallery";
import "../styles/ires-case-study.css";

const interviewFlow = [
  {
    number: "01",
    title: "Domain-specific Questions",
    description:
      "The system generates adaptive interview questions based on different interview domains.",
  },
  {
    number: "02",
    title: "Voice Interaction",
    description:
      "Candidates interact with the interview system through real-time voice-based communication.",
  },
  {
    number: "03",
    title: "Response Evaluation",
    description:
      "The AI evaluates interview responses to support structured performance assessment.",
  },
  {
    number: "04",
    title: "Personalized Feedback",
    description:
      "The system provides personalized feedback and data-driven scoring across interview domains.",
  },
];

const designPrinciples = [
  {
    number: "01",
    title: "Realistic Interaction",
    description:
      "Create an interview experience that goes beyond static question-and-answer preparation.",
  },
  {
    number: "02",
    title: "Adaptive Experience",
    description:
      "Support domain-specific questioning to make the practice experience more relevant.",
  },
  {
    number: "03",
    title: "Actionable Feedback",
    description:
      "Make response evaluation and personalized feedback central to the interview experience.",
  },
];

function IresCaseStudy() {
  return (
    <section
      className="ires-case-study"
      id="case-study"
      aria-labelledby="ires-case-title"
    >

      {/* SECTION HEADER */}

      <div className="section-eyebrow">
        <span>02</span>
        PRODUCT CASE STUDY
      </div>


      {/* CASE STUDY INTRODUCTION */}

      <div className="ires-case-header">

        <p className="ires-case-category">
          {featuredProject.name} / PRODUCT DESIGN & ENGINEERING
        </p>

        <h2 id="ires-case-title">
          Rethinking the interview preparation experience.
        </h2>

        <p className="ires-case-introduction">
          {featuredProject.overview}
        </p>

        <a
          className="ires-prototype-button"
          href="https://www.figma.com/proto/KLqlhm7bGVu516Hk0Shakg/IRES-%E2%80%94-UX-Design---Product-Prototype?node-id=1-3359&t=vn0W8hP1HZj30r6r-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Interactive Prototype
        </a>

      </div>


      {/* PROJECT OVERVIEW */}

      <div className="ires-overview-grid">

        <article className="ires-overview-card">

          <span className="ires-card-label">
            THE PRODUCT
          </span>

          <h3>
            {featuredProject.name}
          </h3>

          <p>
            {featuredProject.fullName}
          </p>

          <span className="ires-overview-year">
            {featuredProject.year}
          </span>

        </article>


        <article className="ires-overview-card ires-overview-description">

          <span className="ires-card-label">
            PRODUCT OBJECTIVE
          </span>

          <h3>
            Beyond static interview preparation.
          </h3>

          <p>
            The objective is to simulate realistic interview
            experiences through voice interaction, adaptive
            questioning, instant response evaluation, and
            personalized feedback.
          </p>

        </article>

      </div>

      {/* ORIGINAL IRES APPLICATION SCREENSHOTS */}

      <ProjectImageGallery />

      {/* DESIGN CHALLENGE */}

      <div className="ires-design-challenge">

        <span className="ires-card-label">
          THE DESIGN CHALLENGE
        </span>

        <h3>
          How can interview practice become more interactive,
          adaptive, and feedback-driven?
        </h3>

        <p>
          The product design framing focuses on moving
          interview preparation beyond static question lists
          toward a more conversational experience with
          meaningful response evaluation.
        </p>

      </div>


      {/* INTERVIEW EXPERIENCE FLOW */}

      <div className="ires-flow-section">

        <div className="ires-subsection-heading">

          <div>
            <span className="ires-card-label">
              PRODUCT EXPERIENCE
            </span>

            <h3>
              How the experience works.
            </h3>
          </div>

          <span className="ires-section-index">
            01 — 04
          </span>

        </div>


        <div className="ires-flow-grid">

          {interviewFlow.map((step) => (
            <article
              className="ires-flow-card"
              key={step.number}
            >

              <div className="ires-flow-number">
                {step.number}
              </div>

              <h4>{step.title}</h4>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </div>


      {/* PRODUCT DESIGN PRINCIPLES */}

      <div className="ires-principles-section">

        <span className="ires-card-label">
          DESIGN THINKING
        </span>

        <h3>
          Principles behind the experience.
        </h3>

        <div className="ires-principles-list">

          {designPrinciples.map((principle) => (
            <article
              className="ires-principle-item"
              key={principle.number}
            >

              <span>{principle.number}</span>

              <h4>{principle.title}</h4>

              <p>{principle.description}</p>

            </article>
          ))}

        </div>

      </div>


      {/* ENGINEERING CONTRIBUTION */}

      <div className="ires-engineering-section">

        <div className="ires-engineering-heading">

          <span className="ires-card-label">
            ENGINEERING & IMPLEMENTATION
          </span>

          <h3>
            From AI workflows to an interactive product.
          </h3>

        </div>

        <p className="ires-engineering-description">
          {featuredProject.contribution}
        </p>


        <div className="ires-engineering-details">

          <div>
            <span>01 /</span>
            <p>
              Architected and deployed a live AI mock interview system.
            </p>
          </div>

          <div>
            <span>02 /</span>
            <p>
              Engineered advanced prompt workflows and LLM pipelines.
            </p>
          </div>

          <div>
            <span>03 /</span>
            <p>
              Developed adaptive domain-specific questioning workflows.
            </p>
          </div>

          <div>
            <span>04 /</span>
            <p>
              Supported personalized feedback and data-driven scoring.
            </p>
          </div>

        </div>

      </div>


      {/* TECHNOLOGY STACK */}

      <div className="ires-stack-section">

        <span className="ires-card-label">
          TECHNOLOGY & EXPERTISE
        </span>

        <h3>
          The tools behind IRES.
        </h3>

        <div className="ires-stack-list">

          {featuredProject.technologies.map((technology) => (
            <div
              className="ires-stack-item"
              key={technology.name}
            >

              <span>{technology.category}</span>

              <h4>{technology.name}</h4>

            </div>
          ))}

        </div>

      </div>


      {/* CASE STUDY NOTE */}

      <div className="ires-case-footer">

        <p>
          IRES demonstrates an approach to combining
          artificial intelligence, interactive experiences,
          and structured interview response evaluation.
        </p>

        <span>
          INTERVIEW RESPONSE & EVALUATION SYSTEM · 2026
        </span>

      </div>

    </section>
  );
}

export default IresCaseStudy;
