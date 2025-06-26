
import { Clock, Globe, FileText } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: FileText,
      title: "Komplexe Formulare",
      description: "Deutsche Bürokratie kann überwältigend sein, besonders in einer neuen Sprache."
    },
    {
      icon: Globe,
      title: "Sprachbarrieren",
      description: "Schwierige Fachbegriffe und komplizierte Anweisungen verstehen."
    },
    {
      icon: Clock,
      title: "Zeitverlust",
      description: "Stunden damit verbringen, Formulare auszufüllen und Termine zu vereinbaren."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Probleme, die wir lösen
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Wir verstehen die Herausforderungen des deutschen Verwaltungssystems
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
