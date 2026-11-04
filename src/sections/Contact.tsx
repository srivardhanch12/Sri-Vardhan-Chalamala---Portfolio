
import { personalInfo } from "../data/personal";
import "../styles/contact.css";

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >

      {/* Section Heading */}

      <div className="section-eyebrow">
        <span>05</span>
        GET IN TOUCH
      </div>


      {/* Main Contact Content */}

      <div className="contact-content">

        <div className="contact-main">

          <span className="contact-label">
            LET'S CONNECT
          </span>

          <h2 id="contact-heading">
            Have an interesting idea?
            <span> Let's build something meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm interested in frontend engineering,
            product design, and creating intuitive
            digital experiences. Have an opportunity
            or an interesting project? Let's connect.
          </p>


          {/* Email Button */}

          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-primary-button"
          >
            Send me an email
            <span aria-hidden="true">↗</span>
          </a>

        </div>


        {/* Contact Information */}

        <div className="contact-information">

          <div className="contact-information-item">

            <span className="contact-information-label">
              EMAIL ADDRESS
            </span>

            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
              <span aria-hidden="true">↗</span>
            </a>

          </div>


          <div className="contact-information-item">

            <span className="contact-information-label">
              LOCATION
            </span>

            <p>{personalInfo.location}</p>

          </div>


          <div className="contact-information-item">

            <span className="contact-information-label">
              SOCIAL PROFILES
            </span>

            <div className="contact-social-links">

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

            </div>

          </div>

        </div>

      </div>


      {/* Contact Closing Statement */}

      <div className="contact-closing">

        <p>
          Thoughtful ideas deserve thoughtful execution.
        </p>

        <span>
          UI ENGINEERING · PRODUCT DESIGN · USER EXPERIENCE
        </span>

      </div>

    </section>
  );
}

export default Contact;
