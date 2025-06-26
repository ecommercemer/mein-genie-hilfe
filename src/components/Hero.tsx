
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-6">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">KI-powered Bureaucracy Assistant</span>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/formino">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
              >
                {t('hero.cta.formino')}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link to="/termino">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
              >
                {t('hero.cta.termino')}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
