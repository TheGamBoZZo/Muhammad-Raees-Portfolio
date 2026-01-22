const experiences = [
  {
    period: "2025 — Present",
    role: "IS Support",
    company: "Oasis Crescent",
    description:
      "Support and maintain internal systems, ensuring seamless operations across departments. Implemented a new ticketing system that improved response times by 30%. Refactored and fixed bugs on the backend systems.",
    technologies: ["PHP", "Laravel", "Python"],
    current: true,
  },
  {
    period: "2024 — 2024",
    role: "Helpdesk Engineer",
    company: "Oasis Crescent",
    description:
      "Provided technical support to over 200 employees, resolving hardware and software issues efficiently. Led the migration of company data to a new cloud platform, enhancing data accessibility and security.",
    technologies: ["Windows Server", "Active Directory", "Azure"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 2 websites and a mobile applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL","Java"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 items-center text-center mx-auto">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, a curious beginner moving towards a career in software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="group relative">
                    {/* Smooth Gradient Overlay on Hover */}
                    <div className="card-hover-overlay rounded-2xl" />

                    <div className="glass relative p-6 rounded-2xl card-hover-border">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 card-hover-text">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs rounded-full border border-primary/15 card-hover-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};