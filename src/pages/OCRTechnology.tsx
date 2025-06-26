
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Eye, Zap, CheckCircle } from "lucide-react";

const OCRTechnologyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              OCR Technology
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Advanced Optical Character Recognition that understands German bureaucratic forms
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">OCR Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Recognition</h3>
                <p className="text-gray-600">Recognizes handwritten and printed text with 99% accuracy</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Processing</h3>
                <p className="text-gray-600">Extract text from documents in seconds</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">German Optimized</h3>
                <p className="text-gray-600">Specially trained for German administrative documents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OCRTechnologyPage;
