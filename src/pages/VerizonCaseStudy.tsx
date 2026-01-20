import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyImage from "@/components/CaseStudyImage";

import verizonThumb from "@/assets/verizon-thumb.png";
import heroVerizon from "@/assets/hero-verizon.jpg";
import researchImage from "@/assets/research-process.jpg"; // Keeping generic for now, or replace if better asset found

const VerizonCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header variant="default" />

      <main>
        {/* Hero Section - Full width with gradient overlay */}
        <CaseStudyHero
          title="Defined product flows and testing for Verizon small business sales teams"
          subtitle="Designed an AI sales assist tool for Verizon Business, shaping early product concepts and helping SMB sales teams close deals faster."
          role="Verizon Business Product Designer"
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Verizon</h2>
                <div className="text-muted-foreground space-y-1 text-lg">
                  <p>Summer 2024 Verizon SMB Team</p>
                  <p>Product Design Intern</p>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="md:col-span-8">
                <p className="body-text mb-6">
                  I interned with the Verizon SMB (Small Medium Business) team, where I worked on designing
                  internal tools and sales assist experiences to improve the workflow efficiency of sales representatives.
                </p>
                <p className="body-text">
                  I had an amazing experience working on various projects throughout the summer and focused
                  on my keystone project: designing an AI-powered sales cockpit that allows agents to find product
                  bundles in a non-invasive and functional way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery (Gray Background) */}
        <div className="w-full bg-gray-50 py-16 md:py-24 mb-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Placeholder 1 */}
              <div className="aspect-[3/4] bg-gray-200 rounded-sm flex items-center justify-center text-gray-400 italic">
                [Team Photo 1]
              </div>
              {/* Placeholder 2 */}
              <div className="aspect-[3/4] bg-gray-200 rounded-sm flex items-center justify-center text-gray-400 italic">
                [Office Photo]
              </div>
              {/* Placeholder 3 */}
              <div className="aspect-[3/4] bg-gray-200 rounded-sm flex items-center justify-center text-gray-400 italic">
                [Team Photo 2]
              </div>
            </div>
          </div>
        </div>


        {/* Context Section */}
        <div id="case-study-context">
          <CaseStudySection title="Context">
            <p className="body-text mb-6">
              Verizon Business serves millions of small and medium-sized businesses.
              The sales teams needed a more efficient way to access product information and close deals.
            </p>
            <p className="body-text mb-8">
              My project focused on{" "}
              <strong>
                designing an AI-powered sales assist tool
              </strong>{" "}
              that integrates seamlessly into their existing workflows.
              I worked on defining product flows and conducting testing to ensure the solution met the diverse needs of sales agents.
            </p>

            <h3 className="subsection-title">👩‍💻 Stakeholders</h3>
            <p className="body-text">
              I collaborated closely with product managers, engineers, and other designers
              to ensure the AI features were technically feasible and aligned with business goals.
            </p>
          </CaseStudySection>
        </div>



        {/* Problem Section */}
        <CaseStudySection title="Problem">
          <div className="mb-6">
            <h3 className="subsection-title">
              ⚡️ The Challenge:
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

        {/* Research Section - NEW */}
        <CaseStudySection label="DISCOVERY" title="Research">
          <p className="body-text mb-6">
            We conducted interviews with 10+ sales representatives to understand their current pain points.
            Key insights revealed that searching for compatibility information was the biggest bottleneck.
          </p>
          <div className="py-12 bg-gray-50 mb-8 flex flex-col justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
            <span className="mb-2">[User Research Findings / Affinity Map Placeholder]</span>
            <span className="text-sm">Image: Research synthesis and key themes</span>
          </div>
        </CaseStudySection>

        {/* Ideation Section - NEW */}
        <CaseStudySection label="IDEATION" title="Wireframing">
          <p className="body-text mb-6">
            I explored multiple modalities for the AI assistant, ranging from a passive side-panel to an active conversational interface.
            Low-fidelity sketches helped us quickly validate flows with stakeholders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="h-48 bg-gray-50 flex justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
              [Sketch 1 Placeholder]
            </div>
            <div className="h-48 bg-gray-50 flex justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
              [Sketch 2 Placeholder]
            </div>
          </div>
        </CaseStudySection>

        {/* Design System / UI Section - NEW */}
        <CaseStudySection label="VISUAL DESIGN" title="Design System">
          <p className="body-text mb-6">
            Leveraging Verizon's VDS (Verizon Design System), I created high-fidelity components that felt native to the agent workspace
            while introducing distinct AI-specific indicators.
          </p>
          <div className="py-20 bg-gray-50 mb-8 flex justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
            [Design System Components & UI Kit Placeholder]
          </div>
        </CaseStudySection>

        {/* Final Solution Section - NEW */}
        <CaseStudySection label="THE SOLUTION" title="Final Designs">
          <p className="body-text mb-6">
            The final redesign integrated the AI assistant directly into the quote configuration flow.
            Agents can now ask natural language questions and receive product recommendations instantly.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="subsection-title">01. Search Experience</h3>
              <p className="body-text mb-4">Optimized natural language search for rapid product lookup.</p>
              <div className="py-32 bg-gray-50 flex justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
                [Final UI: Search Interface Placeholder]
              </div>
            </div>

            <div>
              <h3 className="subsection-title">02. Recommendation Engine</h3>
              <p className="body-text mb-4">Smart bundles suggested based on customer usage profile.</p>
              <div className="py-32 bg-gray-50 flex justify-center items-center text-gray-400 italic rounded-lg border border-dashed border-gray-300">
                [Final UI: Recommendations Placeholder]
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Existing Design Process/Approach (renamed to avoid duplicate 'Approach' if needed, or kept as Process Overview) */}
        {/* Keeping original 'Approach' as 'Process Overview' or similar if desired, but user asked for sections NOT in page. 
            I will keep the existing 'Design Process' section below as it was, but maybe position it earlier or keep it as summary. 
            For now, I will leave the original 'Approach' section as is, assuming it fits the narrative or user can ask to remove. 
        */}

        <CaseStudySection label="PROCESS" title="Process Overview">
          <p className="body-text mb-6">
            We started by mapping out the current sales flow and identifying friction points.
          </p>
        </CaseStudySection>

        {/* Reflection Section */}
        <CaseStudySection title="Reflection">
          <p className="body-text mb-6">
            This opportunity with Verizon allowed me to dive deep into enterprise UX and AI integration.
            Designing for internal tools presents unique challenges in balancing efficiency with discoverability.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </div>
  );
};

export default VerizonCaseStudy;
