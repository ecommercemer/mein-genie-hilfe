
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Ahmad Hassan",
      role: "Student aus Syrien",
      text: "Mein Genie hat mir geholfen, meine Visa-Verlängerung ohne Stress zu beantragen. Die Sprachbarriere war kein Problem mehr!",
      rating: 5,
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Maria Gonzalez",
      role: "Mutter und Angestellte",
      text: "Als berufstätige Mutter hatte ich keine Zeit für Behördengänge. Termino hat alle Termine für mich vereinbart - fantastisch!",
      rating: 5,
      image: "photo-1494790108755-2616b612b47c"
    },
    {
      name: "Familie Weber",
      role: "Angehörige eines Seniors",
      text: "Mein Vater brauchte Hilfe mit digitalen Formularen. Formino hat uns so viel Zeit und Stress erspart.",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
