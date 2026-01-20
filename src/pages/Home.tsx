import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verizonThumb from "@/assets/verizon-thumb.png";
import hpThumb from "@/assets/hp-thumb.png";
import hpLogo from "@/assets/logos/logo2.png";
import verizonLogo from "@/assets/logos/verizon_new.png";
import integrateLogo from "@/assets/logos/integrate_new.png";
import genuinLogo from "@/assets/logos/logo3.png";

import "@/assets/original-home.css";

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const scrollToWork = () => {
        document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen font-outfit">
            {/* Background Gradient */}
            <div className="background-gradient" />

            <Header variant="home" />

            <main>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        {/* Wrapper for hover effect */}
                        <div
                            className="hero-wrapper"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Content Layer */}
                            <div className="content-layer">
                                <h1 className="fade-in-up">
                                    Hello, I'm <br />
                                    <span>Devanshu Magiawala</span>
                                </h1>
                                <p className="subtitle fade-in-up delay-1">
                                    Building digital experiences with creativity and code.
                                </p>

                                {/* Company Logos */}
                                <div className="hero-logos fade-in-up delay-1">
                                    <img src={hpLogo} alt="HP Logo" />
                                    <img src={verizonLogo} alt="Verizon Logo" />
                                    <img src={integrateLogo} alt="Integrate Logo" />
                                    <img src={genuinLogo} alt="Genuin Logo" />
                                </div>

                                <div className="hero-actions fade-in-up delay-2">
                                    <button onClick={scrollToWork} className="primary-btn">
                                        View My Work
                                        <span className="btn-measure width">24px</span>
                                        <span className="btn-measure height">24px</span>
                                    </button>
                                </div>
                            </div>

                            {/* Debug Layer (Ghost Overlay) */}
                            <div
                                className={`debug-layer ${isHovered ? "opacity-100" : ""}`}
                                aria-hidden="true"
                            >
                                {/* Margin Visualizations (Red) */}
                                <div className="margin-indicator top">
                                    <span className="label">margin: 54px</span>
                                </div>
                                <div className="margin-indicator left">
                                    <span className="label">margin: 64px</span>
                                </div>
                                <div className="margin-indicator right"></div>
                                <div className="margin-indicator bottom"></div>

                                {/* Padding Visualizations (Blue) */}
                                <div className="padding-indicator top">
                                    <span className="label">padding: 40px</span>
                                </div>
                                <div className="padding-indicator left"></div>
                                <div className="padding-indicator right"></div>
                                <div className="padding-indicator bottom"></div>

                                <div className="width-indicator-bottom">
                                    <span className="label">width: auto</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section id="work" className="featured-projects">
                    {/* Project 1: Verizon Business */}
                    <article className="project-showcase-item">
                        <div className="project-thumb">
                            <img src={verizonThumb} alt="Verizon Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label">Verizon Business Product Designer</span>
                            <h2 className="project-title-large">
                                Defined product flows and testing for Verizon small business sales teams
                            </h2>
                            <div className="project-tags">
                                <span className="tag-pill tag-verizon">Product Design</span>
                                <span className="tag-pill tag-verizon">AI Design</span>
                            </div>
                            <p className="project-desc-text">
                                Designed an AI sales assist tool for Verizon Business, shaping early
                                product concepts and helping SMB sales teams close deals faster.
                            </p>
                            <Link to="/verizon" className="view-project-link">
                                View Project →
                            </Link>
                        </div>
                    </article>

                    {/* Project 2: HP Inc */}
                    <article className="project-showcase-item">
                        <div className="project-thumb">
                            <img src={hpThumb} alt="HP Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label">HP Inc. Product Designer</span>
                            <h2 className="project-title-large">
                                Revamped onboarding and home navigation for HP AI Companion
                            </h2>
                            <div className="project-tags">
                                <span className="tag-pill tag-hp">Experience Design</span>
                            </div>
                            <p className="project-desc-text">
                                Designed an intuitive onboarding and home screen indicators for AI PC
                                Companion experience clarifying AI modes (Local vs. Cloud), optimizing
                                task completion by 25%.
                            </p>
                            <Link to="/hp" className="view-project-link">
                                View Project →
                            </Link>
                        </div>
                    </article>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
