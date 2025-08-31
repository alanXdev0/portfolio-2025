import React from "react";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSection from "./components/portfolio/AboutSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ContactSection from "./components/portfolio/ContactSection";

export default function PortfolioPage() {
  return (
    <div className="w-full max-w-7xl pt-20 pb-24 space-y-32 md:space-y-48">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
