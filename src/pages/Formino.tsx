import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, CheckCircle, Shield, Clock, Users, Star, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Formino = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: FileText,
      title: t('formino.ocr.title'),
      description: t('formino.ocr.desc'),
      link: "/ocr-technology"
    },
    {
      icon: Upload,
      title: t('formino.input.title'),
      description: t('formino.input.desc'),
      link: "/multiple-input-methods"
    },
    {
      icon: CheckCircle,
      title: t('formino.validation.title'),
      description: t('formino.validation.desc'),
      link: "/smart-validation"
    },
    {
      icon: Shield,
      title: t('formino.security.title'),
      description: t('formino.security.desc'),
      link: "/secure-processing"
    }
  ];

  const useCases = [
    "Visa Applications (Visumsantrag)",
    "Address Registration (Anmeldung)",
    "Insurance Forms",
    "University Applications",
    "Tax Returns (Steuererklärung)",
    "Work Permits",
    "Health Insurance Registration",
    "Bank Account Opening"
  ];

  const faqItems = [
    {
      question: "How accurate is the form filling?",
      answer: "Our AI achieves 99.5% accuracy and always allows you to review before submission."
    },
    {
      question: "What languages are supported?",
      answer: "Currently German, English, Persian, and Arabic with more languages coming soon."
    },
    {
      question: "Is my data safe?",
      answer: "Yes, all processing happens locally on your device with military-grade encryption."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">
              AI Form Assistant
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('formino.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('formino.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {t('common.getstarted')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Demo ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Form System CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Try Our Smart Form Filling System
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Fill out official documents using AI and voice conversation in your native language
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="/smart-form-filling">
                <Mic className="w-5 h-5 mr-2" />
                Start Smart Form Filling
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('formino.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('formino.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Perfect For All German Forms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-5xl font-bold text-blue-600">€5</span>
                <span className="text-xl text-gray-600 ml-2">per form</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Secure data processing</span>
                </li>
              </ul>
              <Button size="lg" className="w-full">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.answer}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formino;
