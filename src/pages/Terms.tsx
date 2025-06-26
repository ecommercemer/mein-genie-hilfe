
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('footer.terms')}</h1>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen der Mein Genie GmbH.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">§ 2 Leistungen</h2>
              <p className="mb-4">
                Wir bieten KI-gestützte Services für die Bearbeitung deutscher Bürokratie, einschließlich Formularausfüllung 
                und Terminbuchung.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">§ 3 Preise und Zahlung</h2>
              <p className="mb-4">
                Die Preise sind auf unserer Website ersichtlich. Formino kostet €5 pro Formular, Termino €8 pro Termin.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">§ 4 Haftung</h2>
              <p className="mb-4">
                Wir garantieren eine 99,5%ige Genauigkeit unserer Services und bieten eine Geld-zurück-Garantie.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">§ 5 Kontakt</h2>
              <p>
                Kontakt: +4917686315894
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsPage;
