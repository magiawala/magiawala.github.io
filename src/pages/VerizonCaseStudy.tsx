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

        {/* Context Image */}
        {/* Context Image - Placeholder for now or remove if no asset */}
        <div className="py-12 bg-gray-50 mb-12 flex justify-center items-center text-gray-400 italic">
          [Project Imagery Confidential]
        </div>

        {/* Design Process Section - Simplified for placeholder */}
        <CaseStudySection label="DESIGN PROCESS" title="Approach">
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
