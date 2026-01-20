import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verizonThumb from "@/assets/verizon-thumb.png";
import hpThumb from "@/assets/hp-thumb.png";
import hpLogo from "@/assets/logos/hp-logo.png";
import verizonLogo from "@/assets/logos/verizon-logo.png";
import integrateLogo from "@/assets/logos/integrate-logo.png";
import genuinLogo from "@/assets/logos/genuin-logo.png";

import "@/assets/original-home.css"; // Import original styles

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const scrollToWork = () => {
        document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#fcfaf6] font-outfit">
            <Header variant="home" />

            <main>
                {/* Hero Section */}
                <section className="hero min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16">
                    <div className="w-full max-w-4xl mx-auto">
                        {/* Wrapper for hover effect */}
                        <div className="relative inline-block p-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            {/* Content Layer */}
                            <div className="relative z-10">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a1a]/70 leading-tight mb-6 font-outfit">
                                    Hello, I'm <br />
                                    <span className="font-bold text-[#1a1a1a]">Devanshu Magiawala</span>
                                </h1>

                                <p className="text-lg md:text-xl text-[#1a1a1a]/70 mb-10 max-w-xl font-outfit">
                                    Building digital experiences with creativity and code.
                                </p>

                                {/* Company Logos */}
                                <div className="flex gap-8 items-center mb-10">
                                    <img src={hpLogo} alt="HP Logo" className="h-8 md:h-10 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                                    <img src={verizonLogo} alt="Verizon Logo" className="h-6 md:h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                                    <img src={integrateLogo} alt="Integrate Logo" className="h-6 md:h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                                    <img src={genuinLogo} alt="Genuin Logo" className="h-8 md:h-10 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                                </div>

                                <div>
                                    <button
                                        onClick={scrollToWork}
                                        className="primary-btn font-outfit"
                                    >
                                        View My Work
                                        <span className="btn-measure width">24px</span>
                                        <span className="btn-measure height">12px</span>
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
                                    left: "64px",
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

                                {/* Width indicator */}
                                <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
                                    <span className="font-mono text-[10px] bg-[#731826] text-white px-1.5 py-0.5 rounded-sm">
                                        width: auto
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects - Restored to Exact Old HTML Structure */}
                <section id="work" className="featured-projects px-5 md:px-0">
                    {/* Project 1: Verizon Business */}
                    <article className="project-showcase-item">
                        <div className="project-thumb">
                            <img src={verizonThumb} alt="Verizon Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label hidden md:block">Verizon Business Product Designer</span>
                            {/* Mobile optimized label */}
                            <span className="role-label md:hidden text-xs tracking-widest mb-2 block">VERIZON BUSINESS PRODUCT DESIGNER</span>

                            <h2 className="project-title-large text-2xl md:text-3xl lg:text-4xl">Defined product flows and testing for Verizon small business sales teams</h2>
                            <div className="project-tags">
                                <span className="tag-pill tag-verizon">Product Design</span>
                                <span className="tag-pill tag-verizon">AI Design</span>
                            </div>
                            <p className="project-desc-text">Designed an AI sales assist tool for Verizon Business,
                                shaping early product concepts and helping SMB sales teams close deals
                                faster.</p>
                            <Link to="/verizon" className="view-project-link">View Project →</Link>
                        </div>
                    </article>

                    {/* Project 2: HP Inc */}
                    <article className="project-showcase-item">
                        <div className="project-thumb">
                            <img src={hpThumb} alt="HP Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label hidden md:block">HP Inc. Product Designer</span>
                            {/* Mobile optimized label */}
                            <span className="role-label md:hidden text-xs tracking-widest mb-2 block">HP INC. PRODUCT DESIGNER</span>

                            <h2 className="project-title-large text-2xl md:text-3xl lg:text-4xl">Revamped onboarding and home navigation for HP AI Companion
                            </h2>
                            <div className="project-tags">
                                <span className="tag-pill tag-hp">Experience Design</span>
                            </div>
                            <p className="project-desc-text">Designed an intuitive onboarding and home screen indicators for AI PC
                                Companion experience clarifying AI modes (Local vs. Cloud), optimizing task completion by 25%.
                            </p>
                            <Link to="/hp" className="view-project-link">View Project →</Link>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
