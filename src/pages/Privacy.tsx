
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Datenschutz</h1>
            <p className="text-xl text-gray-600">Wie wir Ihre persönlichen Daten schützen und verwenden.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
