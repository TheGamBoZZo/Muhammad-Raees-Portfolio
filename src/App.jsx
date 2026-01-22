import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Education } from "./sections/Education";
import { CertificationPage } from "@/certifications/CertificationPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (destination) => {
    if (destination === "certifications") {
      setCurrentPage("certifications");
    } else if (destination.startsWith("#")) {
      // Handle section navigation
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.querySelector(destination);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {currentPage === "certifications" ? (
        <CertificationPage onNavigate={handleNavigation} />
      ) : (
        <>
          <Navbar 
            onNavigateToCerts={() => handleNavigation("certifications")}
            onNavigateToSection={handleNavigation}
          />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer 
            onNavigateToCerts={() => handleNavigation("certifications")}
            onNavigateToSection={handleNavigation}
          />
        </>
      )}
    </div>
  );
}

export default App;