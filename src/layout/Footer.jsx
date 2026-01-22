import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/TheGamBoZZo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/m-raees-fakier?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" , label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rfakier?igsh=MWN6eHNrMGF4a2NiYw==" , label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
  { label: "Certifications", isCerts: true },
];

export const Footer = ({ onNavigateToCerts, onNavigateToSection } = {}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href) => {
    if (href === "#") {
      // Home button - scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (onNavigateToSection) {
      onNavigateToSection(href);
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button 
              onClick={() => handleLinkClick("#")}
              className="text-xl font-bold tracking-tight hover:text-primary cursor-pointer"
            >
              MRF<span className="text-primary">.</span>
            </button>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Muhammad Raees Fakier. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              link.isCerts ? (
                <button
                  key="certifications"
                  onClick={onNavigateToCerts}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};