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
  // WHEN MENU IS OPEN: Text must always be dark to show on white overlay
  const textColorClass = isMenuOpen
    ? "text-zinc-950"
    : variant === "home" || variant === "standard"
      ? "text-foreground/80 hover:text-foreground"
      : isScrolled
        ? "text-foreground/80 hover:text-foreground"
        : "text-white/80 hover:text-white";

  const hamburgerBgClass = isMenuOpen
    ? "bg-zinc-950"
    : variant === "home" || variant === "standard"
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${variant === "home"
          ? ""
          : isScrolled && !isMenuOpen
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
          }`}
        style={variant === "home" ? { background: 'none', backgroundColor: 'transparent', backdropFilter: 'none', boxShadow: 'none' } : undefined}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 relative z-50">
          <div className="flex items-center justify-end py-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${textColorClass}`}
              >
                About
              </Link>
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
              className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
              />
              <span
                className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${hamburgerBgClass} ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
              />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - OUTSIDE nav to avoid transform clipping context */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-opacity duration-300 z-[998] ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          <Link
            to="/about"
            className="text-2xl font-medium text-zinc-950"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="#work"
            className="text-2xl font-medium text-zinc-950"
            onClick={(e) => handleNavClick(e, "work")}
          >
            Work
          </a>
          <Link
            to="/resume"
            className="text-2xl font-medium text-zinc-950"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
