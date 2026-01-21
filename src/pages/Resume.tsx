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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Resume
            </h1>
            <a
              href={resumePdf}
              download="Devanshu_Magiawala_Resume.pdf"
              className="px-6 py-4 bg-transparent border rounded-md font-medium hover:bg-[#731826] hover:text-white transition-all duration-300 text-[#731826] border-[#731826] leading-none inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[800px] border border-border rounded-lg overflow-hidden bg-gray-100">
            <iframe
              src={resumePdf}
              className="w-full h-full"
              title="Devanshu Magiawala Resume"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
