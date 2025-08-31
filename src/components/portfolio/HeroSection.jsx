import React, { useState, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";
import ProfilePic from "../../assets/img/profile.png";

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const handleDownload = async () => {
    const file = await import("../../assets/files/Alan_Anaya_CV.pdf");
    window.open(file.default, "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className={`text-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-card flex items-center justify-center border-2 border-white/20 hover:scale-110 transition-all duration-500">
            <div className="text-center">
              <img
                src={ProfilePic}
                alt="profile_img"
                className="rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-4">
            Alan Anaya
          </h1>

          <p className="text-xl md:text-2xl text-white/80 font-light mb-6 uppercase tracking-[0.3em]">
            Senior Software Developer
          </p>

          <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto mb-8">
            <p className="text-lg text-white/90 leading-relaxed font-light">
              Expert in React, Swift, and Kotlin, crafting accessible web and
              mobile applications with a focus on usability and innovation.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <a
              href="#about"
              className="px-8 py-4 glass-card rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
