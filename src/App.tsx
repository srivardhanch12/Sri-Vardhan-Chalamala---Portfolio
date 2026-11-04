
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import FeaturedProject from "./sections/FeaturedProject";
import IresCaseStudy from "./sections/IresCaseStudy";
import UxProcess from "./sections/UxProcess";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";

import "./styles/layout.css";

function App() {
  return (
    <div className="portfolio-layout">

      {/* LEFT PROFILE SIDEBAR */}

      <Sidebar />


      {/* RIGHT MAIN CONTENT */}

      <main className="main-content">

        {/* TOP NAVIGATION */}

        <Navbar />


        {/* HERO SECTION */}

        <Hero />


        {/* FEATURED PROJECT */}

        <FeaturedProject />


        {/* IRES PRODUCT CASE STUDY */}

        <IresCaseStudy />
        <UxProcess />


        {/* TECHNICAL SKILLS */}

        <Skills />


        {/* ABOUT ME */}

        <About />


        {/* CONTACT */}

        <Contact />


        {/* FOOTER */}

        <Footer />

      </main>

    </div>
  );
}

export default App;
