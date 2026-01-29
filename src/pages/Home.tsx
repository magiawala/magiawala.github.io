import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { usePageAnalytics } from "@/hooks/usePageAnalytics";
import verizonThumb from "@/assets/verizon-thumb.png";
import hpThumb from "@/assets/hp-thumb.png";
import nuanceoThumb from "@/assets/nuanceo-card.jpg";
import anomalyThumb from "@/assets/anomaly-thumb.png";
import satelliteThumb from "@/assets/satellite-thumb.png";
import musicThumb from "@/assets/music-thumb.png";
import hpLogo from "@/assets/logos/logo2.png";
import verizonLogo from "@/assets/logos/verizon_new.png";
import integrateLogo from "@/assets/logos/integrate_new.png";
import genuinLogo from "@/assets/logos/logo3.png";

import "@/assets/original-home.css";

const Home = () => {
    usePageAnalytics("Home Page"); // Track page analytics
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
                <section id="work" className="featured-projects !pb-0">
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
                                <span className="tag-pill tag-verizon">AI Tool</span>
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

                                <span className="tag-pill tag-hp">User Research</span>
                                <span className="tag-pill tag-hp">AI Design</span>
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
                    <article className="project-showcase-item !mb-240">
                        <div className="project-thumb">
                            <img src={nuanceoThumb} alt="Nuanceo Project" />
                        </div>
                        <div className="project-details">
                            <span className="role-label">Design Engineer</span>
                            <h2 className="project-title-large">
                                Analyzing art critique for student-teacher interactions
                            </h2>
                            <div className="project-tags">
                                <span className="tag-pill" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>User Testing</span>
                                <span className="tag-pill" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>Heuristics</span>
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

                {/* Technical Projects Section */}
                <section className="featured-projects !pt-12 !pb-24 !mb-[1px]">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering & Code</h2>
                        <div className="h-px flex-1 bg-border/60"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Project 1: Anomaly Detection */}
                        <a href="https://github.com/magiawala/Anomaly-Detection-CVPR2018" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="aspect-video overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-border/50">
                                <img src={anomalyThumb} alt="Anomaly Detection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">Anomaly Detection CVPR2018</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                Real-world anomaly detection in surveillance videos using deep learning techniques to identify irregular patterns in crowded scenes.
                            </p>
                            <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-block">View on GitHub →</span>
                        </a>

                        {/* Project 2: Satellite Image Processing */}
                        <a href="https://github.com/magiawala/Satellite_Image_Processing" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="aspect-video overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-border/50">
                                <img src={satelliteThumb} alt="Satellite Image Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">Satellite Image Processing</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                Advanced image processing pipeline for analyzing and segmenting satellite imagery for environmental and urban monitoring.
                            </p>
                            <span className="text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform inline-block">View on GitHub →</span>
                        </a>

                        {/* Project 3: Music Instrument Classifier */}
                        <a href="https://github.com/magiawala/Music_Intrument_Classifier" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="aspect-video overflow-hidden rounded-lg mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-border/50">
                                <img src={musicThumb} alt="Music Instrument Classifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">Music Instrument Classifier</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                Audio analysis model capable of classifying different musical instruments from raw audio clips using spectral feature extraction.
                            </p>
                            <span className="text-sm font-semibold text-purple-600 group-hover:translate-x-1 transition-transform inline-block">View on GitHub →</span>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Home;
