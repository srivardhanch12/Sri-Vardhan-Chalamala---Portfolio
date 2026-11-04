
import { useState, type MouseEvent } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
  { label: "Work", href: "#work" },
  { label: "Case Study", href: "#case-study" },
  { label: "UX Process", href: "#ux-process" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const targetId = href.substring(1);

    const targetSection = document.getElementById(targetId);

    const targetHeading =
      targetSection?.querySelector<HTMLElement>(
        ".section-eyebrow"
      ) ?? targetSection;

    if (!targetHeading) {
      setMenuOpen(false);
      return;
    }

    const desktop = window.matchMedia(
      "(min-width: 801px)"
    ).matches;

    
const navbarElement =
  document.querySelector<HTMLElement>(".main-content > .navbar");

const navbarHeight =
  navbarElement?.getBoundingClientRect().height ?? 85;

const desiredTopGap = navbarHeight + 16;


    if (desktop) {

      const scrollContainer =
        document.querySelector<HTMLElement>(
          ".main-content"
        );

      if (scrollContainer) {

        const containerTop =
          scrollContainer.getBoundingClientRect().top;

        const headingTop =
          targetHeading.getBoundingClientRect().top;

        const exactScrollPosition =
          scrollContainer.scrollTop +
          headingTop -
          containerTop -
          desiredTopGap;

        scrollContainer.scrollTo({
          top: Math.max(0, exactScrollPosition),
          behavior: "smooth",
        });

      }

    } else {

      const headingDocumentPosition =
        window.scrollY +
        targetHeading.getBoundingClientRect().top;

      window.scrollTo({
        top: Math.max(
          0,
          headingDocumentPosition - desiredTopGap
        ),
        behavior: "smooth",
      });

    }

    window.history.replaceState(
      null,
      "",
      href
    );

    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <nav
        id="portfolio-navigation"
        className={`navbar-links ${
          menuOpen ? "navbar-links-open" : ""
        }`}
        aria-label="Main navigation"
      >

        {navigationLinks.map((link) => (

          <a
            key={link.href}
            href={link.href}
            onClick={(event) =>
              handleNavigation(event, link.href)
            }
          >
            {link.label}
          </a>

        ))}

      </nav>


      <div className="navbar-status">
        <span className="status-dot" />
        OPEN TO OPPORTUNITIES
      </div>


      <button
  type="button"
  className="navbar-menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close navigation" : "Open navigation"}
  aria-expanded={menuOpen}
  aria-controls="portfolio-navigation"
>
  <span
    className={`hamburger-icon ${menuOpen ? "is-open" : ""}`}
    aria-hidden="true"
  >
    <span></span>
    <span></span>
    <span></span>
  </span>
</button>

    </header>
  );
}

export default Navbar;
