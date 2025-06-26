
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Formino from "./pages/Formino";
import Termino from "./pages/Termino";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Upload from "./pages/Upload";
import AIAnalysis from "./pages/AIAnalysis";
import ReviewSend from "./pages/ReviewSend";
import OCRTechnology from "./pages/OCRTechnology";
import MultipleInputMethods from "./pages/MultipleInputMethods";
import SmartValidation from "./pages/SmartValidation";
import SecureProcessing from "./pages/SecureProcessing";
import AIPhoneAssistant from "./pages/AIPhoneAssistant";
import SmartScheduling from "./pages/SmartScheduling";
import ConfirmationSystem from "./pages/ConfirmationSystem";
import SecureCommunication from "./pages/SecureCommunication";
import Career from "./pages/Career";
import Press from "./pages/Press";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Status from "./pages/Status";
import Feedback from "./pages/Feedback";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Imprint from "./pages/Imprint";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/formino" element={<Formino />} />
            <Route path="/termino" element={<Termino />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* How It Works Pages */}
            <Route path="/upload" element={<Upload />} />
            <Route path="/ai-analysis" element={<AIAnalysis />} />
            <Route path="/review-send" element={<ReviewSend />} />
            
            {/* Formino Feature Pages */}
            <Route path="/ocr-technology" element={<OCRTechnology />} />
            <Route path="/multiple-input-methods" element={<MultipleInputMethods />} />
            <Route path="/smart-validation" element={<SmartValidation />} />
            <Route path="/secure-processing" element={<SecureProcessing />} />
            
            {/* Termino Feature Pages */}
            <Route path="/ai-phone-assistant" element={<AIPhoneAssistant />} />
            <Route path="/smart-scheduling" element={<SmartScheduling />} />
            <Route path="/confirmation-system" element={<ConfirmationSystem />} />
            <Route path="/secure-communication" element={<SecureCommunication />} />
            
            {/* Footer Pages */}
            <Route path="/career" element={<Career />} />
            <Route path="/press" element={<Press />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help" element={<Help />} />
            <Route path="/status" element={<Status />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
