import React from "react";
import { User, Award, Target, Code, Languages, Coffee } from "lucide-react";
import LiquidGlassEffect from "../effects/LiquidGlassEffect";
import MorphingGlassCard from "../effects/MorphingGlassCard";

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white/90 font-light">{skill}</span>
      <span className="text-white/70 text-sm">{percentage}%</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <MorphingGlassCard className="p-6">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-5 h-5 text-white/70" />
      <h3 className="text-lg font-medium text-white uppercase tracking-widest">
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition-colors"
        >
          <span className="text-white/90 text-sm font-medium">{skill}</span>
        </div>
      ))}
    </div>
  </MorphingGlassCard>
);

export default function AboutSection() {
  const coreSkills = [
    { skill: "iOS Development (Swift)", percentage: 95 },
    { skill: "Android (Kotlin)", percentage: 90 },
    { skill: "React & JavaScript", percentage: 80 },
    { skill: "System Architecture", percentage: 80 },
    { skill: "Team Leadership", percentage: 85 },
  ];

  const mobileSkills = ["iOS", "Android", "React Native", "Flutter"];
  const programmingSkills = [
    "Swift",
    "Kotlin",
    "JavaScript",
    "Dart",
    "Objective-C",
  ];
  const cloudSkills = ["AWS", "Docker", "Kubernetes", "Jenkins"];
  const databaseSkills = ["MySQL", "MongoDB", "PostgreSQL"];

  return (
    <section id="about" className="fade-in">
      <div className="text-center mb-16">
        <h2 className="text-sm font-light text-white/70 mb-3 uppercase tracking-widest">
          About
        </h2>
        <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">
          Who I Am
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <LiquidGlassEffect className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-white/70" />
            <h3 className="text-lg font-medium text-white uppercase tracking-widest">
              Background
            </h3>
          </div>
          <p className="text-white/90 leading-relaxed font-light mb-4">
            Back in 2014, I began my journey into iOS development and was
            quickly hooked by the endless possibilities of coding and mobile app
            development.
          </p>
          <p className="text-white/80 leading-relaxed font-light">
            Over the years, I've had the opportunity to work on a wide range of
            projects — from personal side projects and tech startups to
            large-scale initiatives at multinational companies such as Globant
            and Luxoft. Today, I'm part of Luxoft as a Senior Software
            Developer, contributing to solutions for United Airlines.
          </p>
        </LiquidGlassEffect>

        <LiquidGlassEffect className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-white/70" />
            <h3 className="text-lg font-medium text-white uppercase tracking-widest">
              Mission
            </h3>
          </div>
          <p className="text-white/90 leading-relaxed font-light italic text-lg">
            "Crafting accessible web and mobile applications with a focus on
            usability, while continuously enhancing skills and staying
            up-to-date with the latest technology trends."
          </p>
        </LiquidGlassEffect>
      </div>

      <LiquidGlassEffect className="p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Languages className="w-5 h-5 text-white/70" />
          <h3 className="text-lg font-medium text-white uppercase tracking-widest">
            Languages
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <span className="text-white/90 font-medium">Spanish</span>
            <p className="text-white/70 text-sm">Native Speaker</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <span className="text-white/90 font-medium">English</span>
            <p className="text-white/70 text-sm">C1 Level</p>
          </div>
        </div>
      </LiquidGlassEffect>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <LiquidGlassEffect className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-white/70" />
            <h3 className="text-lg font-medium text-white uppercase tracking-widest">
              Core Skills
            </h3>
          </div>
          <div className="space-y-4">
            {coreSkills.map((item, index) => (
              <SkillBar
                key={index}
                skill={item.skill}
                percentage={item.percentage}
              />
            ))}
          </div>
        </LiquidGlassEffect>

        <LiquidGlassEffect className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Coffee className="w-5 h-5 text-white/70" />
            <h3 className="text-lg font-medium text-white uppercase tracking-widest">
              Personal
            </h3>
          </div>
          <p className="text-white/90 leading-relaxed font-light mb-4">
            When I’m not coding, you’ll probably find me on the football field,
            lost in a good playlist, or sipping coffee at a quiet café — moments
            where I recharge, spark new ideas, and find inspiration beyond the
            screen.
          </p>
          <p className="text-white/80 leading-relaxed font-light">
            My curiosity for technology keeps me exploring, learning, and
            sharing — whether by sharpening my skills, writing about what I
            discover, or contributing to the open-source community.
          </p>
        </LiquidGlassEffect>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <SkillCategory title="Mobile" icon={Code} skills={mobileSkills} />
        <SkillCategory
          title="Programming"
          icon={Code}
          skills={programmingSkills}
        />
        <SkillCategory
          title="Cloud & DevOps"
          icon={Award}
          skills={cloudSkills}
        />
        <SkillCategory title="Databases" icon={Award} skills={databaseSkills} />
      </div>
    </section>
  );
}
