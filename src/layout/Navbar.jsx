import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { label: "Certifications", isCerts: true },
];

export const Navbar = ({ onNavigateToCerts, onNavigateToSection } = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    if (href === "#") {
      // Home button - scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (onNavigateToSection) {
      onNavigateToSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleLinkClick("#")}
          className="text-xl font-bold tracking-tight hover:text-primary cursor-pointer"
        >
          MRF<span className="text-primary">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              link.isCerts ? (
                <button
                  key={index}
                  onClick={onNavigateToCerts}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface cursor-pointer"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button onClick={() => handleLinkClick("#contact")} className="p-0">
            <Button size="sm">Contact Me</Button>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              link.isCerts ? (
                <button
                  key={index}
                  onClick={() => {
                    onNavigateToCerts();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 cursor-pointer text-left"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    handleLinkClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg text-muted-foreground hover:text-foreground py-2 cursor-pointer text-left"
                >
                  {link.label}
                </button>
              )
            ))}

            <button
              onClick={() => {
                handleLinkClick("#contact");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full"
            >
              <Button>Contact Me</Button>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};