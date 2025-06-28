import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { CheckCircle } from "lucide-react";

const SmartValidationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Smart Validation</h1>
            <p className="text-xl text-gray-600">AI validates all information before submission</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SmartValidationPage;
