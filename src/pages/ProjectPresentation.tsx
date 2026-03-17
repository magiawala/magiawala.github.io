import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";

interface ProjectPresentationProps {
  title: string;
  pdfUrl?: string; // Future use if embedding PDFs directly
  figmaUrl?: string; // For Figma direct embed links
  backRoute: string;
  nextRoute?: string;
  nextTitle?: string;
  prevRoute?: string;
  prevTitle?: string;
}

const ProjectPresentation = ({ title, pdfUrl, figmaUrl, backRoute, nextRoute, nextTitle, prevRoute, prevTitle }: ProjectPresentationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Simple auth check - if they somehow bypass the modal, 
  // you might want a more robust check here in a real app,
  // but for a portfolio this is sufficient.
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-inter">
      {/* Utility Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            to={backRoute}
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Study
          </Link>
          <h1 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hidden md:block">
            {title}
          </h1>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content Area - Intended for iFrame or PDF Embed */}
      <main className="pt-24 pb-12 px-6 container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        {figmaUrl ? (
          <div 
            ref={containerRef}
            className={`w-full max-w-6xl aspect-video relative bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex ${isFullscreen ? 'h-screen max-w-none border-none rounded-none' : 'h-[75vh] min-h-[500px] rounded-xl overflow-hidden shadow-2xl'}`}
          >
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-all shadow-lg hover:scale-105 group"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-white/90 group-hover:text-white" />
              ) : (
                <Maximize className="w-5 h-5 text-white/90 group-hover:text-white" />
              )}
            </button>
            <iframe 
              src={figmaUrl}
              className="w-full h-full border-none"
              allowFullScreen={true}
              title={`${title} Figma Prototype`}
            />
          </div>
        ) : pdfUrl ? (
          <div className="w-full max-w-5xl aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-2xl border border-zinc-300 dark:border-zinc-700">
            {/* Replace with actual PDF viewer or iframe when ready */}
            <iframe 
              src={`${pdfUrl}#toolbar=0`} 
              className="w-full h-full"
              title={`${title} Presentation`}
            />
          </div>
        ) : (
          <div className="w-full max-w-3xl text-center space-y-6">
            <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mx-auto flex items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Presentation Embed Area
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto body-text">
              This secure route is ready. You can embed your presentation iframe (Figma, Google Slides, Pitch, etc.) or PDF viewer component here using the <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">figmaUrl</code> or <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">pdfUrl</code> prop, or by replacing this placeholder content.
            </p>
          </div>
        )}

        {/* Presentation Navigation */}
        <div className="w-full max-w-6xl mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          
          {/* Previous Link */}
          <div className="flex-1 flex justify-start w-full">
            {prevRoute && prevTitle && (
              <Link 
                to={prevRoute}
                className="group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">PREV</span>
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:-translate-x-1 transition-transform">
                  {prevTitle}
                </span>
              </Link>
            )}
          </div>

          {/* Next Link */}
          <div className="flex-1 flex justify-end w-full">
            {nextRoute && nextTitle && (
              <Link 
                to={nextRoute}
                className="group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-right"
              >
                <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">NEXT</span>
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                  {nextTitle}
                </span>
              </Link>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProjectPresentation;
