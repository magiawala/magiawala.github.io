import { useState } from "react";
import hpLogo from "@/assets/logos/hp-logo.png";
import verizonLogo from "@/assets/logos/verizon-logo.png";
import integrateLogo from "@/assets/logos/integrate-logo.png";
import genuinLogo from "@/assets/logos/genuin-logo.png";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex items-start justify-center px-6 md:px-12 lg:px-16 pt-20 md:pt-28">
    <div className="w-full max-w-4xl mx-auto">
      {/* Wrapper for hover effect */}
      <div className="relative inline-block p-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Content Layer */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground/70 leading-tight mb-6">
            Hello, I'm <br />
            <span className="font-bold text-foreground">Devanshu Magiawala</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl">
            Building digital experiences with creativity and code.
          </p>

          {/* Company Logos */}
          <div className="flex gap-8 items-center mb-10">
            <img src={hpLogo} alt="HP Logo" className="h-8 md:h-10 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <img src={verizonLogo} alt="Verizon Logo" className="h-6 md:h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <img src={integrateLogo} alt="Integrate Logo" className="h-6 md:h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <img src={genuinLogo} alt="Genuin Logo" className="h-8 md:h-10 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>

          {/* CTA Button - Crimson border */}
          <div>
            <button onClick={scrollToWork} className="px-6 py-6 bg-transparent border rounded-md font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 text-[#731826] border-[#731826] leading-none">
              View My Work
            </button>
          </div>
        </div>

        {/* Debug Layer (Developer Hover Effect) - Only shows on hover */}
        <div className={`absolute pointer-events-none transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`} style={{
          top: "-54px",
          left: "-64px",
          right: "-64px",
          bottom: "-24px",
          border: "1px dashed rgba(180, 100, 100, 0.3)"
        }}>
          {/* Margin Indicators */}
          <div className="absolute top-0 left-0 right-0 h-[54px]">
            <span className="absolute -top-4 left-0 font-mono text-[10px] bg-[#731826] text-white px-1.5 py-0.5 rounded-sm">
              margin: 54px
            </span>
          </div>
          <div className="absolute left-0 w-[64px]" style={{
            top: "54px",
            bottom: "24px"
          }}>
            <span className="absolute left-[-25px] font-mono text-[10px] bg-[#731826] text-white px-1.5 py-0.5 rounded-sm whitespace-nowrap" style={{
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)"
            }}>
              margin: 64px
            </span>
          </div>

          {/* Padding Indicators */}
          <div className="absolute h-[40px]" style={{
            top: "54px",
            left: "63px",
            right: "64px"
          }}>
            <span className="absolute top-0 left-0 font-mono text-[10px] bg-[#204ecf] text-white px-1.5 py-0.5 rounded-sm z-10">
              padding: 40px
            </span>
          </div>

          {/* Blue content outline */}
          <div className="absolute border border-blue-400/80" style={{
            top: "54px",
            left: "64px",
            right: "64px",
            bottom: "24px"
          }} />

          {/* Button Padding Indicators - Grey Lines from UI Screenshot */}
          <div className="absolute" style={{ left: "104px", bottom: "64px", width: "168px", height: "76px" }}>
            {/* Horizontal 24px */}
            <div className="absolute -bottom-3 left-0 w-full flex items-center justify-center">
              <div className="h-px w-full bg-gray-400"></div>
              <div className="absolute left-0 h-1.5 w-px bg-gray-400 -top-0.5"></div>
              <div className="absolute right-0 h-1.5 w-px bg-gray-400 -top-0.5"></div>
              <span className="absolute bg-[#fdfbf7] px-1 text-[9px] text-gray-500 font-medium">24px</span>
            </div>
            {/* Vertical 24px */}
            <div className="absolute -right-3 top-0 h-full flex items-center justify-center">
              <div className="w-px h-full bg-gray-400"></div>
              <div className="absolute top-0 w-1.5 h-px bg-gray-400 -left-0.5"></div>
              <div className="absolute bottom-0 w-1.5 h-px bg-gray-400 -left-0.5"></div>
              <span className="absolute bg-[#fdfbf7] px-1 text-[9px] text-gray-500 font-medium rotate-90">24px</span>
            </div>
          </div>

          {/* Width indicator */}
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
            <span className="font-mono text-[10px] bg-[#731826] text-white px-1.5 py-0.5 rounded-sm">
              width: auto
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default HeroSection;