import React from "react";
import { Mail, MapPin, Globe, Code, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-sm font-light text-white/70 mb-3 uppercase tracking-widest">
          Connect
        </h2>
        <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
          Let's Build Something
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mx-auto mb-6 border-2 border-white/20 hover:scale-110 transition-all duration-500">
          <Code className="w-8 h-8 text-white/80" />
        </div>

        <h3 className="text-2xl font-light text-white mb-4">
          Open to New Opportunities
        </h3>
        <p className="text-white/80 font-light leading-relaxed mb-8">
          I'm passionate about building innovative mobile and web applications.
          Always interested in discussing new projects, collaborations, or
          sharing knowledge about iOS development.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Mail className="w-4 h-4" />
            <span className="font-mono">hello@alananaya.dev</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <MapPin className="w-4 h-4" />
            <span>Guadalajara, Mexico</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Globe className="w-4 h-4" />
            <span>Available for remote work worldwide</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            className="w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            href="https://github.com/alanXdev0"
            target="_blank"
            rel="noopener"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            className="w-12 h-12 rounded-full glass-card border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            href="https://www.linkedin.com/in/alanxdev/"
            target="_blank"
            rel="noopener"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <a
          className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          href="mailto:hello@alananaya.dev"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
