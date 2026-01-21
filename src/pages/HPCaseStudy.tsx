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
                <CaseStudyHero
                    title="Designing Confidence in Hybrid AI"
                    subtitle="Redesigning the HP AI Companion to help students seamlessly navigate Local and Cloud AI."
                    role="Product Designer"
                    timeline="Fall 2024"
                    tools="Figma, Testing"
                    team="HP Design Team"
                    heroImage={heroVerizon} // TODO: Replace with HP hero image
                    accentColor="from-blue-600/90 to-blue-800/80"
                />

                {/* Introduction */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Challenge</h2>
                                <div className="text-muted-foreground space-y-1 text-lg">
                                    <p>How do you show the complexity of Hybrid AI in a way that feels smooth, intuitive, and trustworthy?</p>
                                </div>
                            </div>
                            <div className="md:col-span-8">
                                <p className="body-text mb-6">
                                    The first time I encountered the idea of hybrid AI in the HP AI PC Companion, I was intrigued. Local AI and cloud AI working together sounded powerful, fast, private, and flexible.
                                </p>
                                <p className="body-text mb-6">
                                    But it also raised a design puzzle: how do you show all of that complexity in a way that feels smooth, intuitive, and trustworthy for students? It wasn't a problem of missing features; it was a problem of perception and flow.
                                </p>
                                <p className="body-text">
                                    Students already had the technology at their fingertips. The challenge was making it approachable, discoverable, and something they could confidently weave into their daily academic lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Grid */}
                <div className="container mx-auto px-6 md:px-12 lg:px-16 mb-24">
                    {/* Placeholder - using Verizon assets until updated */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-sm">
                            <img src={verizonGallery1} alt="Process 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-sm">
                            <img src={verizonGallery2} alt="Process 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-sm">
                            <img src={verizonGallery3} alt="Process 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                <CaseStudySection title="Listening First">
                    <p className="body-text mb-6">
                        I started with research. Talking to AI experts gave me a better understanding of local AI. Unlike cloud AI, it offered cost effectiveness, privacy, and offline functionality. But these strengths weren’t obvious to students, and that lack of visibility created a trust gap.
                    </p>
                    <p className="body-text">
                        Through interviews and surveys, another pattern emerged. Students described using AI in specific categories: <strong>writing essays, coding assignments, summarizing lecture notes, and organizing study material.</strong> These categories became important signals: if the Companion could reflect and adapt to these patterns, it would feel more relevant.
                    </p>
                </CaseStudySection>

                {/* Banner Image */}
                <div className="w-full">
                    <img src={verizonBanner} alt="Project Banner" className="w-full h-auto object-cover" />
                </div>

                <CaseStudySection title="Seeing the Friction Up Close">
                    <p className="body-text mb-6">
                        Research insights shaped the direction, but usability testing revealed the details. During think-aloud sessions, I watched students freeze at a blank input box, unsure how to start.
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-muted-foreground text-lg mb-8">
                        <li><strong className="text-foreground">Hesitation:</strong> Students wandered through the sidebar, scrolling endlessly to find folders or past chats.</li>
                        <li><strong className="text-foreground">Confusion:</strong> Many couldn’t tell when the system was running locally versus in the cloud, limiting trust.</li>
                    </ul>
                    <p className="body-text">
                        What struck me most wasn’t just the usability issues themselves, it was the hesitation they created. Students weren’t confident in what to do next.
                    </p>
                </CaseStudySection>

                <CaseStudySection title="Designing for Clarity">
                    <p className="body-text mb-8">
                        From those insights, the redesign focused on one principle: help students feel confident, not uncertain. That translated into three key changes:
                    </p>

                    <div className="space-y-12">
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">1. Transparent Onboarding</h4>
                            <p className="body-text mb-4">I designed an onboarding flow that explained when local AI is active and why. Transparency replaced guesswork with understanding.</p>
                            <LazyVideo src={onboardingVideo} poster={verizonThumb} />
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">2. Guided Beginnings</h4>
                            <p className="body-text mb-4">I replaced the blank input with suggested prompts, giving students a way to start immediately.</p>
                            <LazyVideo src={recommendationsVideo} poster={verizonThumb} />
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">3. Logical Navigation</h4>
                            <p className="body-text mb-4">I reorganized the layout, moving **Folders into History**, so retrieval and organization felt intuitive.</p>
                            <LazyVideo src={fullPrototypeVideo} poster={verizonThumb} />
                        </div>
                    </div>
                </CaseStudySection>

                <CaseStudySection title="Impact">
                    <p className="body-text mb-8">
                        Individually, each change felt small. Together, they made the experience feel more personal: students were less hesitant and moved through the interface smoother.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                            <div className="text-white/80">Improvement in time on task</div>
                        </div>
                        <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-2">70</div>
                            <div className="text-white/80">NPS Score</div>
                        </div>
                        <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-blue-400 mb-2">High</div>
                            <div className="text-white/80">Improved discoverability</div>
                        </div>
                    </div>

                    <div className="mt-16 bg-gray-900/50 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Lessons from the Process</h3>
                        <ul className="space-y-4 text-white/80 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">•</span>
                                <span><strong>Onboarding drives trust.</strong> Students engaged more once they understood local vs. cloud AI.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">•</span>
                                <span><strong>Navigation tweaks matter.</strong> Moving one feature (Folders) had an outsized effect on efficiency.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">•</span>
                                <span><strong>Blank states are risky.</strong> Prompts give students confidence to start.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">•</span>
                                <span><strong>Personalization starts with listening.</strong> Insights from student categories guided relevance.</span>
                            </li>
                        </ul>
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
