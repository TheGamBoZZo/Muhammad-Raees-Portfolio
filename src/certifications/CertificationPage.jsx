import { useState, useEffect } from "react";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Cloud, Award, ExternalLink, X, Code2 } from "lucide-react";
import awsLogo from "/aws.png";
import azureLogo from "/microsoft-azure-logo_svgstack_com_7501769079806.png";
import oracleLogo from "/oracle-logo-png_seeklogo-103833.png";

const certifications = {
  aws: {
    name: "Amazon Web Services",
    color: "from-amber-400 to-orange-600",
    textColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    logo: awsLogo,
    certs: [
      {
        title: "AWS Certified Cloud Practitioner",
        status: "completed",
        date: "2025",
        credentialId: "CPF-XXXX",
      },
      {
        title: "AWS Solutions Architect Associate",
        status: "in-progress",
        date: "Expected 2026",
        credentialId: null,
      },
    ],
  },
  azure: {
    name: "Microsoft Azure",
    color: "from-blue-600 to-blue-400",
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    logo: azureLogo,
    certs: [
      {
        title: "Azure Fundamentals (AZ-900)",
        status: "completed",
        date: "2025",
        credentialId: "AZ-XXXX",
      },
      {
        title: "Azure Administrator Associate (AZ-104)",
        status: "in-progress",
        date: "Expected 2026",
        credentialId: null,
      },
    ],
  },
  gcp: {
    name: "Oracle Cloud Platform",
    color: "from-blue-500 to-red-500",
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    logo: oracleLogo,
    certs: [
      {
        title: "Oracle Cloud Infrastructure 2025 Foundations Associate (1Z0-1085-25)",
        status: "completed",
        date: "Expected 2026",
        credentialId: null,
      },
      {
        title: "Oracle Data Platform 2025 Foundations Associate(1Z0-1195-25)",
        status: "in-progress",
        date: "Expected 2026",
        credentialId: null,
      },
    ],
  },
  other: {
    name: "Advanced Certifications",
    color: "from-purple-500 to-pink-600",
    textColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    logo: null,
    icon: "code2",
    isLocked: true,
    certs: [
      {
        title: "Docker Certified Associate",
        status: "completed",
        date: "2024",
        credentialId: "DCA-XXXX",
      },
      {
        title: "Kubernetes Application Developer",
        status: "in-progress",
        date: "Expected 2026",
        credentialId: null,
      },
    ],
  },
};

