
import { Shield, Lock, CheckCircle, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('trust.local'),
      description: t('trust.local.desc')
    },
    {
      icon: CheckCircle,
      title: t('trust.gdpr'),
      description: t('trust.gdpr.desc')
    },
    {
      icon: Lock,
      title: t('trust.encryption'),
      description: t('trust.encryption.desc')
    },
    {
      icon: Eye,
      title: t('trust.control'),
      description: t('trust.control.desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('trust.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('trust.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="font-semibold">DSGVO</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Lock className="w-6 h-6 text-green-500" />
              <span className="font-semibold">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span className="font-semibold">ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Eye className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Transparenz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
