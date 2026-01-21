import { ArrowUp, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isAtTop) {
      // If on a case study page, scroll to context
      const contextSection = document.querySelector("#case-study-context");
      if (contextSection) {
        contextSection.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Fallback: Scroll to work section (Home page behavior)
      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="site-footer py-16 md:py-24 text-left">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-12 text-left">
          Thanks for stopping by, let's chat!
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start text-left">
          {/* Contact Me */}
          <div>
            <h3 className="footer-section-title">CONTACT ME</h3>
            <a
              href="mailto:magiaanushu@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              magiaanushu@gmail.com
            </a>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="footer-section-title">LET'S CONNECT</h3>
            <div className="flex items-center gap-2 text-foreground">
              <a
                href="https://www.linkedin.com/in/magiawala/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                Linkedin
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="/resume"
                className="hover:text-muted-foreground transition-colors"
              >
                Resume
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="#work"
                className="hover:text-muted-foreground transition-colors"
              >
                Work
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="footer-section-title">©2026 DEVANSHU MAGIAWALA</h3>
            <p className="text-foreground">Made with ☕️ & 🥪</p>
          </div>
        </div>
      </div>

      {/* Scroll Button - Down arrow at top, Up arrow when scrolled */}
      <button
        onClick={handleScrollClick}
        className={`fixed bottom-8 right-8 p-3 bg-transparent transition-colors duration-200 ${isAtTop ? "text-white hover:text-white/80" : "text-muted-foreground hover:text-foreground"
          }`}
        aria-label={isAtTop ? "Scroll down" : "Scroll to top"}
      >
        {isAtTop ? (
          <ArrowDown className="w-6 h-6" />
        ) : (
          <ArrowUp className="w-6 h-6" />
        )}
      </button>
    </footer>
  );
};

export default Footer;
