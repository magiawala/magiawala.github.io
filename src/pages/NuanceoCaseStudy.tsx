import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyImage from "@/components/CaseStudyImage";
import { Link } from "react-router-dom";

// Images
import nuanceoHeroVenice from "@/assets/nuanceo-hero-venice.jpg";
import nuanceoImpact from "@/assets/nuanceo-impact.png";
import nuanceoMotivation from "@/assets/nuanceo-motivation.png";
import nuanceoBefore1 from "@/assets/nuanceo-before-1.png";
import nuanceoBefore2 from "@/assets/nuanceo-before-2.png";
import nuanceoDashboardBefore from "@/assets/nuanceo-dashboard-before.png";
import nuanceoDashboardAfter from "@/assets/nuanceo-dashboard-after.png";
import nuanceoAfterDashboard from "@/assets/nuanceo-after-dashboard.png";
import nuanceoScoreBefore from "@/assets/nuanceo-score-before.png";
import nuanceoScoreAfter from "@/assets/nuanceo-score-after.png";
import nuanceoFlowBefore from "@/assets/nuanceo-flow-before.png";
import nuanceoFlowAfter from "@/assets/nuanceo-flow-after.png";
import nuanceoIconNav from "@/assets/nuanceo-icon-nav.png";
import nuanceoIconEye from "@/assets/nuanceo-icon-eye.png";
import nuanceoIconTime from "@/assets/nuanceo-icon-time.png";

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
                    timeline="Aug 2023 – Oct 2024"
                    tools="Figma, React, Node.js"
                    team="3 Designers, 2 Engineers, 1 PM"
                    heroImage={nuanceoHeroVenice}
                    accentColor="from-black/60 to-black/40"
                    imageClassName="scale-x-[-1]"
                />

                {/* Project Overview / Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            {/* Left Column: Title & Role */}
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuanceo</h2>
                                <div className="text-gray-700 space-y-1 text-lg">
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

                {/* Motivation Section */}
                <div className="bg-gray-50 py-16 md:py-24">
                    <CaseStudySection title="The Motivation">
                        <div className="flex flex-col gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Why This Matters</h3>
                                <p className="body-text mb-6">
                                    Art education relies heavily on critique, but for many students, the process is intimidating. <strong>Nuanceo</strong> was born from the need to democratize feedback—making it less about "judgement" and more about constructive growth.
                                </p>
                                <p className="body-text">
                                    We wanted to create a space that felt safe yet professional, encouraging students to voice their opinions without fear of being "wrong."
                                </p>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={nuanceoMotivation}
                                    alt="Motivation behind the project"
                                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </CaseStudySection>
                </div>

                {/* Impact Section */}
                {/* Impact Section */}
                <CaseStudySection label="IMPACT" title="Key Results">

                    <div className="flex flex-col gap-4">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-[#0072C7]">
                                <span className="font-bold text-[#0072C7] mr-1">30%</span>
                                decrease in task completion time
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-[#0072C7]">
                                Daily Active Users (DAU) <span className="font-bold text-[#0072C7] mx-1">increased by 4x</span>
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-[#0072C7]">
                                Net Promoter Score (NPS) of <span className="font-bold text-[#0072C7] mx-1">82</span>
                            </p>
                        </div>
                    </div>
                </CaseStudySection>

                {/* Discovery Section */}
                <CaseStudySection label="DISCOVERY" title="User Testing with Students">
                    <p className="body-text mb-6">
                        We conducted usability testing with <strong>30 art students</strong> using the <strong>think-aloud method</strong> to identify friction points.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col items-start text-left p-6 bg-gray-50/50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 mb-4 flex items-center justify-start opacity-90">
                                <img src={nuanceoIconNav} alt="Navigation Issues" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2 text-lg">Navigation Issues</h4>
                            <p className="text-sm text-secondary-foreground leading-relaxed">Students didn't know where to look first, leading to disjointed movement between critiques.</p>
                        </div>
                        <div className="flex flex-col items-start text-left p-6 bg-gray-50/50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 mb-4 flex items-center justify-start opacity-90">
                                <img src={nuanceoIconEye} alt="Lack of Visibility" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2 text-lg">Lack of System Status</h4>
                            <p className="text-sm text-secondary-foreground leading-relaxed">Users couldn't distinguish between active and inactive states, causing confusion.</p>
                        </div>
                        <div className="flex flex-col items-start text-left p-6 bg-gray-50/50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-12 h-12 mb-4 flex items-center justify-start opacity-90">
                                <img src={nuanceoIconTime} alt="Low Learnability" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="font-semibold text-foreground mb-2 text-lg">Low Learnability</h4>
                            <p className="text-sm text-secondary-foreground leading-relaxed">Vital information was buried, and the tool took too long to master for simple tasks.</p>
                        </div>
                    </div>

                    {/* Image Removed as requested */}
                </CaseStudySection>

                {/* Solution Section */}
                <CaseStudySection title="Solution">
                    <div className="space-y-24">

                        {/* Change 1: Dashboard */}
                        <div className="w-full">
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-8">1. Dashboard Redesign</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-red-100 px-2 py-0.5 rounded">PROBLEM</span>
                                        </h4>
                                        <p className="text-red-900/80">
                                            The original sidebar had <strong>low contrast</strong> and a cluttered layout, making it hard to find "Logout" or distinguish active states.
                                        </p>
                                    </div>
                                    <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-green-100 px-2 py-0.5 rounded">SOLUTION</span>
                                        </h4>
                                        <p className="text-green-900/80">
                                            We introduced a <strong>high-contrast sidebar</strong> with grouped navigation and separated utility functions for better findability.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visuals for Dashboard */}
                            <div className="space-y-16">
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-muted-foreground ml-1">Before</div>
                                    <img
                                        src={nuanceoDashboardBefore}
                                        alt="Original Dashboard Interface"
                                        className="w-full rounded-lg opacity-90 grayscale shadow-sm hover:grayscale-0 transition-all duration-300 border border-gray-200"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-primary ml-1">After</div>
                                    <img
                                        src={nuanceoDashboardAfter}
                                        alt="Redesigned Dashboard"
                                        className="w-full rounded-lg shadow-xl ring-1 ring-black/5"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Change 2: Critique Score */}
                        <div className="w-full">
                            <hr className="border-gray-100 mb-24" />
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-8">2. Critique Score Experience</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-red-100 px-2 py-0.5 rounded">PROBLEM</span>
                                        </h4>
                                        <p className="text-red-900/80">
                                            Students struggled to assess artworks quantitatively due to confusing buttons and a lack of feedback on selected scores.
                                        </p>
                                    </div>
                                    <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-green-100 px-2 py-0.5 rounded">SOLUTION</span>
                                        </h4>
                                        <p className="text-green-900/80">
                                            We streamlined the scoring process with <strong>clear active states</strong> and a slider, minimizing clicks and letting users focus on the artwork.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visuals for Score */}
                            <div className="space-y-16">
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-muted-foreground ml-1">Before</div>
                                    <img
                                        src={nuanceoScoreBefore}
                                        alt="Original Scoring Interface"
                                        className="w-full rounded-lg opacity-90 grayscale shadow-sm hover:grayscale-0 transition-all duration-300 border border-gray-200"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-primary ml-1">After</div>
                                    <img
                                        src={nuanceoScoreAfter}
                                        alt="Redesigned Scoring Interface"
                                        className="w-full rounded-lg shadow-xl ring-1 ring-black/5"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Change 3: Overall Flow */}
                        <div className="w-full">
                            <hr className="border-gray-100 mb-24" />
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-8">3. Overall Critique Flow</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-red-100 px-2 py-0.5 rounded">PROBLEM</span>
                                        </h4>
                                        <p className="text-red-900/80">
                                            Navigation between different critiques was disjointed, requiring excessive scrolling and context-switching that fatigued users.
                                        </p>
                                    </div>
                                    <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                            <span className="text-sm bg-green-100 px-2 py-0.5 rounded">SOLUTION</span>
                                        </h4>
                                        <p className="text-green-900/80">
                                            We introduced a unified view where artworks, critique tools, and discussions coexist, reducing friction and keeping users in the flow.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visuals for Flow */}
                            <div className="space-y-16">
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-muted-foreground ml-1">Before</div>
                                    <img
                                        src={nuanceoFlowBefore}
                                        alt="Original Critique Flow"
                                        className="w-full rounded-lg opacity-90 grayscale shadow-sm hover:grayscale-0 transition-all duration-300 border border-gray-200"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="uppercase tracking-wider text-xs font-bold text-primary ml-1">After</div>
                                    <img
                                        src={nuanceoFlowAfter}
                                        alt="Unified Critique Experience"
                                        className="w-full rounded-lg shadow-xl ring-1 ring-black/5"
                                    />
                                </div>
                            </div>
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
            <nav className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-24">
                <div className="flex justify-start items-center">
                    <Link to="/hp" className="group text-left p-4 -ml-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="block text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Prev</span>
                        <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gray-600 transition-colors">
                            HP AI Companion
                        </span>
                    </Link>
                </div>
            </nav>

            <Footer />
        </div>
    );
};

export default NuanceoCaseStudy;
