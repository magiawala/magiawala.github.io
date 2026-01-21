import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import { Link } from "react-router-dom";
import CaseStudyImage from "@/components/CaseStudyImage";

import verizonThumb from "@/assets/verizon-thumb.png";
import heroVerizon from "@/assets/hero-verizon.jpg";
import researchImage from "@/assets/research-process.jpg"; // Keeping generic for now, or replace if better asset found
import verizonOverview from "@/assets/verizon-overview.png"; // Keeping if needed, though replaced
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

const VerizonCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header variant="default" />

      <main>
        {/* Hero Section - Full width with gradient overlay */}
        <CaseStudyHero
          title="Defined product flows and testing for Verizon small business sales teams"
          subtitle="Designed an AI sales assist tool for Verizon Business, shaping early product concepts and helping SMB sales teams close deals faster."
          role="Product Designer"
          timeline="Summer 2024"
          tools="Figma, AI Design"
          team="Verizon SMB team"
          heroImage={heroVerizon}
          accentColor="from-red-600/90 to-red-800/80" // Verizon Red-ish
        />

        {/* Project Overview / Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
              {/* Left Column: Title & Role */}
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Verizon Business</h2>
                <div className="text-muted-foreground space-y-1 text-lg">

                  <p>Product Designer</p>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="md:col-span-8">
                <p className="body-text mb-6">
                  I worked as a Product Designer with Verizon Sales team, where I collaborated with AI engineers to design a tablet-first sales enablement tool. My goal was to empower sales representatives to navigate complex B2B conversations and increase confidence in selling "above-network" solutions.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery (Overview Images) */}
        <div className="w-full bg-gray-50 py-16 md:py-24 mb-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-md shadow-sm">
                <img
                  src={verizonGallery1}
                  alt="Verizon Team Interaction"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-md shadow-sm">
                <img
                  src={verizonGallery2}
                  alt="Verizon Team Group Photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-md shadow-sm">
                <img
                  src={verizonGallery3}
                  alt="Verizon Business Store Display"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Context Section */}
        <div id="case-study-context">
          <CaseStudySection title="Context">
            <p className="body-text mb-6">
              Verizon Business offers high-value solutions like cloud security and dedicated networks.
              The sales teams needed a more efficient way to recommend them by identifying customer needs and closing deals faster.
            </p>
            <p className="body-text mb-8">
              My project focused on{" "}
              <strong>
                designing an AI-powered sales assist tool
              </strong>{" "}
              that integrates seamlessly into their existing in-store workflows.
              I worked on defining product flows and conducting testing to ensure the solution met the diverse needs of sales agents.
            </p>

            <h3 className="subsection-title">Stakeholders</h3>
            <p className="body-text">
              I had to continuously communicate with technical and business stakeholders to align on feasibility and business goals. I checked in with AI engineers to understand the limitations of the recommendation engine and proposed UI solutions that masked latency.            </p>
          </CaseStudySection>
        </div>



        {/* Problem Section */}
        <CaseStudySection title="Problem">
          <div className="mb-6">
            <h3 className="subsection-title">
              The Challenge:
            </h3>
            <p className="text-lg md:text-xl text-foreground font-medium mb-6">
              How might we help sales reps effectively recommend business solutions to smb customers and meet their needs?
            </p>
          </div>
          <p className="body-text">
            Sales agents often navigate complex product catalogs and information sources.
            The goal was to streamline this process, reducing time-to-quote and improving accuracy.
          </p>
        </CaseStudySection>

        {/* Banner Image */}
        <div className="w-full mb-16 md:mb-24 mt-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img src={verizonBanner} alt="Verizon Business Workflow" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Research Section */}
        <CaseStudySection label="DISCOVERY" title="Research">
          <p className="body-text mb-6">
            My first step was to understand the constraints of the physical store environment. I researched existing system and shadowed reps during customer interactions. I conducted user interviews with business reps to learn how they currently found customer information and neeed. They revealed that they often relied on memory or "questionaire sheet" because there were no digital tools.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            <blockquote className="border-l-4 border-red-600 pl-6 py-2 italic text-muted-foreground bg-red-50/10 dark:bg-red-900/5 rounded-r-lg">
              <p className="mb-2">"I am not always available at the store as I have 5 stores under me."</p>
              <footer className="text-sm font-semibold text-foreground text-left not-italic">— Business Representative</footer>
            </blockquote>

            <blockquote className="border-l-4 border-red-600 pl-6 py-2 italic text-muted-foreground bg-red-50/10 dark:bg-red-900/5 rounded-r-lg">
              <p className="mb-2">"I don't know about the business solution that verizon provides above the network. When interacting with customers, I'm afraid I'll quote the wrong thing so I just take their information and send it to online customer support."</p>
              <footer className="text-sm font-semibold text-foreground text-left not-italic">— Sales Representative Manager</footer>
            </blockquote>
          </div>
        </CaseStudySection>

        {/* Impact Section */}
        <CaseStudySection label="IMPACT" title="Key Results">
          <div className="flex flex-col gap-4">
            {/* Metric 1 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-lg md:text-xl text-foreground">
                <span className="font-bold text-red-600 mr-1">30%</span>
                reduction in customer interaction time
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-lg md:text-xl text-foreground">
                Saves reps <span className="font-bold text-foreground mx-1">2hrs</span> a day and attend more customers
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-lg md:text-xl text-foreground">
                Net Promoter Score (NPS) of <span className="font-bold text-foreground mx-1">72</span> for the system
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Solution Section: Recommendation */}
        <CaseStudySection label="SOLUTION" title="Discovery Questions">
          <div className="mb-12">
            <p className="body-text mb-6">
              I explored asking detailed, open-ended questions, but testing showed this slowed down the interaction significantly. My final solution uses simple, guided prompts that help reps capture key business insights quickly without disrupting the natural flow of eye contact and conversation.
            </p>
            <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-dashed border-gray-300 overflow-hidden shadow-sm">
              <LazyVideo src={businessVideo} autoPlay loop muted playsInline className="w-full h-auto" />
            </div>
          </div>
        </CaseStudySection>

        {/* Solution Section: Recommendation */}
        <CaseStudySection label="SOLUTION" title="Recommendation">
          <div className="mb-12">
            <p className="body-text mb-6">
              I experimented with showing the recommended products by AI, but found that reps want to show more options as that would be more practical . The final design presents a 'Smart Suggestion' that includes transparent reasoning and relevant add-ons and other products, giving reps the confidence to explain why this solution is the perfect fit and customer with multiple choice.
            </p>
            <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border border-dashed border-gray-300 overflow-hidden shadow-sm">
              <LazyVideo src={recommendationsVideo} autoPlay loop muted playsInline className="w-full h-auto" />
            </div>
          </div>
        </CaseStudySection>


        {/* Outcome Section */}
        <CaseStudySection title="Outcome">
          <div className="space-y-12">
            <div>
              <h3 className="subsection-title flex items-center gap-2">Trust Tools</h3>
              <p className="body-text">
                I collaborated with the engineering team to ensure the AI's logic was transparent. We introduced "Why this recommendation?" tooltips, which helped reps trust the suggestion rather than feeling like the tool was replacing their judgment.
              </p>
            </div>

            <div>
              <h3 className="subsection-title flex items-center gap-2">Scalable Design System</h3>
              <p className="body-text mb-6">
                I designed the project to scale as a reusable tablet framework for future Verizon SMB tools. I detailed development notes and handed off an organized Figma file to allow engineers to implement the recommendation card structure across other product lines without needing custom design work.
              </p>
              <div className="w-full h-auto rounded-md overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={verizonDesignSystem}
                  alt="Verizon Scalable Design System Components"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </CaseStudySection>


        {/* Full Design Video Section */}
        <div className="w-full bg-gray-50 py-16 md:py-24 mb-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="bg-gray-200 rounded-lg shadow-sm flex items-center justify-center text-gray-400 border border-dashed border-gray-300 overflow-hidden">
              <LazyVideo src={fullPrototypeVideo} autoPlay loop muted playsInline className="w-full h-auto" />
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm md:text-base font-medium">Final Sales Assist Tool Design</p>
          </div>
        </div>


        {/* Takeaways Section */}
        <CaseStudySection title="Takeaways">
          <div className="space-y-12">
            <div>
              <h3 className="subsection-title flex items-center gap-2">Develop Design Craft</h3>
              <p className="body-text">
                This project allowed me to practice adapting enterprise design systems for tablet contexts. I sought opportunities to experiment with AI interfaces, specifically how to present "uncertain" data (AI predictions) in a way that looks authoritative to a user. Through my collaborations with engineers, I learned how to design for latency creating "skeleton screens" that keep the user engaged while the AI processes data.
              </p>
            </div>

            <div>
              <h3 className="subsection-title flex items-center gap-2">Embrace the Adventure</h3>
              <p className="body-text">
                Working with Verizon, I thought I would just be designing UI screens, but I discovered opportunities to work on my soft skills such as stakeholder management and technical translation. I had to be proactive in leading conversations between the "tech talk" of engineers and the "sales talk" of the reps. The most rewarding experience was seeing a rep use the prototype without losing natural conversation with the customer.
              </p>
            </div>
          </div>
        </CaseStudySection>
      </main>

      {/* Project Navigation */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-24">
        <div className="flex justify-end items-center">


          {/* Next Project */}
          <Link to="/hp" className="group text-right p-4 -mr-4 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="block text-xs font-bold text-gray-400 tracking-wider mb-2 uppercase">Next</span>
            <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gray-600 transition-colors">
              HP AI Companion
            </span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerizonCaseStudy;
