
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Download, ArrowRight, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.formino.title'),
      description: t('services.formino.desc'),
      detail: t('services.formino.detail'),
      icon: FileText,
      color: "blue",
      link: "/formino",
      downloadText: t('services.formino.download')
    },
    {
      title: t('services.termino.title'),
      description: t('services.termino.desc'),
      detail: t('services.termino.detail'),
      icon: Phone,
      color: "green",
      link: "/termino",
      downloadText: t('services.termino.download')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  service.color === 'blue' 
                    ? 'from-blue-50 to-blue-100' 
                    : 'from-green-50 to-green-100'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      service.color === 'blue' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-r from-green-500 to-green-600'
                    }`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.detail}
                  </p>
                  
                  <div className="space-y-4">
                    <Link to={service.link}>
                      <Button 
                        className={`w-full ${
                          service.color === 'blue' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="outline" 
                      className={`w-full border-2 ${
                        service.color === 'blue' 
                          ? 'border-blue-200 text-blue-600 hover:bg-blue-50' 
                          : 'border-green-200 text-green-600 hover:bg-green-50'
                      } rounded-xl transition-all duration-300`}
                    >
                      <Download className="mr-2 w-5 h-5" />
                      {service.downloadText}
                    </Button>
                  </div>
                </CardContent>
                
                {/* Floating decoration */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${
                  service.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'
                } rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                  <Sparkles className="w-4 h-4 text-white m-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
