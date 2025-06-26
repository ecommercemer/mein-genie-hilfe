
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "german-visa-guide-2024",
      title: "Complete Guide to German Visa Application 2024",
      excerpt: "Everything you need to know about applying for a German visa, from required documents to common mistakes to avoid.",
      category: "Guides",
      author: "Mein Genie Team",
      date: "2024-01-15",
      readTime: "8 min read"
    },
    {
      slug: "anmeldung-process-explained",
      title: "Anmeldung in Germany: Step-by-Step Process",
      excerpt: "Learn how to register your address in Germany (Anmeldung) with our comprehensive guide and tips.",
      category: "Tips",
      author: "Sarah Miller",
      date: "2024-01-10",
      readTime: "5 min read"
    },
    {
      slug: "formino-ai-updates",
      title: "Formino AI Gets Smarter: New Features Update",
      excerpt: "Discover the latest improvements to our AI form-filling technology and how they can save you even more time.",
      category: "Updates",
      author: "Tech Team",
      date: "2024-01-05",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Guides", "Tips", "Updates"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mein Genie Blog
            </h1>
            <p className="text-xl text-gray-600">
              Guides, tips, and insights to help you navigate German bureaucracy with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge>{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">
                      <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Read More
                      </Link>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
