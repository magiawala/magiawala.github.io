import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  variant?: "home" | "default" | "standard";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // Use ref to track scroll position without triggering re-renders

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // For home page, text is dark since background is light
  // For case study pages with hero, text starts white then becomes dark on scroll
  // For standard pages (Resume) without hero image, text is always dark
  const textColorClass =
    variant === "home" || variant === "standard"
      ? "text-foreground/80 hover:text-foreground"
      : isScrolled
        ? "text-foreground/80 hover:text-foreground"
        : "text-white/80 hover:text-white";

  const hamburgerBgClass =
    variant === "home" || variant === "standard"
      ? "bg-zinc-950"
      : isScrolled ? "bg-zinc-950" : "bg-white";

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If we are already on home page
    if (location.pathname === "/" || location.pathname === "") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and pass targetId in state
      navigate("/", { state: { scrollTo: targetId } });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${variant === "home"
        ? ""
        : isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
        }`}
      style={variant === "home" ? { background: 'none', backgroundColor: 'transparent', backdropFilter: 'none', boxShadow: 'none' } : undefined}
    >
      <div className="w-full px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-end py-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${textColorClass}`}
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${textColorClass}`}
            >
              Work
            </a>
            <Link
              to="/resume"
              className={`text-sm font-medium transition-colors duration-200 ${textColorClass}`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
            />
            <span
              className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background transition-opacity duration-300 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 pt-20">
          <a
            href="#about"
            className="text-2xl font-medium text-foreground"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#work"
            className="text-2xl font-medium text-foreground"
            onClick={(e) => handleNavClick(e, "work")}
          >
            Work
          </a>
          <Link
            to="/resume"
            className="text-2xl font-medium text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
