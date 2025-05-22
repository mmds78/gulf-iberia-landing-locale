
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Connecting Spain & UAE',
    'hero.subtitle': 'Premium Import-Export Solutions',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'Gulf Iberia',
    'about.subtitle': 'Your Partner in International Trade',
    'about.description': 'Specializing in premium import-export services between Spain and the United Arab Emirates, Gulf Iberia provides comprehensive logistics solutions backed by decades of industry expertise.',
    'about.expertise': 'With extensive knowledge of international trade regulations, cultural business practices, and market dynamics, we ensure seamless transactions across borders.',
    
    // Services
    'services.title': 'Our Expertise',
    'services.logistics': 'Logistics Management',
    'services.logistics.desc': 'End-to-end logistics solutions tailored to your specific requirements.',
    'services.customs': 'Customs Clearance',
    'services.customs.desc': 'Expert guidance through complex customs procedures in both regions.',
    'services.consulting': 'Trade Consulting',
    'services.consulting.desc': 'Strategic advice on market entry, regulations and business development.',
    
    // Footer
    'footer.rights': '© 2025 Gulf Iberia. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Conectando España y EAU',
    'hero.subtitle': 'Soluciones Premium de Importación y Exportación',
    'hero.cta': 'Saber Más',
    
    // About
    'about.title': 'Gulf Iberia',
    'about.subtitle': 'Su Socio en Comercio Internacional',
    'about.description': 'Especializada en servicios premium de importación y exportación entre España y los Emiratos Árabes Unidos, Gulf Iberia proporciona soluciones logísticas integrales respaldadas por décadas de experiencia en la industria.',
    'about.expertise': 'Con amplio conocimiento de las regulaciones comerciales internacionales, prácticas comerciales culturales y dinámica de mercado, garantizamos transacciones fluidas a través de fronteras.',
    
    // Services
    'services.title': 'Nuestra Experiencia',
    'services.logistics': 'Gestión Logística',
    'services.logistics.desc': 'Soluciones logísticas integrales adaptadas a sus necesidades específicas.',
    'services.customs': 'Despacho de Aduanas',
    'services.customs.desc': 'Orientación experta a través de complejos procedimientos aduaneros en ambas regiones.',
    'services.consulting': 'Consultoría Comercial',
    'services.consulting.desc': 'Asesoramiento estratégico sobre entrada al mercado, regulaciones y desarrollo de negocios.',
    
    // Footer
    'footer.rights': '© 2025 Gulf Iberia. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
