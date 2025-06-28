
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

const Formino = () => {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [voiceText, setVoiceText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [formPreviewData, setFormPreviewData] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // 7. Form Centers and Categories
  const officialCenters = [
    {
      id: 1,
      name: "🏢 Labor Office (Arbeitsamt)",
      forms: [
        { name: "Unemployment Benefit Application", rawLink: "/forms/unemployment-raw.pdf", sampleLink: "/forms/unemployment-sample.pdf" },
        { name: "Job Search Registration", rawLink: "/forms/job-search-raw.pdf", sampleLink: "/forms/job-search-sample.pdf" },
        { name: "Employment Permit", rawLink: "/forms/employment-permit-raw.pdf", sampleLink: "/forms/employment-permit-sample.pdf" }
      ],
      icon: Users,
      color: "blue"
    },
    {
      id: 2,
      name: "🛡️ Insurance Office",
      forms: [
        { name: "Health Insurance Registration", rawLink: "/forms/health-insurance-raw.pdf", sampleLink: "/forms/health-insurance-sample.pdf" },
        { name: "Pension Application", rawLink: "/forms/pension-raw.pdf", sampleLink: "/forms/pension-sample.pdf" },
        { name: "Disability Benefits", rawLink: "/forms/disability-raw.pdf", sampleLink: "/forms/disability-sample.pdf" }
      ],
      icon: Shield,
      color: "green"
    },
    {
      id: 3,
      name: "🌍 Immigration Office (Ausländerbehörde)",
      forms: [
        { name: "Visa Extension", rawLink: "/forms/visa-extension-raw.pdf", sampleLink: "/forms/visa-extension-sample.pdf" },
        { name: "Residence Permit", rawLink: "/forms/residence-permit-raw.pdf", sampleLink: "/forms/residence-permit-sample.pdf" },
        { name: "Work Permit Application", rawLink: "/forms/work-permit-raw.pdf", sampleLink: "/forms/work-permit-sample.pdf" }
      ],
      icon: Globe,
      color: "purple"
    },
    {
      id: 4,
      name: "🏛️ Municipality (Rathaus)",
      forms: [
        { name: "Address Registration (Anmeldung)", rawLink: "/forms/anmeldung-raw.pdf", sampleLink: "/forms/anmeldung-sample.pdf" },
        { name: "Marriage Certificate", rawLink: "/forms/marriage-raw.pdf", sampleLink: "/forms/marriage-sample.pdf" },
        { name: "Birth Certificate", rawLink: "/forms/birth-raw.pdf", sampleLink: "/forms/birth-sample.pdf" }
      ],
      icon: Building,
      color: "orange"
    }
  ];

  // 1. Voice Recording Function
  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.lang = 'fa-IR'; // Persian language support
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setVoiceText(transcript);
          
          // Add user message to chat
          const userMessage = { type: 'user', text: transcript, timestamp: new Date() };
          setChatHistory(prev => [...prev, userMessage]);
          
          // Simulate AI response
          setTimeout(() => {
            const aiReply = `من درخواست شما را به زبان فارسی درک کردم: "${transcript}". من به شما در تکمیل فرم کمک خواهم کرد. لطفاً اطلاعات بیشتری در مورد وضعیت شخصی خود ارائه دهید.`;
            setChatHistory(prev => [...prev, { type: 'ai', text: aiReply, timestamp: new Date() }]);
            
            // Generate form preview
            setFormPreviewData({
              formType: selectedForm?.form?.name || 'Selected Form',
              fields: [
                { label: 'Full Name', value: 'Extracted from voice' },
                { label: 'Address', value: 'Extracted from voice' },
                { label: 'Phone Number', value: 'Extracted from voice' },
                { label: 'Date of Birth', value: 'Extracted from voice' }
              ]
            });
          }, 1500);
        };
        
        recognition.onerror = () => {
          setIsRecording(false);
          alert('Voice recognition not supported in this browser. Please use Chrome or Safari.');
        };
        
        recognition.onend = () => {
          setIsRecording(false);
        };
        
        recognition.start();
      } else {
        alert('Voice recognition not supported in this browser. Please use Chrome or Safari.');
        setIsRecording(false);
      }
    }
  };

  // 8. Manual Text Input Function
  const handleTextSubmit = () => {
    if (userInput.trim()) {
      const userMessage = { type: 'user', text: userInput, timestamp: new Date() };
      setChatHistory(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const aiReply = `Based on your input: "${userInput}", I will help you fill out the form. The information will now be automatically inserted into the appropriate fields.`;
        setChatHistory(prev => [...prev, { type: 'ai', text: aiReply, timestamp: new Date() }]);
        
        setFormPreviewData({
          formType: selectedForm?.form?.name || 'Selected Form',
          fields: [
            { label: 'Full Name', value: 'Extracted from text' },
            { label: 'Address', value: 'Extracted from text' },
            { label: 'Phone Number', value: 'Extracted from text' },
            { label: 'Email', value: 'Extracted from text' }
          ]
        });
      }, 1000);
      
      setUserInput('');
    }
  };

  // 4. File Upload Function
  const handleFileUpload = (event: any) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  // Form Selection Function
  const handleFormSelection = (center: any, form: any) => {
    setSelectedForm({ center: center.name, form });
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
              🤖 Smart Form Assistant
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Official Form Filling
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Fill out official documents using AI conversation in your native language - Simple, fast and accurate
            </p>
          </div>
        </div>
      </section>

      {/* 4. Document Upload Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              📂 Upload Documents
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Primary Documents (Photo or PDF)
                </CardTitle>
                <CardDescription>
                  Upload your ID documents, previous forms, or other relevant files
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-600 mb-2">
                    Drag files here or click to select
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Supported formats: PDF, JPG, PNG (Max. 10MB)
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
                      Select Files
                    </Button>
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Uploaded Files:</h4>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            🌐 Select Office and Form
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        <div className="font-medium text-sm text-gray-700">{form.name}</div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => handleFormSelection(center, form)}
                          >
                            <FileText className="w-4 h-4 mr-1" />
                            Fill Out
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(form.rawLink, '_blank')}
                          >
                            📄 Raw
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(form.sampleLink, '_blank')}
                          >
                            📝 Sample
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
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Smart Form: {selectedForm.form.name}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* 1. Voice Recording Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🎙️ Voice Input (Persian Supported)
                    </CardTitle>
                    <CardDescription>
                      Talk to AI in your native language - Persian is fully supported
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
                      {isRecording ? '🔴 Stop Recording' : '🎙️ Start Voice Recording'}
                    </Button>
                    {voiceText && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-lg text-left">
                        <p className="text-sm font-medium">Recognized Text:</p>
                        <p className="text-sm">{voiceText}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* 8. Manual Text Input Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      ✍️ Manual Text Input
                    </CardTitle>
                    <CardDescription>
                      For users who prefer text instead of voice
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Describe your situation or enter your information here..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="min-h-32"
                    />
                    <Button onClick={handleTextSubmit} className="mt-4 w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Process Text
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* 2. AI Chat Section */}
              {chatHistory.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      💬 Chat with AI
                    </CardTitle>
                    <CardDescription>
                      Conversation history with AI assistant
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
                    📝 Form Preview
                  </CardTitle>
                  <CardDescription>
                    Live preview of the form filled by AI
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
                          Download PDF
                        </Button>
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Full Preview
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-8 rounded-lg text-center">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-gray-500">
                        Form preview will appear after AI processing
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 3. Human Consultant Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🧑‍💼 Contact Human Consultant
                  </CardTitle>
                  <CardDescription>
                    Connect with a consultant for personal help and final approval
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-green-600" />
                      </div>
                      <Button className="w-full mb-2">
                        💬 Chat with Consultant
                      </Button>
                      <p className="text-xs text-gray-500">
                        Instant help via text chat
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <Button variant="outline" className="w-full mb-2">
                        📹 Video Call
                      </Button>
                      <p className="text-xs text-gray-500">
                        Personal consultation via video
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
                    <p className="text-sm text-blue-800">
                      📞 Available: Mon-Fri 9:00-17:00 | ⏱️ Average wait time: 2 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Final Confirmation Button */}
              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-xl px-12 py-6">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  ✅ Confirm & Submit
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  The completed form will be sent for final review and processing
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

export default Formino;
