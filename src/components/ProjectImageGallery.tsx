
import "../styles/project-image-gallery.css";

interface ProjectScreenshot {
  id: string;
  title: string;
  description: string;
  image: string;
  layout: "wide" | "half";
}

const screenshots: ProjectScreenshot[] = [
  {
    id: "homepage",
    title: "IRES Homepage",
    description:
      "The main landing page introducing the AI-powered interview experience.",
    image: "/images/ires/ires-home.png",
    layout: "wide",
  },
  {
    id: "workflow",
    title: "How IRES Works",
    description:
      "The four-stage journey from resume upload to interview evaluation.",
    image: "/images/ires/ires-workflow.png",
    layout: "wide",
  },
  {
    id: "features",
    title: "Product Features",
    description:
      "Resume intelligence, adaptive interviews, voice interaction, and evaluation.",
    image: "/images/ires/ires-features.png",
    layout: "wide",
  },
  {
    id: "resume-upload",
    title: "Resume Upload",
    description:
      "The interface for uploading a candidate's PDF resume.",
    image: "/images/ires/ires-resume-upload.png",
    layout: "half",
  },
  {
    id: "role-selection",
    title: "Target Role Selection",
    description:
      "Selecting a professional role to personalize the interview.",
    image: "/images/ires/ires-role-selection.png",
    layout: "half",
  },
  {
    id: "interview",
    title: "Live Interview Session",
    description:
      "The interview interface with generated questions and voice or text responses.",
    image: "/images/ires/ires-interview-session.png",
    layout: "wide",
  },
  {
    id: "evaluation",
    title: "Interview Evaluation",
    description:
      "The evaluation dashboard showing scores, strengths, areas for growth, and actionable tips.",
    image: "/images/ires/ires-evaluation-results.png",
    layout: "wide",
  },
];

function ProjectImageGallery() {
  return (
    <section
      className="project-gallery"
      aria-labelledby="project-gallery-heading"
    >

      <div className="gallery-heading">

        <span className="gallery-eyebrow">
          PRODUCT INTERFACE / 07 SCREENS
        </span>

        <h3 id="project-gallery-heading">
          Inside the product.
        </h3>

        <p>
          An overview of the IRES interface, user journey,
          interview experience, and evaluation workflow.
        </p>

      </div>


      <div className="gallery-grid">

        {screenshots.map((screenshot, index) => (

          <figure
            key={screenshot.id}
            className={`gallery-item gallery-item--${screenshot.layout}`}
          >

            {/* IMAGE TITLE ABOVE THE IMAGE */}

            <figcaption className="gallery-caption">

              <div className="gallery-caption-content">

                <span>
                  SCREEN {String(index + 1).padStart(2, "0")}
                </span>

                <h4>{screenshot.title}</h4>

                <p>{screenshot.description}</p>

              </div>

              <span className="gallery-open-icon">
                ↗
              </span>

            </figcaption>


            {/* ORIGINAL IMAGE */}

            <a
              href={screenshot.image}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-image-link"
              aria-label={`Open original screenshot: ${screenshot.title}`}
            >

              <img
                src={screenshot.image}
                alt={screenshot.title}
                loading="lazy"
              />

            </a>

          </figure>

        ))}

      </div>

    </section>
  );
}

export default ProjectImageGallery;
