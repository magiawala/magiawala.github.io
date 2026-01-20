import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyImage from "@/components/CaseStudyImage";

import heroImage from "@/assets/airbnb-hero.jpg";
import shortcutsImage from "@/assets/shortcuts-panel.jpg";
import researchImage from "@/assets/research-process.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />

      <main>
        {/* Hero Section - Full width with gradient overlay */}
        <CaseStudyHero
          title="Designing a keyboard shortcuts library for Airbnb Plus Tools"
          subtitle="An internal tool to help operations agents work more efficiently through intuitive shortcut discovery and learning."
          role="Experience Design Intern"
          timeline="6 Weeks"
          tools="Figma, Principle"
          team="OpsTech Design Team"
          heroImage={heroImage}
          accentColor="from-[#E55157]/90 to-[#E54F7A]/80"
        />

        {/* Context Section */}
        <CaseStudySection title="Context">
          <p className="body-text mb-6">
            Airbnb Plus is a program for Airbnb listings with exceptional
            quality, comfort, and style. In my team, OpsTech, we developed
            internal tools to help resolve skills shortages and enable employee
            retention within the Airbnb Plus team.
          </p>
          <p className="body-text mb-8">
            My keystone project (six weeks) was to{" "}
            <strong>
              design a library of keyboard shortcuts and develop a foundational
              point-of-view for the company to visualize shortcuts.
            </strong>{" "}
            I conducted a case study on Plus Tools, an evaluation tool used by
            operations agents to determine a listing's Plus program eligibility,
            but also had to keep in mind how my design would work in other tools
            as well.
          </p>

          <h3 className="subsection-title">👩‍💻 Stakeholders</h3>
          <p className="body-text">
            For this project, I had to{" "}
            <strong>
              continuously communicate with my stakeholders to update them on my
              progress as well as be proactive in seeking out feedback
            </strong>
            . I checked in with software engineers Amisha Patel and Matt Montag
            for engineering feedback to identify any limitations or restrictions
            and proposed solutions to any roadblocks. I received creative
            feedback from bi-weekly design critiques with the Airbnb Plus design
            team.
          </p>
        </CaseStudySection>

        {/* Problem Section */}
        <CaseStudySection title="Problem">
          <div className="mb-6">
            <h3 className="subsection-title">
              ⚡️ The Challenge:
            </h3>
            <p className="text-lg md:text-xl text-foreground font-medium mb-6">
              How can we help agents easily learn tool shortcuts to work more
              efficiently?
            </p>
          </div>
          <p className="body-text">
            Plus Tools is designed to be used with accuracy, efficiency, and
            speed. Shortcuts can provide a better user experience by reducing
            finger and wrist fatigue of operations agents using these tools all
            day for hundreds of listings and helping them work faster and more
            accurately.
          </p>
        </CaseStudySection>

        {/* Context Image */}
        <CaseStudyImage
          src={shortcutsImage}
          alt="Plus Tools and existing Keyboard Shortcuts system"
          caption="Plus Tools and existing Keyboard Shortcuts system"
        />

        {/* Design Process Section */}
        <CaseStudySection label="DESIGN PROCESS" title="Research">
          <p className="body-text mb-6">
            My first step was to understand the constraints of the Airbnb Design
            Library System (DLS) and find components I can leverage. I
            researched in-class examples of existing shortcut libraries, such as
            Google Drive and Figma.
          </p>
          <p className="body-text mb-8">
            I conducted user interviews with Design Reviewers to learn more
            about how they used the existing keyboard shortcuts system. They
            revealed that they learned shortcuts through in-person coaching,
            trial & error, or didn't know about shortcuts at all.
          </p>

          {/* User Quotes */}
          <div className="space-y-8 my-10">
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="quote-text">
                "I have to click and move around my mouse a lot.{" "}
                <strong>
                  I wanted and asked for a list of shortcuts but was never given
                  one.
                </strong>
                "
              </p>
              <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                — Interior Design Reviewer
              </cite>
            </blockquote>

            <blockquote className="border-l-4 border-accent pl-6">
              <p className="quote-text">
                "<strong>I don't know any shortcuts.</strong> I also did not
                receive any training to learn the tool."
              </p>
              <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                — Design Reviewer
              </cite>
            </blockquote>
          </div>
        </CaseStudySection>

        {/* Research Image */}
        <CaseStudyImage
          src={researchImage}
          alt="Research synthesis and affinity mapping"
          caption="Research synthesis from user interviews"
        />

        {/* Design - Panel Format */}
        <CaseStudySection label="DESIGN" title="Panel Format">
          <p className="body-text mb-6">
            I explored the formatting and hierarchy for the panel and received
            much feedback in critique on legibility. In the final design, I
            added more whitespace, dividers to separate shortcuts, and grouped
            them into clear categories.
          </p>
        </CaseStudySection>

        {/* Panel Format Image */}
        <CaseStudyImage
          src={shortcutsImage}
          alt="Keyboard shortcuts panel design iterations"
          caption="Panel format exploration and iterations"
        />

        {/* Design - Entry Point */}
        <CaseStudySection label="DESIGN" title="Entry Point">
          <p className="body-text">
            The problem was that there was no menu or settings within Plus
            tools, where people would typically look for and find shortcuts. I
            had to think about how and where these shortcuts would appear. My
            final solution was a clean and simple button icon that also worked
            well within other tools.
          </p>
        </CaseStudySection>

        {/* Takeaways Section */}
        <CaseStudySection title="Takeaways">
          <div className="space-y-6">
            <div className="highlight-box">
              <h4 className="stat-number">25%</h4>
              <p className="body-text">
                Improvement in task completion time for operations agents
              </p>
            </div>
            <div className="highlight-box">
              <h4 className="stat-number">90%</h4>
              <p className="body-text">
                Of agents reported higher satisfaction with the tools
              </p>
            </div>
          </div>
        </CaseStudySection>

        {/* Reflection Section */}
        <CaseStudySection title="Reflection">
          <p className="body-text mb-6">
            This project taught me the importance of understanding user context
            before designing solutions. The operations agents had specific needs
            that weren't immediately obvious — they needed shortcuts not just
            for speed, but to reduce physical strain from repetitive mouse
            movements.
          </p>
          <p className="body-text mb-6">
            Working closely with engineers also helped me understand technical
            constraints early, which shaped my design decisions and made the
            final implementation smoother.
          </p>
          <p className="body-text">
            The keyboard shortcuts library was successfully implemented across
            Plus Tools and became a foundational design pattern for other
            internal tools at Airbnb. The design system components I created are
            now part of the OpsTech toolkit.
          </p>
        </CaseStudySection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
