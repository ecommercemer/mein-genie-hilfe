
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Mic, Upload, MessageSquare, CheckCircle, Users, Download, Eye, Shield, Building, Calculator } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SmartFormFillingPage = () => {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [conversationStep, setConversationStep] = useState(1);

  const officialCenters = [
    {
      id: 1,
      name: "Arbeitsamt (Employment Office)",
      forms: ["Arbeitslosengeld Antrag", "Job Search Registration", "Benefit Application"],
      icon: Users,
      color: "blue"
    },
    {
      id: 2,
      name: "Ausländerbehörde (Immigration Office)",
      forms: ["Visa Extension", "Residence Permit", "Work Permit Application"],
      icon: FileText,
      color: "green"
    },
    {
      id: 3,
      name: "Versicherung (Insurance Office)",
      forms: ["Health Insurance Registration", "Unemployment Insurance", "Pension Application"],
      icon: Shield,
      color: "purple"
    },
    {
      id: 4,
      name: "Rathaus (Municipality)",
      forms: ["Anmeldung (Address Registration)", "Marriage Certificate", "Birth Certificate"],
      icon: Building,
      color: "orange"
    },
    {
      id: 5,
      name: "Finanzamt (Tax Office)",
      forms: ["Tax Return", "Tax ID Application", "Business Registration"],
      icon: Calculator,
      color: "red"
    }
  ];

  const conversationSteps = [
    { step: 1, title: "Document Upload", description: "Upload your basic information and previous documents", icon: Upload },
    { step: 2, title: "Voice Conversation", description: "AI conversation in your native language", icon: Mic },
    { step: 3, title: "Form Generation", description: "Dynamic form extraction from conversation", icon: FileText },
    { step: 4, title: "Human Consultation", description: "Final approval with human consultant", icon: Users },
    { step: 5, title: "Review & Submit", description: "View and approve completed forms", icon: CheckCircle }
  ];

  const handleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would be implemented here
  };

  const handleFormSelection = (center, formType) => {
    setSelectedForm({ center, formType });
    setConversationStep(2);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">
              Smart Form System
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Intelligent Form Filling with Voice Conversation
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Fill out official documents using AI and voice conversation in your native language
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {conversationSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`relative ${conversationStep >= item.step ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    conversationStep >= item.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-gray-500 w-24">{item.description}</div>
                  </div>
                </div>
                {index < conversationSteps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gray-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Centers Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Select Official Center & Form</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialCenters.map((center) => (
              <Card key={center.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${center.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <center.icon className={`w-6 h-6 text-${center.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{center.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {center.forms.map((form, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => handleFormSelection(center.name, form)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {form}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Form Interface */}
      {selectedForm && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Smart Form: {selectedForm.formType}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Text Input Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Text Input
                    </CardTitle>
                    <CardDescription>
                      Enter your information or questions here
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe your situation or enter your information..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="min-h-32"
                    />
                    <Button className="mt-4 w-full">
                      Process Text Input
                    </Button>
                  </CardContent>
                </Card>

                {/* Voice Input Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mic className="w-5 h-5" />
                      Voice Conversation
                    </CardTitle>
                    <CardDescription>
                      Talk to our AI consultant in your native language
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center transition-all ${
                      isRecording ? 'bg-red-100 animate-pulse' : 'bg-blue-100'
                    }`}>
                      <Mic className={`w-12 h-12 ${isRecording ? 'text-red-600' : 'text-blue-600'}`} />
                    </div>
                    <Button
                      onClick={handleRecording}
                      className={`w-full ${isRecording ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    >
                      {isRecording ? 'Stop Recording' : 'Start Voice Conversation'}
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Speak in German, English, Persian, or Arabic
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Form Preview Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Form Preview
                  </CardTitle>
                  <CardDescription>
                    See how your form will look when completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-center text-gray-500">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Form preview will appear here after AI processing</p>
                      <div className="mt-4 space-x-4">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Raw Form
                        </Button>
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Sample
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Human Consultation */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Human Consultant Available
                  </CardTitle>
                  <CardDescription>
                    Get final approval from our human experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Connect with Expert</p>
                      <p className="text-sm text-gray-500">Available for final review and approval</p>
                    </div>
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Talk to Consultant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SmartFormFillingPage;
