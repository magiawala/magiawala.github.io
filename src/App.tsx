import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VerizonCaseStudy from "./pages/VerizonCaseStudy";
import HPCaseStudy from "./pages/HPCaseStudy";
import NuanceoCaseStudy from "./pages/NuanceoCaseStudy";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verizon" element={<VerizonCaseStudy />} />
          <Route path="/hp" element={<HPCaseStudy />} />
          <Route path="/nuanceo" element={<NuanceoCaseStudy />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
