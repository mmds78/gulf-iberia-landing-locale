
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-gulf-gold text-gulf-navy border-gulf-gold hover:bg-gulf-gold/90"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'Español' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