const PlanetBubble = ({ data, onClick, position, size }) => {
  return (
    <div
      className="absolute cursor-pointer group transition-all duration-300"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      {/* Planet Bubble */}
      <div
        className={`relative w-full h-full flex items-center justify-center rounded-full bg-linear-to-br ${data.color} opacity-85 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 shadow-lg group-hover:shadow-2xl border-0`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 via-white/5 to-transparent" />

        {/* Logo Container */}
        <div className="relative flex items-center justify-center w-full h-full">
          <img
            src={data.logo}
            alt={data.name}
            className="w-1/2 h-1/2 object-contain drop-shadow-lg"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div
            className={`${
              !data.logo ? "block" : "hidden"
            } text-center text-white text-opacity-50`}
          >
            <Cloud className="w-1/3 h-1/3 mx-auto mb-2 opacity-30" />
            <p className="text-xs opacity-40">Logo</p>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-background border border-primary/30 text-xs font-bold text-primary whitespace-nowrap">
          {data.certs.length} {data.certs.length === 1 ? "Cert" : "Certs"}
        </div>
      </div>
    </div>
  );
};

export const CertificationPage = ({ onNavigate } = {}) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [rotations, setRotations] = useState({});

  const platforms = Object.entries(certifications);
  const numPlanets = platforms.length;
  const orbitRadius = 180; // pixels

  // Initialize rotations for orbital motion
  useEffect(() => {
    setTimeout(() => {
      const initialRotations = {};
      platforms.forEach((_, idx) => {
        initialRotations[idx] = (idx / numPlanets) * 360;
      });
      setRotations(initialRotations);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate orbital motion
  useEffect(() => {
    if (selectedPlatform !== null) return;

    const interval = setInterval(() => {
      setRotations((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          updated[key] = (updated[key] + 0.2) % 360;
        });
        return updated;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [selectedPlatform]);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar onNavigateToCerts={onNavigate} onNavigateToSection={onNavigate} />

      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-secondary-foreground animate-fade-in">
                Professional Credentials
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100">
                <span className="font-serif italic text-primary">Certifications</span>{" "}
                & Credentials
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
                Explore my cloud platform certifications. Click on a bubble to
                view credentials.
              </p>
            </div>

            {/* Interactive Bubble Universe */}
            {!selectedPlatform ? (
              <div className="relative w-full flex items-center justify-center" style={{ height: "500px", maxWidth: "100%" }}>
                {/* Orbit path - dashed circle showing the orbit */}
                <svg className="absolute w-full h-full pointer-events-none" style={{ maxWidth: "400px", aspectRatio: "1" }}>
                  <circle cx="50%" cy="50%" r={`${(orbitRadius / 250) * 100}%`} fill="none" stroke="rgba(32, 178, 166, 0.15)" strokeDasharray="5,5" strokeWidth="1" />
                </svg>

                {/* Central Planet - Muhammad Raees Fakier */}
                <div className="absolute flex items-center justify-center group cursor-default" style={{ width: "150px", height: "150px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/40 to-blue-500/20 blur-2xl" />
                  
                  {/* Central planet */}
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-green-600 shadow-2xl flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(32,178,166,0.8)] transition-all duration-300">
                    <div className="absolute inset-2 rounded-full bg-linear-to-br from-white/20 to-transparent" />
                    <div className="text-center z-10">
                      <p className="text-white font-bold text-sm sm:text-base text-center px-2">Muhammad Raees</p>
                      <p className="text-white/80 text-xs">Fakier</p>
                    </div>
                  </div>
                </div>

                {/* Orbiting bubbles */}
                {platforms.map(([key, data], idx) => {
                  const angle = (rotations[idx] || 0) * (Math.PI / 180);
                  const x = 50 + (orbitRadius / 250) * 50 * Math.cos(angle);
                  const y = 50 + (orbitRadius / 250) * 50 * Math.sin(angle);
                  
                  return (
                    <div
                      key={key}
                      className="absolute transition-all duration-300 cursor-pointer group"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        width: "120px",
                        height: "120px",
                      }}
                      onClick={() => setSelectedPlatform(key)}
                    >
                      {/* Planet Bubble */}
                      <div className={`relative w-full h-full flex items-center justify-center rounded-full bg-linear-to-br ${data.color} opacity-85 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 shadow-lg group-hover:shadow-2xl border-0`}
                        style={{
                          boxShadow: "inset 0 0 20px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.3)",
                        }}
                      >
                        {/* Inner Glow */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 via-white/5 to-transparent" />

                        {/* Logo Container */}
                        <div className="relative flex items-center justify-center w-full h-full">
                          {data.icon === "code2" ? (
                            <Code2 className="w-12 h-12 text-white drop-shadow-lg" />
                          ) : (
                            <>
                              <img
                                src={data.logo}
                                alt={data.name}
                                className="w-1/2 h-1/2 object-contain drop-shadow-lg"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                              <div className={`${!data.logo ? "block" : "hidden"} text-center text-white text-opacity-50`}>
                                <Cloud className="w-1/3 h-1/3 mx-auto mb-2 opacity-30" />
                                <p className="text-xs opacity-40">Logo</p>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border-0 text-xs font-bold text-primary whitespace-nowrap shadow-md">
                          {data.certs.length} {data.certs.length === 1 ? "Cert" : "Certs"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Certification Details View */
              <div className="max-w-2xl mx-auto animate-fade-in px-4 sm:px-0">
                {/* Back Button & Header */}
                <div className="mb-8">
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
                  >
                    <X className="w-5 h-5" />
                    Back to Platforms
                  </button>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    {certifications[selectedPlatform].name}
                  </h2>
                  <div
                    className={`w-1 h-1 rounded-full ${
                      certifications[selectedPlatform].bgColor
                    }`}
                  />
                </div>

                {/* Certificates List */}
                <div className="space-y-4">
                  {certifications[selectedPlatform].certs.map((cert, idx) => (
                    <div
                      key={idx}
                      className="group relative animate-fade-in"
                      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                      <div className="card-hover-overlay rounded-lg" />

                      <div className="glass relative p-5 sm:p-6 rounded-lg card-hover-border">
                        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4 sm:gap-0 mb-4">
                          <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full">
                            <div
                              className={`p-2 sm:p-3 rounded-lg ${
                                certifications[selectedPlatform].bgColor
                              } group-hover:scale-110 transition-transform duration-300 shrink-0`}
                            >
                              <Award
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                  certifications[selectedPlatform].textColor
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 card-hover-text wrap-break-word">
                                {cert.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {cert.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 shrink-0">
                            <span
                              className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                                cert.status === "completed"
                                  ? "bg-green-500/20 text-green-500"
                                  : "bg-yellow-500/20 text-yellow-500 animate-pulse"
                              }`}
                            >
                              {cert.status === "completed"
                                ? "Completed"
                                : "In Progress"}
                            </span>
                            {cert.credentialId && (
                              <span className="text-xs text-muted-foreground">
                                ID: {cert.credentialId}
                              </span>
                            )}
                          </div>
                        </div>

                        {cert.credentialId && (
                          <div className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-4 group-hover:translate-x-1 duration-300">
                            <ExternalLink className="w-4 h-4 shrink-0" />
                            <span className="truncate">View Credential</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer onNavigateToCerts={onNavigate} onNavigateToSection={onNavigate} />
    </div>
  );
};
