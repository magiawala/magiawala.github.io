import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import { Link } from "react-router-dom";
import { usePageAnalytics } from "@/hooks/usePageAnalytics";
import integrateHero from "@/assets/image_mockup.png";
import onboardingVideoImg from "@/assets/Onboarding Videoh.png";
import moduleVideoImg from "@/assets/Module_video.png";
import coursePageEditImg from "@/assets/Course_page_edit.png";
import currentV1Img from "@/assets/Current v1.png";
import currentV2Img from "@/assets/Current v2.png";

const IntegrateCaseStudy = () => {
    usePageAnalytics("Integrate Page");

    return (
        <div className="min-h-screen bg-background font-inter">
            <Header variant="default" />

            <main>
                {/* Hero Section */}
                <CaseStudyHero
                    title="Integrate: Scaling a Self-Therapy Vision from Zero to One"
                    subtitle="Architected the core user experience—transitioning the platform from a text-heavy, legacy-driven tool to a modern, video-first wellness journey."
                    role="Founding Product Designer"
                    timeline="8-week Sprint"
                    tools="Figma, Design Systems, Rapid Prototyping"
                    team="2 Designers, 2 PM, 2 Backend Engineer, 1 Frontend Engineer"
                    accentColor="from-[#001C3E]/90 to-[#001C3E]/80"
                    rightImage={integrateHero}
                />

                {/* Project Overview / Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                            {/* Left Column: Title & Role */}
                            <div className="md:col-span-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Integrate</h2>
                                <div className="text-muted-foreground space-y-1 text-lg">
                                    <p>Product Designer</p>
                                </div>
                            </div>

                            {/* Right Column: Narrative */}
                            <div className="md:col-span-8">
                                <p className="body-text mb-6">
                                    As the Product Designer, I was responsible for the end-to-end design ecosystem of Integrate. I architected the core user experience transitioning the platform from a text heavy, legacy driven tool to a modern, video first wellness journey, while building a custom Administrative CMS to replace a rigid, manual infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Context Section */}
                <div id="case-study-context">
                    <CaseStudySection title="Context">
                        <p className="body-text mb-6">
                            Integrate is a self-therapy startup providing high-quality clinical content for BPD and C-PTSD. While the therapy was scientifically sound, the initial delivery method was a barrier to engagement. The platform faced a 65% dropout rate because the interface felt more like an administrative database than a supportive wellness space.
                        </p>
                        <p className="body-text">
                            My goal was to transform this functional foundation into a calming, high-retention consumer product.
                        </p>
                    </CaseStudySection>
                </div>

                {/* Problem Section */}
                <CaseStudySection title="Problem">
                    <p className="body-text mb-8">
                        The original platform utilized a template based framework that prioritized technical data collection over the user’s emotional state.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">Onboarding Friction</h4>
                            <p className="body-text">
                                A 6-page, 10-question survey served as an extensive entry barrier. The length and depth of the initial intake caused significant Day 1 churn before users reached the actual content.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">High Visual Density</h4>
                            <p className="body-text">
                                Lectures were primarily text-based, resembling a textbook. For users seeking mental health support, navigating dense walls of text created high cognitive load and felt impersonal.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">Operational Limitations</h4>
                            <p className="body-text">
                                The Admin portal utilized a legacy backend that was difficult to navigate. This forced the Founder to manually organize content, making it nearly impossible to update therapy paths or iterate on the product efficiently.
                            </p>
                        </div>
                    </div>

                    {/* V1 and V2 Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 mb-4 lg:-mx-16 xl:-mx-24">
                        <div className="rounded-2xl overflow-hidden hover-lift shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gray-50 flex items-center justify-center p-4">
                            <img
                                src={currentV1Img}
                                alt="Integrate V1 Previous Interface"
                                className="w-full h-auto rounded-xl object-contain"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden hover-lift shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-gray-50 flex items-center justify-center p-4">
                            <img
                                src={currentV2Img}
                                alt="Integrate V2 Current Interface"
                                className="w-full h-auto rounded-xl object-contain"
                            />
                        </div>
                    </div>
                </CaseStudySection>

                {/* Impact Section */}
                <CaseStudySection label="IMPACT" title="Key Results">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Metric 1 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                <span className="font-bold text-blue-600 block mb-2 text-3xl">45%</span>
                                Increase in onboarding completion by streamlining a guided flow.
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                <span className="font-bold text-blue-600 block mb-2 text-3xl">30%</span>
                                Reduction in user churn by transitioning from text-dense modules to a video-led experience.
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                <span className="font-bold text-blue-600 block mb-2 text-3xl">70%</span>
                                Faster content deployment for the Founder through an intuitive, custom CMS.
                            </p>
                        </div>

                        {/* Metric 4
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg md:text-xl text-foreground">
                                <span className="font-bold text-blue-600 block mb-2 text-2xl">Aesthetic Professionalization</span>
                                Shifted the user experience from a functional "medical utility" to a personalized, calming wellness journey.
                            </p>
                        </div> */}
                    </div>
                </CaseStudySection>

                {/* Research Section */}
                <CaseStudySection label="DISCOVERY" title="Research">
                    <p className="body-text mb-8">
                        I conducted in-depth interviews with both patients and clinicians to identify critical friction points in the flow and pinpoint gaps in the therapeutic experience.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">Consistency & Trust</h4>
                            <p className="body-text">
                                I found that the inconsistent design patterns in the legacy system were inadvertently creating a barrier to user trust. In a therapeutic context, a predictable, polished interface is essential for making the user feel safe.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">Information Architecture</h4>
                            <p className="body-text">
                                The platform was difficult to navigate because it lacked a clear hierarchy. Users had to scan large blocks of text to find actionable steps, which is difficult for individuals in high-stress states.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground text-xl mb-2">The Experience Gap</h4>
                            <p className="body-text">
                                Feedback indicated that while the content was world-class, the experience felt utilitarian rather than personal. Users needed a "softer" digital environment that felt like a sanctuary rather than a portal.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50/50 p-8 md:p-12 rounded-2xl border border-blue-100">
                        <blockquote className="text-l md:text-l text-blue-900 italic font-medium leading-relaxed mb-6">
                            "The videos are life-changing, but the website feels like an insurance portal. It’s dense and makes me feel a bit overwhelmed just trying to find where I left off."
                        </blockquote>
                        <div className="text-blue-800 font-semibold tracking-wide uppercase text-sm">
                            — User Feedback Sentiment
                        </div>
                    </div>
                </CaseStudySection>

                {/* Solution Section */}
                <CaseStudySection title="Solution">
                    <div className="space-y-16">
                        <div>
                            <h3 className="subsection-title mb-4">1. The Guided Onboarding</h3>
                            <p className="body-text mb-4">
                                I replaced the 6-page survey for pre-BPD diagnosis into a structured break down reducing its task time.
                            </p>
                            <p className="body-text mb-8">
                                <strong className="text-foreground">Human-Centric Design:</strong> I introduced a split-screen layout with a video guide at the start before the survey questions. This immediately provided a human face to the platform, making the questions feel like a welcoming conversation rather than a clinical audit.
                            </p>

                            {/* Onboarding Video Image */}
                            <div className="my-12">
                                <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white w-full h-auto">
                                    <img
                                        src={onboardingVideoImg}
                                        alt="Onboarding Video Interface"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="subsection-title mb-4">2. "Course Notation" Learning (Iteration 3)</h3>
                            <p className="body-text mb-4">
                                I transitioned the product from a text-heavy library to a focused video learning environment.
                            </p>
                            <ul className="space-y-4 body-text">
                                <li>
                                    <strong className="text-foreground">Streamlined Navigation:</strong> I implemented a "Masterclass" style UI where the video is the focal point, using collapsible chapters to manage the hierarchy.
                                </li>
                                <li>
                                    <strong className="text-foreground">Integrated Support Tools:</strong> I designed contextual Notes and Transcripts sections. This allowed users to engage with the video and capture insights without navigating away, maintaining their focus and "flow."
                                </li>
                            </ul>
                        </div>

                        <div className="my-12">
                            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white w-full h-auto">
                                <img
                                    src={moduleVideoImg}
                                    alt="Onboarding Video Interface"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="subsection-title mb-4">3. Custom "Visual" Admin CMS</h3>
                            <p className="body-text">
                                The original admin backend required PMs to encode course data using unintuitive JSON structures. I worked closely with the backend engineer to design a custom, GUI-based CMS that drastically reduced the time it took to deploy a new therapeutic module.
                            </p>

                            {/* Course Page Edit Image */}
                            <div className="my-12">
                                <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white w-full h-auto">
                                    <img
                                        src={coursePageEditImg}
                                        alt="Course Page Edit CMS Interface"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </CaseStudySection>

                {/* Takeaways Section */}
                <CaseStudySection title="Takeaways">
                    <div className="space-y-12">
                        <div>
                            <h3 className="subsection-title mb-4">The Founding Designer Mindset</h3>
                            <p className="body-text">
                                In a startup environment, design is a strategic lever. I learned that the interface is just as critical as the clinical content. If the experience isn't calming and professional, even the best therapeutic content will struggle to retain the people who need it most.
                            </p>
                        </div>

                        <div>
                            <h3 className="subsection-title mb-4">Consistency as Care</h3>
                            <p className="body-text">
                                By moving away from a rigid, template-based design to a cohesive, custom design system, I realised that visual clarity is a form of empathy. A predictable and clean interface allows users to focus their energy on healing rather than on the friction of navigation.
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

                    {/* Next Project */}
                    <Link to="/nuanceo" className="group text-right p-4 -mr-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="block text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Next</span>
                        <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gray-600 transition-colors">
                            Nuanceo
                        </span>
                    </Link>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default IntegrateCaseStudy;
