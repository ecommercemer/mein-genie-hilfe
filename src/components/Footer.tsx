
import { Sparkles, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Über uns", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Karriere", href: "#" },
      { name: "Presse", href: "#" }
    ],
    services: [
      { name: "Formino", href: "#" },
      { name: "Termino", href: "#" },
      { name: "Preise", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    support: [
      { name: "Hilfe-Center", href: "#" },
      { name: "Kontakt", href: "#" },
      { name: "Status", href: "#" },
      { name: "Feedback", href: "#" }
    ],
    legal: [
      { name: "Datenschutz", href: "#" },
      { name: "AGB", href: "#" },
      { name: "Impressum", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  const languages = [
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fa", name: "فارسی", flag: "🇮🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Mein Genie</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Bureaucracy, simplified. Ihr persönlicher Genius für Papierkram und Termine.
              Wir machen deutsche Bürokratie einfach und zugänglich für alle.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@mein-genie.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+49 30 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Berlin, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Selector & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Globe className="w-5 h-5 text-gray-400" />
            <div className="flex gap-2">
              {languages.map((lang, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-1 text-sm"
                >
                  <span className="mr-1">{lang.flag}</span>
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Mein Genie. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
