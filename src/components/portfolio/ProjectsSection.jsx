import React from "react";
import {
  ExternalLink,
  Image as ImageIcon,
  Smartphone,
  Globe,
  Brain,
  ShoppingCart,
  Calendar,
  CheckSquare,
  BookOpen,
} from "lucide-react";

const ProjectCard = ({
  title,
  category,
  description,
  technologies,
  highlights,
  status,
  icon: Icon,
  index,
  url,
}) => (
  <div
    className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="h-48 bg-black/20 flex items-center justify-center border-b border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-center z-10">
        <Icon className="w-12 h-12 text-white/30 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
        <p className="text-white/40 text-sm font-light">
          {status === "published" ? "Technical Article" : "Mobile Application"}
        </p>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20">
          {category}
        </span>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            status === "live" || status === "published"
              ? "bg-green-500/20 text-green-300"
              : status === "development"
              ? "bg-blue-500/20 text-blue-300"
              : status === "eod"
              ? "bg-red-500/20 text-red-300"
              : "bg-yellow-500/20 text-yellow-300"
          }`}
        >
          {status === "eod" ? "End Of Support" : status}
        </span>
      </div>

      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed font-light mb-4 text-sm">
        {description}
      </p>

      {highlights && (
        <div className="mb-4">
          <ul className="space-y-1">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-white/70"
              >
                <div className="w-1 h-1 rounded-full bg-white/50 mt-1.5 flex-shrink-0"></div>
                <span className="font-light">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
      {url.length > 0 ? (
        <a
          className="w-full py-2 glass-card rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          href={url}
          target="_blank"
          rel="noopener"
        >
          <ExternalLink className="w-4 h-4" />
          View Details
        </a>
      ) : null}
    </div>
  </div>
);

export default function ProjectsSection() {
  const projects = [
    {
      title: "PhoneTrackr",
      category: "Mobile Development",
      description:
        "A Flutter-based mobile application that helps users identify the approximate city of incoming phone numbers using IFT (Instituto Federal de Telecomunicaciones) data. Designed with user safety in mind, it provides quick insights into the origin of unknown calls.",
      highlights: [
        "First personal app built with Flutter",
        "Enhances user safety by identifying call origins",
        "Published on both Google Play Store and Apple App Store",
        "Clean and intuitive UI with responsive performance",
      ],
      technologies: ["Flutter", "Dart", "iOS", "Android", "REST APIs"],
      status: "live",
      icon: Smartphone,
      url: "https://phonetrackr.alananaya.dev/",
    },
    {
      title: "ToPoLi",
      category: "Productivity",
      description:
        "A productivity app built with Flutter that combines task management through to-do lists with Pomodoro sessions to help users stay focused and organized throughout their day.",
      highlights: [
        "Blend of task lists and Pomodoro technique for effective productivity",
        "Cross-platform app with smooth performance on iOS and Android",
        "Clean, minimalist UI focused on usability",
        "Published on both Google Play Store and Apple App Store",
      ],
      technologies: ["Flutter", "Dart", "iOS", "Android", "State Management"],
      status: "live",
      icon: CheckSquare,
      url: "https://topoli.alananaya.dev/",
    },
    {
      title: "VenueVent",
      category: "Mobile Development",
      description:
        "A mobile application built entirely with SwiftUI, designed for venue owners and event managers in Mexico. It allows users to manage events, track inventory, and optimize revenue directly from their phones.",
      highlights: [
        "Developed 100% in SwiftUI with modern iOS design principles",
        "Tailored for event venue owners and administrators in Mexico",
        "Features event scheduling, inventory management, and revenue tracking",
        "Responsive and intuitive interface designed for daily business use",
      ],
      technologies: ["SwiftUI", "Swift", "iOS", "CloudKit", "CoreData"],
      status: "live",
      icon: Calendar,
      url: "https://venuevent.alananaya.dev/",
    },
    {
      title:
        "Using ChatGPT to Optimize Code in Xcode: A New Era of Development",
      category: "Writing / Technical Articles",
      description:
        "An article published on dev.to exploring how developers can integrate ChatGPT into their Xcode workflow to optimize and accelerate iOS development.",
      highlights: [
        "Explains practical use cases of ChatGPT in iOS development",
        "Covers code generation, refactoring, and productivity improvements",
        "Engaged readers from the iOS and broader developer community",
      ],
      technologies: ["Xcode", "iOS", "Swift", "ChatGPT", "Dev.to"],
      status: "published",
      icon: BookOpen,
      url: "https://dev.to/alananayadev",
    },
    {
      title: "Cross-Platform Mobile Apps",
      category: "Mobile Development",
      description:
        "Various freelance mobile applications built for clients using React Native, native iOS, and Android development approaches.",
      highlights: [
        "Delivered projects on time and within budget",
        "Responsive design across all devices",
        "Ongoing support and maintenance",
      ],
      technologies: [
        "React Native",
        "Swift",
        "Kotlin",
        "JavaScript",
        "Cross-Platform",
      ],
      status: "live",
      icon: Smartphone,
      url: "",
    },
  ];

  return (
    <section id="projects" className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-sm font-light text-white/70 mb-3 uppercase tracking-widest">
          Work
        </h2>
        <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
          Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
