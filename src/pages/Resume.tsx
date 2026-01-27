import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resumePdf from "@/assets/Devanshu_Resume.pdf";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="standard" />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative mb-12 pl-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-left">
              Resume
            </h1>
            <a
              href={resumePdf}
              download="Devanshu_Magiawala_Resume.pdf"
              className="absolute top-0 right-0 px-6 py-4 bg-transparent border rounded-md font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 text-[#731826] border-[#731826] leading-none inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>


          {/* Summary Section */}
          <section className="mb-16 text-left">
            <h2 className="section-label mb-8 text-left">SUMMARY</h2>
            <p className="body-text max-w-4xl text-left">
              Product Designer with more than 3 years of expertise delivering seamless digital experiences by translating complex technical requirements into intuitive human-centered interfaces, seeking to drive measurable impact
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-16 text-left">
            <h2 className="section-label mb-8 text-left">EXPERIENCE</h2>

            <div className="space-y-12">
              {/* Integrate BPD */}
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Product Designer, Health Tech
                    </h3>
                    <p className="text-foreground">Integrate BPD - Pleasanton, California</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">
                    Jul 2025 - Present
                  </p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-base leading-[1.8] text-secondary-foreground">
                  <li>Contributed to the design and launch of a self therapy platform for 4 distinct user personas, increasing monthly retention by 10% while ensuring the digital experience mirrored a high-touch, compassionate care model</li>
                  <li>Accelerated development efficiency and engineering handoff speed by 25% by building a scalable Figma component library that standardized UI patterns and design-to-code documentation across the clinical ecosystem</li>
                  <li>Optimized clinical workflows for behavioral health professionals, reducing administrative burden by 20% through a complete redesign of the dashboard information architecture and high-fidelity prototyping</li>
                  <li>Improved engagement by executing 12+ usability tests and user interviews, resulting in a 28% reduction in user drop off</li>
                </ul>
              </div>

              {/* Verizon */}
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Product Designer, Business Processes
                    </h3>
                    <p className="text-foreground">Verizon - Indianapolis, Indiana</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">
                    Jan 2025 - May 2025
                  </p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-base leading-[1.8] text-secondary-foreground">
                  <li>Engineered a scalable MVP in collaboration with AI Engineers and cross-functional stakeholders, establishing a modular design framework that supported recommendations based on rapid information collection from small business customers</li>
                  <li>Transformed operational efficiency by deploying intelligent task automation that cut rep interaction time by 30%, effectively reclaiming 2+ hours per day for high-value relationship management</li>
                  <li>Synthesized qualitative feedback from usability sessions with 20+ sales representatives to iterate on the new workflow</li>
                </ul>
              </div>

              {/* HP Inc. */}
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Product Researcher, User Onboarding
                    </h3>
                    <p className="text-foreground">HP Inc. - Indianapolis, Indiana</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">
                    Oct 2024 - Dec 2024
                  </p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-base leading-[1.8] text-secondary-foreground">
                  <li>Architected a new onboarding framework for the AI Companion, increasing user comprehension of local-processing benefits and privacy protocols ensuring transparency</li>
                  <li>Enhanced the information architecture and layout of the home screen, leveraging insights from 20+ evaluative user tests</li>
                </ul>
              </div>

              {/* Comet Lab */}
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Design Engineer, Surveying Tools
                    </h3>
                    <p className="text-foreground">Comet Lab - Indianapolis, Indiana</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">
                    Aug 2023 - Oct 2024
                  </p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-base leading-[1.8] text-secondary-foreground">
                  <li>Developed an art critique platform using React and Tailwind, driving a 30% increase in participation by introducing intuitive peer-feedback loops</li>
                  <li>Initiated a backend migration from Firebase to Node.js to facilitate deployment to on-prem servers, enhancing data sovereignty and improving system scalability to support a 15% month-over-month user growth</li>
                </ul>
              </div>

              {/* Genuin Inc. */}
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      UX Analyst, Social Media
                    </h3>
                    <p className="text-foreground">Genuin Inc. - Ahmedabad, Gujarat</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">
                    Jan 2023 - Jun 2023
                  </p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-base leading-[1.8] text-secondary-foreground">
                  <li>Designed engagement dashboards for key stakeholders, providing critical visibility into platform metrics that steered product direction and resulted in a 20% boost in overall engagement</li>
                  <li>Supported the implementation of a personalization strategy leveraging web-scraped profile analytics to generate interactive user questions, leading to a 30% increase in user generated content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16 text-left">
            <h2 className="section-label mb-8 text-left">EDUCATION</h2>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Master of Science in Human Computer Interaction
                    </h3>
                    <p className="text-foreground">
                      Indiana University, Indianapolis
                    </p>
                  </div>
                </div>
                <p className="text-secondary-foreground">
                  Relevant Coursework: Prototyping Methods, Interactive Systems, User Psychology, Experience Design
                </p>
              </div>

              <div className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Bachelor of Technology in Computer Science
                    </h3>
                    <p className="text-foreground">
                      Ahmedabad University, Ahmedabad
                    </p>
                  </div>
                </div>
                <p className="text-secondary-foreground">
                  Relevant Coursework: Design Fundamentals, Introduction to Painting, Web Technologies, Artificial Intelligence
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="text-left">
            <h2 className="section-label mb-8 text-left">SKILLS</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Design Tools</h3>
                <p className="text-secondary-foreground">Figma, Adobe Creative Suite, Sketch, Protopie, Maze, Google Analytics, Survey Monkey</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Technical Skills</h3>
                <p className="text-secondary-foreground">Tailwind, Javascript, Node, React, Python, PyTorch, Matlab, MongoDB, GitHub</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
