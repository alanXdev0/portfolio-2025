import React from "react";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  achievements,
  technologies,
  index,
}) => (
  <div
    className="glass-card rounded-2xl p-8 hover:bg-black/20 transition-all duration-500 hover:scale-105"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <div className="flex items-center gap-4 text-white/70 mt-2">
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span className="font-light">{company}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="font-light">{location}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-white/60 text-sm">
        <Calendar className="w-4 h-4" />
        <span className="font-light">{period}</span>
      </div>
    </div>

    <p className="text-white/80 leading-relaxed font-light mb-4">
      {description}
    </p>

    {achievements && (
      <div className="mb-4">
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0"></div>
              <span className="font-light">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior iOS Developer",
      company: "Luxoft (United Airlines)",
      location: "Remote",
      period: "March 2025 - Present",
      description:
        "Contributing to the development of enterprise-grade iOS applications for United Airlines, focusing on scalability, performance, and seamless user experiences within the aviation industry. Collaborating in a global, cross-functional team to define architecture, implement new features, and improve development workflows.",
      achievements: [
        "Designed and implemented new UIKit modules for United Airlines' internal and customer-facing apps",
        "Improved app performance and reliability by refactoring legacy UIKit code to modern Swift and SwiftUI patterns",
        "Integrated CI/CD pipelines using Fastlane and GitHub Actions to streamline testing and releases",
        "Collaborated with backend and QA teams to ensure seamless integration of APIs and compliance with airline standards",
        "Mentored junior and mid-level developers in best practices for iOS architecture, concurrency, and CloudKit integration",
      ],
      technologies: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "iOS",
        "Architecture",
        "CI/CD",
        "Fastlane",
        "CloudKit",
      ],
    },
    {
      title: "Freelance Web & Mobile Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "June 2015 - Present",
      description:
        "Building and maintaining web and mobile applications for diverse clients as an independent freelancer. This role allowed me to start my career and continuously sharpen my skills across multiple technologies, frameworks, and platforms.",
      achievements: [
        "Developed native iOS apps using UIKit and SwiftUI, and maintained legacy Objective-C projects",
        "Built Android applications with Kotlin, delivering performant and user-friendly solutions",
        "Created web applications with React, Vite, and Next.js, implementing responsive and modern UI/UX",
        "Delivered cross-platform apps using React Native and Flutter to optimize time-to-market for clients",
        "Developed backend services with Node.js and PHP, including REST APIs for mobile/web integrations",
        "Automated business processes and system workflows with Python scripts",
        "Collaborated directly with clients to gather requirements, propose solutions, and deliver end-to-end projects",
      ],
      technologies: [
        "iOS (UIKit, SwiftUI, Objective-C)",
        "Android (Kotlin)",
        "React",
        "Vite",
        "Next.js",
        "Node.js",
        "PHP",
        "Python",
        "React Native",
        "Flutter",
      ],
    },
    {
      title: "iOS Mobile Developer",
      company: "Globant",
      location: "Zapopan",
      period: "November 2021 - March 2025",
      description:
        "Worked as an iOS engineer and tech lead on large-scale mobile projects, delivering high-performance applications with modern architectures and innovative integrations. Played a key role in scaling apps for millions of users while driving technical excellence and team collaboration.",
      achievements: [
        "Served as iOS Tech Lead for a Toronto-based mental health app, integrating ChatGPT API to provide real-time personalized support",
        "Led the development of the 'My Purchases' module for BAZ SuperApp, used daily by millions of customers in Mexico",
        "Contributed to Citibanamex’s mobile banking app, actively supporting its transition to Banamex during the rebranding and system migration",
        "Improved app performance by reducing RAM usage by 30% and CPU usage by 90% through strategic architecture refactoring",
        "Consistently delivered sprint epics on time while ensuring code quality, maintainability, and alignment with business goals",
        "Collaborated with cross-functional teams (design, backend, QA) to implement new features and maintain product stability",
      ],
      technologies: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "MVVM",
        "MVP",
        "ChatGPT API",
        "SCRUM",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "oOMovil",
      location: "Guadalajara",
      period: "November 2020 - November 2021",
      description:
        "Delivered end-to-end web and mobile solutions for diverse clients, working across the full stack and modernizing legacy systems while building new products.",
      achievements: [
        "Developed full applications using the MERN stack (MongoDB, Express, React, Node.js), from architecture design to deployment",
        "Created and maintained REST APIs with Express.js and PHP to support mobile and web clients",
        "Maintained and modernized legacy Objective-C iOS apps while delivering new Swift-based modules",
        "Built and shipped React Native and native iOS/Android applications tailored to client needs",
        "Collaborated closely with designers and product owners to align technical solutions with business requirements",
      ],
      technologies: [
        "MERN Stack",
        "React",
        "Node.js",
        "Swift",
        "React Native",
        "Objective-C",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "IT Specialist",
      company: "IBM",
      location: "El Salto",
      period: "October 2016 - May 2019",
      description:
        "Managed enterprise-level infrastructure and built internal tools to improve efficiency, gaining hands-on experience in system administration, automation, and private cloud environments.",
      achievements: [
        "Administered AIX, Linux, and Windows servers for enterprise clients across diverse industries",
        "Created 'TTT' (Team Tracking Tool) to streamline ticket and issue management, improving team productivity",
        "Designed and standardized OS templates for IBM private cloud VPS provisioning",
        "Provided Level 2 support and troubleshooting for commercial and internal IBM systems",
        "Developed automation scripts (Shell, Bash) to reduce manual system administration tasks",
      ],
      technologies: [
        "AIX",
        "Linux",
        "Windows Server",
        "VMware",
        "AWS",
        "Shell Scripting",
        "System Administration",
      ],
    },
    {
      title: "ABAP Developer & Business Analyst Intern",
      company: "Hewlett Packard Enterprise (HPE)",
      location: "Guadalajara",
      period: "February 2016 - October 2016",
      description:
        "Internship focused on SAP R/3 Sales and Distribution (SD) module, contributing to the development of ABAP programs and supporting business processes for enterprise clients.",
      achievements: [
        "Developed and maintained ABAP reports and enhancements to improve efficiency in Sales and Distribution processes",
        "Collaborated with business analysts to gather requirements and translate them into technical specifications",
        "Assisted in customizing SAP R/3 SD module to align with client-specific needs",
        "Provided support for end-users, including troubleshooting issues and documenting solutions",
      ],
      technologies: [
        "SAP R/3",
        "ABAP",
        "Sales and Distribution (SD)",
        "Business Analysis",
        "SQL",
      ],
    },
  ];

  return (
    <section id="experience" className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-sm font-light text-white/70 mb-3 uppercase tracking-widest">
          Journey
        </h2>
        <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
          Professional Experience
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index} {...exp} />
        ))}
      </div>

      <div className="mt-12 glass-card rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="w-5 h-5 text-white/70" />
          <h3 className="text-lg font-medium text-white uppercase tracking-widest">
            Education
          </h3>
        </div>
        <div className="text-white/90">
          <h4 className="text-xl font-medium mb-2">
            Computer Systems Engineering
          </h4>
          <p className="text-white/70 font-light">
            Universidad del Valle de México, Zapopan
          </p>
          <p className="text-white/60 text-sm">August 2013 - July 2016</p>
        </div>
      </div>
    </section>
  );
}
