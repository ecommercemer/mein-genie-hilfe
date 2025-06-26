
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Phone, ArrowRight, Sparkles, Calendar } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Unsere Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zwei leistungsstarke KI-Assistenten, die Ihnen bei allen bürokratischen Aufgaben helfen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formino Service */}
            <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-50 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold text-blue-600">Formino</CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      Intelligente Formularausfüllung
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Laden Sie einfach ein Formular hoch oder teilen Sie einen Link. 
                  Unser KI-Assistent füllt es automatisch für Sie aus.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">OCR und Web-Formular-Analyse</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Lernt aus Ihrem Profil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Mehrsprachige Unterstützung</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Anwendungsfälle:</strong> Visa, Anmeldung, Versicherung, Universität
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                    Formular jetzt starten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Termino Service */}
            <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-50 to-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold text-green-600">Termino</CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      KI-Telefonassistent
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Unser KI-Assistent ruft für Sie an und vereinbart Termine. 
                  Keine Warteschleifen mehr!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Intelligente Terminplanung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Kalender-Synchronisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Automatische Vorschläge</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Anwendungsfälle:</strong> Ausländerbehörde, Arzt, Fahrzeugstelle
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
                    Termin buchen lassen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
