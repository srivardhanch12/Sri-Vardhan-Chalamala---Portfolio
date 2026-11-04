
import { personalInfo } from "../data/personal";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Personal profile">

      <div className="sidebar-content">

        {/* NAME AND PROFESSIONAL TITLE */}

        <div className="sidebar-introduction">

          <h1 className="sidebar-name">
            {personalInfo.name}
          </h1>

          <p className="sidebar-role">
            {personalInfo.professionalTitle}
          </p>

          <p className="sidebar-specialization">
            {personalInfo.specialization}
          </p>

        </div>


        {/* PROFILE DETAILS */}

        <div className="sidebar-divider" />

        <div className="sidebar-details">

          <div className="sidebar-detail-item">

            <span className="sidebar-label">
              BASED IN
            </span>

            <p>{personalInfo.location}</p>

          </div>


          <div className="sidebar-detail-item">

            <span className="sidebar-label">
              EDUCATION
            </span>

            <p>{personalInfo.education.university}</p>

            <small>
              {personalInfo.education.degree}
            </small>

          </div>


          <div className="sidebar-detail-item">

            <span className="sidebar-label">
              GRADUATION
            </span>

            <p>{personalInfo.education.graduation}</p>

          </div>

        </div>


        {/* SOCIAL LINKS */}

        <div className="sidebar-divider" />

        <div className="sidebar-socials">

          {personalInfo.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}

          <a href={`mailto:${personalInfo.email}`}>
            Email
            <span aria-hidden="true">↗</span>
          </a>

        </div>


        {/* RESUME BUTTON */}

        <a
          href={personalInfo.resumePath}
          className="sidebar-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW RESUME
          <span aria-hidden="true">↗</span>
        </a>

      </div>


      {/* SIDEBAR FOOTER */}

      <div className="sidebar-footer">

        <span>© 2026 VARDHAN</span>

        <span>DESIGNED WITH PURPOSE</span>

      </div>

    </aside>
  );
}

export default Sidebar;
