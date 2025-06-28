
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Mic, Upload, MessageSquare, CheckCircle, Users, Download, Eye, Shield, Building, Calculator, MicIcon, FileUpload, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SmartFormFillingPage = () => {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [conversationStep, setConversationStep] = useState(1);
  const [voiceText, setVoiceText] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [formPreviewData, setFormPreviewData] = useState(null);

  const officialCenters = [
    {
      id: 1,
      name: "Arbeitsamt (Employment Office)",
      forms: [
        { name: "Arbeitslosengeld Antrag", rawLink: "/forms/unemployment-benefit-raw.pdf", sampleLink: "/forms/unemployment-benefit-sample.pdf" },
        { name: "Job Search Registration", rawLink: "/forms/job-search-raw.pdf", sampleLink: "/forms/job-search-sample.pdf" },
        { name: "Benefit Application", rawLink: "/forms/benefit-application-raw.pdf", sampleLink: "/forms/benefit-application-sample.pdf" }
      ],
      icon: Users,
      color: "blue"
    },
    {
      id: 2,
      name: "Ausländerbehörde (Immigration Office)",
      forms: [
        { name: "Visa Extension", rawLink: "/forms/visa-extension-raw.pdf", sampleLink: "/forms/visa-extension-sample.pdf" },
        { name: "Residence Permit", rawLink: "/forms/residence-permit-raw.pdf", sampleLink: "/forms/residence-permit-sample.pdf" },
        { name: "Work Permit Application", rawLink: "/forms/work-permit-raw.pdf", sampleLink: "/forms/work-permit-sample.pdf" }
      ],
      icon: FileText,
      color: "green"
    },
    {
      id: 3,
      name: "Versicherung (Insurance Office)",
      forms: [
        { name: "Health Insurance Registration", rawLink: "/forms/health-insurance-raw.pdf", sampleLink: "/forms/health-insurance-sample.pdf" },
        { name: "Unemployment Insurance", rawLink: "/forms/unemployment-insurance-raw.pdf", sampleLink: "/forms/unemployment-insurance-sample.pdf" },
        { name: "Pension Application", rawLink: "/forms/pension-application-raw.pdf", sampleLink: "/forms/pension-application-sample.pdf" }
      ],
      icon: Shield,
      color: "purple"
    },
    {
      id: 4,
      name: "Rathaus (Municipality)",
      forms: [
        { name: "Anmeldung (Address Registration)", rawLink: "/forms/anmeldung-raw.pdf", sampleLink: "/forms/anmeldung-sample.pdf" },
        { name: "Marriage Certificate", rawLink: "/forms/marriage-certificate-raw.pdf", sampleLink: "/forms/marriage-certificate-sample.pdf" },
        { name: "Birth Certificate", rawLink: "/forms/birth-certificate-raw.pdf", sampleLink: "/forms/birth-certificate-sample.pdf" }
      ],
      icon: Building,
      color: "orange"
    },
    {
      id: 5,
      name: "Finanzamt (Tax Office)",
      forms: [
        { name: "Tax Return", rawLink: "/forms/tax-return-raw.pdf", sampleLink: "/forms/tax-return-sample.pdf" },
        { name: "Tax ID Application", rawLink: "/forms/tax-id-raw.pdf", sampleLink: "/forms/tax-id-sample.pdf" },
        { name: "Business Registration", rawLink: "/forms/business-registration-raw.pdf", sampleLink: "/forms/business-registration-sample.pdf" }
      ],
      icon: Calculator,
      color: "red"
    }
  ];

  const conversationSteps = [
    { step: 1, title: "Primärdokumente hochladen", description: "Foto oder PDF hochladen", icon: FileUpload },
    { step: 2, title: "KI-Konversation", description: "Sprachkonversation in Muttersprache", icon: Mic },
    { step: 3, title: "Formularerstellung", description: "Dynamische Extraktion aus Konversation", icon: FileText },
    { step: 4, title: "Beraterberatung", description: "Finale Genehmigung mit Berater", icon: Users },
    { step: 5, title: "Prüfen & Senden", description: "Ausgefüllte Formulare ansehen und genehmigen", icon: CheckCircle }
  ];

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Start recording
      if ('webkitSpeechRecognition' in window) {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.lang = 'fa-IR'; // Persian language support
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setVoiceText(transcript);
          
          // Simulate AI response
          setTimeout(() => {
            setAiResponse(`Ich verstehe Ihre Anfrage. Basierend auf Ihrer Eingabe "${transcript}" werde ich Ihnen beim Ausfüllen des Formulars helfen. Können Sie mir weitere Details zu Ihrer Situation geben?`);
          }, 1000);
        };
        
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsRecording(false);
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };
        
        recognition.start();
      } else {
        alert('Speech recognition is not supported in this browser. Please use Chrome or Safari.');
        setIsRecording(false);
      }
    }
  };

  const handleFormSelection = (center: any, form: any) => {
    setSelectedForm({ center: center.name, form });
    setConversationStep(2);
  };

  const handleTextSubmit = () => {
    if (userInput.trim()) {
      // Simulate AI processing
      setAiResponse(`Basierend auf Ihrer Eingabe werde ich Ihnen beim Ausfüllen des Formulars helfen. Hier sind die nächsten Schritte...`);
      setFormPreviewData({
        formType: selectedForm?.form?.name || 'Formular',
        fields: [
          { label: 'Name', value: 'Aus Konversation extrahiert' },
          { label: 'Adresse', value: 'Aus Konversation extrahiert' },
          { label: 'Telefonnummer', value: 'Aus Konversation extrahiert' }
        ]
      });
    }
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
              Intelligentes Formularsystem
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              KI-gestütztes Ausfüllen offizieller Formulare
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Formulare mit KI und Sprachkonversation in Ihrer Muttersprache ausfüllen
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">So funktioniert es</h2>
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
                    <div className="text-xs text-gray-500 w-32">{item.description}</div>
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

      {/* Document Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              1. Primärdokumente hochladen
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileUpload className="w-5 h-5" />
                  Primärdokumente hochladen (Foto oder PDF)
                </CardTitle>
                <CardDescription>
                  Laden Sie Ihre grundlegenden Informationen und vorherigen Dokumente hoch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-600 mb-2">
                    Dateien hier hinziehen oder klicken zum Auswählen
                  </p>
                  <p className="text-sm text-gray-500">
                    Unterstützte Formate: PDF, JPG, PNG (Max. 10MB)
                  </p>
                  <Button className="mt-4">
                    <Upload className="w-4 h-4 mr-2" />
                    Dateien auswählen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Centers Selection */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Amt und Formular auswählen</h2>
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
                  <div className="space-y-3">
                    {center.forms.map((form, index) => (
                      <div key={index} className="space-y-2">
                        <div className="font-medium text-sm">{form.name}</div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => handleFormSelection(center, form)}
                          >
                            <FileText className="w-4 h-4 mr-1" />
                            Ausfüllen
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(form.rawLink, '_blank')}
                          >
                            📄 Leer
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(form.sampleLink, '_blank')}
                          >
                            📝 Muster
                          </Button>
                        </div>
                      </div>
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Intelligentes Formular: {selectedForm.form.name}
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Voice Recording Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MicIcon className="w-5 h-5" />
                      🎙️ Sprachaufnahme
                    </CardTitle>
                    <CardDescription>
                      Sprechen Sie mit der KI in Ihrer Muttersprache (Persisch unterstützt)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center transition-all ${
                      isRecording ? 'bg-red-100 animate-pulse' : 'bg-blue-100'
                    }`}>
                      <Mic className={`w-12 h-12 ${isRecording ? 'text-red-600' : 'text-blue-600'}`} />
                    </div>
                    <Button
                      onClick={handleVoiceRecording}
                      className={`w-full ${isRecording ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    >
                      {isRecording ? 'Aufnahme stoppen' : 'Sprachaufnahme starten'}
                    </Button>
                    {voiceText && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                        <p className="text-sm font-medium">Erkannter Text:</p>
                        <p className="text-sm">{voiceText}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Text Input Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Texteingabe
                    </CardTitle>
                    <CardDescription>
                      Geben Sie Ihre Informationen oder Fragen hier ein
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Beschreiben Sie Ihre Situation oder geben Sie Ihre Informationen ein..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="min-h-32"
                    />
                    <Button onClick={handleTextSubmit} className="mt-4 w-full">
                      Text verarbeiten
                    </Button>
                  </CardContent>
                </Card>

                {/* Consultant Chat Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      💬 Chat mit Berater
                    </CardTitle>
                    <CardDescription>
                      Verbindung zu einem menschlichen Berater für persönliche Hilfe
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <Button className="w-full mb-2">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat starten
                    </Button>
                    <Button variant="outline" className="w-full">
                      📹 Videoanruf
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Verfügbar: Mo-Fr 9:00-17:00
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* AI Response Section */}
              {aiResponse && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>KI-Antwort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p>{aiResponse}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Form Preview Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    📝 Formularvorschau
                  </CardTitle>
                  <CardDescription>
                    Sehen Sie, wie Ihr ausgefülltes Formular aussehen wird
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formPreviewData ? (
                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="font-bold mb-4">{formPreviewData.formType}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {formPreviewData.fields.map((field, index) => (
                          <div key={index} className="border-b pb-2">
                            <label className="text-sm font-medium text-gray-600">{field.label}:</label>
                            <p className="text-sm">{field.value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-4">
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          PDF herunterladen
                        </Button>
                        <Button variant="outline">
                          Bearbeiten
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-8 rounded-lg text-center">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-gray-500">
                        Formularvorschau wird nach der KI-Verarbeitung angezeigt
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Final Approval Button */}
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Send className="w-5 h-5 mr-2" />
                  ✅ Zur Genehmigung senden
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SmartFormFillingPage;
