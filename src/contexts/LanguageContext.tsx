
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'pl';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.skills': 'Skills',
  'nav.education': 'Education',
  'nav.contact': 'Contact',
  
  // Hero section
  'hero.subtitle': 'Empowering experts to reach their clients through innovative strategies',
  'hero.description': 'Specializing in LinkedIn, video content, and digital advertising to help coaches, mentors, and consultants expand their reach without traditional client-hunting techniques.',
  'hero.button.schedule': 'Schedule a Free Session',
  'hero.button.contact': 'Contact Me',
  
  // About section
  'about.title': 'About Me',
  'about.p1': 'Filip Nowicki specializes in helping experts such as coaches, mentors, and consultants expand their reach and find clients without the need for traditional client-hunting techniques.',
  'about.p2': 'With a strategic focus on LinkedIn, video content, and digital advertising, Filip teaches how to effectively communicate with targeted audiences and create sustainable digital businesses.',
  'about.p3': 'His approach includes uncovering ideal clients, refining service offerings, and building subscription models that allow businesses to grow and scale on their own terms.',
  
  // Experience section
  'experience.title': 'Work Experience',
  
  // Skills section
  'skills.title': 'Skills',
  
  // Education section
  'education.title': 'Education',
  
  // Publications section
  'publications.title': 'Publications',
  'publications.publisher': 'Publisher',
  'publications.published': 'Published',
  
  // Contact section
  'contact.title': 'Contact',
  'contact.email': 'Email',
  'contact.websites': 'Websites',
  'contact.schedule': 'Schedule a Meeting',
  'contact.book': 'Book a free strategic session',
  'contact.ready': 'Ready to transform your business and attract more clients?',
  'contact.cta': 'Schedule Your Free Strategic Session',
  
  // Footer
  'footer.tagline': 'Empowering experts to reach their clients',
  'footer.rights': 'All rights reserved.',
};

// Polish translations
const plTranslations: Record<string, string> = {
  // Navigation
  'nav.about': 'O mnie',
  'nav.experience': 'Doświadczenie',
  'nav.skills': 'Umiejętności',
  'nav.education': 'Edukacja',
  'nav.contact': 'Kontakt',
  
  // Hero section
  'hero.subtitle': 'Wspieranie ekspertów w docieraniu do klientów poprzez innowacyjne strategie',
  'hero.description': 'Specjalizując się w LinkedIn, treściach wideo i reklamie cyfrowej, aby pomóc trenerom, mentorom i konsultantom w zwiększeniu zasięgu bez tradycyjnych technik pozyskiwania klientów.',
  'hero.button.schedule': 'Zaplanuj bezpłatną sesję',
  'hero.button.contact': 'Skontaktuj się',
  
  // About section
  'about.title': 'O mnie',
  'about.p1': 'Filip Nowicki specjalizuje się w pomaganiu ekspertom, takim jak trenerzy, mentorzy i konsultanci, w zwiększaniu zasięgu i znajdowaniu klientów bez konieczności stosowania tradycyjnych technik poszukiwania klientów.',
  'about.p2': 'Ze strategicznym naciskiem na LinkedIn, treści wideo i reklamę cyfrową, Filip uczy, jak skutecznie komunikować się z docelowymi odbiorcami i tworzyć zrównoważone biznesy cyfrowe.',
  'about.p3': 'Jego podejście obejmuje odkrywanie idealnych klientów, udoskonalanie oferty usług i budowanie modeli subskrypcyjnych, które pozwalają firmom rozwijać się i skalować na własnych warunkach.',
  
  // Experience section
  'experience.title': 'Doświadczenie zawodowe',
  
  // Skills section
  'skills.title': 'Umiejętności',
  
  // Education section
  'education.title': 'Edukacja',
  
  // Publications section
  'publications.title': 'Publikacje',
  'publications.publisher': 'Wydawca',
  'publications.published': 'Opublikowano',
  
  // Contact section
  'contact.title': 'Kontakt',
  'contact.email': 'Email',
  'contact.websites': 'Strony internetowe',
  'contact.schedule': 'Zaplanuj spotkanie',
  'contact.book': 'Zarezerwuj bezpłatną sesję strategiczną',
  'contact.ready': 'Gotowy, aby przekształcić swój biznes i przyciągnąć więcej klientów?',
  'contact.cta': 'Zaplanuj bezpłatną sesję strategiczną',
  
  // Footer
  'footer.tagline': 'Wspieranie ekspertów w docieraniu do klientów',
  'footer.rights': 'Wszelkie prawa zastrzeżone.',
};

// Map of all translations
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  pl: plTranslations,
};

// Provider component
type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translate function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
