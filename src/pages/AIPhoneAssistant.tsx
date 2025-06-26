
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, MessageSquare, Clock, CheckCircle } from "lucide-react";

const AIPhoneAssistantPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Phone className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Phone Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Advanced AI that makes phone calls on your behalf with perfect German
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">AI Assistant Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Natural Conversation</h3>
                <p className="text-gray-600">Speaks naturally with German officials</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Makes calls during business hours</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Success Guarantee</h3>
                <p className="text-gray-600">Ensures appointments are booked successfully</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Attempts</h3>
                <p className="text-gray-600">Keeps trying until successful</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIPhoneAssistantPage;
