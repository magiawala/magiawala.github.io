import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resumePdf from "@/assets/Devanshu_Resume.pdf";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="default" />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Resume
              </h1>
              <a
                href={resumePdf}
                download="Devanshu_Magiawala_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Experience Section */}
            <section className="mb-16">
              <h2 className="section-label mb-8">EXPERIENCE</h2>

              <div className="space-y-12">
                {/* Verizon */}
                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Product Designer
                      </h3>
                      <p className="text-foreground">Verizon Business</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">
                      2024 - Present
                    </p>
                  </div>
                  <p className="body-text">
                    Designed an AI sales assist tool for Verizon Business, shaping
                    early product concepts and helping SMB sales teams close deals
                    faster.
                  </p>
                </div>

                {/* HP */}
                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Product Designer
                      </h3>
                      <p className="text-foreground">HP Inc.</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">
                      2023 - 2024
                    </p>
                  </div>
                  <p className="body-text">
                    Designed an intuitive onboarding and home screen indicators
                    for AI PC Companion experience, optimizing task completion by
                    25%.
                  </p>
                </div>

                {/* Airbnb */}
                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Experience Design Intern
                      </h3>
                      <p className="text-foreground">Airbnb</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">
                      Summer 2022
                    </p>
                  </div>
                  <p className="body-text">
                    Designed a library of keyboard shortcuts for Plus Tools,
                    improving agent efficiency and creating foundational design
                    patterns.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-16">
              <h2 className="section-label mb-8">EDUCATION</h2>

              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Bachelor of Science in Design
                    </h3>
                    <p className="text-foreground">
                      University of California, Berkeley
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">2023</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="section-label mb-8">SKILLS</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Figma",
                  "Prototyping",
                  "User Research",
                  "Design Systems",
                  "Interaction Design",
                  "Visual Design",
                  "Usability Testing",
                  "React",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 bg-card border border-border rounded-lg text-center"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
