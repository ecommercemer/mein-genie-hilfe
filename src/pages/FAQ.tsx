
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is Mein Genie?",
          answer: "Mein Genie is an AI-powered platform that helps you navigate German bureaucracy by automatically filling forms (Formino) and booking appointments (Termino)."
        },
        {
          question: "How does the AI work?",
          answer: "Our AI uses advanced OCR and natural language processing to understand forms and documents, then fills them out based on your profile information and preferences."
        },
        {
          question: "Is my data safe?",
          answer: "Yes, we use end-to-end encryption and process data locally whenever possible. We are GDPR compliant and never share your personal information."
        }
      ]
    },
    {
      title: "Formino (Form Assistant)",
      faqs: [
        {
          question: "What types of forms can Formino handle?",
          answer: "Formino can handle various German forms including visa applications, Anmeldung, insurance forms, university applications, tax returns, and more."
        },
        {
          question: "How accurate is the form filling?",
          answer: "Our AI achieves 99.5% accuracy. You always have the opportunity to review and edit before submission."
        },
        {
          question: "Can I upload photos of forms?",
          answer: "Yes, you can upload photos, PDFs, or provide web form links. Our OCR technology will extract the information automatically."
        }
      ]
    },
    {
      title: "Termino (Appointment Assistant)",
      faqs: [
        {
          question: "How does Termino book appointments?",
          answer: "Our AI assistant calls the office on your behalf, explains your needs in perfect German, and books the appointment at your preferred time."
        },
        {
          question: "What if the appointment needs to be rescheduled?",
          answer: "We handle all rescheduling automatically and notify you immediately of any changes."
        },
        {
          question: "Which offices can you call?",
          answer: "We can call most German government offices including Ausländerbehörde, Finanzamt, Rathaus, and many others."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      faqs: [
        {
          question: "How much does it cost?",
          answer: "Formino costs €5 per form and Termino costs €8 per appointment. No hidden fees or subscriptions."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and SEPA bank transfers."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer full refunds if we cannot successfully complete your form or book your appointment."
        }
      ]
    },
    {
      title: "Languages & Support",
      faqs: [
        {
          question: "What languages do you support?",
          answer: "Currently we support German, English, Persian (Farsi), and Arabic. More languages are coming soon."
        },
        {
          question: "How can I contact support?",
          answer: "You can reach our support team via email, chat, or through your user dashboard. We typically respond within 2 hours."
        },
        {
          question: "Are you available 24/7?",
          answer: "Our platform is available 24/7. For Termino, we make calls during business hours, but you can request appointments anytime."
        }
      ]
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Mein Genie, Formino, and Termino.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
