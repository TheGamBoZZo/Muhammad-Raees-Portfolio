import { School, BookOpen, Award , ArrowUpRight} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const education = [
  {
    School: "Eduvos",
    degree: "Honours of Science in Information Technology - Software Engineering",
    period: "2025 — 2026",
    description:
      "Specialized in advanced software development practices and research methodologies.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    icon: Award,
    current: true,
  },
  {
    School: "Eduvos",
    degree: "Bachelor of Science in Information Technology - Software Engineering",
    period: "2020 — 2023",
    description:
      "Studied core computer science subjects including algorithms, data structures, and software engineering principles.",
    technologies: ["Java", "Python", "C++", "JavaScript"],
    icon: BookOpen,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-highlight/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 text-center mx-auto">
          <span className="text-sm font-medium tracking-widest uppercase text-secondary-foreground animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            <span className="font-serif italic text-primary">Knowledge</span>{" "}
            & Growth
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
            Building expertise through structured learning and continuous skill development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, idx) => {
            const IconComponent = edu.icon || School;
            return (
              <div
                key={idx}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Smooth Gradient Overlay on Hover */}
                <div className="card-hover-overlay" />

                {/* Main Card */}
                <div className="glass relative h-full p-6 md:p-8 rounded-xl card-hover-border flex flex-col">
                  {/* Top Section with Icon and Period */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg card-hover-icon">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-secondary-foreground uppercase tracking-wide">
                          {edu.School}
                        </p>
                        <p className="text-sm text-primary font-semibold mt-1">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                    {edu.current && (
                      <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold animate-pulse">
                        Current
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-primary/40 to-transparent mb-6" />

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 card-hover-text leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  </div>

                  {/* Technologies Footer */}
                  <div className="pt-4 border-t border-primary/15">
                    <p className="text-xs text-muted-foreground font-medium mb-3">
                      Key Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 text-xs rounded border border-primary/15 card-hover-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="">
          <AnimatedBorderButton>
            View All Certifications
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

  
