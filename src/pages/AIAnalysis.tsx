
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Brain, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AIAnalysisPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('how.ai')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('how.ai.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Recognition</h3>
                <p className="text-gray-600">Advanced OCR and form field detection</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Processing</h3>
                <p className="text-gray-600">Lightning-fast document analysis and understanding</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Analysis</h3>
                <p className="text-gray-600">All processing happens locally on your device</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAnalysisPage;
