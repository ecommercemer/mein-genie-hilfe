
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges of navigating complex bureaucracy"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your data security and privacy are our top priorities"
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "We save you time and reduce stress in administrative tasks"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making bureaucracy accessible to everyone, regardless of language or tech skills"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Mein Genie
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to simplify bureaucracy for millions of people worldwide, 
              starting with Germany's complex administrative system.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every year, millions of people struggle with complex forms and appointment bookings 
                  in languages they don't fully understand. We believe technology can bridge this gap.
                </p>
                <p className="text-lg text-gray-600">
                  Mein Genie uses AI to eliminate language barriers and simplify bureaucratic processes, 
                  making essential services accessible to everyone.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-gray-600">Forms filled successfully</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
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

export default About;
