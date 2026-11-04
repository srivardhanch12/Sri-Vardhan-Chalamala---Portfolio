
import { personalInfo } from "../data/personal";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="portfolio-footer">

      {/* Footer Main Content */}

      <div className="footer-main">

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            SV<span>.</span>
          </a>

          <p>
            {personalInfo.professionalTitle}
          </p>

          <span>
            {personalInfo.specialization}
          </span>

        </div>


        {/* Footer Navigation */}

        <div className="footer-navigation">

          <span className="footer-label">
            EXPLORE
          </span>

          <a href="#work">Selected Work</a>

          <a href="#case-study">Case Study</a>

          <a href="#skills">Technical Skills</a>

          <a href="#about">About Me</a>

          <a href="#contact">Contact</a>

        </div>


        {/* Social Links */}

        <div className="footer-social">

          <span className="footer-label">
            CONNECT
          </span>

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

      </div>


      {/* Footer Bottom */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>

        <p>
          DESIGNED WITH INTENT. BUILT WITH PURPOSE.
        </p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
