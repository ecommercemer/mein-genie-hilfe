
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Camera, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const UploadPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('how.upload')}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t('how.upload.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Upload Methods</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Document Upload</h3>
                <p className="text-gray-600">Upload PDF files or scanned documents directly</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Camera className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photo Capture</h3>
                <p className="text-gray-600">Take photos of physical forms with your camera</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <LinkIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Forms</h3>
                <p className="text-gray-600">Share links to online forms for automatic processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadPage;
