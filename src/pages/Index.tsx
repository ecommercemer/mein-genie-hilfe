
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <TrustSection />
      <TestimonialsSection />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Index;
