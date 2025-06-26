
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BackButton />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('footer.privacy')}</h1>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Datenerfassung und -verwendung</h2>
              <p className="mb-4">
                Wir erheben und verwenden personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Dienste erforderlich ist. 
                Alle Daten werden nach den strengsten Sicherheitsstandards verarbeitet.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">2. Datensicherheit</h2>
              <p className="mb-4">
                Ihre Daten sind bei uns sicher. Wir verwenden modernste Verschlüsselungstechnologien und verarbeiten alle sensiblen 
                Informationen lokal auf Ihrem Gerät.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">3. DSGVO-Konformität</h2>
              <p className="mb-4">
                Wir sind vollständig DSGVO-konform und gewährleisten alle Rechte gemäß der Europäischen Datenschutz-Grundverordnung.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">4. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz kontaktieren Sie uns unter: +4917686315894
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
