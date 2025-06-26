
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en' | 'fa' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  de: {
    // Navigation
    'nav.services': 'Services',
    'nav.formino': 'Formino',
    'nav.termino': 'Termino',
    'nav.about': 'Über uns',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.signup': 'Registrieren',
    
    // Hero
    'hero.title': 'Der einfachste Weg durch die deutsche Bürokratie',
    'hero.subtitle': 'Sparen Sie Zeit, vermeiden Sie Stress. Unser KI-Assistent füllt Formulare aus und vereinbart Termine für Sie.',
    'hero.cta.formino': 'Jetzt Formular starten',
    'hero.cta.termino': 'Termin buchen lassen',
    'hero.filled': 'Automatisch ausgefüllt',
    
    // Problems
    'problems.title': 'Probleme, die wir lösen',
    'problems.subtitle': 'Wir verstehen die Herausforderungen des deutschen Verwaltungssystems',
    'problems.forms': 'Komplexe Formulare',
    'problems.forms.desc': 'Deutsche Bürokratie kann überwältigend sein, besonders in einer neuen Sprache.',
    'problems.language': 'Sprachbarrieren',
    'problems.language.desc': 'Schwierige Fachbegriffe und komplizierte Anweisungen verstehen.',
    'problems.time': 'Zeitverlust',
    'problems.time.desc': 'Stunden damit verbringen, Formulare auszufüllen und Termine zu vereinbaren.',
    
    // Services
    'services.title': 'Unsere Services',
    'services.subtitle': 'Intelligente Lösungen für deutsche Bürokratie',
    'services.formino.title': 'Formino',
    'services.formino.desc': 'KI-gestützte Formularausfüllung',
    'services.formino.detail': 'Laden Sie Ihr Formular hoch und lassen Sie unsere KI es automatisch ausfüllen.',
    'services.formino.download': 'Formino App herunterladen',
    'services.termino.title': 'Termino',
    'services.termino.desc': 'Automatische Terminbuchung',
    'services.termino.detail': 'Unser KI-Assistent ruft für Sie an und bucht Termine in perfektem Deutsch.',
    'services.termino.download': 'Termino App herunterladen',
    
    // How it works
    'how.title': 'So funktioniert es',
    'how.subtitle': 'In nur drei einfachen Schritten zu Ihrem Ziel',
    'how.upload': 'Upload',
    'how.upload.desc': 'Laden Sie Ihr Formular hoch, teilen Sie einen Link oder geben Sie Details ein.',
    'how.ai': 'KI-Analyse',
    'how.ai.desc': 'Unsere intelligente KI verarbeitet und analysiert Ihre Anfrage automatisch.',
    'how.check': 'Prüfen & Senden',
    'how.check.desc': 'Sie überprüfen das Ergebnis und geben Ihre finale Zustimmung.',
    
    // Trust
    'trust.title': 'Ihre Daten sind bei uns sicher',
    'trust.subtitle': 'Vertrauen und Sicherheit stehen bei uns an erster Stelle. Ihre Privatsphäre ist unser höchstes Gut.',
    'trust.local': 'Geräteinterne KI-Verarbeitung',
    'trust.local.desc': 'Ihre Daten verlassen niemals Ihr Gerät während der Verarbeitung',
    'trust.gdpr': 'DSGVO-konform',
    'trust.gdpr.desc': 'Vollständige Einhaltung europäischer Datenschutzbestimmungen',
    'trust.encryption': 'Ende-zu-Ende-Verschlüsselung',
    'trust.encryption.desc': 'Alle Ihre Daten sind durch modernste Verschlüsselung geschützt',
    'trust.control': 'Doppelte Benutzerprüfung',
    'trust.control.desc': 'Sie haben immer die finale Kontrolle vor dem Versenden',
    
    // Testimonials
    'testimonials.title': 'Was unsere Nutzer sagen',
    'testimonials.subtitle': 'Echte Erfahrungen von Menschen, die wir unterstützt haben',
    
    // Footer
    'footer.tagline': 'Bureaucracy, simplified. Ihr persönlicher Genius für Papierkram und Termine.',
    'footer.company': 'Unternehmen',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Rechtliches',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.phone': '+4917686315894'
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.formino': 'Formino',
    'nav.termino': 'Termino',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    
    // Hero
    'hero.title': 'The easiest way through German bureaucracy',
    'hero.subtitle': 'Save time, avoid stress. Our AI assistant fills out forms and books appointments for you.',
    'hero.cta.formino': 'Start Form Now',
    'hero.cta.termino': 'Book Appointment',
    'hero.filled': 'Automatically filled',
    
    // Problems
    'problems.title': 'Problems we solve',
    'problems.subtitle': 'We understand the challenges of the German administrative system',
    'problems.forms': 'Complex Forms',
    'problems.forms.desc': 'German bureaucracy can be overwhelming, especially in a new language.',
    'problems.language': 'Language Barriers',
    'problems.language.desc': 'Understanding difficult technical terms and complicated instructions.',
    'problems.time': 'Time Loss',
    'problems.time.desc': 'Spending hours filling out forms and booking appointments.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Smart solutions for German bureaucracy',
    'services.formino.title': 'Formino',
    'services.formino.desc': 'AI-powered form filling',
    'services.formino.detail': 'Upload your form and let our AI fill it out automatically.',
    'services.formino.download': 'Download Formino App',
    'services.termino.title': 'Termino',
    'services.termino.desc': 'Automatic appointment booking',
    'services.termino.detail': 'Our AI assistant calls for you and books appointments in perfect German.',
    'services.termino.download': 'Download Termino App',
    
    // How it works
    'how.title': 'How it works',
    'how.subtitle': 'Reach your goal in just three simple steps',
    'how.upload': 'Upload',
    'how.upload.desc': 'Upload your form, share a link, or enter details.',
    'how.ai': 'AI Analysis',
    'how.ai.desc': 'Our intelligent AI processes and analyzes your request automatically.',
    'how.check': 'Review & Send',
    'how.check.desc': 'You review the result and give your final approval.',
    
    // Trust
    'trust.title': 'Your data is safe with us',
    'trust.subtitle': 'Trust and security are our top priorities. Your privacy is our highest priority.',
    'trust.local': 'On-device AI processing',
    'trust.local.desc': 'Your data never leaves your device during processing',
    'trust.gdpr': 'GDPR compliant',
    'trust.gdpr.desc': 'Full compliance with European data protection regulations',
    'trust.encryption': 'End-to-end encryption',
    'trust.encryption.desc': 'All your data is protected by state-of-the-art encryption',
    'trust.control': 'Double user verification',
    'trust.control.desc': 'You always have final control before sending',
    
    // Testimonials
    'testimonials.title': 'What our users say',
    'testimonials.subtitle': 'Real experiences from people we have supported',
    
    // Footer
    'footer.tagline': 'Bureaucracy, simplified. Your personal genius for paperwork and appointments.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.phone': '+4917686315894'
  },
  fa: {
    // Navigation
    'nav.services': 'خدمات',
    'nav.formino': 'فورمینو',
    'nav.termino': 'ترمینو',
    'nav.about': 'درباره ما',
    'nav.blog': 'بلاگ',
    'nav.faq': 'سوالات متداول',
    'nav.contact': 'تماس',
    'nav.login': 'ورود',
    'nav.signup': 'ثبت نام',
    
    // Hero
    'hero.title': 'آسان‌ترین راه برای عبور از بوروکراسی آلمان',
    'hero.subtitle': 'در زمان صرفه‌جویی کنید، از استرس دوری کنید. دستیار هوش مصنوعی ما فرم‌ها را پر می‌کند و قرارهای ملاقات برای شما رزرو می‌کند.',
    'hero.cta.formino': 'شروع فرم اکنون',
    'hero.cta.termino': 'رزرو قرار ملاقات',
    'hero.filled': 'به طور خودکار پر شده',
    
    // Problems
    'problems.title': 'مشکلاتی که حل می‌کنیم',
    'problems.subtitle': 'ما چالش‌های سیستم اداری آلمان را درک می‌کنیم',
    'problems.forms': 'فرم‌های پیچیده',
    'problems.forms.desc': 'بوروکراسی آلمان می‌تواند طاقت‌فرسا باشد، به خصوص در زبان جدید.',
    'problems.language': 'موانع زبانی',
    'problems.language.desc': 'درک اصطلاحات فنی دشوار و دستورالعمل‌های پیچیده.',
    'problems.time': 'از دست دادن زمان',
    'problems.time.desc': 'ساعت‌ها وقت صرف پر کردن فرم‌ها و رزرو قرار ملاقات.',
    
    // Services
    'services.title': 'خدمات ما',
    'services.subtitle': 'راه‌حل‌های هوشمند برای بوروکراسی آلمان',
    'services.formino.title': 'فورمینو',
    'services.formino.desc': 'پر کردن فرم با هوش مصنوعی',
    'services.formino.detail': 'فرم خود را آپلود کنید و بگذارید هوش مصنوعی ما آن را به طور خودکار پر کند.',
    'services.formino.download': 'دانلود اپ فورمینو',
    'services.termino.title': 'ترمینو',
    'services.termino.desc': 'رزرو خودکار قرار ملاقات',
    'services.termino.detail': 'دستیار هوش مصنوعی ما برای شما تماس می‌گیرد و قرارهای ملاقات را به آلمانی عالی رزرو می‌کند.',
    'services.termino.download': 'دانلود اپ ترمینو',
    
    // How it works
    'how.title': 'نحوه کارکرد',
    'how.subtitle': 'تنها در سه مرحله ساده به هدف خود برسید',
    'how.upload': 'آپلود',
    'how.upload.desc': 'فرم خود را آپلود کنید، لینک را به اشتراک بگذارید یا جزئیات را وارد کنید.',
    'how.ai': 'تجزیه و تحلیل هوش مصنوعی',
    'how.ai.desc': 'هوش مصنوعی هوشمند ما درخواست شما را به طور خودکار پردازش و تجزیه و تحلیل می‌کند.',
    'how.check': 'بررسی و ارسال',
    'how.check.desc': 'شما نتیجه را بررسی می‌کنید و تأیید نهایی خود را می‌دهید.',
    
    // Trust
    'trust.title': 'داده‌های شما نزد ما امن است',
    'trust.subtitle': 'اعتماد و امنیت اولویت اول ما است. حریم خصوصی شما بالاترین اولویت ماست.',
    'trust.local': 'پردازش هوش مصنوعی در دستگاه',
    'trust.local.desc': 'داده‌های شما هرگز دستگاه شما را در طول پردازش ترک نمی‌کند',
    'trust.gdpr': 'مطابق با GDPR',
    'trust.gdpr.desc': 'انطباق کامل با قوانین حفاظت از داده‌های اروپایی',
    'trust.encryption': 'رمزگذاری سرتاسری',
    'trust.encryption.desc': 'تمام داده‌های شما توسط رمزگذاری پیشرفته محافظت می‌شود',
    'trust.control': 'تأیید دوگانه کاربر',
    'trust.control.desc': 'شما همیشه کنترل نهایی را قبل از ارسال دارید',
    
    // Testimonials
    'testimonials.title': 'آنچه کاربران ما می‌گویند',
    'testimonials.subtitle': 'تجربیات واقعی از افرادی که ما پشتیبانی کرده‌ایم',
    
    // Footer
    'footer.tagline': 'بوروکراسی، ساده شده. نابغه شخصی شما برای کاغذبازی و قرارهای ملاقات.',
    'footer.company': 'شرکت',
    'footer.services': 'خدمات',
    'footer.support': 'پشتیبانی',
    'footer.legal': 'قانونی',
    'footer.rights': 'تمام حقوق محفوظ است.',
    'footer.phone': '+4917686315894'
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.formino': 'فورمينو',
    'nav.termino': 'ترمينو',
    'nav.about': 'عنا',
    'nav.blog': 'المدونة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.signup': 'إنشاء حساب',
    
    // Hero
    'hero.title': 'أسهل طريق عبر البيروقراطية الألمانية',
    'hero.subtitle': 'وفر الوقت، تجنب التوتر. مساعدنا الذكي يملأ النماذج ويحجز المواعيد لك.',
    'hero.cta.formino': 'ابدأ النموذج الآن',
    'hero.cta.termino': 'احجز موعداً',
    'hero.filled': 'مُعبأ تلقائياً',
    
    // Problems
    'problems.title': 'المشاكل التي نحلها',
    'problems.subtitle': 'نحن نفهم تحديات النظام الإداري الألماني',
    'problems.forms': 'نماذج معقدة',
    'problems.forms.desc': 'البيروقراطية الألمانية قد تكون مرهقة، خاصة بلغة جديدة.',
    'problems.language': 'حواجز اللغة',
    'problems.language.desc': 'فهم المصطلحات التقنية الصعبة والتعليمات المعقدة.',
    'problems.time': 'ضياع الوقت',
    'problems.time.desc': 'قضاء ساعات في ملء النماذج وحجز المواعيد.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول ذكية للبيروقراطية الألمانية',
    'services.formino.title': 'فورمينو',
    'services.formino.desc': 'ملء النماذج بالذكاء الاصطناعي',
    'services.formino.detail': 'ارفع نموذجك ودع ذكاءنا الاصطناعي يملأه تلقائياً.',
    'services.formino.download': 'تحميل تطبيق فورمينو',
    'services.termino.title': 'ترمينو',
    'services.termino.desc': 'حجز المواعيد التلقائي',
    'services.termino.detail': 'مساعدنا الذكي يتصل نيابة عنك ويحجز المواعيد بألمانية مثالية.',
    'services.termino.download': 'تحميل تطبيق ترمينو',
    
    // How it works
    'how.title': 'كيف يعمل',
    'how.subtitle': 'اوصل إلى هدفك في ثلاث خطوات بسيطة فقط',
    'how.upload': 'رفع',
    'how.upload.desc': 'ارفع نموذجك، شارك رابطاً، أو أدخل التفاصيل.',
    'how.ai': 'تحليل الذكاء الاصطناعي',
    'how.ai.desc': 'ذكاءنا الاصطناعي الذكي يعالج ويحلل طلبك تلقائياً.',
    'how.check': 'مراجعة وإرسال',
    'how.check.desc': 'تراجع النتيجة وتعطي موافقتك النهائية.',
    
    // Trust
    'trust.title': 'بياناتك آمنة معنا',
    'trust.subtitle': 'الثقة والأمان هما أولويتنا الأولى. خصوصيتك هي أعلى أولوياتنا.',
    'trust.local': 'معالجة الذكاء الاصطناعي على الجهاز',
    'trust.local.desc': 'بياناتك لا تغادر جهازك أبداً أثناء المعالجة',
    'trust.gdpr': 'متوافق مع GDPR',
    'trust.gdpr.desc': 'امتثال كامل لقوانين حماية البيانات الأوروبية',
    'trust.encryption': 'تشفير من النهاية إلى النهاية',
    'trust.encryption.desc': 'جميع بياناتك محمية بتشفير متطور',
    'trust.control': 'التحقق المزدوج للمستخدم',
    'trust.control.desc': 'لديك دائماً السيطرة النهائية قبل الإرسال',
    
    // Testimonials
    'testimonials.title': 'ما يقوله مستخدمونا',
    'testimonials.subtitle': 'تجارب حقيقية من أشخاص دعمناهم',
    
    // Footer
    'footer.tagline': 'البيروقراطية، مبسطة. عبقريك الشخصي للأوراق والمواعيد.',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.phone': '+4917686315894'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
