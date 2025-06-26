
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { MessageSquare, Brain, Users, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NaturalConversationPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('ai.conversation.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('ai.conversation.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Conversation Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Language Processing</h3>
                <p className="text-gray-600">Understands complex German bureaucratic language and terminology</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Human-like Interaction</h3>
                <p className="text-gray-600">Engages naturally with government officials and service providers</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Languages className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Perfect Pronunciation</h3>
                <p className="text-gray-600">Native-level German pronunciation and accent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaturalConversationPage;
