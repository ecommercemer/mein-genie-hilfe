
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Mic, Upload, MessageSquare, CheckCircle, Users, Download, Eye, Shield, Building, Calculator, Send, User, Globe } from "lucide-react";
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
  const [chatHistory, setChatHistory] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const officialCenters = [
    {
      id: 1,
      name: "🏢 Arbeitsamt (Employment Office)",
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
      name: "🏛️ Ausländerbehörde (Immigration Office)",
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
      name: "🛡️ Versicherung (Insurance Office)",
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
      name: "🏛️ Rathaus (Municipality)",
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
      name: "💰 Finanzamt (Tax Office)",
      forms: [
        { name: "Tax Return", rawLink: "/forms/tax-return-raw.pdf", sampleLink: "/forms/tax-return-sample.pdf" },
        { name: "Tax ID Application", rawLink: "/forms/tax-id-raw.pdf", sampleLink: "/forms/tax-id-sample.pdf" },
        { name: "Business Registration", rawLink: "/forms/business-registration-raw.pdf", sampleLink: "/forms/business-registration-sample.pdf" }
      ],
      icon: Calculator,
      color: "red"
    }
  ];

  const processSteps = [
    { step: 1, title: "📂 Dokumente hochladen", description: "Primärdokumente uploaden", icon: Upload, completed: uploadedFiles.length > 0 },
    { step: 2, title: "🎙️ Sprachaufnahme", description: "Mit KI sprechen", icon: Mic, completed: voiceText.length > 0 },
    { step: 3, title: "💬 KI-Chat", description: "Formular ausfüllen", icon: MessageSquare, completed: aiResponse.length > 0 },
    { step: 4, title: "📝 Vorschau", description: "Formular ansehen", icon: Eye, completed: formPreviewData !== null },
    { step: 5, title: "🧑‍💼 Berater", description: "Menschliche Hilfe", icon: User, completed: false },
    { step: 6, title: "✅ Bestätigung", description: "Absenden", icon: CheckCircle, completed: false }
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
          
          // Add to chat history
          const newMessage = { type: 'user', text: transcript, timestamp: new Date() };
          setChatHistory(prev => [...prev, newMessage]);
          
          // Simulate AI response
          setTimeout(() => {
            const aiReply = `Ich verstehe Ihre Anfrage in Persisch: "${transcript}". Basierend auf Ihrer Eingabe werde ich Ihnen beim Ausfüllen des Formulars helfen. Können Sie mir bitte weitere Details zu Ihrer persönlichen Situation geben?`;
            setAiResponse(aiReply);
            setChatHistory(prev => [...prev, { type: 'ai', text: aiReply, timestamp: new Date() }]);
            
            // Generate form preview
            setFormPreviewData({
              formType: selectedForm?.form?.name || 'Ausgewähltes Formular',
              fields: [
                { label: 'Name', value: 'Aus Sprachaufnahme extrahiert' },
                { label: 'Adresse', value: 'Aus Sprachaufnahme extrahiert' },
                { label: 'Telefonnummer', value: 'Aus Sprachaufnahme extrahiert' },
                { label: 'Geburtsdatum', value: 'Aus Sprachaufnahme extrahiert' }
              ]
            });
          }, 1500);
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
        alert('Spracherkennung wird in diesem Browser nicht unterstützt. Bitte verwenden Sie Chrome oder Safari.');
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
      // Add to chat history
      const newMessage = { type: 'user', text: userInput, timestamp: new Date() };
      setChatHistory(prev => [...prev, newMessage]);
      
      // Simulate AI processing
      setTimeout(() => {
        const aiReply = `Basierend auf Ihrer Texteingabe: "${userInput}" werde ich Ihnen beim Ausfüllen des Formulars helfen. Die Informationen werden nun automatisch in die entsprechenden Felder eingefügt.`;
        setAiResponse(aiReply);
        setChatHistory(prev => [...prev, { type: 'ai', text: aiReply, timestamp: new Date() }]);
        
        setFormPreviewData({
          formType: selectedForm?.form?.name || 'Ausgewähltes Formular',
          fields: [
            { label: 'Name', value: 'Aus Texteingabe extrahiert' },
            { label: 'Adresse', value: 'Aus Texteingabe extrahiert' },
            { label: 'Telefonnummer', value: 'Aus Texteingabe extrahiert' },
            { label: 'E-Mail', value: 'Aus Texteingabe extrahiert' }
          ]
        });
      }, 1000);
      
      setUserInput('');
    }
  };

  const handleFileUpload = (event: any) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
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
              🤖 Intelligentes Formularsystem
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              KI-gestütztes Ausfüllen offizieller Formulare
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Formulare mit KI und Sprachkonversation in Ihrer Muttersprache ausfüllen - Einfach, schnell und genau
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Schritt-für-Schritt Prozess</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`relative ${item.completed ? 'opacity-100' : conversationStep >= item.step ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                    item.completed ? 'bg-green-600 text-white' : 
                    conversationStep >= item.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-sm font-semibold whitespace-nowrap">{item.title}</div>
                    <div className="text-xs text-gray-500 w-32">{item.description}</div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Document Upload Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              📂 1. Primärdokumente hochladen
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Primärdokumente hochladen (Foto oder PDF)
                </CardTitle>
                <CardDescription>
                  Laden Sie Ihre Ausweisdokumente, vorherige Formulare oder andere relevante Dateien hoch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-600 mb-2">
                    Dateien hier hinziehen oder klicken zum Auswählen
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Unterstützte Formate: PDF, JPG, PNG (Max. 10MB)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      Dateien auswählen
                    </Button>
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Hochgeladene Dateien:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <FileText className="w-4 h-4" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Forms and Centers Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            🌐 Amt und Formular auswählen
          </h2>
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Intelligentes Formular: {selectedForm.form.name}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* 1. Voice Recording Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🎙️ Sprachaufnahme (Persisch unterstützt)
                    </CardTitle>
                    <CardDescription>
                      Sprechen Sie mit der KI in Ihrer Muttersprache - Persisch wird vollständig unterstützt
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
                      className={`w-full text-lg py-6 ${isRecording ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    >
                      {isRecording ? '🔴 Aufnahme stoppen' : '🎙️ Sprachaufnahme starten'}
                    </Button>
                    {voiceText && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-lg text-left">
                        <p className="text-sm font-medium">Erkannter Text:</p>
                        <p className="text-sm">{voiceText}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 8. Text Input Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      ✍️ Manuelle Texteingabe
                    </CardTitle>
                    <CardDescription>
                      Für Benutzer, die Text statt Sprache verwenden möchten
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Beschreiben Sie Ihre Situation oder geben Sie Ihre Informationen hier ein..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="min-h-32"
                    />
                    <Button onClick={handleTextSubmit} className="mt-4 w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Text verarbeiten
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* 2. AI Chat Section */}
              {chatHistory.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      💬 Konversation mit KI
                    </CardTitle>
                    <CardDescription>
                      Chat-Verlauf Ihrer Konversation mit der KI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {chatHistory.map((message, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-blue-100 ml-8' 
                              : 'bg-gray-100 mr-8'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {message.type === 'user' ? (
                              <User className="w-5 h-5 text-blue-600 mt-1" />
                            ) : (
                              <MessageSquare className="w-5 h-5 text-gray-600 mt-1" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm">{message.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* 5. Form Preview Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📝 Formularvorschau
                  </CardTitle>
                  <CardDescription>
                    Live-Vorschau des von der KI ausgefüllten Formulars
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formPreviewData ? (
                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="font-bold mb-4 text-lg">{formPreviewData.formType}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {formPreviewData.fields.map((field, index) => (
                          <div key={index} className="border-b pb-2">
                            <label className="text-sm font-medium text-gray-600">{field.label}:</label>
                            <input 
                              type="text" 
                              defaultValue={field.value}
                              className="w-full mt-1 p-2 border rounded text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-4">
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          PDF herunterladen
                        </Button>
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Vollvorschau
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

              {/* 3. Human Consultant Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🧑‍💼 Beratung mit menschlichem Experten
                  </CardTitle>
                  <CardDescription>
                    Verbindung zu einem Berater für persönliche Hilfe und finale Genehmigung
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-green-600" />
                      </div>
                      <Button className="w-full mb-2">
                        💬 Chat mit Berater
                      </Button>
                      <p className="text-xs text-gray-500">
                        Sofortige Hilfe via Text-Chat
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <Button variant="outline" className="w-full mb-2">
                        📹 Videoanruf
                      </Button>
                      <p className="text-xs text-gray-500">
                        Persönliche Beratung per Video
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
                    <p className="text-sm text-blue-800">
                      📞 Verfügbar: Mo-Fr 9:00-17:00 | ⏱️ Durchschnittliche Wartezeit: 2 Minuten
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Final Confirmation Button */}
              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-12 py-6">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  ✅ Bestätigen und absenden
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Das ausgefüllte Formular wird zur finalen Überprüfung und Bearbeitung gesendet
                </p>
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
