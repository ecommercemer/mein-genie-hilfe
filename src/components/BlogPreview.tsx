
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Anmeldung in Deutschland: Der komplette Leitfaden 2024",
      excerpt: "Alles was Sie über die Anmeldung bei deutschen Behörden wissen müssen - Schritt für Schritt erklärt.",
      category: "Behördengänge",
      date: "15. März 2024",
      author: "Team Mein Genie",
      readTime: "5 min"
    },
    {
      title: "Visa-Verlängerung leicht gemacht",
      excerpt: "Praktische Tipps und häufige Fehler bei der Visa-Verlängerung vermeiden.",
      category: "Visa & Aufenthalt",
      date: "12. März 2024",
      author: "Dr. Sarah Müller",
      readTime: "8 min"
    },
    {
      title: "Digitale Helfer für Senioren",
      excerpt: "Wie moderne Technologie älteren Menschen bei Behördengängen hilft.",
      category: "Digitale Hilfe",
      date: "10. März 2024",
      author: "Michael Weber",
      readTime: "6 min"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hilfreiche Artikel & Tipps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bleiben Sie informiert mit unserem Blog voller praktischer Ratschläge 
              und Updates rund um deutsche Bürokratie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl px-8">
              Alle Artikel anzeigen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
