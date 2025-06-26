
import { Upload, Sparkles, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Laden Sie Ihr Formular hoch, teilen Sie einen Link oder geben Sie Details ein.",
      color: "blue"
    },
    {
      icon: Sparkles,
      title: "KI-Analyse",
      description: "Unsere intelligente KI verarbeitet und analysiert Ihre Anfrage automatisch.",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Prüfen & Senden",
      description: "Sie überprüfen das Ergebnis und geben Ihre finale Zustimmung.",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            So funktioniert es
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            In nur drei einfachen Schritten zu Ihrem Ziel
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${
                      step.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      step.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-green-500 to-green-600'
                    }`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
