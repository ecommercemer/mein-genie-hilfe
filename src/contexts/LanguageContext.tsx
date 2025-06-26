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
    
    // Common
    'common.back': 'Zurück',
    'common.download': 'Herunterladen',
    'common.learnmore': 'Mehr erfahren',
    'common.getstarted': 'Jetzt starten',
    'common.pricing': 'Preise',
    'common.faq': 'Häufige Fragen',
    
    // Hero
    'hero.title': 'Der einfachste Weg durch die deutsche Bürokratie',
    'hero.subtitle': 'Sparen Sie Zeit, vermeiden Sie Stress. Unser KI-Assistent füllt Formulare aus und vereinbart Termine für Sie.',
    'hero.cta.formino': 'Jetzt Formular starten',
    'hero.cta.termino': 'Termin buchen lassen',
    
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
    
    // Formino
    'formino.title': 'Formino: Intelligente Formular-Ausfüllung',
    'formino.subtitle': 'Nie wieder mit komplexen deutschen Formularen kämpfen. Unser KI-Assistent liest, versteht und füllt jedes Formular in Sekunden aus.',
    'formino.features.title': 'Leistungsstarke Features',
    'formino.features.subtitle': 'Fortschrittliche KI-Technologie, die deutsche Bürokratie versteht',
    'formino.ocr.title': 'OCR-Technologie',
    'formino.ocr.desc': 'Automatische Extraktion von Informationen aus gescannten Dokumenten und Formularen',
    'formino.input.title': 'Mehrere Eingabemethoden',
    'formino.input.desc': 'Fotos, PDFs oder Web-Formular-Links hochladen',
    'formino.validation.title': 'Intelligente Validierung',
    'formino.validation.desc': 'KI validiert alle Informationen vor der Übermittlung',
    'formino.security.title': 'Sichere Verarbeitung',
    'formino.security.desc': 'Alle Daten werden lokal mit Ende-zu-Ende-Verschlüsselung verarbeitet',
    
    // Termino
    'termino.title': 'Termino: KI-gestützte Terminbuchung',
    'termino.subtitle': 'Überspringen Sie Telefon-Warteschlangen und Sprachbarrieren. Unser KI-Assistent ruft an und bucht Termine für Sie in perfektem Deutsch.',
    'termino.features.title': 'Revolutionäre Features',
    'termino.features.subtitle': 'Die erste KI, die tatsächlich für Sie telefoniert',
    'termino.ai.title': 'KI-Telefon-Assistent',
    'termino.ai.desc': 'Unsere KI führt Telefonate in Ihrem Namen mit perfektem Deutsch',
    'termino.scheduling.title': 'Intelligente Terminplanung',
    'termino.scheduling.desc': 'Automatische Kalenderintegration und Konflikterkennung',
    'termino.confirmation.title': 'Bestätigungssystem',
    'termino.confirmation.desc': 'Sofortige Benachrichtigungen und Terminbestätigungen',
    'termino.communication.title': 'Sichere Kommunikation',
    'termino.communication.desc': 'Alle Gespräche werden zu Ihrer Sicherheit aufgezeichnet und verschlüsselt',
    
    // AI Features
    'ai.conversation.title': 'Natürliche Konversation',
    'ai.conversation.desc': 'Spricht natürlich mit deutschen Beamten',
    'ai.availability.title': '24/7 Verfügbarkeit',
    'ai.availability.desc': 'Führt Anrufe während der Geschäftszeiten durch',
    'ai.guarantee.title': 'Erfolgsgarantie',
    'ai.guarantee.desc': 'Stellt sicher, dass Termine erfolgreich gebucht werden',
    'ai.attempts.title': 'Mehrere Versuche',
    'ai.attempts.desc': 'Versucht es weiter, bis es erfolgreich ist',
    
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
    
    // Blog
    'blog.title': 'Mein Genie Blog',
    'blog.subtitle': 'Leitfäden, Tipps und Einblicke, um Ihnen zu helfen, die deutsche Bürokratie selbstbewusst zu navigieren.',
    'blog.readmore': 'Weiterlesen',
    'blog.categories.all': 'Alle',
    'blog.categories.guides': 'Leitfäden',
    'blog.categories.tips': 'Tipps',
    'blog.categories.updates': 'Updates',
    
    // Footer
    'footer.tagline': 'Bürokratie, vereinfacht. Ihr persönlicher Genius für Papierkram und Termine.',
    'footer.company': 'Unternehmen',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Rechtliches',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.phone': '+4917686315894',
    'footer.feedback': 'Feedback',
    'footer.help': 'Hilfe-Center',
    'footer.status': 'Status',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.imprint': 'Impressum',
    'footer.cookies': 'Cookies',
    'footer.career': 'Karriere',
    'footer.press': 'Presse',
    'footer.prices': 'Preise'
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
    
    // Common
    'common.back': 'Back',
    'common.download': 'Download',
    'common.learnmore': 'Learn More',
    'common.getstarted': 'Get Started',
    'common.pricing': 'Pricing',
    'common.faq': 'FAQ',
    
    // Hero
    'hero.title': 'The easiest way through German bureaucracy',
    'hero.subtitle': 'Save time, avoid stress. Our AI assistant fills out forms and books appointments for you.',
    'hero.cta.formino': 'Start Form Now',
    'hero.cta.termino': 'Book Appointment',
    
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
    
    // Formino
    'formino.title': 'Formino: Smart Form Autofill',
    'formino.subtitle': 'Never struggle with complex German forms again. Our AI assistant reads, understands, and fills out any form in seconds.',
    'formino.features.title': 'Powerful Features',
    'formino.features.subtitle': 'Advanced AI technology that understands German bureaucracy',
    'formino.ocr.title': 'OCR Technology',
    'formino.ocr.desc': 'Automatically extract information from scanned documents and forms',
    'formino.input.title': 'Multiple Input Methods',
    'formino.input.desc': 'Upload photos, PDFs, or paste web form links',
    'formino.validation.title': 'Smart Validation',
    'formino.validation.desc': 'AI validates all information before submission',
    'formino.security.title': 'Secure Processing',
    'formino.security.desc': 'All data processed locally with end-to-end encryption',
    
    // Termino
    'termino.title': 'Termino: AI-Powered Appointment Booking',
    'termino.subtitle': 'Skip the phone queues and language barriers. Our AI assistant calls and books appointments for you in perfect German.',
    'termino.features.title': 'Revolutionary Features',
    'termino.features.subtitle': 'The first AI that actually makes phone calls for you',
    'termino.ai.title': 'AI Phone Assistant',
    'termino.ai.desc': 'Our AI makes phone calls on your behalf with perfect German',
    'termino.scheduling.title': 'Smart Scheduling',
    'termino.scheduling.desc': 'Automatic calendar integration and conflict detection',
    'termino.confirmation.title': 'Confirmation System',
    'termino.confirmation.desc': 'Instant notifications and appointment confirmations',
    'termino.communication.title': 'Secure Communication',
    'termino.communication.desc': 'All conversations are recorded and encrypted for your safety',
    
    // AI Features
    'ai.conversation.title': 'Natural Conversation',
    'ai.conversation.desc': 'Speaks naturally with German officials',
    'ai.availability.title': '24/7 Availability',
    'ai.availability.desc': 'Makes calls during business hours',
    'ai.guarantee.title': 'Success Guarantee',
    'ai.guarantee.desc': 'Ensures appointments are booked successfully',
    'ai.attempts.title': 'Multiple Attempts',
    'ai.attempts.desc': 'Keeps trying until successful',
    
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
    
    // Blog
    'blog.title': 'Mein Genie Blog',
    'blog.subtitle': 'Guides, tips, and insights to help you navigate German bureaucracy with confidence.',
    'blog.readmore': 'Read More',
    'blog.categories.all': 'All',
    'blog.categories.guides': 'Guides',
    'blog.categories.tips': 'Tips',
    'blog.categories.updates': 'Updates',
    
    // Footer
    'footer.tagline': 'Bureaucracy, simplified. Your personal genius for paperwork and appointments.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.phone': '+4917686315894',
    'footer.feedback': 'Feedback',
    'footer.help': 'Help Center',
    'footer.status': 'Status',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.imprint': 'Imprint',
    'footer.cookies': 'Cookies',
    'footer.career': 'Career',
    'footer.press': 'Press',
    'footer.prices': 'Prices'
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
    
    // Common
    'common.back': 'بازگشت',
    'common.download': 'دانلود',
    'common.learnmore': 'بیشتر بدانید',
    'common.getstarted': 'شروع کنید',
    'common.pricing': 'قیمت‌گذاری',
    'common.faq': 'سوالات متداول',
    
    // Hero
    'hero.title': 'آسان‌ترین راه برای عبور از بوروکراسی آلمان',
    'hero.subtitle': 'در زمان صرفه‌جویی کنید، از استرس دوری کنید. دستیار هوش مصنوعی ما فرم‌ها را پر می‌کند و قرارهای ملاقات برای شما رزرو می‌کند.',
    'hero.cta.formino': 'شروع فرم اکنون',
    'hero.cta.termino': 'رزرو قرار ملاقات',
    
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
    
    // Formino
    'formino.title': 'فورمینو: پر کردن هوشمند فرم',
    'formino.subtitle': 'دیگر هرگز با فرم‌های پیچیده آلمانی دست و پنجه نرم نکنید. دستیار هوش مصنوعی ما هر فرمی را در چند ثانیه می‌خواند، درک می‌کند و پر می‌کند.',
    'formino.features.title': 'ویژگی‌های قدرتمند',
    'formino.features.subtitle': 'فناوری پیشرفته هوش مصنوعی که بوروکراسی آلمان را درک می‌کند',
    'formino.ocr.title': 'فناوری OCR',
    'formino.ocr.desc': 'استخراج خودکار اطلاعات از اسناد و فرم‌های اسکن شده',
    'formino.input.title': 'روش‌های ورودی متعدد',
    'formino.input.desc': 'آپلود عکس، PDF یا لینک فرم وب',
    'formino.validation.title': 'اعتبارسنجی هوشمند',
    'formino.validation.desc': 'هوش مصنوعی تمام اطلاعات را قبل از ارسال اعتبارسنجی می‌کند',
    'formino.security.title': 'پردازش امن',
    'formino.security.desc': 'تمام داده‌ها به صورت محلی با رمزگذاری سرتاسری پردازش می‌شوند',
    
    // Termino
    'termino.title': 'ترمینو: رزرو قرار ملاقات با هوش مصنوعی',
    'termino.subtitle': 'از صف‌های تلفنی و موانع زبانی بگذرید. دستیار هوش مصنوعی ما تماس می‌گیرد و قرارهای ملاقات را به آلمانی عالی برای شما رزرو می‌کند.',
    'termino.features.title': 'ویژگی‌های انقلابی',
    'termino.features.subtitle': 'اولین هوش مصنوعی که واقعاً برای شما تماس می‌گیرد',
    'termino.ai.title': 'دستیار تلفنی هوش مصنوعی',
    'termino.ai.desc': 'هوش مصنوعی ما از طرف شما با آلمانی عالی تماس می‌گیرد',
    'termino.scheduling.title': 'برنامه‌ریزی هوشمند',
    'termino.scheduling.desc': 'ادغام خودکار تقویم و تشخیص تداخل',
    'termino.confirmation.title': 'سیستم تأیید',
    'termino.confirmation.desc': 'اعلان‌ها و تأییدیه‌های فوری قرار ملاقات',
    'termino.communication.title': 'ارتباط امن',
    'termino.communication.desc': 'تمام مکالمات برای امنیت شما ضبط و رمزگذاری می‌شوند',
    
    // AI Features
    'ai.conversation.title': 'مکالمه طبیعی',
    'ai.conversation.desc': 'به طور طبیعی با مقامات آلمانی صحبت می‌کند',
    'ai.availability.title': 'دسترسی ۲۴/۷',
    'ai.availability.desc': 'در ساعات کاری تماس می‌گیرد',
    'ai.guarantee.title': 'تضمین موفقیت',
    'ai.guarantee.desc': 'اطمینان از رزرو موفق قرارهای ملاقات',
    'ai.attempts.title': 'تلاش‌های متعدد',
    'ai.attempts.desc': 'تا موفقیت ادامه می‌دهد',
    
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
    
    // Blog
    'blog.title': 'بلاگ من جنی',
    'blog.subtitle': 'راهنماها، نکات و بینش‌هایی برای کمک به شما در پیمایش بوروکراسی آلمان با اعتماد به نفس.',
    'blog.readmore': 'ادامه مطلب',
    'blog.categories.all': 'همه',
    'blog.categories.guides': 'راهنماها',
    'blog.categories.tips': 'نکات',
    'blog.categories.updates': 'به‌روزرسانی‌ها',
    
    // Footer
    'footer.tagline': 'بوروکراسی، ساده شده. نابغه شخصی شما برای کاغذبازی و قرارهای ملاقات.',
    'footer.company': 'شرکت',
    'footer.services': 'خدمات',
    'footer.support': 'پشتیبانی',
    'footer.legal': 'قانونی',
    'footer.rights': 'تمام حقوق محفوظ است.',
    'footer.phone': '+4917686315894',
    'footer.feedback': 'بازخورد',
    'footer.help': 'مرکز راهنمایی',
    'footer.status': 'وضعیت',
    'footer.privacy': 'حریم خصوصی',
    'footer.terms': 'شرایط',
    'footer.imprint': 'مهر',
    'footer.cookies': 'کوکی‌ها',
    'footer.career': 'شغل',
    'footer.press': 'مطبوعات',
    'footer.prices': 'قیمت‌ها'
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
    
    // Common
    'common.back': 'رجوع',
    'common.download': 'تحميل',
    'common.learnmore': 'اعرف المزيد',
    'common.getstarted': 'ابدأ',
    'common.pricing': 'التسعير',
    'common.faq': 'الأسئلة الشائعة',
    
    // Hero
    'hero.title': 'أسهل طريق عبر البيروقراطية الألمانية',
    'hero.subtitle': 'وفر الوقت، تجنب التوتر. مساعدنا الذكي يملأ النماذج ويحجز المواعيد لك.',
    'hero.cta.formino': 'ابدأ النموذج الآن',
    'hero.cta.termino': 'احجز موعداً',
    
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
    
    // Formino
    'formino.title': 'فورمينو: ملء النماذج الذكي',
    'formino.subtitle': 'لا تعاني أبداً مع النماذج الألمانية المعقدة مرة أخرى. مساعدنا الذكي يقرأ ويفهم ويملأ أي نموذج في ثوانٍ.',
    'formino.features.title': 'ميزات قوية',
    'formino.features.subtitle': 'تقنية ذكاء اصطناعي متقدمة تفهم البيروقراطية الألمانية',
    'formino.ocr.title': 'تقنية OCR',
    'formino.ocr.desc': 'استخراج المعلومات تلقائياً من المستندات والنماذج الممسوحة ضوئياً',
    'formino.input.title': 'طرق إدخال متعددة',
    'formino.input.desc': 'رفع الصور أو ملفات PDF أو لصق روابط النماذج الإلكترونية',
    'formino.validation.title': 'التحقق الذكي',
    'formino.validation.desc': 'الذكاء الاصطناعي يتحقق من جميع المعلومات قبل الإرسال',
    'formino.security.title': 'المعالجة الآمنة',
    'formino.security.desc': 'جميع البيانات تُعالج محلياً مع التشفير من النهاية إلى النهاية',
    
    // Termino
    'termino.title': 'ترمينو: حجز المواعيد بالذكاء الاصطناعي',
    'termino.subtitle': 'تخطى طوابير الهاتف وحواجز اللغة. مساعدنا الذكي يتصل ويحجز المواعيد لك بألمانية مثالية.',
    'termino.features.title': 'ميزات ثورية',
    'termino.features.subtitle': 'أول ذكاء اصطناعي يقوم بالمكالمات الهاتفية فعلياً من أجلك',
    'termino.ai.title': 'مساعد الهاتف الذكي',
    'termino.ai.desc': 'ذكاؤنا الاصطناعي يقوم بالمكالمات نيابة عنك بألمانية مثالية',
    'termino.scheduling.title': 'الجدولة الذكية',
    'termino.scheduling.desc': 'تكامل تلقائي مع التقويم واكتشاف التعارضات',
    'termino.confirmation.title': 'نظام التأكيد',
    'termino.confirmation.desc': 'إشعارات فورية وتأكيدات المواعيد',
    'termino.communication.title': 'التواصل الآمن',
    'termino.communication.desc': 'جميع المحادثات مسجلة ومشفرة لسلامتك',
    
    // AI Features
    'ai.conversation.title': 'محادثة طبيعية',
    'ai.conversation.desc': 'يتحدث بطبيعية مع المسؤولين الألمان',
    'ai.availability.title': 'متاح ٢٤/٧',
    'ai.availability.desc': 'يقوم بالمكالمات خلال ساعات العمل',
    'ai.guarantee.title': 'ضمان النجاح',
    'ai.guarantee.desc': 'يضمن حجز المواعيد بنجاح',
    'ai.attempts.title': 'محاولات متعددة',
    'ai.attempts.desc': 'يستمر في المحاولة حتى النجاح',
    
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
    
    // Blog
    'blog.title': 'مدونة مين جيني',
    'blog.subtitle': 'أدلة ونصائح ورؤى لمساعدتك على التنقل في البيروقراطية الألمانية بثقة.',
    'blog.readmore': 'اقرأ المزيد',
    'blog.categories.all': 'الكل',
    'blog.categories.guides': 'أدلة',
    'blog.categories.tips': 'نصائح',
    'blog.categories.updates': 'تحديثات',
    
    // Footer
    'footer.tagline': 'البيروقراطية، مبسطة. عبقريك الشخصي للأوراق والمواعيد.',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.phone': '+4917686315894',
    'footer.feedback': 'تعليقات',
    'footer.help': 'مركز المساعدة',
    'footer.status': 'الحالة',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
    'footer.imprint': 'بصمة',
    'footer.cookies': 'ملفات تعريف الارتباط',
    'footer.career': 'مهنة',
    'footer.press': 'صحافة',
    'footer.prices': 'الأسعار'
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
