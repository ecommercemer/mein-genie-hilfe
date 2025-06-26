
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Feedback</h1>
            <p className="text-xl text-gray-600">Teilen Sie uns Ihre Meinung mit und helfen Sie uns zu verbessern.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
