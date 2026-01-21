import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import { Link } from "react-router-dom";
import CaseStudyImage from "@/components/CaseStudyImage";

import verizonThumb from "@/assets/verizon-thumb.png";
import heroVerizon from "@/assets/hero-verizon.jpg"; // You likely want to change this to an HP asset later
import researchImage from "@/assets/research-process.jpg";
import verizonGallery1 from "@/assets/verizon-gallery-1.jpg";
import verizonGallery2 from "@/assets/verizon-gallery-2.jpg";
import verizonGallery3 from "@/assets/verizon-gallery-3.png";

import onboardingVideo from "@/assets/Onboarding.webm";
import businessVideo from "@/assets/Understanding Business.webm";
import recommendationsVideo from "@/assets/Recommendations.webm";
import fullPrototypeVideo from "@/assets/Full Prototype.webm";


import verizonDesignSystem from "@/assets/verizon-design-system.png";
import verizonBanner from "@/assets/Verizon banner.png";
import LazyVideo from "@/components/LazyVideo";

const HPCaseStudy = () => {
    return (
        <div className="min-h-screen bg-background font-inter">
            <Header variant="default" />

            <main>
                {/* Hero Section - Full width with gradient overlay */}
                <CaseStudyHero
                    title="Revamped onboarding and home navigation for HP AI Companion"
                    subtitle="Designed an intuitive onboarding and home screen indicators for AI PC Companion experience clarifying AI modes (Local vs. Cloud), optimizing task completion by 25%."
                    role="Product Designer"
                    timeline="Fall 2024"
                    tools="Figma, Testing"
                    team="HP Design Team"
                    heroImage={heroVerizon} // TODO: Replace with HP hero image
                    accentColor="from-blue-600/90 to-blue-800/80" // Blue for HP
                />

                {/* Project Overview / Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            {/* Left Column: Title & Role */}
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">HP Inc</h2>
                                <div className="text-muted-foreground space-y-1 text-lg">

                                    <p>Product Designer</p>
                                </div>
                            </div>

                            {/* Right Column: Narrative */}
                            <div className="md:col-span-8">
                                <p className="body-text mb-6">
                                    {/* TODO: Add HP specific narrative */}
                                    I worked as a Product Designer on the HP AI Companion, where I collaborated with researchers to validate preference between local and cloud AI models and increase confidence in using the tool for daily tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/*  --- CONTENT SECTIONS (Placeholders) --- */}
                <CaseStudySection title="Problem Space">
                    <p className="body-text mb-8">
                        Users were unclear about when their data was being processed locally on their device versus sent to the cloud. This ambiguity created privacy concerns and reduced trust in the AI Companion features.
                    </p>
                </CaseStudySection>

                {/* Banner Image */}
                <div className="w-full">
                    <img src={verizonBanner} alt="Project Banner" className="w-full h-auto object-cover" />
                </div>


                <CaseStudySection title="Solution">
                    <p className="body-text mb-8">
                        We introduced clear visual indicators and a guided onboarding flow that explicitly educated users on the different processing modes.
                    </p>
                </CaseStudySection>

                {/*  --- VIDEO PLACEHOLDERS (Reusing Verizon for layout structure, update sources later) --- */}
                <CaseStudySection title="Final Design">
                    <div className="space-y-24">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold mb-4">Onboarding Flow</h3>
                            <p className="body-text mb-4">Guided experience explaining local vs cloud AI.</p>
                            <LazyVideo src={onboardingVideo} poster={verizonThumb} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold mb-4">Home Navigation</h3>
                            <p className="body-text mb-4">Clear mode switching and status indicators.</p>
                            <LazyVideo src={fullPrototypeVideo} poster={verizonThumb} />
                        </div>
                    </div>
                </CaseStudySection>


                <CaseStudySection title="Outcome">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="body-text mb-6">
                                The new design resulted in a 25% increase in task completion rates for mode-switching tasks and significantly improved user comprehension of privacy features in usability testing.
                            </p>
                        </div>
                        <div>
                            <img src={verizonDesignSystem} alt="Design System" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </CaseStudySection>

            </main>

            {/* Project Navigation */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-24">
                <div className="flex justify-between items-center">
                    {/* Previous Project */}
                    <Link to="/verizon" className="group text-left p-4 -ml-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="block text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Prev</span>
                        <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gray-600 transition-colors">
                            Verizon Business
                        </span>
                    </Link>

                    {/* Next Project - Disabled or loop back */}
                    {/* <Link to="/verizon" className="group text-right p-4 -mr-4 rounded-lg hover:bg-gray-50 transition-colors"> ... </Link> */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HPCaseStudy;
