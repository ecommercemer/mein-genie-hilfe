import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Upload, Camera, Link as LinkIcon, FileText } from "lucide-react";

const MultipleInputMethodsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Upload className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Multiple Input Methods
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Various ways to input your documents and forms for processing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border rounded-xl">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">PDF Upload</h3>
                <p className="text-gray-600">Upload PDF documents directly</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Camera className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photo Capture</h3>
                <p className="text-gray-600">Take photos of paper forms</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <LinkIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Links</h3>
                <p className="text-gray-600">Share online form URLs</p>
              </div>
              <div className="text-center p-6 border rounded-xl">
                <Upload className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Batch Upload</h3>
                <p className="text-gray-600">Upload multiple files at once</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MultipleInputMethodsPage;
