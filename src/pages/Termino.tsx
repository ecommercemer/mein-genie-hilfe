import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, CheckCircle, Shield, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Termino = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Phone,
      title: "AI Phone Assistant",
      description: "Our AI makes phone calls on your behalf with perfect German",
      link: "/ai-phone-assistant"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatic calendar integration and conflict detection",
      link: "/smart-scheduling"
    },
    {
      icon: CheckCircle,
      title: "Confirmation System",
      description: "Instant notifications and appointment confirmations",
      link: "/confirmation-system"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All conversations are recorded and encrypted for your safety",
      link: "/secure-communication"
    }
  ];

  const useCases = [
    "Foreigner's Office (Ausländerbehörde)",
    "Doctor Appointments",
    "Vehicle Registration Office (Zulassungsstelle)",
    "Tax Office (Finanzamt)",
    "City Hall (Rathaus)",
    "Embassy Appointments",
    "University Admissions",
    "Bank Consultations"
  ];

  const faqItems = [
    {
      question: "How does the AI phone assistant work?",
      answer: "Our AI calls on your behalf, explains your needs in perfect German, and books the appointment at your preferred time."
    },
    {
      question: "What if the appointment needs to be rescheduled?",
      answer: "We handle all rescheduling automatically and notify you of any changes immediately."
    },
    {
      question: "Is the service available 24/7?",
      answer: "Yes, you can request appointments anytime. We'll make the calls during business hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800">
              AI Appointment Assistant
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Termino: AI-Powered <span className="text-green-600">Appointment Booking</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Skip the phone queues and language barriers. Our AI assistant calls and books appointments for you in perfect German.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                Book Your First Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Listen to Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600">
              The first AI that actually makes phone calls for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-green-600" />
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
              Perfect For All German Appointments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Foreigner's Office (Ausländerbehörde)",
                "Doctor Appointments",
                "Vehicle Registration Office (Zulassungsstelle)",
                "Tax Office (Finanzamt)",
                "City Hall (Rathaus)",
                "Embassy Appointments",
                "University Admissions",
                "Bank Consultations"
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How Termino Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Tell Us What You Need</h3>
                <p className="text-gray-600">Specify the type of appointment, preferred dates, and any special requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Makes the Call</h3>
                <p className="text-gray-600">Our AI assistant calls the office, explains your needs in perfect German, and negotiates the best time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Get Confirmation</h3>
                <p className="text-gray-600">Receive instant confirmation with all appointment details and calendar integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-5xl font-bold text-green-600">€8</span>
                <span className="text-xl text-gray-600 ml-2">per appointment</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Unlimited rescheduling</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Calendar integration</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Book Your First Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How does the AI phone assistant work?",
                  answer: "Our AI calls on your behalf, explains your needs in perfect German, and books the appointment at your preferred time."
                },
                {
                  question: "What if the appointment needs to be rescheduled?",
                  answer: "We handle all rescheduling automatically and notify you of any changes immediately."
                },
                {
                  question: "Is the service available 24/7?",
                  answer: "Yes, you can request appointments anytime. We'll make the calls during business hours."
                }
              ].map((item, index) => (
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

export default Termino;
