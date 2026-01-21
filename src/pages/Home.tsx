import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import verizonThumb from "@/assets/verizon-thumb.png";
import hpThumb from "@/assets/hp-thumb.png";
import nuanceoThumb from "@/assets/nuanceo-hero.png";
import hpLogo from "@/assets/logos/logo2.png";
import verizonLogo from "@/assets/logos/verizon_new.png";
import integrateLogo from "@/assets/logos/integrate_new.png";
import genuinLogo from "@/assets/logos/logo3.png";

import "@/assets/original-home.css";

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const targetId = location.state.scrollTo;
            const element = document.getElementById(targetId);
            if (element) {
                // Small timeout to ensure page load/layout is complete
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

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
                {/* Hero Section */}
                <div id="about">
                    <HeroSection />
                </div>

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

                    {/* Project 3: Nuanceo */}
                    <article className="project-showcase-item">
                        <div className="project-thumb">
                            <img src={nuanceoThumb} alt="Nuanceo Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label">Product Designer</span>
                            <h2 className="project-title-large">
                                Analyzing art critique for student-teacher interactions
                            </h2>
                            <div className="project-tags">
                                <span className="tag-pill" style={{ backgroundColor: '#F3E8FF', color: '#6B21A8' }}>User Research</span>
                            </div>
                            <p className="project-desc-text">
                                Led user testing and redesign of an art critique platform, resulting in a 30% faster task completion and 4x increase in daily active users.
                            </p>
                            <Link to="/nuanceo" className="view-project-link">
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
