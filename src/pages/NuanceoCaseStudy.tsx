import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyImage from "@/components/CaseStudyImage";
import { Link } from "react-router-dom";

// Images
import nuanceoHero from "@/assets/nuanceo-hero.png";
import nuanceoImpact from "@/assets/nuanceo-impact.png";
import nuanceoMotivation from "@/assets/nuanceo-motivation.png";
import nuanceoBefore1 from "@/assets/nuanceo-before-1.png";
import nuanceoBefore2 from "@/assets/nuanceo-before-2.png";
import nuanceoAfterDashboard from "@/assets/nuanceo-after-dashboard.png";
import nuanceoComparisonScore from "@/assets/nuanceo-comparison-score.png";
import nuanceoComparisonOverall from "@/assets/nuanceo-comparison-overall.png";

const NuanceoCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-inter">
            <Header variant="default" />

            <main>
                {/* Hero Section */}
                <CaseStudyHero
                    title="Refining Art Critique for Students"
                    subtitle="Redesigning the Nuanceo platform to improve feedback quality and usability for art students."
                    role="Product Designer"
                    timeline="Jan 2024 – May 2025"
                    tools="Figma, React, Node.js"
                    team="3 Designers, 2 Engineers, 1 PM"
                    heroImage={nuanceoHero}
                    accentColor="from-purple-600/90 to-purple-800/80"
                />

                {/* Project Overview / Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            {/* Left Column: Title & Role */}
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuanceo</h2>
                                <div className="text-muted-foreground space-y-1 text-lg">
                                    <p>Led User Testing</p>
                                    <p>Front-end Development</p>
                                </div>
                            </div>

                            {/* Right Column: Narrative */}
                            <div className="md:col-span-8">
                                <p className="body-text mb-6">
                                    <strong>Nuanceo</strong> is an art critique platform designed to help students and instructors exchange meaningful feedback. However, users struggled with navigation and giving constructive criticism due to a cluttered interface.
                                </p>
                                <p className="body-text">
                                    I led the redesign and user testing efforts, working closely with engineers to implement changes using React and Tailwind CSS. The goal was to simplify the critique process and build confidence in students providing feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Section */}
                <CaseStudySection label="IMPACT" title="Key Results">
                    <div className="flex flex-col gap-4">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-purple-600">
                                <span className="font-bold text-purple-600 mr-1">30%</span>
                                decrease in task completion time
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-purple-600">
                                Daily Active Users (DAU) <span className="font-bold text-purple-600 mx-1">increased by 4x</span>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-purple-600">
                                Net Promoter Score (NPS) of <span className="font-bold text-purple-600 mx-1">82</span>
                            </p>
                        </div>
                    </div>
                </CaseStudySection>

                {/* Discovery Section */}
                <CaseStudySection label="DISCOVERY" title="User Testing with Students">
                    <p className="body-text mb-6">
                        We conducted usability testing with <strong>30 art students</strong> using the <strong>think-aloud method</strong> to identify friction points.
                    </p>
                    <div className="space-y-6 mb-8">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Key Findings:</h4>
                            <ul className="list-disc pl-5 space-y-2 text-secondary-foreground">
                                <li><strong>Unclear Hierarchy:</strong> Students didn't know where to look first.</li>
                                <li><strong>Confusing Navigation:</strong> Moving between critiques was disjointed.</li>
                                <li><strong>Excessive Scrolling:</strong> Vital information was buried below the fold.</li>
                            </ul>
                        </div>
                    </div>

                    <CaseStudyImage
                        src={nuanceoBefore1}
                        alt="Initial usability issues found during testing"
                        caption="Assessment of the original interface revealing layout and hierarchy issues."
                    />
                </CaseStudySection>

                {/* Solution Section */}
                <CaseStudySection title="Solution">
                    <div className="space-y-12">
                        {/* Dashboard */}
                        <div>
                            <h3 className="subsection-title">Dashboard Redesign</h3>
                            <p className="body-text mb-4">
                                We improved the sidebar contrast for better visibility and simplified the logout process, making the dashboard cleaner and easier to navigate.
                            </p>
                            <CaseStudyImage
                                src={nuanceoAfterDashboard}
                                alt="Redesigned Dashboard"
                            />
                        </div>

                        {/* Critique Score */}
                        <div>
                            <h3 className="subsection-title">Critique Score Experience</h3>
                            <p className="body-text mb-4">
                                Minimized unnecessary clicks and added clear indicators for inactive buttons. The new design streamlines the scoring process.
                            </p>
                            <CaseStudyImage
                                src={nuanceoComparisonScore}
                                alt="Critique Score: Before vs After"
                            />
                        </div>

                        {/* Overall Critique */}
                        <div>
                            <h3 className="subsection-title">Overall Critique Flow</h3>
                            <p className="body-text mb-4">
                                Introduced a separate comment section to reduce clutter and improved global navigation between different critiques and tags.
                            </p>
                            <CaseStudyImage
                                src={nuanceoComparisonOverall}
                                alt="Overall Critique: Before vs After"
                            />
                        </div>
                    </div>
                </CaseStudySection>

                {/* Takeaways Section */}
                <CaseStudySection title="Takeaways">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="highlight-box">
                            <h3 className="text-xl font-semibold mb-3">Feedback Drives Confidence</h3>
                            <p className="text-secondary-foreground">
                                Designing for clarity isn't just about aesthetics; it directly impacts user confidence. When students understood the specialized tools, they gave more meaningful feedback.
                            </p>
                        </div>
                        <div className="highlight-box">
                            <h3 className="text-xl font-semibold mb-3">Designer-Developer Hybrid</h3>
                            <p className="text-secondary-foreground">
                                Contributing to the codebase allowed me to bridge the gap between design and implementation, ensuring that the final product was both scalable and true to the user needs.
                            </p>
                        </div>
                    </div>
                </CaseStudySection>

            </main>

            {/* Project Navigation */}
            <nav className="border-t border-border py-12 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex justify-between items-center">
                        <Link to="/hp" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            ← <span className="font-medium">HP AI Companion</span>
                        </Link>
                        <Link to="/" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            <span className="font-medium">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <Footer />
        </div>
    );
};

export default NuanceoCaseStudy;
