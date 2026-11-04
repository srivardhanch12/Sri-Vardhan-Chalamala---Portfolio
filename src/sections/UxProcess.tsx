import "../styles/ux-process.css";

const designStages = [
  {
    number: "01",
    title: "Resume Upload",
    description:
      "Candidates begin by providing their resume, establishing the professional context for the interview experience.",
  },
  {
    number: "02",
    title: "Role Selection",
    description:
      "Candidates select a relevant role so the interview experience can align with their intended career direction.",
  },
  {
    number: "03",
    title: "Voice Interview",
    description:
      "Candidates move into an interactive interview experience with domain-specific questions and voice-based responses.",
  },
  {
    number: "04",
    title: "Evaluation & Feedback",
    description:
      "The experience concludes with structured response evaluation, scoring, and personalized feedback.",
  },
];

const uxDecisions = [
  {
    number: "01",
    title: "Reduce interaction friction",
    description:
      "Keep the candidate journey structured, with a clear progression from preparation to interview and evaluation.",
  },
  {
    number: "02",
    title: "Make the next action clear",
    description:
      "Use understandable interface labels and a predictable sequence to help candidates navigate each stage.",
  },
  {
    number: "03",
    title: "Prioritize meaningful feedback",
    description:
      "Present evaluation as an important part of the experience, helping candidates understand their interview performance.",
  },
];

function UxProcess() {
  return (
    <section
      className="ux-process"
      id="ux-process"
      aria-labelledby="ux-process-title"
    >
      <div className="section-eyebrow">
        <span>03</span>
        UX DESIGN PROCESS
      </div>

      <div className="ux-process-header">
        <p className="ux-process-category">
          IRES / PRODUCT THINKING & USER EXPERIENCE
        </p>

        <h2 id="ux-process-title">
          Designing the experience around the candidate.
        </h2>

        <p className="ux-process-introduction">
          IRES brings interview preparation into a structured,
          interactive experience. The design approach focuses on
          simplifying the candidate journey, making interactions
          understandable, and connecting interview practice with
          meaningful evaluation.
        </p>
      </div>

      <div className="ux-context-grid">
        <article className="ux-context-card">
          <span className="ires-card-label">
            01 / PROBLEM & CONTEXT
          </span>

          <h3>
            Moving beyond static interview preparation.
          </h3>

          <p>
            Traditional question lists offer limited opportunities
            to practice spoken responses and understand interview
            performance. IRES addresses this product challenge
            through voice interaction, adaptive questioning, and
            structured feedback.
          </p>
        </article>

        <article className="ux-context-card">
          <span className="ires-card-label">
            02 / INTENDED USERS
          </span>

          <h3>
            Early-career candidates and job applicants.
          </h3>

          <p>
            The intended audience includes candidates preparing
            for job interviews who need a structured way to
            practice responses, experience interview-style
            interactions, and review performance feedback.
          </p>
        </article>
      </div>

      <div className="ux-journey-section">
        <div className="ux-subsection-heading">
          <div>
            <span className="ires-card-label">
              03 / USER JOURNEY
            </span>

            <h3>
              Four stages of the IRES experience.
            </h3>
          </div>

          <span className="ires-section-index">
            01 — 04
          </span>
        </div>

        <div className="ux-journey-grid">
          {designStages.map((stage) => (
            <article
              className="ux-journey-card"
              key={stage.number}
            >
              <span className="ux-journey-number">
                {stage.number}
              </span>

              <h4>{stage.title}</h4>

              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="ux-decisions-section">
        <span className="ires-card-label">
          04 / INTERACTION DESIGN
        </span>

        <h3>
          Making every interaction purposeful.
        </h3>

        <div className="ux-decisions-list">
          {uxDecisions.map((decision) => (
            <article
              className="ux-decision-item"
              key={decision.number}
            >
              <span>{decision.number}</span>

              <h4>{decision.title}</h4>

              <p>{decision.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="ux-design-grid">
        <article className="ux-design-card">
          <span className="ires-card-label">
            05 / VISUAL DESIGN DECISIONS
          </span>

          <h3>
            Clarity through visual hierarchy.
          </h3>

          <p>
            The interface design approach prioritizes readable
            content, consistent visual patterns, meaningful
            information grouping, and a clear distinction between
            primary actions and supporting information.
          </p>
        </article>

        <article className="ux-design-card">
          <span className="ires-card-label">
            06 / USABILITY CONSIDERATIONS
          </span>

          <h3>
            Designed for different screen sizes.
          </h3>

          <p>
            Responsive layouts, understandable labels, sufficient
            visual contrast, and predictable interactions are
            important considerations for making the interview
            experience easier to navigate.
          </p>
        </article>
      </div>

      <p className="ux-process-note">
        Design rationale documented from the IRES product workflow
        and implementation. These considerations are not presented
        as results of formal user research or usability testing.
      </p>
    </section>
  );
}

export default UxProcess;
