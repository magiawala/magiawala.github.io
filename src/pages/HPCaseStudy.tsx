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

import onboardingVideo from "@/assets/HPOnboarding.webm";
import businessVideo from "@/assets/HPNav.webm";
import recommendationsVideo from "@/assets/Recommendations.webm";
import fullPrototypeVideo from "@/assets/Full Prototype.webm";


import hpHero from "@/assets/hp-hero-2.png";
import HPBanner from "@/assets/HP banner.png";
import hpThinkAloud from "@/assets/hp-think-aloud.png";
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
                    team="HP AI Design Team"
                    heroImage={hpHero}
                    accentColor="from-blue-600/90 to-blue-800/80"
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

                {/* Context Section */}
                <div id="case-study-context">
                    <CaseStudySection title="Context">
                        <p className="body-text mb-6">
                            The HP AI Companion utilizes a combination of Local AI (fast, private, offline) and Cloud AI. However, user often struggled to understand which AI they were using, leading to a "trust gap" where they hesitated to rely on the tool for critical task.
                        </p>
                        <p className="body-text mb-8">
                            My project focused on redesigning the onboarding and home experience to bridge this gap. By defining clear onboarding questions and using visual storytelling, that would help users understand the tool before using it.
                        </p>

                        <h3 className="subsection-title">Stakeholders</h3>
                        <p className="body-text">
                            I had to continuously communicate with a cross-functional team of UX Researchers, Engineer, and Product Manager to align on technical constraints and user needs. I worked with AI experts to understand the specific benefits of Local AI (privacy, speed) and collaborated with engineering to translate those capabilities into user-facing product.            </p>
                    </CaseStudySection>
                </div>


                {/* Problem Section */}
                <CaseStudySection title="Problem">
                    <div className="mb-6">
                        <h3 className="subsection-title">
                            The Challenge:
                        </h3>
                        <p className="text-lg md:text-xl text-foreground font-medium mb-6">
                            How might we build confidence in HP AI Companion by making its working clear?
                        </p>
                    </div>
                    <p className="body-text">
                        Students often freeze at the "blank slate" of an AI tool, unsure of what to ask or where their data is going. The goal was to eliminate this hesitation, making the tool approachable and clearly signaling the privacy benefits of Local processing.            The goal was to streamline this process, reducing time-to-quote and improving accuracy.
                    </p>
                </CaseStudySection>

                {/* Banner Image */}
                <div className="w-full">
                    <img src={HPBanner} alt="Project Banner" className="w-full h-auto object-cover" />
                </div>


                {/* Impact Section */}
                <CaseStudySection label="IMPACT" title="Key Results">
                    <div className="flex flex-col gap-4">
                        {/* Metric 1 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                <span className="font-bold text-blue-600 mr-1">40%</span>
                                improvement in time on task
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                User retention <span className="font-bold text-blue-600 mx-1">increased by 10%</span>
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                Net Promoter Score (NPS) of <span className="font-bold text-blue-600 mx-1">70</span> for the system
                            </p>
                        </div>
                    </div>
                </CaseStudySection>

                {/* Discovery Section */}
                <CaseStudySection label="DISCOVERY" title="Research Questions">
                    <p className="body-text mb-6">
                        I started with questions to understand the user mental model regarding AI:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-muted-foreground text-lg mb-12">
                        <li><strong className="text-foreground">"How is AI used in daily workflows?"</strong></li>
                        <li><strong className="text-foreground">"When do students prefer Local AI over Cloud AI?"</strong></li>
                        <li><strong className="text-foreground">"What are the specific pain points in the current version?"</strong></li>
                    </ul>

                    <h3 className="subsection-title">Think Aloud (Current Version)</h3>
                    <p className="body-text mb-6">
                        We ran Think Aloud sessions on the existing "Old Version" to identify friction points. The feedback was clear:
                    </p>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold mt-1">1</div>
                            <div>
                                <h4 className="font-bold text-foreground text-lg">Icons Misread</h4>
                                <p className="text-muted-foreground">Users couldn't decipher the navigation icons, leading to a feeling of "getting lost."</p>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold mt-1">2</div>
                            <div>
                                <h4 className="font-bold text-foreground text-lg">History Hard to Access</h4>
                                <p className="text-muted-foreground">Past work was buried, making the tool feel like a "one-off" chat rather than a long-term study partner.</p>
                            </div>

                        </li>
                    </ul>
                    <div className="mt-16">
                        <img src={hpThinkAloud} alt="Think Aloud" className="rounded-lg shadow-lg" />
                    </div>
                    <h3 className="subsection-title mt-12">Insights</h3>
                    <p className="body-text mb-6">
                        The research revealed that users don't care about the "tech stack" (Local vs. Cloud) as much as they care about the Task. They categorized their needs into specific buckets: Writing, Coding, and Summarizing.
                    </p>
                    <p className="body-text">
                        We realized we needed a <strong className="text-foreground">Unified Approach</strong> a clear, informative interface that acknowledged the technology's limits while highlighting the specific benefits (privacy/speed) relevant to their current task.
                    </p>
                </CaseStudySection>


                <CaseStudySection title="Solution">
                    <div className="space-y-12">
                        <div>
                            <h3 className="subsection-title">Onboarding</h3>
                            {/* <p className="text-xl text-foreground font-semibold mb-2">Addressing "Awareness of Local vs. Cloud AI"</p> */}
                            <p className="body-text mb-4">
                                The previous version lacked an onboarding flow entirely, dropping students into the tool with no context. In the final design, I introduced a dedicated Welcome Experience that captures student interests to personalize the feed, explains the tool's core capabilities, and explicitly addresses data privacy to build trust in the Local AI features from day one.
                            </p>
                            <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-dashed border-gray-300 overflow-hidden shadow-sm">
                                <LazyVideo src={onboardingVideo} autoPlay loop muted playsInline className="w-full h-auto" />
                            </div>
                        </div>

                        <div>
                            <h3 className="subsection-title">Navigation & Guided Home</h3>
                            {/* <p className="text-xl text-foreground font-semibold mb-2">Addressing "Poor Navigation" & "Blank Slate Freeze"</p> */}
                            <p className="body-text mb-4">
                                The navigation buried past work behind obscure icons, making it difficult for users to resume tasks. In the final design, I prioritized History Visibility by moving past sessions to the sidebar. This ensures users can instantly see and access their previous research, transforming the tool from a 'one-off' chat into a reliable long-term study partner
                            </p>
                            <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-dashed border-gray-300 overflow-hidden shadow-sm">
                                <LazyVideo src={businessVideo} autoPlay loop muted playsInline className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </CaseStudySection>



                <CaseStudySection title="Outcome">
                    <div className="space-y-12">
                        <div>
                            <h3 className="subsection-title">Trust & Confidence</h3>
                            <p className="body-text">
                                Beyond the metrics, the qualitative shift was significant. Users described the Companion as logical and approachable. By signaling when the secure Local AI was active, successfully turned a technical constraint into a privacy trust factor that users valued.
                            </p>
                        </div>
                    </div>
                </CaseStudySection>


                <CaseStudySection title="Takeaways">
                    <div className="space-y-12">
                        <div>
                            <h3 className="subsection-title">Onboarding Drives Trust</h3>
                            <p className="body-text">
                                This project allowed me to see that transparency isn't just about legal text; it's about UX. I learned that explaining why Local AI is active during the onboarding flow replaced user guesswork with understanding.
                            </p>
                        </div>

                        <div>
                            <h3 className="subsection-title">Blank States are Risky</h3>
                            <p className="body-text">
                                Working on this redesign, I learned that "simplicity" doesn't mean "empty." I had to be proactive in moving away from the standard "empty chat box" pattern. The most rewarding lesson was seeing students use the suggested prompts to jump straight into their work, transforming a passive tool into an active collaborator.
                            </p>
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
