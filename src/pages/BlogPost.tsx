
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    title: "Complete Guide to German Visa Application 2024",
    excerpt: "Everything you need to know about applying for a German visa, from required documents to common mistakes to avoid.",
    category: "Guides",
    author: "Mein Genie Team",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
      <h2>Introduction</h2>
      <p>Applying for a German visa can be a complex process, but with the right preparation and understanding of the requirements, you can successfully navigate through it. This comprehensive guide will walk you through everything you need to know.</p>
      
      <h2>Types of German Visas</h2>
      <p>Germany offers several types of visas depending on your purpose of visit:</p>
      <ul>
        <li>Tourist/Visitor Visa (Schengen Visa)</li>
        <li>Student Visa</li>
        <li>Work Visa</li>
        <li>Family Reunion Visa</li>
        <li>Business Visa</li>
      </ul>
      
      <h2>Required Documents</h2>
      <p>The basic documents required for most German visa applications include:</p>
      <ul>
        <li>Valid passport</li>
        <li>Completed visa application form</li>
        <li>Passport-sized photographs</li>
        <li>Travel insurance</li>
        <li>Proof of financial means</li>
        <li>Accommodation proof</li>
      </ul>
      
      <h2>Application Process</h2>
      <p>The German visa application process typically follows these steps:</p>
      <ol>
        <li>Determine the type of visa you need</li>
        <li>Gather all required documents</li>
        <li>Schedule an appointment at the German consulate</li>
        <li>Attend the appointment and submit your application</li>
        <li>Wait for processing and decision</li>
      </ol>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Here are some common mistakes that can lead to visa rejection:</p>
      <ul>
        <li>Incomplete documentation</li>
        <li>Insufficient financial proof</li>
        <li>Lack of travel insurance</li>
        <li>Inconsistent information in application</li>
      </ul>
      
      <h2>How Mein Genie Can Help</h2>
      <p>With Mein Genie's Formino service, you can simplify your visa application process. Our AI assistant can help you fill out the application forms correctly and ensure you have all the required documents.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <Badge className="mb-4">{blogPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {blogPost.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{blogPost.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPost.date).toLocaleDateString()}
                </div>
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need help with your German visa application?
              </h3>
              <p className="text-gray-600 mb-6">
                Let our AI assistant help you fill out your visa application forms correctly.
              </p>
              <Link to="/formino">
                <Button size="lg">
                  Try Formino Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
