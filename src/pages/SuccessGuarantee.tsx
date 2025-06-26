
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { CheckCircle, Target, RefreshCw, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SuccessGuaranteePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('ai.guarantee.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('ai.guarantee.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Guarantee Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">100% Success Rate</h3>
                <p className="text-gray-600">We guarantee successful appointment booking or full refund</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unlimited Retries</h3>
                <p className="text-gray-600">We keep trying until we secure your appointment</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Money-back Guarantee</h3>
                <p className="text-gray-600">Full refund if we cannot book your appointment within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessGuaranteePage;
