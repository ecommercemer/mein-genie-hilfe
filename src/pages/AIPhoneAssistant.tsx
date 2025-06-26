
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Phone, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AIPhoneAssistantPage = () => {
  const { t } = useLanguage();

  const aiFeatures = [
    {
      icon: MessageSquare,
      title: t('ai.conversation.title'),
      description: t('ai.conversation.desc'),
      link: "/natural-conversation"
    },
    {
      icon: Clock,
      title: t('ai.availability.title'),
      description: t('ai.availability.desc'),
      link: "/availability"
    },
    {
      icon: CheckCircle,
      title: t('ai.guarantee.title'),
      description: t('ai.guarantee.desc'),
      link: "/success-guarantee"
    },
    {
      icon: Phone,
      title: t('ai.attempts.title'),
      description: t('ai.attempts.desc'),
      link: "/multiple-attempts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Phone className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('termino.ai.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('termino.ai.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI Assistant Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <Link key={index} to={feature.link}>
                  <Card className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPhoneAssistantPage;
